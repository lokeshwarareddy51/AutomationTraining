const numbers = [15, 8, 42, 30,23, 7, 42, 19,20];


let largestnumber = -Infinity;
let secondlargest = -Infinity;
let thirdlargest = -Infinity;



for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largestnumber) {
        thirdlargest=secondlargest;
        secondlargest=largestnumber;
        largestnumber = numbers[i];

    }
    else if(numbers[i]>secondlargest && numbers[i]!==largestnumber){
    thirdlargest=secondlargest
    secondlargest=numbers[i];

    }
    else if(numbers[i]>thirdlargest && numbers[i]!==largestnumber && numbers[i]!==secondlargest){
    thirdlargest=numbers[i];

    }


}

console.log(largestnumber);
console.log(secondlargest);
console.log(thirdlargest);



/// sort()

let sorting=numbers.sort(compare);

function compare(a: number, b: number): number {
    return b - a;
}

console.log(sorting);

let unique=[...new Set(sorting)];

console.log(unique);


let removeDuplicate:number[]=[];

for(let i=0; i<numbers.length;i++){

    if(!removeDuplicate.includes(numbers[i])){

        removeDuplicate.push(numbers[i]);

    }

}
console.log(removeDuplicate)





