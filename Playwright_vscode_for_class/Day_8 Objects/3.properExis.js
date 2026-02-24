
console.log("property existence")
let car = {brand : "BMW",}
console.log("brand" in car)
console.log(car.hasOwnProperty("brand"))

let another_car = Object.create(car)
console.log(another_car)
another_car.model = "x5"

console.log(another_car)
console.log("brand" in another_car)
console.log(another_car.hasOwnProperty("brand"))
console.log(another_car.brand)

console.log("comparing objects")
let a = {x:10}
let b = {x:10}
console.log(a===b)

let x = {x:10}
let y = x
console.log(x===y)

console.log(JSON.stringify(a)===JSON.stringify(b))

console.log("Manual comparison")

function isEqual(obj1,obj2){
    let key1 = Object.keys(obj1)
    let key2 = Object.keys(obj2)
    if(key1.length !== key2.length) return false

    for (let keys in key1){
        if (obj1[keys] !== obj2[keys]) return false
        
    }
    return true
}

console.log(isEqual({x:10},{x:10}))