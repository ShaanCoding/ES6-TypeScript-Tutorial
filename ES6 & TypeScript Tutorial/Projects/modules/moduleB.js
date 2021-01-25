// // export let fname = "Shaan";
// // export let lname = "Khan";

// let fname = "Shaan";
// let lname = "Khan";

// console.log("Module B Loaded");

// export {fname, lname};

export const greet = function (message) {
  console.log(message);
};

export class GreetMessage {
  constructor() {
    console.log("Constructor");
  }

  greet() {
    console.log("Greet function");
  }
}
