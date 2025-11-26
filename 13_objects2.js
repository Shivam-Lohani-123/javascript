const tinderuser = new Object()
console.log(tinderuser) //empty object

tinderuser.id = "123abc"
tinderuser.name = "shivam"
tinderuser.isloogedin = false

console.log(tinderuser)

const regularuser = {
    email: "yoyobantairapper@gmail.com",
    fullname: {
        userfullname:{
            firstname:"shivam",
            lastname: "lohani"
        }
    }   
}

console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//console.log(obj3) //same problem as array kee as a object hee store kridya uske andar as a eleement store nhi kiya

//const obj3 = Object.assign(obj1 , obj2) //Yeh obj2 ki saari properties ko obj1 ke andar copy kar deta hai, aur obj1 ko hi return karta hai
//console.log(obj3) 
// assign use krne kee baad kya hota hai kee obj2 kee saari value obj1 mein store hojaati hai aur object1 kee saare value naye obj3 mein store hogi isse kya hota hai jo obj1 hai uski value bhi change  hojaati hai

// isiliye hum kar skte hai

const obj3 = Object.assign({},obj1,obj2)
console.log(obj1) // ab isse kya hua humne ek empty object dediya jisme obj1 aur obj2 store hua aur phir woh empty object obj3 mein store hogya
console.log(obj3) 

//we can also use spread operator like array to conconate them

const obj4 = {...obj1 , ...obj2}
console.log(obj4)

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
] //isme humne ek arrays mein object store kridye

//to access them

console.log(users[1].id,users[1].email)

console.log(Object.keys(tinderuser)); //Yeh tumhare object ke sirf keys (naam) nikaal ke array mein de deta hai.
console.log(Object.values(tinderuser)); //Yeh object ke saare values nikaal ke array mein de deta hai.
console.log(Object.entries(tinderuser)); //Yeh har ek key–value pair ko ek chhote array mein convert karta hai, aur saare pairs ka ek bada array return karta hai.

console.log(tinderuser.hasOwnProperty('isloogedin')) //yeh batata hai kee jo tumhara object hai uske pass given argument waali property hai ya nhi

//objects kaa discussion further hoke banta hai api kaa discusiion

//destructuring
//destructuring arrays kee bhi hoti hai aur objects ki bhi hoti hai

const course = {
    cousrename: "javascript",
    price: "9999",
    courseinstructor : "youtube"
}
//ab hume jaha bhi inn value ko use krna hai toh  hum likhenge course.courseinstructor .... isko likhne mein koi kharabi ni hai isse likhna bilkul shi hai
//iske alawa hum karskte hai
const {courseinstructor} = course  //course object ke andar se courseinstructor property ko bahar nikaal ke ek alag variable bana do jiska naam bhi courseinstructor hi hoga.
console.log(courseinstructor)

const {courseinstructor: instructor} = course
//isse kya hoga courseinstructor ek bhut bada naam hai usko chota krdiya instructor naam se

console.log(instructor)

//API kya hoti hai samjhlo jab bhi tumhe apna kaam kisi aur kee upar daalna hota hai usiko api kehte hai

