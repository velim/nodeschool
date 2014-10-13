function countWords(inputWords) {
  var res = {}	
  return inputWords.reduce(function(previousValue, currentValue, index, inputWords) {
				if (currentValue in previousValue) {
					previousValue[currentValue] = ++previousValue[currentValue]
				}else{
					previousValue[currentValue] = 1
				}
				return previousValue;
			},res)
}

module.exports = countWords

/*
 function countWords(arr) {
   return arr.reduce(function(countMap, word) {
     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
     return countMap
   }, {}) // second argument to reduce initialises countMap to {}
 }

 module.exports = countWords
 */