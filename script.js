
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
var passwordLength;       

// Variables to store whether each of the four options were chosen
var lowerChars;            
var upperChars;           
var numericChars;         
var specialChars;         

// Array to hold a combined list of all characters from the options the user chose
var chosenChars = [];     


// Function to prompt user for password options and store chosen options in a new variable
function getPasswordOptions() {
  passwordLength = prompt("Enter a password length between 8 and 128 characters");  // ask for desired length



  // If input value is too low, too high or not a number, flag error message and start again
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {        
    alert("You must enter a number between 8 and 128.  Please try again");
    generatePassword(); 
  } else {

    // Ask user which of the four character types they wish to include, and add those characters to the chosenChars array.  Using the ... (spread operator) makes sure that when added, they are all stored as a single array rather than as separate arrays e.g. [a, B, 1, @] rather than [ [a], [B], [1], [@] ]

    lowerChars = confirm("Include lower case characters?"); 
    if (lowerChars) {
      chosenChars.push(...lowerCasedCharacters);    
    }
    
    upperChars = confirm("Include upper case characters?");
    if (upperChars) {
      chosenChars.push(...upperCasedCharacters);
    }

    numericChars = confirm("Include numbers?");
    if (numericChars) {
      chosenChars.push(...numericCharacters);
    }
    
    specialChars = confirm("Include special characters?");
    if (specialChars) {
      chosenChars.push(...specialCharacters);
    }
  
    // If no option was chosen, flag error message
    if (!lowerChars && !upperChars && !numericChars && !specialChars) {
      alert("You must choose at least one password option.  Please try again");
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

  // make password empty to begin with
  password = "";
  
  // iterate through the password length, get a random character from the array of all chosenChars and add that to the password
  for (var i = 0; i < passwordLength; i++) {
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