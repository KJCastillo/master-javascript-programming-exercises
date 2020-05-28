function getElementsAfter(array, n) {
  // your code here
  var x = array.slice(n)
  x.shift()
  return x
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output);