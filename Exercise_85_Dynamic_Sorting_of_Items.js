<li>3</li>
<li>1</li>
<li>4</li>
<li>2</li>
</ul>
<button id="sortButton">Sort Numbers</button>
<script>
document.getElementById("sortButton").addEventListener("click", () => {
let list = document.getElementById("numberList");
let items = Array.from(list.getElementsByTagName("li"));
items.sort((a, b) => parseInt(a.textContent) - parseInt(b.textContent));
list.innerHTML = "";
items.forEach(item => list.appendChild(item));
});
</script>