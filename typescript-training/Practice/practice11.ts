let numbers = [15, 8, 42, 42, 54, 8, 15, 15];
let numbers1 = [1, 8, 2, 4, 5, 8, 7, 0];

for (let d = 0; d < numbers.length; d++) {

     if (numbers.indexOf(numbers[d]) !== d) {
        continue;
    }


    let count=0;
    for(let r=0;r<numbers.length;r++){

        
        if(numbers[d]==numbers[r]){

            count++;


        }
        




    }
    console.log(`${numbers[d]} this numbers repeated these many times - ${count}`);

}

let mergeArray=numbers.concat(numbers1);
console.log(mergeArray);

let Duplicates=[...new Set(mergeArray)];
console.log(Duplicates);


