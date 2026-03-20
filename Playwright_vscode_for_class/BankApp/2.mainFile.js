
import promptSync from 'prompt-sync';
const prompt = promptSync();
import {Bank} from "./1.oopsFiles.js";

let atmBalance = 10000

let user = new Bank();


if(user.atmAvaialbility(atmBalance)){
    let choice = parseInt(prompt("Please insert the card :"))
    if(user.cardVerifyer(choice)){
    
    
        let pin = parseInt(prompt("Enter the Pin:"))
        if (user.pinVerifyer(choice,pin)) {
            user.userDashboard()
            let option = parseInt(prompt("Enter the choice :"))
            
            user.userService(choice,option,atmBalance)
            
        }else{
            console.log("Invalid PIN")
        }
    }else{
        console.log('Please insert the card properly')
    }
    
}else{
    console.log("Sorry, unable to dispense the cash")
}

