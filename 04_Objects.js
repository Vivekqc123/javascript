// singleton apne tarah ka ek object can be declared using constructor


// const tinderUser= {}; // no singleto

/* const tinderUser= new Object() // singleton obj 

tinderUser.id ="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedin= false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vivek",
            lastname: "gupta"
        }
    }

}  // object k andar object

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b" }
const obj2 = {3:"a", 4:"b"}


const obj3 = Object.assign({},obj1,obj2) // to join two objects

//another method 

const obj4 = { ...obj1,...obj2} // spread operator
console.log(obj4);


const users = [
    {
        id:1,
        email:"h@gmai.com"

    },
    {

    },{

    }

]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // saari keys mil jaayegi in a array
console.log(Object.values(tinderUser);
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); */


const course = {
    coursename: "js in hindi",
    price: "999",
    Instructor: "vivek"


}  

const {Instructor}= course // converting key of course object into a seoarate variable destucturing ho rhi
console.log(Instructor);  

// const navbar = (props.company) => {

//}

//navbar(company = "vivek")

// jab apna kaam kisi aur k sir daal dete hai use API bolte hn

// restuarant wala example
// JSON below

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

// kayi baar API array ke format m milegi

[
    {},
    {},
    {}

]

//random userme API










