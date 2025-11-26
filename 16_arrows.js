/* ***** ARROWS ***** */

// THIS FUNCTION : yeh function current context ko refer krta hai
//this = reference to the object where this is used
// ( the object depends on the immediate context)
// objname.varname = this.varname
const user = {
    username: "shivam",
    age: 19,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website `)
        console.log(this) //yeh tumhara pura object print krega
    }

}

user.welcomemessage()
user.username = "sam" //this hamesha current object ka latest value dikhata hai. Tumne username badla → to this.username bhi badal gaya.
user.welcomemessage()

console.log(this) //yaha par this kisi ko reference ni dera kyuki this abfhi global scope pe hai isiliye yeh empty brackets show krega
//isme this kisiko reference ni dera
//Global scope me:
//🔹 Browser me:
//this = window object
//🔹 Node.js me:
//this = empty object {}

function chai(){
    let username = "ramlal"
    console.log(this.username)
    
}

chai()

const chai2 = function(){
    let username = "sunny leone"
    console.log(this.username) //Normal function ke andar this kabhi local variables ko use nahi karta. Woh sirf object ke andar honge tabhi access karega
}

chai2()
//arrow function kaa basic syntax hai tumahra () => {} phir isko tum varibale mien bhi daalskte ho jaise neeche kiya hai
const tea = () => { //bass fucntion hatado aur brackets ke baad ek arrow banado bangay tumhara arrow function
    let username = "shivam"
    console.log(this)

}

tea()

const addtwo = (num1,num2) => {
    return num1 + num2
}

console.log(addtwo(3,4))

const addtwo2 = (num1,num2) => num1 + num2 //yeh ek aur tarika hai arrow function kaa isse kehte hai implicit return
const addtwo3 = (num1,num2) => ( num1 + num2 ) //agar curly braces ke andar likha hai toh return keyword daalna jaruri hai aur agar without curly braces hai yaa phri parenthesis kee andar hai toh return value ke jarurat ni hoti par usse ek single line mein likhna hota hai
console.log(addtwo2(17,1))
console.log(addtwo3(1765,1))
 

//to return an object 

const add = (num1,num2) => {username: "shivam"} // ab yeh tumhara undefined show kregi kyuki curly braces lagadiye aur return nhi likha


const add2 = (num1,num2) => ({username: "shivam"}) //isme ab return value likhne ke jarurat ni hai aur object bhi return hojaaega