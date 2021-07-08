console.log("this is javascript");
let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];

}

getComputerChoice();


function convertToWord(letter) {
    if(letter === "r") return "Rock"
    if(letter === "p") return "Paper"
    return "Scissors";
}


function win(userchoice,ComputerChoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_div.innerHTML =`${convertToWord(userchoice)}  beats ${convertToWord(ComputerChoice)} you win!` 
}

function lose(userchoice,ComputerChoice){
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_div.innerHTML =`${convertToWord(userchoice)} cannot beats ${convertToWord(ComputerChoice)} you lose.`

}

function draw(userchoice,ComputerChoice){
    console.log("Draw");
    result_div.innerHTML =`Its a Draw`

}

function game(userchoice){

    const ComputerChoice = getComputerChoice();
   
    switch(userchoice + ComputerChoice){

        case "rs":
        case "pr":
        case "sp":   
            win(userchoice,ComputerChoice);
         break
         
        case "rp":
        case "sr":
        case "ps":
            lose(userchoice,ComputerChoice);
         break
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,ComputerChoice);
         break

    }
}

function main(){
rock_div.addEventListener('click', function(){
    console.log("you have clicked on rock");
    game("r");

})

paper_div.addEventListener('click', function(){
    console.log("you have clicked on paper");
    game("p");
    
})

scissor_div.addEventListener('click', function(){
    console.log("you have clicked on scissor");
    game("s");
    
})
}

main();

