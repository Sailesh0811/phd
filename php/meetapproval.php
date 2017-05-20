<?php
require('dbconfig.php');
session_start();
$email=$_SESSION['email'];
$query="select * from meeting where approve='0'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0){$i=0;
	while($row=mysqli_fetch_assoc($result)){
	$j=0;
	$userdetail[$i][$j++]=$row['candidate_email'];
	$userdetail[$i][$j++]=$row['supervisor_email'];
	$userdetail[$i][$j++]=$row['internal_1'];
	$userdetail[$i][$j++]=$row['internal_2'];
	$userdetail[$i][$j++]=$row['external_1'];
	$userdetail[$i][$j++]=$row['external_2'];
	$i++;
	//$userdetail[$i][$j++]=$row['publication'];
	
	}
	echo json_encode($userdetail);
}
else{
	echo "error";
}
	
?>