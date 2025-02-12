<?php

namespace App\Core;
use App\Config\Routes;
use Exception;
use App\Services\ValidationController;
class Router{

    
    /**
     * Dispatch requests to a specific controller and method
     *
     * @return string
     * @throws Exception
     */
    public static function dispatch() : void{
        $uri = parse_url($_SERVER['REQUEST_URI'] , PHP_URL_PATH);
        $methodhttp = $_SERVER['REQUEST_METHOD'];
        $routes = Routes::getRoutes();
        $route = $routes[$methodhttp][$uri] ?? null;
        //Mime
        header('Content-Type: application/json');
        header_remove('X-Powered-By');
        if($route){
            $controller = $route['controller'];
            $method = $route['method'];
            $role = $route['role'];
            $middleware = $route['middleware'];
            $parametres = $route['parametres'];

            $requiredParams = self::requiredParams($methodhttp);
            $valide = ValidationController::Validation($parametres ,$requiredParams);
            try{
                if($valide){
                    $c = new $controller;
                    // if($middleware){
                    //     $middleware = new $middleware;
                    //     $middleware->handle();
                    // }
                    echo json_encode($c->$method());
                    return;
                }
            }catch(Exception $e){
                echo json_encode([
                    "status" => false ,
                    "error" => $e->getMessage()
                ]) ;
            }
        }else{
            http_response_code(404);
            echo json_encode([
                "status" => false ,
                'error' => 'Route not found'
            ]) ;
        }
    }
    /**
     * Get the parametres source
     * 
     * @param string @method 
     * @return array
     */
    public static function requiredParams($method) : array {
        if ($method === 'GET' || $method === 'DELETE') {
            return $_GET;
        }
    
        if (in_array($method, ['POST', 'PUT', 'PATCH'])) {
            $contentType = $_SERVER["CONTENT_TYPE"] ?? '';
    
            if (strpos($contentType, 'application/json') !== false) {
                $json = file_get_contents("php://input");
                //json_decode with true assoc means we get an associatve array after decode
                //false return object 
                return json_decode($json, true) ?? [];
            }
            return $_POST;
        }
    
        return [];
    }
  
}

