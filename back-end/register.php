<?php
include("db_info.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$data=json_decode(file_get_contents("php://input"));
$fullName= $data->fullName;
$userName= $data->userName;
$password= $data->password;
$email= $data->email;
$phoneNumber= $data->phoneNumber;
$location= $data->location;
$hashed_password=password_hash($password, PASSWORD_DEFAULT);

// Insert variables in the database
$query = $mysqli->prepare("INSERT INTO user(fullName, userName, password, email, phoneNumber, location) VALUES (?, ?, ?, ?, ?, ?);");
$query->bind_param("ssssss", $fullName, $userName, $hashed_password, $email, $phoneNumber, $location);
$query->execute();

$response = [];
$response["status"] = "Mabrouk!";

$json_response = json_encode($response);
echo $json_response;

?> 



