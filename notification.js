
document.getElementById("notify").textContent = "Notification incoming......"
setTimeout(function() {
    document.getElementById("notify").textContent = "You have been notified......"
}, 3000);

// Interesting tid bit. The first line runs and then gets replaced by the setTimeout function once the timer is up.