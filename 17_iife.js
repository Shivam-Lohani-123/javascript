// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

//humne iife banane ke liye function ko parenthesis mein band krdiya
//jo function immediately execute hojaaye 
//1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
//2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
(function chai(){
    //yeh ek named iife hai kyuki iska naam hai
    console.log(` DB CONNECETED`)
}) ();
//Back-to-back IIFE likhne par semicolon zaroori hai kyunki bina semicolon ke JavaScript dono IIFE ko ek hi expression samajh kar error de deta hai.
(function ehhe() {
    //yeh ek named iife hai kyuki iska naam hai
    console.log("raichu")
})(); //yeh humne banadiye iife

((name) => {
    //yeh ek unnamed iife hai
    console.log(`db connected two ${name}`)
})('shivam');
