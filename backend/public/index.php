<?php

require_once realpath($_SERVER['DOCUMENT_ROOT'] . '/../vendor/autoload.php');
use App\Config\Routes;
use App\Core\Router;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, Content-Type, X-Requested-With');

Routes::load();
Router::dispatch();

