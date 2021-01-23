var mySet = new Set();
var ob1 = {};
var ob2 = {};
//Once we have a new set we can add elements by .add
mySet.add("Hello");
mySet.add(ob1);
mySet.add(ob2);
//To check size
console.log(mySet.size);
var newSet = new Set([1, 2, 2, 3]);
console.log(newSet.size);
var chainSet = new Set().add("hello").add("world");
//Checks if exist
console.log(chainSet.has("hello"));
//# sourceMappingURL=tutorial30.js.map