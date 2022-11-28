
const numBtns = document.querySelectorAll(".numBtn");
const optBtns = document.querySelectorAll(".optBtn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");



let displayValue = "", num1, num2, opt;


//Number eventlistener
numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", () => {
        displayValue += numBtn.value;
        showDisplay(displayValue);
        console.log(displayValue);
    })
});

//Operation button
optBtns.forEach(optBtn => {
    optBtn.addEventListener("click", () => {
        if (num1 && opt) {
            num2 = displayValue;
            displayValue = operate(parseFloat(num1), parseFloat(num2), opt);
            showDisplay(displayValue);
        }
        num1 = displayValue;
        opt = optBtn.value;
        displayValue = "";
        /*showDisplay(displayValue);*/
        console.log(`num1 ${num1}    operation ${opt}`);
    })
});

//Equal button
equal.addEventListener("click", () => {
    num2 = displayValue;
    if (!num1 || !opt) {
        return;
    }else if(opt == "/" && num2 == 0 ){
        alert("Not divided by 0, gives infinity");
    }
    
    displayValue = operate(parseInt(num1), parseInt(num2), opt);
    showDisplay(displayValue);
    console.log(`num2 ${num2}`);
    console.log(`final  ${displayValue}`);
});

//clear button
clear.addEventListener("click", () => {
    displayValue = "";
    num1 = 0;
    num2 = 0;
    opt = "";
    showDisplay(displayValue);
});

// Functions
function showDisplay(val) {
    const display = document.querySelector(".display");
    display.textContent = val;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, opt) {
    switch (opt) {
        case "+":
            return add(num1, num2);
            break;

        case "-":
            return subtract(num1, num2);
            break;

        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }

}