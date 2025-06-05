//array- collection of multiple items under single variable
// array of js can be of mixed size
// elements can be accessed bi index
// array in JS creates shallow copies - call by reference(changes in original array)

const myArr= [0,1,2,3,4,5]
const myHeroes = ["shakti","naagraj"]
//intializing array object using new keyword
const myArr2 = new Array(1,2,3,3,4)
console.log(myArr[0]);

//array methods

myArr.push(6)  // add 6 in array
myArr.push(7)
myArr.pop() //delete last value

myArr.unshift(9)  // inserts elements at start and shift all values
myArr.shift()   // removes starting element

console.log(myArr.includes(9));  //9  present or not (true or false ans/)
console.log(myArr.indexOf(3));

const newArr = myArr.join() // converts array to string


console.log(myArr);
console.log(newArr);

console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) // returns a section of array last index not icluded

console.log(myn1);
console.log("B ", myArr); // after slice operation original array does not changes 

const myn2 = myArr.splice(1,3) 
console.log(myn2);

console.log("c ", myArr); 






