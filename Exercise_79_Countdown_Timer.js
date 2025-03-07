<script>
let timeLeft = 10;
let timerId = setInterval(() => {
timeLeft--;
document.getElementById("timer").textContent = timeLeft;
if(timeLeft <= 0) {
clearInterval(timerId);
alert("Time's up!");
}
}, 1000);
</script>