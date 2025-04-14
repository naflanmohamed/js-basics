//callback function is

// setTimeout(function () {
//   console.log("I am setTimeout");
// }, 5000);

// function x(y) {
//   console.log("I am x");
//   y();
// }

// x(function y() {
//   console.log("I am y");
// });

function attachEventListener() {
  let count = 0;

  document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log("button clicked", count++);
  });
}

attachEventListener();
