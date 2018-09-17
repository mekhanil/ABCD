let num1=prompt("Enter num1",)
let num2=prompt("Enter num2",)

function findLarge(num1,num2){
    if(num1>num2){
        console.log(num1 + " is bigger")
    }
    else {
        console.log(num2 + " is bigger")
    }
}

findLarge(num1,num2)