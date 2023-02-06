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