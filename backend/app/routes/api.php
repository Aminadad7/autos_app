<?php

use  Middleware\JwtMiddleware;

app()->group('/api', function () {

    // Cars
    app()->get('/cars', 'Controllers\CarController@index');
    app()->get('/cars/{id}', 'Controllers\CarController@show');

    app()->post('/cars', function () {
        JwtMiddleware::check();
        return (new Controllers\CarController)->store();
    });

    app()->delete('/cars/{id}', function ($id) {
        JwtMiddleware::check();
        return (new Controllers\CarController)->destroy($id);
    });

    // Motors
    app()->get('/motors', 'Controllers\MotorController@index');
    app()->get('/motors/{id}', 'Controllers\MotorController@show');
    app()->post('/motors', 'Controllers\MotorController@store');
    app()->delete('/motors/{id}', 'Controllers\MotorController@destroy');

    // Hero
    app()->get('/hero', 'Controllers\HeroGalleryController@index');
    app()->post('/hero', 'Controllers\HeroGalleryController@store');
    app()->delete('/hero/{id}', 'Controllers\HeroGalleryController@destroy');

    // Testimonios
    app()->get('/testimonios', 'Controllers\TestimonioController@index');
    app()->post('/testimonios', 'Controllers\TestimonioController@store');
    app()->delete('/testimonios/{id}', 'Controllers\TestimonioController@destroy');

    // Auth
    app()->post('/login', 'Controllers\AuthController@login');
    app()->post('/refresh', 'Controllers\AuthController@refresh');

    // Contacts
    app()->post('/contacts', 'Controllers\ContactController@store');
    app()->get('/contacts', 'Controllers\ContactController@index');
});