<?php

namespace App\Controller;
use App\Config\Route;

class EventController{

  
    #[Route("/event/edit" , 'PUT')]
    public function EditEvent(){
        return "EditEvent";
    }
    #[Route("/event/delete" , 'DELETE')]
    public function DelEvent(){
        return "DelEvent";
    }
    #[Route("/event/active" , 'PATCH')]
    public function ActiveEvent(){
        return "DelEvent";
    }
    
}