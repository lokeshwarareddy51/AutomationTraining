// Assignment: Write a program to perform the following tasks:
// 1. Count the total number of words in the sentence.
// 2. Print the sentence words in reverse order.
// 3. Convert the first character of each word to uppercase and print original sentence

let sentence="Java programming is fun and challenging";
let sentencwords="";


let totalwords=sentence.split(" ");
console.log(totalwords.length);
console.log(totalwords);

for(let i=0; i<=totalwords.length-1; i++){

  sentencwords+= totalwords[i].charAt(0).toUpperCase()+totalwords[i].substring(1)+" ";

}

console.log(sentencwords);



