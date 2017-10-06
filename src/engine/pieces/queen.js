import Piece from './piece';
import Square from "../square";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current_row = board.findPiece(this).row
        let current_col = board.findPiece(this).col
        let b_size = board.board.length
        let Available_Moves = []
        for (let i = 0; i < b_size; i++) {
            for (let j = 0; j < b_size; j++) {
                if (((i - current_row === j - current_col) || (i - current_row === -j + current_col)
                        || (i === current_row) || (j === current_col))
                    && ((i !== current_row) || (j !== current_col))) {
                    Available_Moves.push(new Square(i, j))
                }
            }
        }
        return Available_Moves.filter(square => this.isThereAPieceInTheWay(board,square,current_row,current_col))
    }
}
