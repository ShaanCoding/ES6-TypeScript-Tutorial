var myMap = new WeakMap();
var ob1 = {};
myMap.set(ob1, "Hello World!");
console.log(myMap.get(ob1));
ob1 = null;
//Now the weakmap is empty
//# sourceMappingURL=tutorial35.js.map