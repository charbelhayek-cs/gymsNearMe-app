<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");
$query=$mysqli->prepare("SELECT * FROM workoutplan");
$query->execute();
$array=$query->get_result();
$response=[];
while($result=$array->fetch_assoc()){

$response[]=$result;
}
$json_response=json_encode($response);
echo $json_response;
?>