/*****************STACK AND HEAP ********************/

//there are two types of memory in javascript
// Stack and Heap
// All the primitive datatype are stored in stack memory
// non primitive data type are stored in heap memory

let name = "shivam"

let anothername = name
anothername = "chai"    
console.log(anothername)

let user = {
    email : "shivamlohani@gmail.com",
    upi : "sbi.com" 
}
let userone = user

/*
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original */