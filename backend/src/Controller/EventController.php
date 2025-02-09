<?php

namespace App\Controller;
use App\Config\Route;

class EventController{

    #[Route("/events" , 'GET')]
    public function Save(){
        echo "Save";
    }
    #[Route("/event/add" , 'POST')]
    public function AddEvent(){
        echo "Save";
    }   
    #[Route("/event/edit" , 'PUT')]
    public function EditEvent(){
        echo "EditEvent";
    }
    #[Route("/event/delete" , 'DELETE')]
    public function DelEvent(){
        echo "DelEvent";
    }
    #[Route("/event/active" , 'PATCH')]
    public function ActiveEvent(){
        echo "DelEvent";
    }
    
}