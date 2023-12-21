//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
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
console.log(maybeNoises({}));

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

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

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