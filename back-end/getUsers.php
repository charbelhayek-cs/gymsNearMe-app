<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");
$query=$mysqli->prepare("SELECT username,password FROM user");
$query->execute();
$array=$query->get_result();
$response=[];
while($result=$array->fetch_assoc()){

$response[]=$result;
}
$json_response=json_encode($response);
echo $json_response;
?>