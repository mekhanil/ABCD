let n=prompt("Enter no of elements",);

let array=[];

for(var i=0;i<n;i++){
    array[i]=prompt("Enter element",)
}


let num = array[0];
let v=0;
if(num%2!=0){
    for(var x=3;x<num/2;x++){
        if(num%x==0){
            v=1;
            console.log("Not Prime")
            break;
        }
    }
}
    
if(v==0)
    console.log("Prime")
