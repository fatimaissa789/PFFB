




//valid login page email & password

export async function registerValidation(values){
    const errors = emailVerify({}, values);
    passwordVerify(errors, values);
    

    return errors;
}







// validate email
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = "Email Obligatoire...!";
    }else if(values.email.includes(" ")){
        error.email = "Mauvais  Email...!"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = "Invalide Email ...!"
    }

    return error;
}
// control valid password
function passwordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    // const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = ("Mot de passe Obligatoire...!");
    } else if(values.password.includes(" ")){
        errors.password = ("Mauvais mot de passe...!");
    }else if(values.password.length < 5){
        errors.password = ("Mot de passe doit contenir 5 caractères");
     }
     //else if(!specialChars.test(values.password)){
    //     errors.password = ("Password must have special character");
    // }

    return errors;
}
/** validate reset password */
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);
           console.log(passwordVerify())
    if(values.password !== values.confirm_pwd){
        errors.exist = ("Mot de passe ne corresponde pas...!");
    }

    return errors;
}
