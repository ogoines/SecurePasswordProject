//global constants
const charLengthMsg = "Please enter a number length (8-128 characters)";
const charNumMsg = "Invalid, Please enter a number.";
const charTypeMsg = "Enter password cases & characters L: lower, U: upper N: numeric, S: special ";
const charsAllowed = ["L", "U", "N", "S"];
const validEntryMsg = "Please input at least one valid entry.\n";
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const specialChars = "!@#$%^&*()_+-=[]{};:,<.>/?".split("");

// Get references to the #generate element
var generateBtn = document.getElementById("generate");


//Returns validated password length 
function getPasswordLength(msg = charLengthMsg) {
//Prompts user to enter a valid char and number length 
 var desiredLength = prompt(msg.toString());
  if (isNaN(desiredLength)) {
    desiredLength = getPasswordLength(charNumMsg.toString());
    }
    if (desiredLength< 8 || desiredLength > 128) {
     desiredLength = getPasswordLength(charLengthMsg);
    }
    return parseInt(desiredLength);                                                                                
} 


//Prompts user for input & Validates input returns 
// characters in array selections 
function getPasswordCharacter(msg = charTypeMsg) {
  let types = prompt(msg.toString()).toUpperCase();
  let choices = []; 
  for (let i = 0; i < charsAllowed.length; i++) {
    if (types.includes(charsAllowed[i])) {
      choices.push(charsAllowed[i]);
    }
  }
  if (choices.length === 0) {
    choices = getPasswordCharacter(
    validEntryMsg + charTypeMsg
    );
  }
  return choices;
}


// Get a random character of a given type
function randomChar(type) {
  switch (type) {
    case "L":
      return randomIndex(alphabet);
    case "U":
      const uppercase8r = alphabet.map((letter) => letter.toUpperCase());
      return randomIndex(uppercaser);
    case "N":
      return randomIndex(numbers);
    case "S":
      return randomIndex(specialChars);
    default:
      return randomIndex(alphabet);
  }
}

// Gives random index of array
function randomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//generates a random password of specified length and choices
function generatePassword(length, choices) {
  let password = "";
  let cycle = choices.slice();

  for (let i = 0; i < length; i++) {
    const typeIndex = Math.floor(Math.random() * cycle.length);
    const type = cycle.splice(typeIndex, 1);
    if (cycle.length === 0) {
      cycle = choices.slice();
    }
    password += randomChar(type[0]);
  }

  return password;
}


// Write password to the text *password-area
function writePassword() {
  generateBtn.addEventListener("click", writePassword);
  
  var passwordText = document.querySelector("#password-area");
  var passwordLength = getPasswordLength();
 // var charChoices = getPasswordCharacter();
  passwordText.value = generatePassword(passwordLength, charChoices);
  }
writePassword();

