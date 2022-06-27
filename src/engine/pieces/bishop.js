import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current_row = board.findPiece(this).row
        let current_col = board.findPiece(this).col
        let Available_Moves = []
        for (let i = 0;i<8;i++) {
            if (i != current_col) {
                Available_Moves.push(new Square(current_row,i))
            }
            if (i != current_row) {
                Available_Moves.push(new Square(i,current_col))
            }
        }
    }
}
