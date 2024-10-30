/*
 * Author:  Yuqi Fan
 * Created:   2024.10.30
 * License: Public Domain 
 */

function isEven(x){
    return (x % 2 == 0);
}

//test function
console.log("Is 1 Even?", isEven(1));
console.log("Is 2 Even?", isEven(2));

array = [100,7,25,8,24,145,10000]
console.log("My array", array);

var result = array.map (isEven);
// should return [true, false, false, true, true, false, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 1.5;
})
// should return [1000, 18.520259177452132, 125, 22.62741699796952, 117.57550765359255, 1746.0312139248829, 1000000]
console.log("Squareroot of array", result);
