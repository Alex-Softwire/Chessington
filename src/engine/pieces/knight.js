import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentRow = board.findPiece(this).row
        let currentCol = board.findPiece(this).col
        let boardSize = board.board.length
        let Available_Moves = []
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
               if ((Math.abs(i-currentRow)===1&&Math.abs(j-currentCol)===2)||
                   ((Math.abs(i-currentRow)===2&&Math.abs(j-currentCol)===1))) {
                    Available_Moves.push(new Square(i, j))
                }
            }
        }
        return Available_Moves.filter(square => square.containsATakeablePiece(board,this.player) || square.isThisAnEmptySpace(board))
    }
}
