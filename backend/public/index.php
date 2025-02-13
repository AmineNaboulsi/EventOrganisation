<?php

require_once realpath($_SERVER['DOCUMENT_ROOT'] . '/../vendor/autoload.php');
use App\Config\Routes;
use App\Core\Router;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, Content-Type');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Max-Age: 3600');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    exit();
}

Routes::load();
Router::dispatch();

