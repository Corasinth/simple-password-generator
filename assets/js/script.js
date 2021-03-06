// Arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]","|", "}", "~", "^", "_" , "`", "{",  "\\",];

var selectorArray = [];
var passwordArray = [];

//Other Variables
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecial;
var numOfCharacters = 0;
var password;
var stringOfCharacterQuantity;

//Functions

//Opens relevant dialogue boxes
function startPasswordGenerator () {
  console.time("function popConfirms")
  popConfirms ();
  console.timeEnd("function popConfirms")
  createSelectorArray ();
  console.time("function promptNumber");
  promptNumber ();
  console.timeEnd("function promptNumber");
}

//Create confirmation boxes and error message if user selects no choices
function popConfirms () {
  confirmUppercase = window.confirm ("Should the password include uppercase letters?");
  confirmLowercase = window.confirm ("Should the password include lowercase letters?");
  confirmNumbers = window.confirm ("Should the password include numbers?");
  confirmSpecial = window.confirm ("Should the password include symbols?");
  // Error message logic if nothing is chosen
  if (confirmUppercase === false && confirmLowercase === false && confirmNumbers === false && confirmSpecial === false) { 
    window.alert ("Please select at least one character type.");
    popConfirms ();
  }
}
//Creates selectorArray based on user's choices
function createSelectorArray () {
  if (confirmUppercase === true) {
    selectorArray.push (uppercaseLetters);
  }
  if (confirmLowercase === true) {
    selectorArray.push (lowercaseLetters);
  }
  if (confirmNumbers === true) {
    selectorArray.push (numbers);
  }
  if (confirmSpecial === true) {
    selectorArray.push (special);
  }
}

// Handles error messages for the wrong kind of input into the prompt. Wrong input includes numbers too high, numbers too low, and not a number.
function promptNumber () {
  stringOfCharacterQuantity = window.prompt ("How many characters should the password include?\nPlease only input values no lower than 8 and no higher than 128"); 
  if ((parseInt (stringOfCharacterQuantity)) < 8) {
    window.alert ("Please generate a password at least 8 characters long.");
    stringOfCharacterQuantity = "";
    promptNumber ();
  } else if ((parseInt (stringOfCharacterQuantity)) > 128) {
    window.alert ("Please generate a password no longer than 128 characters.");
    stringOfCharacterQuantity = "";
    promptNumber ();
  } else if (Boolean (parseInt (stringOfCharacterQuantity)) === false) {
    window.alert ("Please input a number.");
    stringOfCharacterQuantity = "";
    promptNumber ();
} else {
  // Turns output of prompt into a number for use in generatePassword.
  numOfCharacters = parseInt (stringOfCharacterQuantity);
  stringOfCharacterQuantity = ""
  writePassword ()
}
}

// Password Generator
  function generatePassword () {
    // Randomly selects one of the arrays from selectorArray, randomly selects a member of the selected  array, pushes it into passwordArray
    // Doesn't gurantee at least one of the selected character types will be included, but the chance of never picking from an array even over 8 characters is vanishingly small
    for (var i = 0; i < numOfCharacters; i++) {
      var randomArray = selectorArray[Math.floor(Math.random() * selectorArray.length)];
      var passwordPart = randomArray[Math.floor(Math.random() * randomArray.length)];
      passwordArray.push (passwordPart);
   } 
// Turns passwordArray into a string and returns it. 
    passwordString = passwordArray.join ('');
    return passwordString;  
  }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // Resets relevant variables so that generator can be reused without overlapping values from previous generation
  selectorArray = [];
  passwordArray = [];
  numOfCharacters = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", startPasswordGenerator);

