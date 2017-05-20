$(document).ready(function(){
	var details="";var i=1;


$.ajax({
        type: 'post',
        url: 'php/profile.php',
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
		document.getElementById('publications').innerHTML=publications;
		
	}
});
$.ajax({
	type:'post',
	url:'php/getMessages.php',
	success: function(data){
		details = JSON.parse(data);
                console.log(details);
                if(details=="error"){
                	$('#comments').append('<div class=row><div class="col  s12"><div class="card-panel teal"><span class=white-text><p><strong><b>No Requests</b></strong><p id=school></span></div></div></div>');
                }else{

                for(var i=0;i<details.length;i++){
        //var candname=details[i][0];                
     	
     	var from=details[i][0];
       	var message=details[i][1];       
       	var date=details[i][2];
       	var canddetails='<p style="font-size:1.1em;font-weight:bold;">From:</p>'+from+''+'<p style="font-size:1.1em;font-weight:bold;">Message</p> '+message+''+'<p style="font-size:1.1em;font-weight:bold;">Date: '+date+'</p>';
       	var str='<div class=row><div class="col  s12"><div class="card-panel blue-grey darken-1"><span class=white-text><p><strong>';
        str+='</b></strong></p><p>';
        str+=canddetails+'</p></span></div></div></div>';
       	$('#comments').append(str);
	}
}
}
});
$.ajax({
  type:'post',
  url:'php/getMeetings.php',
  success: function(data){
    details = JSON.parse(data);
                console.log(details);
                if(details=="error"){
                  $('#meetings').append('<div class=row><div class="col  s12"><div class="card-panel z-depth-0 blue-grey darken-1"><span class=white-text><p><strong><b>No Requests</b></strong><p id=school></span></div></div></div>');
                }else{

                for(var i=0;i<details.length;i++){
        //var candname=details[i][0];                
      
      var from=details[i][0];
        var internal_1='<p style="font-size:1.1em;font-weight:bold;">Internal_1: '+details[i][1]+'</p>';       
        var internal_2='<p style="font-size:1.1em;font-weight:bold;">Internal_2: '+details[i][2]+'</p>';       
        var external_1='<p style="font-size:1.1em;font-weight:bold;">External_1: '+details[i][3]+'</p>';       
         var external_2='<p style="font-size:1.1em;font-weight:bold;">External_1: '+details[i][4]+'</p>';       
         var date='<p style="font-size:1.1em;font-weight:bold;">Date: '+details[i][5]+'</p>';
         console.log(date);       
        var canddetails=date+'<br>'+internal_1+'<br>'+internal_2+'<br>'+external_1+'<br>'+external_2+'<br>';
        var str='<div class=row><div class="col s12"><div class="card-panel blue-grey darken-1"><span class=white-text><p><strong><b>';
        str+='</b></strong></p><p>';
        str+=canddetails+'</p></span></div></div></div>';
        $('#meetings').append(str);
  }
}
}
});
});