const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];



let newarr:number[]=[];
let newarr1:number[]=[];


for (let i = 0; i < numbers.length; i++) {

    if(newarr.includes(numbers[i])){

        newarr1.push(numbers[i]);

    }
    else{

 newarr.push(numbers[i]);

    }

    



}
console.log(newarr1);
console.log(newarr);





