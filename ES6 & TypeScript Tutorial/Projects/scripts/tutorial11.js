// Make an object
// var employee = {
//     id: 1,
//     greet: function() {
//         var self = this;
//         setTimeout(function(){console.log(self.id)}, 1000);
//     }
// };
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
// Expected id is id 1, which is what we get
// Lets say we want to show our console log of this.id in a setTimeout function
// Now inside of the set timeout function, it's undefined.
// When we create a function it creates its own definition of the this keyword, it does NOT have the context of the outside function
// To have a workaround, we could make a variable that stores the context of this which will work
// A bypass to this is to use an arrow function instead which will not absorb context
//# sourceMappingURL=tutorial11.js.map