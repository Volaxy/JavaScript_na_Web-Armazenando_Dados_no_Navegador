const form = document.getElementById("novoItem");
const $list = document.getElementById("list");

const itens = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const $name = event.target.elements["nome"];
    const $quantity = event.target.elements["quantidade"];

    const name = $name.value;
    const quantity = $quantity.value;
    
    createElement(name, quantity);

    $name.value = "";
    $quantity.value = "";
});

function createElement(name, quantity) {
    const $newItem = document.createElement("li");
    $newItem.classList.add("item");

    const $itemNumber = document.createElement("strong");
    $itemNumber.innerHTML = quantity;

    $newItem.appendChild($itemNumber);
    $newItem.innerHTML += name;

    $list.appendChild($newItem);

    const newItem = {
        "name": name,
        "quantity": quantity,
    }

    itens.push(newItem);

    // The localStorage.setItem(KEY, VALUE) set a key with a value in the localStore of the browser, the key can be override by other value with the same key
    // The localStore only store data of the string type
    localStorage.setItem("item", JSON.stringify(itens));
}