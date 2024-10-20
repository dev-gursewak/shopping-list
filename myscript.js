//retived three element from the element which is input, ol, and sumbit button
const shoppingList = document.querySelector("#shoppingList");
const visibleList = document.querySelector(".orderedList");
const btn = document.querySelector("#btn");


//created li, span and delete to append into visibleList


//function which runs when submit button is clicked
btn.onclick = function(){
    let currentValue = shoppingList.value;
    shoppingList.value = '';

    const list = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.textContent = `${currentValue} `;
    deleteButton.textContent = "delete";
    list.appendChild(span);
    list.appendChild(deleteButton);
    visibleList.appendChild(list);

    deleteButton.onclick = function() {
        deleteButton.parentNode.remove();
    }
    
    shoppingList.focus();

    deleteButton.style.cssText = `
        background-color: black;
        color: white;
        border-radius: 10px;
        padding: 4px;
    `;

    list.style.cssText = `
        margin: 10px;
    `;
}




