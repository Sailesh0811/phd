<?php
require('dbconfig.php');
session_start();
$email=$_SESSION['email'];
$query="select * from canditate where approve='0'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0){$i=0;
	while($row=mysqli_fetch_assoc($result)){
	$j=0;
	$userdetail[$i][$j++]=$row['name'];
	$userdetail[$i][$j++]=$row['email'];
	$userdetail[$i][$j++]=$row['designation'];
	$userdetail[$i][$j++]=$row['mobile_number'];
	$userdetail[$i][$j++]=$row['school'];
	$i++;
	//$userdetail[$i][$j++]=$row['publication'];
	
	}
	echo json_encode($userdetail);
}
else{
	echo "error";
}
	
?>