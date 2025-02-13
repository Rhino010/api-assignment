let num = 10;
let currentNum = document.getElementById('timer');

let countdown = setInterval(function() {
                    num --;
                    currentNum.textContent = 'Current Number is ' + num;
                    if (num <= 0) {
                        clearInterval(countdown);
                        currentNum.textContent = "Time is up."
                    }
                    console.log(num);
                    }, 1000);