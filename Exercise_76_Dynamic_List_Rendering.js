<script>
let users = ["Alice", "Bob", "Charlie"];
users.forEach(user => {
let li = document.createElement("li");
li.textContent = user;
document.getElementById("userList").appendChild(li);
});
</script>