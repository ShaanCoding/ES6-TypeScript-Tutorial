let mySet = new Set();

let key = {};
mySet.add(key);

console.log(mySet.size); //1

key = null;

console.log(mySet.size); //1

//What we can infer even if the key is set to null, a reference to the key object still exists from our set

key = [...mySet][0]; //Gives us back our object

//Sometimes we wish our references in our set dissapear when our references dissapear to avoid memory leaks

//ES6 adds weakset, it's got add, has and delete but
//It can only store object references & non-primitave values
//Object values are weak
//If all references are removed, it starts garbage selection

let set = new weakSet();

let key2 = {};

set.add(key2);

console.log(set.has(key2)); //True

key2 = null;

//Not even possible to check because it already cleans it

//Weakset > Strongset is only good because it handles memory well




