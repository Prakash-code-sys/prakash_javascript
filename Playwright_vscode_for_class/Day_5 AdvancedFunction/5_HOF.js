//Higher order function
function user(name,callback){
    return callback(name)
}

function greet(name){
    console.log("Hi",name)
}
user("prakash",greet)

//
function OuterFunc(){
    return function innerFunc(){
         return "Im inner func"
    }
}

let result = OuterFunc()
console.log(result())