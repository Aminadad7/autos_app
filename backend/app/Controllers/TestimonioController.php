<?php 
namespace App\Controllers; 
 
use App\Models\Testimonio; 
use App\Middleware\JwtMiddleware; 
 
class TestimonioController 
{ 
    public function index() 
    { 
        return response()->json( 
            Testimonio::orderBy('id','DESC')->get() 
        ); 
    } 
 
    public function store() 
    { 
        JwtMiddleware::check(); 
 
        return response()->json( 
Testimonio::create( 
request()->get(['name','message','rating']) 
) 
); 
} 
public function destroy($id) 
{ 
JwtMiddleware::check(); 
Testimonio::destroy($id); 
return response()->json(['deleted'=>true]); 
} 
} 