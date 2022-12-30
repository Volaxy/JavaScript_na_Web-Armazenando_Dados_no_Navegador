const form = document.getElementById("novoItem");
const $list = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.elements["nome"].value;
    const quantity = event.target.elements["quantidade"].value;

    createElement(name, quantity);
});

function createElement(name, quantity) {
    const $newItem = document.createElement("li");
    $newItem.classList.add("item");

    const $itemNumber = document.createElement("strong");
    $itemNumber.innerHTML = quantity;

    $newItem.appendChild($itemNumber);
    $newItem.innerHTML += name;

    $list.appendChild($newItem);

    console.log($newItem);
}