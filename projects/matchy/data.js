/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Bro why can't we use let and const!!!?
var animal = {}
animal.species = 'dog';
animal['name'] = 'Kanga';
animal['noises'] = []
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []
noises[0] = 'ARF!';
noises.push('GRR');
noises.unshift('RUF!');
noises[noises.length] = 'YELP';
//console.log(noises.length);
//console.log(noises[noises.length - 1]);
//console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises.push('SKREE');

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot notation: object.key;
 * bracket notation: object[key];
 * 2. What are the different ways of accessing elements on arrays?
 * bracket notation: array[index]
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []
animals.push(animal);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
var fish = { species: 'fish', name: 'Fredrick', noises: ['blub', 'Buy That Stock!']}
animals.push(fish);
var cat = { species: 'cat', name: 'Candy Corn', noises: ['*hits grounds*', '*leaves ground*']}
animals.push(cat);
//I logged the console and it showed up twice. Why did that happen?
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// In my humble opinion I believe that an array would be the best way to store a list of friends. Because it is commonly used to make ordered lists of values. thank you.
var friends = []
function getRandom(arr) {
  return arr[Math.ceil(Math.random())]
}
friends.push(getRandom(animals).name);
animals[0].friends = friends;
//console.log(animals[0]);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}