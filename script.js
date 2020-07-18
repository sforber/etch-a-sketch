const container = document.querySelector("#container");
var gridSize = 16;

function createCells(size){   
    for (i = 0; i < size; i++){
        var row = document.createElement('div');
        row.className = "row";
        container.appendChild(row);
        for (j = 0; j < size; j++){
            var cell = document.createElement('div');
            cell.className = "squares";
            cell.style.width = (640/size) + "px";
            cell.style.height= (640/size) + "px";
            row.appendChild(cell);
        }
        
    }
}

function createGrid(){
    container.innerHTML = "";
    gridSize = prompt("Enter the width/height of the grid (i.e- 16 for 16x16, between 0 and 64).");
    while (gridSize > 64 || gridSize < 1){
        gridSize = prompt("Enter a value between 0 and 64: ");
    }
    createCells(gridSize);
}

function drawEvent(){
    elements = Array.from(document.querySelectorAll('.squares'));
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            console.log("YES");
            element.style.backgroundColor = "black";
        });
    });
}

const reset = document.querySelector("#reset");
reset.addEventListener('click', () =>{
    elements = Array.from(document.querySelectorAll('.squares'));
    elements.forEach((element) => {
        element.style.backgroundColor = "white";
    });
    drawEvent();
});

const changeSize = document.querySelector("#size");
changeSize.addEventListener('click', () =>{
    createGrid();
    drawEvent();
});

createCells(gridSize);
drawEvent();


