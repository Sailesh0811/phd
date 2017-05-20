
$(document).ready(function(){
$('#login').click(function(){
  var useremail=$('#email').val();
  var userpass=$('#password').val();
  console.log(useremail);
  $.ajax({
        type: 'post',
        url: 'php/stafflogin.php',
        // dataType:"html",
    
        data: {
            source0: useremail,
            source1: userpass                    
        },
        success: function( data ) {
          
          if(data=="success"){
            window.location="./staffview.html";
          }
          else{
            window.location="./index.html";
          }
          
        }
   
      
   });
  });
});