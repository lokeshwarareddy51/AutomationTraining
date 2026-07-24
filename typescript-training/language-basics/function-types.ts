//named functions

function sumofnumbers(a:number){

console.log(a);

}
sumofnumbers(2);

//arrow functions

let sum= (b:number) =>{

console.log(b)

}
sum(5);

//anonymous function

function calculator(square: (a:number)=>number):void{

console.log(square(10));

}
calculator(

    function (a:number):number{
        return a*a;
    }
);



