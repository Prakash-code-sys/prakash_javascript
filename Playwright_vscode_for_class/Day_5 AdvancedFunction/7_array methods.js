// 1. JavaScript Array length 

let a = ["HTML", "CSS", "JS", "React"]; //4
console.log(a.length)

//2. JavaScript Array toString() Method
let b  = ["HTML", "CSS", "JS", "React"];
let toString = b.toString()
console.log(toString)

//3. JavaScript Array join() Method
let c = ["HTML", "CSS", "JS", "React"];
let t = c.join('|')
console.log(t)

//4. JavaScript Array delete Operator

let person = {
    name : "Prakash",
    dob : "08-05-1998",
    salary :"10000"
}

console.log(delete person.salary)
console.log(person)

//5. JavaScript Array concat() Method
let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];
let concate = a1.concat(a2,a3)
console.log(concate)

//6. JavaScript Array flat() Method
const f = [['1', '2'], ['3', '4', '5',['6'], '7']];
let flat =f.flat(Infinity)
console.log(flat)

//7. JavaScript Array.push() Method
let p = [10, 20, 30, 40, 50];
p.push(60)
p.push(70,80,90)
console.log(p)

// 8. JavaScript Array.unshift() Method
let an = [20, 30, 40];
an.unshift(10, 20);
console.log(an);

// 9. JavaScript Array.pop() Method
let ant = [20, 30, 40];
ant.pop();
console.log(ant);

// 10. JavaScript Array.shift() Method
let bn = [20, 30, 40, 50];
bn.shift();
console.log(bn);

// 11. JavaScript Array.splice() Method
let ac = [20, 30, 40, 50];
ac.splice(1, 3);
ac.splice(1, 0, 3, 4, 5);
console.log(ac);