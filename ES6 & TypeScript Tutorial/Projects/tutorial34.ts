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
