document.getElementById("login").addEventListener("click",function(event){
    event.preventDefault();
    number=document.getElementById("phone-number").value;
    pin = document.getElementById("pin-number").value;
    if(number==='01677523287' && pin==='12345'){
        console.log("you are locked in");
        window.location.href='./home.html';
    }
    else{
        alert('your phone number or pin is wrong');
    }
});