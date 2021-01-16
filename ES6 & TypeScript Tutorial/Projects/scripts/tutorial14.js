var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var message = "List of colors";
var colorArray = [
    'Orange',
    'Yellow',
    'Indigo'
];
// displayColors(message, colorArray);
//Spread operator
displayColors.apply(void 0, __spreadArrays([message], colorArray));
//# sourceMappingURL=tutorial14.js.map