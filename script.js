// Assignment code here
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  console.log("Hey you click the button!")
  // Prompt the user for the password criteria
  // a. Password Length 8 < 128
  result = window.prompt("How many characters would you like you password to contain?");
  // b. Lowercase, Uppercase, numeric and/or special characters
  result = window.prompt = ("Would you like to include lowercase, Uppercase, numeric and/or special characters");
  // Validate the input
  // Generate the password based on criteria
  // Display password to the page
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