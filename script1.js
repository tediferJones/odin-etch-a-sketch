
const containerVar = document.querySelector("#container");

function makeGrid(rowTotal, columnTotal) {
    //console.log(rowTotal + " and " + columnTotal)
    let columnCount = 0
    while (columnCount < columnTotal) {
        const itemCont = document.createElement("div");
        itemCont.classList.add("itemCont");

        let rowCount = 0
        while (rowCount < rowTotal) {
            const item = document.createElement("div");
            item.classList.add("sqrs");

            itemCont.appendChild(item);
            
            item.addEventListener("mouseenter", () => {
                if (item.classList.contains("used") === false) {
                item.style.backgroundColor = "red";
                }
            })
            item.addEventListener("mouseleave", () => {
                if (item.classList.contains("used") === false) {
                    item.classList.add("used");
                    item.style.backgroundColor = funColors();
                }
            })
            rowCount++;
        }

        containerVar.appendChild(itemCont);
        columnCount++;
    }
}

makeGrid(16,16);

const resetBtn = document.querySelector("#resetBtn")
resetBtn.addEventListener("click", () => {
    const input = prompt("How big would you like the board to be?", "16")
    
    if (input <= 100 && input > 0) {
        while (containerVar.hasChildNodes()) {
            containerVar.removeChild(containerVar.firstChild)
        }
        makeGrid(input,input);
    } else {
        alert("You must input a number between 0 and 100 to resize the board")
    }
})

function funColors() {
    let colorNum = "#" + (((1<<23)*1.5)*Math.random() | 0).toString(16);
    return colorNum
}