// for of loops

//yeh jo loops hai jo hum ab padne jaarhe hai woh array specific loops hote hai

const arr = [1, 2, 3, 4, 5]

// for (const element of object) {
    //syntax of for of loop //isme element ek varibale jaise index type aur yeh jo object hai woh object data type nhi hai yeh hai kiss par tumhe yeh loop lagana hai yeh tumhara array bhi hoskta hia jaruri nhi hai object hee ho
// }

for (const num of arr){
    console.log(num);
}

const greetings = "hello baby"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

//one of the data type is maps 
//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map)
//map isiliye hota hai india ko humne do baar diya hai par print ke hee baar horha hai kyuki woh ek unique value leti hai
//map.set(key,value)
//set() JavaScript ke Map object ka function hota hai.
//Iska kaam hota hai Map ke andar ek naya key–value pair add karna, ya agar key exist karti hai toh value update karna.

for(const key of map)
{                                       //isse pura arrays hee print hojaara hai
    console.log(key)
}

for(const [key,value] of map){
    console.log(key," :- ",value)
}

//for of loop object mein kaam ni krta hai

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//ab object kee liye aata hai for in loop yeh auro mein bhi lag jaata hai khaali object tak limited nhi hai yeh

for ( const key in myObject){
    console.log(key)
}
//ab keys toh aagyi agar value chahiye toh hum kar skte hai
for ( const key in myObject){
    console.log(myObject[key])
}
for ( const key in myObject){
    console.log(`${key} is the shortcut for ${myObject[key]}`)
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming){
    console.log(key)
} //yeh for in loop kaa ek drawback hai kee woh keys print kar deta hai value ko nhi unlike for of loop

for ( const key in programming){
    console.log(programming[key])
}

for ( const key in map){
    console.log(key)
} //yeh kuch print ni kareag kyuki jo map hai woh iterable nhi hai

console.log("\n")
//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]
//forEach mein callback function use hota hai
//Callback function = ek aisa function jo kisi dusre function ko argument ke roop mein diya jaata hai, taaki woh baad mein chalaya ja sake.
//Callbacks ke naam isliye nahi hote kyunki woh chhote, one-time-use, aur sirf ek hi jagah chalne wale functions hote hain.
coding.forEach( function (item) {
    console.log(item)
})

console.log("\n")
//isme hum arrow function bhi use kar sakte hai 

coding.forEach( (item) => {
    console.log(item)
})
console.log("\n")
function printme(item){
    console.log(item)
}

coding.forEach(printme) //yaha par hume function ko execute ni karana bass uska reference dena hai

console.log("\n")
// for each mein jaruri ni hai sirf ek hee value le hum uska index ayr array pura leskte hai

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
// arrays kee andar object 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )