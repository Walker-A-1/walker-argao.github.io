// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
/*
I:Function call
O: numbers from 1 to 100.
 Instead of multiples of 3 print 'Fizz'.
 Instead of multiples of 5 print 'Buzz'.
 If number is multiple of 3 and 5 then instead print 'FizzBuzz'.
C:
E:
*/
function fizzBuzz() {
    //make a for loop to print numbers 1 to 100
        //check if the number is a multiple of 3 and 5
            //if so print 'FizzBuzz' instead
        //check if the number is a multiple of 5
            //if so print 'Buzz' instead
        //check if the number is a multiple of 3
            //if so print 'Fizz' instead
        //if all of those edge cases are false print the number we are on
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}