class Game{
    constructor(){
        this.currentPlayer = "x";
        this.board = new Array(9).fill(null);
    }
    boxClicked(e){
        const id = e.target.id;
        if(!this.board[id]){
            this.board[id] = this.currentPlayer;
            e.target.innerText = this.currentPlayer;
           if(this.isWinning()){
               this.endGame();
               return;

           }else if(!this.board.some((item)=>item===null)){
               this.endGame("draw");
               return;

           }
           this.changePlayer();
        }
    }

    endGame(result){
        text.innerText = result === "draw" ? "Draw" : this.currentPlayer + " Wins";
        boxes.forEach((box)=>box.removeEventListener('click', makeMove));

    }
    changePlayer(){
        this.currentPlayer = this.currentPlayer==="x" ? "o" : "x";
        text.innerText = this.currentPlayer + " turn";

    }

    isWinning(){
        if(this.currentPlayer==this.board[0] && this.board[0] == this.board[1] && this.board[1]==this.board[2]){
            return true;
        }
        if(this.currentPlayer==this.board[3] && this.board[3] == this.board[4] && this.board[4]==this.board[5]){
            return true;
        }
        if(this.currentPlayer==this.board[6] && this.board[6] == this.board[7] && this.board[7]==this.board[8]){
            return true;
        }


        if(this.currentPlayer==this.board[0] && this.board[0] == this.board[3] && this.board[3]==this.board[6]){
            return true;
        }
        if(this.currentPlayer==this.board[1] && this.board[1] == this.board[4] && this.board[4]==this.board[7]){
            return true;
        }
        if(this.currentPlayer==this.board[2] && this.board[2] == this.board[5] && this.board[5]==this.board[8]){
            return true;
        }

        if(this.currentPlayer==this.board[0] && this.board[0] == this.board[4] && this.board[4]==this.board[8]){
            return true;
        }
        if(this.currentPlayer==this.board[2] && this.board[2] == this.board[4] && this.board[4]==this.board[6]){
            return true;
        }

        return false;
        
        
    }

    restartGame(){
        this.currentPlayer = "x";
        this.board.fill(null);
        boxes.forEach((box)=>box.innerText = "");
        text.innerText = "Play Game";
        boxes.forEach((box)=>box.addEventListener("click" , makeMove));

    }

}

const game = new Game();


const boxes = document.querySelectorAll('.box');
boxes.forEach((box)=>box.addEventListener('click', makeMove))

function makeMove(e){
    game.boxClicked(e);
}


const restart = document.getElementById("restart");
restart.addEventListener("click", restartGame);

function restartGame(){
    game.restartGame();
}




