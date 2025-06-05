//singleton - ye apne tarah ka ek hi object hai ; constructor se singleton bnega

//object literals

Object.create  // constructor method

//object literals

const mySym = Symbol("key1")


const JUser = {
    name: "vivek",
    "full name": "vivek Gupta",// it can not be accessed by dot
    [mySym]: "mykey1", // imp for symbol symbol ko as a key aise define kreinge
    location: "rath",
    email: "vivek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["mon","sat"]
}  //  ban gya object key value pair

console.log(JUser.name);
console.log(JUser["name"]);
console.log(JUser["full name"]);
console.log(JUser[mySym]); // console mein aise jaayega imp

JUser.email ="vivekchat.com"
// Object.freeze(JUser) // freezes object ab object mein koooooi change nhi hoga

JUser.email = "vivek@micrososdst.com"  // this change doesnot reflect
console.log(JUser);

JUser.greeting = function(){
    console.log("Hello JS user");
    
} // juser obect mein ek function add karna jiska name hai greeting

JUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JUser.greeting());
console.log(JUser.greetingtwo());







