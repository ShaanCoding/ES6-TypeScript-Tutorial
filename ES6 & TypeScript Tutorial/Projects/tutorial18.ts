// let employee = ["Shaan", "Khan", "Male"];

let employee = {
    fname: "Shaan",
    lname: "Khan",
    gender: "Male"
};

// let {fname, lname, gender="Male"} = employee;

let {fname: f, lname: l, gender: g} = employee;


console.log(f);
console.log(l);
console.log(g);

// let [fname, lname, gender="Male"] = employee;