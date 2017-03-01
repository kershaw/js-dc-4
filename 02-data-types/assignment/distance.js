var x1 = 5;
var y1 = 6;
var x2 = -3;
var y2 = -7;
var deltaX = x2-x1;
var deltaY = y2-y1;
var squareX = Math.pow(deltaX, 2);
var squareY = Math.pow(deltaY, 2);
var squareXY = squareX + squareY;
var distance = Math.sqrt(squareXY);
console.log(squareXY);


/**
This returns 225, that doesn't seem right

1. subtract x2 from x1 to get deltaX
2. subtract y2 from y1 to get deltaY
3. square both deltaX and deltaY
4. add the square of deltaX to the square of deltaY
5. get the square root of the sum from step 4
 
