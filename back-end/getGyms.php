<?php
include("db_info.php");
$query=$mysqli->prepare("SELECT * FROM gym");
$query->execute();
$array=$query->get_result();
$response=[];
while($result=$array->fetch_assoc()){

$response[]=$result;
}
$json_response=json_encode($response);
echo $json_response;
?>