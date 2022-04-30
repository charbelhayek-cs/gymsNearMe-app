<?php
include("db_info.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$data=json_decode(file_get_contents("php://input"));
$planName=$data->$planName;
$planCreator=$data->$planCreator;
$planInfo=$data->$planInfo;

// Insert variables in the database
$query = $mysqli->prepare("INSERT INTO workoutplan(planName,planCreator,planinfo) VALUES (?, ?, ?);");
$query->bind_param("sss",$planName, $planCreator, $planInfo);
$query->execute();

$response = [];
$response["status"] = "success!";

$json_response = json_encode($response);
echo $json_response;

?> 