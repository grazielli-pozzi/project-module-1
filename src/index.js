//Quando a pessoa clicar no botão JOGAR, limpar a section e adicionar o jogo


//setOfPieces is an array of 28 positions
//In each position there is an object which has two properties: rightPip and leftPip
//Those properties will show the pips of each one

class Game {
    constructor(setOfPieces) {
        this.setOfPieces = setOfPieces;
        this.piecesPlayer1 = this.selectInitialSetOfPieces('player1');
        this.piecesPlayer2 = this.selectInitialSetOfPieces('player2');
        this.playerTurn = 'player1';
        this.availablePieces = setOfPieces;
        this.table = [];
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
        this.shufflePieces();
        let copyOfSetOfPieces = this.setOfPieces;
        let newArr = copyOfSetOfPieces.splice(0, 6);
        for (let i = 0; i < newArr.length; i++) {
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
                this.piecesPlayed.push(piece_1);
                return this.piecesPlayed;
            } else {
                this.playerTurn = 'player1';
                this.piecesPlayed.push(piece_2);
                return this.piecesPlayed;
            }
        }
    }

    checkPlayerTurn() {
        if (this.playerTurn === 'player1') {
            this.playerTurn = 'player2';
        } else if (this.playerTurn === 'player2') {
            this.playerTurn = 'player1';
        }
    }

    //Blocking pieces that do not match with the piece on the table
    checkPossiblePieces(piece) {
        let countPiecesPlayer1 = 0;
        let countPiecesPlayer2 = 0;
        let possiblePieces = [];
        if (this.playerTurn === 'player1') {
            for (let i = 0; i < this.piecesPlayer1.length; i++) {
                if (piece.pips[0].status === "free") {
                    if (piece.pips[0].position === this.piecesPlayer1[i].pips[0].position) {
                        this.piecesPlayer1[i].pips[0].status = "possible";
                        possiblePieces.push(this.piecesPlayer1[i]);
                        countPiecesPlayer1 += 1;
                        //Implementar lógica para ele não repetir o mesmo elemento no array
                    }
                }
                if (piece.pips[1].status === "free") {
                    if (piece.pips[1].position === this.piecesPlayer1[i].pips[1].position) {
                        this.piecesPlayer1[i].pips[1].status = "possible";
                        possiblePieces.push(this.piecesPlayer1[i]);
                        countPiecesPlayer1 += 1;
                    }
                }
            }
            if (countPiecesPlayer1 === 0) {
                return 'No pieces available to be played';
                //Chamar método getNewPiece()?   
            } else {
                return possiblePieces;
            }
        }

        if (this.playerTurn === 'player2') {
            for (let i = 0; i < this.piecesPlayer2.length; i++) {
                if (piece.pips[0].status === "free") {
                    if (piece.pips[0].position === this.piecesPlayer2[i].pips[0].position) {
                        this.piecesPlayer2[i].pips[0].status = "possible";
                        possiblePieces.push(this.piecesPlayer2[i]);
                        countPiecesPlayer2 += 1;
                    }
                }
                if (piece.pips[1].status === "free") {
                    if (piece.pips[1].position === this.piecesPlayer2[i].pips[1].position) {
                        this.piecesPlayer2[i].pips[1].status = "possible";
                        possiblePieces.push(this.piecesPlayer2[i]);
                        countPiecesPlayer2 += 1;
                    }
                }
            }
            if (countPiecesPlayer2 === 0) {
                return 'No pieces available to be played';
            } else {
                return possiblePieces;
            }
        }

    }

    //UPDATE SET OF PIECES FOR EACH PLAYER
    updateSetOfPieces(piece) {
        if(this.playerTurn === 'player1') {
            this.piecesPlayer1.splice(i, 1);
            return this.piecesPlayer1;
        }
        if(this.playerTurn === 'player2') {
            this.piecesPlayer2.splice(i, 1);
            return this.piecesPlayer2;
        }
    }
    


    countRemainingPieces(player) {
        if (player === 'player1') {
            return this.piecesPlayer1.length;
        }
        if (player === 'player2') {
            return this.piecesPlayer2.length;
        }
    }

    countSumOfPips(piece) {
        return piece.sum;
    }

    showWinner() {

    }

}

// class Player extends Game {
//     constructor(setOfPieces) {
//         super(setOfPieces)
//         this.piecesPlayed = [];
//     }

//     choosePieceToBeMoved() {

//     }

//     choosePosition() {

//     }

//     movePiece(piece) {
//         // if(this.table[length-1].pips[1].)
//         // this.table
//     }

//     //When player has no more pieces to match with the piece in the table
//     getNewPiece(player, piece) {
//         //add event listener in piece
//         piece.player = player;
//         for (let i = 0; i < this.availablePieces.length; i++) {
//             if (piece.idPiece === this.availablePieces[i].idPiece) {
//                 this.availablePieces[i].player = player;
//                 this.availablePieces.splice(i, 1);
//             if(player === 'player1') {
//                 this.piecesPlayer1.push(piece);
//             }
//             if(player === 'player2') {
//                 this.piecesPlayer2.push(piece);
//             }
//                 return this.availablePieces;
//             }
//         }
//     }


// }

// class Piece {
//     constructor() {

//     }

//     drawPiece() {

//     }
// }

// let game = new Game([2, 3, 4, 5, 10, 30]);
// console.log(game.selectInitialSetOfPieces([1, 2, 3, 4, 5, 6, 7, 8]));

// console.log(game.shufflePieces());

