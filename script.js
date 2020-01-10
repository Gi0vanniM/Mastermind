
var attempts = 0;
var loc = 0;
var input = [];
// var answer = Array.from(words[0].toUpperCase());
var answer = [];
var selectedColor = null;

// rood, blauw, groen, orangje, geel, bruin, zwart, wit

// CREATE DIVS
for (var i = 11; i >= 0; i--) {
    for (var e = 0; e < 4; e++) {
        var cell = document.createElement("button");
        var cellID = i.toString() + "-" + e.toString();
        cell.id = cellID;
        cell.className = "node";
        // cell.onclick = "inputColor(" + cellID + ");";
        cell.setAttribute("onclick", "inputColor('" + cellID + "');");
        // document.body.appendChild(cell);
        document.getElementById("attempts").appendChild(cell);
        // cell.innerHTML = i + "-" + e;
    }
    var pins = document.createElement("div");
    pins.id = "pins-" + i;
    pins.className = "pins";
    document.getElementById("attempts").appendChild(pins);
    for (var e = 0; e < 4; e++) {
        var pin = document.createElement("div");
        pin.id = "pin-" + i + "-" + e;
        pin.className = "pin";
        document.getElementById("pins-" + i).appendChild(pin);
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
        if (attempts == 11) {
            alert("Helaas je hebt de code niet geraden.")
        }
        attempts++;

    } else {
        alert("")
    }
}

function selectColor(col) {
    selectedColor = col;
    console.log("selected color: " + col);
}

function inputColor(location) {
    console.log(location.toString());
    document.getElementById(location).style.backgroundColor = selectedColor;

    // loc++;
    //
    // if (loc == 4) {
    //     // next row
    //     loc = 0;
    //     if (attempts == 11) {
    //         // fail
    //         attempts = 0;
    //     }
    //     else {
    //         attempts++;
    //     }
    // }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}