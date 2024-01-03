
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//triangles should take a number parameter of `n`
//n input is how many lines of the triangle there will be
//example
/*
#
##
###
####
#####
######
 */
function triangles(n) {
  //make a for loop to console log all of the triangle levels individualy. start at 1. end after n. step by 1:
    for(let step = 1; step <= n; step++) {
      //log hashtag(s) to the console based on what step we are on
      console.log("#".repeat(step));
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//draw chessboard also takes a number parameter of `n`
//that decides how many characters high and long the chessboard will be
//constraint only use one console.log
//example drawChessboard(4) {} =>
/*
# # # 
 # # #
# # # 
 # # #
 */
function drawChessboard(n) {
  //make a result string
  let result = '';
  //make a storage function called `odd`
    //assign it a for loop that will draw the first chess board
    //for loop. start num at 1, end after n, step 1
  let odd = '';
    for (let num = 1; num <= n; num++) {
      //check if num is even
      if (num % 2 === 0) {     
        //if num is even then push a space" " to the storage function
        odd += '#';
      } else {
        //if num is odd then push a hashtag to the storage funciton
        odd += ' ';
      }
    }

  //make a storage string called `even`
  let even = '';
    for (let num = 1; num <= n; num++) {
      //check if num is even
      if (num % 2 === 0) {     
        //if num is even then push a space" " to the storage function
        even += ' ';
      } else {
        //if num is odd then push a hashtag to the storage funciton
        even += '#';
      }
    }
    //make a for loop to print the layers you need
    //start num = 1; stop after n; step 1
    for(let num = 1; num <= n; num++) {
      //check if this is the first time we have done this
      if(num === 1) {
        //if yes assign the result variable to an odd layer without a newline
        result = odd;
      } else {
      //if this is not the first time we have done this then
        //check if num is even
        if(num % 2 === 0) {
           //if yes then concatinate an even layer with a newline before it to the result String
          result += `\n${even}`;
        } else {
           //else concatinate an odd layer with a newline before it to the result String
          result += `\n${odd}`;
        }
      }
    }
  //console.log the result String
  console.log(result + `\n`);

}
console.log(`return statement of 4 ${drawChessboard(4)}`);
console.log(`return statement of 9 ${drawChessboard(9)}`);
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
