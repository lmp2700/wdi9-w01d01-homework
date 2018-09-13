/*  What is the difference between interpolation and concatenation? Give an example of each.
    Concatenation is taking two items and putting them together, i.e. console.log('Run ' + ' run')
    Interpolation is injecting a variable into a string, i.e. console.log('What a ' + adjective + ' day')

    What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we 
    learned to write DRY code?
    Don't Repeat Yourself. We should pay attention to it so that we don't bog down our code and makes it
    hard for the browser to read it.

    What is the difference between declaring a variable and assigning a value to a variable? 
    What do we mean when we say "define" a variable?
    Declaring a variable means you already know what is needed and it is to be executed within the code.
    Assigning a variable means you have given the variable a name.
    Defining a variable means we need to add a value of some sort

    When should we use const and when should we use let?
    We should use const when the variable isn't changing, let when it is.

    Unix question: What is a "parent" directory?
    The very first folder/directory

    Unix, again: If you're not sure about how to use a Unix command, how can you get more info without 
    being connected to the internet?
    man + the code

    More Unix: What is "tab completion" and why is it aweseome? 
    It helps shorten the time in terminal by auto filling in the names of the files or directories
*/

const a = 4;
const b = 53;
console.log(a < b);

const c = 57;
const d = 16;
console.log(c > d);

console.log('Name' === 'Name');

const a = 4;
const b = 53;
const c = 57;
console.log(a != b > c);

const a = 4;
const d = 16;
console.log(a === a != d);

const e = 'Kevin';
console.log(e === 'Kevin');

console.log(48 == '48');


/* 1. Answer the following question: Is this an infinite loop? Why or why not? Yes, this is an infinite loop

while (true) {
	console.log('Do not run this loop');
}

2. Is the following loop an infinite loop? Why or why not? 
    Inifnite or not infinite? What is the expected output? No, because the loop ends with "false"

const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}

3. Reading code
Add a comment before each line of code explaining what the line below it does. 
Then write down what output you expect to see in the console.

// variable let is "A"
let letters = "A";
// variable i = 0
let i = 0;

// while variable is less than 20
while (i < 20) {
// add to the letters
    letters += "A";
// keep adding until 20 As are present
	i++;
}
// output letters
console.log(letters);

1. for loops
Both for loops and while loops repeat code. But what are the differences? What are the similarities?
A "for" loop is for looping behavior of something and checks after the block is executed. It will only run
for a certain number of times. The "while" loop tests within the block and runs for an unknown amount of times

2. Basic for loop
Write a for loop that will console.log() the numbers 0 to 999. */

for(let i = 0; i < 999; i++) {
    console.log(i);
}

/* 3. The mechanics of a for loop
What are the three components of the control statement? 
The first part of the control statement is: defining the value of the variable
The second part of the control statement is: letting us know where to end the loop
The third part of the control statement is: adding or subtracting to the loop

4. for loop in reverse
Using a postfix operator i-- instead of i++, write a for loop that iterates in 
reverse: console.log() a countdown from 999 to 0. */

for(let i = 999; i > 0; i--) {
    console.log(i);
}


/* 5. More counting
Write a for loop that uses interpolation to print a message to the console that includes 
the current value of i. The loop should run from 1 to 10. */

for(let i = 1; i <= 10; i++) {
    console.log('The value of i is: ' + i + ' of 10');
}
