//Arrow function
//Ex1
let welcomeMsg = () => "Welcome";

console.log(welcomeMsg());


//Ex 2
let user = (name) =>{
    //fullName="Hello "+name;
    //return fullName;
    return "Hello " +name;
}
console.log("user : "+user("Athvik"));


//Ex3
let user2= (name) => "Hello "+ name ;
console.log("USer2 : "+user2("Arjun"));


let greet = () =>"Welcome"
console.log(greet())

let add = (a,b) =>a+b
console.log(add(5,5))

let num = n => n*n //for 1 parameter () not required
console.log(num(5))
