// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    //return true if value is an array
    return Array.isArray(value);
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    //check if the value is an object then
        //if value is an array return false
        //or if value is null return false
        //if if value is a Date return false
        //if previous come up false return true
    //if value is not an object return false
    if (typeof(value) === 'object') {
        if (Array.isArray(value)) {
            return false;
        } else if (value === null) {
            return false;
        } else if (Object.prototype.toString.call(value) === "[object Date]") {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }

}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    //check if value is an object by typeof 
        //if value is a Date return false
        //if value is null return false
        //if value is an array return true
        //else return true 
    //if anything else if passed in return false
    if (typeof(value) === 'object') {
        if (value instanceof Date) {
            return false;
        } else if (value === null) {
            return false;
        } else if (Array.isArray(value)) {
            return true;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *   o - "array"
 *   o - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *   o - "null"
 *    - "function"
 *   d - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    //check if the value is a Date
        //return "date"
    //check if the value is an object
        //check if value is an array
            //return 'array'
        //check if value is null
            //return 'null'
        //else return 'object'
    //else return the typeof value
    if (value instanceof Date) {
        return 'date';
    } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return 'array';
        } else if (value === null) {
            return 'null';
        } else {
            return 'object';
        }
    } else {
        return typeof value;
    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
