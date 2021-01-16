// let displayColors = function() {
//     console.log(message);
//     for(let i in arguments) {
//         console.log(arguments[i]);
//     }
// }
// let message = "List of Colors";
// displayColors(message, 'Red');
// displayColors(message, 'Red', 'Blue');
// displayColors(message, 'Red', 'Blue', 'Green');
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var message = "Hello world!";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
//# sourceMappingURL=tutorial13.js.map