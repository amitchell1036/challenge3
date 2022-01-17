// Assignment code here
var generateBtn = document.querySelector("#generate");
function generatePassword(passwordLength){
  console.log("Hey you click the button!")
  // Prompt the user for the password criteria
  // a. Password Length 8 < 128
  confirm("Your password must contain at least 8 characters?");
  // b. Lowercase, Uppercase, numeric and/or special characters
  confirm("Your password must include lowercase, uppercase, numeric and/or special characters?");
  // Validate the input 
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numberChars + upperChars + lowerChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[1] = numberChars;
  randPasswordArray[3] = upperChars;
  randPasswordArray[1] = lowerChars;
  randPasswordArray = randPasswordArray.fill(allChars, 8);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
 return "Generated password will go here!"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);