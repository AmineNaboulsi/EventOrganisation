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
    public static function load(): void
    {
        $controllersPath = realpath(__DIR__ . '/../Controller');
        $controllerFiles = glob($controllersPath . '/*.php');
        foreach ($controllerFiles as $controllerFile) {
            $className = "App\\Controller\\" . basename($controllerFile, '.php');
            if (!class_exists($className)) {
                continue;
            }
            $reflectionClass = new \ReflectionClass($className);
            foreach ($reflectionClass->getMethods() as $method) {
                $attributes = $method->getAttributes(Route::class);
                foreach ($attributes as $attribute) {
                    $routeInstance = $attribute->newInstance();
                    self::$routes[$routeInstance->method][$routeInstance->uri] = [
                        'controller' => $className,
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