// let employee = ["Shaan", "Khan", "Male"];
// let [fname, lname, gender] = employee;

let employee = ["Shaan", "Khan"];
let [fname, lname, gender] = employee;

//gender will be undefined

let employee = ["Shaan", "Khan", "Male"];
let [, , gender] = employee;

//Rest operator example

let [fname, ...elements] = employee;

// Destructuring with default values

let employee = ["Shaan", "Khan"]

let [fname, lname, gender="Male"] = employee;