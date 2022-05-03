<?php
include("db_info.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
session_start();

$data = json_decode(file_get_contents('php://input'));
 
$userName = $data->userName;
$password = $data->password;
 
$sql = "SELECT * FROM user WHERE username='$username' AND password='$password'";
$query = $conn->query($sql);
 
if($query->num_rows>0){
	$row = $query->fetch_array();
	$out['message'] = 'Login Successful';
	$out['user'] = uniqid('ang_');
	$_SESSION['user'] = $row['memid'];
}
else{
	$out['error'] = true;
	$out['message'] = 'Invalid Login';
}
 
echo json_encode($out);
 





?>