// function a() {
//   console.log(b);
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();

// function a() {
//   console.log(b);
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();
// var b = 10;

function a() {
  var b = 10;

  c();
  function c() {
    console.log(b);
  }
}

a();
// console.log(b);
