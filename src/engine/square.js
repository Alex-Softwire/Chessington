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
        if (board.getPiece(this) === undefined) {
            return true
        }
        else {
            return false
        }
    }

    containsATakeablePiece(board) {
        if (this.isThisAnEmptySpace(board)) {
            return false
        }
        else if ((board.getPiece(this).player !== board.currentPlayer) && (board.getPiece(this).isCapturable === true )) {
            return true
        }
        else {
            return false
        }
    }
    isNotOffBoard(board) {
        if ((this.col >= board.board.length) || (this.row >= board.board.length) || (this.col < 0) || (this.row < 0)) {
            return false
        }
        else {
            return true
        }
    }

}
