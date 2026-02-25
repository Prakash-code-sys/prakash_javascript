// 1. JavaScript Array length 
console.log("1. JavaScript Array length ")
let a = ["HTML", "CSS", "JS", "React"]; //4
console.log(a.length)
console.log("-----------------------------------")
//2. JavaScript Array toString() Method
let b  = ["HTML", "CSS", "JS", "React"];
let toString = b.toString()
console.log(toString)
console.log("-----------------------------------")
//3. JavaScript Array join() Method
let c = ["HTML", "CSS", "JS", "React"];
let t = c.join('|')
console.log(t)
console.log("-----------------------------------")
//4. JavaScript Array delete Operator

let person = {
    name : "Prakash",
    dob : "08-05-1998",
    salary :"10000"
}

console.log(delete person.salary)
console.log(person)
console.log("-----------------------------------")
//5. JavaScript Array concat() Method
let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];
let concate = a1.concat(a2,a3)
console.log(concate)
console.log("-----------------------------------")
//6. JavaScript Array flat() Method
const f = [['1', '2'], ['3', '4', '5',['6'], '7']];
let flat =f.flat(Infinity)
console.log(flat)
console.log("-----------------------------------")
//7. JavaScript Array.push() Method
let p = [10, 20, 30, 40, 50];
p.push(60)
p.push(70,80,90)
console.log(p)
console.log("-----------------------------------")
// 8. JavaScript Array.unshift() Method
let an = [20, 30, 40];
an.unshift(10, 20);
console.log(an);
console.log("-----------------------------------")
// 9. JavaScript Array.pop() Method
let ant = [20, 30, 40];
ant.pop();
console.log(ant);
console.log("-----------------------------------")
// 10. JavaScript Array.shift() Method
let bn = [20, 30, 40, 50];
bn.shift();
console.log(bn);
console.log("-----------------------------------")
// 11. JavaScript Array.splice() Method
let ac = [20, 30, 40, 50];
ac.splice(1, 3); //starting index , ending index
ac.splice(1, 0, 3, 4, 5);
console.log(ac);
console.log("-----------------------------------")
// 12. JavaScript Array.slice() Method

const ax = [1, 2, 3, 4, 5];
const res = ax.slice(1,4)
console.log(res)
console.log(ax)
console.log("-----------------------------------")


// 13. JavaScript Array some() Method
let bc = [20,30,40,50]
let resi =bc.some((num) => num >35)
console.log(resi)
console.log("-----------------------------------")
// 18. JavaScript Array values() method

const fruits = ["apple","Orange","banana"]
const list = fruits.values()

for(const values of list){
    console.log(values)
}
console.log("-----------------------------------")
// 17. JavaScript Array reverse() method
const fruity = ["apple","Orange","banana"]
console.log(fruity.reverse())
console.log("-----------------------------------")

// 16. JavaScript Array reduce() Method
let fourthArray = [10,20,30,40]
console.log("4.Reduce array to single value by reduce method",fourthArray)

let newBorn = fourthArray.reduce((acc,cur) => acc+cur )
console.log("Array reduced to single value",newBorn)
console.log("-----------------------------------")
// 15. JavaScript Array filter() method
let al = [1, 2, 3, 4, 5]
let am = al.filter((num) => num > 1)
console.log(am)
console.log("-----------------------------------")

//14. JavaScript Array map() Method
let secondArray = [5,6,7,8]
console.log("2.MAP method for new array",secondArray)

let newChild = secondArray.map(num => num*3);
console.log("created new array using map and mul by 3",newChild)
