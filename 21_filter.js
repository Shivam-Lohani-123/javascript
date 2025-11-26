const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach ( (item) => {
    console.log(item);
    return item
})
//iss case mein values jo return hoti hai woh undefined hoti hai 
/*forEach() ka kaam sirf loop chalana hai.
Woh value collect nahi karta, array return nahi karta, kuch bhi buildup nahi karta.
Bas har element ke liye callback chalata hai, aur pura forEach khud undefined return karta hai.*/ 
console.log(values)

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//filter bhi apne andar callback function hee leta hai
const newnum = mynum.filter((num) => num > 5 )
console.log(newnum)

// filter work : Array ke andar jo elements condition pass karte hain, sirf unko naye array mein daal kar return karta hai

//array.filter((element) => condition);   filter kaa syntax yeh hota hai element woh hai jisme kaam krna hota hai aur woh condition fulfil hota hai yaa nhi


//agar forEach use krna hota toh kya karte

const new5 = []
mynum.forEach ( (num) => {
    if (num > 4){
        new5.push(num)
    }
})

console.log(new5)

//filter kaa kaam bass itna nhi hai filter aur bhi kuch kar skta hai

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks = books.filter ( (bk) => bk.genre === 'History')

console.log(userbooks)

// const bok = books.filter ( (bk) => {bk.publish >= 2000})
// console.log(bok)  ab isme jo values return hui hai woh hui hai tumhari empty array kyuki yaha par humne ek scope open krliya hai curly braces se yaa toh scope hatao yaa phir return use karo

let bok = books.filter ( (bk) => {return bk.publish >= 2000})
console.log(bok)

//agar more than one condtition check krni hai toh hume pata hee hai kee hum use krskte hai tumhara && operator

let buk = books.filter ( (bk) => bk.publish>=1990 && bk.genre === 'Science')
console.log(buk)

