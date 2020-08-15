const pieces = [
    { pips: [0, 0], sum: 0, doubled: true, status: "free", player: undefined },
    { pips: [0, 1], sum: 1, doubled: false, status: "free", player: undefined },
    { pips: [0, 2], sum: 2, doubled: false, status: "free", player: undefined },
    { pips: [0, 3], sum: 3, doubled: false, status: "free", player: undefined },
    { pips: [0, 4], sum: 4, doubled: false, status: "free", player: undefined },
    { pips: [0, 5], sum: 5, doubled: false, status: "free", player: undefined },
    { pips: [0, 6], sum: 6, doubled: false, status: "free", player: undefined },
    { pips: [1, 1], sum: 2, doubled: true, status: "free", player: undefined },
    { pips: [1, 2], sum: 3, doubled: false, status: "free", player: undefined },
    { pips: [1, 3], sum: 4, doubled: false, status: "free", player: undefined },
    { pips: [1, 4], sum: 5, doubled: false, status: "free", player: undefined },
    { pips: [1, 5], sum: 6, doubled: false, status: "free", player: undefined },
    { pips: [1, 6], sum: 7, doubled: false, status: "free", player: undefined },
    { pips: [2, 2], sum: 4, doubled: true, status: "free", player: undefined },
    { pips: [2, 3], sum: 5, doubled: false, status: "free", player: undefined },
    { pips: [2, 4], sum: 6, doubled: false, status: "free", player: undefined },
    { pips: [2, 5], sum: 7, doubled: false, status: "free", player: undefined },
    { pips: [2, 6], sum: 8, doubled: false, status: "free", player: undefined },
    { pips: [3, 3], sum: 6, doubled: true, status: "free", player: undefined },
    { pips: [3, 4], sum: 7, doubled: false, status: "free", player: undefined },
    { pips: [3, 5], sum: 8, doubled: false, status: "free", player: undefined },
    { pips: [3, 6], sum: 9, doubled: false, status: "free", player: undefined },
    { pips: [4, 4], sum: 8, doubled: true, status: "free", player: undefined },
    { pips: [4, 5], sum: 9, doubled: false, status: "free", player: undefined },
    { pips: [4, 6], sum: 10, doubled: false, status: "free", player: undefined },
    { pips: [5, 5], sum: 10, doubled: true, status: "free", player: undefined },
    { pips: [5, 6], sum: 11, doubled: false, status: "free", player: undefined },
    { pips: [6, 6], sum: 12, doubled: true, status: "free", player: undefined }
];

const piece_1 = [
    { pips: [{ position: 4, status: "free" }, { position: 4, status: "free" }], sum: 7, doubled: true },
    { pips: [{ position: 1, status: "free" }, { position: 1, status: "free" }], sum: 7, doubled: true },
    { pips: [{ position: 1, status: "free" }, { position: 0, status: "free" }], sum: 8, doubled: false },
    { pips: [{ position: 0, status: "free" }, { position: 2, status: "free" }], sum: 9, doubled: false },
    { pips: [{ position: 6, status: "free" }, { position: 6, status: "free" }], sum: 10, doubled: true },
    { pips: [{ position: 3, status: "free" }, { position: 5, status: "free" }], sum: 11, doubled: false }
];

const piece_2 = [
    { pips: [{ position: 3, status: "free" }, { position: 4, status: "free" }], sum: 7, doubled: false },
    { pips: [{ position: 2, status: "free" }, { position: 1, status: "free" }], sum: 7, doubled: false },
    { pips: [{ position: 1, status: "free" }, { position: 2, status: "free" }], sum: 8, doubled: false },
    { pips: [{ position: 0, status: "free" }, { position: 3, status: "free" }], sum: 9, doubled: false },
    { pips: [{ position: 6, status: "free" }, { position: 4, status: "free" }], sum: 10, doubled: false },
    { pips: [{ position: 5, status: "free" }, { position: 5, status: "free" }], sum: 11, doubled: false }
];

// let game = new Game(pieces);

// console.log(game.selectInitialSetOfPieces());
// console.log(game.checkWhoStarts(piece_1, piece_2));

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

    content += `<div class = "piece" id='${piece.pips[0].position}${piece.pips[1].position}'> 
    <div class = "div_face_1 pip_${piece.pips[0].position}">
    ${face1}
    </div>
    </div>`;

    face1 = ``;

    console.log(content);

});

    piece_2.forEach(piece => {
        if (piece.pips[1].position === 1) {
            face2 = `<div class='middle'>
        <div class='face_2'></div>
        </div>`;
        }
        if (piece.pips[1].position === 2) {
            face2 = `<div class='start'>
         <div class='face_2'></div>
         </div>
         <div class='end'>
         <div class='face_2'></div>
         </div>`;
        }
        if (piece.pips[1].position === 3) {
            face2 = `<div class='start'>
         <div class='face_2'></div>
         </div>
         <div class='middle'>
         <div class='face_2'></div>
         </div>
         <div class='end'>
         <div class='face_2'></div>
         </div>`;
        }
        if (piece.pips[1].position === 4) {
            face2 = `<div class='start'>
         <div class='face_2'></div>
         <div class='face_2'></div>
         </div>
         <div class='end'>
         <div class='face_2'></div>
         <div class='face_2'></div>
         </div>`;
        }
        if (piece.pips[1].position === 5) {
            face2 = `<div class='start'>
         <div class='face_2'></div>
         <div class='face_2'></div>
         </div>
         <div class='middle'>
         <div class='face_2'></div>
         </div>
         <div class='end'>
         <div class='face_2'></div>
         <div class='face_2'></div>
         </div>`;
        }
        if (piece.pips[1].position === 6) {
            face2 = `<div class='start'>
         <div class='face_2'></div>
         <div class='face_2'></div>
         </div>
         <div class='middle'>
         <div class='face_2'></div>
         <div class='face_2'></div>
         </div>
         <div class='end'>
         <div class='face_2'></div>
         <div class='face_2'></div>
         </div>`;
        }

    content += `<div class = "piece" id='${piece.pips[0].position}${piece.pips[1].position}'>
    <div class = "div_face_2 pip_${piece.pips[1].position}">
    ${face2}
    </div>
    </div>`;

        face2 = ``;

        console.log(content);

    });

    player_2.innerHTML = content;
    console.log(player_2);


