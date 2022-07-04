import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pawnMovementDirection = +1
        if (this.player === Player.BLACK) {
            pawnMovementDirection = -1
        }
        let availableMoves = this.getForwardMoves(pawnMovementDirection,board)
        availableMoves = availableMoves.concat(this.getDiagonalMoves(pawnMovementDirection,board))
        return availableMoves
    }

    getForwardMoves(pawnMovementDirection,board) {
        let forwardMoves = []
        if (this.hasMoved === false) {
            forwardMoves = this.getMovesInDirection(0,pawnMovementDirection,board).slice(0,2)
        }
        else {
            forwardMoves = this.getMovesInDirection(0,pawnMovementDirection,board).slice(0,1)
        }
        return forwardMoves
    }

    getDiagonalMoves(pawnMovementDirection,board) {
        let diagonalMoves = []
        let possibleDiagonalMoves = [[pawnMovementDirection,1],[pawnMovementDirection,-1]]
        possibleDiagonalMoves.forEach((direction) => {
            const diagonalSquare =  board.findPiece(this).getSquareInDirection(direction[0],direction[1])
            if (diagonalSquare.isOnTheBoard(board) && diagonalSquare.isThisATakeablePiece(board,this.player)) {
                        diagonalMoves.push(diagonalSquare)
                }
            }
        )
        return diagonalMoves
    }
}
