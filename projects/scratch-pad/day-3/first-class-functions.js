// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    //test if base is a string
        //if string then return a function that compares a new value to the base alphabetically. as if they are both strings.
    //if number then return a function that compares a new value to the base, numerically.
    if (typeof base === 'string') {
        return function(value) {
            return value.localeCompare(base) === 1
        };
    } else {
        return function(value) {
            return value > base;
        }
    }
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    //test if the base is a string
        //if string then return anonymous function
            //anon function returns boolean value comparing base then value. alphabetically
        //else return anonymous function
            //anon function returns a boolean value if value is less than the base
    if (typeof base === 'string') {
        return function(value) {
            return base.localeCompare(value) === 1;
        } 
    } else {
        return function(value) {
            return value < base;
        }
    }
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // return anonymous function
        // anon function takes a string as a parameter. returns boolean weather the string starts with the startsWith character
    return function(string) {
        return string[0].toLowerCase() === startsWith.toLowerCase();
    }
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    //return an anonymous function
        //anon function takes a string parameter.
        //anon function returns true if the string argument ends with the endsWith character
    return function(string) {
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    }
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    //make a storage array
    //make a for loop to iterate over the strings array
        //on every iteration use the modify function to modify the current strings index
        //store the modified string in the storage array
    //return the storage array
    let strg = [];
    for (let i = 0; i < strings.length; i++) {
        strg.push(modify(strings[i]));
    }
    return strg;
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    //make a for loop to iterate over the given strings array
        //on every iteration use the test callback function and pass in the current index of strings at the argument
    for (let i = 0; i < strings.length; i++) {
        if (!test(strings[i])) {
            return false;
            break;
        } 
    } 
    return true;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
