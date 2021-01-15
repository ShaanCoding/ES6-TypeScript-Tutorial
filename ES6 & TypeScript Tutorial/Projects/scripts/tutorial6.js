function greetPerson(name) {
    var greet;
    if (name == "Shaan") {
        greet = "Hello Shaan";
    }
    else {
        greet = "Hi there!";
    }
    console.log(greet);
}
greetPerson("Shaan");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); //10
    console.log(b_1); //20
}
console.log(a); //Var declaration, is still going to persist = 10
console.log(b); //Let declaration will only exist within if block, therefore b = 2
//# sourceMappingURL=tutorial6.js.map