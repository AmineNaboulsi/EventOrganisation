<?php

namespace App\Controller;
use App\Config\Route;
use App\Repository\EventRepository;

class EventController{
    /**
     * Edit all events information by Id 
     * 
     * @return array
     */
    #[Route(uri:"/events" , method:'GET',parametres:['limit' => 'int','offset' => 'int'])]
    public function Find(){
        $Repository = new EventRepository();
        return $Repository->Find($_GET['limit'],$_GET['offset']);
    }
    /**
     * Edit all events information by Id 
     * 
     * @return array
     */
    #[Route("/event/edit" , 'PUT')]
    public function EditEvent(){
        return "EditEvent";
    }
    /**
     * Delete event by Id 
     * 
     * @return array
     */
    #[Route("/event/delete" , 'DELETE')]
    public function DelEvent(){
        return "DelEvent";
    }
     /**
     * Edit a part (events status) of events infimation by Id 
     * 
     * @return array
     */
    #[Route("/event/active" , 'PATCH')]
    public function ActiveEvent(){
        return "DelEvent";
    }
    
}