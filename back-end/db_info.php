<?php
// connect to the database
$db_host="localhost";
$db_user="root";//by default
$db_pass=null;// by default
$db_name="gymdb";

$mysqli= new mysqli($db_host,$db_user,$db_pass,$db_name);// connection between api and databse
if (mysqli_connect_errno()){
    die("connection failed");// if there was a connection error let the php connection die here
}


?>