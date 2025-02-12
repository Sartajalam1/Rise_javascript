// const tinderUser = new Object() // sinleton Object

const tinderUser = {} // Non singleton Object

tinderUser.id = "abc123"
tinderUser.name = "Samm"
tinderUser.age = 34
// console.log(tinderUser);

const snapChat = {
    email:"same@gmail.com",   // we can know, object in object put such as chainning process. then access all object (.)dot laga kar access kar sakte hai
    userName:{
        UserFullName:{
            firstName:"sartaj",
            lastName:"Alam",


        }
    }
}
// console.log(snapChat.userName.UserFullName.lastName);

const Obj1 = {1:"A",2:"B"} // combin two objects
const Obj2 = {3:"C",4:"D"}
const Obj5 = {5:"E",6:"F"}

// const Obj3 = {Obj1, Obj2} // Here is Combin Two Objects first Method
// console.log(obj3)

// 2nd Method 
// const Obj4 = Object.assign({}, Obj1,Obj2,Obj5)
// console.log(Obj4);

// 3rd method SpreadMethod

const Obj6 = {...Obj1, ...Obj2, ...Obj5}
// console.log(Obj6);

// 4th Method 

const users = [
    {
        id: "233D",
        email: "sasrta@gmail.com"
    },
    {
        id: "233D",
        email: "sasrta@gmail.com" 
    },
    {
        id: "233D",
        email: "sasrta@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(snapChat.hasOwnProperty('userName')); // we can check properties in our Objects







