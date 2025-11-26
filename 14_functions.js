/****** Functions ******/

function saymyname(){
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("V")
    console.log("A")
    console.log("M")
}
//saymyname //yeh hai function kaa reference
saymyname() //function calling //yeh hai function kaa execution

function add2number(a,b){   //number aise pass kiye jaate hai
    console.log(a+b)
}
//yeh jo a,b hai usse kehte hai parameters aur jo yeh value pass kri gyi usse kehte hai arguments
add2number(2,"a")

const result = add2number(2,3)

console.log("result : " , result) //iska answer ayega undefined kyuki humne function ko koi bhi return value nbhi di hai


function add2(a,b){   //number aise pass kiye jaate hai
    let res = a+b
    return res
}

console.log("result: " ,add2(2,3) )

function loginusermessage(username){
    if(username === undefined){
        return "please enter the username"
    }
    return `${username} just logged in`
}

console.log(loginusermessage("shivam"))
console.log(loginusermessage())

//ab agar humne kisi function ko call kiya aur unhone koi argument hee pass ni kiya tab kya hoga

/***IMP*** Javascript mein kuch cheeze pehle se hee false rehti hai jaise kee empty string " " aur undefined ko false value lete hai........*/

// function calculatecartprice(num1){
//     return num1
// }
// console.log(calculatecartprice(200,400,500)) //agar hum aise arguments pass krre toh isse kya hoga 200 toh run hojaaega lekin 400 aur 500 pass ni hopaayega

//uske liye hum use krskte hai rest operator(...variablename)


function calculatecartprice(...num1){ //rest operator will cause all remaining (user supplied) parameters to be placed within an Array object.
    return num1
}
console.log(calculatecartprice(200,400,500))

function calculate(val1,val2,...num2){
    return num2
}
console.log(calculate(200,400,500,2000))
// isse kya hoga kee jo 200 hai woh store hoga val1 mein jo 400 hoga woh store hoga val2 mein aur jo 500 aur 2000 hoga woh tumhara array banke store hojaaega num2 meein

const user = {
    username : "shivam",
    age: 18
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}
handleobject(user)

//we can also pass object directly no need to define the object before only

handleobject({
    username: "shaktiman",
    age: 99
})

const mynewarray = [200,400,100,600]

function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([220,4500,440,4403]))