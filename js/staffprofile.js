$(document).ready(function(){
	var details="";var i=1;
	var id="";

$.ajax({
        type: 'post',
        url: 'php/staffprofile.php',
        // dataType:"html",
    
        
       success:function( data ) {
                details = JSON.parse(data);
                console.log(details);
    var name=details[0][0];                
	var email=details[0][1];
	var designation=details[0][2];
	var qualification=details[0][3];
	var school=details[0][4];
	var publications=details[0][5];
	var instruments=details[0][6];
		document.getElementById('name').innerHTML=name;
		document.getElementById('email').innerHTML=email;
		document.getElementById('designation').innerHTML=designation;
		document.getElementById('qualification').innerHTML=qualification;
		document.getElementById('school').innerHTML=school;
		//document.getElementById('publications').innerHTML=publication;		
	}
});

$.ajax({
	type:'post',
	url:'php/soccandidateview.php',
	success: function(data){
		details = JSON.parse(data);
                console.log(details);
                if(details=="error"){
                	$('#candidates').append('<div class=row><div class="col m5 s12"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Requests</b></strong><p id=school></span></div></div></div>');
                }else{

                for(var i=0;i<details.length;i++){
        var candname=details[i][0];                
     	var candemail=details[i][1];
     	var canddesignation=details[i][2];
       	var candedu=details[i][3];       
       	var candschool=details[i][4];
       	var canddetails='<p style="font-size:1.1em;font-weight:bold">Email:'+candemail+'</p>'+'<p style="font-size:1.1em;font-weight:bold">Designation:'+canddesignation+'</p>'+'<p style="font-size:1.1em;font-weight:bold">School'+candschool+'</p>';
       	var str='<div class=row><div class="col  s12"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>Name:';
        str+=candname+'	</b></strong></p><p>';
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" style="margin:0% 1%;" name="actionView" type="button" class="approve" id="';
        str=str+candemail+'">View <i class="material-icons right">send</i></button>';
        str+='<button class="btn waves-effect waves-light modal-trigger" style="margin:0% 1%;"  name="actionComment" type="button" class="approve" id="';
        str=str+candemail+'">Comment <i class="material-icons right">send</i></button>'
        str+='<button class="btn waves-effect waves-light modal-trigger" style="margin:0% 1%;" href="#modal2" name="actionMeet" type="button" class="approve" id="';
        str=str+candemail+'">DC Meeting	 <i class="material-icons right">send</i></button>'
        str+='<button class="btn waves-effect waves-light modal-trigger" style="margin:0% 1%;" href="#modal3" name="actionCourse" type="button" class="approve" id="';
        str=str+candemail+'">Upload Course<i class="material-icons right">send</i></button>'+'</div></div></div>';
       	$('#candidates').append(str);
       

	}
}
	$('button[name=actionView]').on("click",function(){
		window.event.stopPropagation();
		 id=this.id;
		$.ajax({
			type:'post',
			url:'php/candselect.php',
			data:{id:id},
			success: function(data){
				var url="canditateselect.html";
				var win = window.open(url, '_blank');
 				 //win.focus();
			}
		});
	});

	$('button[name=actionComment]').on("click",function(){
		window.event.stopPropagation();
		  id=this.id;
		// $.ajax({
		// 	type:'post',
		// 	url:'php/candselect.php',
		// 	data:{id:id},
		// 	success: function(data){
		// 		var url="canditateselect.html";
		// 		var win = window.open(url, '_blank');
 	// 			 //win.focus();
		// 	}
		// });
		$('#modal1').openModal();
		document.getElementById('commentto').innerHTML=id;
	});

	

	$('button[name=actionSend').on("click",function(){
		var to=id;
		var message=$('#message').val();
		$.ajax({
			type:'post',
			url:'php/sendMessage.php',
			data:{to:to,message:message},
			success: function(details){
				Materialize.toast('sent',3000);
				console.log(details);
				$('#modal1').closeModal();

			}
		})
	});
	
		
	$('button[name=actionMeet]').on("click",function(){
		window.event.stopPropagation();
		  id=this.id;
		// $.ajax({
		// 	type:'post',
		// 	url:'php/candselect.php',
		// 	data:{id:id},
		// 	success: function(data){
		// 		var url="canditateselect.html";
		// 		var win = window.open(url, '_blank');
 	// 			 //win.focus();
		// 	}
		// });
		$('#commentto1').val(id);
		$('#modal2').openModal();
		
	});

	
	$('button[name=actionMeetSend').on("click",function(){
		var to=$('#commentto1').val();console.log(to);
		var internal_1=$('#internal_1').val();
		var internal_2=$('#internal_2').val();
		var external_1=$('#external_1').val();
		var external_2=$('#external_2').val();
		var date=$('#date').val();  console.log(date);
		$.ajax({
			type:'post',
			url:'php/setMeeting.php',
			data:{to:to,internal_1:internal_1,internal_2:internal_2,external_1:external_1,external_2:external_2,date:date},
			success: function(details){
				Materialize.toast('Meeting arranged',3000);
				console.log(details);
				$('#modal2').closeModal();

			}
		})
	});
	$('button[name=actionCourse]').on("click",function(){
		window.event.stopPropagation();
		  id=this.id;
		// $.ajax({
		// 	type:'post',
		// 	url:'php/candselect.php',
		// 	data:{id:id},
		// 	success: function(data){
		// 		var url="canditateselect.html";
		// 		var win = window.open(url, '_blank');
 	// 			 //win.focus();
		// 	}
		// });
		//$('#commentto2').val(id);
		$('#modal3').openModal();
		
	});

	
	$('button[name=actionCourseUpload').on("click",function(){
		//var to=$('#commentto2').val();
		var to=id;
		console.log(to);
		var subject1=$('#subject1').val();
		var subject2=$('#subject2').val();
		var subject3=$('#subject3').val();
		var subject4=$('#subject4').val();
		var subject5=$('#subject5').val();
		var subject6=$('#subject6').val();
		console.log(to);
		$.ajax({
			type:'post',
			url:'php/setCourse.php',
			data:{to:to,subject1:subject1,subject2:subject2,subject3:subject3,subject4:subject4,subject5:subject5,subject6:subject6},
			success: function(details){
				Materialize.toast('Course Uploaded',3000);
				console.log(details);
				$('#modal3').closeModal();

			}
		});
	});
}
});
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();

});