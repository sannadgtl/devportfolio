// drink order 
function submitOrder() {
    const flavour = document.querySelector('input[name="flavour"]:checked'); 
    const sizeInput = document.querySelector('input[name="size"]:checked'); 

    if (flavour && sizeInput) {
        const size = sizeInput.value; 
        switch (flavour.value) {
            case "cola": 
                document.querySelector("#order").textContent = `You have ordered a ${size} Cola`; 
                break; 
            case "lemon": 
                document.querySelector("#order").textContent = `You have ordered a ${size} Lemonade`; 
                break; 
            case "orange": 
                document.querySelector("#order").textContent = `You have ordered a ${size} Orangeade`; 
                break;
            default: 
        }
    } else if (flavour && !sizeInput) {
        document.querySelector("#order").textContent = `Please choose a drink size`; 
    } else if (!flavour && sizeInput) {
        document.querySelector("#order").textContent = `Please choose a drink flavour`;
    } else {
        document.querySelector("#order").textContent = `Please choose a drink size and flavour`; 
    }
}

const button = document.querySelector("#submit-btn");
button.addEventListener("click", submitOrder);  

// tip calculator
function calculateTotal() {
    let billAmount = parseFloat(document.getElementById("billAmount").value); 
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value)/100;

    if (billAmount >= 0.01 && tipPercentage >=0 && tipPercentage <= 1) {
        let totalTip = billAmount * tipPercentage; 
        let totalAmount = billAmount + totalTip; 

        document.getElementById("totalBill").textContent = `Your total bill (£${billAmount}) with ${tipPercentage * 100}% tip is: £${totalAmount.toFixed(2)}`; 
        document.getElementById("billAmount").value = ""; 
        document.getElementById("tipPercentage").value = ""; 
    } else {
        document.getElementById("totalBill").textContent = "Please enter valid numbers"; 
    }    
}

const tipButton = document.querySelector("#total-button"); 
tipButton.addEventListener("click", calculateTotal); 
