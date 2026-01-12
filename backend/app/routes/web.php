<?php

app()->get('/', function () {
    return response()->json([
        'status' => 'OK',
        'message' => 'Finauto API running 🚗🔥'
    ]);
});
