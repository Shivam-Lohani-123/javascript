/***** SCOPES *****/

var c = 300

let a = 500
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(a)
//console.log(b) //here this will give an error because b is not defined in the global scope

console.log(c)

function one(){
    const username = "shivam"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}
one() 

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //yaha error kyuki website alag scope pe hai
}



// ++++++++++++++++++ interesting ++++++++++++++++++

function addone(num){
    return num + 1
}

console.log(addone(5))

//addtwo(5) function ko declare krne se pehle usko run krne ke wajah se error aata hai

const addtwo = function(num){
    return num+2
}
console.log(addtwo(5))