<?php

namespace App\Model\Dto;

class LoginDto{

    private string $email;
    private string $password;

    public function __construct($email="", $password=""){
        $this->email = $email;
        $this->password = $password;
    }
    public function getEmail() { return $this->email ; }
    public function getPassword() { return $this->password ; }
    
}