//count down script
(function () {
    var counter = 10;
    var counterEl = document.getElementById('counter');
    var incrementEl = document.getElementById('increment')
    var interval = setInterval(function () {
        if (counter > 1) {
            counterEl.innerText = --counter;
            if (counter == 1) incrementEl.innerText = 'second';
        }
        else {
            clearInterval(interval);
            document.getElementById('message').innerText = "If your download still hasn't begun,";
            incrementEl.style.display = 'none';
            counterEl.style.display = 'none';
        }
    }, 1000);
})();

// download window script
(function () {
    window.location = "/download-casino";
})();