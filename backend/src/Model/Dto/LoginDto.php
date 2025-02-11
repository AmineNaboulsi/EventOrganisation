<?php

namespace App\Model\Dto;

class LoginDto{

    private string $email;
    private string $password;
    private string $role;

    public function __construct($email="", $password="", $role=""){
        $this->email = $email;
        $this->password = $password;
        $this->role = $role;
    }
    public function getEmail() { return $this->email ; }
    public function getPassword() { return $this->password ; }
    public function getRole() { return $this->role ; }
    
}