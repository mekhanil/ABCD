console.log("And here we begin");
console.log(6789-6782);
let firstName= "Mekha";
let secondName="Anil";
let cgpa;
let fullName= firstName + " " + secondName;
console.log(firstName + secondName);
console.log(fullName);
let fruits=["apple","banana","orange",1,7+5];
let student = {
firstName:"Mariam",
secondName:"Khan",
cgpa:7
}
console.log(student);
console.log(fruits);

function print(name){
    console.log(name);

}

print(firstName);
print(secondName);    






//var num1 = prompt( "Enter number 1",);
//var num2 = prompt( "Enter number 2",);

//console.log(num1);

function arth (num1, num2){
    console.log(num1+num2);
    console.log(num1/num2);
    console.log(num1-num2);
    console.log(num1*num2);
    
    
}


//arth(num1,num2);



function func1(){
    let x=10;
    console.log("Value of x:"+x);
    x=45;
    console.log("Value of x:"+x);

}

func1();



let time=prompt("Enter time",);


if(time >=9 && time <12){
    console.log("Good Morning")

}
else if(time >=12 && time<16){
    console.log("Good Afternoon");

}
else if(time >=16){
    console.log("Good Evening");
}

let marks=[23,45,67];



for(x of marks){
    console.log(x);
}


let employee ={
    age:23,
    location:"Trivy",
    company:"ICT"
};

for (x in employee){
    console.log(employee);
}

