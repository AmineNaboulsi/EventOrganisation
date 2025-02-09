<?php

namespace App\Core;
use App\Config\Routes;

class Router{

    public static function dispatch() : void{
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];
        $routes = Routes::getRoutes();
        $route = $routes[$method][$uri] ?? null;
        if($route){
            $controller = $route['controller'];
            $method = $route['method'];
            $role = $route['role'];
            $middleware = $route['middleware'];
            $parametres = $route['parametres'];
            $c = new $controller;
            if($middleware){
                $middleware = new $middleware;
                $middleware->handle();
            }
            $c->$method();
        }else{
            echo '404';
        }
        
    }
}

