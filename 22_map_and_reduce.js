//map

//map kaa kaam : Har element ko lekar uska new version banata hai aur new array return karta hai.

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mynum = mynumbers.map((num) => num + 10)
console.log(mynum)

//const newnums = mynumbers.map().map()  isse kehte hai chaining hum iske baad filter bhi use krskte hai

const newnum = mynumbers
                .map((num) => num*10)
                .map((num) => num + 10)

//isme jo first num ko jo value mili usme gayi tumhari 1 2 3 4 etc par jo dusra map hai usme 1 2 3 4 etc nhi jaayegi kyuki upar waale map kee wajah se function change hochuka hai

//REDUCE

const numbers = [1,2,3,4]
//reduce mein hum 2 values dete hai accumulator aur current value , jo accumulator hota hai woh initialy jo iniital value hai usko leta hai aur uske baad baaki kee function ko in this case acc + curr value leta hai initial value ke baad
// const mytotal = numbers.reduce(function (accumulator,currentvalue)
// {
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`)
//     return accumulator + currentvalue
// },0)

// console.log(mytotal)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);