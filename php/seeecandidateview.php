<?php
require('dbconfig.php');
session_start();
$email=$_SESSION['email'];$school="";

	$query="select * from canditate where school='SEEE'";
$result=mysqli_query($connection,$query);
if(mysqli_num_rows($result)>0){$i=0;
	while($row=mysqli_fetch_assoc($result)){
	$j=0;
	$userdetail[$i][$j++]=$row['name'];
	$userdetail[$i][$j++]=$row['email'];
	$userdetail[$i][$j++]=$row['designation'];
	$userdetail[$i][$j++]=$row['edu'];
	$userdetail[$i][$j++]=$row['school'];
	//$userdetail[$i][$j++]=$row['publication'];
	$i++;
	}
	echo json_encode($userdetail);
	}
	else{
		echo json_encode("error");
	}

?>