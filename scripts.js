
// initiate a new grid
function initGrid(gridDiv, size, squares){

    let width = size/squares + 'px';
    
    // remove children
    gridDiv.innerHTML = "";
    
    for(let i = 0; i < squares; i++){
        let line = document.createElement("div"); 
        line.style.height = width;        
        line.classList.add("line");
        for(let j = 0; j < squares; j++){

            let col = document.createElement("div");
            col.setAttribute("x", i);
            col.setAttribute("y", j);
            col.classList.add("col");
            
            col.style.width = width;
            col.style.height = width;
            
            col.addEventListener("mouseover", function(e){            
                e.target.classList.add("black");
            });

            line.appendChild(col);
        }
        gridDiv.appendChild(line);
    }
}


// Resets the board and asks user if a new number of squares is needed
function reset(){
    let correct = false;
    let ninit = 30;
    let n = null;
    do {
        n = prompt("Type number of squares (max. 50):", 30);
        if(!n){
            break;
        }
        if (!isNaN(n) & n < 50) {
            correct = true;
            break;
        }
    } while (!correct);

    document.querySelectorAll(".col").forEach((e)=>{
        e.classList.remove("black");
    });

    n = correct ? n : ninit;

    initGrid(grid, 500, n);
}


// main 
const grid = document.querySelector("#grid");
initGrid(grid, 500, 30);
document.querySelector("#reset").addEventListener("click", reset);
