const name ="vivek" // string

const repoCount = 50 // number

console.log(name + repoCount + "value"); // here conversion of number to string automatically and concatenated

console.log(`hello my name is ${name} and my repo count is{repoCount}`);

const gameName = new String ('hitesh-hc-com') // new keyword ke help se explicitly string banai ab string hi rhegi hmesa ye

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0,4) //converts string to substring 
console.log(newString); // 4 nt includes ans - hite

const anotherString = gameName.slice(-8,4); // can also give negative values
console.log(anotherString);

const newStringOne = "      hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim()); // faltu whitespace trim ho jaayega aur line terminators bhi

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh')) //true

console.log(gameName.split('-')); // array ban jaayega separated by - elements [ hitesh, hc,com]














