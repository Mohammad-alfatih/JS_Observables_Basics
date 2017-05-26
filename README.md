# JS_Observables_Basics
Learning about observables in JS from the bottom up.

CALLBACK FUNCTIONS:
Notes taken from: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

Make Your Own Callback Functions
- Look at your own code for opportunities to use callback functions
- They will allow you to:
    - Do not repeat code (DRY—Do Not Repeat Yourself)
    - Implement better abstraction where you can have more generic functions that are versatile (can handle all sorts of functionalities)
    - Have better maintainability
    - Have more readable code
    - Have more specialized functions

Because functions are first-class objects, we can pass a function as an argument in another function and later execute that passed-in function or even return it to be executed later. This is the essence of using callback functions in JavaScript.

Callback functions are derived from a programming paradigm known as functional programming. At a fundamental level, functional programming specifies the use of functions as arguments.

How Callback Functions Work?
We can pass functions around like variables and return them in functions and use them in other functions. When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter. In other words, we aren’t passing the function with the trailing pair of executing parenthesis () like we do when we are executing a function.

Callback Functions Are Closures
When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function. This means the callback is a closure.

Basic Principles when Implementing Callback Functions
- Use Named OR Anonymous Functions as Callbacks
- Pass Parameters to Callback Functions:
    Since the callback function is just a normal function when it is executed, we can pass parameters to it. We can pass any of the containing function’s properties (or global properties) as parameters to the callback function.
- Make Sure Callback is a Function Before Executing It
    Also, it is good practice to make the callback function optional:

    function getInput(options, callback) {
        allUserData.push(options);
        if (typeof callback === "function") {
            callback(options);
        }
    }

- Problem When Using Methods With The this Object as Callbacks
    When the callback function is a method that uses the this object, we have to modify how we execute the callback function to preserve the this object context. Or else the this object will either point to the global window object (in the browser), if callback was passed to a global function. Or it will point to the object of the containing method.
- Use the Call or Apply Function To Preserve this
    We can fix the preceding problem by using the Call or Apply function (we will discuss these in a full blog post later). For now, know that every function in JavaScript has two methods: Call and Apply. And these methods are used to set the this object inside the function and to pass arguments to the functions.
    Call takes the value to be used as the this object inside the function as the first parameter, and the remaining arguments to be passed to the function are passed individually (separated by commas of course). The Apply function’s first parameter is also the value to be used as the this object inside the function, while the last parameter is an array of values (or the arguments object) to pass to the function.
- Multiple Callback Functions Allowed
    We can pass more than one callback functions into the parameter of a function, just like we can pass more than one variable.
- “Callback Hell” Problem And Solution
    In asynchronous code execution, which is simply execution of code in any order, sometimes it is common to have numerous levels of callback functions to the extent that you have code that looks like the following. The messy code below is called callback hell because of the difficulty of following the code due to the many callbacks.


UNDERSTANDING THE WEIRD PARTS OF JAVASCRIPT

Important side concepts: A few key terms
- Syntax parsers:
    A program that reads your code to validate its grammar & determine what it does (a compiler or interpreter).
- Execution contexts
    A wrapper to help manage the code that is running (scope).
- Lexical environments
    Where something sits physically in the code you write.
- Name/Value pairs
    A name which maps to a unique value. Can only have one value in s single execution context.
    An javascript object is a collection of name/value pairs.

Global Context: not inside a function.
    The global context 'window' or 'this' is available without writing any lines of code.

Every object has the following context variables:
- Object: the execution context w/n the object.
- this: a special variable referring to context.
- Outer Environment: Is null w/in global object.
- Your code: variables & functions.

The Execution Context - Creation & Hoisting: 
- How does JS create the execution context?
- The execution context is created in two phases
    Creation phase: 
        Global object, this, outer environment are initiated.
        Set up memory space for variables & functions (hoisting).
        Functions are placed in memory in their entirety.
        Variables are all declared as 'undefined'.
    Execution phase:
        Variable assignments are set up in the execution phase.

Important side concepts: Javascript & 'undefined'