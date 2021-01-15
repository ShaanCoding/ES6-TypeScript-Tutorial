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
