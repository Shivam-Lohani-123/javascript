// FOR loops

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } // syntax of for loops

for ( let i = 0 ; i<10 ; i++){
    const element = i+1;
    console.log(element);
} //numbers from 1 to 10

for (let i = 0;i<=10;i++){
    console.log(`outer loop value : ${i} `);
    for (let j =0;j<=10 ;j++){
        // console.log(`inner loop : ${j}`)
        console.log(`${i}*${j}=${i*j}`)
    }
}

let myarray = ["flash" , "batman","superman"]
console.log(myarray.length)
for (let i = 0 ; i < myarray.length ; i++){
    const element = myarray[i];
    console.log(element)
}

//break and continue

for (let i = 1 ; i<=20 ; i++){
    if (i==2){
        console.log("2 skipped")
        continue
    }
    if (i==4){
        console.log("4 detected")
        break;
    }
    console.log(`value of i is ${i}`)
}

// while and do while

// while (condition) {
     //isme increement yaa decrement yaaa kuch bhi tum body kee andar likhte ho
// }
index  = 0

while (index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2
}

let hero = [ "flash" , "batman" , "charizard"]
let i = 0 
while(i<hero.length){
    console.log(`${hero[i]}`)
    i++
}

//ab do while mein kya hota hai ek baar code run hota hai chaahe condition kuch bhi kyu naa ho aur uske baad tumhara condition check hoti hai

// do {
    
// } while (condition);  //yeh hai tumhara while kaa syntax

let score = 11

do { 
    console.log(`score is ${score}`)
    score++
}while(score <=10)