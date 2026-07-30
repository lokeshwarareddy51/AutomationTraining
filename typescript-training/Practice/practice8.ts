// Find the largest/smallest element. 
// Find the second/third largest element.
// Find the second/third smallest element.

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5,5,5,5];


//reverse an array

const reverse:any[]=[];


for(let r=numbers.length-1; r>=0;r--){

    reverse.push(numbers[r])
  

}
// console.log(reverse);



let Duplicates: any[] = [];
let uniques: any[] = [];

for (let d = 0; d < numbers.length; d++) {

    if (!uniques.includes(numbers[d])) {
        uniques.push(numbers[d]);


    }
    else { Duplicates.push(numbers[d]); }




}


 console.log(Duplicates)
 console.log(uniques);



let largestNumber = numbers[0];
let secondLargestNumber = numbers[0];
let thirdLargestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largestNumber) {

        secondLargestNumber = largestNumber;
        largestNumber = numbers[i];

    }
    else if (numbers[i] > secondLargestNumber && largestNumber != numbers[i]) {
        thirdLargestNumber = secondLargestNumber
        secondLargestNumber = numbers[i]

    }
    else if (numbers[i] > thirdLargestNumber && numbers[i] != secondLargestNumber && largestNumber != numbers[i]) {

        thirdLargestNumber = numbers[i]

    }

}
// console.log(largestNumber);
// console.log(secondLargestNumber);
// console.log(thirdLargestNumber);

// const sorting=numbers.sort((a,b) => b-a);
// console.log(sorting)

// const removeDuplicates=  [...new Set(numbers)];
// console.log(removeDuplicates);

// console.log(removeDuplicates.reverse());








