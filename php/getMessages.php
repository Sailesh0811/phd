<?php
require('dbconfig.php');
session_start();
 $email=$_SESSION['email'];
$query="select * from comments where to_email='$email'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0){$i=0;
	while($row=mysqli_fetch_assoc($result)){
	$j=0;
	$userdetail[$i][$j++]=$row['from_email'];
	$userdetail[$i][$j++]=$row['message'];
	$date=$row['time_stamp'];
	
	$userdetail[$i][$j++]=$date;
	//$userdetail[$i][$j++]=$row['school'];
	//$userdetail[$i][$j++]=$row['publication'];
	$i++;
	}
	echo json_encode($userdetail);
	}
?>