/**
 * 0. Intro:
 *  Operators a simple but core part of javascript. Operators can assign value, compare to values, do math, 
 * and even compute if statements in a sigle line of code. We can use Assignment operators to give value to variables 
 * and increment or decrement the value in a simple way. Comparison operators and logical operators are useful when trying to compare
 * two values or resolve something to a boolean value. My favorite is the Ternary operator, it can condense an if statement into just one
 * line of code.
 * 
 *1. Assignment Operators: Assignment operators are used by taking two operands and assigning the value of the right operand to the left operand. 
 * This is done to give a variable a new value, make it increase or decrease by one, or to remember the results of a different operation completed to your right.
 * 
 * 2. Arithmetic Operators: Arithmetic operators are used to add two value together or simply increment or decrement by 1. 
 * They can be used for other simple math as well, for example finding sum, differnce, product, or the quotient of two numbers.
 *
 * 3. Comparison Operators: Comparison operators are used to compare two values to see if they are different or the same/similar.
 * They will return true or false. They can also be used with Bang to reverse the result, greater than or lesser than to add that condition to the operation.
 * 
 * 4. Logical Operators: Logical operators take one or two expressions and resolve to a boolean value and produce one logical boolean value.
 * They can be used to check if two results are true or not, to see if at least one result is true, or to reverse the operation.
 * 
 * 5. Unary Operators: Unary Operators are operators that take only one operand, either on the right or left. Typically used as shorthand, unary operators are
 * more effecient than other operators.
 * 
 * 6. Ternary 0perator (a ? b : c): The Ternary Operator is like shorthand for an if statment. It takes Three operands. It will return the second operand if the first is true.
 * and return the third operator if the first resolves to false.
 * 
 * 
 */

// 1. Assignment Operators //
//first example is of the basic assignment operator. It takes to value 'foo' and assigns it to the smalbein variable
//second example is of the addition assignment operator. It is short hand for current value plus new value. (increment = increment + 1)
//third example is of the subtraction assignment operator. It is short hand for current value minus new value. (decrement = decrement - 1)
//forth example is of the multiplication assignment operator. It is short hand for current value multiplied by a new value. (multiples = multiples * 2)
//fith example is of the divition assignment operator. It is short hand for current value divided by a new value. (quotient = quotient / 10)
//examples still needed %=, **=
// sixth example is the exponentiation assignment operator, it raises a variable to the power of the operand.
//seventh example is the remainder assignment operator, it divides the left operand by the right operand and assigns to remainder to the variable to the right.

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

var exponent = 10;
exponent **= 10;
console.log(exponent); // prints 10 to the console

var modulate = 12;
modulate %= 2;
console.log(modulate); // prints 0 to the console

// 2. Arithmetic operators //
//first example is adding 1 and 1 together
//second example is subtracting 1 from 1
//third example is multiplying 1 by 2
//forth example is finding the leftover value after dividing 1 by 2
//example code of +, -, /, %
//fith example is the division operator. Dividing 10 by 2 (/)
var sum = 1 + 1;
console.log(sum);//prints 2 

var difference = 1 - 1;
console.log(difference);//prints 0

var product = 1 * 2;
console.log(product);//prints 2

var modulated = 1 % 2;
console.log(modulated);//prints 1;

var quotient = 10 / 2
console.log(quotient); // prints 5

// 3. Comparison operators //
//first example asks is 1 greater than 2. Gives us false.
//second example asks is 1 less than 2. Gives us true.
//third example asks is the string of "1" loosley equal to the number 1. Which is true but they are not exactly the same thing so it is less useful.
//forth example asks the same questions, only with the strictly equal Operator. The sting of "1" is not the same type as the number 1 so it returns false.
//fifth example is the loosley not equal to. it will attemp to convert a string into a numeber.
//sixth example is the strictly no equal to. it evaluates the number value and the type difference of its operands.
console.log(1 > 2);//prints false

console.log(1 < 2);//prints true

console.log("1" == 1);//prints true
console.log(1 == 1);//prints true

console.log("1" === 1);//prints false
console.log(1 === 1);//prints true

console.log("1" != 1);//prints false
console.log(1 != 2);//prints true

console.log('1' !== 1); //prints true
console.log(1 !== 2); //prints true

console.log(1 >= 2); //prints false
console.log(1 >= 1);//prints true

console.log(1 <= 2);//prints true
console.log(2 <= 2);//prints true

// 4. Logical operators //
//first example shows the logical AND operator. It only returns true if both of its operands are true
//second example shows off the logical Or operator. It returns true if either right or left operand is true
//third example is the bang or not operator. It (UNO) reverses the boolean value to its right
console.log(true && true);//prints true
console.log(true && false);//prints false

console.log(false || true);//prints true
console.log(false || false);//prints false

console.log(!true);//prints false
console.log(!false);//prints true

// 5. Unary Operators //
//first example is the Bitwise not. It takes a value to the right, converts it to a number, adds one, and multiplies it by -1. -(x + 1)
//second example is the Void operator. It takes a value to the right, and returns undefined. That sounds useless, if you know something I don't pls share.
//third example is the typeOf operator. It will read the values type and return it as a string. It can not differenciate between a object and an array, returns 'object' for both
//forth example is the delete operator. It can delete a property from an object placed after it.
//example code void, typeOf, delete, ~
//Bitwise NOT
console.log(~3);//prints -4
console.log(~-3);//prints 2
console.log(~true);//prints -2
console.log(~"3.14");//prints -4

var wholeFunction = function() {return 4};
console.log(void wholeFunction());//prints undefined... no matter what you put into it

console.log(typeof "flkjfkjl");//prints "string"
console.log(typeof 1);//prints "number"

var boolllll = {first: 'one', "infinity!": infinity, second: 'two'};
delete boolllll["infinity!"];
console.log(boolllll);//prints [object Object] {first: "one", second: "two"}

// 6. Ternary Operators //
//This is a very basic example to illustrate how the ternary operator works. 
console.log(true ? "it was true" : "it was false");//prints "it was true".
console.log(false ? "it was true" : "it was false");//prints "it was false".