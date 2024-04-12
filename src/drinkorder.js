document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#submit-btn");
    button.addEventListener("click", submitOrder);  
    if (!button) return; 
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
})
