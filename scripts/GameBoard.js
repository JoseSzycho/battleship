class GameBoard{
    constructor(){
        const boardMaxX = 10;
        const boardMaxY = 10;
        this.gameBoard = Array(boardMaxY).fill(null).map(() => Array(boardMaxX).fill(null));
    }

    placeShip(x, y, ship){

        let length = ship.length;
        let position = ship.position;
        let classOfShip = ship.name;

        for(let i = 0; i < length; i++){ //placing ship
            position == "horizontal" ? this.gameBoard[x + i][y] = classOfShip : this.gameBoard[x][y + i] = classOfShip;
        }
          
        this.setDeathSpace();

    }

    setDeathSpace(){

        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                if(typeof this.gameBoard[j][i] == "string"){
                    try{
                        if(typeof this.gameBoard[j][i + 1] != "string") this.gameBoard[j][i + 1] = 0;
                    }catch{
                    }
                    try{
                        if(typeof this.gameBoard[j][i - 1] != "string" ) this.gameBoard[j][i - 1] = 0;
                    }catch{
                    }
                    try{
                        if(typeof this.gameBoard[j + 1][i] != "string") this.gameBoard[j + 1][i] = 0;
                    }catch{
                    }
                    try{
                        if(typeof this.gameBoard[j - 1][i] != "string") this.gameBoard[j - 1][i] = 0;
                    }catch{
                    }
                    try{
                        if(typeof this.gameBoard[j + 1][i + 1] != "string") this.gameBoard[j + 1][i + 1] = 0;
                    }catch{
                    }
                    try{
                        if(typeof this.gameBoard[j + 1][i - 1] != "string" ) this.gameBoard[j + 1][i - 1] = 0; 
                    }catch{
                    }
                    try{
                        if(typeof this.gameBoard[j - 1][i + 1] != "string") this.gameBoard[j - 1][i + 1] = 0;
                    }catch{
                    }
                    try{
                        if(typeof this.gameBoard[j - 1][i - 1] != "string" ) this.gameBoard[j - 1][i - 1] = 0;
                    }catch{
                    }
                }
            }
        }

        /*
        //Placing deathspace so we can´t place a ship nexto
        for(let i = 0; i < 10; i++){
            for( let j = 0; j < 10; j++){
                if(typeof this.gameBoard[j][i] == "string") continue;
                try{
                    //placing deathspace in the laterals
                    if(typeof this.gameBoard[j][i + 1] == "string") this.gameBoard[j][i] = 0; //a string is signal of a ship
                    if(typeof this.gameBoard[j][i - 1] == "string") this.gameBoard[j][i] = 0;
                    if(typeof this.gameBoard[j + 1][i] == "string") this.gameBoard[j][i] = 0;
                    if(typeof this.gameBoard[j - 1][i] == "string") this.gameBoard[j][i] = 0;
                    //placing deatspace in the corners
                    if(typeof this.gameBoard[j + 1][i + 1] == "string") this.gameBoard[j][i] = 0;
                    if(typeof this.gameBoard[j + 1][i - 1] == "string") this.gameBoard[j][i] = 0;
                    if(typeof this.gameBoard[j - 1][i + 1] == "string") this.gameBoard[j][i] = 0;
                    if(typeof this.gameBoard[j - 1][i - 1] == "string") this.gameBoard[j][i] = 0;
                }catch{
                    
                }
            }
        }
    */
 
    }

    receiveAttack(x, y){
       return typeof this.gameBoard[x][y] == "string" ? this.gameBoard[x][y] : null;
    }

    canPlaceShip(x, y, ship){
        let length = ship.length;
        let position = ship.position;
        if(position == "horizontal"){
            if( x + length > 10) return false; //if ships goes outside the board
            for(let i = 0; i < length; i++){
                if(this.gameBoard[x + i][y] != null) return false; //if any position is ocupied or inside a deathspace
            }

        }
        if(position == "vertical"){
            if( y + length > 10) return false;
            for(let i = 0; i < length; i++){
                if(this.gameBoard[x][y + i] != null) return false;
            }
        }
        return true; //can place ship
    }
}

export default GameBoard;