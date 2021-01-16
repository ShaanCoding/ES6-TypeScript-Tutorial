let firstName = "Shaan";
let lastName = "Khan";

//Lets say we want to make a new person object with this info

// let person = {
//     firstname: firstName,
//     lastname: lastName
// };

let person = {
    firstName,
    lastName
};

function createPerson(firstname, lastname, age) {
    let fullName = firstname + " " + lastname;

    return {
        firstname,
        lastname,
        fullName,
        // isSenior: function(){
        //     return age > 60;
        // }
        isSenior() {
            return age > 60;
        }
    };
}

let p = createPerson("Ross", "Geller");

console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullName);

console.log(person.firstName);
console.log(person.lastName);

// What is listed above is what we usually do
// The thing we did with the curly braces is called an object literal

