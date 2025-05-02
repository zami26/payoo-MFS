document.getElementById("add-money").addEventListener('click',function(event){
event.preventDefault();   
money=document.getElementById("amount").value;
pin=document.getElementById("pin").value;
cash=document.getElementById("cash").innerText;


having_cash=Number(cash);
receiving_cash=Number(money);
if(pin==="12345"){
    document.getElementById("cash").innerText=receiving_cash+having_cash;
}
else{
    alert('enter the correct pin');
}

})

document.getElementById("cash-out").addEventListener('click',function(event){
    event.preventDefault();   
    money=document.getElementById("amount").value;
    pin=document.getElementById("pin").value;
    cash=document.getElementById("cash").innerText;
    
    
    having_cash=Number(cash);
    receiving_cash=Number(money);
    if(pin==="12345"){
        document.getElementById("cash").innerText=having_cash-receiving_cash;
    }
    else{
        alert('enter the correct pin');
    }

})