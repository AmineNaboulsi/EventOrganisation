<?php

namespace App\Core;

class Database {
    private static $conn = null;

    public static function connect() {
        $host = $_ENV['DB_HOST'];
        $db_name = $_ENV['DB_NAME'];
        $username = $_ENV['DB_USER'] ;
        $password = $_ENV['DB_PASSWORD'];
        if(self::$conn === null){
            try {
                self::$conn = new \PDO(
                    "pgsql:host=$host;dbname=$db_name",
                    $username,
                    $password
                );
                self::$conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
                return self::$conn;
            } catch(\PDOException $e) {
                echo "Connection Error: " . $e->getMessage();
                return null;
            }
        }
        return self::$conn;
    }
    
}