<script>
let pos = 0;
let interval = setInterval(() => {
pos += 2;
document.getElementById("animate").style.left = pos + "px";
if (pos > 300) clearInterval(interval);
}, 20);
</script>