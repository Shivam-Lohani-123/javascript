// CONTROL FLOW

//if 

//if (true){       jab yeh condition true hogi tabhi jo yeh if statement hai woh execute hoga ni toh woh execute nhi hoga
//}

//if (false){}   yeh execute nhi hoga kyuki isme condition mein false likha hai jab condition true hogi tabhi code tumahara execute hoga

const isuserloggedin = true
if (isuserloggedin){
    console.log("the user has logged in ")
}

if (2=="2"){
    console.log("executed")
}
if (2==="2"){       // === ek strict checking hoti hai yeh sirf value ni tumhara type bhi check krta hai
    console.log("executed")
}
if (2!=5){
    console.log("haha")
}

const temperature = 41

if (temperature >= 50){
    console.log("temperature is very high")
}

else{
    console.log("temperature is very low ")
}
//NESTING IF-ELSE

const balance = 1000

if (balance < 500){
    console.log("less than 500")
} else if (balance <900){
    console.log("less than 900")
}
 else if (balance <1100){
    console.log("less than 1100")
}
 else if (balance <1200){
    console.log("less than 1200")
 }

//same hai c++ ke tarah

//Switch case

// switch (key){
//     case value:
//         break;

//     default:
//         break;
// }

const month =2

switch (month){
    case 1:
        console.log("month is january")
        break;
    case 2:
        console.log("month is february")
        break
    case 3:
        console.log("month is march")
        break
    case 4:
        console.log("month is april")
        break
    case 5:
        console.log("month is may")
        break
    default:
        console.log("default case ")
        break;
}

//there are some values which are already assumed that they are true or false
//agar aap condition mein sirf ek string dete ho toh compiler usse true leta hai
//on the other hand compiler empty strings ko false leta hai

// falsy values

// false, 0, -0, BigInt 0n, "" (empty string), null, undefined, NaN

//truthy values
// "0", 'false', " ", [] "empty array ", {} "empty object", function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //we can use the lenth property for an empty string or array or object
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

//?? tab use hota hai jab tum kisi variable ka value check karna chahte ho, aur agar uski value null ya undefined ho, tab ek default value de deni hoti hai.
//Nullish Coalescing Operator (??) sirf tab right-side wala value leta hai jab left side null ya undefined ho.


let val1;
let val2;
let val3;
let val4
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")