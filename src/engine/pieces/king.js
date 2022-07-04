import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player,type) {
        super(player);
        this.isCapturable = false
    }

    getAvailableMoves(board) {
        let availableMoves = []
        let kingMovementDirections = [[-1,1],[1,1],[-1,-1],[1,-1],[1,0],[-1,0],[0,-1],[0,1]]
        kingMovementDirections.forEach(direction =>
            availableMoves = availableMoves.concat(this.getMovesInDirection(direction[0],direction[1],board).slice(0,1))
        )
        return availableMoves
    }
}
