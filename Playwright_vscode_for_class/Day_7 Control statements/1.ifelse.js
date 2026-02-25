console.clear()
console.log("------Switch-------------------------")
let day =1
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("invalid")
        break;
}
console.log("-------inc for loop------------------------")
for (k=1;k<11;k++){
    console.log(k,"*","2",":",k*2)
}
console.log("--------dec for loop-----------------------")
for (p=10;p>0;p--){
    console.log(p)
}
console.log("-------looping array------------------------")
let array = [1,2,3,4,5,6]
for (l =0;l<array.length;l++){
    console.log("arr[",l,"]","=",array[l])
}
console.log("-------------------------------")
let testCases =["SignIn","SignUp","LogOut"];

for (let test of testCases){
    console.log(test)
}
console.log("--------looping string-----------------------")
let message = "Test";
for (let spell of message){
    console.log(spell)
}
console.log("-------looping objects------------------------")
let details={"Name":"Karthik","Age":25,"City":"Chennai"};

for (let data in details){
    console.log(data,"\n",details[data])
}
console.log("-------while loop------------------------")

a= 5;

while (a<10){
    a++
    console.log("Hi")
}

console.log("------do while-------------------------")
let i =0;
do {
    console.log(i)
    i++
}while(i<=5)x

let z = 10;
do {
    console.log("Helo")
} while(z>11)