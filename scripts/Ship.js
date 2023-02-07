class Ship {
    constructor(length, name, position){
        this.length = length;
        this.name = name;
        this.position = position;
        this.hits = 0;
    }

    hit(){
        this.hits += 1;
    }

    isSunk(){
        if(this.hits === this.length) return true;
        return false;
    }
}

export default Ship;