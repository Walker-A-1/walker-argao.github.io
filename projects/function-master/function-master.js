//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { should } = require("chai");

//object is an Object
function objectValues(object) {
    //make a storage Array
    let strg = []
    //make a for in loop to iterate over the input object Array
    for (let key in object) {
        //push the currect keyed value to the storage Array
        strg.push(object[key]);
    }
    //return the storage Array
    return strg;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//object is an object
function keysToString(object) {
    //make a storage Sting
    let strg = '';
    //make a for in loop iterate over object input
    for (let key in object) {
        //check if this is the first time we are assigning something to the storage String
        if (strg === '') {
            //if yes then assign this key to the storage string by itself
            strg = key;
        } else {
          //else concatinate this key to the storage string. itself + new key
            strg += ` ${key}`;
        }
    }
    //return String
    return strg;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//object is an Object
function valuesToString(object) {
    //make a storage String
    let strg = '';
    //make a for in loop. iterate over object
    for (let key in object) {
        //check if storage String is empty
        if (strg === '') {
            //if so assign storage string to the currect keyed value
            strg = object[key];
        //make sure there is not a stray Object inside the object input for some reason
        } else if(typeof object[key] === 'string') {
                //else concatinate the storage string with itself, a space, and the current keyed value
                strg += ` ${object[key]}`;
        }
    }
    //return the storage string
    return strg;
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//collection is either an Array or an Object
function arrayOrObject(collection) {
    //use isArray method 
    //if true then return 'array'
    //if false then return 'object'
    return Array.isArray(collection) === true ? 'array': 'object';
}// check it out! just one line of code!

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//string is a String
function capitalizeWord(string) {
    //make a storage string
    let strg = ''
    //take the first letter of the string input.
    //capitalize it
    //assign it to the storage String
    strg = string[0].toUpperCase();
    //get the whole string exept the first letter (use .slice(1, string.length);).
    //concatinate that to the storage String 
    strg += string.slice(1, string.length);
    //return the storage string
    return strg;
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//string is a Sting of words
function capitalizeAllWords(string) {
    //make a storage Array to house the words before we change them
    let storArr = []
    //make a storage Sting to house the finished product
    let finStr = '';
    //split the string words up by spaces " "
    //assign those words to the storage Array
    storArr = string.split(" ");
    //make a for loop, iterate over the storage Array
    for (let i = 0; i < storArr.length; i++) {
        //make a storage string. For the current word product
        let curWord = '';
        //get the first letter of the current indexed string
        //capitalize it and assign it to the storage String
        curWord = storArr[i][0].toUpperCase();
        //slice off the rest of the currect indexed string
        //concatinate it to the storage string
        curWord += storArr[i].slice(1, storArr[i].length);
        //check if the finished product String is empty
        if (finStr === '') {
            //if yes then assign the for loop string to the finished product string
            finStr = curWord;
        } else {
            //else concatinate the for loop string to the finished product string WITH a space before it
            finStr += ` ${curWord}`;
        }
    }
    //return the finished product string
    return finStr;
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Also capitalize the first letter
//object is an Object. with a `name` property somewhere in there
function welcomeMessage(object) {
    //make a storage string. for the word with first letter capitalized
    let stor = '';
    //get the first letter of the objects name property value
    //assign it the the storage String Capitalized
    stor = object.name[0].toUpperCase();
    //get the rest of the object name properties value
    //slice off the string minus the first letter
    //concatinate it to the storage String
    stor += object.name.slice(1, object.name.length);
    //return `Welcome ${storage String}!`
    return `Welcome ${stor}!`;
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//object is an Object, with a name property and a species property
function profileInfo(object) {
    //return '<Name> is a <Species>'
    //where Name and Species are the property values of the object
    //But with the first letter capitalized
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;
}
//use this capitalizeWord(string)
//Another one liner! get wrecked
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//object has a property called `noises`
//may not have any noise elements.
function maybeNoises(object) {
    //check if the object noises property is empty
    if (object.noises === undefined) {
        //if yes return the same string as above
        return 'there are no noises';
    } else if (object.noises.length === 0) {
        //if yes then return 'there are no noises'
        return 'there are no noises';
    //also check if there is no noises property at all
    } else {
        //else make a storage String for final product
        //initialize it with the first item in the object noises array
        let stor = object.noises[0];
        //make a for loop. iterate over the object noises property
        //and start at index 1
        for (let i = 1; i < object.noises.length; i++) {
            //concatinate the current object noises array index item. to the storage String
            //with a space before it
            stor += " " + object.noises[i];
        }
        //return the storage string 
        return stor;
    }
}

//maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl"
//console.log(`"${maybeNoises({noises:["bark", "woof", "squeak","growl"]})}" should equal "bark woof squeak growl"`);
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
hasWord() : Should take a string of words and a word and return true
 if <word> is in <string of words>, otherwise return false.
*/
function hasWord(string, word) {
    //I understand what the assignment is trying to teach me. So I am just gonna use the includes method
    return string.includes(word);
}
//var data = "This is a super awesome string of words";
/*assert.strictEqual(hasWord(data, "awesome"), true);
assert.strictEqual(hasWord(data, "words"), true);
assert.strictEqual(hasWord(data, "turtle"), false);*/
//console.log(hasWord(data, "awesome"), hasWord(data, "turtle"))
//console.log(true, false);
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//name is a string of the friend you wish to add
//object has a property of `friends` with an array
function addFriend (name, object) {
    //add the name String input to the end of the object friends property arrray value
    object.friends.push(name);
    //return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//name is a String of a friend name we are searching for
//object has a friends property with an Array of Strings
function isFriend(name, object) {
    //if there is no object.friends Array. return false
    if(object.friends === undefined) {
        return false;
    }
    //make a for loop. iterate through object.friends Array
    for (let i = 0; i < object.friends.length; i++) {
        //if name input is strictly equal to object.friends current indexed value
        //return true
        if (name === object.friends[i]) {
            return true;
        }
    }
    //return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
nonFriends() : Should take a name and a list of people, 
and return a list of all the names that <name> is not friends with
*///keep in mind the isFriend() function

/**INSTRUCTIONS
 * 
 * loop through all of the array object value:
 *  check if the name property does NOT match our name input
 *  check if the name property does NOT match any of the friends in our input friends property
 *      If those checks pass push the current name property to the storage array
 * then return the storage array
 */

//name is a string 
//array is an Array of people Objects
function nonFriends(name, array) {
    //make a storage Array
    let stor = []
    //loop through input array values
    for (let i = 0; i < array.length; i++) {
        //check if the current object.name does NOT match our input name
        if(array[i].name !== name) {
            //make a memory boolean. assigned to true
            let mem = true;
            //loop through the friends array of the current object
            for (let a = 0; a < array[i].friends.length; a++) {
                //check if one of the current value of the friends Array matches our name input
                if (name === array[i].friends[a]) {
                    //if so assign the memory boolean to false;
                    mem = false;
                }
            }
             //if memory holds true. push the current array[i].name to the storage array
             if (mem) {
                stor.push(array[i].name);
             }
        }
    }
    return stor;
}
/*
var data = [
    {name: "Jimmy", friends:["Sara", "Liza"]},
    {name: "Bob", friends:[]},
    {name: "Liza", friends: ["Jimmy"]},
    {name: "Sara", friends: ["Jimmy"]}
  ];
 // assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
 // assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
 // assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
 console.log(`${nonFriends('Jimmy', data)} should equal ['Bob']`);
 console.log(`${nonFriends('Bob', data)} should equal ['Jimmy', 'Liza', 'Sara']`);
 console.log(`${nonFriends('Sara', data)} should equal ['Bob','Liza']`);
 */

 /**
  * "updateObject() : Should take an object, a key and a value. 
  * Should update the property <key> on <object> with new <value>. 
  * If <key> does not exist on <object> create it."
  */
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//parameters are all self explanitory
function updateObject(object, key, value) {
    //assign the key-value pair to the object.
    //it should have the same affect wether the key-value pair previously exist or not.
    object[key] = value;
    //I guess we need a return statement to actually mutate the object.
    return object;
}
//var data = {a: "one", b: "two", "hokey": false};
//console.log((updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false}));
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * "removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
  
 */
function removeProperties(object, array) {
    //make a for loop. iterate over the input array
    for (let i = 0; i < array.length; i++) {
        //remove object keys that share the name with current array index.
        delete object[array[i]];
    }
    //return the input object.
    return object;
}
// var data = {a: "one", b: "two", "hokey": false};
// console.log(removeProperties(data, ["a","hokey"]));
// console.log((data, {b: "two"}));
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//"dedup() : Should take an array and return an array with all the duplicates removed"
function dedup(array) {
    //create a storage Array
    let stor = [];
    //make a for loop to iterate through the input Array with i
    for (let i = 0; i < array.length; i++) {
        //make a memory boolean with the initialized value of true
        let mem = true;
        //make a for loop to iterate through the storage Array with ia
        for (let ia = 0; ia < stor.length; ia++) {
            //check if the current INPUT element is equal to the current storage element.
            if(array[i] === stor[ia]) {
            //if yes than set the memory boolean to false
            //else do nothing
            mem = false;
            }
        }
        //if the memory boolean holds true
        //than push the current INPUT element to the storage Array
        if(mem) {
            stor.push(array[i]);
        }
    }
    //return the storage Array
    return stor;
}

    //   var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
    //   var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
    //   console.log(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
    //   console.log(dedup(arrayTwo), ["hello", "world"]);
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}