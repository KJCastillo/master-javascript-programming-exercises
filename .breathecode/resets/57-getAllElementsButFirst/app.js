function getAllElementsButFirst(array) {
  // your code here
  var x = array.slice(1)
  return x
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output);