var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var mySet = new Set();
var key = {};
mySet.add(key);
console.log(mySet.size); //1
key = null;
console.log(mySet.size); //1
//What we can infer even if the key is set to null, a reference to the key object still exists from our set
key = __spreadArrays(mySet)[0]; //Gives us back our object
//Sometimes we wish our references in our set dissapear when our references dissapear to avoid memory leaks
//ES6 adds weakset, it's got add, has and delete but
//It can only store object references & non-primitave values
//Object values are weak
//If all references are removed, it starts garbage selection
var set = new weakSet();
var key2 = {};
set.add(key2);
console.log(set.has(key2)); //True
key2 = null;
//Not even possible to check because it already cleans it
//Weakset > Strongset is only good because it handles memory well
//# sourceMappingURL=tutorial31.js.map