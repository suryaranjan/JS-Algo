console.log(null == undefined);   // true   (loose equality treats them as equal)
console.log(null === undefined);  // false  (different types)
console.log(Object.is(null, undefined)); // false

console.log(NaN == NaN);          // false  (NaN is never equal to itself)
console.log(NaN === NaN);         // false
console.log(Object.is(NaN, NaN)); // true   (Object.is fixes this case)

console.log(0 == -0);             // true   (treated as equal)
console.log(0 === -0);            // true   (same type and value)
console.log(Object.is(0, -0));    // false  (distinguishes +0 and -0)

console.log("5" == 5);            // true   (string coerced to number)
console.log("5" === 5);           // false  (different types)
console.log(Object.is("5", 5));   // false

console.log(true == 1);           // true   (boolean coerced to number)
console.log(true === 1);          // false
console.log(Object.is(true, 1));  // false
