function ChangeMoney() {
let Amount = document.getElementById("Amount").value;
let FromC = document.getElementById("From").value;
let To = document.getElementById("To").value;
let Result;

if (FromC == "USD"&& To == "VND"){
    Result = "Result: " +(Amount*2300) +"VND";
}
else if (FromC == "VND" && To =="USD"){
    Result= "Result:" +(Amount/2300) +"$";
}
else if (FromC == "VND" && To =="VND"){
    Result= "Result:" + Amount +"VND";
}
else{
    Result= "Result:" + Amount +"$";
}
document.getElementById("Result").innerText= Result;
}
