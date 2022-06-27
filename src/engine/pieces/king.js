import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player,type) {
        super(player);
        this.isCapturable = false
    }

    getAvailableMoves(board) {
        let currentRow = board.findPiece(this).row
        let currentCol = board.findPiece(this).col
        let boardSize = board.board.length
        let availableMoves = []
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if ((Math.abs(i-currentRow)<=1&&Math.abs(j-currentCol)<=1)&&
                    ((i !== currentRow) || (j !== currentCol))) {
                    availableMoves.push(new Square(i, j))
                }
            }
        }
        return availableMoves.filter(square => square.containsATakeablePiece(board,this.player) || square.isThisAnEmptySpace(board))
    }
}
