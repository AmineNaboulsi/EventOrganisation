<?php

namespace App\Repository\Interfaces;

use App\Model\User;
use App\Model\Dto\LoginDto;
use App\Model\Dto\SignUpDto;

interface UserRepositoryInterface
{
    public function signin(LoginDto $user);
    public function signup(SignUpDto $user);
    public function create(User $user);
    public function update(User $user);
    public function delete(int $id);
    public function find(int $id);
    public function findByEmail(string $email);
    public function all();
}


?>