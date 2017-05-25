/*
  -------------------------------------------------------------
      THE ESSENCE OF USING CALLBACK FUNCTIONS IN JAVASCRIPT
  -------------------------------------------------------------
  
  Code based on examples from:
  - http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
  
  A Javascript function is a first class object:
  - It can be passed in as an argument to another function.
  - Can be executed from within a function it was passed into.
  - They can be returned from a function to be executed later.
  
  * Callback functions are a "functional programming" technique.
    - functional programming is the use of functions as arguments.
  * Callback functions are also named "higher order functions".
    - A higher order function is a function that's passed in as an argument, then executed inside the other function.
*/

// EXAMPLE 1: Passing an anonymous function to a forEach loop as a parameter.

var names = ["Abu Bakr", "Umar", "Uthman", "Ali"];

names.forEach(function(eachElementInArray, eachElementsIndex, theArray) {
  console.log(eachElementsIndex + 1 + ": " + eachElementInArray);
  console.log(eachElementsIndex - theArray.length);
})


// EXAMPLE 2: Callback functions can access local as well as global variables.

var sampleData = [];
var generalLastName = "Smith";
var sampleObject = {
  name: "notSet", type: "anObject", size: "bigObject",
  
  setName: function(firstname, lastname) {
    this.name = firstname + " " + lastname;
  }
};

function logData(datem1, datem2) {
  if(typeof datem1 === "string") console.log(datem1);
  else if(typeof datem1 === "object") {
    for(var item in datem1) console.log(item + ": " + datem1[item]);
  }
  console.log(datem2);
}

function getInput(firstname, lastname, callbackFunction, object) {
  sampleData.push(firstname + " " + lastname);
  console.log(sampleData[0]);
  if(typeof callbackFunction === "function") {
    callbackFunction.apply(object, [firstname, lastname]);
  }
  console.log(sampleObject.name);
  console.log(window.name + "Salams")
}

getInput("Anas","ibn Maalik", sampleObject.setName, sampleObject);


// EXAMPLE 3: Callback functions are very versatile.
// In this example, the getUserInput function is only handling data retrieval.

function genericPoemMaker(name, gender) {
  console.log(name + " is finer than lime.");
  console.log("Altruistic and noble for the modern time.");
  console.log("Always admirably adorned with the latest style.");
  console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

function greetUser(name, gender) {
  var salutation = gender === "man" ? "Mr." : "Ms.";
  console.log("Hello " + salutation + " " + name + "!");
}

function getUserInput(firstname, lastname, gender, callback) {
  var fullname = firstname + " " + lastname;
  if(typeof callback === "function") {
    callback(fullname, gender);
  }
}

getUserInput("Jameel","Finch","man",genericPoemMaker);
getUserInput("Hassan","Al Somali","man",greetUser);

// Scoping Example with "setTimeout":
var name = "the global name";
var waitTime = 1000

var waitingObject = {
  name: "The waitingObject object",
  waitTime: 1000,
  myself: this,
  
  talk: function() {
    setTimeout(function() {
      console.log(name);
      console.log(waitTime);
    }, 1000);
    //console.log(myself.name);
  }
}

function myClass() {
  this.name = "The waitingClass object";
  this.waitTime = 1500;
  var myself = this;
  
  this.talk = function() {
    setTimeout(function() {
      console.log(myself.name);
      console.log(myself.waitTime);
    }, 1500);
  }
}

waitingObject.talk();

classObject = new myClass();
classObject.talk();

// FUN WITH CLOSURES
// Closures have access to the outer function's variables even after returning:

function compileWinner(firstName) {
  var intro = "And the winner is ";
  function addLastName(lastName) {
    return intro + firstName + " " + lastName;
  }
  return addLastName;
}

var winner = compileWinner("Sufyaan");

setTimeout(function() { console.log(winner("Al Thawree")); }, 2000);


// DEEP NESTED CLOSURES

function red(x) {
  function gre(y) {
    function yel(z) {
      return x*y*z;
    }
    return yel;
  }
  return gre;
}

console.log(red(4)(2)(3));

var deepNumber = red(3)(5);

console.log(deepNumber(2));


// Closures store references to the outer function's variables.

function myIdCalculator() {
  var myID = 987;
  
  return { 
    getID: function() { return myID; },
    setID: function(newID) { this.myID = newID; }
  }
}

var declaredID = myIdCalculator();
console.log(declaredID.getID());
declaredID.setID(765);
console.log(declaredID.myID);
console.log(declaredID.getID());
// note: "getID" only references the first value of "myID" and doesn't update.

// Closures don't play nice with variables that have been changed by loops.

function superNameDeluxer(theNames) {
  var i;
  var uniqueID = 100;
  
  for(i=0;i<theNames.length;i++) {
    theNames[i]["id"] = function() { return uniqueID + i; }
  }
  
  return theNames;
}

var setOfNames = [{name:"Yusuf",id:0},{name:"Daoud",id:0},{name:"Ismail",id:0}];

var giveIdToNames = superNameDeluxer(setOfNames);

yusufID = giveIdToNames[0];
console.log(yusufID.id());




