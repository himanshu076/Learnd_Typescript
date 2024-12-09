// *## 01_What typescript does:
// 1. Static Checking.
// 2. Analyze the code as we type. that's it.
// 3. Typescript is development tool. Project still runs JS.

// ## Typ-es -
// Number, String, Boolean, null, undefinde, void, Object, Array, Tuples, etc

// Example -
const user = {name: 'hitesh', age: 10}


console.log('hitesh');
console.log(user.name);   // Gedtting Better error because of typeScript


// *--------------------------*
// *Syntax -
// *let variableName: type = value
// *--------------------------*


// *--------------------------*
// *02_variablesMe.ts
// *--------------------------*
let greetings: string = "Hello Hiteshg";
let myNum = 6;

// myNum.toUpperCase();  // getting error.
greetings.toLowerCase();  // this correct.
console.log(greetings);

export {greetings}

// *--------------------------*
// Number
let userId: number = 334455.3

// Boolean
let isLoggedIn: boolean = false;

// * Note - it's not a good way to declair any variable with their type as above.

// Any - Always avoide this cases insted define type.
let hero: string;

function getHero(){
  return 'thor';
}
hero = getHero();



// *-------------------------------------------------------------------*
// *--------------------------*
// *Basics -
// *03_myFunctions.ts
// *--------------------------*
function addTwo(num: number){
  return num + 2
}

function getUpper(val: string){
  return val.toUpperCase();
}

function signUpUser(name:string, email:string, password:string, isPaid:boolean){}

let loginUser = (name:string, email:string, isPaid:boolean=false) => {}

addTwo(5);
getUpper("hitesh");
signUpUser("hitesh", "hitesh@loc.dev", "45787gfvvh", false);
loginUser("hitesh", "hitesh@loc.dev");

// function getValue(myval:number): boolean{
//   if (myval > 5){
//     return true
//   }
//   return "200 OK"
// }

const gethello = (s:string): string => {
  return ""
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map((hero: string): string => {
  return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
  console.log(errmsg);
}

function handleError(errmsg: string): never{
  throw new Error(errmsg);
}

// *-------------------------------------------------------------------*
// *--------------------------*
// *04_myObjects.ts
// *--------------------------*

const User = {
  name: "hitesh",
  email: "hitesh@lco.dev",
  isActive: true,
}

function createUser({name: string, isPaid: boolean}) {

}
// first Way
createUser({name: "hitesh", isPaid: false})

// Second Way - with the arguments that function dosen't receive.
let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
createUser(newUser)

// -------- //
function createCourse():{name: string, price: number}{
  return {name: "reactJs", price: 399}
}

// Type Aliases start from here....
type User = {
  name: string,
  email: string,
  isActive: boolean,
}

function createUser2(user: User): User{
  return {name: "", email: "", isActive:false}
}

createUser2({name: "", email: "", isActive:false})
// Type Aliases ends from here....

type User2 = {
  readonly _id: string   // readonly is used to make field/property readable only, on one can change it.
  name: string,
  email: string,
  isActive: boolean,
  credCardDetails?: number   // to make property optional just use "?" before the :.
}

let myUser: User2 = {
  _id: "1234",
  name: "h",
  email: "h@h.com",
  isActive: false,
}

type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

// combined 2 types & create mearged new one type.
type cardDetails = cardNumber & cardDate & {
  cvv: number
}


myUser.email = "h@gmail.com"
// myUser._id = "asa"   //not allowed to update.
