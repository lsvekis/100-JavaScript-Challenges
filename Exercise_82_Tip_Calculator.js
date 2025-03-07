<input type="number" id="tip" placeholder="Tip %">
<button id="calculateTip">Calculate Tip</button>
<p>Tip Amount: <span id="tipAmount"></span></p>
<script>
document.getElementById("calculateTip").addEventListener("click", () => {
let bill = parseFloat(document.getElementById("bill").value);
let tipPercent = parseFloat(document.getElementById("tip").value);
let tip = bill * (tipPercent / 100);
document.getElementById("tipAmount").textContent = tip.toFixed(2);
});
</script>