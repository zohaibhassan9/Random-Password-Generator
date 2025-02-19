const length = document.getElementById("length").value;

function generatePassword(){


}

function copyPassword(){
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456!@#$%^";
let password = '';


for (let i=0; i< length; i++){
let randomIndex = Math.floor(Math.random()*length.characters);
password += characters[randomIndex];
}

}