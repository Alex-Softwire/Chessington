import Piece from './piece';
import Square from "../square";
export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = []
        let rookMovementDirections = [[-1,0],[0,1],[0,-1],[1,0]]
        rookMovementDirections.forEach(direction =>
            availableMoves = availableMoves.concat(this.getMovesInDirection(direction[0],direction[1],board))
        )
        return availableMoves
    }
}
