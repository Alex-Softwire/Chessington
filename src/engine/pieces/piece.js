import Square from "../square.js"
export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasMoved = false
        this.isCapturable = true
    }

    getMovesInDirection(colModifier, rowModifier, board) {
        let canMove = true
        let currentSquare = board.findPiece(this)
        let possibleMovesInDirection = []

        while(canMove) {
            currentSquare = currentSquare.getSquareInDirection(rowModifier,colModifier);

            if ((currentSquare.isOnTheBoard(board))&&(currentSquare.isThisAnEmptySpace(board))) {
                possibleMovesInDirection.push(currentSquare)
            }

            else if (currentSquare.isThisATakeablePiece(board)) {
                possibleMovesInDirection.push(currentSquare)
                canMove = false
            }

            else {
                canMove = false
            }
        }
        return possibleMovesInDirection;
    }



    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
