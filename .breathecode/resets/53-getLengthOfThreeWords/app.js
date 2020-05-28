function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var x = word1.concat(word2, word3)
  return x.length
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);