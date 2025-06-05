console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");

function sayMyName(){
console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
}

// sayMyName() -- function exution

/*function addTwoNumbers(number1,number2){
    console.log(number1 + number2)
}  //here num1,num2 parameter jab function ko define krte hn

const result = addTwoNumbers(5,6) // 5,6 arguments jab function ko call krte hn

console.log("Result: ",result); */

function addTwoNumbers(number1,number2){
    let result= number1+number2
    return result
} 
const result = addTwoNumbers(5,6)
// console.log("Result: ",result);

function loginUserMessage(username="sam "){
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(lohinUserMessage("vivek_100") );
console.log(loginUserMessage());





