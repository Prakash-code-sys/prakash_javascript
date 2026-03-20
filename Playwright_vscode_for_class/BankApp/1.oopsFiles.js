import promptSync from 'prompt-sync';
const prompt = promptSync();

export class Bank{
    userDataBase ={
        689 : {
            accName : "Prakash",
            accNum : 3849545099,
            accPin : 1675,
            accBalance : 50000,
        },
        567 : {
            accName : "Raj",
            accNum : 123545,
            accPin : 1612,
            accBalance : 10000,
        },

    }
    
    
    atmAvaialbility(atmBalan){
        if(atmBalan>9999){
            return true
        }else {
            return false
        }
    }
    cardVerifyer(choice){
        let atmCard = this.userDataBase[choice]
        try{
            return atmCard
        }catch(error){
            return false

        }
        
        
        

        

    }
    userDashboard(){
        console.clear()
        console.log(`Welcome to the Indian Bank
             1.Statement   2.Withdrawal`)
    }
    pinVerifyer(choice,pin){
        let accpin = this.userDataBase[choice]["accPin"]
        if (pin === accpin){
            return true
        }else{
            return false
            
        }
    }
    userService(choice,option,atmBalance){
            let userAcc = this.userDataBase[choice]["accName"]
            let userBal = this.userDataBase[choice]["accBalance"] 
        if (option === 1){
            

            console.log(`Hi ${userAcc}, your balance is ${userBal}`)
        }else if(option ===2){
            let withdraw = parseInt(prompt("Enter the withdrwal amount :"))
            if (withdraw >userBal ){
                 console.log("Insufficient Balance")
            }else if(withdraw > 10000){
                console.log("Only 10k allowed per transaction")
            }else {
                let balance = userBal - withdraw
                console.clear()
                console.log("Processing....")
                setTimeout(()={
                    console.log(`The current Balance is ${balance}`)
                },2000)
                
            }
        }


    
    }
    
}