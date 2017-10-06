import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
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
               if ((Math.abs(i-current_row)===1&&Math.abs(j-current_col)===2)||
                   ((Math.abs(i-current_row)===2&&Math.abs(j-current_col)===1))) {
                    Available_Moves.push(new Square(i, j))
                }
            }
        }
        return Available_Moves.filter(square => square.isThereATakeablePieceOrEmptySpace(board,this.player))
    }
}
