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