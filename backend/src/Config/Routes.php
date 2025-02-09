<?php

namespace App\Config;

use ReflectionClass;

class Routes{
    private static array $routes = [
        'GET' => [] ,
        'POST' => [] ,
        'PUT' => [] ,
        'DELETE' => [] ,
        'PATCH' => [] ,
    ];
    public static function getRoutes() : array{
        return self::$routes;
    }
    public static function load() : void{
        $controllers = realpath(__DIR__  . '/../Controller');
        $controllerFiles = glob($controllers . '/*Controller.php');
        foreach ($controllerFiles as $contoller) {
            $className = 'App\\Controller\\' . pathinfo($contoller, PATHINFO_FILENAME);
            $c = new \ReflectionClass($className);
            $allcontrollersMethod = $c->getMethods();
            foreach ($allcontrollersMethod as $method ) {
                $allattributes = $method->getAttributes();
                foreach ($allattributes as $att) {
                    $routeInstance = $att->newInstance();
                    self::$routes[$routeInstance->method][$routeInstance->uri] = [
                            'controller' => $contoller, 
                            'method' => $method->getName(),
                            'role' => $routeInstance->role,
                            'middleware' => $routeInstance->middleware,
                            'parametres' => $routeInstance->parametres,
                    ];
                }
            }
        }
    }
}