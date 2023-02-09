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
    const ship = new Ship(length, classOfShip, position);

    test("Place 3 length ship at x=3, y=9 in horizontal", () => {
        playerGameBoard.placeShip(x, y, ship);
    })

    test("Find ship at y = 9 and x = [3, 4, 5]", () => {
        expect(playerGameBoard.receiveAttack(2,9)).toBe(null);
        expect(playerGameBoard.receiveAttack(3,9)).toBe(classOfShip);
        expect(playerGameBoard.receiveAttack(4,9)).toBe(classOfShip);
        expect(playerGameBoard.receiveAttack(5,9)).toBe(classOfShip);
        expect(playerGameBoard.receiveAttack(6,9)).toBe(null);
    })

    test("Cannot place ship next to previous one", () => {
        expect(playerGameBoard.canPlaceShip(3, 8, ship)).toBe(false);
    })

    test("Canplace ship", () => {
        expect(playerGameBoard.canPlaceShip(3, 7, ship)).toBe(true);
    })

})

    describe("Place multiple ships in and count occupied spaces", () => {
        //total of spaces occupied should be 18 for all ships
        const carrier = new Ship(5, "carrier", "horizontal");
        const battleship = new Ship(5, "battleship", "vertical");
        const cruiser = new Ship(3, "cruiser", "horizontal");
        const submarine = new Ship(3, "submarine", "horizontal");
        const destroyer =new Ship(2, "destroyer", "vertical");

        
        const countOccupiedSpaces = (board) => {
            let count = 0;
            for(let j = 0; j< 10; j++){
                for(let i = 0; i < 10; i++){
                    if(typeof(board.gameBoard[i][j]) == "string") count += 1;
                }
            }
            return count;
        };

        test("1 carrier and 1 submarine uses 8 spaces", () => {
            const board = new GameBoard();

            board.placeShip(0, 0, carrier);
            board.placeShip(0,2, submarine);

            expect(countOccupiedSpaces(board)).toBe(8);
        })

        test("place all ships in random order and uses 18 spaces", () => {
            const board = new GameBoard();
            board.randomPlace(carrier);
            board.randomPlace(battleship);
            board.randomPlace(cruiser);
            board.randomPlace(submarine);
            board.randomPlace(destroyer);

            expect(countOccupiedSpaces(board)).toBe(18);

        })

       
    })

