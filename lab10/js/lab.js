/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
Requirements: jQuery must be loaded for this script to work.
 * Author:  Yuqi Fan
 * Date:   11.04.2024
 */

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){

    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
console.log("click!");
  // now add (or subtract) the "special" class to the section
$("challenge").toggleClasss("special");
});

  // add button to problem section
   $("problem").append("<button id ='button-problem' Make Special</button>");

    // add a click listener to the problem button
    $("#button-problem").click (function(){
    // now add(or subtract) the "special" class to the section
    $("#problem").toggleClass("special");
    });

    // add button to result section
    $("result").append("<button id ='button-result' Make Special</button>");

    // add a click listener to the result button
    $("#button-result").click (function(){
        // get new fake dialogue
const button = generateRandomText()
        // now add(or subtract) the "special" class to the section
        $("#result").toggleClass("special");
        // get new fake dialogue
const something = generateRandomText()
        });

        // add button to challenge section
        $("challenge").append("<button id ='button-challenge' Make Special</button>");

         // add a click listener to the result button
    $("#button-challenge").click (function(){
        // get new fake dialogue
const button = generateRandomText()
        // now add(or subtract) the "special" class to the section
        $("#challenge").toggleClass("special");
        });
         // append a new div to our output div
$("#output").append('<div class="text"><p>' + button + '</p></div>');