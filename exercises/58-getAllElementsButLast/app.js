function getAllElementsButLast(array) {
  // your code here
  array.pop()
   
  return array
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output);