import Pawn from '../../../src/engine/pieces/pawn';
import Player from "../../../src/engine/player";
import Square from "../../../src/engine/square";
import Board from "../../../src/engine/board"

describe('Pawn', () => {
    let board;
    beforeEach(() => { // Common code executed before each test.
        board = new Board();
    });
    it("Test 1: White Pawn (not at start)", () => {
        const pawn = new Pawn(Player.WHITE);
        const square = Square.at(3,4)
        board.setPiece(square,pawn)
        pawn.getAvailableMoves(board).should.eql([{row:4,col:4}])
    })
    it ("Test 1: White Pawn (at start)",() => {
        const pawn = new Pawn(Player.WHITE);
        const square = Square.at(1,1)
        board.setPiece(square,pawn)
        pawn.getAvailableMoves(board).should.eql([{row:2,col:1},{row:3,col:1}])
    })
    it ("Test 2: Black Pawn (at start)", () => {
        const pawn = new Pawn(Player.BLACK);
        const square = Square.at(6,1)
        board.setPiece(square,pawn)
        pawn.getAvailableMoves(board).should.eql([{row:5,col:1},{row:4,col:1}])

    })
});
