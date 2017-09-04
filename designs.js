//event listener to override default action of form submission
document.getElementById("sizePicker").addEventListener("submit",function (event) {
        event.preventDefault();
        makeGrid();
        return;
});

// Select color input
const colorPicker = document.getElementById("colorPicker");

// Select size input
const grid_height_input = document.getElementById("input_height");
const grid_width_input = document.getElementById("input_width");

//select table
const table = document.getElementById("pixel_canvas");

//get the color from picker
let colorValue = colorPicker.value;

/**add event listener to color picker(without this color changed after was not picked)
 * event listener for the color picker when the value changed on the run
 * */
colorPicker.addEventListener("change", update);

// When size is submitted by the user, call makeGrid()
function makeGrid() {
   
    const grid_height = grid_height_input.value;
    const grid_width = grid_width_input.value;

    while (table.hasChildNodes()) {
        table.removeChild(table.lastChild);
    }
    
    for (var countRow = 0; countRow < grid_height; countRow += 1) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        for (var countCol = 0; countCol < grid_width; countCol += 1) {
            const td = document.createElement("td");
             tr.appendChild(td);
             td.addEventListener("click",ChangeBackGround);
        }
    }
    return;
}

function ChangeBackGround() {
    this.style.backgroundColor = colorValue;
    return;
}

function update(){
    colorValue = event.target.value;
    return;
}



