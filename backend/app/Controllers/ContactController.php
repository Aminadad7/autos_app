<?php 
namespace App\Controllers; 
 
use App\Models\Contact; 
use App\Middleware\JwtMiddleware; 

class ContactController {
    public function store() {
        return response()->json(
            Contact::create(
                request()->get(['name','email','message'])
            )
        );
    }
    public function index() {
        JwtMiddleware::check();
        return response()->json(
            Contact::all()
        );
    }
}
