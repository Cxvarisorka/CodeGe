$('#sub').click( () => {
    let personLogIn = {};
    personLogIn.name = $('#name').val();
    personLogIn.password = $('#password').val();

    let isValidName = false;
    let isValidEmail = false;

    if(personLogIn.name.length === 0){
        $('#nm').text("What's your user name?").css('color','red');
        $('#name').css('border', '1px solid red');
    } else{
        $('#nm').text("User Name").css('color','#5B5B5B');
        $('#name').css('border', '1px solid #4F4F4F');
    }
    if(personLogIn.password.length === 0){
        $('#ps').text("What's your password?").css('color','red');
        $('#password').css('border', '1px solid red');
    } else{
        $('#ps').text("Password").css('color','#5B5B5B');
        $('#password').css('border', '1px solid #4F4F4F');
    }
});