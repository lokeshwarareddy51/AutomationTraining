const numbers = [1, 2, 3, 5, 6, 7, 9,11];


const missingnumber:number[]=[];

for (let i = 0; i < numbers.length-1; i++) {

   
    if(numbers[i+1]!==numbers[i]+1){
        missingnumber.push(numbers[i]+1);

    }

}

console.log(missingnumber);