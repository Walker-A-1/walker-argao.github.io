/**
 * Variables:
 * 
 * 0: Variables are like tentacles pointed at the information we want it to remember. Variables should have a clear and concise name that describes the information they 
 * refer too. Variables are a useful way to store and reuse data, so that we do not have to remember and retype our information everytime we want to use it.
 * This also means that we can change the information inside our code without rewriting each piece of data. All we have to do is change what data the variable is change
 * the data the variable is looking at and we can change what data our code has (where variables are inserted).
 * 
 * 1: Declaration and Assinment:
 * Declaration means creating a variable. Communicating to the computer "I want to make a variable". Using the keyword `var`, `let`, or `const`, followed by the name 
 * of your variable.
 * 
 * Assinment is when you tell your variable what information to hold onto. This can be done when you create the variable, later, or not at all.
 *  
 * 2: Var, Let, Const: 
 * Var, let, and const are the keywords you need to make a variable. Var is the oldest and most problamatic, if you tried to get the variable data before you declared it,
 * you would simply get `undefined`. Typically you are not suppose to get access to a variable before you declare it. But if you made that error the program would still work,
 * it would not tell you there was a mistake. Var also does not stay scoped inside certain code blocks. This means that if you made a for loop or an if statement the variable
 * would not stay put. this is a problem if we want to reuse a simple variable name that is for the same purpose, only is a different part of our code. Var variables can also 
 * be redefined. This means you want to make a variable with the same name as an existing variable. This is a ploblem because you would lose the information held by the 
 * variable previously. The worst part is that this works with javascript. If you attempt to redeclare a variable you will not get an error message, the code will likely just
 * not work the way you intendend. It will then be up to you to look over all of your code manually and find the ploblem. 
 * Thankfully all these problems were solved with the indroduction of ECMA6 in 2015, with the introduction of the let and const keywords. If you try and access variables 
 * declared with those keywords Javascript will give you an error message. They are also block scoped. So reusing simple variable names in different code blocks 
 * (if and for loops) will be fine as they will not effect each other. They can also not be redeclard (const can not even be redefined) so if you try and declare a variable 
 * with these keywords and a name you already used the program will tell you there was an error. This is very useful as you do not have to comb through your code manually 
 * and waste time on these mistakes. Javascript will tell you there was a mistake made, and point out exactly where the mistake was made.
 * 
 * 3: Hoisting:
 * Hoisting is the process Javascript takes before it reads and executes your code. it will bring your variables declared with var and your functions too the top of your code.
 * Note that only the initialaztion of var variables are hoisted, that means only there name is hoisted and not there value (it will be undefined).
 * Functions are hoisted code block and all. So you can put those at the bottom, but that will not save you from them being wrong if they try to use variables declared after
 * the funciton is used.
 * It is proper form to declare all of your variables at the top of your code.
*/
// 1. Declaration //
//Here I am telling javascript that I want to make a variable called variable. 
//Note: the value is undefined because I did not give this tentacle anything to hold onto.
var variable;

console.log(variable); // this will return `undefined`

// 1. Assinment //
//Here I am declaring a new variable `amString` and telling it to hold onto the value of `hiiiii`.
var amString = 'hiiiii';

console.log(amString); //this will return our value `hiiiii` because that is what we told the variable to hold on to.

// 2. Var //
//Here we can access the inside variable outside of the if statement. We can reference the variable before declaration. We can also redeclare the variable. 
//This creates a logical error, the program will not flag logical errors. This will waste a lot of time.
//problem can be redeclared
//problem initialization hoisted
console.log(inside);//prints undefined. not helpful.
if(true) {
    var inside = 'yo';
}
console.log(inside);//prints 'yo'. not good.
var inside = 'go away';
console.log(inside);//prints 'go away. without errors.

// 2. Let and Const //
//explain block scope:The code below is written improperly. if you tried to run it you would get two reference errors and one syntax error. 
// This is because the let and const variables are block scoped, not hoisted, and can not be reassigned.
//Javascript
//explain redeclaration
//explain hoisting
if(!false) {
    console.log(ik + fi);// flags a reference error because it can not be referenced after it's definition.
    let ik = 'Hi Ther'; 
    const fi = 'e World';
    let ik = 'Leave!'; // flags a syntax error because it was already defined.
}
console.log(ik + fi); // flags a reference error because it is trying to access variable that are inside a code block.

// 3. Hoisting //
//Here I have the variable top at the top, it works because we can reference it anywhere underneath it.
//I have the variable bottom at the bottom, it causes problems if you try to access it before its declaration. 
//No error message means we have to work out the error and find it ourselves.
//The variable is fine anywhere because the program hoists it to the top.
//But if the function is called with a var variable before the variable declaration (like on line 87###) it will create a logical error.
var top = 5;
console.log(add(top, bottom)); //prints NaN. Without an error it is not helpful
function add(x, y) {
    return x + y;
}
console.log(add(top, bottom)); //prints NaN. Without an error it is not helpful
var bottom = 2;
console.log(add(top, bottom)); //prints 7



    /** leave this here so I don't forget
     * Variables:
     * 
     * 0: no more than 5 sentences needed for introduction.
     * 
     * 1: then describe the sections listed on the slide
     * 
     */
    