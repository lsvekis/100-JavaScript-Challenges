<button id="addTask">Add Task</button>
<ul id="taskList"></ul>
<script>
document.getElementById("addTask").addEventListener("click", function() {
let task = document.getElementById("taskInput").value;
if(task) {
let li = document.createElement("li");
li.textContent = task;
document.getElementById("taskList").appendChild(li);
document.getElementById("taskInput").value = "";
}
});
</script>