<script>
let items = ["Item 1", "Item 2", "Item 3"];
items.forEach(item => {
let li = document.createElement("li");
li.textContent = item;
document.getElementById("list").appendChild(li);
});
</script>