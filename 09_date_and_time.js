/******* Date AND Time *******/

//date objects represents a single moment in time in a platform independent format
let mydate = new Date()
console.log(mydate.toString()) //toString is use for conversion of element to string
console.log(mydate.toISOString()) //date ko ISO (international standard) format mein convert karta hai.
console.log(mydate.toDateString()) //date ko readable string format mein deta hai (sirf date, no time).
console.log(mydate.toLocaleString())//date + time ko user ke local format mein convert karke deta hai.
console.log(mydate.toLocaleDateString())// sirf date ko user ke local date format mein deta hai.
console.log(mydate.toJSON()) //date ko JSON-compatible ISO string format mein convert karta hai.

console.log(typeof(mydate))

//javascript mein month 0 se shuru hote hai

//to create a date you can

let mycreation = new Date(2025,11,14) //isme bhi months 0 se start hote hai
console.log(mycreation.toDateString())

let mycreation2 = new Date(2023 , 0 ,23,5,3) //isme 5 hrs aur 3 min jitna data add krte jaaoge utna kuch naa kuch aate rhega
console.log(mycreation2.toLocaleString())

let mycreation3 = new Date("01-14-2025") /*Ye ek Date object banata hai, jisme string ko parse karke date create hoti hai. Aur "01-14-2023" ka format hai MM-DD-YYYY Matlab: 01 - january baaki sab toh pta hee hua*/
console.log(mycreation3)


let timestamp = Date.now() //Ye current time ka timestamp deta hai — matlab 1 January 1970 se lekar ab tak kitne milliseconds beet chuke.
console.log(timestamp)
console.log(mycreation.getTime()) //getTime() us Date object ko milliseconds mein convert kar deti hai, matlab 1 January 1970 se lekar tumhari date tak kitne milliseconds beet gaye, wahi number return hota hai.

console.log(Math.floor(Date.now()/1000)); //to convert the miliseconds to seconds

let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth() + 1)
console.log(newdate.getDay())
console.log(
newdate.toLocaleString("default" , {
    weekday: "long", 

})
)
/* toLocaleString() → date ko readable (insaan wali) language mein convert karta hai 'default' → system ki default language follow karega (India me mostly English / Hindi style) { weekday: "long" } → bas week ka naam poora likhke dega */
