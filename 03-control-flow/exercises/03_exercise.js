/*

  In-class Exercise 02
  Independent coding

  Prompt:

  If we list the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all multiples of 3 or 5 below 1000.

*/
// 2 Loops
// 1 increments by 3
// 1 increments by 5
// add the two loops together

// var i = 0
// var j = 0
//
// for ( var i = 3; i > 1000; i+3 ) {
//   console.log(i[i])
// }
// for ( var j = 5; i > 1000; i+5 ) {
//
// }

var total = 0

for (var i=0; i < 10; i++ ) {
  if (i % 3 === 0) {
    total = total + i
  } else if (i % 5 === 0) {
    total += i
  }
}

console.log( total)
