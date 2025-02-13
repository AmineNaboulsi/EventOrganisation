<?php

namespace App\Controller;
use App\Config\Route;
use App\Repository\EventRepository;
use App\Services\Jwtgenerator;
use App\Services\ValidationController;
class EventController{
    /**
     * 
     * 
     */
    #[Route(uri:"/event" , method:'GET' , parametres:[ "id" => 'int' ])]
    public function FindById(){
        $Repository = new EventRepository();
        return $Repository->FindById($_GET['id']);
    }
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
     * User statictics
     * 
     * @return array
     */
    #[Route(uri:"/user/statictics" , method:'GET')]
    public function Statictics(){
        
        $token = ValidationController::getTk();
        if($token!=null){
            $id = Jwtgenerator::getIdToken($token);
            if($id != null){
                $Repository = new EventRepository();
                return $Repository->getStatictics($id);
            }
        }
        return 'null';
    }


     /**
     * Save new event 
     * 
     * @return array
     */
    #[Route(uri:"/event/save" , method:'POST')]
    public function Save(){
        return "EditEvent";
    }
    /**
     * Edit all events information by Id 
     * 
     * @return array
     */
    #[Route(uri:"/event/edit" ,method: 'PUT')]
    public function EditEvent(){
        return "EditEvent";
    }
    /**
     * Delete event by Id 
     * 
     * @return array
     */
    #[Route(uri:"/event/delete" , method:'DELETE')]
    public function DelEvent(){
        return "DelEvent";
    }
     /**
     * Edit a part (events status) of events infimation by Id 
     * 
     * @return array
     */
    #[Route(uri:"/event/active" , method:'PATCH')]
    public function ActiveEvent(){
        return "DelEvent";
    }
    
}