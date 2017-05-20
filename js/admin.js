$(document).ready(function() {
    $('select').material_select();
    $('#actionRegister').click(function(){
    	var name,email,password,designation,edu,area_interest,school,supervisior_email,publication;
    	name=$('#name').val();
    	email=$('#email').val();
    	password=$('#password').val();
    	designation=$('#designation').val();
    	edu=$('#edu_qual').val();
    	area_interest=$('#area').val();
    	school=$('#school').val();
    	if(name == "" || email == "" || password == "" || designation == "" || edu == "" || area_interest=="" || school =="" )
    	{
    		alert("Error");
    	}
    	else{
    		$.ajax({
    			type:"POST",
    			url:"php/admin.php",
    			data: {name : name,email : email,password:password,designation:designation,edu:edu,area_interest:area_interest,school:school},
    			success: function(data){
    				alert("You're registered");	
    				window.location="./schoollogin.html";
    			}
    		});

    	}
    });
  });