// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { result } = require("lodash");////////////This was not originally commented out. If more probelms arise 

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = (value) => value;

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*         E - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*         E - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//rely on the real typeof method and handle for Arrays and Null
_.typeOf = (value) => {
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

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
// then return []
*   2) What if <number> is greater than <array>.length?
// then return the whole Array
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = (array, number) => {
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

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = (array, number) => {
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

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
* Constraint
*   1) Do not use [].indexOf()!
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = (array, value) => {
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
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
* Constraint
*   1) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = (array, value) => {
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

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = (collection, func) => {
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
//console.log(_.each(["a","b","c"], function(e,i,a){ console.log(e)}));// should be 'a' 'b' 'c'
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = array => { ////////////////////////////////////This one took me two tries, but I got it on the second try without asking for help (outside of google). it is worth review.
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

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
//this one accepts a collection and a function. return result of function for each element in <collection> array
*/
_.filter = (array, func) => {////////////////I tried extra credit first. Problem was I could not get my own _.each function to work lol.
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
//console.log(`${_.filter([1,2,3,4,5], function(x){return x%2 === 0})} should be [2, 4]`);

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = (array, func) => {
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
//I copy pasted it. but it was my own code.

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing in the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = (array, func) => {
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

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
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


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = (array, prop) => {
    return _.map(array, function(E) {return E[prop]});
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//function takes two parameters, collection and function
_.every = function(list, func) {

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
}//////////////////////FIRST TRYYYYY!!!!!

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
//I understand this one and you bet your ass I am going to copy paste it from the last one. 
//We are in crunch time! all I need is to get those tests passing!

//function takes two parameters, collection and function
_.some = function(list, func) {

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
}//////////////////////FIRST TRYYYYY!!!!!

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = (array, func, seed) => {
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
}/////////////I was freaking out about recursive function last night (they are difficult for me)
//then I took a step back, reviewed the basics, and gave up.
//I played video games and went to bed. But I came back the next day and did it!

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = (obj1, obj2, ...objs) => {
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

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
