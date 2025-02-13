<?php

namespace App\Services;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use \Dotenv\Dotenv;
use App\Repository\UserRepository;

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

    /**
     * Generate a user token with env securekey & hs256 algo
     * 
     * @param $id (user id)
     * 
     * @return string
     */
    public static function VerifyToken($token){
        $dotenv = Dotenv::createImmutable(realpath(__DIR__ . '/../../'));
        $dotenv->load();

        try {
            $secretKey = $_ENV['KETTKSECURE'];
            $algorithm = 'HS256';

            // Decode the JWT
            $decoded = JWT::decode($token, new Key($secretKey, $algorithm));

            $decodedArray = (array)$decoded;

            $userId = $decodedArray['id'];

            $UserRepository = new UserRepository();
            
            return $UserRepository->FindbyId($userId);
        } catch (\Firebase\JWT\ExpiredException $e) {
            return [
                "error" => "Token is invalid due to expiration"
            ]; // Token is invalid due to expiration
        } catch (\Firebase\JWT\SignatureInvalidException $e) {
            return [
                "error" => "Token is invalid due to signature mismatch"
            ]; // Token is invalid due to expiration
        } catch (\Exception $e) {
            return [
                "error" => "Token is invalid due to general error"
            ]; //Token is invalid due to general error
        }
    }
    
    /**
     * 
     * 
     * @return array
     */
    public static function getIdToken($token){
        $dotenv = Dotenv::createImmutable(realpath(__DIR__ . '/../../'));
        $dotenv->load();
        try {
            $secretKey = $_ENV['KETTKSECURE'];
            $algorithm = 'HS256';
            $decoded = JWT::decode($token, new Key($secretKey, $algorithm));
            $decodedArray = (array)$decoded;
            $userId = $decodedArray['id'];
            $UserRepository = new UserRepository();
            return $UserRepository->FindbyId($userId);

        } catch (\Firebase\JWT\ExpiredException $e) {
            return null;
        } catch (\Firebase\JWT\SignatureInvalidException $e) {
            return null;
        } catch (\Exception $e) {
            return null;
        }
    }

}



?>