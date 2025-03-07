<button data-page="home">Home</button>
<button data-page="about">About</button>
<button data-page="contact">Contact</button>
</nav>
<div id="content"></div>
<script>
const pages = {
home: "<h2>Home Page</h2><p>Welcome to the home page!</p>",
about: "<h2>About Us</h2><p>Learn more about us here.</p>",
contact: "<h2>Contact</h2><p>Contact us at example@example.com</p>"
};
document.querySelectorAll("nav button").forEach(btn => {
btn.addEventListener("click", () => {
let page = btn.getAttribute("data-page");
document.getElementById("content").innerHTML = pages[page];
});
});
</script>