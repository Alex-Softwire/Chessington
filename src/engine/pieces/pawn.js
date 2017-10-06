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
        const upleftsquare = new Square(current_row+1*whiteBlackMultiplier,current_col+1)
        const uprightsquare = new Square(current_row+1*whiteBlackMultiplier,current_col-1)
        AvailableMoves = AvailableMoves.filter(square => square.isOffBoard(board))
            .filter(square => this.isThereAPieceInTheWay(board,square,current_row,current_col))
            .filter(square => square.isThereAnEmptySpace(board,this.player))
        if (upleftsquare.isOffBoard(board))
        {
            if (!upleftsquare.isThereAnEmptySpace(board)) {
                if (upleftsquare.isThereATakeablePieceOrEmptySpace(board,this.player)) {
                    AvailableMoves.push(upleftsquare)
                }
            }

        }
        if (uprightsquare.isOffBoard(board)) {
            if (!uprightsquare.isThereAnEmptySpace(board)) {
                if (uprightsquare.isThereATakeablePieceOrEmptySpace(board,this.player)) {
                    AvailableMoves.push(uprightsquare)
                }
            }
        }

        return AvailableMoves
    }

}
