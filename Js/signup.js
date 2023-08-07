$('#sub').click( () => {
    let person = {};
    person.name = $('#name').val();
    person.email = $('#email').val();
    person.password = $('#password').val();
    person.repassword = $('#repassword').val();

    let isValidName = false;
    let isValidEmail = false;

    if(person.name.length === 0){
        $('#nm').text("What's your name?").css('color','red');
        $('#name').css('border', '1px solid red');
    } else{
        $('#nm').text("User Name").css('color','#5B5B5B');
        $('#name').css('border', '1px solid #4F4F4F');
        isValidName = true;
    }

    if(person.email.length === 0){
        $('#em').text("Must be filled.").css('color','red');
        $('#email').css('border', '1px solid red');
    } else{
        $('#em').text("Email").css('color','#5B5B5B');
        $('#email').css('border', '1px solid #4F4F4F');
        isValidEmail = true;
    }

    if(person.password != person.repassword || person.repassword.length === 0){
        $('#rp').text("Password didn't match.").css('color','red');
        $('#repassword').css('border', '1px solid red');
    } else{
        $('#rp').text("Repeat Password").css('color','#5B5B5B');
        $('#repassword').css('border', '1px solid #4F4F4F');
    }
    const specialCharacters = '!@#$%^&*()_-+=}{[]|\\:;<>,".?/`~';
    let hasSpecialCharacter = false;
    let hasUppercaseLetter = false;
    let hasLowercaseLetter = false;
    let isEight = false;
    let isValidPassword = false;

    if(person.password.length >= 8){
        isEight = true;
    }

    for (const char of person.password) {
        if (specialCharacters.includes(char)) {
          hasSpecialCharacter = true;
        } else if (char >= 'A' && char <= 'Z') {
          hasUppercaseLetter = true;
        } else if (char >= 'a' && char <= 'z') {
          hasLowercaseLetter = true;
        }
    }

    if(hasSpecialCharacter && hasUppercaseLetter && hasLowercaseLetter && isEight){
        $('#ps').text("Password").css('color','#5B5B5B');
        $('#password').css('border', '1px solid #4F4F4F');
        isValidPassword = true;
    } else{
        $('#ps').text("Please enter valid password").css('color','red');
        $('#password').css('border', '1px solid red');
    }

    if(isValidPassword && isValidName && isValidEmail){
        // Do Somthing
    }

});
