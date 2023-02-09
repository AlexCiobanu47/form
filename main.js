//http://httpbin.org/post
const passwordField = document.querySelector('#passwordField');
const passwordConfirmField = document.querySelector('#passwordConfirmField')
const submitButton = document.querySelector('.account-button');
const fieldsetElement = document.querySelector('fieldset');
const passwordError = document.createElement('div');
passwordError.classList.add('error-text');
submitButton.addEventListener('click', () => {
    let password = passwordField.value;
    let passwordConfirm = passwordConfirmField.value;
    if(password !== passwordConfirm){
        passwordError.innerHTML = "passwords don't match";
        fieldsetElement.append(passwordError);
        passwordField.classList.add('error-field');
        passwordConfirmField.classList.add('error-field');
    }
    else{
        passwordError.innerHTML = '';
        passwordField.classList.remove('error-field');
        passwordConfirmField.classList.remove('error-field');
    }
});