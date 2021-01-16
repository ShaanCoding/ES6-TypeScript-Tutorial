var firstName = "Shaan";
var lastName = "Khan";
//Lets say we want to make a new person object with this info
// let person = {
//     firstname: firstName,
//     lastname: lastName
// };
var person = {
    firstName: firstName,
    lastName: lastName
};
function createPerson(firstname, lastname, age) {
    var fullName = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullName: fullName,
        // isSenior: function(){
        //     return age > 60;
        // }
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullName);
console.log(person.firstName);
console.log(person.lastName);
// What is listed above is what we usually do
// The thing we did with the curly braces is called an object literal
//# sourceMappingURL=tutorial15.js.map