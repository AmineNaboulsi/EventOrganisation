<?php

namespace App\Controller;
use App\Config\Route;
use App\Model\Dto\SignUpDto;
use App\Model\Dto\LoginDto;
use App\Repository\UserRepository;
class UserController{

    #[Route(uri:"/signin" , method:'POST' ,parametres:["email" => "email","password" => "password"])]
    public function Signin(){
        $User = new LoginDto(email:$_POST["email"],password:$_POST["password"],role:$_POST["role"]);
        $UserRepository = new UserRepository();
        return $UserRepository->signin($User);
    }
    #[Route(uri:"/signup" , method:'POST',parametres:["name" => "string" ,"role" => "string" ,"email" => "email","password" => "password"])]
    public function Signup(){
        $User = new SignUpDto(email:$_POST["email"],name:$_POST["name"],password:$_POST["password"],role:$_POST["role"]);
        $UserRepository = new UserRepository();
        return $UserRepository->signup($User);
    } 
    #[Route("/users" , 'GET')]
    public function Save(){
        return "Save";
    }
    #[Route("/user/add" , 'POST')]
    public function AddUser(){
        return "Save";
    }   
    #[Route("/user/edit" , 'PUT')]
    public function EditUser(){
        return "EditUser";
    }
    #[Route("/user/delete" , 'DELETE')]
    public function DelUser(){
        return "DelUser";
    }
}