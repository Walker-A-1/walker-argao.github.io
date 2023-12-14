// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    //make a storage array
    //test if the end is bigger than start
        //if yes then, make a for loop that starts at start and increments(i++) to end
        //push the current num to the storage array
    //if start bigger than end do a different for loop
        //this for loop starts at end and decrements(i--) to start
        //push the current num to the storage array
    let strg = [];
    if (start < end) {
        for (let num = start; num <= end; num++) {
            strg.push(num);
        }
    return strg;
    } else {
        for (let num = start; num >= end; num--) {
            strg.push(num);
        }
    return strg;
    }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
