"use strict";
// *## 01_What typescript does:
// 1. Static Checking.
// 2. Analyze the code as we type. that's it.
// 3. Typescript is development tool. Project still runs JS.
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetings = void 0;
// ## Typ-es -
// Number, String, Boolean, null, undefinde, void, Object, Array, Tuples, etc
// Example -
var user = { name: 'hitesh', age: 10 };
console.log('hitesh');
console.log(user.name); // Gedtting Better error because of typeScript
// *--------------------------*
// *Syntax -
// *let variableName: type = value
// *--------------------------*
// *--------------------------*
// *02_variablesMe.ts
// *--------------------------*
var greetings = "Hello Hiteshg";
exports.greetings = greetings;
var myNum = 6;
// myNum.toUpperCase();  // getting error.
greetings.toLowerCase(); // this correct.
console.log(greetings);
// *--------------------------*
// Number
var userId = 334455.3;
// Boolean
var isLoggedIn = false;
// * Note - it's not a good way to declair any variable with their type as above.
// Any - Always avoide this cases insted define type.
var hero;
function getHero() {
    return 'thor';
}
hero = getHero();
// *-------------------------------------------------------------------*
// *--------------------------*
// *Basics -
// *03_variablesMe.ts
// *--------------------------*
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
addTwo(5);
