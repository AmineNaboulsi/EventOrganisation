<?php

namespace App\Controller;
use App\Config\Route;
use App\Model\Dto\SignUpDto;
use App\Model\Dto\LoginDto;
use App\Repository\UserRepository;
use App\Services\Jwtgenerator;
class UserController{

     /**
     * 
     * 
     * @return array
     */
    #[Route(uri:"/signin" , method:'POST' ,parametres:["email" => "email","password" => "string"])]
    public function Signin(){
        $User = new LoginDto(email:$_POST["email"],password:$_POST["password"]);
        $UserRepository = new UserRepository();
        return $UserRepository->signin($User);
    }

     /**
     * 
     * 
     * @return array
     */
    #[Route(uri:"/signup" , method:'POST',parametres:["name" => "string" ,"role" => "string" ,"email" => "email","password" => "password"])]
    public function Signup(){
        $User = new SignUpDto(email:$_POST["email"],name:$_POST["name"],password:$_POST["password"],role:$_POST["role"]);
        $UserRepository = new UserRepository();
        return $UserRepository->signup($User);
    } 

     /**
     * 
     * 
     * @return array
     */
    #[Route("/users" , 'GET')]
    public function Save(){
        return "Save";
    }

     /**
     * 
     * 
     * @return array
     */
    #[Route("/user/add" , 'POST')]
    public function AddUser(){
        return "Save";
    }  

     /**
     * 
     * 
     * @return array
     */
    #[Route("/user/edit" , 'PUT')]
    public function EditUser(){
        return "EditUser";
    }

     /**
     * 
     * 
     * @return array
     */
    #[Route("/user/delete" , 'DELETE')]
    public function DelUser(){
        return "DelUser";
    }
    
      /**
     * 
     * 
     * @return array
     */
    #[Route(uri:"/validtk", method:'POST')]
    public function isValide() {
        $authHeader = $_SERVER["HTTP_AUTHORIZATION"] ?? $_SERVER["REDIRECT_HTTP_AUTHORIZATION"] ?? null;
        
        if ($authHeader && preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            return Jwtgenerator::VerifyToken($matches[1]);
        }
        
        return [
            "error" => "No token provided"
        ];
    }


}