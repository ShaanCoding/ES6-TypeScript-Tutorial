const displayColors = function(message, ...colors) {
    console.log(message);
    for(let i in colors) {
        console.log(colors[i]);
    }
}

const message = "List of colors";

const colorArray = [
    'Orange',
    'Yellow',
    'Indigo'
];

// displayColors(message, colorArray);


//Spread operator
displayColors(message, ...colorArray);