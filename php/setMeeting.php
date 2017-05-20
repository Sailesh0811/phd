<?php
require('dbconfig.php');
session_start();
$to_email=$_POST['to'];
$internal_1=$_POST['internal_1'];
$internal_2=$_POST['internal_2'];
$external_1=$_POST['external_1'];
$external_2=$_POST['external_2'];
$meeting_date=$_POST['date'];
$from=$_SESSION['email'];
date_default_timezone_set("Asia/Kolkata");
 $date=Date("d-m-y h:m:s");
$query="Insert into meeting (candidate_email,supervisor_email,internal_1,internal_2,external_1,external_2,meeting_date,time_stamp) values('$to_email','$from','$internal_1','$internal_2','$external_1','$external_2','$meeting_date','$date')";

if(!mysqli_query($connection,$query)){
echo $connection->error;
}
else
{
 $email_to = $email;
$email_message='<html>
	<head>

		<link href="components.css" rel="stylesheet" type="text/css">
<style>

body
{
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    margin: 0;
}

.grey_space
{
	background-color: rgba(128, 128, 128, 0.14);
	width:850px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
	margin-top:50px;
}

.footer_info
{
	max-width:439px;
	margin-left:auto;
	margin-right:auto;
	font-size:70%;
	color:grey;
	padding-top:30px;
    text-align: center;
}

.messag_espace
{
	width:60%;
	margin-left:auto;
	margin-right: auto;
	height:200px;
	background-color:white;
	
}

.notif_info
{
	margin-top: -53px;
    margin-left: 100px;

}

.one_line
{
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 30px;
    background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%,240, from(#a0a0a0), to(#fff));
}

.logo
{   
    
    
    height: 50;
    width: auto;
}


.account_pic
{
	outline: 0;
	text-decoration: none;
	border: 0;
	border-radius: 100px;
	width: 40px;
	height: 40px;
	display: block;
	border-style: none;
	    margin-left: 30px;
    margin-top: 20px;
}



.senders_name
{
	margin-top: -27px;
    margin-left: 80px;
    font-size: 80%;

}



.main_message
{
    margin-left: 81px;
    margin-top: 10px;
    font-size: 70%;
    color: grey;
}
</style>
	</head>
	<body>
		<div class="grey_space" > <!-- grey box -->
			


			<div class="messag_espace ">		<!-- message -->
			
					
				<div class="logo_info">
					<img class="logo" src="sailesh008.xyz/phd/php/Sastra-University-logo.png" style="height:60px;width:80px;"> 
					<div class="notif_info" style="margin-left:120px;margin-top:0;position:absolute;top:10%;">
						A message has been sent to you by <span id="senders_name"> kjdakjhdkja</span>
					</div>
				</div>

					


					<div class="one_line"></div>

				<div>
	
						<img class="account_pic" src="sailesh008.xyz/phd/php/empty.jpeg">   <div id="senders_name" class="senders_name"> SENDERS NAME</div>

						<div id="main_message" class="main_message">
							THIS IS THE message space and the main notification is here
						</div>
	

				</div>



			</div>


			<div class="footer_info" id="footer_info">	<!-- footer information -->


			 This email was sent by SASTRA (Thirumalaisamudram, Thanjavur, Tamil Nadu 613401).<br /><br /> Choose which emails we send you through Email Settings or Unsubscribe. 
			


			</div>

		</div>
	</body>
</html>';
    $email_subject = "Registered";

 $headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    if(mail($email_to, $email_subject, $email_message, $headers))
{
echo "Success";
}
else
{

echo "error";
}







 
echo "Success";
}
else{
	echo json_encode("error");
}
mysqli_close($connection); // Connection Closed
}
?>