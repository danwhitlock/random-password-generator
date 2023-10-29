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

var passwordLength;       // variable to store the chosen password length
var lowerChars;           // variable to store whether lower case characters have been requested
var upperChars;           // variable to store whether upper case characters have been requested
var numericChars;         // variable to store whether numeric characters have been requested
var specialChars;         // variable to store whether special characters have been requested
var chosenChars = [];     // array to store every possible character the password can contain, based upon the users choices

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("Enter a password length between 8 and 128 characters");  // ask for desired length

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {        
    alert("You must enter a number between 8 and 128.  Please try again"); // if input value is too low, too high or not a number, flag error message
  }

  lowerChars = confirm("Include lower case characters?"); // ask if lower case should be included
  console.log ("Lower Case = " + lowerChars);
  if (lowerChars) {
    chosenChars.push(...lowerCasedCharacters);  // if user chose this option, add all possible characters from that array to chosenChars 
    
    // using the ... (spread operator) makes sure that when added, they are all merged into a single array, rather than being added as separate arrays
  }
  
  upperChars = confirm("Include upper case characters?"); // ask if upper case should be included
  console.log ("Upper Case = " + upperChars);
  if (upperChars) {
    chosenChars.push(...upperCasedCharacters);  // if user chose this option, add all possible characters from that array to chosenChars 
  }

  numericChars = confirm("Include numbers?"); // ask if numbers should be included
  console.log ("Numbers = " + numericChars);
  if (numericChars) {
    chosenChars.push(...numericCharacters);  // if user chose this option, add all possible characters from that array to chosenChars 
  }
  
  specialChars = confirm("Include special characters?");  // ask if special characters should be included
  console.log ("Special = " + specialChars);
  if (specialChars) {
    chosenChars.push(...specialCharacters); // if user chose this option, add all possible characters from that array to chosenChars 
  }

  console.log(chosenChars);

  if (!lowerChars && !upperChars && !numericChars && !specialChars) {
    alert("You must choose at least one password option.  Please try again"); // if no option was chosen, flag error message
  }
};

// Function for getting a random element from an array
function getRandom(array) {
  return array[Math.floor(Math.random()*array.length)];
};

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

};

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