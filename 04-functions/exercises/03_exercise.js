/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/
// function addOne( numOne, numTwo ) {
//   return (numOne + numTwo) / 2
// }
//
// var myNum = addOne( 5, 10 )
// console.log( myNum )
//





/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

*/
// var a = x1 - x2
// var b = y1 - y2
// var c = Math.sqrt( a*a + b*b );
//
// function distance (array1 , array2) {
//   return array1 / array2
// }
//
// var array1 = [2,3]
// var array2 = [4,7]
// console.log( distance )

// function distance (point1, point2 ) {
//   return Math.sqrt (Math.pow (point1[0] - point1[1], 2 ) + Math.pow(point2[0] - point2[1], 2))
// }
// var answer = distance ([0,0], [3,7])
// console.log(answer)

function distance (point1, point2){
 var deltaX = point1[0] - point2[0]
 var deltaY = point1[1] - point2[1]

 var deltaXsquared = Math.pow(deltaX,2)
 var deltaYsquared = Math.pow(deltaY,2)

 var answer = Math.sqrt (deltaXsquared + deltaYsquared)
 return answer
 }
var answer = distance ([0,0], [3,7])
console.log(answer)
