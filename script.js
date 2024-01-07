var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters in password? (8-128 characters)"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return getPasswordOptions();
  }

  var includesUppercase = confirm("Include Uppercase?");
  var includesSpecial = confirm("Include Special Character?");
  var includesNumber = confirm("Include Number?");

  return {
    length: passwordLength,
    includesUppercase: includesUppercase,
    includesSpecial: includesSpecial,
    includesNumber: includesNumber
  };
}

function generatePassword() {
  var options = getPasswordOptions();
  var passwordIncludes = lowerCasedCharacters;

  if (options.includesUppercase) {
    passwordIncludes = passwordIncludes.concat(upperCasedCharacters);
  }

  if (options.includesSpecial) {
    passwordIncludes = passwordIncludes.concat(specialCharacters);
  }

  if (options.includesNumber) {
    passwordIncludes = passwordIncludes.concat(numericCharacters);
  }

  var generatedPassword = '';
  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(passwordIncludes);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
