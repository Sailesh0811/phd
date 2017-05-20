<?php
require('dbconfig.php');
session_start();
$email=$_SESSION['email'];
$query="select * from staffcourse where approve='0' and upload='1'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0){$i=0;
	while($row=mysqli_fetch_assoc($result)){
	$j=0;
	$userdetail[$i][$j++]=$row['candidate_email'];
	$userdetail[$i][$j++]=$row['staff_email'];
	$userdetail[$i][$j++]=$row['subject1'];
	$userdetail[$i][$j++]=$row['subject2'];
	$userdetail[$i][$j++]=$row['subject3'];
	$userdetail[$i][$j++]=$row['subject4'];
	$userdetail[$i][$j++]=$row['subject5'];
	$userdetail[$i][$j++]=$row['subject6'];

	$i++;
	//$userdetail[$i][$j++]=$row['publication'];
	
	}
	echo json_encode($userdetail);
}
else{
	echo "error";
}
	
?>