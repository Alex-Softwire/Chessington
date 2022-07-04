import {Board} from "./board.js"
export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }

    isThisAnEmptySpace(board) {
        return board.getPiece(this) === undefined;
    }

    isThisATakeablePiece(board) {
        if (!(this.isOnTheBoard(board)) || this.isThisAnEmptySpace(board)) {
            return false
        }
        else return (board.getPiece(this).player !== board.currentPlayer) && (board.getPiece(this).isCapturable === true);
    }

    isOnTheBoard(board) {
        return !((this.col >= board.board.length) || (this.row >= board.board.length) || (this.col < 0) || (this.row < 0));
    }

    getSquareInDirection(rowModifier,colModifier) {
        return new Square(this.row+rowModifier,this.col+colModifier)
    }

}
