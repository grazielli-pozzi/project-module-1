//Quando a pessoa clicar no botão JOGAR, limpar a section e adicionar o jogo


//setOfPieces is an array of 28 positions
//In each position there is an object which has two properties: rightPip and leftPip
//Those properties will show the pips of each one

class Game {
    constructor(setOfPieces) {
        this.setOfPieces = setOfPieces;
        this.piecesPlayer1 = selectInitialSetOfPieces();
        this.piecesPlayer2 = selectInitialSetOfPieces();
        this.playerTurn;
    }

    shufflePieces() {
        let randomNumber;
        let elementToBeChanged;
        for (let i = 0; i < this.setOfPieces.length; i++) {
            randomNumber = Math.floor(Math.random() * i);
            elementToBeChanged = this.setOfPieces[i];
            this.setOfPieces[i] = this.setOfPieces[randomNumber];
            this.setOfPieces[randomNumber] = elementToBeChanged;
        }
        return this.setOfPieces;
    }

    selectInitialSetOfPieces(player) {
        const newArr = this.setOfPieces.splice(0, 6);
        for (let i=0; i< newArr.length; i++) {
            newArr[i].player = player;
        }
        return newArr;
    }

    checkWhoStarts(arr1, arr2) {
        let sum1 = 0;
        let sum2 = 0;
        let piece_1 = [];
        let piece_2 = [];
        for (let i = 0; i < 6; i++) {
            if (arr1[i].doubled === true) {
                if (arr1[i].sum >= sum1) {
                    sum1 = arr1[i].sum;
                    piece_1 = [arr1[i]];
                }
            }
            if (arr2[i].doubled === true) {
                if (arr2[i].sum >= sum2) {
                    sum2 = arr2[i].sum;
                    piece_2 = [arr2[i]];
                }
            }
        }
        if (piece_1.length === 0 && piece_2.length === 0) {
            return 'Embaralhar de novo';
        } else {
            if (sum1 > sum2) {
                this.playerTurn = 'player2';
                return piece_1;
            } else {
                this.playerTurn = 'player1';
                return piece_2;
            }
        }
    }

    checkPlayerTurn() {
        if(this.playerTurn === 'player1') {
            this.playerTurn = 'player2';
        } else if (this.playerTurn === 'player2') {
            this.playerTurn = 'player1';
        }
    }

    //Blocking pieces that do not match with the piece on the table
    checkPossiblePieces(piece) {
        
    }


    countRemainingPieces() {

    }

    countSumOfPips() {

    }

    showWinner() {

    }

}

class Player {
    constructor() {

    }

    choosePieceToBeMoved() {

    }

    choosePosition() {

    }

    movePiece() {

    }

    //When player has no more pieces to match with the piece in the table
    getNewPiece() {

    }


}

class Piece {
    constructor() {

    }

    drawPiece() {

    }
}

// let game = new Game([2, 3, 4, 5, 10, 30]);
// console.log(game.selectInitialSetOfPieces([1, 2, 3, 4, 5, 6, 7, 8]));

// console.log(game.shufflePieces());

