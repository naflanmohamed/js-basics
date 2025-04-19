//Map
const arr = [1, 2, 3, 4, 5];

function double(x) {
  return x * 2;
}

const output = arr.map(double);

console.log(output);

function tripple(x) {
  return x * 3;
}

const output2 = arr.map(tripple);

console.log(output2);

function binary(x) {
  return x.toString(2);
}

//or

// const output3 = arr.map((x) => x.toString(2));

const output3 = arr.map(binary);

console.log(output3);
