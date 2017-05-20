<?php
require('dbconfig.php');
session_start();
 $email=$_SESSION['canditate'];
$query="select * from meeting where candidate_email='$email'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0){$i=0;
	while($row=mysqli_fetch_assoc($result)){
	$j=0;
	$userdetail[$i][$j++]=$row['supervisor_email'];
	$userdetail[$i][$j++]=$row['internal_1'];
	$userdetail[$i][$j++]=$row['internal_2'];
	$userdetail[$i][$j++]=$row['external_1'];
	$userdetail[$i][$j++]=$row['external_2'];
	$date=$row['meeting_date'];
	
	$userdetail[$i][$j++]=$date;
	//echo $date;
	//$userdetail[$i][$j++]=$row['school'];
	//$userdetail[$i][$j++]=$row['publication'];
	$i++;
	}
	echo json_encode($userdetail);
	}
?>