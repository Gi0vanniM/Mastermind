
var attempts = 0;
var loc = 0;
var input = [];
// var answer = Array.from(words[0].toUpperCase());
var answer = [];

// rood, blauw, groen, orangje, geel, bruin, zwart, wit

// CREATE DIVS
for (var i = 9; i >= 0; i--) {
    for (var e = 0; e < 4; e++) {
        var currentScene = document.createElement("div");
        currentScene.id = i + "-" + e;
        currentScene.className = "node";
        // document.body.appendChild(currentScene);
        document.getElementById("attempts").appendChild(currentScene);
        // currentScene.innerHTML = i + "-" + e;
    }
}

function start() {
    attempts = 0;

}

function check() {

    if (input.length == 5) {

        if (input.toString() == answer.toString()) {
            alert("Wow je hebt het geraden! Episch!");
        }

        // check answer

        putInColors(input);
        if (attempts == 9) {
            alert("Helaas je hebt de code niet geraden.")
        }
        attempts++;

    } else {
        alert("")
    }
}

function inputColor(color) {
    document.getElementById(attempts + "-" + loc).style.backgroundColor = color;
    loc++;

    if (loc == 4) {
        // next row
        loc = 0;
        if (attempts == 9) {
            // fail
        }
        else {
            attempts++;
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}