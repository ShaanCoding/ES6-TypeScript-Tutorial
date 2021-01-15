// let getValue = function(value = 10, bonus = 5) {
//     console.log(value + bonus);
// };

let percentBonus = () => 0.1;

let getValue = function(value = 10, bonus = value * percentBonus()) {
    console.log(value + bonus);
};

getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);