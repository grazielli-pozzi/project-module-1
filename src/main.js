
//CREATING THE ARRAYS OF PIECES
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

const pieceTest = { pips: [{ position: 6, status: "free" }, { position: 6, status: "free" }], idPiece: '66', sum: 7, doubled: false, player: undefined };

// let game = new Game(pieces);
const player = new Player(pieces);
console.log(player.getNewPiece('player1', pieceTest));


//CREATING THE PIECES FOR EACH PLAYER

let player_2 = document.querySelector(".player_2");
let player_1 = document.querySelector(".player_1");
let content = '';
let face1 = ``;
let face2 = ``;

piece_1.forEach(piece => {
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

player_1.innerHTML = content;

content = ``;
face1 = ``;
face2 = ``;

piece_2.forEach(piece => {
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

player_2.innerHTML = content;


// //CREATING EVENT LISTENERS FOR EACH PEACE - POSSIBLE TO BE MOVED




