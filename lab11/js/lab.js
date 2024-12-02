/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
Requirements: jQuery must be loaded for this script to work.
 * Author:  Yuqi Fan
 * Date:   11.11.2024
 * 
 */
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }
// click listener for button
$("#submit").click(function(challenge){
});
// get value of input field
const idk = $("#idk").val();
// now let's sort it
idkSorted = sortString(idk);
// append a new div to our output div
$("#output").html('<div class="text"><p>' + idkSorted + '</p></div>');
