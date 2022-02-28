function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");

  return reversedWord === word;
}

/* 
  Add your pseudocode here:
  
  const reversedWord = string.split("").reverse().join("");

  return reversedWord === word // true (or false)
*/

/*
  Add written explanation of your solution here:

  The algorithm will first create a variable to contain the reversed string.
  Then it will split the passed in string using split(),
  then it will reverse the split string using reverse(),
  then it will join the split/reversed string back together,
  then it will store this result in the new variable we created at the top of the function.
  
  The function will then have a return statement wherein the new string will be compared to the passed in string, returning true or false.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("racecar =>", isPalindrome("racecar"));
  console.log("wow =>", isPalindrome("wow"));
  console.log("saippuakivikauppias =>", isPalindrome("saippuakivikauppias"));

  console.log("");

  console.log("Expecting: false");
  console.log("robot =>", isPalindrome("robot"));
  console.log("javascript =>", isPalindrome("javascript"));
  console.log("encyclopedia =>", isPalindrome("encyclopedia"));
}

module.exports = isPalindrome;
