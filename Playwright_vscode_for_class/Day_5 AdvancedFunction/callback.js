function red(callback){
    console.log("🔴 --> Stop here")
    setTimeout(() =>{
      callback(green)  
    },2000)
    

}

function yellow(callback){
    console.log("🟡 --> keep ready to go / slow")
    setTimeout(() =>{
      callback()
    },2000)
    

}
function green(){
    console.log("🟢 --> Go for it!!")
}
console.log("**TRAFFIC SIGNAL**")
red(yellow)