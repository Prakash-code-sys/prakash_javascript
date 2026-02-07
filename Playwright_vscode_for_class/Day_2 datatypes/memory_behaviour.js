// primitive data types(stored by value)
let a = 20;
let b = a
b = 30
console.log("a :",a) //output is 20

// non-primitive value (stored by reference)
let person = {
    name:"Prakash",
    age: 12
};
person2 = person;
person2.name = "Raj";
console.log("person",person)