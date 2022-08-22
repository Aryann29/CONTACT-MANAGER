
$(document).ready(function(){
    
    $('#add-btn').click(function() {
        var theContact = $(".name").val() + "-" + $(".email").val();

    // alert(theTask)
        if(($(".name").val().length !== 0 && $(".email").val().length !==  0) ){
            if(ValidateEmail($(".email").val()) == true){
                $("#nocontact").remove();
                $( "#contactList" ).append('<li class="list-none"><div class=" flex  items-center justify-between p-10 text-red-800" id="content">'+theContact+'<span class="remove relative h-8 w-8"><img class="" width="30px " height="330px" src="images/trash.png" alt="#"></span></div></li>') 

            }else{
                alert("You have entered an invalid email address!")
   

            }
           
        }else{
            alert("please fill both sections ")

        }
        $("#name").val("");
        $("#e-mail").val("");
    }); 
   
        
    $("#contactList").on('click','.remove',function(){
        $(this).parent().remove()
    
    })
    


});

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    
}







  


