
let myMap = new Map();
//To add an item
//Key - value pair
myMap.set("fname", "Shaan");
myMap.set("age", 30);

//To get a value
console.log(myMap.get("fname"));


let ob1 = {};
let ob2 = {};

myMap.set(ob1, 10);
myMap.set(ob2, 20);

console.log(myMap.get(ob1));

console.log(myMap.size);
