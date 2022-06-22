const quantBox = document.querySelector("input#quant");
quantBox.oninput = calculatePrice;

function calculatePrice() {
    var quant = parseInt(quantBox.value);
    const priceBox = document.querySelector("input#price");
    var totalPrice = quant * 1500; //1500 == price of Google Glass (arbitrary value)
    if (!totalPrice) totalPrice = "0"; //if totalPrice == NaN
    priceBox.value = totalPrice;
}