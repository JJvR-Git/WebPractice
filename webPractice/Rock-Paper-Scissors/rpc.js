let wins = 0;
let loss = 0;

function getPC(){
    let ran = Math.floor(Math.random() * 3);
    let res;

    switch (ran) {
        case 0: res = "rock";
            
            break;
    
        case 1: res = "paper";
        
            break;

        case 2: res = "scissors";
        
            break;
    }

    return res;
}

function playRound(p){

    let round;
    let pc = getPC();
    let player = p.innerHTML.toLowerCase();

    if(pc == player){
        round = "Its a Draw!"
    }

    else if(pc == "rock" && player == "scissors"){
        round = `You lose ${pc} beats ${player}`
        loss ++;
    }

    else if(pc == "paper" && player == "rock"){
        round = `You lose ${pc} beats ${player}`
        loss ++;
    }

    else if(pc == "scissors" && player == "paper"){
        round = `You lose ${pc} beats ${player}`
        loss ++;
    }

    else{
        round = `You win! ${player} beats ${pc}`;
        wins ++;
    }

    let ret = document.createElement("span")
    ret.innerText = round;

    document.querySelector(".results").append(ret);

    if((wins + loss) == 5){
        let gRes;
        
        if(wins > loss){
            gRes = `You won ${wins} to ${loss}`
        }

        else{
            gRes = `You Lost ${loss} to ${wins}`
        }
        
        wins = 0;
        loss = 0;

        document.querySelector(".results").append("Game over " + gRes);
    }
}

let buts = document.querySelectorAll(".but");

for(let i = 0; i < buts.length; i++){
    buts[i].addEventListener("click", function(){
        playRound(buts[i]);
    });
}