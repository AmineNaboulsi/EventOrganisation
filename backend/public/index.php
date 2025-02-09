<?php

require_once realpath($_SERVER['DOCUMENT_ROOT'] . '/../vendor/autoload.php');
use App\Config\Routes;

Routes::load();
echo '<pre>';
var_dump(Routes::getRoutes());
echo '</pre>';
