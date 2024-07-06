const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  //print the username object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); 
//In node environment we don't have any global objects hence it will print null
//But if we write this in web browser then it will print the window object as for browser window is the global object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //this inside funtion has no reference
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //this inside funtion has no reference
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); //this inside funtion has no reference
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return when we have only 1 statment inside function and that too of return value

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
