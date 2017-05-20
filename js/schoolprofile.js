$(document).ready(function(){
	var details="";var i=1;
	var id="";

$.ajax({
        type: 'post',
        url: 'php/schoolprofile.php',
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
	url:'php/schoolcandidateview.php',
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
        str=str+candemail+'">Comment <i class="material-icons right">send</i></button>'+'</div></div></div>';
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
		})
	});
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();

});