function red(callback) {
    console.log("Welcome")
    setTimeout(function (){
        callback(green)
    },2000)
}

function blue(callback){
    console.log("HI")
    callback()
}

function green() {
    console.log("Bye")
}


red(blue)