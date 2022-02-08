console.log("START");

const containerVar = document.querySelector("#container");

let y = 0
while (y < 5) {
    //console.log("x is "+x);
    const itemCont = document.createElement("div");
    itemCont.classList.add("itemCont");
    
    let x = 0;
    while (x < 4) {
        const item = document.createElement("div");
        item.classList.add("sqrs")

        itemCont.appendChild(item);
        x++
    }
    containerVar.appendChild(itemCont);
    y++;
}
  