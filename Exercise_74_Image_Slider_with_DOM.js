<button id="next">Next</button>
<script>
let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;
document.getElementById("next").addEventListener("click", function() {
index = (index + 1) % images.length;
document.getElementById("slider").src = images[index];
});
</script>