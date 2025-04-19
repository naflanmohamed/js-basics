const arr = [5, 1, 8, 2, 4, 3, 7, 6];

//filter even numbers
function isEven(num) {
  return num % 2 === 0;
}

const evenNumbers = arr.filter(isEven);
console.log(evenNumbers);

//filter odd numbers
function isOdd(num) {
  return num % 2;
}

const oddNumbers = arr.filter(isOdd);
console.log(oddNumbers);

//filter numbers greater than 5

function isGreaterThanFive(num) {
  return num > 5;
}

const greaterThanFive = arr.filter(isGreaterThanFive);
console.log(greaterThanFive);

//filter numbers less than 5

const lessThanFive = arr.filter((num) => num < 5);
console.log(lessThanFive);
