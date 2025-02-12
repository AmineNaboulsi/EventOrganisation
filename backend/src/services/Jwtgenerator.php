<?php

namespace App\Services;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use \Dotenv\Dotenv;

define('One_HOUR', 3600);
define('One_DAY', 86400);
define('One_WEEK', 7 * 86400);
define('One_MONTH', 30 * 86400);
define('One_YEAR', 365 * 86400);


class Jwtgenerator {

    /**
     * Generate a user token with env securekey & hs256 algo
     * 
     * @param $id (user id)
     * 
     * @return string
     */
    public static function generateToken($id){
        $dotenv = Dotenv::createImmutable(realpath($_SERVER["DOCUMENT_ROOT"] . '/../'));
        $dotenv->load();
        $key = $_ENV['KETTKSECURE'];

        $payload = [
            'iat' => time(),
            'exp' => time() + (One_HOUR * 4),
            'id' => $id 
        ];
        $tk = JWT::encode($payload, $key, 'HS256');
        return $tk ;
    }
}



?>