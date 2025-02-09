<?php

namespace App\Controller;
use App\Config\Route;
class UserController{

    #[Route("/signup" , 'POST')]
    public function Signin(){
        echo "Signin";
    }
    #[Route("/signup" , 'POST')]
    public function Home(){
        echo "ssss";
    }
    #[Route("/users" , 'GET')]
    public function Save(){
        echo "Save";
    }
    #[Route("/user/add" , 'POST')]
    public function AddUser(){
        echo "Save";
    }   
    #[Route("/user/edit" , 'PUT')]
    public function EditUser(){
        echo "EditUser";
    }
    #[Route("/user/delete" , 'DELETE')]
    public function DelUser(){
        echo "DelUser";
    }
}