
console.log("-------break-------------------------")
for(i=0;i<11;i++){
    if(i===5){
        break;
    }
    console.log(i)
}
console.log("-------continue-------------------------")
for(i=0;i<11;i++){
    if(i===5){
        continue;
    }
    console.log(i)
}

console.log("-------Nested for loop-------------------------")

for(let k=1;k<4;k++){
    console.log(k);
    for(let i=1;i<4;i++){
        console.log("Hello")
    }
}