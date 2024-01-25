/////LOOPS!/////
/**
 * 0. In order to repeat an instruction in javascript we would have to copy and paste the instruction the amount of times
 * we need, but that is monotonous and space intensive. Thankfully we do not have too! Loops in javascript give us
 * the ability to repeat an instructions as many times as we like. There are loops that can be told to repeat a certain
 * amount of times based on an input and there are loops that can repeat an indefinite number of times, while a certain 
 * condition holds true.
 * 
 * 1. The three main types of loops are while, for, and for-in loops. While loops will repeat as long as a specified condition
 * is still true. For loops will repeat themselves a specified number of times, they can also be told to repeat for however 
 * long the list is we give it. For-in loops are used to loop through a specified object. For-in loops are required to go 
 * through objects because that list type is unordered.
 * 
 * 2. To be able to count any number of times, or an indefinite number of times, we need to use a for loop. 
 * To use a for loop you write the `for` keyword followed by parenthesis specifying how many times we should repeat some instructions.
 * first in the parenthesis is the start, here you initialize a counting variable (typically named i for index) and tell it
 * where to start. Next is the stop, this is the condition that we should stop, if you want to stop at 10 say //when i 
 * goes past 10 stop. Last is the step, how should your loop count, usually counting one at a time makes sence but if you
 * do need to count by more or less this is where that is specified. These are all separated by semicolons.
 * After the parenthesis is the curly braces, this is where you contain your actual intructions to repeat.
 * 
 * 3. To loop over an Array we use a for loop. To loop forwards through the array we need to start at zero and end before we 
 * reach the full length of the array, all minus one because arrays are zero indexed and start counting at 0. 
 * To loop backwards over an array we have to reverse the counting instructions. Make the loop start at the length of the 
 * array minus one. step should be minus one, or a negetive number. Have the loop end at 0.
 * 
 * 4. To loop over an Object you must use a For-In loop (typically). For in loops simlpy initialize a variable to represent
 * the keys in the object (typically named key, anything works tho). 
 * It is written with the for keyword followed by parentheses to specify what object to loop through.
 * In the parentheses you initialize a key variable, followed by the in keyword, then the object you want to loop through.
 * Ending with the curly braces containing the repeatable instructions.
 */

////1. While, For, and For-In Loops
/*
First loop is the while loop. It is logging the first element in the <copy> array to the console.
Then it is removing the first element in the array and starting over. It repeats as long as the length of copy is not 0.

Second loop is a for loop. I is hard coded to repeat its instructions 5 times (starting at 0). 

Third loop is the for-in loop. It is meant to loop through the <objectNumbers> object and print all of its property values.
*/
let numbers = [1, 2, 3, 4, 5];
let copy = [].concat(numbers);//makes a copy of <numbers> as to not destruct it
while(copy.length !== 0) {
    console.log(copy[0]);//prints 1, 2, 3, 4, 5 to the console. with separate calls
    copy = copy.slice(1);//removes the first element from copy
}
for(let i = 0; i < 5; i++) {
    console.log(numbers[i]);//prints 1, 2, 3, 4, 5 to the console. with separate calls
}
let objectNumbers = {
    first: 1,
    second: 2,
    third: 3,
    forth: 4,
    fifth: 5
}
for(let key in objectNumbers) {
    console.log(objectNumbers[key]);//prints 1, 2, 3, 4, 5 to the console. with separate calls
}

////2. Loop any number of timer forward or backwards
/*First for loop starts counting at one and ends after whatever <amount> is, also prints the number it is on. 
Second for loop starts counting at whatever <amount> is and ends at one. Printing the number it is on every time.
Notice the step is negetive, this makes the loop count backwards.
*/
let amount = 1000;
for(let i = 1; i <= amount; i++){
    console.log(i);//prints numbers starting at 1 and ending at 1000
}
for(let i = amount; i >= 1; i--) {
    console.log(i);//prints numbers starting at 1000 and ending at 1
}

////3. Loop backwards and forwards over an Array
/*The first for loop prints all the values in count from first to last. Using bracket notation and the changing value of i 
to get the values at every index.
The second loop starts counting at the end of the count array length minus one. It steps by minus one. It ends after it has
gone below zero.
*/
let count = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < count.length; i++) {
    console.log(count[i]);//prints 1,2,3,4,5,6,7,8,9,10 to the console. separatly
}
for(let i = count.length - 1; i >= 0; i--) {
    console.log(count[i]);//prints 10,9,8,7,6,5,4,3,2,1 to the console. separatly
}

////4. Loop over an Object

let object = {
    first: 1,
    second: 2,
    third: 3,
    forth: 4,
    fifth: 5
}
for(let key in object) {
    console.log(`At the ${key} key the value is ${object[key]}`);/* This prints the contents below. Separatly.
    "At the first key the value is 1"
    "At the second key the value is 2"
    "At the third key the value is 3"
    "At the forth key the value is 4"
    "At the fifth key the value is 5"
    */
}