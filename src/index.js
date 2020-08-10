//Quando a pessoa clicar no botão JOGAR, limpar a section e adicionar o jogo


//setOfPieces is an array of 28 positions
//In each position there is an object which has two properties: rightPip and leftPip
//Those properties will show the pips of each one

class Game {
    constructor(setOfPieces) {
    this.setOfPieces = setOfPieces;
    let newSetOfPieces = [];
    let randomIndexes = [];
    }

    shufflePieces() {
    let randomNumber = Math.floor(Math.random() * this.setOfPieces.length);
    if(!this.randomIndexes.includes(randomNumber)) {
        this.randomIndexes.push(randomNumber);
    } else {
        randomNumber = Math.floor(Math.random() * this.setOfPieces.length);
    }
    
    }

    selectInitialSetOfPieces() {

    }

    checkWhoStarts() {

    }

    //Blocking pieces that are not allowed to be moved
    checkPossiblePieces() {

    }

    checkPlayerTurn() {

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