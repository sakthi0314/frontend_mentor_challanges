import "./styles/main.scss";

// DOM
const billInput = document.getElementById("bill-input");
const customTipInput = document.getElementById("custom-tip");
const tipBtns = document.querySelectorAll("#tipVal");
const personInput = document.getElementById("no-of-person");
const error = document.getElementById("error");
const tip = document.getElementById("tip");
const totalTip = document.getElementById("total-tips");
const reset = document.getElementById("reset");
const personInputContainer = document.getElementById(
  "number-of-pepole-container"
);

// State
let billValue = 0.0;
let tipValue = 0.15;
let personValue = 1;

// Event's
billInput.addEventListener("input", setBillValue);
customTipInput.addEventListener("input", customTip);
personInput.addEventListener("input", noOfPerson);
reset.addEventListener("click", restAll);
tipBtns.forEach((tipBtn) => tipBtn.addEventListener("click", selectTip));

function setBillValue() {
  billValue = parseFloat(billInput.value);
  calcTip();
}

function selectTip(e) {
  // Remove prev active class
  tipBtns.forEach((tipBtn) => {
    tipBtn.parentElement.classList.remove("active");

    if (e.target.innerHTML === tipBtn.innerHTML) {
      tipBtn.parentElement.classList.add("active");
      tipValue = parseFloat(tipBtn.innerHTML) / 100;

      calcTip();
    }
  });

  // Clear Input
  customTipInput.value = "";
}

function customTip() {
  tipBtns.forEach((tipBtn) => tipBtn.classList.remove("active"));
  tipValue = parseFloat(customTipInput.value) / 100;
  calcTip();
}

function noOfPerson() {
  if (personInput.value == 0) {
    error.style.opacity = 1;
    personInputContainer.style.border = "2px solid red";
    setTimeout(() => {
      error.style.opacity = 0;
    }, 2000);
  } else {
    personValue = parseInt(personInput.value);
    personInputContainer.style.border = "2px solid hsl(172, 67%, 45%)";
    calcTip();
  }
}

function calcTip() {
  let bill = (billValue * tipValue) / personValue;
  let totalBill = (billValue * (tipValue + 1)) / personValue;

  tip.innerText = `$${bill.toFixed(2)}`;
  totalTip.innerText = `$${totalBill.toFixed(2)}`;
}

function restAll() {
  location.reload();
}
