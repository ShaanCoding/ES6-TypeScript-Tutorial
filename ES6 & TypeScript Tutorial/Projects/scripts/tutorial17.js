// let employee = ["Shaan", "Khan", "Male"];
// let [fname, lname, gender] = employee;
var employee = ["Shaan", "Khan"];
var fname = employee[0], lname = employee[1], gender = employee[2];
//gender will be undefined
var employee = ["Shaan", "Khan", "Male"];
var gender = employee[2];
//Rest operator example
var fname = employee[0], elements = employee.slice(1);
// Destructuring with default values
var employee = ["Shaan", "Khan"];
var fname = employee[0], lname = employee[1], _a = employee[2], gender = _a === void 0 ? "Male" : _a;
//# sourceMappingURL=tutorial17.js.map