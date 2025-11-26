"use strict"; //treat all js code as newer version. It helps you to wirte a stricter set of rules that helps you write safer , cleaner code and avoid common bugs.

//alert(3+3) this syntax will work in browser and we are using nodejs

//some of the datatypes are 
//  number =
//  string = ""
//  boolean = true/false
//  null = standalone value
//  undefined = 
//  symbol = unique


//  object
let age = "heehehhe" 
console.log(typeof age) //typeof ek aisa element jo kisi bhi data type ko btata hai kee woh kya karskte hai...jaise string wagera number
//par jab tum typeof null hai tab answer tumhara object aata hai..
console.log(typeof(age)) // yeh ek aur way hai yeh typeof use krme kaa
console.log(typeof null)

console.log(typeof undefined)
let numage = Number(age) // yeh datatype convert krta hai
console.log(numage)
let charizard = "56"
console.log(charizard)
let pok = Number(charizard)
console.log(pok)
//NaN kaa matlab not a number. matlab You get NaN when a value can’t be converted into a valid number during a mathematical operation or type conversion
// true ke liye 1 aur false ke liye 0

let islogin = 1
console.log(typeof islogin)
let booleanislogin = Boolean(islogin)
console.log(typeof(booleanislogin))
console.table([booleanislogin,islogin])