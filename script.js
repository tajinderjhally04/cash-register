const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#message');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll('.note');

function displayMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hideMessage() {
    message.style.display = "";
}

checkButton.addEventListener("click", function validateBillAndCash() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);
        }
        else{
            displayMessage("So, you want to wash dishes?");
        }
    }
    else{
        displayMessage("Enter valid bill amount");
    }
});

function calculateChange(returnAmount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
        returnAmount = returnAmount % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}