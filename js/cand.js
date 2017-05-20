$(document).ready(function() {
    $('select').material_select();
    $('#actionRegister').click(function(){
    	var name,email,mobile_number,designation,school,under,under_course,under_year,pg,pg_year,pg_course,publication;
    	name=$('#name').val();
    	email=$('#email').val();
    	mobile_number=$('#mobile_number').val();console.log(mobile_number);
    	designation=$('#designation').val();  	
    	school=$('#school').val();    	
    	//publication=$('#publications').val();
        under=$('#under').val();
        under_course=$('#course_name').val();
        under_year=$('#year_of_passing').val();
        area_interest=$('#area').val();
        pg=$('#pg').val();
        pg_course=$('#pg_course_name').val();
        pg_year=$('#p_year').val();
        var address=$('#address').val();
    	if(name == "" || email == "" || under == "" || designation == "" ||  under_course == "" || under_year =="" || school == "" || year_of_passing==""|| pg_year=="" || pg == "" || pg_course == "")
    	{
    		alert("Error");
    	}
    	else{
    		$.ajax({
    			type:"POST",
    			url:"php/cand.php",
    			data: {name : name,
                    email : email,
                    mobile_number:mobile_number,
                    under:under,
                    designation:designation,
                    under_course:under_course,
                    under_year:under_year,
                    pg:pg,
                    pg_year:pg_year,
                    pg_course:pg_course,
                    area_interest:area_interest,
                    school:school,
                    publication:publication,
                    address:address
                },
    			success: function(data){
                    //console.log(data);
                    if(data=='Success'){
    				alert("Your request is sent");	
    				//window.location="./login.html";
                }
                else{
                    alert(data);
                }
    			}
    		});

    	}
    });
   
   $('.datepicker').pickadate({
    selectMonths: false,
    selectDays:false, // Creates a dropdown to control month
    selectYears: 15,
    dateFormat: 'yy', // Creates a dropdown of 15 years to control year
  });
});