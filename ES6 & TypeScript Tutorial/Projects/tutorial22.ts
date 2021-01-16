class Person {
    constructor(name) {
        this.name = name;
        console.log(`${this.name} Constructor`);
    }

    static staticMethod() {
        console.log("Static method");
    }

    greetPerson() {
        console.log(`Hello ${this.name}`);
    }
}

let p = new Person("Shaan");

p.greetPerson();

Person.staticMethod();