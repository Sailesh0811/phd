<?php
require('dbconfig.php');
session_start();
$to_email=$_POST['to'];
$message=$_POST['message'];
$from=$_SESSION['email'];
date_default_timezone_set("Asia/Kolkata");
 $date=Date("d-m-y h:m:s");
$query="Insert into comments (to_email,from_email,time_stamp,message) values('$to_email','$from','$date','$message')";

if(!mysqli_query($connection,$query)){
echo $connection->error;
}
echo json_encode("Success");
?>