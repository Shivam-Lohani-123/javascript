/*   STRINGS  */

const name = "shivam"
const age = 18

console.log(name + age + " value") // yeh thoda purana version hai string ko concanate krne kaa

// for modern coding

console.log(` hello my name is ${name} and my age is ${age}`)

const gamename = new String('shivam124')
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
console.log(gamename)
console.log(typeof gamename)
console.log(gamename[0]);
console.log(gamename.__proto__); //this property of javascript 
console.log(gamename.length);
console.log(gamename.toUpperCase())  // these are the functions of javascript that can be used by the string
console.log(gamename.charAt(5)) //tells whuch character is at the index
console.log(gamename.indexOf('1')) //tell the index of the element
const newstring = gamename.substring(0,4); //substring ek js kaa functiion hai jo ek substring banata hai isme hume start aur end value deni hoti hai jiske andar kee saare elements uss substring mein hote hai
const string5 = gamename.slice(-8,4) //slice works same as substring but can also take negative value inside of it whereas substring doesnt take neg value if you give substring neg value it will ignore it and start from zero 
console.log(newstring)
console.log(string5)
let charizard = "   goto   "
// if you want to remove the spaces that will be given by the user unknowingly aur knowingly then you can use a js property known as trim()
console.log(charizard)
console.log(charizard.trim())
console.log(charizard.trimStart())
console.log(charizard.trimEnd())

const url = "https://shivamlohani.com//shivam%100lohani"

console.log(url.replace('%100' , '-')) //it replaces the %100 in the string with the -

console.log(url.includes('shivam')) //it tells you that the certain keyword is included in the string or not
console.log(url.includes('charizard'))

//split() yeh ek function hai jo kisi string ko array mein todta hai isme hum ek seperator dete hai aur ek limit
let string6 = "haye mera dil haye mera dil"
console.log(string6.split(' ')) // hum whitespace ke usme sabko split kar rhe hai
console.log(string6.split(' ',3)) //isme bass sstaring ke 3 elements ko hee array mien badla
