// {
//   var a = 10;
// }

// console.log(a);

// let b = 900;
// {
//   var a = 90;
//   let b = 100;
//   const c = 200;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(b);
// // console.log(b);
// // console.log(c);

// var a = 20;
// {
//   let a = 30;
//   console.log(a);
// }

// var a = 20;
// {
//   var a = 30;
//   {
//     var a = 40;
//     console.log(a);
//   }
// }
// console.log(a);

// let a = 10;
// {
//   let a = 20;
//   {
//     let a = 30;
//     console.log(a);
//   }
// }
// console.log(a);

// const b = 10;
// {
//   const b = 20;
//   {
//     const b = 30;
//     console.log(b);
//   }
// }
// console.log(b);

// let a = 10;
// {
//   let a = 20;

//   function x(a) {
//     var a = 30;
//     console.log(a);
//   }
//   x(25);
// }
// console.log(a);

let a = 10;
{
  let x = () => {
    var a = 20;
    console.log(a);
  };
  x();
}

console.log(a);
