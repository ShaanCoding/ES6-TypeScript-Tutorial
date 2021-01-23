var numbers = [2, 4, 6, 8];
var arrayFunction;
(function (element, index, array) {
    console.log("arr[" + index + "] = " + element);
});
numbers.forEach(arrayFunction);
var myMap = new Map([
    ["fname", "Shaan"],
    ["lname", "Khan"],
]);
var mapFunction = function (value, key, callingMap) {
    console.log(key + " " + value);
    console.log(myMap === callingMap);
};
myMap.forEach(mapFunction);
var mySet = new Set([1, 2, 3]);
var setFunction = function (value, key, callingSet) {
    console.log(key + " " + value);
    console.log(mySet === callingSet);
};
mySet.forEach(setFunction);
//# sourceMappingURL=tutorial34.js.map