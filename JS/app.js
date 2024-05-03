// Function to calculate the total cost
function calculateOrder() {
    // Define base price
    const basePrice = 2.25;
    // Define tax rate
    const taxRate = 0.08; // Assume 8% tax rate

    // Get the number of scoops and convert it to an integer
    const scoops = parseInt(document.getElementById('scoops').value);
    // Initialize the variable to store the total cost of selected toppings
    let toppingsTotal = 0;

    // Get all toppings
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    // Loop through each topping
    toppings.forEach(topping => {
        // Switch statement to determine the cost of each topping and add it to the total toppings cost
        switch (topping.id) {
            case 'sprinkles':
                toppingsTotal += 0.5;
                break;
            case 'hotfudge':
                toppingsTotal += 1.25;
                break;
            case 'whippedcream':
                toppingsTotal += 0.25;
                break;
            case 'cherry':
                toppingsTotal += 0.25;
                break;
            case 'nuts':
                toppingsTotal += 0.25;
                break;
        }
    });

    // Subtotal = base price  + additional scoop costs + total toppings cost
    const subTotal = basePrice + (scoops - 1) * 1.25 + toppingsTotal;
    // Tax amount
    const tax = subTotal * taxRate;
    // Total = subtotal + tax
    const totalDue = subTotal + tax;

    // Order summary
    const orderSummary = `
        <p><strong>Base Price:</strong> $${subTotal.toFixed(2)}</p>
        <p><strong>Tax:</strong> $${tax.toFixed(2)}</p>
        <p><strong>Total Due:</strong> $${totalDue.toFixed(2)}</p>
    `;

    // Display summary
    document.getElementById('orderSummary').innerHTML = orderSummary;
}

