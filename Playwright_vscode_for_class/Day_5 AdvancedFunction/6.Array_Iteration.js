console.log("----------------------------------------------------------------")

let array = [1, 2, 3, 4];
console.log("1.forEach method",array)

array.forEach(num =>{console.log("For loop and mul by 2",num * 2)});

console.log("----------------------------------------------------------------")
let secondArray = [5,6,7,8]
console.log("2.MAP method for new array",secondArray)

let newChild = secondArray.map(num => num*3);
console.log("created new array using map and mul by 3",newChild)

console.log("-----------------------------------------------------------------")
let thirdArray = [10,20,30,40]
console.log("3.Filter method for certain elements",thirdArray)

let filter = thirdArray.filter(num => num>=30)
console.log("filtering 30and above num",filter)

console.log("-----------------------------------------------------------------")
let fourthArray = [10,20,30,40]
console.log("4.Reduce array to single value by reduce method",fourthArray)

let newBorn = fourthArray.reduce((acc,cur) => acc+cur )
console.log("Array reduced to single value",newBorn)

console.log("-----------------------------------------------------------------")
let fifthArray = [10,20,30,40]
console.log("5.SOME method",fifthArray)

const hasPassed = fifthArray.some(num => num>=35)
console.log("some to find atleast one value satisfies a condition(n>=35)",hasPassed)

console.log("-------------------------------------------------------------------")
let sixthArray = [10,20,30,40]
console.log("6.check Every value satisfies conditon",sixthArray)
console.log("")
const hasTrue = sixthArray.every(num => num>=35)
console.log("Every to find all values satisfies a condition (n>=35)",hasTrue)

console.log("-------------------------------------------------------------------")

function sum(...num){
    console.log("7.Mapped to new array using rest parameter",num.map(num => num*2))
    return num.reduce((acc,cur)=> acc+cur)

}
console.log("Rest parameter",sum(1,2,3,4))

console.log("-------------------------------------------------------------------")