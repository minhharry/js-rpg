const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");

const locations = [
    {
        name: "Town",
        button_text: ["Go to store", "Go to cave", "Fight dragon"],
        button_function: [goStore, goCave, fightDragon],
        text: "You enter the Town!"
    },
    {
        name: "Store",
        button_text: ["Buy 10 health (10 gold)", "Buy weapon (20 gold)", "Go to town"],
        button_function: [buyHealth, buyWeapon, goTown],
        text: "You enter the Store!"
    }
]

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location.button_text[0];
    button2.innerText = location.button_text[1];
    button3.innerText = location.button_text[2];
    button1.onclick = location.button_function[0];
    button2.onclick = location.button_function[1];
    button3.onclick = location.button_function[2];
    text.innerText = location.text;
}
function goStore() {
    console.log("[Debug] Go to store");
    update(locations[1]);
}
function buyHealth() {

}
function buyWeapon() {

}
function goTown() {
    update(locations[0]);
}
function goCave() {
    console.log("[Debug] Go to cave");
}

function fightDragon() {
    console.log("[Debug] Fight dragon")
}