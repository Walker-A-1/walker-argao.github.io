// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require(/* Replace this with the name of your lodown! */);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//param: array
//objective: take an array of customers and return the number of customers with a penis (male)
//constrait: use the filter method
var maleCount = function(array) {
    //make a result variable
    //assign result to the value of the filter method called on the <array>
    const result = array.filter((sex) => sex === 'male');
    //return the length of result array
    return result.length;
};                  //tested myself. seems to work

var femaleCount = (array) => {
    //make storage array
    let storage = []
    //make for loop for <array>
    for (let i = 0; i < array.length; i++) {
        //if element is equal to 'female' then 
        if (array[i] === 'female') {
            //push 1 to storage array
            storage.push(1);
        }
    }
    //make a result variable
    //initialize it with
        //use reduce method on storage 
    let result = storage.reduce(
        (total, current) => total + current
    );

    //return result variable
    return result;
};//                                        Tested by Walker 

//should go through an array of customers and return the oldest customers name
var oldestCustomer = (array) => {
    //make a mutable storage variable
    //initialize with first element in array
    let stor = array[0];
    //for loop for <array>
    //start at 1 but still for indexes
    for(let i = 1; i < array.length; i++) {
        //check if the current objects age is greater than the age of the storage variable
        if(array[i]["age"] > stor["age"]) {
            //then assign storage variable to the current element
            stor = array[i];
        }
    }
    //return the name value of the storage variable
    return stor["name"];
};

var youngestCustomer = (array) => {
    //make a mutable storage variable
    //initialize with first element in array
    let stor = array[0];
    //for loop for <array>
    //start at 1 but still for indexes
    for(let i = 1; i < array.length; i++) {
        //check if the current objects age is less than the age of the storage variable
        if(array[i]["age"] < stor["age"]) {
            //then assign storage variable to the current element
            stor = array[i];
        }
    }
    //return the name value of the storage variable
    return stor["name"];
};

var averageBalance = (array) => {
    //make a collection array
    let collection = []
    //for loop for <array>
    for (let i = 0; i < array.length; i++) {
        //1. get the balance value of element
        //2. use stringToNumber function to convert the string to a number we can use in arithmatic
        //4. add to collection array
        collection.push(stringToNumber(array[i]["balance"]));
    }
    //make an imutable num variable
        //initialized wiht the length of the collection array
    const num = collection.length;
    //return below
        // reduce the collection array to one value
            //divide above result by num variable
    return collection.reduce((total, current) => total + current) / num / 100;
};
  //make a conversion helper function
  //this function should take a string with dollar signs and periods and return a number without special characters
  function stringToNumber(string) {
      //make a storage string
      let stor = "";
      //remove any characters that are not numbers
      //make a for loop for <string>
      for(let i = 0; i < string.length; i++) {
        //if current element is a number string (isNum)
        if(notSpec(string[i])) {
          //concat current element to storage string
          stor += string[i];
        }
      }
    //return the string converted to a number
    return Number(stor);

  }
//make a helper function that confirms that returns true if the input it not a $ of , or .
function notSpec(x) {
  if(x === '$' || x === ',' || x === '.') {
    return false;
  }
  return true;
}
/*
### 6: `firstLetterCount`
 - **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
*/
var firstLetterCount = (arr, letter) => {
    //make a counting variable
    let count = 0;
    //for loop through <arr>
    for(let i = 0; i < arr.length; i++) {
      //check if current ["name"] starts with <letter>
      if(arr[i]["name"][0].toUpperCase() === letter.toUpperCase()) {
        //if yes then add one to counting variable
        count++;
      }
    }
    //return count
    return count;
  };/////I am building these in replit and pasting them here BTW™


var friendFirstLetterCount = (arr, customer, letter) => {
  //make a counting variable
  let count = 0;
  //access the customer object
  //stor that val
  let custObj = {}
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]["name"] === customer) {
      custObj = arr[i];
      break;
    }
  }
  //for loop through the customer objects friends array
  //loop through the friends array
  for(let i = 0; i < custObj['friends'].length; i++) {
    //if current friends name starts with <letter> 
      //then add one to counting variable
    if(letter.toUpperCase() === custObj['friends'][i]['name'][0].toUpperCase()) {
      count++;
    }
  }
  //return counting variable
  return count;
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
