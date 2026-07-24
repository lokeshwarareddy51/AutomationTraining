// check wheather this number the prime number or not

// Input: n = 7
// Output: true
// Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.
let x:number=20;

function isPrime(x:number): boolean {

    if (x <= 1) {
    
        return false
    }

    for (let i: number = 2; i < x; i++) {
        if (x % i === 0) {
        
            return false;
        }

    }
   
    return true;


}

if(isPrime(x)){

    console.log(`${x} is a prime number`)

}
else{

    console.log(`${x} is not a prime number`)
}

