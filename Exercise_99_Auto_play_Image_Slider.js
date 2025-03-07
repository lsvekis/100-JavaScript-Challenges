<script>
let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;
setInterval(() => {
currentIndex = (currentIndex + 1) % images.length;
document.getElementById("autoSlider").src = images[currentIndex];
}, 2000);
</script>