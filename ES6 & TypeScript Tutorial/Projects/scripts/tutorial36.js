var _a;
var s = Symbol();
console.log(typeof s);
var s2 = Symbol("First Symbol");
console.log(s2.toString()); //Symbol(First Symbol)
var s3 = Symbol();
var s4 = Symbol();
console.log(s3 === s4); //False
// A symbol always create a unique ID
var s5 = Symbol("Test");
var s6 = Symbol("Test");
console.log(s5 === s6); //False regardless of description
//Lets say we've created a new symbol but we want to use it again in a new file / same project
//We have a thing called a symbol registry
var s7 = Symbol.for("RegSymbol");
//Symbol.for doesn't add the symbol right away, it checks if it exists first
//If it does it will return the symbol
//If it doesn't exist it will create a new one
var s8 = Symbol.for("RegSymbol");
console.log(s7 === s8);
//Now lets say we wanted the key when the symbol was added to global registry
//Symbol .keyfor
console.log(Symbol.keyFor(s8));
var fname = Symbol();
var person = (_a = {},
    _a[fname] = "Shaan",
    _a);
//Now if we do this, we don't have to worry about our code being overwritten since our code will be unique
console.log(Object.getOwnPropertyNames(person));
//We don't get the property listed out since it's a symbol
console.log(Object.getOwnPropertySymbols(person));
//# sourceMappingURL=tutorial36.js.map