/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/


/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/

var Car = {
  make: 'bmw',
  model: '325ix',
  year: '1988',
  color: 'silver',
  engineDisplacement: '2449',
  doors: '2',
  transmission: 'manual',
  driveTrain: 'awd',
  semicolons: true,
  seats: [
    {
      FLseat: "Driver",
      FRseat: "Passenger",
      rearBench: true,
    }
  ],
  dimensions: { length: 13, width: 5, },
  transmitLocation: function () {
    if ( ) {
      //code
    } else {
      //code
    }
  },
}
/*

Get one of the properties from your object using dot notation

*/

console.log(Car.semicolons)

/*

Get one of the properties from your object using bracket notation

*/


/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/

Car.semicolons = false

/*

Call your car's method

*/

car.transmitLocation(beep)
