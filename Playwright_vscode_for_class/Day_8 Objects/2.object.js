
console.clear()
console.log("---------------------------------------")
console.log("1.Nested objects")
let data = {
    name : 'Raj',
    age : 28,
    Address : {
        city : "Dindigul",
        pincode : "624009",
    }
}
console.log(data.name,data.age,data.Address,data.Address?.city,data.Address.pincode)
console.log("---------------------------------------")
console.log("2.Nested object with properties")
let student = {
  name: "Aarav",
  address: {
    city: "Chennai",
    getCity() {
      return this.city;
    }
  }
};
console.log(student.address.getCity())
console.log("---------------------------------------")
console.log("3.Object with methods")
let employee ={
    name : "Ram",
    age : 25,
    salary : 50000,
    getBonus(){
        return this.salary * 0.1
    }
}
console.log(employee.getBonus())
console.log("---------------------------------------")
console.log("4.This keyword")
function greet(){
    console.log("Welcome",this.name)
}

let data1 = {
    name : "Prak",
}
data1.greet = greet;
data1.greet()
console.log("---------------------------------------")
console.log("5.Looping concepts")
let user = { id: 1, name: "Alex", age: 30 };
for (let key in user){
    console.log(key,user[key])
}

for (let [key,value] of Object.entries(user)){
    console.log(key,value)
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log("---------------------------------------")
console.log("6.Object Assign()")
let a = {x:10,}
let b = {y:20,}
console.log(a,b)
Object.assign(a,b)
console.log(a,b)
console.log("---------------------------------------")
console.log("7.Object.freeze()")
let m = {x:10}
Object.freeze(m)
m.y = 20
m.x=15
delete m.x
console.log(m,m.x)
console.log("---------------------------------------")
console.log("8.Object.seal()")
let z= {a:10}
Object.seal(z)
z.a = 20;
z.b = 20;
delete z.a
console.log(z,z.a)
console.log("---------------------------------------")