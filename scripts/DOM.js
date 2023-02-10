import Ship from "./Ship.js";
import GameBoard from "./GameBoard.js";
const playerBoard = new GameBoard();

class DOM{

    constructor(){
        this.carrier = new Ship(5, "carrier", "horizontal");
        this.battleship = new Ship(5, "battleship", "horizontal");
        this.cruiser = new Ship(3, "cruiser", "horizontal");
        this.submarine = new Ship(3, "submarine", "horizontal");
        this.destroyer = new Ship(2, "destroyer", "horizontal");
        this.nextShip = this.carrier;
        
    }
    
    generateField(){

        const playingField = document.getElementById("playing-grid-load");
        const gridSize = 10;

        for(let y= 0; y < gridSize; y++){
            for(let x = 0; x < gridSize; x++){
                let div = document.createElement("div");
                div.className = "field-place";
                div.id = `${x}${y}`;
                div.addEventListener("mouseover", () => this.showShip(x, y))
                div.addEventListener("mouseout", () => this.removeShip(x, y))
                div.addEventListener("click", () => this.placeShip(x, y))
                playingField.appendChild(div); 

            }
        }

        document.getElementById("rotate-btn").addEventListener("click", () => {
            if(this.nextShip.position == "vertical") {
                this.nextShip.position = "horizontal"; 
                return;
             }
            if(this.nextShip.position == "horizontal") this.nextShip.position = "vertical";
        })
    };

    showShip(x, y){
       
            let color = "lime";
            if( !playerBoard.canPlaceShip(x, y, this.nextShip) ) color = "red";
        
            for(let i = 0; i < this.nextShip.length; i++){
                
               // if(x + i > 9 && !playerBoard.canPlaceShip(x, y, this.nextShip)) return;
               // if(y + i > 9 && !playerBoard.canPlaceShip(x, y, this.nextShip)) return;
    
                let el;
                this.nextShip.position == "horizontal" ? el = document.getElementById(`${x + i}${y}`) : el = document.getElementById(`${x}${y + i}`);
                if(el.style.background != "blue") el.style.background = color; 
                
            } 
         
    }

    removeShip(x, y){
        let color = "white";

        for(let i = 0; i < this.nextShip.length; i++){

            if(x + i > 9 && this.nextShip.position == "horizontal") return;
            if(y + i > 9 && this.nextShip.position == "vertical") return;

            let el;
            this.nextShip.position == "horizontal" ? el = document.getElementById(`${x + i}${y}`) : el = document.getElementById(`${x}${y + i}`);
            if(el.style.background != "blue") el.style.background = color; 
        } 
    }

    placeShip(x, y){
        if(playerBoard.canPlaceShip(x , y, this.nextShip)) {
            playerBoard.placeShip(x, y, this.nextShip);

            for(let i = 0; i < this.nextShip.length; i ++){
                let el;
                this.nextShip.position == "horizontal" ? el = document.getElementById(`${x + i}${y}`) : el = document.getElementById(`${x}${y + i}`);
                el.style.background = "blue"; 
            }

            if(this.nextShip.name == "carrier") {
                this.nextShip = Object.assign({}, this.battleship);
                return;
            }
            if(this.nextShip.name == "battleship"){
                this.nextShip = Object.assign({}, this.cruiser);
                return;
            }
             
            if(this.nextShip.name == "cruiser"){
                this.nextShip = Object.assign({}, this.submarine);
                return;
            }
            if(this.nextShip.name == "submarine"){
                this.nextShip = Object.assign({}, this.destroyer);
                return;
            }
            if(this.nextShip.name == "destroyer") alert("Start game");
        }
    }   
}

export default DOM;