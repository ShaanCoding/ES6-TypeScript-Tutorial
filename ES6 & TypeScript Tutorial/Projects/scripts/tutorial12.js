// let getValue = function(value = 10, bonus = 5) {
//     console.log(value + bonus);
// };
var percentBonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    console.log(value + bonus);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
//# sourceMappingURL=tutorial12.js.map