import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = []
        let bishopMovementDirections = [[-1,1],[1,1],[-1,-1],[1,-1]]
        bishopMovementDirections.forEach(direction =>
            availableMoves = availableMoves.concat(this.getMovesInDirection(direction[0],direction[1],board))
        )
        return availableMoves
    }
}

