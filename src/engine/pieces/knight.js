import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = []
        let knightMovementDirections = [[-1,2],[1,2],[1,-2],[-1,-2],[2,1],[-2,1],[2,-1],[-2,-1]]
        knightMovementDirections.forEach(direction =>
            availableMoves = availableMoves.concat(this.getMovesInDirection(direction[0],direction[1],board).slice(0,1))
        )
        return availableMoves
    }
}
