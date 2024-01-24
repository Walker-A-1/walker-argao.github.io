/**
 * Functions:
 * 0. Introduction: Functions are reuseable instructions stored in a single name. Functions are vital to space and time efficiency in programming. Whithougt functions
 * coders would be forced to rewrite complex code whenever they needed it. Once you understand how functions work you can reuse complex code whenever you need, by 
 * simply calling its name. If you understand the native functions that other programmers left then you don't even need to code them!
 * 
 * 1. The first phaze of using a function is actually creating it, to do that you use the keyword `function` followed by the parameters or inputs of your function in 
 * parenthesis then the actual instructions of your function surrounded by curly braces. To execute or call a function you simply type the functions name to invoke it.
 * Followed by arguments or the inputs of the function surrounded by parenthesis.
 * 
 * 2. Functions can take inputs to be able to react to different states of the code or perform a list of instructions on a certain peice of information. 
 * When a function is being defined the inputs are called parameters, they are like car seats, you can specify what the function will do with the inputs by telling 
 * it what to do with the parameters.
 * When a function is invoked the information you give as an input to function is refered to as arguments. Those will be the passengers who sit in the seats of your 
 * function.
 * 
 * 3. Named functions in javascript is a way to create function. It involves writing the function keyword followed by the name of your function. Then the inputs
 * or parameters for your function surrounded by parenthesis. Lastly the actual instructions you want your function to perform everytime it is called, these are 
 * surrounded by curly braces. 
 * 
 * 4. When you create a named function normally it is hoisted to the top. If you do not want that to happen you may want to contain a function in a variable. This can
 * be done by assigning a function to a variable. This can be done by using the function keyword, parenthesis for parameters, and curly braces for instructions.
 * That would be reffered to as an anonomous function. 
 * 
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
 * Javascript function can be very versatile, to the convinience or detriment of the programmer. Javascript functions can be able to take in an indefinite number
 * of inputs and then still work with no inputs passed in. On the flip side JS functions can have 0, 1, or multiple outputs / side effects.
 * If your function is not codded to take 0 inputs it will simply resolve to nothing. If your function can not handle above a certain number of inputs it will just ignore
 * them. You must specify what your function is to do when more or less inputs are passed in. The logic will run as follows `//If there are no inputs then do this instead`
 * or `//if there are more inputs then expected then do this instead`. Specifying multiple outputs is much of the same, the logic runs as follows 
 * `//if this condition is true then change the number of outputs to this`.
 * When I use `this` in backtics I am refering to the code in curly braces you want to execute when the condition is true. Not to be confused with the `this` keyword.
 * 
 * 6. When creating a function there is also the question of scope to consider. Can my function see the code it is accessing? Scope is created for var variables inside
 * a function code block, let and const variables also create a new scope when they are inside a for loop, if statement, as well as a function code block. 
 * When a scope is created the code inside the scope can access the variables outside of that scope but code outside of the scope can not access any variable initialized
 * inside the scope.
 * 
 * 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
 * that closure stays ALIVE, and data can continue to exist in these closures! ///
 * Function Closure: Closure in Javascript is when Functions reference values or other functions in an outside local scope. This can be useful when creating 
 * constructor objects, constroctor counting functions can hold onto separate counting values as to not interfere with each other but still work identically.
 * closures can also be useful in keeping values anonomous. 
 *
 */


//////////// Below wright working code examples for the concepts above. Explain the code examples above then and wright in comments to explain what the code is 
//////////// returning and doing.

//1. Function Declaration + Function Call //
//the function below is a simple instruction to print the words `my input is ` followed by whatever was passed into the function. 
//The functions name is `myFunFunction`
//Below that is the invocation of the function. On that line the instructions in the function are actually executed.
function myFunFunction(input) {
    console.log(`my input is ${input}`);
}
myFunFunction('hiii'); // logs `my input is hiii` to the consol.

//2. Difference between function argument and parameters //
/* The first example shows a function declaration where the input is called `parameter`. This is to demonstrate that the function inputs are called parameters when 
the function is being defined.
Under that is a variable named `argument` which is then being passed into a function invocation of soSum. This is to demonstrate that inputs are reffered to as 
arguments when they are being given to a function invocation. */
function doSumin(parameter) {
    console.log(parameter);
}
let argument = 'I\'m tired'
doSumin(argument); //prints `I'm tired` to the console.

//3. NAMED function syntax //
/* Below is the syntax for a named function. The functions name is `myFunctuion`
Notice how the word Function is spelled incorectly in the name. This is fine because we created the function.
The function also makes no sence and servers no purpose. Well its purpose is to be a demonstration and it completes that. So in turn the function does make sense. 
*/
function myFunctuion(input) {
    return 1 + 1;
}
myFunctuion(2);// resolves to 2. But the result is never observed or used so it matters not.

//4. assign a function to a variable //
/*Below I have to example of assigning a function to a variable. The first is putting an anonoumous function in a var variable. 
The second is reassigning the var variable to an array function. These are the two ways I can think of to assign a function to a variable. 
As you can see they both resolve to the same value because they both work the same.
*/
var myFunction = function(input) {
    return 1 + 1;
}
myFunction(); //resolves to 2.

var myFunction = (input) => {
    return 1 + 1;
}
myFunction(); //resolves to 2.

//5. Specify number of function inputs and outputs //
/*The function below can take multiple inputs and give multiple outputs. If the function below is only given one argument then it prints one string to the console and
 maybe does something else if you want it to. But if you give the function multiple inputs it will give up, print a string addmitting defeat to the console, then 
 return all the inputs it was give. The function is not just logging something to the console twice, it is logging a string to the console and then returning a value. 
 A side effect and a resolve value, then we procced to print the resolving value to the console so it looks the same.
*/
function processData(...inputs) {
    if(inputs.length === 1) {
        console.log('only one input? That much I can handle')
    } else {
    console.log(`I can't handle all of these. Here have them back.`);
    return inputs;
    }
}
processData(1); //prints 'only one input? That much I can handle'
console.log(processData('hiii', 'byeee', 1, 2, 3, true)); //prints `I can't handle all of these. Here have them back.`
//then the console log above me prints '"hiii", "byeee", 1, 2, 3, true'.
//6. Function scope //
/*This code is meant to demonstrate variable scoping in functions. the `canSee` function returns true if we have access to the variable in that part of the code, 
false otherwise.
The first two calls return true because we are trying to access some let and const variables on a lower scope then they created, so this works.
The thirst call returns false because we are trying to access a let variable on a lower scope, which does not work.
The forth function call returns true because the var variable we are trying to access is not scoped to if statements. 
The last two function calls resolve to false because we are trying to access var and let variables from outside there function scope. This does not work because all 
variables are contained / scoped to function code blocks.
*/
function canSee(input) {
    if (input === undefined) {
       false;
    } else {
        true;
    }
}
(() => {
    let variableLet = 1;
    var variableVar = 1;
    if(1 == 1) {
        canSee(variableLet);// resolves to true;
        canSee(variableVar);// resolves to true;
        let newLet = 1;
        var newVar = 1;
    }
    canSee(newLet);// resolves to false;
    canSee(newVar);// resolves to true;
})()
canSee(variableLet);// resolves to false;
canSee(variableVar)// resolves to false;

//7. Function Closures //
//the function named `myName` shows closure by calling the `printName` function inside its local scope. 
//this works because we are remaining inside the scope of the function, so it still has access to the `name` variable.
let myName = () => {
    var name = "walker"; 
    function printName() {
      console.log(name);//`name` is still accesable because we are in the local scope of the function
    }
    printName();
  }
  myName();//prints 'walker' to the consol.