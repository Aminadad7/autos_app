<?php

// ===================
// CORS
// ===================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");


// Respuesta inmediata a preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require __DIR__ . '/../vendor/autoload.php';

// Cargar variables de entorno
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

// Cargar base de datos (ANTES del app)
require __DIR__ . '/../config/database.php';

// Iniciar Leaf
$app = require __DIR__ . '/../bootstrap/app.php';

$app->run();
