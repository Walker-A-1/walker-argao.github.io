/**
 * 0. Intro:
 *  Operators a simple but core part of javascript. Operators can assign value, compare to values, do math, 
 * and even compute if statements in a sigle line of code. We can use Assignment operators to give value to variables 
 * and increment or decrement the value in a simple way. Comparison operators and logical operators are useful when trying to compare
 * two values or resolve something to a boolean value. My favorite is the Ternary operator, it can condense an if statement into just one
 * line of code.
 * 
 * 1. Assignment Operators: Assignment operators are used by taking two operands and assigning the value of the right operand to the left operand.
 * 
 * 2. Arithmetic Operators: Arithmetic operators are used to add two value together or simply increment or decrement by 1 (just math LOLZ).
 *
 * 3. Comparison Operators: Comparison operators are used to compare two values to see if they are different of the same/similar.
 * They will return true or false.
 * 
 * 4. Logical Operators: Logical operators take one or two expressions that resolve to a boolean value and produce one logical boolean value.
 * 
 * 5. Unary Operators (!, typeOf, -):
 * 
 * 6. Ternary 0perator (a ? b : c):
 * 
 * 
 */

//1. Assignment Operators
//first example is of the basic assignment operator. It takes to value 'foo' and assigns it to the smalbein variable
//second example is of the addition assignment operator. It is short hand for current value plus new value. (increment = increment + 1)
//third example is of the subtraction assignment operator. It is short hand for current value minus new value. (decrement = decrement - 1)
//forth example is of the multiplication assignment operator. It is short hand for current value multiplied by a new value. (multiples = multiples * 2)
//fith example is of the divition assignment operator. It is short hand for current value divided by a new value. (quotient = quotient / 10)
var smalbein = 'foo';
console.log(smalbein);// prints "foo" to the console

var increment = 1;
increment += 1;
console.log(increment);// prints 2 to the console

var decrement = 1;
decrement -= 1;
console.log(decrement);// prints 0 to the console

var multiples = 1;
multiples *= 2;
console.log(multiples);//prints 2 to the console

var quotient = 20;
quotient /= 10;
console.log(quotient);//prints 2 to the console

//2. Arithmetic operators
//first example is adding 1 and 1 together
//second example is subtracting 1 from 1
//third example is multiplying 1 by 2
//forth example is finding the leftover value after dividing 1 by 2
//example code of +, -, /, %
var sum = 1 + 1;
console.log(sum);//prints 2 

var difference = 1 - 1;
console.log(difference);//prints 0

var product = 1 * 2;
console.log(product);//prints 2

var modulated = 1 % 2;
console.log(modulated);//prints 1;

//3. Comparison operators
//first example asks is 1 greater than 2. Gives us false.
//second example asks is 1 less than 2. Gives us true.
//third example asks is the string of "1" loosley equal to the number 1. Which is true but they are not exactly the same thing so it is less useful.
//forth example asks the same questions, only with the strictly equal Operator. The sting of "1" is not the same type as the number 1 so it returns false.
console.log(1 > 2);//prints false

console.log(1 < 2);//prints true

console.log("1" == 1);//prints true
console.log(1 == 1);//prints true

console.log("1" === 1);//prints false
console.log(1 === 1);//prints true

//4. Logical operators
//explain example code
//example code of &&, ||, !

//5. Unary Operators
//explain example code
//example code +, typeOf, -

//6. Ternary Operators
//explain example code
//example code a ? b : c