<script>
function handleClick() {
console.log("Clicked!");
}
const btn = document.getElementById("removeListener");
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
</script>