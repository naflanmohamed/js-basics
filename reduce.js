const arr = [4, 5, 6, 1, 3, 2];

// sum of max

function sumMax(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumMax(arr));

const output = arr.reduce(function (acc, curr) {
  acc += curr;
  return acc;
});

console.log(output);

// find max

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const maxOutput = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxOutput);

// find min

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin(arr));

const minOutput = arr.reduce(function (acc, curr) {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
});

console.log(minOutput);
