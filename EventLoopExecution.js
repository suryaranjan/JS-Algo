console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Start
// End
// Promise
// Timeout




console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

// A
// E
// C
// D
// B



setTimeout(() => {
    console.log("Timeout 1");
  }, 0);
  
  Promise.resolve().then(() => {
    console.log("Promise 1");
    setTimeout(() => {
      console.log("Timeout 2");
    }, 0);
  });
  
  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
//   Promise 1
//   Promise 2
//   Timeout 1
//   Timeout 2


    

console.log("X");

setTimeout(() => {
  console.log("Y");
}, 100);

Promise.resolve().then(() => {
  console.log("Z");
});

console.log("W");

// X
// W
// Z
// Y


console.log("Start");

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

// Start
// End
// nextTick
// Promise
// Timeout

setImmediate(() => {
    console.log("Immediate");
  });
  
  setTimeout(() => {
    console.log("Timeout 0");
  }, 0);
  
  console.log("Sync");
//   Sync
//   Timeout 0
//   Immediate  

console.log("A");

queueMicrotask(() => {
  console.log("Microtask");
});

console.log("B");
// A
// B
// Microtask

console.log("Start");

setTimeout(() => {
  console.log("Timeout 0");
}, 0);

setTimeout(() => {
  console.log("Timeout 100");
}, 100);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
// Start
// End
// Promise
// Timeout 0
// Timeout 100

console.log("Start");

process.nextTick(() => console.log("nextTick"));

queueMicrotask(() => console.log("queueMicrotask"));

Promise.resolve().then(() => console.log("Promise"));

setImmediate(() => console.log("Immediate"));

setTimeout(() => console.log("Timeout 0"), 0);

console.log("End");
// Start
// End
// nextTick
// queueMicrotask
// Promise
// Timeout 0
// Immediate


