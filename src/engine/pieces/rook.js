import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let current_location = board.findPiece(this)
        console.log(current_location)
        return new Array(current_location);
    }
}
