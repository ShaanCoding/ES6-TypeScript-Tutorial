class Person {
    constructor() {
        console.log("Person constructor");
    }

    getID() {
        return 10;
    }
}

class Employee extends Person {
    constructor(name) {
        super();
        console.log(`${name} Employee constructor`);
        
    }

    getID() {

    }
}

let e = new Employee();
console.log(e.getID());

