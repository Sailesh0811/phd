<?php
require_once('dbconfig.php');
session_start();
$email=$_SESSION['canditate'];
$userdetail= array();
$query="select * from canditate where email='$email'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0)
	{
	$row=mysqli_fetch_assoc($result);
	$i=0;$j=0;
	$userdetail[$i][$j++]=$row['name'];
	$userdetail[$i][$j++]=$row['email'];
	$userdetail[$i][$j++]=$row['designation'];
	$userdetail[$i][$j++]=$row['mobile_number'];
	$userdetail[$i][$j++]=$row['school'];
	echo json_encode($userdetail);
	}
	else
	{
		echo "error";
	}
	
?>