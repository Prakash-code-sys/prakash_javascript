function largestNum(arr){
    let largest = arr[0];
    for (i =1;i < arr.length;i++){
        if (arr[i] > largest) {
            largest = arr[i]
        }
        
    }
    return largest

}

console.log(largestNum([99,3,55,100]))