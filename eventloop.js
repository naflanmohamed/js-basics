// console.log("start");

// setTimeout(function cb() {
//   console.log("callback");
// }, 5000);

// console.log("end");

//event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by using a single thread. It does this by offloading operations to the system kernel whenever possible. The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. It has a queue of messages and a stack of functions to execute. When the stack is empty, it takes the first message from the queue and executes its associated function. This process continues until there are no more messages in the queue.
//fetch is a web API that allows you to make network requests similar to XMLHttpRequest. It returns a promise that resolves to the response of the request. The fetch function is non-blocking, meaning it does not block the execution of the code while waiting for the response. Instead, it allows other code to run while waiting for the response. When the response is received, the promise is resolved and the associated callback function is executed. This allows for more efficient use of resources and better performance in web applications.

console.log("start");

setTimeout(function cbT() {
  console.log("callback");
}, 5000);

fetch("https://api.github.com").then(function cbF() {
  console.log("fetch callback");
});

console.log("end");
