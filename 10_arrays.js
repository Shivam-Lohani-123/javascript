/****** ARRAY ******/

const myarr = [0 , 1 , 2 , 3 , 4 , 5 ]
//1. Array is written in brackets [  ].
//2.Array data type is an object.
//3.Array can contain different data types . i.e string,number,boolean,array etc.
//4. Array is zero based indexing. It starts with zero.
//5. Once changed its original value will also change beacause it is non primitive (refrence) type.
 console.log(myarr[0])

 const heroes = ["shinchan" , "doraemon"]

 const arr = new Array(1,2,3,4)
 console.log(arr)
 console.log(heroes)

 // Array methods

 arr.push(6) //it adds the value 6 to the array
 arr.push(7)
 console.log(arr)
 arr.pop() //it removes the last element from the array
 console.log(arr)


 arr.unshift(9) //it adds an element in the front of the array
 console.log(arr)


 arr.shift() //it shift all elements to lower index. matlab pehla element hata dete hai 
 console.log(arr)


 console.log(arr.includes(4)) //4 array mein hai ya nhi yeh btaayega
 console.log(arr.indexOf(3)) //tells the index 
 
 // the join() method converts all elements of an array into a single string, returning a new string with the elements separated by a specified separator. If no separator is provided, a comma is used by default. The original array remains unchanged. 
 const newarr = myarr.join()
 const newarr5 = myarr.join('*')
 console.log(myarr)
 console.log(newarr)
 console.log(newarr5)
 console.log(typeof newarr)


 // slice , splice

 console.log("A" , myarr)
 const myn1 = myarr.slice(1,3)
 console.log(myn1)

 console.log("B" , myarr)
 const myn2 = myarr.splice(1,3)
 console.log("c",myarr)
 console.log(myn2)

 //normally jo slice aur splice ke beech mein difference hota hai usme log kehte hai kee ek mein last element include hua hai aur ek meine last element include nhi hua hai
 //lekin agar interview wagera mein yeh puche toh yeh galat hai


 //Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
 //Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
