console.log("-----------------------------------------------------------------")
console.log("5.IIFE");

(function(){
    console.log("IIFE Function")
})();

console.log("-----------------------------------------------------------------")

console.log("6.Function currying")

function num(n){
    return function mul(a){
        return n * a
    }
}
const result = num(5)
console.log(result(2))
console.log("-----------------------------------------------------------------")

console.log("7.Function composition")

const add = (x) => x+2
console.log(add(2))
const mul = (x) => x*3
console.log(mul(2))
const composed = x => mul(add(x))
console.log("combining 2functions to create new fn",composed(2))
console.log("-----------------------------------------------------------------")
console.log("8.Closure")

function outerfunc(){
    let count = 0;
    return function innerFunc(){
        count++;
        console.log(count)
    }
}
counter = outerfunc()
counter()
counter()
counter()
console.log("-----------------------------------------------------------------")

