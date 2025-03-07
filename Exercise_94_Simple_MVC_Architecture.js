<button id="updateBtn">Update</button>
<script>
// Model
let model = {
data: "Hello MVC"
};
// View
function render() {
document.getElementById("app").textContent = model.data;
}
// Controller
function updateData(newData) {
model.data = newData;
render();
}
document.getElementById("updateBtn").addEventListener("click", () => {
updateData("MVC updated!");
});
render();
</script>