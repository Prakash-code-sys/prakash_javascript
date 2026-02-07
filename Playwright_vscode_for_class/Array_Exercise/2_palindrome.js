function palindrome(str){
    const reversed = str.split("").reverse().join("");
    if (str === reversed){
        return true
    }
    
}

console.log(palindrome("madam"))