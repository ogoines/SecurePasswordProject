const charLengthMsg = "Please enter a number length (8-128 characters)";
const charNumMsg = "Invalid, Please enter a number.";
const charTypeMsg = "Please select the char types and cases to be included password";



// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Assignment code here

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
    console.log("madeit");
  } 

console.log(getPasswordLength());





function getPasswordChar(){
}


function generatePassword() {
}
generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
    //writePassword();
    var testPassword = document.getElementById("password-area");
testPassword.textContent = "This may work";

});

