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
 * contains funciton returns true if the <value> was found in <array>. false otherwise. Does in fact include a ternary operator
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
    //make a memory variable initialized with false
    let mem = false;
    //make a for loop to iterate through <array>
    //start at 0, end before <array>s length, step 1
    for (let i = 0; i < array.length; i++) {
        //check if current <array> index value is equal to <value> 
        if(array[i] === value) {
            //assign mem to true
            mem = true;
        }
    }
    //return false if memory variable holds false
    return mem ? true : false;
}

module.exports.each = contains;

/**
 * takes in an array or an object and passes each value into the input function.
 * @param {array || object} collection: a list of elements or properties to be affected by the input function
 * @param {function} func: the function that will affect every value in the collection
 */

function each  (collection, func)  {
    //check if <collection> is an array
    if (Array.isArray(collection)) {
        //if so then 
        //make a for loop to iterate through <collection> array
        //start at 0, stop before <collection> length, step 1
        for (let i = 0; i < collection.length; i++) {
            //call <func> with arguments
            //current <collection> index value, current index, <collection>
            func(collection[i], i, collection);
        }
    } else {
    //if collection is not an array then
        //make a for in loop to iterate through <collection> object
        for (let key in collection) {
            //call <func> with these arguments
            //current property value, the key, <collection>
            func(collection[key], key, collection);
        }
    }
}

module.exports.each = each;

/**
 * Function takes in an array an returns a new array will all of the duplicate elements removed
 * @param {array} array: list of elements to cut duplicates from
 * @returns {array} array: an array of elements with no duplicates
 */

function unique  (array) {
    //make the function called `only`
    //takes an index and an array as parameters
    let only = (index, array) => {
        //check if result array first element is equal to undefined
        if (result[0] === undefined) {
            //if this is first time
            //return (push current input element to result array)
            return result.push(array[index]);
        } else {
        //else do below
            //make a for loop for result array
            //starts at 0, ends before result arrays length, step 1
            for(let i = 0; i < result.length; i++) {
                //check if current <array>[<index>] is equal to current indexed element of the result array
                if(array[index] === result[i]) {
                    //break for loop
                    return;
                }
            }
        }
        //return (add current function input element to the result array)
        return result.push(array[index]);
    }
    //make result array 
    let result = []
    //make a for loop for the <array> elements
    for (let i = 0; i < array.length; i++) {
        //call the only function with the parameters
        //current index, <array>
        only(i, array);
    }
    //return result array
    return result;
}

module.exports.each = unique;

/**
 * returns a new array where each element returned true when tested with the input funciton
 * @param {array} array: a list of elements to test
 * @param {funciton} func: a function to test the <array> elements with
 * @returns {array} 
 * 
 */

function filter  (array, func)  {
    //make result array
    let result = []
    //make a for loop for <array>
    for(let i = 0; i < array.length; i++) {
        //check if calling <func> with current index returns true
        if(func(array[i], i, array)) {
            //if so then add the current <array> element to the result array
            result.push(array[i]);
        }
    }
    //return result array
    return result;
}

module.exports.each = filter;

/**
 * function takes a list of elements and a function. Returns an array where each element in the <array> returned false when 
 * tested by the <func>
 * @param {array} array: list of elements to test
 * @param {funciton} func: a function to test array items
 * @returns {array}
 */

function reject  (array, func)  {
    //make result array
    let result = []
    //make a for loop for <array>
    for(let i = 0; i < array.length; i++) {
        //check if calling <func> with current index returns false
        if(!func(array[i], i, array)) {
            //if so then add the current <array> element to the result array
            result.push(array[i]);
        }
    }
    //return result array
    return result;
}

module.exports.each = reject;

/**
 * Function tests each item in an array with the input function. It returns an array of two array, sub array one is the elements
 * that returned something truthy, sub array two is an array of elements that returned something falsey when passed into the input
 * funciton.
 * @param {array} array: a list of items to test
 * @param {function} func: a function to test the items with
 * @returns {array, array. nested in an array} [[], []]: two arrays nested in another array
 */

function partition  (array, func)  {
    //make a result array
    //initialized with two nested arrays
    let result = [[],[]];
    //make a for loop for <array>
    for (let i = 0; i < array.length; i++) {
        //check if the current element returns true when calling the callback funciton with
        //current element, index, <array>
        if(func(array[i], i, array)) {
            //if returned true then 
            //add element to the first sub array in result array
            result[0].push(array[i]);
        } else {
            //if returned false 
            //add element to the second sub array in result array
            result[1].push(array[i]);
        }
    }
    //return result array
    return result;
}  

module.exports.each = partition;

/**
 * map function takes a collection of items either an array or object. passes in each element to the input function. saves 
 * the return of each function call to an array, returns that array.
 * @param {*} collection: an array or object to test the nested values
 * @param {function} func: a function to test the collection items
 * @returns {array} array: an array of the return values from <func> and <collection>
 */

function map (collection, func) {
    //make storage Array
    let stor = []
    //check if the collection input is an Array
    if(Array.isArray(collection)) {
        //if <collection> is array
        //make a for loop to iterate through the collection Array values
        for(let i = 0; i < collection.length; i++) {
            //call the input function and pass in
            //current element, index, <collection>
            //add the result to the end of the 
            stor.push(func(collection[i], i, collection));
        } 
    } else {
        //if <collection> is not array then
        //make a for in loop to iterate through the collection key values 
        for (let key in collection) {
            //callback function with
            //current value, key, <collection>
            stor.push(func(collection[key], key, collection));
        }
    }
    //return storage array
    return stor;
}

module.exports.each = map;

/**
 * finds every value in <array> with <prop> as the property, stores those properties in an array and returns that array
 * @param {array} array: an array of object to test
 * @param {*} prop: the property name to search for
 * @returns {array} returns an array of property values that share the key name with <prop>
 */

function pluck  (array, prop)  {
    return _.map(array, function(E) {return E[prop]});
}

module.exports.each = pluck;

/**
 * the every function checks every item in <list> and checks it with <func>. If even one item returns false or falsey the function
 * returns false, otherwise it returns true
 * Edge Cases: if function does not return a boolean: check if the return value is falsey
 * -if function was not provided: check if the <list> elements are falsey
 * @param {array || object} list: list of items to test
 * @param {*} func: a function in which to test the <list> items
 * @returns {boolean} boolean: returns true or false
 */

function every(list, func) {

    //check if <func> is a function
    if(func instanceof Function) {
        //if function is provided 
            //check if the <list> is an Array
            if(Array.isArray(list)) {
                //if yes then make a for loop to iterate over the <list> Array
                for (let i = 0; i < list.length; i++) {
                    //call the callback function with these parameters
                    //parameters are current element, it's index, <list>
                    if(!func(list[i], i, list)) {
                        //if the callback function returns false then return false
                        return false;
                    }
                }
            } else {        
                //if not an array then make a for IN loop for <list>
                for (let key in list) {
                //callback function with
                //parameters are current value, current key, <list>
                    if(!func(list[key], key, list)) {
                    //if callback equals false then return false
                        return false;
                    }
                }
            }
    } else {
        //if function was not provided then

            //check if <list> is an Array
            if(Array.isArray(list)) {
                //if yes then make a for loop to iterate through <list> array
                for (let i = 0; i < list.length; i++) {
                    //if the current element is falsy then 
                    if(!list[i]) {
                        //return false
                        return false;
                    }
                }
            } else {
                //if <list> is not an array then
                    //make a for IN loop to iterate through <list> object
                    for (let key in list) {
                        //if any of the <list> values return falsy then
                        //return false
                        if(!list[key]) {
                            return false;
                        }
                    }
            }   
    }                    
    //return true
    return true;
}

module.exports.each = every;

/**
 * the some function checks every item in <list> and checks it with <func>. If even one item returns true or truthy the function
 * returns true, otherwise it returns false
 * Edge Cases: if function does not return a boolean: check if the return value is truthy
 * -if function was not provided: check if the <list> elements are truthy
 * @param {array || object} list: list of items to test
 * @param {*} func: a function in which to test the <list> items
 * @returns {boolean} boolean: returns true or false
 */


function some(list, func) {

    //check if <func> is a function
    if(func instanceof Function) {
        //if function is provided 
            //check if the <list> is an Array
            if(Array.isArray(list)) {
                //if yes then make a for loop to iterate over the <list> Array
                for (let i = 0; i < list.length; i++) {
                    //call the callback function with these parameters
                    //parameters are current element, it's index, <list>
                    if(func(list[i], i, list)) {
                        //if the callback function returns true then return true
                        return true;
                    }
                }
            } else {        
                //if not an array then make a for IN loop for <list>
                for (let key in list) {
                //callback function with
                //parameters are current value, current key, <list>
                    if(func(list[key], key, list)) {
                    //if callback equals true then return true
                        return true;
                    }
                }
            }
    } else {
        //if function was not provided then

            //check if <list> is an Array
            if(Array.isArray(list)) {
                //if yes then make a for loop to iterate through <list> array
                for (let i = 0; i < list.length; i++) {
                    //if the current element is truthy then 
                    if(list[i]) {
                        //return true
                        return true;
                    }
                }
            } else {
                //if <list> is not an array then
                    //make a for IN loop to iterate through <list> object
                    for (let key in list) {
                        //if any of the <list> values return truthy then
                        //return true
                        if(list[key]) {
                            return true;
                        }
                    }
            }   
    }                    
    //return false
    return false;
}

module.exports.each = some;

/**
 * reduce function acts on every element in <array>. From first to last it stores the return value from one function and passes
 * it to the next, starting with the <seed>.
 * Edge Case: If no seed was given it is replaced with the return statement from the first function call
 * @param {array} array: a list of elements to affect and add together
 * @param {function} func: a function to affect each item in <array>
 * @param {*} seed: a starting value for the return function adder
 * @returns {*} returns the value of all the function calls put together
 */

function reduce  (array, func, seed)  {
    //make a storage variable
    let stor;
    //check if a <seed> was given
    if(seed !== undefined) {
    //if <seed> was given
        //assign the storage variable with callback function called with
        //<seed>, <array>[0], 0
        stor = func(seed, array[0], 0);
    //if no seed was given then
    //assign storage variable with the first element of <array>
    } else {
        stor = array[0];
    }
        //make a for loop for <array>
        //start 1, end before <array>s length, step 1
        for (let i = 1; i < array.length; i++) {
            //callback function, Param 
            //storage variable, <array>[i], i
            //store the return of callback in storage function
            stor = func(stor, array[i], i);
        }
        //return storage variable
        return stor;
    }

    module.exports.each = reduce;

/**
 * Extend takes two or more objects. Copies the properties from <obj2> into <obj1>. If there are more objects their properties
 * are also passed in
 * @param {object} obj1: the object to mutate and add other properties to
 * @param {object} obj2: the object to copy the properties from
 * @param  {...any} objs: any number more of objects to copy properties from
 * @returns {object} returns <obj1> with the mutated values
  */

function extend  (obj1, obj2, ...objs)  {
    //make result object
    //initialized with reference of <obj1>
    let result = obj1;
    //make a for In loop for <obj2> 
    for(let key in obj2) {
        //add properties from <obj2> to result object
        result[key] = obj2[key];
    }
    //check if <...objs> was given
    if (objs !== undefined)
        //if yes then
        //make a for loop for the <...objs> array
        for(let i = 0; i < objs.length; i++) {
            //make a for In loop for current object element
            for(let key in objs[i]) {
                //add current property to result object
                result[key] = objs[i][key];
            }
        }


    //return result object
    return result;
}

module.exports.each = extend;