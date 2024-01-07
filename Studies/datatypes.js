/**
 * DATA TYPES:
 * 0. Data types are an important basic for javascript coding. If you attempt to store data in the wrong format it can make logical errors and 
 * code errors.
 * 1. Numbers are a basic data type that do as their name describes, they store numbers. You can perform arithmatic on number data types. 
 * Any positive number is truthy and resolsves to true. 0 and negetive numbers are all falsy and resolve to false.
 * 2. String data type is meant to store text and characters. String text is separate from variable names. String data is always stored 
 * in between quotes, double quotes, or backticks. Every string character is zero indexed and can be accessed or mutated
 * 3. Boolean is true or false. Alows code to ask "should I do this?". Boolean can also be any other type of data. If you are trying to get 
 * true or false from another data type it will check its "truthyness". certain data will resolve to true and others to false
 * 4. Array is an ordered list of data, starting from 0 any element in an array can be accessed with braket notation.
 *  It can hold any kind of data, simple data like strings, numbers, and booleans. It can also hold complex data types like objects 
 * and even other arrays, this means it can take up an undefinite amount of space.
 * 5. Objects are complex data types, so if you try to copy them it will make a new reference for the object, meaning if you mutate the reference
 * you will change the original object. Objects store data similar to arrays with the key difference being the data is not ordered by index, it
 * is given a string name. Every element in an object is known as a property with a key and a value. Key is the name of the property and value
 * is the data contained.
 * 6. Functions are a way to store code instructions in a name and reuse them anytime. Functions can take in data called parameters when created
 * and called arguments when you call the function. Functions help us to not repeat ourselves makeing our code look cleaner and saving us time. 
 * Functions are called by their name followed by parenthesis with or without arguments inside. Functions are entirly hoisted, this means you can 
 * use them before they are defined.
 * 7. undefined is a data type. You get undefined if you try to reference a variable or piece of data that does not exist currently. 
 * undefined is falsey.
 * 8. null represents the absense of values in an object. It is a primitive data type and it resolves to falsey
 * 9. NaN stands for not a number. You get NaN when you try to perform arithmetic or other number operations on something that is not a number.
 * 10. Infinity and -Infinity are both global properties that represent the number infinity. 
 * 11. Difference of simple and complex data types is that simple data types are atomic they can not hold, collect, or aggregate other values, complex data types can!
 * This also means simple data is of a definite size (no more than 8 bytes of memory), while complex data can hold other complex data so it can be an indefinite size.
 * Simple data is copied by value but complex data is only copied by reference.
 * 12. Primitive values are passed to functions by copy and complex are passed by reference. This is the same concept as the section above. The difference is 
 * that we are trying to use simple and complex data in a function. Passing in simple data will create a copy and leave the original data untouched. Passing in a 
 * complex piece of data will mutate the original.
 */

//1. Numbers //
//here I have initialized number variable with 1.
//next I have added 1 to 1 and gotten 2
//next I have tested whether number is true or false
let number = 1;
console.log(number + 1); //prints 2
console.log(number ? true : false);// prints true

//2. String//
//line one I made a string variable and assigned it a mantra
//next I printed that string to the consol
//next I access the first character in string
//next I add some more words to string
let string = "I shall not fear, no matter how absolutly boring this work is";
console.log(string) //prints `I shall not fear, no matter how absolutly boring this work is`
console.log(string[0])//prints `I`
console.log(string += ". and this too");//`I shall not fear, no matter how absolutly boring this work is. and this too`

//3. Boolean// 
//here we have a variable called boolean with the value of true
//next we test if boolean is true
//last we test if the number infinity is true
let boolean = true;
console.log(boolean ? "this is true" : "this is false");// prints `this is true`
console.log(infinity ? "this is true" : "this is false");// prints `this is true`

//4. Array//
//first we have an array variable with 3 numbers, a boolean, and another array inside of it
//next we access the data at index 4 and print it
//last we have a for loop accessing every element in array and printing out the data it finds
let array = [1, 2, 3, true, ["another array"]];
console.log(array[4]);//prints ["another array"]
for (let i = 0; i < array.length; i++) {//this for loop goes through every element in array, starting from 0 and accessing the data from each part
    console.log(array[i]);//prints whatever data is currently being accessed from the array
}

//5. Object//
//here I have an initialized object with the name object
//next I access the property in object with the key `a`
//next is a for in loop to go through every element in object and print out the values
//last I initialize a new object with the name `newObj` and give it the value of object
//since objects are complex it copies the reference of object and not just the data.
//when I change the data of newObj then check that same data location on the original object it is in fact different
let object = {
    a: "one",
    b: "two",
    c: "three",
    Objectsss: {1: "another object"}
}
console.log(object["a"]);//prints `one`
for (let key in object) {//loops through every property in the object object
    console.log(object[key]);//prints each property value accessed by the for in loop
}
let newObj = object;
newObj["a"] = 'not one';
console.log(object["a"]);//prints `not one`

//6. Function//
//I have initialized a function called `makeSide` and called it
//makeSide has the side effect of printing something to the console. It does not resolve to a value when called
//Last I have a function called `add5`, it takes a number, adds 5 and returns it.
//I called this function before its initialization which is ok to do with function declarations 
function makeSide() {
    console.log("hiii")//prints `hiii`
}
makeSide(); //has the side effect of printing `hiii` to the console. resolves to undefined
console.log(add5(5));//prints 10
function add5(x) {
    return x + 5;
}

//7. undefined//
//here I am trying to access the variable `theBestVariable`. it does not exist so it resolves to undefined. undefined is falsey so when testing for true or false
//it resolves to false
console.log(theBestVariable ? "this is true" : "this is false");// prints `this is false` because undefined is falsey

//8. null//
//Here I have a function that searches for vowels in an input string and returns the length of those vowels
//null is different from undefined because it refers to the absence of data where an object is expected.
function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  console.log(getVowels('sky'));// Expected output: 0

//9. NaN//
//this code adds 2 to the string `barf` and tests if it is not a number
console.log(isNaN(2 + 'barf'));// prints true

//10. infinity//
//this code demonstrats a fact of infinity. It is always resolved to infinity
console.log(Infinity === Infinity - 1);//prints true

//11. simple vs complex data
//first we have an array called `arr`. It contains arrays inside array. 
//This is okay, to prove that the next line asks if `arr` is a valid array

//next I tried to copy the data of `arr` into `newArr`
//I then mutated a value of `newArr`
//when I called the value in the same spot from our first array we get the new mutated value
let arr = [1, ['smaller', 2, ['smallest', 3]]];
console.log(Array.isArray(arr)); //prints true

newArr = arr;
newArr[0] = 'because I said so';
console.log(arr[0]);//prints `because I said so`

//12. passing simple and complex data into a function
//here we have a function that adds five to a simple number or a complex array

//after that I initialize and call the function on `arre`. It is copied by refence and effects the original array without a return statement

//last I call the function with the number five. Being a simple datatype it adds five to five and returns the result
function mutateData(x) {
    if(typeof x === 'object') {
         x.push(5);
    }
    if(typeof x === 'number') {
        return x + 5;
    }
}
let arre = []
mutateData(arre)
console.log(arre);//prints [5]

console.log(mutateData(5));// prints 5