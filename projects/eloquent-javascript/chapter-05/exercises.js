// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//use concat and reduce
function flatten(arr) {
  return arr.reduce((acum, item) => 
  {
    return acum.concat(item);
  })
}
//Param: It takes a value, a test function, an update function, and a body function. 
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, step, body) {
  //base case
  if(!test(val)) {
    return val;
  }
  //code

  //recursion
  body(val);
  return loop(step(val), test, step, body);
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//every item in array has to pass the test for the function to return true

function every(arr, test) {
  for(let i = 0; i < arr.length; i++) {
    if(!test(arr[i])) {
      return false;
    }
  }
  return true;
}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  //make two tally variables
  //one for ltr count and one for rtl count
  //initialize both at 0
  let ltrCount = 0;
  let rtlCount = 0;
  //make a for loop to iterate through the characters in <text>
  for (let i = 0; i < text.length; i++) {
    //make a variable for the char code
    //initialize it with UTF-16 code of the current character
      //with charCodeAt method 

    //use the characterScript helper function to find the script object for current character
    let script = characterScript(text.charCodeAt(i));
    //check the direction of the above object that got returned
      //if the direction is 'ltr' then add 1 to the count variable and vice versa for 'rtl'
    if(script !== null && script.direction === 'ltr') {
      ltrCount++;
    } else {
      rtlCount++;
    }
  }
  //return 'ltr' or 'rtl' for which ever coresponding variable is greater
  return ltrCount > rtlCount ? 'ltr' : 'rtl';
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
