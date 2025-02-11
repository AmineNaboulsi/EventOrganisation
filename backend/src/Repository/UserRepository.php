<?php

namespace App\Repository;

use App\Core\Database;
use App\Model\User;
use App\Model\Dto\SignUpDto;
use App\Model\Dto\LoginDto;
use App\Repository\interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface {

    public function signin(LoginDto $user){
        
    }
    public function signup(SignUpDto $user){
        $con = Database::connect();
        if($this->findbyEmail($user->getEmail())) 
        {
            return [
                "error" => "Email already exists"
            ];
        }
        $query = "INSERT INTO users (name, email, password, role, isActivated) VALUES (:name, :email, :password, :role, :status)";
        $stmt = $con->prepare($query);
        $stmt->execute([
            ':name' => $user->getName(),
            ':email' => $user->getEmail(),
            ':password' => $user->getPassword(),
            ':role' => $user->getRole(),
            ':status' => $user->getStatus()
        ]);
        return [
            "status" => false,
            "message" => "User created successfully"
        ];
    }

    public function all(){

    }
    public function create(User $user) {

    }
    public function update(User $user){

    }
    public function delete(int $id){

    }
    public function find(int $id){

    }
    public function findbyEmail(string $email){
        $con = Database::connect();
        $query = "SELECT email FROM users WHERE email = :email";
        $stmt = $con->prepare($query);
        $stmt->execute([
            ':email' => $email,
        ]);
        $result = $stmt->fetch();
        if($result)return true;
        else return false;
        
    }
}
