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

    selectInitialSetOfPieces(arr) {
        let newArr = [];
        // let randomNumberA;
        // let randomNumberB;
        // let initialSetOfPieces = [];
        // for(let i=0; i<arr.length; i++) {
        //     randomNumberA = Math.floor(Math.random * i);
        //     initialSetOfPieces.push(arr[randomNumberA]);
        // }
        newArr = arr.slice(0, 6);
        let initialSetOfPieces = newArr.reverse();
        return initialSetOfPieces;
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

let game = new Game([2, 3, 4, 5, 10, 30]);
console.log(game.selectInitialSetOfPieces([1, 2, 3, 4, 5, 6, 7, 8]));

// console.log(game.shufflePieces());

