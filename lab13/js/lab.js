// given a number and an object that looks like this:
//       {3:"Fizz," 5: "Buzz", 7: "Boom"}
// loops over the numbers and outputs the number and the matching text
// for factor
function fizzBuzzBoom(maxNums, factor0bj){
    // iterate over all of out numbers
    for (var num=0; num<maxNums; num++){
       // reset output string
       var outputStr = "";
       // iterate over the factor we got from the html
       for (var factor in factor0bj) {
       // check to see if this num is a multiple of factor
       if (num % factor == 0){
        // if yes, than add the text to output string
        outputStr += factor0bj[factor];
    }
}
    // now if we have words in putputStr, format it like this " - FizzBuzz!"
    if (outputStr) {
        outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
        }
    } 

    function reportErrot(str){
        outputEl.innerHTML = "<div class= 'error'>" + str + "</div>";
    }
    document.getElementById("submit").addEventListener("click", function)
        var max = document.getElementById("max").value;
        console.log("max:", max)
        if (!max) {
            reportError("You must provide a maximum")
        }