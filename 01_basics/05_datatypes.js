// primitive data types
// it is call by value, memory ka reference nahi diya jata hai, copy karke diya jata hai 

// 7 Types : String, Number, Boolean,null, undefined, Symbol, Bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 23123342342424243n



//Reference ( non primitive )

// Array, Objects,Functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name: "sartaj",
    age: 22
}

const myFunction = function(){
console.log("Hello world");
}

console.log(typeof myFunction);
