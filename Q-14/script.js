var visitorName = "A Qadir Khan"; 
var productTitle = "T-shirt"; 
var quantity = 5;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("order-message").innerText = 
        visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
});
