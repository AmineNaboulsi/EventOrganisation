<?php

namespace App\Config;

use ReflectionClass;

class Routes{
    private static array  $routes = [
        'GET' => [] ,
        'POST' => [] ,
        'PUT' => [] ,
        'DELETE' => [] ,
        'PATCH' => [] ,
    ];

    public static function load() : void{
        $controllers = realpath(__DIR__  . '/../Controller');
        $controllerFiles = glob($controllers . '/*Controller.php');
        foreach ($controllerFiles as $contoller) {
            $className = 'App\\Controller\\' . pathinfo($contoller, PATHINFO_FILENAME);
            $c = new \ReflectionClass($className);
            $allcontrollersMethod = $c->getMethods();
            foreach ($allcontrollersMethod as $method ) {
                $allattributes = $method->getAttributes();
                foreach ($allattributes as $att ) {
                    if($att->getArguments() instanceof Route){
                        $route = $att->getArguments();
                        $method = $route->method ?? 'GET';
                        self::$routes[$method][] = $route;
                    }
                    
                }
            }
        }
    }
}