// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myfunc = () => console.log("function was invoked")
myfunc()

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherfunc = param => param
console.log(anotherfunc);

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add1 = (param1, param2) => param1 + param2
console.log(add1(3, 7));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract1 = (param1, param2) => param1 - param2
console.log(subtract1(4, 6));
// Stretch

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const three = exampleArray.map(num => num * 3);
console.log(three);