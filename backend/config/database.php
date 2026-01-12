<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => $_ENV['DB_HOST'] ?? '127.0.0.1',
    'database'  => $_ENV['DB_NAME'] ?? 'finautos_backend',
    'username'  => $_ENV['DB_USER'] ?? 'root',
    'password'  => $_ENV['DB_PASS'] ?? '',
    'charset'   => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix'    => '',
]);

// Hacerla global
$capsule->setAsGlobal();

// Activar Eloquent
$capsule->bootEloquent();
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Schema;

// Resolver la página actual
Paginator::currentPageResolver(function ($pageName = 'page') {
    return $_GET[$pageName] ?? 1;
});

// Resolver la ruta actual
Paginator::currentPathResolver(function () {
    return strtok($_SERVER["REQUEST_URI"], '?');
});

