$(document).ready(function(){
	var details="";var i=1;
	var id="";

$.ajax({
        type: 'post',
        url: 'php/adminprofile.php',
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
	url:'php/approval.php',

	success:function(data){
		
                if(data=='error'){
                	$('#approval').append('<div class=row><div class="col  s4"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Requests</b></strong><p id=school></span></div></div></div>');
                }else{
                	details = JSON.parse(data);
                console.log(details);
                for(var i=0;i<details.length;i++){
        var candname='<p style="font-size:1.1em;font-weight:bold">Name:'+details[i][0]+'</p>';                
     	var candemail='<p style="font-size:1.1em;font-weight:bold">Email:'+details[i][1]+'</p>';                
     	var canddesignation='<p style="font-size:1.1em;font-weight:bold">Designation:'+details[i][2]+'</p>';                
       	var candedu='<p style="font-size:1.1em;font-weight:bold">Qualification:'+details[i][3]+'</p>';                
       	var candschool='<p style="font-size:1.1em;font-weight:bold">School:'+details[i][4]+'</p>';                
       	var canddetails=candname+candemail+canddesignation+candedu+candschool;
       	var str='<div class="row"><div class="col s4"><div class="card-panel blue-grey darken-3 z-depth-0"><span class="white-text">';
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" name="action" type="button" class="approve" id="';
        str+=details[i][1]+'">Approve <i class="material-icons right">send</i></button></div></div></div>';
       	$('#approval').append(str);console.log(str);
       

	}
}
	$('button[name=action]').on("click",function(){
		window.event.stopPropagation();
		id=this.id;
		$('#ma').openModal();
	});
	$('button[name=actionapprove]').on("click",function(){
		var staff=$('#staff_email').val();
		$.ajax({
			type:'post',
			url:'php/approve.php',
			data:{id:id,staff:staff},
			success: function(data){
					console.log(data);
				Materialize.toast('approved',3000);
				window.location="./adminview.html";
			}
		});
	});
	
}

});
$.ajax({
	type:'post',
	url:'php/meetapproval.php',

	success:function(data){
		
                if(data=='error'){
                	$('#mapproval').append('<div class=row><div class="col  s4"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Requests</b></strong><p id=school></span></div></div></div>');
                }else{
                	details = JSON.parse(data);
                console.log(details);
                for(var i=0;i<details.length;i++){
        var candname='<p style="font-size:1.1em;font-weight:bold">Candidate:'+details[i][0]+'</p>';                
     	var candemail='<p style="font-size:1.1em;font-weight:bold">Staff:'+details[i][1]+'</p>';                
     	var canddesignation='<p style="font-size:1.1em;font-weight:bold">Internal 1:'+details[i][2]+'</p>';                
       	var candedu='<p style="font-size:1.1em;font-weight:bold">Internal 2:'+details[i][3]+'</p>';                
       	var candschool='<p style="font-size:1.1em;font-weight:bold">External 1:'+details[i][4]+'</p>'; 
       	var cand='<p style="font-size:1.1em;font-weight:bold">External 2:'+details[i][5]+'</p>';                
       	var canddetails=candname+candemail+canddesignation+candedu+candschool+cand;
       	var str='<div class="row"><div class="col s4"><div class="card-panel blue-grey darken-3 z-depth-0"><span class="white-text">';
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" name="actionmeet" type="button" class="approve" id="';
        str+=details[i][1]+'">Approve <i class="material-icons right">send</i></button></div></div></div>';
       	$('#mapproval').append(str);console.log(str);
       

	}
}
	$('button[name=actionmeet]').on("click",function(){
		window.event.stopPropagation();
		var id=this.id;
		$.ajax({
			type:'post',
			url:'php/meetapprove.php',
			data:{id:id},
			success: function(data){
					console.log(data);
				Materialize.toast('approved',3000);
				window.location="./adminview.html";
			}
		});
	});
	
}

});
$.ajax({
	type:'post',
	url:'php/courseapproval.php',

	success:function(data){
		
                if(data=='error'){
                	$('#capproval').append('<div class=row><div class="col  s4"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Requests</b></strong><p id=school></span></div></div></div>');
                }else{
                	details = JSON.parse(data);
                console.log(details);
                for(var i=0;i<details.length;i++){
        var candname='<p style="font-size:1.1em;font-weight:bold">Candidate:'+details[i][0]+'</p>';                
     	var candemail='<p style="font-size:1.1em;font-weight:bold">Staff:'+details[i][1]+'</p>';                
     	var canddesignation='<p style="font-size:1.1em;font-weight:bold">Course 1:'+details[i][2]+'</p>';                
       	var candedu='<p style="font-size:1.1em;font-weight:bold">Course 2:'+details[i][3]+'</p>';                
       	var candschool='<p style="font-size:1.1em;font-weight:bold">Course 3:'+details[i][4]+'</p>'; 
       	var cand='<p style="font-size:1.1em;font-weight:bold">Course 4:'+details[i][5]+'</p>';
       	cand+='<p style="font-size:1.1em;font-weight:bold">Course 5:'+details[i][6]+'</p>';  
       	 cand+='<p style="font-size:1.1em;font-weight:bold">Course 6:'+details[i][7]+'</p>';              
       	var canddetails=candname+candemail+canddesignation+candedu+candschool+cand;
       	var str='<div class="row"><div class="col s4"><div class="card-panel blue-grey darken-3 z-depth-0"><span class="white-text">';
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" name="actioncourse" type="button" class="approve" id="';
        str+=details[i][1]+'">Approve <i class="material-icons right">send</i></button></div></div></div>';
       	$('#capproval').append(str);console.log(str);
       

	}
}
	$('button[name=actioncourse]').on("click",function(){
		window.event.stopPropagation();
		var id=this.id;
		$.ajax({
			type:'post',
			url:'php/courseapprove.php',
			data:{id:id},
			success: function(data){
					console.log(data);
				Materialize.toast('approved',3000);
				window.location="./adminview.html";
			}
		});
	});
	
}

});
$.ajax({
	type:'post',
	url:'php/soccandidateview.php',
	success: function(data){
		details = JSON.parse(data);
                console.log(details);
                if(details=="error"){
                	$('#soc').append('<div class=row><div class="col m5 s12"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Candidates</b></strong><p id=school></span></div></div></div>');
                }else{

                for(var i=0;i<details.length;i++){
        var candname=details[i][0];                
     	var candemail=details[i][1];
     	var canddesignation=details[i][2];
       	var candedu=details[i][3];       
       	var candschool=details[i][4];
       	var canddetails='<p style="font-size:1.1em;font-weight:bold">Email:'+candemail+'</p>'+'<p style="font-size:1.1em;font-weight:bold">Designation:'+canddesignation+'</p>'+'<p style="font-size:1.1em;font-weight:bold">School:'+candschool+'</p>';
       	var str='<div class="col s4"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>Name:';
        str+=candname+'	</b></strong></p><p>';
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" style="margin:0% 1%;" name="actionViewsoc" type="button" class="approve" id="';
        str=str+candemail+'">View <i class="material-icons right">send</i></button>';
        str+='<button class="btn waves-effect waves-light modal-trigger" style="margin:0% 1%;"  name="actionCommentsoc" type="button" class="approve" id="';
        str=str+candemail+'">Comment <i class="material-icons right">send</i></button>'+'</div></div>';
       	$('#soc').append(str);
       

	}
}
	$('button[name=actionViewsoc]').on("click",function(){
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

	$('button[name=actionCommentsoc]').on("click",function(){
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

	}
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
		});
	});
	$.ajax({
	type:'post',
	url:'php/seeecandidateview.php',
	success: function(data){
		details = JSON.parse(data);
                console.log(details);
                if(details=="error"){
                	$('#seee').append('<div class=row><div class="col m5 s12"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Candidates</b></strong><p id=school></span></div></div></div>');
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
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" style="margin:0% 1%;" name="actionViewseee" type="button" class="approve" id="';
        str=str+candemail+'">View <i class="material-icons right">send</i></button>';
        str+='<button class="btn waves-effect waves-light modal-trigger" style="margin:0% 1%;"  name="actionCommentseee" type="button" class="approve" id="';
        str=str+candemail+'">Comment <i class="material-icons right">send</i></button>'+'</div></div></div>';
       	$('#seee').append(str);
       

	}
}
	$('button[name=actionViewseee]').on("click",function(){
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

	$('button[name=actionCommentseee]').on("click",function(){
		window.event.stopPropagation();
		  id=this.id;
		  		$('#modal2').openModal();
		document.getElementById('commentto').innerHTML=id;
	});

	}
});
	$('button[name=actionSendseee').on("click",function(){
		var to=id;
		var message=$('#message1').val();
		$.ajax({
			type:'post',
			url:'php/sendMessage.php',
			data:{to:to,message:message},
			success: function(details){
				Materialize.toast('sent',3000);
				console.log(details);
				$('#modal2').closeModal();

			}
		});
	});
$.ajax({
	type:'post',
	url:'php/somecandidateview.php',
	success: function(data){
		details = JSON.parse(data);
                console.log(details);
                if(details=="error"){
                	$('#some').append('<div class=row><div class="col m5 s12"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Candidates</b></strong><p id=school></span></div></div></div>');
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
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" style="margin:0% 1%;" name="actionViewsome" type="button" class="approve" id="';
        str=str+candemail+'">View <i class="material-icons right">send</i></button>';
        str+='<button class="btn waves-effect waves-light modal-trigger" style="margin:0% 1%;"  name="actionCommentsome" type="button" class="approve" id="';
        str=str+candemail+'">Comment <i class="material-icons right">send</i></button>'+'</div></div></div>';
       	$('#some').append(str);
       

	}
}
	$('button[name=actionViewsome]').on("click",function(){
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

	$('button[name=actionCommentsome]').on("click",function(){
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
		$('#modal3').openModal();
		document.getElementById('commentto').innerHTML=id;
	});

	}
});
	$('button[name=actionSendsome').on("click",function(){
		var to=id;
		var message=$('#message2').val();
		$.ajax({
			type:'post',
			url:'php/sendMessage.php',
			data:{to:to,message:message},
			success: function(details){
				Materialize.toast('sent',3000);
				console.log(details);
				$('#modal3').closeModal();

			}
		});
	});
	$.ajax({
	type:'post',
	url:'php/scbtcandidate.php',
	success: function(data){
		details = JSON.parse(data);
                console.log(details);
                if(details=="error"){
                	$('#scbt').append('<div class=row><div class="col m5 s12"><div class="card-panel blue-grey darken-3"><span class=white-text><p><strong><b>No Candidates</b></strong><p id=school></span></div></div></div>');
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
        str+=canddetails+'</p></span><button class="btn waves-effect waves-light" style="margin:0% 1%;" name="actionViewscbt" type="button" class="approve" id="';
        str=str+candemail+'">View <i class="material-icons right">send</i></button>';
        str+='<button class="btn waves-effect waves-light modal-trigger" style="margin:0% 1%;"  name="actionCommentscbt" type="button" class="approve" id="';
        str=str+candemail+'">Comment <i class="material-icons right">send</i></button>'+'</div></div></div>';
       	$('#scbt').append(str);
       

	}
}
$('button[name=actionViewscbt]').on("click",function(){
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

	$('button[name=actionCommentscbt]').on("click",function(){
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
		$('#modal4').openModal();
		document.getElementById('commentto').innerHTML=id;
	});

	}
});
	$('button[name=actionSendscbt').on("click",function(){
		var to=id;
		var message=$('#message3').val();
		$.ajax({
			type:'post',
			url:'php/sendMessage.php',
			data:{to:to,message:message},
			success: function(details){
				Materialize.toast('sent',3000);
				console.log(details);
				$('#modal4').closeModal();

			}
		})
	
});
	
	
	

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();

});