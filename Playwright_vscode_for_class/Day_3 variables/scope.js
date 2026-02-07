//var function scope

function varTest() {
    var x = 1;
    if(true){
        var x=2;
        console.log("x : ",x); // Output: 2
    }
    console.log("x : ",x); // Output: 2
}

varTest();

// Block Scope (let / const):
//let function scope

function letTest() {
    let x = 1;
    if(true){
        let x=2;
        console.log("x : ",x); // Output: 2
    }
    console.log("x : ",x); // Output: 1
}

letTest();

function constTest() {
    const x = 1;
    if(true){
        const x=2;
        console.log("x :",x)
    }
    console.log("x :",x); // Output: 1
}

constTest();
