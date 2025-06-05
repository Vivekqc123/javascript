const score = 400

const balance = new Number(100) //new keyword ke help se string number ko as as object explicitly define kr skte

console.log(balance);
console.log(score);

console.log(balance.toString().length); //conversion to string
console.log(balance.toFixed(2));   //2 point aage tak value dena ans = 100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // bascially round off milega 3 digits ka ans = 23.9
// if num= 123.8976 ans = 124

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN')); // ams= 10,00,000 comma lag jaayega

// ***************Maths**********//

console.log(Math); // Object [Math] {} jse string number object hai wse math object hai uski bahut saari functions aur properties
// h

console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.9)); //4
console.log(Math.sqrt(25));
console.log(Math.min(4,3,5,1,2));
// Most Important 
console.log(Math.random()); // generates random number between 0 to 1
console.log((Math.floor(Math.random()*10) +1)); //number btw 1 to 10

const min = 10;
const max= 20

console.log(Math.floor(Math.random()*(max-min+1))+ min);















