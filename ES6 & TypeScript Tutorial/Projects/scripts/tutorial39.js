var person = {
    fname: "Shaan",
    lname: "Khan",
};
person[Symbol.iterator] = function () {
    var _this = this;
    //Fname, lname
    var properties = Object.keys(person);
    var count = 0;
    var isDone = false;
    var next = function () {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: _this[properties[count++]] };
    };
    return { next: next };
};
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var p_1 = person_1[_i];
    console.log(p_1);
}
//# sourceMappingURL=tutorial39.js.map