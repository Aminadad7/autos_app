<?php

namespace App\Middleware;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtMiddleware
{
    public static function check()
    {
        $headers = getallheaders();

        // Normalizar Authorization
        $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? null;

        // Si viene como array (Windows / Apache bug)
        if (is_array($authHeader)) {
            $authHeader = $authHeader[0] ?? null;
        }

        if (!$authHeader || !is_string($authHeader)) {
            response()->json(['error' => 'Token requerido'], 401);
            exit;
        }

        if (stripos($authHeader, 'Bearer ') !== 0) {
            response()->json(['error' => 'Formato de token inválido'], 401);
            exit;
        }

        $token = trim(str_replace('Bearer', '', $authHeader));

        try {
            return JWT::decode(
                $token,
                new Key($_ENV['JWT_SECRET'], 'HS256')
            );
        } catch (\Exception $e) {
            response()->json(['error' => 'Token inválido'], 401);
            exit;
        }
    }
}
