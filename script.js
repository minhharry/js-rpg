const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");
const xpText = document.querySelector("#xpText");

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
    },
    {
        name: "Cave",
        button_text: ["Fight small monster", "Fight big monster", "Go to town"],
        button_function: [fightSmall, fightBig, goTown],
        text: "You enter the Cave!"
    },
    {
        name: "Win",
        button_text: ["----------", "----------", "----------"],
        button_function: [null, null, null],
        text: "You won the game!"
    },
    {
        name: "Lost",
        button_text: ["----------", "----------", "----------"],
        button_function: [null, null, null],
        text: "You lost the game!"
    }
]

let gold = 50;
let health = 100;
let weapon = 0;
let xp = 0;

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
    update(locations[1]);
}
function buyHealth() {
    if (gold >= 10) {
        health += 10;
        gold -= 10;
        healthText.innerText = health;
        goldText.innerText = gold;
        text.innerText = "You bought 10 health!";
    } else {
        text.innerText = "You don't have enough gold!";
    }

}
function buyWeapon() {
    if (weapon != 0) {
        text.innerText = "You already bought a weapon!";
        return;
    }
    if (gold < 20) {
        text.innerText = "You don't have enough gold!";
        return;
    }
    if (weapon == 0 && gold >= 20) {
        weapon = 1;
        gold -= 20;
        goldText.innerText = gold;
        text.innerText = "You bought a weapon!";
    }
}
function goTown() {
    update(locations[0]);
}
function goCave() {
    update(locations[2]);
}

function fightDragon() {
    if (weapon == 0) {
        text.innerText = "You don't have a weapon!";
        return;
    }
    if (Math.random() < 0.1) {
        update(locations[3]);
        return;
    }
    text.innerText = "You lost!";
    health -= 50;
    healthText.innerText = health;
    if (health <= 0) {
        update(locations[4]);
    }
}

function fightSmall() {
    if (Math.random() < 0.8) {
        text.innerText = "You won!";
        xp += 1;
        xpText.innerText = xp;
        gold += 10;
        goldText.innerText = gold;
    } else {
        text.innerText = "You lost!";
        health -= 10;
        healthText.innerText = health;
        if (health <= 0) {
            update(locations[4]);
        }
    }
}

function fightBig() {
    if (Math.random() < 0.5) {
        text.innerText = "You won!";
        xp += 2;
        xpText.innerText = xp;
        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText = "You lost!";
        health -= 20;
        healthText.innerText = health;
        if (health <= 0) {
            update(locations[4]);
        }
    }
}