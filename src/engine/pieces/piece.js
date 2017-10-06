import Square from "../square.js"
export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasMoved = false
        this.isCapturable = true
    }

    isThereAPieceInTheWay(board,square,current_row,current_column) {
        let x_shift  = square.row - current_row
        let y_shift = square.col - current_column
        var x_mult = 0
        var y_mult = 0
        if (x_shift !== 0) {
            x_mult = Math.floor(x_shift/Math.abs(x_shift))
        }
        if (y_shift !== 0) {
            y_mult = Math.floor(y_shift/Math.abs(y_shift)) }
        for (let i = 1;i<Math.max(Math.abs(x_shift),Math.abs(y_shift));i++) {
            if (!(new Square(current_row+i*x_mult,current_column+i*y_mult).isThereAnEmptySpace(board))) {
                return false
            }
        }
        return true

    }
    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
