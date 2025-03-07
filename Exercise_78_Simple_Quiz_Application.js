<p>What is 2 + 2?</p>
<button data-answer="4">4</button>
<button data-answer="3">3</button>
</div>
<script>
document.querySelectorAll("#quiz button").forEach(button => {
button.addEventListener("click", function() {
if (this.getAttribute("data-answer") === "4") {
alert("Correct!");
} else {
alert("Try again.");
}
});
});
</script>