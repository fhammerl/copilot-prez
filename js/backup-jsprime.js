// this js file prints the first 10 prime numbers
// to the to the webpage

// Function to check if a number is prime
function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

// Print the first 10 prime numbers
let count = 0;
let num = 2;

while(count < 10) {
    if(isPrime(num)) {
        document.write(num + '<br>');
        count++;
    }
    num++;
}