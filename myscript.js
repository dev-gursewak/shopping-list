const shoppingList = document.querySelector("#shoppingList");
const visibleList = document.querySelector(".orderedList");

const list = document.createElement("li");
list.textContent = shoppingList.value;

visibleList.appendChild(list)


alert(shoppingList.value);