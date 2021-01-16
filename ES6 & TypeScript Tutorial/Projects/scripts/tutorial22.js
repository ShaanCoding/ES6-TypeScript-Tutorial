var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Person.staticMethod = function () {
        console.log("Static method");
    };
    Person.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var p = new Person("Shaan");
p.greetPerson();
Person.staticMethod();
//# sourceMappingURL=tutorial22.js.map