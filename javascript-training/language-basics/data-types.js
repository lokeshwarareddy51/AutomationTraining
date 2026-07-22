//Primitive Data Types(immutable)
// 1. Numbers
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol

let CountryName="india";

//Non-Primitve Datatypes(mutable)
// 1. Objects
let empNames={

    name:"loki",

}
console.log(empNames.name);



// 2. Arrays

let empNames1 =["loki",123, "chandra", "pavan"];

console.log(empNames1[1]);

//functions

function  loginChromeApplication(browser){

console.log(`${browser} Application is launced succesfully`)


}

function loginFirefoxApplication(browser){

console.log(`${browser} Application is launced succesfully`)


}

loginChromeApplication("Chrome");
loginFirefoxApplication("Firefox");

//Set

let empIds =new Set();
empIds.add("123")

//Map
//Date

