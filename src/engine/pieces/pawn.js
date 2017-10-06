import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current_row = board.findPiece(this).row
        let current_col = board.findPiece(this).col
        let whiteBlackMultiplier = +1
        let AvailableMoves = []
        if (this.player === Player.BLACK) {
            whiteBlackMultiplier = -1
        }

        if (this.hasMoved === false) {
            AvailableMoves = [new Square(current_row+1*whiteBlackMultiplier,current_col),
                new Square(current_row+2*whiteBlackMultiplier,current_col)];
            }
        else {
            AvailableMoves = new Array(new Square(current_row+1*whiteBlackMultiplier,current_col));
        }
        return AvailableMoves.filter(square => square.isOffBoard(board))
            .filter(square => this.isThereAPieceInTheWay(board,square,current_row,current_col))
            .filter(square => square.isThereATakeablePiece(board,this.player))
    }
}
