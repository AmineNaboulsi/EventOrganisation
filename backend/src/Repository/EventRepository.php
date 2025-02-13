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
        $sql = "SELECT e.id , e.title, e.description , e.location, e.datetime , e.image , e.places,
            CASE WHEN c.name is NULL THEN 'unknow' ELSE c.name  END as category
            FROM events e
            LEFT JOIN Categories c ON c.id = e.id
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
    * Find Events by id
    * 
    * @param $id
    * @return array
    */
    public function FindById($id){
        $con = Database::connect();
            $sql = "SELECT e.id , e.title, e.description , e.location, e.datetime , e.image ,e.places, 
            CASE WHEN c.name is NULL THEN 'unknow' ELSE c.name  END as category
            FROM events e
            LEFT JOIN Categories c ON c.id = e.id
                WHERE e.id=:id ";
        $stmt = $con->prepare($sql);
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(\PDO::FETCH_ASSOC);
        return $result ;
    }

    /**
    * Get Total number fir a specific organisator
    * 
    * @return int
    */
    public function TotalEventsbyOrganisator($id){
        $con = Database::connect();
        $sql = "SELECT Count(*) as count FROM events where  ";
        $stmt = $con->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(\PDO::FETCH_ASSOC);
        return $result['count'];
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
    * Statictics
    * 
    * @return int
    */
    public function getStatictics($id){

        return [
            "TotalEvents" => 12,
            "TotalBookings" => '2,500',
            "Revenue" => '$45,678',
            "AttendanceRate" => '87%',
        ];
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