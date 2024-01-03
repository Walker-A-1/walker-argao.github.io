
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
  //make a storage function called `odd`
    //assign it a for loop that will draw the first chess board
    //for loop. start num at 1, end after n, step 1
  let odd = '';
    for (let num = 1; num <= n; num++) {
      //check if num is even
      if (num % 2 === 0) {     
        //if num is even then push a space" " to the storage function
        odd += ' ';
      } else {
        //if num is odd then push a hashtag to the storage funciton
        odd += '#';
      }
    }
  return odd;

  //make a storage string called `even`

  //make a result string
    

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
