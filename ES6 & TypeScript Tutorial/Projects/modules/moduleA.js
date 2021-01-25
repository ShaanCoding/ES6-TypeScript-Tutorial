// // import {fname, lname} from './moduleB.js';

// console.log("Module A Loaded 1");

// // import {fname as f, lname as l} from './moduleB.js';

// const { fname: f, lname: l } = import("./moduleB.js");

// // import {fname as f, lname as l} from './moduleB.js';

// console.log("Module A Loaded 2");

// console.log(`${f} last name is ${l}`);

import { greet, GreetMessage } from "./moduleB.js";

greet("Hello World!");

let gm = new GreetMessage();
gm.greet();
