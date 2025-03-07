<ul id="items">
<li>Apple</li>
<li>Banana</li>
<li>Cherry</li>
</ul>
<script>
document.getElementById("searchInput").addEventListener("keyup", function() {
let filter = this.value.toLowerCase();
document.querySelectorAll("#items li").forEach(item => {
let text = item.textContent.toLowerCase();
item.style.display = text.includes(filter) ? "" : "none";
});
});
</script>