$(document).ready(function(){
    $("form").submit(function(event){
        const regex = /^[0-9a-zA-Z-_\$#]{1,60}@[0-9a-zA-Z-_\$#]{1,30}\.[a-zA-Z]{2,5}$/;
        const email = $("#inputEmail").val();
        const pass = $("#inputPass").val();
        
        let checkEmail = regex.test(email);
        
        if ( checkEmail !== true){
            $("#userMessage").text("Not a valid email or wrong password!").css("color","red");
            return false;
        } else if ( pass !== 'admin'){
            $("#userMessage").text("Not a valid email or wrong password!").css("color","red");
            return false;
        }
    });
});