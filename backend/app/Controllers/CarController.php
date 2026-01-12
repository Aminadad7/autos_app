<?php 
namespace App\Controllers; 
use App\Models\Car; 
use App\Middleware\JwtMiddleware; 

class CarController
{
    public function index()
    {
        $search = request()->get('search');

        $cars = Car::with('images')
            ->when($search, fn($q) =>
                $q->where('name','LIKE',"%$search%")
            )
            ->paginate(8);

        return response()->json($cars);
    }

    public function show($id)
    {
        $car = Car::with('images')->find($id);

        if (!$car) {
            return response()->json(['error'=>'Car not found'],404);
        }

        return response()->json($car);
    }

    public function store()
    {
        JwtMiddleware::check();

        $data = request()->all();

        if ($file = request()->file('image')) {
            $name = uniqid().'_'.$file->getClientOriginalName();
            $file->move('uploads/cars', $name);
            $data['image'] = url("uploads/cars/$name");
        }

        return response()->json(
            Car::create($data),
            201
        );
    }
}

// namespace App\Controllers; 
// use App\Models\Car; 
// use App\Middleware\JwtMiddleware; 
// class CarController 
// { 
//     public function index() 
//     { 
//         return response()->json(Car::paginate(8)); 
//     } 
 
//     public function show($id) 
//     { 
//         if(Car::find($id) == null){ 
//             return response()->json(['error'=>'Car not found'],404); 
//         }
//         return response()->json( 
//             Car::with('images')->findOrFail($id) 
           

//         ); 
//     } 
 
//     public function store() 
//     { 
//         JwtMiddleware::check(); 
 
//         $data = $_POST; 
 
//         if (isset($_FILES['image'])) { 
//             $name = uniqid().'_'.$_FILES['image']['name']; 
//             move_uploaded_file( 
//                 $_FILES['image']['tmp_name'], 
//                 "uploads/cars/$name" 
//             ); 
//             $data['image'] = "/backend/uploads/cars/$name"; 
//         } 
 
//         return response()->json(Car::create($data)); 
//     } 
 
//     public function destroy($id) 
//     { 
//         JwtMiddleware::check(); 
//         Car::destroy($id); 
//         return response()->json(['deleted'=>true]); 
//     } 
// } 
