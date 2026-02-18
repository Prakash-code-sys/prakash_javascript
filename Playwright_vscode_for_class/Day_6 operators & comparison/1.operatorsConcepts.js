prompt = require("prompt-sync")() 
//prompt sync used to get input from the terminal

function leap(){
    console.log("welcome to leap year finder")
    
    let year = parseInt(prompt("Enter the year :"))
    
    
    let result = (year%4==0)? "is Leap year" : "not a leap year"
    console.log(result)
}
function bmi(){
    let logo = ` 
                 ____  __  __ ___ 
                | __ )|  \/  |_ _|
                |  _ \| |\/| || | 
                | |_) | |  | || | 
                |____/|_|  |_|___|
                `
    console.log(logo)
    let should_calculate = true
    while(should_calculate){
        let weight = parseFloat(prompt("Enter the weight in kg :"))
        let height = parseFloat(prompt("Enter the height in meters :"))
        let bmi = weight / (height **2)
        if(bmi <= 18.5){
            console.log("You are under weight and BMI is",bmi)
        }else if(bmi <25){
            console.log("Healthy weight and BMI is",bmi)
        }else if(bmi >24 && bmi < 31){
            console.log("You are over wieght and BMI is",bmi)
        }else if(bmi> 30){
            console.log("You are obese and BMI is ",bmi)
        }else {
            console.log("Invalid input")
        }
        let calcAgain = prompt("Do you like calculate again (y/n)").toLowerCase()
        if(calcAgain==="y"){
            console.clear()
            console.log(logo)
            should_calculate = true
        }else{
            should_calculate = false
        }
    }
}

function ticketingSystem(){

    
    let ticket_again = true
    while (ticket_again){
    

        console.log("---Theme Park ticketing system---")
        fee = {
            1 : "For age less than 5 FREE Entry",
            2 : "For age between 5 to 11 cost $ 50",
            3 : "For age between 12 to 29 cost $ 100",
            4 : "For age 30 to 50 cost &75",
            5 : "For age 50 and above not allowed",
        }
    
        for (value in fee){
            console.log(fee[value])
        }
            
        let name = prompt('Enter your name :')
        let age = parseInt(prompt("Enter your age :"))
        
        cost = 0
        if(age<5){
            console.log("Hi Kid, There is no entry fee for you")
        }else if(age < 12){
            cost+= 50
            console.log("Hi",name,"your ticket cost is",cost)
        }else if(age <30){
            cost+= 100
            console.log("Hi",name,"your ticket cost is",cost)
        }else if(age>29 && age < 51){
            cost+= 75
            console.log("Hi",name,"your ticket cost is",cost)
        }else{
            console.log("51+ not allowed")
        }
        let forAnother = prompt("Do you like to calclate for another person (y/n)").toLowerCase()
        if(forAnother==="y"){
            console.clear()
            ticket_again = true
        }else{
            ticket_again = false
        }
    }
}
function squidGame(){
    console.log("⭕️ Welcome to the Squid Game❌")
    let player = prompt("Enter your name ?")
    random_num = Math.floor(Math.random()*457)
    
    console.clear()
    console.log("Hi, Player",random_num," get Ready for the first game")
    console.log("GAME 1")
    console.log("Game rule: you have to choose correct room out of 3. if you select wrong room you will be eliminated")
    let money = 10
    let q1 = prompt("Q1.select the room you like to choose (1 to 3) :")
    if(q1=== "3"){
        money += 50
        console.clear()
        console.log("⭕️..Well done!! Player",random_num, "finished the 1st level and earned $",money)

        console.log("GAME 2")
        let q2 = prompt("Q2.which is not hoisted in Javascript(space req for each word):").toLowerCase()
        if (q2==="function expression"){
            money += 75
            console.clear()
            console.log("⭕️.Well done!! Player",random_num, "finished the 2nd level and earned $",money)
            console.log("GAME 3")
            let q3 = prompt("Q3.is this program helpful to you ?(y/n)").toLowerCase()
            if(q3 === "y"){
                money += 100
                console.log("⭕️..Well done!! Player",random_num, "You won the game and you earned $",money)  
            }else{

                console.log("Some good bye's will take time")
                console.log("❌..Player",random_num,"Bye !!!")
                }
        }else{
            console.log("❌..Player",random_num,"eliminated in Game 2")
        }
    }else{
        console.log("❌..Player",random_num,"eliminated in Game 1 by selecting Wrong room")
    }
}



// code starts here

/* Every function call() stored as a object, based on a user input(1-4) , it will trigger the
particular function*/
operations = {
    1 : leap,
    2 : bmi,
    3 : ticketingSystem,
    4 : squidGame,
}


should_continue = true;
/* using while loop to repeat the same steps until user confirmation */
while(should_continue){
    console.clear();
    console.log("***Multi Utility App***");
    for(key in operations){
        console.log("Press",key,"For",operations[key])
    };   
    let choice1 = parseInt(prompt("Enter the choice ?:"),10);
    /* if user input greater than 5 and less than 0 , code should not work */
    if (choice1<0 && choice1>5) {
        console.log("whyyyyyyyyy");
    } else if (choice1>0 && choice1<5) {
        console.clear()
        let result = operations[choice1]()
        let playAgain = prompt("Do you like go back previous menu? (y/n) :").toLowerCase();
        if(playAgain === "y"){
            should_continue = true;
        }else {
            should_continue = false;

        };    
    
    };
        
};