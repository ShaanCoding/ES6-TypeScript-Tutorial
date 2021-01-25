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

# 21. Classes

* In this tutorial we will be learning about classes
* To define a class we do
```ts
class Person{}
```
* If we log the typeof class (person) we get the response of a function
* Classes are just special functions that ARE NOT HOISTED
* So if we try to use the Person class before it is initalized we cannot run it, because they're not hoisted unlike functions

* Now consider a method inside of the class
```ts
console.log(p.greet === Person.prototype.greet);
```
* Adding a method to the class is identical to adding a object to the prototype class of the object

# 22. Class Body & Method Definitions

* A class body is the area between the curly braces
* In ES2015 & TypeScript, a class body can only contain methods and not properties
* We can have three main types of properties; constructor methods (initalizers), we can make a static method (one that can be used without instanciating the class), and a dynamic / normal method / prototype

# 23. Class Inheritance

* In ES2015, class inheritance is possible via the extends keyword
* This is to make a new class which extends from the parent class
* We do this with the extends keyword
```ts
class Person {
    constructor() {
        console.log("Person constructor");
    }
}

class Employee extends Person {

}

let e = new Employee();
```

* If we now want to make an inherited class with a constructor, we must also call the super classes constructor, to do this we call super

* We can access super class functions from the subclass
* If we have two functions, one in the super class and one in the subclass with the same function we will get firstly the subclass, and if it doesn't exist the superclass
* Alternatively we could also use the appendation super.getID()

# 24. Modules

* Now if you go through any book, you'll see an author divdes each thing into chapters and sections. This allows the reader to understand the progression and find specific parts, as well as clearly indicate what the focus is on
* This is the es6 equivilant of seperate class files / libraries
* This allows us to achieve seperation of concern
* To import a function from module b we import it
* To send a function from module b and get it used in module a we export it

```ts
import a;

export a;
```

# 25. Module Loader Setup

* When dealing with modules there's two things to keep in mind, the module syntax (which is the main thing to keep in mind) additionally there is module loading
* We need to find a way to load the modules into our browser

* To load a module you can now do:

```html
<script src="/src/moduleA.js" type="module"> </script>
```

# 26. Named Exports

* In ES6 there are two typed of exports, named and default
* In this video we will focus on named exports

* We make module A and add a variable called fname, lets say we want to use it into another module

* We firstly append export
```ts
export let fname = "Shaan";
```

* Now lets say we want to add it to module B
```ts
import {fname} from './moduleB.js';
```

* Now if we log it we can see that it is recorded into the log
* To add multiple imports we just add them like an array with just commars

* Now lets say we want to import 10 or 20 variables, in this case instead of saying export 10 or 20 times we instead can do one export

```ts
let fname = "Shaan";
let lname = "Khan";

export {fname, lname};
```

* Alternatively we can also import via alias

```ts
import {fname as f} from './moduleB.js';
```

* Another thing to consider about imports, is that module imports are hoisted
* This kind of makes sense as moduleB needs to run and declare variables before it is even used, so hoisting is kind of a necessity

* Imports are READONLY, however we can change the properties of objects
  * I suspect this is because of stack / heap reasonings

# 27. Default Exports

* Whenever we have modules where we export a single value or function we can make use of the default keyword when exporting

```js
let fname = "Shaan";

export default fname;
```

* We can leave out curly braces when importing and the name doesn't have to match

```ts
import firstName from './moduleB.js';
```

* We can also import defaults with aliases

```ts
import {default as f} from './moduleB.js';
```

# 28. Exporting Functions & Classes

* We make a new function in moduleB:

```ts
export const greet = function(message) {
  console.log(message);
}
```

* Now for module A

```ts
import {greet} from './moduleB.js';

greet("Hello World!");
```

* Importing classes

```ts
export class GreetMessage {
    constructor() {
        console.log("Constructor");
    }

    greet() {
        console.log("Greet function");
    }
}
```

* We import it normally, and we make a new class with

```ts
let gm = new GreetMessage();
```

# 29. Sets & Maps

* In this video we will explore what is maps and what is sets and what are their pitfalls

* Sets:
  * A set is a list of values, which CANNOT contain duplicates
  * Instead of accessing specific elements, sets check if a value exists or not
  
* Maps:
  * A map is nothing but a value of key-value pairs
  * With maps unlike sets, we can actually retrieve the values

# 30. Sets

* A set is a set of datavalues which are unique

```ts
let mySet = new Set();
//To add new items
mySet.add("Hello");
//To check size
mySet.size
```

* These are generics / can accept multiple different types of data types
* Unlike the previous example in lesson 29, since these properties ARENT converted into strings, obj1 and obj2 are going to be unique between each other

```ts
//We can add items through the consturctor
let mySet = new Set([1,2,3,4,4]);
//This will only count 4 elements, as the second 4 is ignored.
```

* We can also chain adding of sets on the constructor, through the .add method;

* We can check if a value exists through the .has method

```ts
console.log(newSet.has(5)); //True / false
```

* We can also delete elements, through the .delete function

```ts
newSet.delete(1);
```

# 31. WeakSets

* In lesson 30 we went through sets otherwise known as a strongset in the way it stores object references

```ts
let mySet = new Set();

let key = {};
mySet.add(key);

console.log(mySet.size); //1

key = null;

console.log(mySet.size); //1

//What we can infer even if the key is set to null, a reference to the key object still exists from our set

key = [...mySet][0]; //Gives us back our object

//Sometimes we wish our references in our set dissapear when our references dissapear to avoid memory leaks

//ES6 adds weakset, it's got add, has and delete but
//It can only store object references & non-primitave values
//Object values are weak
//If all references are removed, it starts garbage selection

let set = new weakSet();

let key2 = {};

set.add(key2);

console.log(set.has(key2)); //True

key2 = null;

//Not even possible to check because it already cleans it

//Weakset > Strongset is only good because it handles memory well
//Weaksets are preferred if we are only tracking objects
```

# 32. Maps

* Sets are good to check if they are duplicates
* BUt if we need to check if they are duplicates we need a map type
* Map is an ordered list of key-value pairs
* Both the key and value can be of any type

* To create a new map

```ts
let myMap = new Map();
//To add an item
//Key - value pair
myMap.set("fname", "Shaan");
myMap.set("age", 30);

//To get a value
console.log(myMap.get("fname"));
```

* We can also do this with objects

```ts
let ob1 = {};
let ob2 = {};

myMap.set(ob1, 10);
myMap.set(ob2, 20);
```

* To get size we can do .size
* To see if a key exists we can do .has

```ts
//We have to check via key
myMap.has("fname");
```

* There is also a delete method

```ts
myMap.delete("fname");
```

# 33. Iterating Over Maps

* In the last video we learnt how to make a new map and add values on a new map using key value pairs
* Another way to add values to a map is adding an array during intalization

```ts
let myMap = new Map([
    ["fname", "Shaan"],
    ["lname", "Khan"]
]);

//How do we iterate over the keys

for(let key of myMap.keys()) {
    console.log(key);
}

for(let value of myMap.values()) {
    console.log(value);
}

for(let entry of myMap.entries()) {
  console.log(`${entry[0]} -> ${entry[1]}`)
}
```

//We can also make use of destructuring

```ts
for(let [key, value] of myMap.entries()) {
  console.log(`${key} -> ${value}`);
}
```

# 34. forEach

* In ES5 we have the foreach loop which allows us to iterate over array elements

```ts
var numbers = [2, 4, 6, 8];

const arrayFunction(element, index, array) {
    console.log(`arr[${index}] = ${element}`);   
}

numbers.forEach(arrayFunction);

let myMap = new Map([
  ["fname", "Shaan"],
  ["lname", "Khan"],
]);

const mapFunction = function (value, key, callingMap) {
  console.log(key + " " + value);
  console.log(myMap === callingMap);
};

myMap.forEach(mapFunction);

let mySet = new Set([1, 2, 3]);

const setFunction = function (value, key, callingSet) {
  console.log(key + " " + value);
  console.log(mySet === callingSet);
};

mySet.forEach(setFunction);
```

# 35. WeakMaps

* Like weaksets in ES6, we also have weakmaps, weakmaps only take in objects / non-primativ es and once all references are gone it deletes / removes it from the map

```ts
let myMap = new WeakMap();

let ob1 = {};

myMap.set(ob1, "Hello World!");

console.log(myMap.get(ob1));

ob1 = null;
```

# 36. Symbols

* In ES5 we have existing primitive types; string, num, boolean, null & undefined
* Now in ES6 we also have a new one called Symbol
* The purpose of a symbol is to generate a unique ID
* Funny thing is we don't have access to this unique ID

* We will see how to create a new symbol and possible uses of it

```ts
let s = Symbol();
console.log(typeof s);

let s2 = Symbol("First Symbol");

console.log(s2.toString()); //Symbol(First Symbol)

let s3 = Symbol();
let s4 = Symbol();

console.log(s3 === s4); //False

// A symbol always create a unique ID

let s5 = Symbol("Test");
let s6 = Symbol("Test");

console.log(s5 === s6); //False regardless of description

//Lets say we've created a new symbol but we want to use it again in a new file / same project
//We have a thing called a symbol registry

let s7 = Symbol.for("RegSymbol");

//Symbol.for doesn't add the symbol right away, it checks if it exists first
//If it does it will return the symbol
//If it doesn't exist it will create a new one

let s8 = Symbol.for("RegSymbol");

console.log(s7 === s8);

//Now lets say we wanted the key when the symbol was added to global registry
//Symbol .keyfor

console.log(Symbol.keyFor(s8));

let fname = Symbol();

let person = {
  [fname]: "Shaan",
};

//Now if we do this, we don't have to worry about our code being overwritten since our code will be unique

console.log(Object.getOwnPropertyNames(person));
//We don't get the property listed out since it's a symbol

console.log(Object.getOwnPropertySymbols(person));
```

# 37. Symbol Iterator

* Recall a concept of a thing on previous tutorial, the for..of loop
* This doesn't work with every object
* For the for of to work it needs an iterator method
* We need to check if the object has an iterator by checking if it has the key Symbol.Iterator
* As we can see, arrays and strings have iterator functions

# 38. Iterables and Iterators

* In ES6 we can implement iteration which is a new way to tranverse data. This focuses on two things, iterables and iterators
* An iterable is an object that implements the method whos key is Symbol.iterators
```ts
  Iterable {\
  [Symbol.Iterator]() : Iterator}

  Iterator {
    next() : IResultObj
  }

  IResultObj {
    value: any;
    done: bool;
  }
  ```
* The iterable is the interface
* The way it transverses is the iterator
* The object has a bool checking if the array is done being transversed and the object

* Array, Strings, Maps & Sets are all iterables
* In this tutorial we will be making our own iterable

# 39. Iterating Objects

* The for-of loop doesn't work for the object
* So how do we make the person object iterable

# 40. Generators

* Generators are a new feature in ES6
* Once a function starts execution it will always run to completion before any other code is run
* Generators can be paused part way run another function and then resume
* The pausing of this function is done through the `yield` keyword
* The syntax of a generator is very alike a function

```ts
function *createGenerator() {
  yield 1; //Yield the value 1 and then execution pause
  console.log("After 1st yield");
  yield 2; //Will then run the next two lines once resumed again

  //With every execution it will hit the next yield point
}

let myGen = createGenerator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
```

* What do we use generators for
* Returns an object for the same next one, which is used for for-of loops
* This can be used to simplify a for-of loop for custom iterators, this could be used to make an iterator for a custom object

```ts
person[Symbol.iterator] = function*() {
  let properties = Object.keys(person);

  for(let t of properties) {
    yield this[t];
  }
};

for(let p of person) {
  console.log(p);
}
```

# 41. Enter TypeScript

* Typescript is the typed superset that compiles into javascript
* Data types can now be used of when writing our code, but specifying data types is completely optional
* Why would we code in typescript?
  * Javascript is very hard to identify mistakes due to it not being typed, typescript solves this issue

# 42. Declarations and Annotations

* In this tutorial we will show the ways to declare variables in typescript

```ts
//Variable, identifyer, assignment, value
var x = 10;

//Type inferencing in typescript
var x2: number = 10;

var y = "hi";
var z = true;

var a: number = 200; 
```

# 43. Type Inference

* In the last video we learnt of type inferencing

```ts
var n1 = 10;

n1 = "Hi"; //Typescript inferred this would be of type number

//if we instead want to change this we can make it a any type

var n1: any = 10;

//It is however not always reliable

var n2 = n1 + 10;
//We assume this accepts numeric values
var n2 = n1 + "Hello"; //The type has now changed to string
console.log(n2); //10Hello
```

# 44. Any Type

* Typescript features a new data type called any type
* By using an any type this allows the function to run without any compile time checking, so it can hold all values without errors

```ts
var info: any;
info = 10;
info = true;
info = "Hello World!";
info = undefined;
```

# 45. Enumeration

* Enumerations are types that are used to give things names for enumeration values

```ts
enum ColorsEnum {
  Brown = 1, //0 = 1 makes 1,2,3
  Black = 5, //1
  Blue = 10//2
};

var myEyeColor : ColorsEnum = EyeColor.Black;
console.log(myEyeColor); //1
console.log(ColorsEnum[myEyeColor]); //Brown
```

# 46. Arrays & Tuples

There are two ways to declare arrays

```ts
let strArr1: string[] = ['Hello', 'World'];
let strArr2: Array<string> = ['Hello', 'World'];

let anyArr: any[] = ['Hello', 10, true];

//Lets say we want an array that wants to hold string and numeric values, this is called a tuple

let myTuple: [string, number] = ['Hello', 10];
console.log(myTuple[0]);
console.log(myTuple[1]);
```

# 47. Class Constructors

* 

```ts
class Person {
  public fname: string;
  public lname: string;

  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }
};

class Person1 {
  constructor(public fname: string, public lname: string) {

  }
}
```
 
 # 48. Interfaces

* Interfaces are the most flexible way of implementing types in typescript
* Interfaces are important and since their wiped when compiled into javascript we don't have to worry about the overhead

```ts
interface Person {
  fname: string;
  lname: string;
  age?: number; // If we add a ? we make it a nullable type which makes it optional
};

let employee1: Person = {
  fname: "Shaan",
  lname: "Khan",
  age: 19
}

let employee1: Person = {
  fname: "Shaan",
  lname: "Khan",
  // Leaving this empty makes an error, the interface must be present
}
```