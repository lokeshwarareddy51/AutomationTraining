// Function without parameters and without return type
// Function with parameters and without return type
// Function with parameters and with return type
// Function without parameters and with return type


function welcomeMethod(): void {

    console.log("Welcome to Javascript");

}
welcomeMethod()

//Create a function that prints numbers from 1 to 10.

function numbers(number: number): void {

    for (let i: number = 1; i <= number; i++) {

        console.log(i);
    }

}
numbers(10);

//Create a function that prints the multiplication table of 7.

function multiplication(): void {

    for (let i: number = 1; i <= 10; i++) {

        let multiply = 7 * i;

        console.log("7 * " + i + " = " + multiply)

    }

}
multiplication();

//Create a function that accepts a student's name and marks, and prints whether the student has Passed or Failed.

function student(name: string, marks: number): void {

    if (marks > 75) {

        console.log(`${name} is passed`)

    }
    else {

        console.log(`${name} is failed`)
    }

}
student("Suresh", 76);

//Create a function that accepts two numbers and returns the greater of the two numbers.

function greaterNumber(a: number, b: number): number {

    if (a > b) {
        return a;
    }
    else {

        return b;
    }

}
console.log(greaterNumber(100, 87));

function weekDays(): string[] {

    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
console.log(weekDays());

//Optinal Parameters

function personDetails(name: string, age?: number): void {

    console.log(name);
    if (age) {
        console.log(age);
    }

}
personDetails("Loki");

//Default Parameters

function defaultParameters(name: string, dob: number = 1992) {

    console.log(name);
    console.log(dob);

}
defaultParameters("loki", 1994);

//Function with Rest parameters

function sumofnumbers(...numbers: number[]): number {

    let sum: number = 0;
    for (let num of numbers) {

        sum += num;
    }
    return sum;

}
console.log(sumofnumbers(1,2,3,4,5));



