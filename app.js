let container = document.createElement("div");
container.style.width = "50%";
container.style.height = "400px";
container.style.border = "1px solid black";
container.style.backgroundColor = "lightblue";
container.style.marginLeft = "25%";
container.style.marginTop = "50px";
document.body.appendChild(container);

let header = document.createElement("h1");
header.innerHTML = "To Do List";
header.style.color = "rgba(25,25,215,0.5)"; 
header.style.fontSize = "40px";
header.style.fontFamily = "sans-serif";
header.style.fontWeight = "bold";
container.appendChild(header);
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a task";
input.style.opacity = ".7";
input.style.width = "200px";
input.style.height = "30px";
input.style.borderRadius = "10px";
let addButton = document.createElement("button");
let list = document.createElement("ul");
container.appendChild(input);
container.appendChild(addButton);
container.appendChild(list);
addButton.innerHTML = "Add";
addButton.style.padding = "7px";
addButton.style.borderRadius = "10px";

addButton.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerHTML = input.value;
    list.appendChild(item);
    input.value = "";
    dltbtn = document.createElement("button");
    dltbtn.innerHTML = "Delete";
    item.appendChild(dltbtn);
    dltbtn.addEventListener("click", function() {
        item.remove();
        });

});