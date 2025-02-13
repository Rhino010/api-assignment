setInterval(function() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    alert(seconds + " seconds have passed.")
}, 5000)