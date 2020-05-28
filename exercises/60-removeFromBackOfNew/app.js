function removeFromBackOfNew(arr) {
  // your code here
  var x = arr.slice(0, -1)
  return x
}

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); 
console.log(arr);
