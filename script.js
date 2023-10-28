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

var passwordLength; // variable to store the chosen password length
var lowerChars;     // variable to store whether lower case characters have been requested
var upperChars;     // variable to store whether upper case characters have been requested
var numericChars;   // variable to store whether numeric characters have been requested
var specialChars;   // variable to store whether special characters have been requested

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("Enter a password length between 8 and 128 characters");  // ask for desired length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {        
    alert("You must enter a number between 8 and 128.  Please try again"); // if input value is too low, too high or not a number, flag error message
  }

  lowerChars = confirm("Include lower case characters?");
  console.log ("Lower Case = " + lowerChars);
  upperChars = confirm("Include upper case characters?");
  console.log ("Upper Case = " + upperChars);
  numericChars = confirm("Include numbers?");
  console.log ("Numbers = " + numericChars);
  specialChars = confirm("Include special characters?");
  console.log ("Special = " + specialChars);

  if (!lowerChars && !upperChars && !numericChars && !specialChars) {
    alert("You must choose at least one password option.  Please try again");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
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