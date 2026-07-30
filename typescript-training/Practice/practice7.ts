import { subscribe } from "node:diagnostics_channel";

let str1 = "selenium"


let newstring3=str1.substring(0,3)+"-"+str1.substring(3,6)+"-"+str1.substring(6)

console.log(newstring3);

let newstring=str1.slice(0,3)+"-"+str1.slice(3,6)+"-"+str1.slice(6)

console.log(newstring);

let newstring2=str1.replace(/(\d{3})(\d{3})(\d{4})/g,"$1-$2-$3");

console.log(newstring2);

function display(str1:string,n:number){

let result="";

for(let i=0; i<n;i++){

    result+=str1[i];

   }

   while(result.length>0){

    console.log(result)

    result=result.slice(0,result.length-1);


   }


}

display("playwright",6);



