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
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//make a function called add
//signature add(animals, animal) {}
//animals is an Array
//animal is an object
function add(animals, animal) {
    //check all of these conditions in the same if statement
    //does the animal object have a name property with length > 0
    //does the animal object have a species property with length > 0
    //does the animal object name property NOT match other name properties of the existing animal objects
    if(
        animal.name.length > 0 &&
        animal.species.length > 0
    ) {
        //if yes add that animal object to the animals Array
        for (let i = 0; i < animals.length; i++) {
            if(animals[i].name === animal.name) {
                return null;
            }
        }
        animals.push(animal);
    }
}
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
