
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Pawn from '../../../src/engine/pieces/pawn'

describe('Pawn', () => {
    let board;
    beforeEach(() => { // Common code executed before each test.
        board = new Board();
    })

    it("Test 1: White Pawn (not at start)", () => {
        const pawn = new Pawn(Player.WHITE);
        const square = Square.at(3, 4)
        board.setPiece(square, pawn)
        pawn.getAvailableMoves(board).should.eql([{row: 4, col: 4}])
    })
    it("Test 1: White Pawn (at start)", () => {
        const pawn = new Pawn(Player.WHITE);
        const square = Square.at(1, 1)
        board.setPiece(square, pawn)
        pawn.getAvailableMoves(board).should.eql([{row: 2, col: 1}, {row: 3, col: 1}])
    })
    it("Test 2: Black Pawn (at start)", () => {
        const pawn = new Pawn(Player.BLACK);
        const square = Square.at(6, 1)
        board.setPiece(square, pawn)
        pawn.getAvailableMoves(board).should.eql([{row: 5, col: 1}, {row: 4, col: 1}])
    })
})

describe('white pawns', () => {
    let board;
    beforeEach(() => { // Common code executed before each test.
        board = new Board();
    })
    it('can move one square up', () => {
        const pawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(0, 0), pawn);

        const moves = pawn.getAvailableMoves(board);
    });
})

describe('black pawns', () => {
    let board;
    beforeEach(() => { // Common code executed before each test.
        board = new Board();
    })
    it('can move one square down', () => {
        const pawn = new Pawn(Player.BLACK);
        board.setPiece(Square.at(7, 7), pawn);

        const moves = pawn.getAvailableMoves(board);

        moves.should.deep.include(Square.at(6, 7));
    });

})

describe('white pawns', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can only move one square up if they have already moved', () => {
        const pawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(1, 0), pawn);
        pawn.moveTo(board, Square.at(2, 0));

        const moves = pawn.getAvailableMoves(board);

        moves.should.have.length(1);
        moves.should.deep.include(Square.at(3, 0));
    });

    it('can move one or two squares up on their first move', () => {
        const pawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(1, 7), pawn);

        const moves = pawn.getAvailableMoves(board);

        moves.should.have.length(2);
        moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);
    });

});

describe('black pawns', () => {

    let board;
    beforeEach(() => board = new Board(Player.BLACK));

    it('can only move one square down if they have already moved', () => {
        const pawn = new Pawn(Player.BLACK);
        board.setPiece(Square.at(6, 0), pawn);
        pawn.moveTo(board, Square.at(5, 0));

        const moves = pawn.getAvailableMoves(board);

        moves.should.have.length(1);
        moves.should.deep.include(Square.at(4, 0));
    });

    it('can move one or two squares down on their first move', () => {
        const pawn = new Pawn(Player.BLACK);
        board.setPiece(Square.at(6, 7), pawn);

        const moves = pawn.getAvailableMoves(board);

        moves.should.have.length(2);
        moves.should.deep.include.members([Square.at(4, 7), Square.at(5, 7)]);
    });

});
