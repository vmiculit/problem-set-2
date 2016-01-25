// Problem Set 2

// 1. firstReverse

console.log("// firstReverse")

var firstReverse = function(string) {

	return string.split("").reverse().join("")

}

console.log(firstReverse("something else"))


// 2. swapCase

console.log("// swapCase")

var swapCase = function(string) {

	var words = string.split(" ")

	for (var i = 0; i < words.length; i++) {

		var letters = words[i].split("")

		for (var i2 = 0; i2 < letters.length; i2++) {

			if (letters[i2] === letters[i2].toLowerCase()) {
				letters[i2] = letters[i2].toUpperCase()
			} else {
				letters[i2] = letters[i2].toLowerCase()
			}
		}

		words[i] = letters.join("")

	}

	return words.join(" ")

}

console.log(swapCase("SomeThing hELLO wORLD Hello World!"))


// 3. letterCount

console.log("// letterCount")


var duplicateLettersInWordCount = function(string) {

	var letters = string.split("")

	var countedLetters = {}

	for (var i = 0; i < letters.length; i++) {

		if (letters[i] in countedLetters) {
			countedLetters[letters[i]] += 1
		} else {
			countedLetters[letters[i]] = 1
		}
	}

	var result = 0

	for (var i in countedLetters) {

		if (countedLetters[i] > 1) {
			result += 1
		}
	}

	return result
}


var letterCount = function(string) {

	var words = string.split(" ")

	var result = {
		word : "",
		count : 0
	}

	for (var i = 0; i < words.length; i++) {

		if (duplicateLettersInWordCount(words[i]) > result.count){
			result.count = duplicateLettersInWordCount(words[i])
			result.word = words[i]
		} 

	}

	if (result.word === "") {
		return -1
	} else {
		return result.word
	}

}

console.log(letterCount("Today, is the greatest day ever!"))


