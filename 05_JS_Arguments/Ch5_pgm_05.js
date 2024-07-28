// Define a cube function
var cube = function(numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

// Test the cube function
cube(3);
cube(-2);
cube(1.5);
cube(0);

// Define a squareRoot function
var squareRoot = function(numberToRoot) {
  var result;
  result = Math.sqrt(numberToRoot); // Using Math.sqrt to calculate square root
  console.log("The square root of " + numberToRoot + " is " + result);
};

// Test the squareRoot function
squareRoot(9);
squareRoot(25);
squareRoot(2);
squareRoot(100);
