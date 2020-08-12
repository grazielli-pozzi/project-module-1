const pieces = [
    {pips: [0, 0], sum: 0, doubled: true, status: free, player: undefined},
    {pips: [0, 1], sum: 1, doubled: false, status: free, player: undefined},
    {pips: [0, 2], sum: 2, doubled: false, status: free, player: undefined},
    {pips: [0, 3], sum: 3, doubled: false, status: free, player: undefined},
    {pips: [0, 4], sum: 4, doubled: false, status: free, player: undefined},
    {pips: [0, 5], sum: 5, doubled: false, status: free, player: undefined},
    {pips: [0, 6], sum: 6, doubled: false, status: free, player: undefined},
    {pips: [1, 1], sum: 2, doubled: true, status: free, player: undefined},
    {pips: [1, 2], sum: 3, doubled: false, status: free, player: undefined},
    {pips: [1, 3], sum: 4, doubled: false, status: free, player: undefined},
    {pips: [1, 4], sum: 5, doubled: false, status: free, player: undefined},
    {pips: [1, 5], sum: 6, doubled: false, status: free, player: undefined},
    {pips: [1, 6], sum: 7, doubled: false, status: free, player: undefined},
    {pips: [2, 2], sum: 4, doubled: true, status: free, player: undefined},
    {pips: [2, 3], sum: 5, doubled: false, status: free, player: undefined},
    {pips: [2, 4], sum: 6, doubled: false, status: free, player: undefined},
    {pips: [2, 5], sum: 7, doubled: false, status: free, player: undefined},
    {pips: [2, 6], sum: 8, doubled: false, status: free, player: undefined},
    {pips: [3, 3], sum: 6, doubled: true, status: free, player: undefined},
    {pips: [3, 4], sum: 7, doubled: false, status: free, player: undefined},
    {pips: [3, 5], sum: 8, doubled: false, status: free, player: undefined},
    {pips: [3, 6], sum: 9, doubled: false, status: free, player: undefined},
    {pips: [4, 4], sum: 8, doubled: true, status: free, player: undefined},
    {pips: [4, 5], sum: 9, doubled: false, status: free, player: undefined},
    {pips: [4, 6], sum: 10, doubled: false, status: free, player: undefined},
    {pips: [5, 5], sum: 10, doubled: true, status: free, player: undefined},
    {pips: [5, 6], sum: 11, doubled: false, status: free, player: undefined},
    {pips: [6, 6], sum: 12, doubled: true, status: free, player: undefined}
    ];   
    
const piece_1 = [
{pips: [0, 0], sum: 0, doubled: false},
{pips: [1, 1], sum: 2, doubled: false},
{pips: [0, 2], sum: 2, doubled: false},
{pips: [0, 3], sum: 3, doubled: false},
{pips: [0, 4], sum: 4, doubled: false},
{pips: [0, 5], sum: 5, doubled: false}
];

const piece_2 = [
{pips: [3, 4], sum: 7, doubled: false},
{pips: [6, 1], sum: 7, doubled: false},
{pips: [6, 2], sum: 8, doubled: false},
{pips: [6, 3], sum: 9, doubled: false},
{pips: [6, 4], sum: 10, doubled: false},
{pips: [6, 5], sum: 11, doubled: false}
];

let game = new Game(pieces);

console.log(game.selectInitialSetOfPieces());
console.log(game.checkWhoStarts(piece_1, piece_2));

