<?php

namespace App\Controller;
use App\Config\Route;
class UserController{

    #[Route(uri:"/signin" , method:'POST' ,parametres:["email" => ["email"], "password" => ["string"]])]
    public function Signin(){
        return "Signin";
    }
    #[Route(uri:"/signup" , method:'POST',parametres:["name" => ["string"] , "role" => ["string"] , "email" => ["email"], "password" => ["string"]])]
    public function Home(){
        return "signup";
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