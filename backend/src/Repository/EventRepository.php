<?php

namespace App\Repository;
use App\Core\Database;

class EventRepository{

    /**
     * Get Event Data with pagination
     * data: id , title, description , location, datetime , image , category
     * 
     * @param $limit
     * @param $offset
     * 
     * @return array
     */
    public function Find($limit,$offset){
        $con = Database::connect();
        $sql = "SELECT e.id , e.title, e.description , e.location, e.datetime , e.image , c.name as category FROM events e
            JOIN Categories c ON c.id = e.id
            LIMIT :limit OFFSET :offset";
        $stmt = $con->prepare($sql);
        $stmt->bindParam(':limit', $limit, \PDO::PARAM_INT);
        $stmt->bindParam(':offset', $offset, \PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return [
            'count'=> $this->TotalEvents(),
            'events' => $result
        ];
    }

    /**
    * Get Total number of elements
    * 
    * @return int
    */
    public function TotalEvents(){
        $con = Database::connect();
        $sql = "SELECT Count(*) as count FROM events ";
        $stmt = $con->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(\PDO::FETCH_ASSOC);
        return $result['count'];
    }
    
    /**
    * Edit All Event Data
    * 
    * @return int
    */
    public function EditEvent(){
        return "EditEvent";
    }
    public function DelEvent(){
        return "DelEvent";
    }
    public function ActiveEvent(){
        return "DelEvent";
    }   
}