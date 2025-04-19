const users = [
  { firstname: "Alice", lastname: "Smith", age: 25 },
  { firstname: "Bob", lastname: "Johnson", age: 30 },
  { firstname: "Charlie", lastname: "Brown", age: 35 },
  { firstname: "David", lastname: "Williams", age: 30 },
  { firstname: "Eve", lastname: "Davis", age: 45 },
];

// 1. Map: Create an array of full names from the users array

const fullName = users.map((user) => {
  return user.firstname + " " + user.lastname;
});

console.log(fullName);

// Age Category and count

const ageCategory = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(ageCategory);

//get the fisrt name of the user with age less 30

const firstName = users
  .filter((user) => user.age <= 30)
  .map((user) => user.firstname);

console.log(firstName);
