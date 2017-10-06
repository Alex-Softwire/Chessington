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
        if (this.player === Player.WHITE) {
            if (board.findPiece(this).row === 1) {
                return new Array(new Square(current_row+1,current_col),
                new Square(current_row+2,current_col));
            }
            else {
                return new Array(new Square(current_row+1,current_col));
            }
        }
        else if (this.player === Player.BLACK) {
            if (board.findPiece(this).row === 6) {
                return new Array(new Square(current_row-1,current_col),
                    new Square(current_row-2,current_col));
            }
            else {
                return new Array(new Square(current_row-1,current_col));
            }
        }

    }
}
