function generatePassword(){
const length = document.getElementById("length").value;
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456!@#$%^";
let password = '';


for (let i=0; i< length; i++){
let randomIndex = Math.floor(Math.random() *characters.length);
password += characters[randomIndex];
}

document.getElementById('password').value = password;
}

function copyPassword(){
let passwordField = document.getElementById('password');
passwordField.select();
document.execCommand('copy');

alert('Password Coopied!')
}