'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: returns the input value unchanged.
 * @param {*} value: Function takes any value as a parameter.
 * @returns {*} value: Function returns any type of input value.
 */
function identity(value) {value}

module.exports.each = identity;

/**
 * type: able to determine the data type of the value given. 
 * @param {*} value: takes any value as a parameter
 * @returns {string} string: returns a string of the data type given. Types are one of: "string", "array", "object", "undefined"
*, "number", "boolean", "null", "function"
 */

function typeOf (value) {
    //check is value is an Array
    if(Array.isArray(value)) {
        //return "array"
        return 'array';
        }
    //check if value is equal to `null`
    if(value === null) {
        //return "null"
        return 'null'
    }
    //return the type of the value
    return typeof(value);
}

module.exports.each = typeOf;

/** 
 * first is designed to take an array and a number. The number specifies how many items you want. The array is the list of 
 * items the function will choose from. The first function will take the first few items in the array, how many it returns 
 * is determined by the number argument. 
 * Edge Cases: if the array argument is not an array it will return an empter array. If no number was given or is not a number
 * then the first element in the array will be returned. If number is negative then return an empty array
 * @param {array} array: an array in which to choose elements from
 * @param {number} number: the number of elements that will be returned
 * @returns {array} array: function returns an array of the first few elements specified by the number parameter
*/
function first (array, number)  {
    //if <array> is not an Array or if <number> is negative
    if(!Array.isArray(array) || number < -1) {
        //return empty Array
        return [];
    }
    //if <number> is equal to undefined
    if(number === undefined) {
        //return the first element in the <array>
        return array[0];
    }
    //if <number> is greater than <array>.length then
    if(number > array.length) {
        //return the whole <array>
        return array;
    }
    //make a result variable initialized as an empty Array
    let res = [];
    //make a for loop to iterate through <array>
    //start at 0, end at number, step 1
    for(let i = 0; i < number; i++) {
        //push the current <array> elemet to the result Array
        res.push(array[i]);
    }
    //return result
    return res;
}
module.exports.each = first;

/**
 * last function choses the last <number> elements from <array>.
 * Edge Cases: If array is not a array, return an empty array
 * , if number is not given or not a number returns the last element in array
 * , if number is negetive returns an empty array
 * , if number is greater than array.length return the entire array
 * @param {array} array: the list from which the choose the last elements 
 * @param {*} number: specify how many elements from the end you want
 * @returns {*} value: an array of elements, an empty array, or a single element outside an array. 
 */

function last (array, number)  {
    //check if the <number> is less than 0
    if(number < 0) {
        //then return an empty array
        return []
    }
    //check if the <number> is greater than the <arrays> length
    if(number > array.length) {
        //then return <array>
        return array;
    }
    //check if <array> is not an array
    if(!Array.isArray(array)) {
        //return an empty array
        return []
    }
    //check if <number> is not given
    //or if <number> is not a number
    if(number === undefined || typeof number !== 'number') {
        //then return the last element of <array>
        return array[array.length - 1]
    }
    //make a storage array
    let store = []
    //make a decending for loop to count backwards in <array>
    //count backwards as many times as <number> specifies
    //start at the last index of <array>, stop at <array>s length minus number, step -1
    for (let i = array.length - 1; i > array.length - number - 1; i--) {
        //add the current index of <array> to the begenning storage variable
        store.unshift(array[i]);
    }
    //return the storage array
    return store;
}

module.exports.each = last;

/**
 * indexOf tries to find the index number of <value> in <array>. 
 * @param {array} array: the array to look through to find the value index desired
 * @param {*} value: the value in array that you want to find the index of 
 * @returns {numeber} number: returns the index number of the value in array
 * Edge Case: if the value was not found in the array then returns -1
 */

function indexOf  (array, value)  {
    //make a for loop to find where <value> matchs the <array> index 
    for(let i = 0; i < array.length; i++) {
        //check if current <array> index value matches <value>
        if (array[i] === value) {
            //return current index (just `i`)
            return i;
        }
    }
    //return -1
    return -1;
}

module.exports.each = indexOf;

/**
 * contains funciton returns true if the <value> was found in <array>. false otherwise. 
 * @param {array} array: the list of elements to look there
 * @param {*} value: the value we are checking if <array> contains
 * @returns {boolean} boolean: returns true or false
 */

function contains (array, value)  {
    //check if no value was given
    if (value === undefined) {
        //if so return false
        return false;
    }
    //make a for loop to iterate through <array>
    //start at 0, end before <array>s length, step 1
    for (let i = 0; i < array.length; i++) {
        //check if current <array> index value is equal to <value> 
        if(array[i] === value) {
            //if so then return true
            return true;
        }
    }
    //return false
    return false;
}