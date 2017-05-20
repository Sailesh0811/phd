<?php

require_once('dbconfig.php');
$useremail=$_POST['source0'];
$userpass=$_POST['source1'];
$query="select * from staff where email='$useremail' and password='$userpass'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0){
	session_start();
	$_SESSION['email']=$useremail;
	echo "success";
}
else{
	echo "error";
}
mysqli_close($connection);
?>