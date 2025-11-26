/***** OBJECTS *****/

//to declare an object we have two ways : one is like a literal and the other one is like a constructor

//objects literals

const mysym = Symbol("key1")  //Is line se ek unique value ban rahi hai jisko Symbol bolte hain.

const jsuser = {
    name: "shivam",
    //mysym: "mykey1", //agar tum iss tarah se access karoge toh woh as a string store hoga js mein par hme toh symbol chhaiye toh usek liye
    [mysym] : "mykey1",
    email: "shivamlohani124@gmail.com",
    logggedin : false,
    "full name" : "charizard", //ab iss value ko dot se access lrme laa koi chance hee ni hai tum kitna bhi try krlo
    age:18,
}

console.log(`hello my name is ${jsuser.name}`)

//isme objects mein jo yeh name, email , age derhe hai toh java script isko as a string kee tarah store krta hai

//second way of accessing th elements is like 

console.log(jsuser["email"]) //full name jaise value ko access knre ke liye yeh value bnayi gyi hai

console.log(jsuser["full name"])
console.log(jsuser[mysym]) //symbol access krne ke liye

jsuser.email = "shivam.com" //isse hum values ko overwrite kar skte hai
console.log(jsuser.email)

//agar tumhe oject kee value ko lock krna hai matlab tum change nhi kr skte uss value ko toh uske liye
//Object.freeze(jsuser)
jsuser.name= "sahiba"
console.log(jsuser.name) 
jsuser.email = "shivam.12com"
console.log(jsuser.email)

console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello JS user");
}
//is line ka matlab: Tum object ke andar baad mein ek function add kar rahe ho Ye function object ka method ban jaayega Jab tum JsUser.greeting() call karoge tab output aayega:

console.log(jsuser.greeting()) //Har function ka ek return value hota hai. Agar tu explicitly return nahi karega, JS implicitly undefined return karega.
console.log(jsuser.greeting) //JsUser.greeting simply function ka reference print karta hai, isliye console [Function] dikhata hai, aur JsUser.greeting() brackets ke saath function ko execute karta hai, isliye andar ka code run hota hai.