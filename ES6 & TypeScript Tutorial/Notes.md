# ES6 & Typescript Tutorial

# 1. Introduciton

## Introduction

First we need to know the differences between:
* ES5
* ES52016 (ES6)
* Typescript

Now what we call JavaScript is a implementation of the standard specification ECMA Script, and we use the standard version, version 5.
* We call the standard ES5 whilst we call the language JavaScript

* Now we have a new standard, ES2015 aka ES6, which is the same as ES2015 with some new features

## TypeScript

* Typescript is a free and opensource programming language, which is a Typed superset of JS which compiles to plain Javascript
* This contains features of ES2015 and ES2016
* Additionally it has Types (which is optional)
* A benefit of typescript is due to it's types, it allows us to make more safer and more bug free code

# 2. Transpilers

* Transpilers are a new feature in ES2015
* Transpiler takes the ES2015 source code we make, and it transpiles it into the ES5 code that's run onto the program.
  * There's a few transpilers
    * Traceuer
    * Typescript
    * Babel
* For this tutorial we will be using TypeScript

# 3. Tooling Setup

* We need a typescript compiler to transpile our code
* Additionally we need to setup our editor to type our code well, in this tutorial we will be using VSC

* Install node & thus NPM
* Make a new folder and navigate to it

```
npm install typescript -g
```

* Globally installs typescript

* Now type

```
tsc --init
```

* This creates a typescript config file
* It's got configuration topics like target which is es5, sourcemap set to true. Which is mapping from ts to js to help with debugging, also add another outDir, to scripts


* We have added VSC compiler
* Build step is done
* We have transpiled it

* Now we want to add a html script attachment so we can run it

* Now if we open it we see hello world
* It is good, but for directory we see the file:///
* It would be better if we use it as a server so

```
npm install lite-server -g
```

# 4. ScratchJS

* ScratchJS is a chrome addition that works in devtools, that allows us to test out the JSFeatures for ES6 or ES2016 (No longer needed)

# 5. Var Hoisting & Functional Scope

* Before we start on learning our first keywords, the let keyword we will be learning the concepts of hoisting & functional scope for the var direction for JS firstly
* So we have a greetPerson function, which greets Shaan with "Hi Shaan" and everything else with "Hi there!"
* So we have two declarations of the greet variable, the first one is greet Shaan or if it isn't shaan we greet hi there

* This feels very weird if you're from a C# or Java background, though in JS this is completely fine because of a concept called "Hoisting", in the background curtains, JS is rewritten to have a declaration at the top and ignores any duplicate declarations. So it pretty much initalizes a "var greet" at the top of the function so it allows it to work from a local scope upwards.
* To prove hoisting exists, lets declare var greet at the bottom and if we refresh it still works
* Hoisting, for every var declaration all vars are moved to the top of the function
  
* Functional scope of var keyword: even though var is declared in the if block, we can still access the value outside of the if block with our console.log.
* Our var declaration has a functional scope, regardless of the location in an if or while, we can access it anywhere within the function
* ES2016 introduces the **let** keyword which fixes these issues

# 6. Let keyword

* Last week we learn that var variables hoist using the functional scope
* We also have the **let** declaration which aren't hoisted and are block scoped
* If we change the variable from var to let, we now have an error since it cannot find the name "greet" anymore, because "let" is block scoped
* Let declarations are not hoisted, therefore they wont be declared if we use them beforehand and not declared
* Additionally **let** declarations cannot be redeclared, we cannot do let a = 1 then let a = 2. Unlike var, HOWEVER we can declare in different scopes

# 7. Let in FOR loops

* Lets say we wanted to display the numbers 1-5, this could easily be done with a for loop
* Lets say we now want to display the function after 1 second, now we use the settimeout function
```js
for(var i = 0; i <= 5; i++) {
  setTimeout(function() {console.log(i)}, 1000);
}
```
* We get the output of 6
* Why is this? We expect the output to be 1,2,3,4,5,6?

* This problem occurs as we're passing the reference value i and not passing the value per each loop
* When the loop exits we then run the function and then it runs
* To do this we need to do an EIFY, emidately ran function expression.

* In ES6 we could use the **let** keyword instead of **var**

# 8. Const Keyword

* The const keyword is to make readonly constants
* The const keyword is similar to the let keyword, in the sense that it is blockscoped & not hoisted, however a value is MANDATORILY SET AND THE VALUE CANNOT BE CHANGED LATER WITHIN THE SAME SCOPE
* There is a catch declaring an object to the const keyword however we can change it's properties, but we cannot override the original object

# 9. Let vs Const

* After learning the let vs const keyword, now we need to learn when to use either
* Now I would recommend to use const over let as much as possible when needed, just usually as most variables need one time considerations and rarely need reassignment, additionally it is safer so we know if a assignment is accidently occuring.
* Use const when assignment is not expected, use let when assignment is expected

# 10. Arrow Functions

* Arrow functions provide a short and concise method of creating functions, additionally it shortens the **this** keyword in JS
* Arrow functions are more short and concise
* If we have a single statement in the body, we can remove the curly braces or even the return function
* If we want to pass a parameter, inside of the curly bracets we can add a variable name, if we pass a single variable we don't even need the parenthesis
* If we want to add another variable we just add a commar

# 11. Lexical 'This'

* Expected id is id 1, which is what we get
* Lets say we want to show our console log of this.id in a setTimeout function
* Now inside of the set timeout function, it's undefined.

* When we create a function it creates its own definition of the this keyword, it does NOT have the context of the outside function
* To have a workaround, we could make a variable that stores the context of this which will work

* A bypass to this is to use an arrow function instead which will not absorb context

# 12. Default Function Parameters

* Default function parameters
* We can assign a default function parameter
* function(value = 10, bonus = 5)
* undefined, 30

# 13. Rest Operator

* Consider this example, we need a function that displays a list of colors;
* This is bad as we cant pass parameters properly, and we use the arguments object which is unintuitive
* We could do this with arguments and loop through them manually in the old way but in ES6 we can alternatively do:
  * Alternatively we can use the rest operator, which is where we append ... in front of the variable to take it as an 'array' of arguments

# 14. Spread Operator

* Spread operator is kind of the opposite of the rest operator
* While rest takes in a variable number of parameters nad puts it into an array, a rest spread operator takes an array and splits it into multiple elements.
* Back to the previous example with the diplaycolors function, it takes multiple variables as a rest as an argument
* Now lets say from a service / database we get an array of colors
* Now if we try to pass an array into our rest operator it throws an error as it wants multiple operators, in this case a spread operator would be highly useful
* A spread operator takes an array and spread it into individual elements
* To use a spread operator, it is indentical to a rest operator we append three dots in front of the rest operator array
* Rest operator is declared in the function declaration, whilst spread operator is declared in the function call

# 15. Object Literals Part 1

* Consider two variables
* If we want to make a object with our first name and last name we can do this
```ts
let firstName = "Shaan";
let lastName = "Khan";

//Lets say we want to make a new person object with this info

let person = {
    firstname: firstName,
    lastname: lastName
};

console.log(person.firstname);
console.log(person.lastname);

```

* What is listed above is what we usually do
* The thing we did with the curly braces is called an object literal
* In es6 we can use a shorthand to instead do
```ts
let person = {
  firstname,
  lastname
};
```
* This assumes it just takes the variable firstname and lastname, and assigns these as the properties and value
* We additionally can make functions that take names as an input which returns functions doing
```ts
return {firstname, lastname, fullname}

let p = createPerson(firstname, lastname);
```

* Another short hand notation is when we are adding a method to our object
* Traditionally we could make a function inside of the object like this
```ts
  isSenior: function(){
            return age > 60;
        }};
```
* Alternatively we can also instead do
```ts
    isSenior() {
            return age > 60;
        }
```

# 16. Object Literals Part 2

* Alternatively for object literals we can have spaces in object properties, by assigning the variable as a string and then to access it instead of using . we instead use the array index [].
  * I assume this is it automatically casting the "first name" string to a integer which the array then accesses or some magic similar to this in the background
* We can also use variables as property names
* This also looks like INCREDIBLY BAD PRACTICE SO NEVER DO THIS

# 17. Destructuring Arrays

* To destructure is to destroy the structure or dismantle something
* In this tutorial we will show how to destructure an array
* To do this we pull apart the elements of an array
* If we make an array ['Variable A', 'Variable B', 'Variable C']
* and then we do let [fname, lname, gender] = array
* we automatically destructure the array
```ts
let employee = ["Shaan", "Khan", "Male"];
let [fname, lname, gender] = employee;
```
* If we have a unequal number of pairings the last one will be undefined
* Alternatively we can also can admit variables to the left hand side, we just leave it with a blank commar

* We can additionally destructure an array using the rest operator, which will assign first one to fname and the remaining values into an array
```ts
let [fname, ...elements] = employee;
Shaan, [Khan, Male]
```

* We additionally can use default values through =

# 18. Destructuring Objects

* For the most part we can destructure objects the same as arrays
* However one significant difference is instead of square brackets, we have to use curly brackets instead.

* Alternatively if the property name was huge i.e 20 fields in length we can alternatively use an alias, to use an alias we add a colon

# 19. String Templates

* In ES6 we have a thing called string templates which allows us to convinently work with strings
* To normally do a string concatination we would have to do
```ts
let greet = "Welcome" + user + " to ES2015";
```
* Alternatively with string templates we can bypass this requirement of concataination
* We are required to quote text with backticks and to declare a variable we do ${variable}
```ts
let greet = `Welcome ${user} to ES2015`
```
* Another benefit is that it support multi-line strings without requiring concatination (\n)

# 20. For of Loop

* In ES2015, we also have a new for of statement (similar to for loop but used for iterables)
* In this lesson we will be using this for arrays and strings
* This is a for-each loop (in C#)
```ts
let colors = ['Red', 'Blue', 'Green'];

// for(let index in colors) {
//     console.log(colors[index]);
// }

for(let color of colors) {
    console.log(color);
}
```