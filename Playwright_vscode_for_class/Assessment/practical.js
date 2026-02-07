/* Datatypes and typeof keyword to print the type of date */
let person = "Raj";
console.log("1.Person name is :",person,"and variable type is ",typeof person)

let n1= 10;
console.log("2.n1 is :",n1,"and variable type is",typeof n1)
let n2 = 5.5;
console.log("3.n2 is :",n2,"and variable type is",typeof n2)
let history;
console.log("4.history is :",history,"and variable type is",typeof history)

let answer_sheet = null;
console.log("5.Answer_sheet",answer_sheet,"and variable type is",typeof answer_sheet)

let isLoggedIn = true
console.log("6.isLoggedIn? :",isLoggedIn,"and variable type is",typeof isLoggedIn)

let sym1 = Symbol("id")
let sym2 = Symbol("id")
console.log("7.sym1 & sym2 is same? ",sym1===sym2,"variable type is",typeof sym1)

let mobNum = 89934893894854845545n
console.log("8.Is this bigInt:",mobNum,"and variable type is",typeof mobNum)

let formula = "abc"/2
console.log("9.formula is :",formula,"and variable type is",typeof formula)

let posInf = 10/0
console.log("10.Posinf :",posInf,"and variable type is",typeof posInf)


console.log("________Non-primitive datatypes________")

let people = {
    given_name : "Prakash",
    age :12
}
console.log("11.People details are",people,"and variable type is",typeof people)


let fruits = ["Apple","Orange","Banana"]
console.log("12.FruitsLists :",fruits,"and variable type is",typeof fruits)


