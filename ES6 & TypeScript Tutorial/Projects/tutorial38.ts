let iterable = [1, 2, 3];

const createIterator = function (array) {
  let count = 0;
  return {
    next: function () {
      return count < array.length
        ? { value: array[count++], done: false }
        : { value: undefined, done: true };
    },
  };
};

const myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
