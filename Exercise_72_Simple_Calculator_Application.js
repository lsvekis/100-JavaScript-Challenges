<input type="number" id="num2" placeholder="Number 2">
<button id="calcButton">Calculate Sum</button>
<script>
document.getElementById("calcButton").addEventListener("click", function() {
let n1 = parseFloat(document.getElementById("num1").value);
let n2 = parseFloat(document.getElementById("num2").value);
alert("Sum: " + (n1 + n2));
});
</script>