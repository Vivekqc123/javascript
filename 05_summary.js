// primitive

// 7 types : string , Number, Boolean , null, undefined, Symbol, BigInt


// Reference (Non Primitive)

// Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')

// symbol for uniqueness

console.log(id == anotherId);

const heroes = ["avcbc", "hsjak"]

let myObj= {
    name: "vicek",
    age: 22,

} // object

const myFunc = function(){
    console.log("hekllo world");
    }

    // to find datatype of anyvaroable

    console.log(typeof myFunc);




    //// +++++++++++++++++++++++++++++++++++

    // stack(primitive)- call by value, Heap(Non-Primitive)- call by refernece

    let myYoutube = "hiteshchoudhrydotcom"

    let anothername = myYoutube
    anothername ="chaiaurcode"

    console.log(myYoutube);
    console.log(anothername);

    let userOne = {
        email:"user@google.com",
        upi: "123@ybl"
    } // object

    let userTwo =userOne  // call by reference of userOne 

    userTwo.email = "vivek@google.com" // usertwo m change kiya user 1 m bhi ho jaayega 

    console.log(userOne.email);
    console.log(userTwo.email); // same result milega dono m
    
    
    
    
    

