import Piece from './piece';
import Square from "../square";
export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentRow = board.findPiece(this).row
        let currentCol = board.findPiece(this).col
        let availableMoves = []
        for (let i = 0;i<board.board.length;i++) {
            if (i !== currentCol) {
                availableMoves.push(new Square(currentRow,i))
            }
            if (i !== currentRow) {
                availableMoves.push(new Square(i,currentCol))
            }
        }
        return availableMoves.filter(square => this.isThereAPieceInTheWay(board,square,currentRow,currentCol))
    }
}
