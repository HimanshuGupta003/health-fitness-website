function calculatePayment() {
    const plan = document.getElementById("plan").value;
    const paymentField = document.getElementById("payment");
    
    let paymentAmount = 0;
    
    if (plan === "basic") {
        paymentAmount = 25;
    } else if (plan === "premium") {
        paymentAmount = 35;
    } else if (plan === "pro") {
        paymentAmount = 45;
    }
    
    paymentField.value = "$" + paymentAmount;
}

document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const gender = document.getElementById("gender").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const plan = document.getElementById("plan").value;
    const payment = document.getElementById("payment").value;
    
    if (name && email && number && gender && state && city && plan && payment) {
        alert("Thank you for joining Downtown Fitness!\n\nName: " + name + "\nEmail: " + email + "\nPlan: " + plan + "\nTotal Payment: " + payment);
        
        // Redirect to the home page (index.html) after submission
        window.location.href = "index.html";
    } else {
        alert("Please fill out all fields.");
    }
});
