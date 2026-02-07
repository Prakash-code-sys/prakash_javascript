function add(a=null,b=null,c=null){
    if(a!=null && b!=null && c!= null){
        let d = a +b+c
        return d
    }else if (a!=null && b!=null){
        let c = a+b
        return c
    }else if(a!=null){
        return a
    }

}

console.log(add(5))
console.log(add(5,5))
console.log(add(5,5,5))




function showDetails(name,age){
    if(arguments.length===1){
        console.log("Name :",name)
    }else if(arguments.length===2){
        console.log("Name :",name,"|Age :",age)
    }
}

showDetails("Karthik");
showDetails("Vijay",25);