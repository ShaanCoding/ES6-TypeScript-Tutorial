                                                                                                                                                                                                                                                   
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