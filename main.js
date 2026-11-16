function calculateChange () {
    let amountDue = Number(document.getElementById("amount-due").value);
    let amountReceived = Number(document.getElementById("amount-received").value);

    let change = amountReceived - amountDue;

    document.getElementById("change-due").textContent = "$" + change.toFixed(2);
    
    let dollars = Math.floor(change);
    document.getElementById("dollars-output").textContent = dollars;
    let totalCents = Math.round(amountReceived * 100) - Math.round(amountDue * 100);
    let remainingCents = totalCents % 100;
    let quarters = Math.floor(remainingCents / 25);
    document.getElementById("quarters-output").textContent = quarters;
    remainingCents = remainingCents % 25;
    let dimes = Math.floor(remainingCents / 10);
    document.getElementById("dimes-output").textContent = dimes;
    remainingCents = remainingCents % 10;
    let nickels = Math.floor(remainingCents / 5);
    document.getElementById("nickels-output").textContent = nickels;
    remainingCents = remainingCents % 5;
    let pennies = remainingCents;
    document.getElementById("pennies-output").textContent = pennies;
}
document.getElementById("calculate-change").onclick = calculateChange;