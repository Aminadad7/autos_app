<?php

$app = new Leaf\App;

$app->setNamespace('App\\');

// Cargar rutas
require __DIR__ . '/../app/routes/web.php';
require __DIR__ . '/../app/routes/api.php';


return $app;
