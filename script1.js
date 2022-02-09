console.log("START");

const containerVar = document.querySelector("#container");


 // TURN THIS INTO A FUNCTION LIKE makeGrid(x,y)
let y = 0
while (y < 0) {
    //console.log("x is "+x);
    const itemCont = document.createElement("div");
    itemCont.classList.add("itemCont");
    
    let x = 0;
    while (x < 0) {
        const item = document.createElement("div");
        item.classList.add("sqrs")

        itemCont.appendChild(item);
        x++
    }
    containerVar.appendChild(itemCont);
    y++;
}

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
            rowCount++
        }

        containerVar.appendChild(itemCont);
        columnCount++
    }
}

makeGrid(8,8)