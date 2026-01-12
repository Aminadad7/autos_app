<?php 
namespace App\Controllers; 
 
use App\Models\Motor; 
use App\Models\MotorImage; 
use App\Middleware\JwtMiddleware; 
 
class MotorController 
{ 
    public function index() 
    { 
        return response()->json( 
            Motor::with('images')->paginate(8) 
        ); 
    } 
 
    public function show($id) 
    { 
        if(Motor::find($id) == null){ 
            return response()->json(['error'=>'Motor not found'],404); 
        }
        return response()->json( 
            Motor::with('images')->findOrFail($id) 
        ); 
    } 
 
    public function store()
{
    JwtMiddleware::check();

    \DB::beginTransaction();

    try {
        $data = request()->all();

        if ($file = request()->file('image')) {
            $name = uniqid().'_'.$file->getClientOriginalName();
            $file->move('uploads/motors', $name);
            $data['image'] = url("uploads/motors/$name");
        }

        $motor = Motor::create($data);

        if ($gallery = request()->file('gallery')) {
            foreach ($gallery as $img) {
                $gname = uniqid().'_'.$img->getClientOriginalName();
                $img->move('uploads/motors', $gname);

                MotorImage::create([
                    'motor_id' => $motor->id,
                    'image' => url("uploads/motors/$gname")
                ]);
            }
        }

        \DB::commit();
        return response()->json($motor, 201);

    } catch (\Exception $e) {
        \DB::rollBack();
        return response()->json(['error'=>'Error saving motor'],500);
    }
}

 
    public function destroy($id) 
    { 
        JwtMiddleware::check(); 
        Motor::destroy($id); 
        return response()->json(['deleted'=>true]); 
    } 
} 