<?php

namespace App\Core;
use App\Config\Routes;
use Exception;

class Router{

    /**
     * Dispatch requests to a specific controller and method
     *
     * @return string
     * @throws Exception
     */
    public static function dispatch() : void{
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];
        $routes = Routes::getRoutes();
        $route = $routes[$method][$uri] ?? null;
        //Mime
        // header('Content-Type: application/json');
        header_remove('X-Powered-By');
        if($route){
            $controller = $route['controller'];
            $method = $route['method'];
            $role = $route['role'];
            $middleware = $route['middleware'];
            $parametres = $route['parametres'];

            $requiredParams = self::requiredParams($method);
            $errors = self::validateParameters($parametres ,$requiredParams) ?? [];
            try{
                if(count($errors) === 0){
                    $c = new $controller;
                    // if($middleware){
                    //     $middleware = new $middleware;
                    //     $middleware->handle();
                    // }
                    echo json_encode($c->$method());
                    return;
                }else{
                    http_response_code(320);
                    echo json_encode([
                        "message" => 'Invalid parameters'
                    ]) ;
                    return;
                }
            }catch(Exception $e){
                echo json_encode([
                    "status" => false
                ]) ;
            }
        }else{
            http_response_code(404);
            echo json_encode([
                "status" => false
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
        echo 'email : ' . $_POST['email'];
    
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
     /**
     * Validate request parameters
     *
     * @param array $requiredParams
     */
    public static function validateParameters($requiredParams){
        // parametres:["email" => ["email"], "password" => ["string"]
        $errors = [];
        foreach ($requiredParams as $param => $Dtype) {
            switch ($Dtype) {
                case 'string':
                    if (!is_string($requiredParams[$param])) {
                        $errors[] = "Must be a string";
                    }
                    break;
                case 'int':
                    if (!filter_var($requiredParams[$param], FILTER_VALIDATE_INT)) {
                        $errors[] = "Must be an integer";
                    }
                    break;
                case 'email':
                    if (!filter_var($requiredParams[$param], FILTER_VALIDATE_EMAIL)) {
                        $errors[] = "Must be a valid email";
                    }
                    break;
                default:
                    break;
            }
        }
        return $errors;
    }
}

