console.log("START");

const containerVar = document.querySelector("#container");

//const item = document.createElement("div");
//item.classList.add("yeahthissomeshit");
//item.textContent = "oh yeah this some real shit";

//containerVar.appendChild(item);

let x = 0
while (x < 5) {
    console.log(x);
    const item = document.createElement("div");
    item.classList.add("sqrs")
    item.textContent = "ABCDEFG";

    containerVar.appendChild(item);
    x++;
}
  