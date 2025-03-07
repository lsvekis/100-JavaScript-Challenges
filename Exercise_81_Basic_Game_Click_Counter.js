<p>Clicks: <span id="clickCount">0</span></p>
<script>
let count = 0;
document.getElementById("clickGame").addEventListener("click", () => {
count++;
document.getElementById("clickCount").textContent = count;
});
</script>