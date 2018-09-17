console.log("You are in")
console.log("Hi")

function findResult(){
    let x=parseInt( document.getElementById("num1").value);
    let y=parseInt( document.getElementById("num2").value);
    console.log(x);
    console.log(y);
    let sum=x+y;
    console.log(sum);
    document.getElementById("sum3").innerHTML=sum;
}
