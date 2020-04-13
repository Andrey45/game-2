<?php
class Score{

    // database connection and table name
    private $conn;
    // object properties
    public $id;
    public $name;
    public $score;
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
// read products
    function read(){

        // select all query
        $query = "SELECT name, score FROM score ORDER BY score DESC LIMIT 10";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }
    function create(){

        // query to insert record
        $query = "INSERT INTO
               score
            SET
                name=:name, score=:score";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->score=htmlspecialchars(strip_tags($this->score));

        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":score", $this->score);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;

    }
}
?>