import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentRow = board.findPiece(this).row
        let currentCol = board.findPiece(this).col
        let whiteBlackMultiplier = +1
        let availableMoves = []
        if (this.player === Player.BLACK) {
            whiteBlackMultiplier = -1
        }

        if (this.hasMoved === false) {
            availableMoves = [new Square(currentRow+whiteBlackMultiplier,currentCol),
                new Square(currentRow+2*whiteBlackMultiplier,currentCol)];
            }
        else {
            availableMoves = new Array(new Square(currentRow+whiteBlackMultiplier,currentCol));
        }


        availableMoves = availableMoves.filter(square => square.isNotOffBoard(board))
            .filter(square => this.areThereNoPiecesInTheWay(board,square,currentRow,currentCol))
            .filter(square => square.isThisAnEmptySpace(board,this.player))

        for (let i = -1; i < 2;i = i+2) {
            const diagonalSquare = new Square(currentRow+whiteBlackMultiplier,currentCol+i)
            if (diagonalSquare.isNotOffBoard(board))
            {
                if (diagonalSquare.containsATakeablePiece(board,this.player)) {
                    availableMoves.push(diagonalSquare)
                }
            }
        }
        return availableMoves
    }

}
