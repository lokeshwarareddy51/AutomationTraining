const numbers = [15, 8, 42, 23, 7, 42, 19];

let largestnumber = -Infinity;
let secondlargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largestnumber) {

       secondlargest=largestnumber
        largestnumber = numbers[i]

    }
    else if(numbers[i]>secondlargest && numbers[i]!= largestnumber){

       secondlargest= numbers[i];



    }


}
console.log(largestnumber);
console.log(secondlargest);