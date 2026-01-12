<?php

function apiResponse($data = null, $message = '', $success = true, $code = 200) {
    http_response_code($code);
    return json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ]);
}
