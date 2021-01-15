var getRegvalue = function() {
    return 10;
}

console.log(getRegvalue());

// const getArrowValue = () => {
//     return 10;
// }

// const getArrowValue = () => 10;

//If we want to pass a value

// const getArrowValue = (m) => 10*m;

// const getArrowValue = m => 10*m;

// Passing multiple values

const getArrowValue = (m, bonusValue) => 10*m + bonusValue;

console.log(getArrowValue(5, 10));

//the typeof is a function