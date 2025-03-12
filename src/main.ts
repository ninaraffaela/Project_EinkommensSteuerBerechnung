const userInput1 = document.querySelector(".user-input1") as HTMLInputElement;
const userInput2 = document.querySelector(".user-input2") as HTMLInputElement;
const output = document.querySelector(".output-area");
const form = document.querySelector("form");
const rb2023 = document.getElementById("2023") as HTMLInputElement;
const rb2024 = document.getElementById("2024") as HTMLInputElement;
const rbGrundtarif = document.getElementById("rb-1person") as HTMLInputElement; 
const rbSplittingtarif = document.getElementById("rb-2persons") as HTMLInputElement;


rbSplittingtarif.addEventListener("click", unlockUserInput2);

function unlockUserInput2 () {
    if (rbSplittingtarif && userInput2) {
        userInput2.classList.remove("hidden");
        console.log("rb clicked");
    }
}

rbGrundtarif.addEventListener("click", lockUserInput2);

function lockUserInput2 () {
    if (rbGrundtarif) {
        userInput2.classList.add("hidden");
    }
}

form?.addEventListener("submit", calculateTaxableIncome );

function calculateTaxableIncome(event: Event) {
    event.preventDefault();
    console.log("geht");
    unlockOutput();
}

function unlockOutput() {
    if (output) {
        output.classList.remove("hidden");
    }
}
