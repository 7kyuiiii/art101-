
 //Author:    Yuqi Fan
 // Created:   2024.10.23
 
// Define Variables
myTransport =["bus", "subway","bike", "legs"];

// Create an object for my main ride
myMainRide= {
  make: "Ford",
  model: "Taurus",
  color: "Red",
  year: 2003,
  //we can define a function within our object (called a method)
  // that uses the value of year above (using this.year)
  age :function () {
    return 2024 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("My main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'),"</pre>");

