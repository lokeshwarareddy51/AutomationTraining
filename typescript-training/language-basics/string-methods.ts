// string --> store the variable

let name:string=" Lokeswara reddy | test | 123 | $%### ";

console.log(name);

// length()-- count of chars in a string

console.log(name.length);

// find the  character based on index

console.log(name.charAt(11));

//Reverse the string
let reversedstring="";

for(let i=name.length-1; i>0; i--){

reversedstring+=name.charAt(i);
   
}
console.log(reversedstring);

//trim()
console.log(name);
console.log(name.trim());

//replace(//g, "")

console.log(name.replace(/ /g, ""));
console.log(name.replace(/[0-9]/g, ""));
console.log(name.replace(/[a-zA-z]/g, ""));
console.log(name.replace(/[0-9a-zA-z]/g, ""));
console.log(name.replace(/[^0-9a-zA-z]/g, ""));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
//console.log(name.substring(11,16));
let spillt=name.trim().split(" ");
console.log(spillt[1]);






