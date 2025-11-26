const marvel = ["thor" , "ironman" ," black widow"]
const dc = ["batman" , "superman" , "flash"]

//marvel.push(dc)
//console.log(marvel)

//we know array koi bhi element leleiti hai yaa phir store kar leti hai
// jab humne array dc ko push kiya arrya marvel ne toh array marvel ne array dc ko ek single element kee tarah store kiya
//toh jba tum console.log(marvel[3]) kroge toh pura array print hoga
console.log(marvel[3])

//dc ke element ko acces krne ke liye hum kar skte hai
//console.log(marvel[3][2])

const all = marvel.concat(dc) //concat dono array ko jodke ek naya array ke andar banake deta hai
console.log(all)

const all_new = [...marvel, ...dc] //yeh hai hamara spreadd operator yeh tumhare arrays kee saare elee=ments ko alag alag krdeta hai aur unko saath mien jod deta hai
// spread is a better way because in this we can add more than 2 arrays

console.log(all_new)

const another = [1,2,3,[4,5,6] , 7,[6,5,[4,5]]]

const real = another.flat(Infinity) //falt tumhare saare arrays ko flatten krdeta hai yaani sbko ek ke andar daadeta agar tum infinity use kroge 
//depth matlab kitne andar tak jaise tum dekh skte ho array mein [6,5,[4,5]] hai toh iski depth 2 hai agar tum flat depth = 1 doge toh khaali bahar waala hatega andar waala nhi hatega
const real2 = another.flat(1)
console.log(real)
console.log(real2)

console.log(Array.isArray("shivam")) //yeh check krega kee yeh given cheez array hai yaa nhi
console.log(Array.from("Shivam")) //yeh given cheez ko array mein convert krdega
console.log(Array.from({name: "shivam"})) //interesting
//Kyuki Array.from yeh dekhता hai: kya object ke paas length property hai? agar hai, toh us length ke hisaab se array banata hai agar nahi hai, toh length = 0 maan leta hai → aur array khali ban jata hai Tumhare object me length hi nahi hai → so result is [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3))

//Yeh jitne bhi values tum argument mein doge, un sab ko ek naya array bana kar return karta hai.