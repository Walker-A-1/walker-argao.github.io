// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //2. make an 'addContact(contact)' method. this takes a contact object and adds it to the list
        addContact: function(contact) {
            contacts.push(contact);
        },
        //3. make a findContact(fullName) method. input is a string of a first and last name with a space in between
        findContact: function(fullName) {
            //make a for loop iterating over the contacts array
            for (let i = 0; i < contacts.length; i++) {
                //check if the current indexed array Object shares the same firstName value as the first string in the input value
                //and check if the last name is the same as the second array in the input value
                if(contacts[i].nameFirst === fullName.split(' ')[0] && contacts[i].nameLast === fullName.split(' ')[1]) {
                    //If both are yes then return the current indexed array Object (whole thing)
                    return contacts[i];
                }
            }
        },
        //4. make a removeContact(contact) method. the contact input will be an object
        removeContact: function(contact) {
            //make a for loop to iterate over the contacts array
            for (let i = 0; i < contacts.length; i++) {
                //check if the current contacts index value matches the contact input
                if (contacts[i] === contact) {
                    //if yes then remove the current contacts index
                    contacts.splice(i, 1);
                }
            }
        },
        //5.make a printAllContactNames() method
        printAllContactNames: function() {
            //make a storage variable to hold a string of all of the full names
            let strg = "";
            //make a for loop iterating over the contacts array
            for (let i = 0; i < contacts.length; i++) {
                //get the firstname value of the current object 
                //get the lastname value of the current object
                //concatinate them together with a space in between
                strg += contacts[i].nameFirst + " ";
                strg += contacts[i].nameLast;
                //check if this is NOT the last index in the array
                if (i !== contacts.length - 1) {
                    //if so add a newline break after that
                    strg += "\n";
                }
                //add that to the storage string.
            }
            return strg;
        }
        
    }
}

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //have the function take in 3 parameters
    //make it return and object that looks like this {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
    return {id: id, nameFirst: nameFirst, nameLast: nameLast}
} 







// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
