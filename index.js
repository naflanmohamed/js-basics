console.log("Hello World");

var name = "John Doe";
console.log("Hello " + name);

let age = 30;
console.log("Age: " + age);

const isAdult = true;
console.log("Is Adult: " + isAdult);

age = 15;
console.log("Age: " + age);

// isAdult = false;
// console.log("Is Adult: " + isAdult);

let person = {
  name: "John Doe",
  age: 30,
  isAdult: true,
};
console.log(person);

person.age = 15;
console.log(person.age);

person["isAdult"] = false;
console.log(person.isAdult);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

function greet(name) {
  console.log("Hello " + name);
}

greet("John Doe");

var x = 2;

function getName() {
  console.log("Naflan Mohamed");
}

getName();
console.log(x);
console.log(getName);

// var getName = () => {
//   console.log("Naflan");
// };
console.log("2" + 2 - "2");
