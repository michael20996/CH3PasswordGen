function generatePW(){
    
    let pwLength = document.getElementById("slider").value;

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for(var i = 0; i <= pwLength; i++){
        password = password + letters.charAt(Math.floor(Math.random() * Math.floor(letters.length -1)));
    }

    document.getElementById("textbox").value = password;

    document.getElementById("lastPW").innerHTML += password + "<br>";
    
}

document.getElementById("length").innerHTML = "Length: 128 ";


var slider = document.getElementById("slider");
var length = document.getElementById("length").innerHTML;

slider.oninput = function(){

    if(slider.value > 0){
        document.getElementById("length").innerHTM = "Length: " + slider.value;
    }
    else{
        length = "Length: 8";
    }

}

function copyPassword(){

    document.getElementById("textbox").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}