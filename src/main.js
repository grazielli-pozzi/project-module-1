
//CREATING THE ARRAYS OF PIECES
// const pieces = [
//     { pips: [{ position: 0, status: "free" }, { position: 0, status: "free" }], idPiece: 00, sum: 0, doubled: true, player: undefined },
//     { pips: [{ position: 0, status: "free" }, { position: 1, status: "free" }], idPiece: 01, sum: 1, doubled: false, player: undefined },
//     { pips: [{ position: 0, status: "free" }, { position: 2, status: "free" }], idPiece: 02, sum: 2, doubled: false, player: undefined },
//     { pips: [{ position: 0, status: "free" }, { position: 3, status: "free" }], idPiece: 03, sum: 3, doubled: false, player: undefined },
//     { pips: [{ position: 0, status: "free" }, { position: 4, status: "free" }], idPiece: 04, sum: 4, doubled: false, player: undefined },
//     { pips: [{ position: 0, status: "free" }, { position: 5, status: "free" }], idPiece: 05, sum: 5, doubled: false, player: undefined },
//     { pips: [{ position: 0, status: "free" }, { position: 6, status: "free" }], idPiece: 06, sum: 6, doubled: false, player: undefined },
//     { pips: [{ position: 1, status: "free" }, { position: 1, status: "free" }], idPiece: 11, sum: 2, doubled: true, player: undefined },
//     { pips: [{ position: 1, status: "free" }, { position: 2, status: "free" }], idPiece: 12, sum: 3, doubled: false, player: undefined },
//     { pips: [{ position: 1, status: "free" }, { position: 3, status: "free" }], idPiece: 13, sum: 4, doubled: false, player: undefined },
//     { pips: [{ position: 1, status: "free" }, { position: 4, status: "free" }], idPiece: 14, sum: 5, doubled: false, player: undefined },
//     { pips: [{ position: 1, status: "free" }, { position: 5, status: "free" }], idPiece: 15, sum: 6, doubled: false, player: undefined },
//     { pips: [{ position: 1, status: "free" }, { position: 6, status: "free" }], idPiece: 16, sum: 7, doubled: false, player: undefined },
//     { pips: [{ position: 2, status: "free" }, { position: 2, status: "free" }], idPiece: 22, sum: 4, doubled: true, player: undefined },
//     { pips: [{ position: 2, status: "free" }, { position: 3, status: "free" }], idPiece: 23, sum: 5, doubled: false, player: undefined },
//     { pips: [{ position: 2, status: "free" }, { position: 4, status: "free" }], idPiece: 24, sum: 6, doubled: false, player: undefined },
//     { pips: [{ position: 2, status: "free" }, { position: 5, status: "free" }], idPiece: 25, sum: 7, doubled: false, player: undefined },
//     { pips: [{ position: 2, status: "free" }, { position: 6, status: "free" }], idPiece: 26, sum: 8, doubled: false, player: undefined },
//     { pips: [{ position: 3, status: "free" }, { position: 3, status: "free" }], idPiece: 33, sum: 6, doubled: true, player: undefined },
//     { pips: [{ position: 3, status: "free" }, { position: 4, status: "free" }], idPiece: 34, sum: 7, doubled: false, player: undefined },
//     { pips: [{ position: 3, status: "free" }, { position: 5, status: "free" }], idPiece: 35, sum: 8, doubled: false, player: undefined },
//     { pips: [{ position: 3, status: "free" }, { position: 6, status: "free" }], idPiece: 36, sum: 9, doubled: false, player: undefined },
//     { pips: [{ position: 4, status: "free" }, { position: 4, status: "free" }], idPiece: 44, sum: 8, doubled: true, player: undefined },
//     { pips: [{ position: 4, status: "free" }, { position: 5, status: "free" }], idPiece: 45, sum: 9, doubled: false, player: undefined },
//     { pips: [{ position: 4, status: "free" }, { position: 6, status: "free" }], idPiece: 46, sum: 10, doubled: false, player: undefined },
//     { pips: [{ position: 5, status: "free" }, { position: 5, status: "free" }], idPiece: 55, sum: 10, doubled: true, player: undefined },
//     { pips: [{ position: 5, status: "free" }, { position: 6, status: "free" }], idPiece: 56, sum: 11, doubled: false, player: undefined },
//     { pips: [{ position: 6, status: "free" }, { position: 6, status: "free" }], idPiece: 66, sum: 12, doubled: true, player: undefined }
// ];

const pieces = [
    { pips: [{ position: 0, status: "free" }, { position: 0, status: "free" }], idPiece: '00', sum: 0, doubled: true, player: undefined },
    { pips: [{ position: 0, status: "free" }, { position: 1, status: "free" }], idPiece: '01', sum: 1, doubled: false, player: undefined },
    { pips: [{ position: 0, status: "free" }, { position: 2, status: "free" }], idPiece: '02', sum: 2, doubled: false, player: undefined },
    { pips: [{ position: 0, status: "free" }, { position: 3, status: "free" }], idPiece: '03', sum: 3, doubled: false, player: undefined },
    { pips: [{ position: 0, status: "free" }, { position: 4, status: "free" }], idPiece: '04', sum: 4, doubled: false, player: undefined },
    { pips: [{ position: 0, status: "free" }, { position: 5, status: "free" }], idPiece: '05', sum: 5, doubled: false, player: undefined },
    { pips: [{ position: 0, status: "free" }, { position: 6, status: "free" }], idPiece: '06', sum: 6, doubled: false, player: undefined },
    { pips: [{ position: 1, status: "free" }, { position: 1, status: "free" }], idPiece: '11', sum: 2, doubled: true, player: undefined },
    { pips: [{ position: 1, status: "free" }, { position: 2, status: "free" }], idPiece: '12', sum: 3, doubled: false, player: undefined },
    { pips: [{ position: 1, status: "free" }, { position: 3, status: "free" }], idPiece: '13', sum: 4, doubled: false, player: undefined },
    { pips: [{ position: 1, status: "free" }, { position: 4, status: "free" }], idPiece: '14', sum: 5, doubled: false, player: undefined },
    { pips: [{ position: 1, status: "free" }, { position: 5, status: "free" }], idPiece: '15', sum: 6, doubled: false, player: undefined },
    { pips: [{ position: 1, status: "free" }, { position: 6, status: "free" }], idPiece: '16', sum: 7, doubled: false, player: undefined },
    { pips: [{ position: 2, status: "free" }, { position: 2, status: "free" }], idPiece: '22', sum: 4, doubled: true, player: undefined },
    { pips: [{ position: 2, status: "free" }, { position: 3, status: "free" }], idPiece: '23', sum: 5, doubled: false, player: undefined },
    { pips: [{ position: 2, status: "free" }, { position: 4, status: "free" }], idPiece: '24', sum: 6, doubled: false, player: undefined },
    { pips: [{ position: 2, status: "free" }, { position: 5, status: "free" }], idPiece: '25', sum: 7, doubled: false, player: undefined },
    { pips: [{ position: 2, status: "free" }, { position: 6, status: "free" }], idPiece: '26', sum: 8, doubled: false, player: undefined },
    { pips: [{ position: 3, status: "free" }, { position: 3, status: "free" }], idPiece: '33', sum: 6, doubled: true, player: undefined },
    { pips: [{ position: 3, status: "free" }, { position: 4, status: "free" }], idPiece: '34', sum: 7, doubled: false, player: undefined },
    { pips: [{ position: 3, status: "free" }, { position: 5, status: "free" }], idPiece: '35', sum: 8, doubled: false, player: undefined },
    { pips: [{ position: 3, status: "free" }, { position: 6, status: "free" }], idPiece: '36', sum: 9, doubled: false, player: undefined },
    { pips: [{ position: 4, status: "free" }, { position: 4, status: "free" }], idPiece: '44', sum: 8, doubled: true, player: undefined },
    { pips: [{ position: 4, status: "free" }, { position: 5, status: "free" }], idPiece: '45', sum: 9, doubled: false, player: undefined },
    { pips: [{ position: 4, status: "free" }, { position: 6, status: "free" }], idPiece: '46', sum: 10, doubled: false, player: undefined },
    { pips: [{ position: 5, status: "free" }, { position: 5, status: "free" }], idPiece: '55', sum: 10, doubled: true, player: undefined },
    { pips: [{ position: 5, status: "free" }, { position: 6, status: "free" }], idPiece: '56', sum: 11, doubled: false, player: undefined },
    { pips: [{ position: 6, status: "free" }, { position: 6, status: "free" }], idPiece: '66', sum: 12, doubled: true, player: undefined }
];

// const piece_1 = [
//     { pips: [{ position: 4, status: "free" }, { position: 4, status: "free" }], sum: 7, doubled: true, player: 'player1' },
//     { pips: [{ position: 1, status: "free" }, { position: 1, status: "free" }], sum: 7, doubled: true, player: 'player1' },
//     { pips: [{ position: 1, status: "free" }, { position: 0, status: "free" }], sum: 8, doubled: false, player: 'player1' },
//     { pips: [{ position: 0, status: "free" }, { position: 2, status: "free" }], sum: 9, doubled: false, player: 'player1' },
//     { pips: [{ position: 6, status: "free" }, { position: 6, status: "free" }], sum: 10, doubled: true, player: 'player1' },
//     { pips: [{ position: 3, status: "free" }, { position: 5, status: "not-free" }], sum: 11, doubled: false, player: 'player1' }
// ];

// const piece_2 = [
//     { pips: [{ position: 3, status: "free" }, { position: 4, status: "free" }], sum: 7, doubled: false, player: 'player2' },
//     { pips: [{ position: 2, status: "free" }, { position: 1, status: "free" }], sum: 7, doubled: false, player: 'player2' },
//     { pips: [{ position: 1, status: "free" }, { position: 2, status: "free" }], sum: 8, doubled: false, player: 'player2' },
//     { pips: [{ position: 0, status: "free" }, { position: 3, status: "free" }], sum: 9, doubled: false, player: 'player2' },
//     { pips: [{ position: 6, status: "free" }, { position: 4, status: "free" }], sum: 10, doubled: false, player: 'player2' },
//     { pips: [{ position: 5, status: "free" }, { position: 5, status: "free" }], sum: 11, doubled: false, player: 'player2' }
// ];

let game = new Game(pieces);

//DISPLAYING THE PIECES ON THE BOARD

let initialPieces = game.setOfPieces;
let initialPiecesBoard = document.querySelector(".initialPieces");
let content = '';
let face1 = ``;
let face2 = ``;

initialPieces.forEach(piece => {
    if (piece.pips[0].position === 1) {
        face1 = `<div class='middle'>
        <div class='face_1'></div>
        </div>`;
    }
    if (piece.pips[0].position === 2) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 3) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 4) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 5) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 6) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }

    if (piece.pips[1].position === 1) {
        face2 = `<div class='middle'>
        <div class='face_1'></div>
        </div>`;
    }
    if (piece.pips[1].position === 2) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 3) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 4) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 5) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 6) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }

    content += `<div class = "piece piece-table" id='piece-${piece.pips[0].position}${piece.pips[1].position}'> 
    <div class = "div_face_1 pip_${piece.pips[0].position}">
    ${face1}
    </div>
    <div class = "div_face_2 pip_${piece.pips[1].position}">
    ${face2}
    </div>
    </div>`;

    face1 = ``;
    face2 = ``;
})

initialPiecesBoard.innerHTML = content;

//CREATING THE PIECES FOR EACH PLAYER

//PLAYER 1

let initialPiecesPlayer1 = game.piecesPlayer1;
let player_1 = document.querySelector(".player_1");
player_1.innerHTML = game.piecesPlayer1;
let player_2 = document.querySelector(".player_2");
player_2.innerHTML = game.piecesPlayer2;
content = '';
face1 = ``;
face2 = ``;
let content2 = ``;

initialPiecesPlayer1.forEach(piece => {
    if (piece.pips[0].position === 1) {
        face1 = `<div class='middle'>
        <div class='face_1'></div>
        </div>`;
    }
    if (piece.pips[0].position === 2) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 3) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 4) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 5) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 6) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }

    if (piece.pips[1].position === 1) {
        face2 = `<div class='middle'>
        <div class='face_1'></div>
        </div>`;
    }
    if (piece.pips[1].position === 2) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 3) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 4) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 5) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 6) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }

    content += `<div class = "piece" id='${piece.pips[0].position}${piece.pips[1].position}'> 
    <div class = "div_face_1 pip_${piece.pips[0].position}">
    ${face1}
    </div>
    <div class = "div_face_2 pip_${piece.pips[1].position}">
    ${face2}
    </div>
    </div>`;

    face1 = ``;
    face2 = ``;

});

content2 = `<h3>PLAYER 1</h3>
${content}`;

player_1.innerHTML = content2;


//PLAYER 2

let initialPiecesPlayer2 = game.piecesPlayer2;
content = ``;
face1 = ``;
face2 = ``;
content2 = ``;

initialPiecesPlayer2.forEach(piece => {
    if (piece.pips[0].position === 1) {
        face1 = `<div class='middle'>
        <div class='face_1'></div>
        </div>`;
    }
    if (piece.pips[0].position === 2) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 3) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 4) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 5) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[0].position === 6) {
        face1 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }

    if (piece.pips[1].position === 1) {
        face2 = `<div class='middle'>
        <div class='face_1'></div>
        </div>`;
    }
    if (piece.pips[1].position === 2) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 3) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 4) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 5) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }
    if (piece.pips[1].position === 6) {
        face2 = `<div class='start'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='middle'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>
         <div class='end'>
         <div class='face_1'></div>
         <div class='face_1'></div>
         </div>`;
    }

    content += `<div class = "piece" id='${piece.pips[0].position}${piece.pips[1].position}'> 
    <div class = "div_face_1 pip_${piece.pips[0].position}">
    ${face1}
    </div>
    <div class = "div_face_2 pip_${piece.pips[1].position}">
    ${face2}
    </div>
    </div>`;

    face1 = ``;
    face2 = ``;

});

content2 = `<h3>PLAYER 2</h3>
${content}`;

player_2.innerHTML = content2;

//CREATING EVENT LISTENER FOR THE BUTTON TO CHANGE PAGE WHEN USER CLICKS IN START THE GAME

let startButton = document.querySelector('.button');

startButton.addEventListener('click', () => {
    document.querySelector('.initial-page').style.display = "none";
})

//CHECKING FIRST PIECE TO BE PLAYED

let board = document.querySelector(".board");
console.log(board);
let firstPieceToBePlayed = game.checkWhoStarts(initialPiecesPlayer1, initialPiecesPlayer2);
let firstPieceToBePlayedID = firstPieceToBePlayed[0].idPiece;
let pieceToBeMoved = document.querySelector(`div[id='${firstPieceToBePlayedID}']`);
board.appendChild(pieceToBeMoved);

const pieceTest = { pips: [{ position: 0, status: "free" }, { position: 6, status: "free" }], idPiece: '06', sum: 7, doubled: false, player: undefined };

//CREATING EVENT LISTENERS FOR EACH PIECE POSSIBLE TO BE MOVED

let playerTurn = game.playerTurn;

let piecesToBeClicked = game.checkPossiblePieces(firstPieceToBePlayed[0]);
console.log(piecesToBeClicked);
// console.log(game.position);

if(piecesToBeClicked.length !== 0) {
    for (let i=0; i<piecesToBeClicked.length; i++) {
        let pieceID = piecesToBeClicked[i].idPiece;
        let piece = document.querySelector(`div[id='${pieceID}']`);
        if(playerTurn === 'player1') {
            let player1Board = document.querySelector('.player_1');
            piece.addEventListener('click', () => {
                console.log(piece);
                console.log(piece.id);
                player1Board.removeChild(piece);
                board.appendChild(piece);
                // piecesToBeClicked[i].
                // piecesToBeClicked = game.checkPossiblePieces();
            })
        }
        if(playerTurn === 'player2') {
            let player2Board = document.querySelector('.player_2');
            piece.addEventListener('click', () => {
                player2Board.removeChild(piece);
                board.appendChild(piece);
            })
        }
    }
} else {
    game.shufflePieces();
    game.selectInitialSetOfPieces('player1');
    game.selectInitialSetOfPieces('player2');
    piecesToBeClicked = game.checkPossiblePieces(pieceTest);
}


