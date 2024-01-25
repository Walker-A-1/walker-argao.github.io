/**
 * STRING MANIPULATION
 * 
 * 0. Introduction
 * 1. string operators consist of the concatinate operator and the concatinate assignment operator. The concatinate operator 
 * adds two string values together and creates a totally new string value. The concatinate assignment operator combines the two strings values provided and assigns 
 * the value produced to the first string given
 * 2. Sting methods in javascript always produce a new value and do not change the original value, so you need to assign the product to a variable or observe it.
 * String methods are a way to act upon a string value and get a new value (hopefully the one that we want). You always need to call these methods with parenthesis
 * because they are technically functions.
 */

// 1. string operators //
//first I concatinate the first and last variables to produce a complete name
//second I concatinate the two name variables and assign them to the first variable, which doesn't make the most sence but this is boring so lets go fast
let first = 'Walker';
let last = 'Argao';
console.log(first + last);//produces `Walker Argao`

console.log(first += last);//produces `Walker Argao` assigned to first variable

// 2. string methods //
//String.slice() is a method to cut out a certain part of a string that we want. It takes two arguments. First argument is where you want to start, the start character 
//will be included in the final cutout. The second argument is the end of the cutout, it is excluded from the final product so only the character before the end argument 
//will be included.
//string.split() will split the given string and return the split elements in the form of an array. It can function without a parameter. If no parameter is given 
//then it will simply return that string inside an array. to specify where you want the string to be split you must put it inside quotation marks. If you give
//it a space in quotes it will split the string by every space (excluding the spaces).
//string.trim() method removes white spaces on either side of the string.
//string.toUpperCase() method returns the given string with every character in upper case. Regardless if any part of the string was upper case when given.
//string.padStart() adds some character to the start of a string. It takes two parameters. first parameter is how long you want the end result to be,
//if you want to end result to be four characters long then pass in a four. Second parameter is the character you want your string to be padded with
let string = "I shall not fear, fear kills me over and over. Without fear I die only once.              ";

console.log(string.slice(0, 16));// prints `I shall not fear`

console.log(string.split(" "));//print `[ 'I', 'shall', 'not', 'fear,', 'fear', 'kills', 'me', 'over', 'and', 'over.', 'Without', 'fear', 'I', 'die', 'only', 'once.']`

console.log(string.trim());//returns `I shall not fear, fear kills me over and over. Without fear I die only once.` without spaces on either side.

console.log(string.toUpperCase());//prints `I SHALL NOT FEAR, FEAR KILLS ME OVER AND OVER. WITHOUT FEAR I DIE ONLY ONCE.     `

console.log(string[0].padStart(4, "0"));//prints `000I`