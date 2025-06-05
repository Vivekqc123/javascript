const marvel_heroes =["thor", "Ironman", "spiderman"]
const dc_heroes= ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes) // changes in existing array
//console.log(marvel_heroes);  // array ke andar dc_heroes array aa jaayega as a element
// console.log(marvel_heroes[3][1]);

//concat to merge two arrays

const allHeroes= marvel_heroes.concat(dc_heroes) // returns a new array with two merged array console.log(allHeroes);

//const all_new_heroes = [...marvel_heroes,...dc_heroes]  // spread uses to join two arrays

// console.log(all_new_heroes);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

let real_another_array= another_array.flat(In) // sabko ek array me de dega 
console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh")); //converts to array
console.log(Array.from{name: "hitesh"})) // interesting case smjh nahi paayega key ka array banayega ya value ka toh empty array dega

let score1 =100
let score2= 200
let score3= 300

console.log(Array.o(score1,score2,score3);


