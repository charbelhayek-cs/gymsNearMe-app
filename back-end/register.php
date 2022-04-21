<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");
$data=json_decode("file_get_contents("php:input"));

$fullName = $_POST["fullName"];
$userName = $_POST["userName"];
$password = $_POST["password"];
$email=$_POST["email"];
$phoneNumber=$_POST["phoneNumber"];
$location=$_POST["location"];

// Insert variables in the database
$query = $mysqli->prepare("INSERT INTO user(fullName, userName, password, email, phoneNumber, location) VALUES (?, ?, ?, ?, ?, ?);");
$query->bind_param("ssssss", $fullName, $userName, $password, $email, $phoneNumber, $location);
$query->execute();

$response = [];
$response["status"] = "Mabrouk!";

$json_response = json_encode($response);
echo $json_response;

?> 



