// Dates

//date is type of object which can be initialized using new keyword

let myDate = new  Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date(2023,0,23,5,3)
//let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()); 

// timestamp Date.now()

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // convert in seconds from milisecondsate

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

// `${newDate.getDay()} and the time is`

//imp

newDate.toLocaleString('default',{
    weekday: "long",
    
}) //locale string lo aur customize karu









