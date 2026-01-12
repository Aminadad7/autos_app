<?php 
namespace App\Controllers; 
use App\Models\Admin; 
use Firebase\JWT\JWT; 
class AuthController 
{ 
use App\Models\RefreshToken; 
 
public function login() 
{ 
    $data = request()->get(['email','password']); 
    $user = User::where('email',$data['email'])->first(); 
 
    if (!$user || !password_verify($data['password'],$user->password)) { 
        return response()->json(['error'=>'Credenciales inválidas'],401); 
    } 
 
    $accessToken = JWT::encode([ 
        'sub'=>$user->id, 
        'exp'=>time()+900 
    ], $_ENV['JWT_SECRET'], 'HS256'); 
 
    $refresh = bin2hex(random_bytes(40)); 
 
    RefreshToken::create([ 
        'user_id'=>$user->id, 
        'token'=>$refresh, 
        'expires_at'=>date('Y-m-d H:i:s', strtotime('+7 days')) 
    ]); 
 
    return response()->json([ 
        'access_token'=>$accessToken, 
        'refresh_token'=>$refresh 
    ]); 
}
public function refresh() 
{ 
    $token = request()->get('refresh_token'); 
 
    $stored = RefreshToken::where('token',$token) 
        ->where('expires_at','>',date('Y-m-d H:i:s')) 
        ->first(); 
 
    if (!$stored) { 
        return response()->json(['error'=>'Refresh token inválido'],401); 
    } 
 
    $accessToken = JWT::encode([ 
        'sub'=>$stored->user_id, 
        'exp'=>time()+900 
    ], $_ENV['JWT_SECRET'], 'HS256'); 
 
    return response()->json(['access_token'=>$accessToken]); 
} 
}