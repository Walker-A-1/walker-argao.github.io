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
 * 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
 * 
 * 3. Loop over an Array, forwards and backwards
 * 
 * 4. Loop over an Object

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

////3. Loop backwards and forwards over an Array

////4. Loop over an Object