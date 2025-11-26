//let,const and var ki kahani
// to declare a constant in javascript you can write it like const variablename = falanadhimkana no need of semicolon at the end
// to declare a variable use var
const accountId = 1234
let accountEmail = "shivamlohani235@gmail.com"
var accoutnpassword = "123456"
accountcity = "nanital"
let admin
console.table([accountId , accountEmail,accoutnpassword,accountcity])
console.log(admin)
//const kaa matlab hai kee woh element change nhi hona chahiye
//initial days mein javascript scope mein kaam ni krti thi
//prefer not to use var ..... because of issue with block scope and dunctional scope...
//var is globally scoped . let is blocked scoped. var can be declared globallly and accesed globally . but let can be declared globally but access is limited
//agar hum variable ko value assign nhi krte toh woh undefined value show kregi
//javascript mein semicolon use karo nhi karo koi farak ni padta