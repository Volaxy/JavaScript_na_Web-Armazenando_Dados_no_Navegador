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
    
    createElement(newItem);

    itens.push(newItem);

    localStorage.setItem("itens", JSON.stringify(itens));
});

function createElement(item) {
    const $newItem = document.createElement("li");
    $newItem.classList.add("item");

    const $itemNumber = document.createElement("strong");
    $itemNumber.innerHTML = item.quantity;

    $newItem.appendChild($itemNumber);
    $newItem.innerHTML += item.name;

    $list.appendChild($newItem);
}