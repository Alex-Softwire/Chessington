import Piece from './piece';
import Square from "../square";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentRow = board.findPiece(this).row
        let currentCol = board.findPiece(this).col
        let boardSize = board.board.length
        let availableMoves = []
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (((i - currentRow === j - currentCol) || (i - currentRow === -j + currentCol) //diagonals
                        || (i === currentRow) || (j === currentCol))  //horizontals
                    && ((i !== currentRow) || (j !== currentCol))) {   //not null move
                    availableMoves.push(new Square(i, j))
                }
            }
        }
        return availableMoves.filter(square => this.areThereNoPiecesInTheWay(board,square,currentRow,currentCol))
            .filter(square => square.containsATakeablePiece(board,this.player) || square.isThisAnEmptySpace(board))
    }
}
