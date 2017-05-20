<?php
require('dbconfig.php');
session_start();
$_SESSION['canditate']=$_POST['id'];
echo "success";
?>