/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//make a funcntion called search
//it will accept an array parameter
//it will accept a name parameter
function search(array, name) {
    //create a for loop for the animal array
    for (let i = 0; i < array.length; i++) {
        //check if the name property of the current object in the array shares the same value as the name parameter
        if (array[i].name === name) {
            //if it does return the current indexed item in the array
            return array[i];
        }
        //if not then return "null"
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write a function with the signature `replace(animals, name, replacement) {}`
//animals is an Array
//name is a String
//replacement is a String
function replace(animals, name, replacement) {
    //make a for loop to iterate over the animals Array
    for (let i = 0; i < animals.length; i++) {
        //if the name key matches the name input then replace that entire object in the array with the input object
        if(animals[i].name === name) {
            animals[i] = replacement;
        }
    }
        //else do nothing

}
/**
 * 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.
 */
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//make a function with the signature `remove(animals, name) {}`
//animals is an array
//name is a string
function remove(animals, name) {
    //make a for loop. Iterate over the animals array
    for (let i = 0; i < animals.length; i++) {
        //check if any array objects name key match the name input
        if (animals[i].name === name) {
            //if yes then remove it
            //use slice to remove the specified array
            animals.slice(i, 1);
        }
    }
}
console.log(animals);
remove(animals, "Flappy");
console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
