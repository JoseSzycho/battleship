import DOM from "./DOM.js";
import GameBoard from "./GameBoard.js";
import Ship from "./Ship.js"


const dom = new DOM();


dom.generateField();


/*
const board = new GameBoard();

const carrier = new Ship(5, "carrier", "horizontal");
const battleship = new Ship(5, "battleship", "vertical");
const cruiser = new Ship(3, "cruiser", "horizontal");
const submarine = new Ship(3, "submarine", "horizontal");
const destroyer =new Ship(2, "destroyer", "vertical");

const ships = [carrier, battleship, cruiser, submarine, destroyer];
ships.forEach(el => board.randomPlace(el));

console.table(board.gameBoard)
*/