// Immediately Invoked Function Expressions (IIFE) - executes immediately
//Global scope's pollution causes problem to prevent the problem of global scope variables we have used IIFE
//() -> to wrap function, () to make execution call
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

