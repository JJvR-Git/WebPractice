let Player = (name, sym) => {
    return {name, sym};
}

let gameBoard = (() => {

    oMasterActive = true;

    let boxes = document.querySelectorAll(".box");

    let board = Array.from(boxes);

    let play1 = Player("Player 1", "X");

    let play2 = Player("Player 2", "O");

    let popnames = () => {
        
        let nam1 = document.getElementById("playName1")
        let nam2 = document.getElementById("playName2")

        if(nam1.value){
            play1.name = nam1.value;
        }

        if(nam2.value){
            play2.name = nam2.value;
        }
    }

    for(let i = 0; i < board.length; i++)
    {        
        board[i].addEventListener("click", () => displayController.mark(board[i]));
    }

    return {board, play1, play2, popnames, oMasterActive};
})();

let displayController = (() => {

    let fPlayer = true;

    let displayState = document.getElementById("tex");

    let gameCounter = 0;

    let reset = () => {

        for(let i = 0; i < gameBoard.board.length; i++)
        {
            gameBoard.board[i].innerHTML = " ";
        }

        document.getElementById("bod").style.pointerEvents = "auto";

        gameCounter = 0;

    }

    let mark = (e) => {
        document.getElementById("start").innerHTML = "reset";
        displayState.innerHTML = "Game in progress";

        if(e.innerHTML === " "){
            if (fPlayer){
                e.innerHTML = gameBoard.play1.sym;
            }else{
                e.innerHTML = gameBoard.play2.sym;
            }

            fPlayer = !fPlayer;

            gameCounter ++;

            checkWin();

            if(!fPlayer && gameBoard.oMasterActive && gameCounter < 8 && displayState !== "Game in progress"){
                oMaster.act();
            }
        }
    }

    let checkWin = () => {
        for(let i = 0; i < 7; i += 3){    
            if(gameBoard.board[i].innerHTML === gameBoard.board[i + 1].innerHTML &&
                gameBoard.board[i].innerHTML === gameBoard.board[i + 2].innerHTML && 
                (gameBoard.board[i].innerHTML === gameBoard.play1.sym || gameBoard.board[i].innerHTML === gameBoard.play2.sym)) 
                {
                if(gameBoard.board[i].innerHTML === gameBoard.play1.sym){
                    displayState.innerHTML = `${gameBoard.play1.name} wins!`;
                }else{
                    displayState.innerHTML = `${gameBoard.play2.name} wins!`;
                }

                document.getElementById("bod").style.pointerEvents = "none";
            }
        }

        for(let i = 0; i < 3; i ++){    
            if(gameBoard.board[i].innerHTML === gameBoard.board[i + 3].innerHTML &&
                gameBoard.board[i].innerHTML === gameBoard.board[i + 6].innerHTML && 
                (gameBoard.board[i].innerHTML === gameBoard.play1.sym || gameBoard.board[i].innerHTML === gameBoard.play2.sym)) 
                {
                if(gameBoard.board[i].innerHTML === gameBoard.play1.sym){
                    displayState.innerHTML = `${gameBoard.play1.name} wins!`;
                }else{
                    displayState.innerHTML = `${gameBoard.play2.name} wins!`;
                }
            }
        }

        if((gameBoard.board[4].innerHTML === gameBoard.board[0].innerHTML && gameBoard.board[4].innerHTML === gameBoard.board[8].innerHTML) ||
            (gameBoard.board[4].innerHTML === gameBoard.board[2].innerHTML && gameBoard.board[4].innerHTML === gameBoard.board[6].innerHTML)){
            if(gameBoard.board[4].innerHTML === gameBoard.play1.sym){
                displayState.innerHTML = `${gameBoard.play1.name} wins!`;
            }else if (gameBoard.board[4].innerHTML === gameBoard.play2.sym){
                displayState.innerHTML = `${gameBoard.play2.name} wins!`;
            }
        }

        if(gameCounter === 9 && displayState !== "Game in progress"){
            displayState.innerHTML = "It's a draw!";
        }
    };

    return {mark, reset};
})();

let oMaster = (() => {

    let act = () => {
        let choice = Math.round(Math.random() * 9)

        if(gameBoard.board[choice].innerHTML === " "){
            gameBoard.board[choice].click();
        }else{
            act();
        }
        console.log(choice);
    }

    return {act}
})()