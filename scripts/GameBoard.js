class GameBoard{
    constructor(){
        const boardMaxX = 10;
        const boardMaxY = 10;
        this.gameBoard = Array(boardMaxY).fill(null).map(() => Array(boardMaxX).fill(null));
    }
}

export default GameBoard;