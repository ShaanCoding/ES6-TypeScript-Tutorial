let str = "Hello";
let arr = [1, 2, 3];
let num = 5;
let obj = { name: "Shaan" };

console.log(`For string ${typeof str[Symbol.iterator]}`);
console.log(`For string ${typeof arr[Symbol.iterator]}`);
console.log(`For string ${typeof num[Symbol.iterator]}`);
console.log(`For string ${typeof obj[Symbol.iterator]}`);

// As we can see, arrays and strings have iterator functions
