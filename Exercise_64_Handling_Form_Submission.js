<input type="text" id="inputField" placeholder="Type something...">
<button type="submit">Submit</button>
</form>
<script>
document.getElementById("myForm").addEventListener("submit", function(e) {
e.preventDefault();
let inputVal = document.getElementById("inputField").value;
console.log("Form submitted with:", inputVal);
});
</script>