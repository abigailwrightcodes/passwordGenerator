// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options



var passwordLength;

function passwordAcceptance () {
passwordLength = parseInt(prompt("How many characters in password? (8-128 charecters"));
var myTooLowAlert = "Password must contain atleast 8 characters! Please try again";
var myTooHighAlert = "Password cannot contain more than 128 characters! please try again";

var passwordAccept = "your password will include " + passwordLength + " charecters";


  if (passwordLength > 8 && passwordLength < 128 ) {
    alert(passwordAccept);
    return passwordLength = passwordLength;
  }

  else if (passwordLength < 8) {
    confirm(myTooLowAlert);
    passwordAcceptance();
  }
    else if (passwordLength > 128) {
      confirm(myTooHighAlert);
      passwordAcceptance();
    }

  }
  

passwordAcceptance();

  console.log("password length: " + passwordLength);




var passwordIncludes = [];
 var includesUppercase = confirm ("Include Uppercase?")
 var incluedSpecial = confirm ("Include special Character?")
 var includeNumber = confirm ("Include Number?")
 var passwordIncludes;


12
if (includesUppercase && incluedSpecial && includeNumber) {
 var passwordIncludes = [].concat(lowerCasedCharacters, upperCasedCharacters, specialCharacters, numericCharacters)

  console.log(passwordIncludes)


} else if (includesUppercase && incluedSpecial) {
  var passwordIncludes = [].concat(lowerCasedCharacters, upperCasedCharacters, specialCharacters)
  console.log(passwordIncludes)


} else if (incluedSpecial && includeNumber) {
  var passwordIncludes = [].concat(lowerCasedCharacters,specialCharacters, numericCharacters)
  console.log(passwordIncludes)

} else if (includesUppercase && includeNumber) {
  var passwordIncludes = [].concat(lowerCasedCharacters,upperCasedCharacters, numericCharacters)
  console.log(passwordIncludes)

} else if (incluedSpecial === true){
  var passwordIncludes = [].concat(lowerCasedCharacters,specialCharacters)
  console.log(passwordIncludes)

}  else if (includeNumber === true) {
  var passwordIncludes = [].concat(lowerCasedCharacters, numericCharacters)
  console.log(passwordIncludes)
} else if (includesUppercase === true) {
  var passwordIncludes = [].concat(lowerCasedCharacters,upperCasedCharacters)
  console.log(passwordIncludes)
}else {
 var passwordIncludes = lowerCasedCharacters
  console.log(passwordIncludes)
}




function getPasswordOptions() {

}

// Function for getting a random element from an array

// function getRandom(arr) {

// getRandom();

// Function to generate password with user input
function generatePassword() {
return ("it works")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);