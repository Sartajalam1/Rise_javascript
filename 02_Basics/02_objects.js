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
console.log(user.email);
console.log(user["email"]);
console.log(user["Fullname"]);
console.log(user[mySym])

user.email = "Sartaj20@chatgpt.com"
console.log(user.email);



