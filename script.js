let button = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");

button.addEventListener("click", () => {
    let myItem = input.value.trim();
    if(myItem === "") return;

let listItem = document.createElement("li");
let listText = document.createElement("span");
let listBtn = document.createElement("button");

listText.textContent = myItem;
listBtn.textContent = "delete";

listItem.appendChild(listText);
listItem.appendChild(listBtn);
list.appendChild(listItem);

listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
});

input.value = "";
input.focus();
});

