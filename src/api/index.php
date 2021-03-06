<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once 'config/database.php';
include_once 'objects/score.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
$method = $_SERVER['REQUEST_METHOD'];

// initialize object
$leaders = new Score($db);
if ('POST' === $method) {
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
    if (
        !empty($data->name) &&
        !empty($data->score)
    ) {

        // set product property values
        $leaders->name = $data->name;
        $leaders->score = $data->score;
        // create the product
        if ($leaders->create()) {

            // set response code - 201 created
            http_response_code(201);

            // tell the user
            echo json_encode(["message" => "leaders was added."]);
        } // if unable to create the product, tell the user
        else {

            // set response code - 503 service unavailable
            http_response_code(503);

            // tell the user
            echo json_encode(array("message" => "Unable to add leaders."));
        }
    } // tell the user data is incomplete
    else {

        // set response code - 400 bad request
        http_response_code(400);

        // tell the user
        echo json_encode(array("message" => "Unable to add leaders."));
    }
}
else {
    $stmt = $leaders->read();
    $num = $stmt->rowCount();

// check if more than 0 record found
    if ($num > 0) {

        // products array
        $leaders_arr = [];
        $leaders_arr["leaders"] = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            // extract row
            // this will make $row['name'] to
            // just $name only
            extract($row);

            $leader_item = [
                "name" => $name,
                "score" => $score
            ];

            array_push($leaders_arr["leaders"], $leader_item);
        }

        // set response code - 200 OK
        http_response_code(200);

        // show products data in json format
        echo json_encode($leaders_arr);
    }
}
