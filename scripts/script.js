import DOM from "./DOM.js"
import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js";

//DOM.generateField();




//principal tree
{
    const board = new GameBoard();
    //create ship
    {
        
        let [x, y, length] = [1, 2, 5];
        const destroyer = new Ship(length, "destroyer", "horizontal")
        //place ship
        {
            if(board.canPlaceShip(x, y, destroyer)) board.placeShip(x, y, destroyer);
            console.table(board.gameBoard)
        }       
         x = 5;
         y = 4;
         length = 5
         const destroye = new Ship(length, "destroye", "vertical")
         destroye.position = "horizontal"
        //place ship
        {
            if(board.canPlaceShip(x, y, destroye)) board.placeShip(x, y, destroye);
            console.table(board.gameBoard)
        }
    }
}
