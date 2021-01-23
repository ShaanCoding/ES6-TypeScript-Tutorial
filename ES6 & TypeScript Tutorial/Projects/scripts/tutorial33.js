var myMap = new Map([
    ["fname", "Shaan"],
    ["lname", "Khan"]
]);
//How do we iterate over the keys
for (var _i = 0, _a = myMap.keys(); _i < _a.length; _i++) {
    var key_1 = _a[_i];
    console.log(key_1);
}
for (var _b = 0, _c = myMap.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log(value);
}
for (var _d = 0, _e = myMap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0] + " -> " + entry[1]);
}
//# sourceMappingURL=tutorial33.js.map