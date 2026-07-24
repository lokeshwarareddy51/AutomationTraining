// "Java is a popular programming language. Java is used for web evelopment, mobile applications, and more.";

// Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.
// 1. Find total number of occurrences
// 2. Print count and Indexes of the word

let paragraph = "Java is a popular programming language. Java is used for web evelopment, mobile applications, and more.";

let javawords = paragraph.split(" ");

let javawordcount = 0;

for (let i = 0; i < javawords.length; i++) {

    if (javawords[i].includes("Java")) {
        javawordcount++;
        console.log(`java word index is - ${i}`)

    }

}
console.log(javawordcount);