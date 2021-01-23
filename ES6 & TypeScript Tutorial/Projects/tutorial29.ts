// //ES5 way of doing sets

// // let mySet = Object.create(null);

// // mySet.id = 1;
// // if(mySet.id) {
// //     console.log("ID Exists");
// // }

// //ES5 way of doing maps

let myMap = Object.create(null);
myMap.name = "Shaan"; //Name as key, shaan as value
// let val = myMap.name;
// console.log(val);

// myMap[100] = "Hello";

// console.log(myMap["100"]); //Object properties can only be STRINGS
// //This becomes an issue if we want to use both as keys


let ob1 = {};
let ob2 = {};

myMap[ob1] = "World";

console.log(myMap[ob1]); //Since this gets casted to the same index it'll both print out the same val
console.log(myMap[ob2]);
