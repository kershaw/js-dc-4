// module.exports.one = function () {
//   console.log ("one")
// }
// module.exports.two = function () {
//   console.log ("two")
// }

module.exports = [1,2,3,4]

//exporting a class
module.exports = function Person (name, height ) {
  this.name = name
  this.height = height
}
