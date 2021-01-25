person[Symbol.iterator] = function* () {
  let properties = Object.keys(person);

  for (let t of properties) {
    yield this[t];
  }
};

for (let p of person) {
  console.log(p);
}
