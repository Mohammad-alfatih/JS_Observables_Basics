/*
  -------------------------------------------------------------
      THE ESSENCE OF USING CALLBACK FUNCTIONS IN JAVASCRIPT
  -------------------------------------------------------------
  
  A Javascript function is a first class object:
  - It can be passed in as an argument to another function.
  - Can be executed from within a function it was passed into.
  - They can be returned from a function to be executed later.
  
  * Callback functions are a "functional programming" technique.
    - functional programming is the use of functions as arguments.
  * Callback functions are also named "higher order functions".
    - A higher order function is a function that's passed in as an argument, then executed inside the other function.
*/

// PASSING AN ANONYMOUS FUNCTION TO THE "FOREACH" LOOP AS A PARAMETER

var names = ["Abu Bakr", "Umar", "Uthman", "Ali"];

names.forEach(function(eachElementInArray, eachElementsIndex, theArray) {
  console.log(eachElementsIndex + 1 + ": " + eachElementInArray);
  console.log(eachElementsIndex - theArray.length);
})


// CALLBACK FUNCTIONS CAN ACCESS LOCAL AS WELL AS GLOBAL VARIABLES

var sampleData = [];

function logData(datem) {
  if(datem === "string") console.log(datem);
  else if(datem === "object") {
    for(var index in datem) console.log(index + ": " + datem[index]);
  }
}

function getInput(dataStuff, callbackFunction) {
  sampleData.push(dataStuff);
  callbackFunction(dataStuff);
}

getInput("Hello World", logData);





