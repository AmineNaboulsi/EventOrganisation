<?php

namespace App\Repository;

use App\Core\Database;
use App\Model\User;
use App\Model\Dto\SignUpDto;
use App\Model\Dto\LoginDto;
use App\Repository\interfaces\UserRepositoryInterface;
use PDO;
use App\Services\Jwtgenerator;

class UserRepository implements UserRepositoryInterface {

    /**
     * Login to the platform with token generation
     * 
     * @param object
     * @return array
     */
    public function signin(LoginDto $user){
        $con = Database::connect();
        $query = "SELECT id , password FROM users WHERE email = :email";
        $stmt = $con->prepare($query);
        if (!$stmt->execute([ ':email' => $user->getEmail() ])) {
            return [
                "error" => "Error during login, please try again later"
            ];
        }
        $result = $stmt->fetch(\PDO::FETCH_ASSOC);
        
        if (!$result) {
            return [
                "error" => "Account not found"
            ];
        }
        if(password_verify($user->getPassword() , $result['password'])){
            return [
                "status" => true,
                "message" => "Login successfully",
                "token" => Jwtgenerator::generateToken($result['id'])
            ];
        }else{
            return [
                "error" => "Account not found"
            ];
        }
    }
     /**
     * Register with new account accept role use , organisator
     * 
     * @param object
     * @return array
     */
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
        $password_hached = password_hash($user->getPassword() , PASSWORD_ARGON2I);
        $stmt->execute([
            ':name' => $user->getName(),
            ':email' => $user->getEmail(),
            ':password' => $password_hached,
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
     /**
     * Check if the email is all read used
     * 
     * @param object
     * @return array
     */
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
