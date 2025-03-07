<input type="email" id="email" placeholder="Enter your email">
<button type="submit">Submit</button>
</form>
<script>
document.getElementById("validateForm").addEventListener("submit", function(e) {
e.preventDefault();
let email = document.getElementById("email").value;
let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(pattern.test(email)) {
alert("Valid email!");
} else {
alert("Invalid email.");
}
});
</script>