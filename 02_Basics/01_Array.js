// Array 

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shahrukh","Salman","Ravi Teja"]

// console.log(myHeros);

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

// Array methods

// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));
// console.log(myArr);


const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr);

// slice , splice 

// console.log("A " , myArr);

// const  myn1 =  myArr.slice(1,3)
// console.log(myn1);
// console.log("B" ,myArr )

// const myn2 = myArr.splice(1,3)
// console.log("C",myArr);
// console.log(myn2);

// ***********************************************************************

const marvel_heros = ["thor","spiderman","ironman","hulk"]
const dc_heros = ["batman","superman","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);


const Allheros = marvel_heros.concat(dc_heros)
// console.log(Allheros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[8,9,[1,2,3]]]
const real_another_array = another_array.flat(Infinity)
// console.log(another_array);

// console.log(real_another_array)

// console.log(Array.isArray("Sartaj"))
// console.log(Array.from("Sartaj")) we want to convert in Array, i can use "From" operation
// console.log(Array.from({Name:"Sartaj"}))  //Interesting , Return Empty value 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));









