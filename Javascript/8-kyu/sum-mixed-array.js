// Instructions

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Example (Input -> Output)
// * [9, 3, '7', '3'] -> 22
// * ['5', '0', 9, 3, 2, 1, '9', 6, 7] -> 42

//  My solution
function sumMix(x){
  return x.reduce((sum, element) => sum + Number(element), 0);
}

// Other solution
function sumMixOther(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}