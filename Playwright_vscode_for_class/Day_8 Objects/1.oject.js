console.clear()
console.log("--------------------------------------")
console.log("1.Object literal")
let person = {
    "name" : "Prakash",
    "age" : 28,
    "city" : "Dindigul"
}
console.log(person)
console.log("---------------------------------------")

console.log("2.Constructor")
class Car{
    constructor(brand,model){
        this.brand = brand;
        this.model = model
    }
}
let obj1 = new Car("Suzuki","Swift")
let obj2 = new Car("Hyndai","Elite")
console.log(obj1,"\n",obj2)
console.log(obj1.brand,"\n",obj2.brand)
console.log("---------------------------------------")

console.log("3.Object.create()")
let user = {
    greet(){
        console.log("Hello",this.name)
    }
}
let newObj = Object.create(user)
newObj.name = "Prakash"
console.log(newObj)
newObj.greet()
console.log("---------------------------------------")
console.log("4.Accessing Objects by Dot and Bracket notation")

let student = {
    name : "Raj",
    class : 10,
    greets(){
        return this.name
    }

}
console.log("by Dot notation")
console.log(student.name)
console.log(student.class)
console.log(student.greets)
console.log("by bracket notation")
console.log(student["name"])
console.log(student["class"],student.greets())
student.greets()
console.log("---------------------------------------")
console.log("5.Adding or Modifying properties")
let cars = {
    brand : "BMW",
    model : "X5",
}
cars.year = 2025; //Add
cars.brand = "audi"; //Modify
delete cars.model; //Delete
console.log(cars.year,"\n",cars.brand,"\n",cars.model)
console.log("---------------------------------------")
console.log("6.Deleting Properties")
let fruits = {
    tray1 : "Mango",
}
let newFruits = Object.create(fruits)
delete newFruits.tray1
console.log(newFruits.tray1,fruits)