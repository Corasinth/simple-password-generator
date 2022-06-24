/*
====================================

On button click, generate a confirm dialogue asking if the password should contain uppercase characters
then generate a confirm dialogue asking about lowercase characters
then generate a confirm dialogue asking about numbers
then generate a confirm dialogue asking about special characters
than generate a prompt dialogue asking about password length 
if password length is too low or high generate an alert asking for correct number 
after alert is exited (by either button) return to the password length prompt 
once a correct calue has been given, generate the password based on the array structure below

var computerChoices = ["R", "P", "S"]
password = computerChoices[Math.floor(Math.random(0, 3) * computerChoices.length)];


====================================
Create an array for each type of character included in the password.

When a user generates a password, concatenate the arrays into a single array (password selection), excluding those arrays that the user does not want (based on the input from the prompt)

in a for loop, randomly select an item from the new array
repeat the for loop a number of times based on the number of characters the user specifies (see prompt pseudo code)
in each loop, push the value generated to a blank array (password). 

after the array (password) has been written in the document, set it to empty, so that the next time the button is clicked it starts fresh
also set the array (password selection) to empty so that it doesn't include characters a user doesn't want next time you click the button

===================================
*/

// Arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]","|", "}", "~", "^", "_" , "`", "{",  "\\",]

var selectorArray = []
var passwordArray = []

//Other Variables
var confirmUppercase 
var confirmLowercase 
var confirmNumbers 
var confirmSpecial
var numOfCharacters = 0

//Functions
function generatePassword () {
  var num1 = 1+1
  return num1
}

// Handles error messages for the wrong kind of input into the prompt. Wrong input includes numbers too high, numbers too low, and not a number.
function promptNumber () {
  numOfCharacters = window.prompt ("How many characters should the password include?\nPlease only input values no lower than 8 and no higher than 128"); 
  if (numOfCharacters < 8) {
    window.alert ("Please generate a password at least 8 characters long.");
    numOfCharacters = 0;
    promptNumber ();
  } else if (numOfCharacters > 128) {
    window.alert ("Please generate a password no longer than 128 characters.");
    numOfCharacters = 0;
    promptNumber ();
  } else if (Boolean (parseInt (numOfCharacters)) === false) {
    window.alert ("Please input a number.");
    numOfCharacters = 0;
    promptNumber ();
}
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  confirmUppercase = window.confirm ("Should the password include uppercase letters?")
  confirmLowercase = window.confirm ("Should the password include lowercase letters?")
  confirmNumbers = window.confirm ("Should the password include numbers?")
  confirmSpecial = window.confirm ("Should the password include symbols?")
  promptNumber ()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);