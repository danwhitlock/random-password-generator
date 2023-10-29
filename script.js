
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

// Array of numeric characters to be included in password
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'];

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

// Variable to store the chosen password length
var desiredPasswordLength;       

// Variables to store whether each of the four options were chosen
var includeLowers;            
var includeUppers;           
var includeNumerics;         
var includeSpecials;         

// Array to hold a combined list of all characters from the options the user chose
var chosenChars = [];     


// Function to prompt user for password options and store chosen options in a new variable
function getPasswordOptions() {
  
  // make sure the chosenChars array is empty to start with.  This ensures that if a user creates multiple passwords in a row with different options, the changes in options are recognised (it'll re-use the 'old' array if not) 
  chosenChars = [];
  
  // ask for and store desired password length
  desiredPasswordLength = prompt("Enter a password length between 8 and 128 characters");  

  // If input value is too low, too high or not a number, flag error message and start again
  if (desiredPasswordLength < 8 || desiredPasswordLength > 128 || isNaN(desiredPasswordLength)) {        
    alert("You must enter a number between 8 and 128.  Please try again");
    generatePassword(); 
  } else {

    // Ask user which of the four character types they wish to include, and add those characters to the chosenChars array.  Using the ... (spread operator) makes sure that when added, they are all stored as a single array rather than as separate arrays e.g. [a, B, 1, @] rather than [ [a], [B], [1], [@] ]

    includeLowers = confirm("Include lower case characters?"); 
    if (includeLowers) {
      chosenChars.push(...lowerCasedCharacters);    
    }
    
    includeUppers = confirm("Include upper case characters?");
    if (includeUppers) {
      chosenChars.push(...upperCasedCharacters);
    }

    includeNumerics = confirm("Include numbers?");
    if (includeNumerics) {
      chosenChars.push(...numericCharacters);
    }
    
    includeSpecials = confirm("Include special characters?");
    if (includeSpecials) {
      chosenChars.push(...specialCharacters);
    }
  
    // If no option was chosen, flag error message and start again
    if (!includeLowers && !includeUppers && !includeNumerics && !includeSpecials) {
      alert("You must choose at least one password option.  Please try again");
      getPasswordOptions();
    }
  }
};


// Function for getting a random element from an array
function getRandom(array) {
  return array[Math.floor(Math.random()*array.length)];
};


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  // make sure password is empty to begin with
  password = "";
  
  // make sure at least one character of each type chosen is included in the password to begin with
  if (includeLowers) {
    password += getRandom(lowerCasedCharacters);
  }

  if (includeUppers) {
    password += getRandom(upperCasedCharacters);
  }

  if (includeNumerics) {
    password += getRandom(numericCharacters);
  }

  if (includeSpecials) {
    password += getRandom(specialCharacters);
  }

  // determine the remaining length of the password after the initial characters have been added
  passwordRemainingLength = desiredPasswordLength - password.length;

  // iterate through the remaining length of the password, get a random character from the array of all chosenChars and add that to the password
  for (var i = 0; i < passwordRemainingLength; i++) {
    randomCharFromAllChosen = getRandom(chosenChars);
    password += randomCharFromAllChosen;
  }

  // return the password outside of the loop, otherwise it stops after the first character
  return password;
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