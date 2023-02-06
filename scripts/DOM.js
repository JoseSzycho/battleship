class DOM{
    static generateField(){
        
        const playingField = document.getElementById("playing-grid-load");
        const gridSize = 10;

        for(let y= 0; y < gridSize; y++){
            for(let x = 0; x < gridSize; x++){

                let div = document.createElement("div");
                div.className = "field-place";
                div.id = `${x}${y}`;
                playingField.appendChild(div);

            }
        }
    };
    
}

export default DOM;