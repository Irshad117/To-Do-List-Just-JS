// let container = document.createElement("div");
// container.style.width = "50%";
// container.style.height = "400px";
// container.style.border = "1px solid black";
// container.style.backgroundColor = "lightblue";
// container.style.marginLeft = "25%";
// container.style.marginTop = "50px";
// document.body.appendChild(container);

// let header = document.createElement("h1");
// header.innerHTML = "To Do List";
// header.style.color = "rgba(25,25,215,0.5)"; 
// header.style.fontSize = "40px";
// header.style.fontFamily = "sans-serif";
// header.style.fontWeight = "bold";
// container.appendChild(header);
// let input = document.createElement("input");
// input.type = "text";
// input.placeholder = "Enter a task";
// input.style.opacity = ".7";
// input.style.width = "200px";
// input.style.height = "30px";
// input.style.borderRadius = "10px";
// let addButton = document.createElement("button");
// let list = document.createElement("ul");
// container.appendChild(input);
// container.appendChild(addButton);
// container.appendChild(list);
// addButton.innerHTML = "Add";
// addButton.style.padding = "7px";
// addButton.style.borderRadius = "10px";
// addButton.style. 

// addButton.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerHTML = input.value;
//     list.appendChild(item);
//     input.value = "";
//     dltbtn = document.createElement("button");
//     dltbtn.innerHTML = "Delete";
//     item.appendChild(dltbtn);
//     dltbtn.addEventListener("click", function() {
//         item.remove();
//         });

// });


// const error = document.getElementsByClassName("error");
// const form = document.getElementsByClassName("form");
// const name = document.getElementById("text");
// const password = document.getElementById("password");
// const submit = document.getElementById("submit");

// form.addEventListener("submit", function(e){
//     console.log("submitt successfully submitted");

// });


function myValue(s1,s2){
    return (s1 + s2 )/ 2;
}

let result = myValue (12,4);
document.querySelector(".demo").innerHTML = result