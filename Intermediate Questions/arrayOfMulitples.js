/*
Create a function that takes two numbers as arguments 
(num, length) and returns an array of multiples 
of num until the array length reaches length.
*/

// function arrayOfMultiples (num, length) {
    
//     for( let i = 0; 1 < length; i++){
//         return num[i]
//     }
    
    
// }

// console.log(arrayOfMultiples(2,3))

function fizzBuzz(n) {
    // Write your code 
    
    for(let i = 0; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
    
}

console.log(fizzBuzz(10))