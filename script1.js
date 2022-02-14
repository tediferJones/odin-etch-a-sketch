
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
            item.addEventListener("mouseover", () => item.classList.add("used"))
            rowCount++
        }

        containerVar.appendChild(itemCont);
        columnCount++
    }
}

makeGrid(16,16)

const resetBtn = document.querySelector("#resetBtn")
resetBtn.addEventListener("click", () => {
    const input = prompt("How big?", "16")

    while (containerVar.hasChildNodes()) {
        containerVar.removeChild(containerVar.firstChild)
    }

    makeGrid(input,input);
})