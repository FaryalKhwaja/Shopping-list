let button = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");

button.addEventListener("click", () => {
    let myItem = input.value.trim();
    if(myItem === "") return;

let listItem = document.createElement("li");
let listText = document.createElement("span");
let listBtn = document.createElement("button");
listBtn.style.padding = '5px';
listBtn.style.margin = "3px";
listBtn.style.border = "none";
listBtn.style.borderRadius = "3px";
listBtn.style.backgroundColor = "light grey";


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

