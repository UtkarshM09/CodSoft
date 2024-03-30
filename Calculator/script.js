document.addEventListener("DOMContentLoaded", function () {
  let displayValue = "";
  const display = document.getElementById("display");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const decimalButton = document.querySelector(".decimal");
  const equalButton = document.querySelector(".equal");

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      displayValue += button.textContent;
      updateDisplay();
    });
  });

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      displayValue += button.textContent;
      updateDisplay();
    });
  });

  clearButton.addEventListener("click", () => {
    clearDisplay();
  });

  decimalButton.addEventListener("click", () => {
    if (!displayValue.includes(".")) {
      displayValue += ".";
      updateDisplay();
    }
  });

  equalButton.addEventListener("click", () => {
    try {
      displayValue = eval(displayValue);
      updateDisplay();
    } catch (error) {
      displayValue = "Error";
      updateDisplay();
    }
  });

  function updateDisplay() {
    display.value = displayValue;
  }

  function clearDisplay() {
    displayValue = "";
    updateDisplay();
  }
});
