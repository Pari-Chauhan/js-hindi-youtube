// const tinderUser = new Object() //singleton
const tinderUser = {} //Non Singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {                 //Nested Objects
    email: "some@gmail.com",
    fullname: {     //nested obj 1
        userfullname: { //nested obj 2
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // will create nested objects
// const obj3 = Object.assign({}, obj1, obj2, obj4) //combines multiple objects

const obj3 = {...obj1, ...obj2} //spread operators used to combine the given operators
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] //Array of Objects

users[1].email
// console.log(tinderUser); //return an object and its values attributes along with values get printed

// console.log(Object.keys(tinderUser)); //return an ARRAY of keys of objects
// console.log(Object.values(tinderUser)); //return an ARRAY of values of Objects
// console.log(Object.entries(tinderUser)); //return a nested array (all entries which are itself arrays are placed inside big array)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //to check whether the obj has given property


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //used when we need to prevent writting course.courseIntrcuctor again and again -> rename it as instructor can use {courseInstructor

// console.log(courseInstructor);
console.log(instructor);

//API RETURN TYPES IN FORM OF WITHOUT NAME OBJECTS OR ARRAYS OF OBJECTS(JSON) 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

