// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //make a for loop that start at 0, end at last array index, and increment by one.
  //the code in the loop will print the value of the current array index.
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  //make a for loop that starts at the last index in an array, ends at 0, and decrements by 1.
  //inside code block: print current array index to console.
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  //make a for in loop to iterate over all keys in the object.
  //store those keys in an array
  //return that array
  let strg = [];
  for (var key in object) {
    strg.push(key);
  }
  return strg;
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  //make a for in loop to iterate over object keys
  //print those keys
  for (var key in object){
    console.log(key);
  }
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  //make a for in loop to iterate over object' keys
  //store the values of those keys in a storage array
  //return the storage array
  let strg = [];
  for (let key in object) {
    strg.push(object[key]);
  }
  return strg;
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  //make a for in loop to get all the values from object
  //print those values
  for (let key in object) {
    console.log(object[key]);
  }
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  //make a for loop to get the keys from object
  //store those keys in an array
  //return the length of that array
  let strg = [];
  for (let key in object) {
    strg.push(key);
  }
  return strg.length;
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  //make a for in loop to get the values of object
  //unshift those values to the beggining of a storage array
  //make a for loop to iterate over the storage array and print those values
  let strg = [];
  for (let key in object) {
    strg.unshift(object[key]);
  }
  for (let i = 0; i < strg.length; i++) {
    console.log(strg[i]);
  }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
