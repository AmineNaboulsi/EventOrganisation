<?php

namespace App\Services;

class ValidationController{

    /**
     * Validation of route parametres 
     * 
     * @param array $parametres
     * @param array $data
     * @return string|null
     */
    public static function Validation($parametres , $data){ 
        foreach ($parametres as $para => $dtype) {
            if (!isset($data[$para]) ) {
                // http_response_code(400);
                // header('Content-Type: application/json');
                echo json_encode(['error' => 'Missing parametres']);
                return false;
            }
            switch($dtype){
                case 'string':
                    if (!is_string($data[$para])) {
                        // http_response_code(400);
                        header('Content-Type: application/json');
                        echo json_encode(['error' => 'Invalid data format ']);
                        return false;
                    }
                    break;
                case 'int':
                    if (!is_numeric($data[$para]) || intval($data[$para]) != $data[$para]) {
                        // http_response_code(400);
                        header('Content-Type: application/json');
                        echo json_encode(['error' => 'Invalid data format']);
                        return false;
                    }
                    break;
                case 'email':
                    if (!filter_var($data[$para], FILTER_VALIDATE_EMAIL)) {
                        // http_response_code(400);
                        header('Content-Type: application/json');
                        echo json_encode(['error' => 'Invalid email format']);
                        return false;
                    }
                    break;
                case 'password':
                    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z]).{8,25}$/', $data[$para])) {
                        // http_response_code(400);
                        header('Content-Type: application/json');
                        echo json_encode(['error' => 'The password must be between 8 and 12 characters long and contain at least one letter and one number']);
                        return false;
                    }
                    break;
            }
        }
        return true;
    }
    public static function getTk()  {
        $authHeader = $_SERVER["HTTP_AUTHORIZATION"] ?? $_SERVER["REDIRECT_HTTP_AUTHORIZATION"] ?? null;
        if ($authHeader && preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            return $matches[1];
        }
        return null;
    }
}

