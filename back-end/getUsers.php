<?php
include("db_info.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'));
 
$username = $data->username;
$password = $data->password;
// $hashed_password=password_hash($password, PASSWORD_DEFAULT);

 if (empty($username)) {
    echo json_encode("User Name is required");
    exit();
    }
    else if(empty($password)){
        echo json_encode("Password is required");
        exit();
    }
    else{
    
        $sql = "SELECT * FROM user WHERE username = '" . $username . "'";
        $result = mysqli_query($mysqli, $sql) or die( mysqli_error($mysqli));;

        if (mysqli_num_rows($result) != 0) {
            $raw = mysqli_fetch_assoc($result);

            $dbusername = $raw['username'];
            $dbpassword = $raw['password'];
            $response = [];
            if ($dbusername == $username && password_verify($password, $dbpassword)) {
                $response[] = $raw;
                $json_respnse = json_encode($response);
                echo $json_respnse;
                exit();
            }   
            else{
                echo json_encode("Incorrect Username or password");
                exit();
            }
        }
        else{
            echo json_encode("Incorrect Username or password");
            exit();
        }
    }
 

?>