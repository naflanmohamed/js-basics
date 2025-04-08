function x(y) {
  console.log("I am x");
  y();
}

x(function y() {
  console.log("I am y");
});
