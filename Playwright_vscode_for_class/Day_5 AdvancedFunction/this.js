function print() {
    console.log(this.userName) //
}

let altPrint = () => {
    console.log(this.userName) //Global scope
}


let person = {
    userName : "Prakash",
    print : altPrint //function 
}
person.print()