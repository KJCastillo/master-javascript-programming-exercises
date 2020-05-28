function getElementsUpTo(array, n) {
  // your code here
  var x = array.splice(0, n)
  return x
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); 