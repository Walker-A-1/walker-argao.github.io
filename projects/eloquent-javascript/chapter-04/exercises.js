////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a range function that takes two arguments, start and end, and returns an
//array containing all the numbers from start up to (and including) end.
function range(start, end, step = 1, result = []) {
  //edge case
  //if step is negetive then return result
  if(step < 0) {
    return result;
  }
  //if result is an empty array AND start and end are equal
  if(result[0] === undefined && start === end) {
    //return result
    return result;
  }
  //base case
  //if start is greater than end 
  if(start > end) {
    //return result
    return result;
  }
  //code
  //add start to end of result array
  result.push(start);
  //recursion
  //return self
  //call difference: add one to start, include step, include result
  return range(start + step, end, step, result);
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  //initialize res at 0
  let res = 0;
  //for loop for <arr>
  for(let i = 0; i < arr.length; i++) {
    //add current <arr> element to res
    res += arr[i];
  }
  //return res
  return res;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//reverseArray takes an array and produces a new array in the reverse order
function reverseArray(array, result=[]) {
  //base
  if(array.length === 0) {
    return result;
  }
  //recersive
  result.unshift(array[0]);
  return reverseArray(array.slice(1), result);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array, count = 0) {
  //edge case
  //if array is empty then return it
  if(array[0] === undefined) {
    return array;
  }
  //base
  //When we get to the middle of the array
  //if count is more than halve of array length rounded down
  if(count > Math.floor(array.length / 2) - 1) {
    //return array
    return array;
  }
  //remember values we want to swap
  let first = array[count];
  let last = array[array.length - 1 - count];
  //swap values
  array[count] = last;
  array[array.length - 1 - count] = first;
  //recersion
  //return function call with count + 1
  return reverseArrayInPlace(array, count + 1);
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  //initialize `rest` at `null`
  let rest = null;
  //for loop decrementing through <arr>
  for(let i = arr.length - 1; i >= 0; i--) {
    rest = { value: arr[i], rest: rest }
  }
  //return rest
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
  //base case
  if (list === null) {
    return array;
  }
  //code
  array.push(list["value"]);
  //recursion
  return listToArray(list["rest"], array);
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}};
 */
function prepend(value, list) {
  return { "value": value, "rest": list }
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
function nth(list, index) {
  //edge case
  //if index is less than 0 then return undefined
  if(index < 0) {
    return undefined;
  }
  //base case
  //if <index> equals 0 then return value of <list>
  if(index === 0) {
    return list["value"];
  }
  //code

  //recursion
  //reduce the list by one level. Taking one level off of the top
  //and decrement index by 1
  return nth(list["rest"], index - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //edge cases
  //if only one param is `null` return false
  if(x === null && y !== null || x !== null && y === null) {
    return false;
  }
  //if only one param is `undefined` return false
  if(x === undefined && y !== undefined || x !== undefined && y === undefined) {
    return false;
  }
  //if x AND y are empty objects then return true
    //to know do below
      //convert the object properties into an array of keys, then check if that array length is 0
      //Also follow to object by `.constructor` and ask if it is equal to `Object`
  if (Object.keys(x).length === 0 && x.constructor === Object && Object.keys(y).length === 0 && y.constructor === Object) {
    return true;
  }
  //determine if <x> AND <y> are NOT complex data types
  if(typeof x !== 'object' && typeof y !== 'object') {
    //if so then return strictly equal with <x> and <y> passed in
    return x === y;
  }
  //determine if <x> OR <y> are not complex data types
  if(typeof x !== 'object' || typeof y !== 'object') {
    //if so return false
    return false;
  }
  //make arrays of <x> and <y> keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  //check if arrays above are the same length
  if(xKeys.length !== yKeys.length) {
    //if not then return false
    return false;
  }
  //make a for loop to zip <x> and <y> keys and values
  for(let i = 0; i < xKeys.length; i++) {
    //check if current x key is NOT contained in y keys array
    //OR
    //use deepEqual to compare the current x and y values . current key index,
    //to see if above returns false
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])) {
      //if so then return false
      return false;
    }
  }
  //return true
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
