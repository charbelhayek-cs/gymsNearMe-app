
<!-- //setting config database 
// $x=intval($_POST["x"]);// it is a global array that contains the key x
// $y=intval($_POST["y"]);//we will put the x and y in the postman api as a post and it will return the summ
// //intval means we are casting inside int like in java 
// $z=$x+$y;// the values of x and y come from when we call the server on POST api it comes from the api we specify x and y inside body

// $array=[];
// $array["answer="]=$z;// the answer will be as a json file inside {} as answer=10

// echo Json_encode($array); -->

<?php
include("db_info.php");

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



