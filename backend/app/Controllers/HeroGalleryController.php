<?php 
namespace App\Controllers; 
 
use App\Models\HeroGallery; 
use App\Middleware\JwtMiddleware; 
 
class HeroGalleryController 
{ 
    public function index() 
    { 
        return response()->json( 
            HeroGallery::orderBy('id','DESC')->get() 
        ); 
    } 
 
    public function store() 
    { 
        JwtMiddleware::check(); 
 
        $data = $_POST; 
 
        if (!empty($_FILES['image'])) { 
            $name = uniqid().'_'.$_FILES['image']['name']; 
            move_uploaded_file( 
                $_FILES['image']['tmp_name'], 
                "uploads/hero/$name" 
            ); 
            $data['image'] = "/backend/uploads/hero/$name"; 
        } 
 
        return response()->json( 
            HeroGallery::create($data) 
        ); 
    } 
 
    public function destroy($id) 
    { 
        JwtMiddleware::check(); 
        HeroGallery::destroy($id); 
        return response()->json(['deleted'=>true]); 
    } 
} 