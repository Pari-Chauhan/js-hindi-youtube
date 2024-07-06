// singleton when created through constructors
// Object.create this is constructir creation of object

// object literals

const mySym = Symbol("key1") //Symbol declaration


const JsUser = {
    name: "Hitesh", //Here name is tracked as string type
    "full name": "Hitesh Choudhary", //These can't be accessed by the . rather by []
    [mySym]: "mykey1",  //declaring symbol, sccessed by []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //If don't want to make changes 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); //will print the return value of function, here func. is not returning any value hence undefined + function call mein jo print ho raha hoga wo tho ho hi raha hai
console.log(JsUser.greetingTwo());
