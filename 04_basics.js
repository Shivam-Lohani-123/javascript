/* ********************comparasions of datatypes***************/
console.log(null > 0) // jab < , > yeh lagate hai toh null convert hojaata hai number mein
console.log(null == 0) // jab == lagate hai toh equality doesnot convert null to any number
console.log(null >= 0) // isme null phirse 0 ban jaata hai

// undefined toh NaN MEIN CONVERT HOTA HAI
console.log(undefined >= 0)
console.log(undefined >= 0)
console.log(undefined >= 0)

// === it is a strict check ... yeh sirf value check ni krta yeh data type bhi check krta hai 
// for example jab tum "2" == 2 karoge toh woh true dikhayega kyuki system string ko number mein badal dega 
//parantu === yeh conversion nhi hone dega

console.log(2 === "2")