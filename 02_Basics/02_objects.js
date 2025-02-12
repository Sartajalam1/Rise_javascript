// sigleton

// objects literals

const mySym = Symbol["Key1"]

const user = {
    name: "Sartaj",
    "Fullname": "Sartaj alam",
    age: 23,
    [mySym]: "myKey1",
    location: "Bihar",
    email: "sartaj10@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["monday","Sunday"]

}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["Fullname"]);
// console.log(user[mySym])

user.email = "Sartaj20@chatgpt.com"
// Object.freeze(user)                  // freeze function use karne ke baad kuch access nahi hoga user object ka usek badd se stop ho jayega
user.email = "sartajalam16@gmail.com"
// console.log(user.email);

user.greeting = function () {
    console.log("Hello Js User");
};

user.greetingTwo = function (){
    console.log(`Hello Js User ${this.name}`);
};
console.log(user.greeting());
console.log(user.greetingTwo());





