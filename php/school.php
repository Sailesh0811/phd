<?php

require_once('dbconfig.php');// Establishing Connection with Server..
session_start();
//Fetching Values from URL{name:name,email:email,password:password,designation:designation,edu:edu,area_interest:area_interest,school:school,supervisior_email:supervisior_email,publication:publication
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
$designation=$_POST['designation'];
$edu=$_POST['edu'];
$area_interest = $_POST['area_interest'];
$school=$_POST['school'];

$_SESSION['email']=$email;
$_SESSION['name']=$name;
date_default_timezone_set("Asia/Kolkata");
 $date=Date("d-m-y h:m:s");
//Insert query
$query1="";$query="";
$query1="INSERT INTO school (name, email,password,designation,edu,area_interest,school,time_stamp) VALUES ('$name','$email', '$password','$designation','$edu','$area_interest','$school','$date')";
if(!mysqli_query($connection,$query1)){
echo $connection->error;
}
echo json_encode("Success");

mysqli_close($connection); // Connection Closed

?>