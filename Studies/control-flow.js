////Control Flow
/**
 * 0. Control flow is the order in which a computer program decides to execute. Just like how humans have a unconscious 
 * process of deciding what to do next, computer programs have an order in which they will do the things you want them to do. 
 * A computer program like javascript is meant to read and run code from left to right then top to bottom. But when it comes 
 * across a line of code with multiple steps it will create a stack of code that it plans to execute. This stack of code 
 * follows the first in last out order. That means the program will prioritize the most recent instruction it was given, 
 * while remembering the order in which it was given previous instructions. 
 * 
 * 1. When the computer hits an If statement it will change its control flow. Based on if the specified condition in 
 * parentheses is true or false the computer may run this code or skip over it. Effectivly changing its control flow.
 * 
 * 2. Else-If statements are the next step from If statements. Else-If follows an If statement and only executes if the 
 * If statement preceding had a false condition and did not execute. When the computer reaches the Else-If statement it 
 * tests to see if the Else-If condition in parentheses after it is true. If that condition is true then the following 
 * code in curly braces is executed.
 * 
 * 3. Else statements are written after an If statement. Else statements only execute if the condition for the If
 * statement before it was false. Else statements are simply written, with the else keyword, followed by the code to 
 * execute surrounded by curly braces.
 * 
 * 4. Switch statements are useful if you need to check a lot of conditions, but you do not want to continuously write Else-If statements. Switch statements 
 * test a bunch of conditions of an input variable, then execute code if that case condition is true. Switch statements are written with the switch keyword 
 * followed by your testing expression in parentheses then curly braces. Inside the curly braces you will use the case keyword followed by the condition of your 
 * input expression, then a colon. After the colon is the code you want to execute if the previous case was true. You can then follow that with another 
 * "case" statement to test multiple statements. Finally you can add a break statement, if you want to only execute code once and not check the other cases. 
 * At the end, you can add the keyword default: then some code. Your default case will execute, if all other cases returned false.
 */

// 1. If Statements //
/* Below are two if statements. The first one ask // is 1 loosley equal to the string '1' \\ which is true so it's code is 
executed. Printing a message to the console.
The second asks // is 1 strickly equal to the string '1' \\ which is false to the code never executes and is skipped.
*/
if(1 == '1') {//Condition is true so the code executes
    console.log('I had fun talking to you.');// prints 'I had fun talking to you.' to the console
}

if(1 === '1') {//Condition is false so the code does not execute. 
    console.log('You said like to many times, it makes you sound dumb, you should break that habit.');// Does not execute. Which is good because that is a rude thing to say to someone you just met.
}

// 2. Else-If Statements //
/*Below is an If statement followed by an Else-If statement. The condition for the If statement will always be false 
so the code for the If statement will never execute. After it is an Else-If statement, with a condition that will always 
return true so the code for the Else-If statement will execute because the statement before it was false, and
it's current condition is true.
*/
let obj = {};
if(obj === {}) {//Condition is false so below code does not execute
    console.log('Taylor Swift sucks');//never executes, which is good because it contains a logical error.
} else if (obj !== {}) {//Condition is true so the below code executes
    console.log('Taylor Swift does not suck');//prints logically correct messege to the console.
}

// 3. Else Statement //
/* Below is a basic If statement followed by an Else statement. The condition for If statement is just false, 
so it's code does not execute. The computer skips over the If statement code, and execute the code in the Else statement.
*/
if(false) {// is false so below never executes
    doSumthingBade();
} else {//preceding If statement was false so below code executes
    Console.log('Be Kind');// prints 'Be Kind' to the console.
}

// 4. Switch case //
/*Below is a switch case that tests what <expression> is equal to. <expression> is equal to the string 'y' so the code after the colon is executed.
The first case failed and was skipped and the default case was never reached / not needed.
*/
let expression = 'y';
switch(expression) {
    case 'x'://is false so below does not execute.
        console.log('hate');
      break;
    case 'y'://is true so executes below
        console.log('ILuvoYou');//prints 'ILuvoYou' to the console.
      break;//ends the switch statement and does not check anything else.
    default:
      console.log('not input sorry');
  }