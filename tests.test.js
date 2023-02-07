import Ship from "./scripts/Ship.js";
import GameBoard from "./scripts/GameBoard.js"

describe("Ship hit test", () =>{
    const ship = new Ship(3);

    test("It is not sunk", () => {
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    })
    
    test("It is not sunk", () => {
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    })
    
    test("It is sunk", () => {
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })
})

describe("Place ships in gameboard", () => {
    const playerGameBoard = new GameBoard();
    const [x, y, length, position, classOfShip] = [3, 9, 3, "horizontal", "destroyer"];

    test("Place 3 length ship at x=3, y=9 in horizontal", () => {
        playerGameBoard.placeShip(x, y, length, position, classOfShip);
    })

    test("Find ship at y = 9 and x = [3, 4, 5]", () => {
        expect(playerGameBoard.receiveAttack(2,9)).toBe(null);
        expect(playerGameBoard.receiveAttack(3,9)).toBe(classOfShip);
        expect(playerGameBoard.receiveAttack(4,9)).toBe(classOfShip);
        expect(playerGameBoard.receiveAttack(5,9)).toBe(classOfShip);
        expect(playerGameBoard.receiveAttack(6,9)).toBe(null);
    })

})