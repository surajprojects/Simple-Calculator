function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

const calDisplay = document.querySelector("#calDisplay");
const btnZero = document.querySelector("#btnZero");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const btnFour = document.querySelector("#btnFour");
const btnFive = document.querySelector("#btnFive");
const btnSix = document.querySelector("#btnSix");
const btnSeven = document.querySelector("#btnSeven");
const btnEight = document.querySelector("#btnEight");
const btnNine = document.querySelector("#btnNine");
const btnClear = document.querySelector("#btnClear");
const btnPoint = document.querySelector("#btnPoint");

btnClear.addEventListener("click", () => {
    calDisplay.textContent = "Cleared";
});

btnZero.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 0;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 0;
    }
});

btnOne.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 1;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 1;
    }
});

btnTwo.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 2;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 2;
    }
});

btnThree.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 3;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 3;
    }
});

btnFour.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 4;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 4;
    }
});

btnFive.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 5;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 5;
    }
});

btnSix.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 6;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 6;
    }
});

btnSeven.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 7;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 7;
    }
});

btnEight.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 8;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 8;
    }
});

btnNine.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + 9;
    }
    else {
        calDisplay.textContent = calDisplay.textContent + 9;
    }
});

btnPoint.addEventListener("click", () => {
    if (calDisplay.textContent === "Cleared") {
        calDisplay.textContent = "";
        calDisplay.textContent = calDisplay.textContent + ".";
    }
    else {

        calDisplay.textContent = calDisplay.textContent + ".";
    }
});

