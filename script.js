//special characters
var special = [ "@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
//numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//lower case characters
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
//capital characters
var capital = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
//combined arrays
var final = []
//password length
var passLength;
//final password
var finalPass = '';

var random ;
// Assignment Code


//prompt window

function generatePassword() {
  var passLength = window.prompt ("Enter password length (8-128)");
  //if statement to check length
  console.log(passLength);

  if (passLength<8 || passLength >128) {
    alert ("Password length must be a number between (8-128)");
    console.log("less than 8 or more than 128");
    return "";
  } 


  //check to see if special characters are included
  var containsSpecial = confirm ("Click 'OK' to confirm the use of special characters in your password OR hit cancel to move on without special characters.");
  
  if (containsSpecial === true) {
    final = final.concat(special);
    console.log(final);
  }

  //check to see if numbers are included
  var containsNumbers = confirm ("Click 'OK' to confirm the use of numbers in your password OR hit cancel to move on without numbers.");
  
  if (containsNumbers === true) {
    final = final.concat(numbers);
    console.log(final);
  }  

  //check to see if lower case is included
  var containsLowerCase = confirm ("Click 'OK' to confirm the use of lower case characters in your password OR hit cancel to move on without lower case characters.")
  
  if (containsLowerCase === true) {
    final = final.concat(lowercase);
    console.log(final);
  }

  //check to see if capitals are included
  var containsCapital = confirm ("Click 'OK' to confirm the use of capital letters in your password OR hit cancel to move on without capital letters.")
  
  if (containsCapital === true) {
    final = final.concat(capital);
    console.log(final);
  }

  if (containsSpecial === false && containsNumbers === false && containsLowerCase === false && containsCapital === false) {
    return '';
  }

  for (let i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random () * final.length);
    console.log(index);
    finalPass = finalPass.concat(final[index]);
    console.log(finalPass);
  }
  return finalPass;
}

function determineNumbers() {
  numbers = window.prompt("")
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
