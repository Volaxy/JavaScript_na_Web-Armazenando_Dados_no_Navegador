const form = document.getElementById("novoItem");
const $list = document.getElementById("list");

const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(item => {
    createElement(item);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const $name = event.target.elements["nome"];
    const $quantity = event.target.elements["quantidade"];

    const name = $name.value;
    const quantity = $quantity.value;

    $name.value = "";
    $quantity.value = "";
    
    const newItem = {
        "name": name,
        "quantity": quantity,
    }
    
    const isThereItem = itens.find(item => item.name === newItem.name);
    if(isThereItem) {
        itens[itens.findIndex(item => item.name === newItem.name)] = newItem;

        updateItemInList(newItem);
    } else {
        createElement(newItem);

        itens.push(newItem);
    }

    localStorage.setItem("itens", JSON.stringify(itens));
});

function createElement(item) {
    const $newItem = document.createElement("li");
    $newItem.classList.add("item");

    // Quantity
    const $itemNumber = document.createElement("strong");
    $itemNumber.innerHTML = item.quantity;
    $itemNumber.dataset.id = item.name;

    // Name
    $newItem.appendChild($itemNumber);
    $newItem.innerHTML += item.name;

    // Delete Button
    $deleteButton = document.createElement("button");
    $deleteButton.innerHTML = "X";

    $deleteButton.addEventListener("click", function() {
        deleteElement(this.parentNode, item.name);
    });
    
    $newItem.appendChild($deleteButton);
    
    $list.appendChild($newItem);
}

function updateItemInList(updatedItem) {
    document.querySelector(`[data-id=${updatedItem.name}]`).innerHTML = updatedItem.quantity;
}

function deleteElement($item, name) {
    $item.remove();

    itens.splice(itens.findIndex(item => item.name === name), 1);

    localStorage.setItem("itens", JSON.stringify(itens));
}