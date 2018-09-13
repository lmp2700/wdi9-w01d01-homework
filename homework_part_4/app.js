// 1. Verbal questions
// What is the difference between a parameter and an argument?
//     A parameter is a variable
//     An argument is the data you pass through the parameter
// Within a function, what is the difference between return and console.log?
//     console.log will allow your completed data to show up in the javascript console (in Google Chrome)
//     return will allow the information to be stored and can be accessed later if needed
// What are the implications of the ability of a function to return a value?
//     It allows the function to access the data further on in the code

// 2. Palindrome
// Make sure your function will give the correct answer for words with capital letters.

// const isPalindrome = (string) => {
//     if (string === string.split('').reverse().join('')) {
//         return(string + ' is palindrome.');
//     }
//     else {
//         return(string + ' is not palindrome.');
//     }
// }
// console.log(isPalindrome("Radar"));
// console.log(isPalindrome("Hello"));


// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.

const sumDigits = (num) => {
    return num.toString().split('').reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    })
}
console.log(sumDigits(421));
