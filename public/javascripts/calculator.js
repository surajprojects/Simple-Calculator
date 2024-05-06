function add(x, y) {
    return x + y;
};

function sub(x, y) {
    return x - y;
};

function mul(x, y) {
    return x * y;
};

function div(x, y) {
    return x / y;
};

const conDisplay = document.querySelector("#conDisplay");
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
const btnOffOn = document.querySelector("#btnOffOn");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");
const btnEqual = document.querySelector("#btnEqual");
const btnBackspace = document.querySelector("#btnBackspace");

let x = 0;
let y = 0;
let result = 0;
let method = "Cleared";

btnBackspace.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent === "Cleared") {
            calDisplay.textContent = "";
        }
        else {
            const size = calDisplay.textContent.length;
            calDisplay.textContent = calDisplay.textContent.slice(0, (size - 1));
        }
    }
});

btnPlus.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        method = "plus";
        x = calDisplay.textContent;
        calDisplay.textContent = "";
    }
});

btnMinus.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        method = "minus";
        x = calDisplay.textContent;
        calDisplay.textContent = "";
    }
});

btnMultiply.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        method = "multiply";
        x = calDisplay.textContent;
        calDisplay.textContent = "";
    }
});

btnDivide.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        method = "divide";
        x = calDisplay.textContent;
        calDisplay.textContent = "";
    }
});

btnEqual.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (method == "plus") {
            y = calDisplay.textContent;
            result = add(parseInt(x), parseInt(y));
            calDisplay.textContent = result;
        }
        else if (method == "minus") {
            y = calDisplay.textContent;
            result = sub(parseInt(x), parseInt(y));
            calDisplay.textContent = result;
        }
        else if (method == "multiply") {
            y = calDisplay.textContent;
            result = mul(parseInt(x), parseInt(y));
            calDisplay.textContent = result;
        }
        else if (method == "divide") {
            y = calDisplay.textContent;
            result = div(parseInt(x), parseInt(y));
            calDisplay.textContent = result;
        }
        else {
            calDisplay.textContent = "ERROR";
        }
    }
});

btnOffOn.addEventListener("click", () => {
    if (btnOffOn.textContent === "OFF") {
        calDisplay.textContent = "";
        btnOffOn.textContent = "ON";
        conDisplay.classList.remove("bg-dark");
        conDisplay.classList.add("bg-light");
    }
    else {
        calDisplay.textContent = "";
        btnOffOn.textContent = "OFF";
        conDisplay.classList.remove("bg-light");
        conDisplay.classList.add("bg-dark");
    }
});

btnClear.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent === "Cleared") {
            calDisplay.textContent = "";
        }
        else {
            x = 0;
            y = 0;
            result = 0;
            method = "cleared";
            calDisplay.textContent = "Cleared";
        }
    }
});

btnZero.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent.length <= 14) {
                if (calDisplay.textContent === "Cleared") {
                    calDisplay.textContent = "";
                    calDisplay.textContent = calDisplay.textContent + 0;

                }
                else {
                    calDisplay.textContent = calDisplay.textContent + 0;

                }
            }
        }
    }
});

btnOne.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 1;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 1;

            }
        }
    }
});

btnTwo.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 2;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 2;

            }
        }
    }
});

btnThree.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 3;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 3;

            }
        }
    }
});

btnFour.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 4;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 4;

            }
        }
    }
});

btnFive.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 5;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 5;

            }
        }
    }
});

btnSix.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 6;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 6;

            }
        }
    }
});

btnSeven.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 7;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 7;

            }
        }
    }
});

btnEight.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 8;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 8;

            }
        }
    }
});

btnNine.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + 9;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + 9;

            }
        }
    }
});

btnPoint.addEventListener("click", () => {
    if (btnOffOn.textContent === "ON") {
        if (calDisplay.textContent.length <= 14) {
            if (calDisplay.textContent === "Cleared") {
                calDisplay.textContent = "";
                calDisplay.textContent = calDisplay.textContent + ".";

            }
            else if (calDisplay.textContent.includes(".")) {
                calDisplay.textContent = calDisplay.textContent;

            }
            else {
                calDisplay.textContent = calDisplay.textContent + ".";

            }
        }
    }
});



