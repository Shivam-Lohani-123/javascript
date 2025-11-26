/****** NUMBERS AND MATHS ******/

const score = 400
console.log(score)

const num2 = new Number(400)
console.log(num2)

console.log(typeof num2)

console.log(num2.toString()) // yeh number ko convert krke string banata hai
let num3 = 100.9334
console.log(num3.toFixed(3)) //yeh decimal ko fixed krdeta hai matlab neeche code ke according 3 se jyada decimal nhi honge code mein

const othernumber = 23.87769
console.log(othernumber.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString()) //yeh number kee beech mein comma lagadeti hai parantu us style mein 
console.log(hundreds.toLocaleString('en-IN')) //YEH INDIAN STYLE MEIN KAR DETI HAI

/***************   MATHS   ***************/
//Math ek built-in object hai. Iske andar bahut saare mathematical methods aur constants hote hain, jaise Math.PI, Math.round(), Math.sqrt(), Math.random(), etc.
console.log(Math)
// agar tumhe koi mathematical operation karna hai, toh Math object ke methods use karne padenge — directly likh ke nahi chalega
console.log(Math.abs(-4)) // yeh absolute value deta hai iski
console.log(Math.round(4.6)) // yeh roundoff krta hai

console.log(Math.ceil(4.02)) //yeh kehta hai agar number jara saa bhi 4 se jyada hua toh woh 5 as a output dega
console.log(Math.floor(4.7)) //opposite of ceil

//the most important function in maths is math.random()... it will generate a random value between 0 and 1
//if you want a value always greater than 1 than you can use 
console.log((Math.random() * 10) + 1) //we added 1 because the random function can also generate 0

//if you want to generate a number so that it is always greater than the min value you assigned you can use
let min = 30
let max = 40
console.log(((max-min)*Math.random())+min)


console.log(Math.random(3)) //iske anddar kuch bhi likhoge uska zero effect hoga matlab 3 ka 0 effect hai