let empId: number = 1234;
let empName: string = "Lokeswara reddy";

// console.log(empId);
// console.log(empName);

let empNames: string[] = ["loki", "chandra", "pavan"];
let empNamesIds: (string | number)[] = ["loki", 123, "chandra", 124, "pavan", 124];
//tuples
let fruits: [string , number,number] = ["loki", 123,123];

// console.log(empNamesIds[1]);

interface objs {

    name: string;
    id: number;
    istrue: boolean;

    address: {

        housenumber: number;
        housename: string;


    }

}

let empNames1: objs = {

    name: "loki",
    id: 123,
    istrue: true,
    address: {
        housenumber: 10,
        housename: "Sample House"
    }

}
console.log(empNames1.address.housename);

//functions

function loginChromeApplication(browser:string):void{

console.log(`${browser} Application is launced succesfully`)


}

function loginFirefoxApplication(browser:number){

console.log(`${browser} Application is launced succesfully`)


}

function mobileNumber():number{

let mobile:number= 9066981102;
return mobile;

}

loginChromeApplication("Chrome");
loginFirefoxApplication(123);
console.log(mobileNumber());


let empIds:Set<string|number> =new Set();
empIds.add("123");
empIds.add(123);

let empIdss:Map<string,number> =new Map();
empIdss.set("key1", 123);

let currentDate:Date=new Date();
let month:number=currentDate.getMonth();
let year:number=currentDate.getFullYear();



