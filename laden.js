document.addEventListener('DOMContentLoaded', function() {
    var progress = document.querySelector('.progress');
    var loadingText = document.getElementById('loadingText');
    var width = 0;

    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            // You can add code here to hide the loading screen or transition to another page
        } else {
            width++;
            progress.style.width = width + '%';
            loadingText.textContent = width + '%';
        }
    }, 60); // Adjust the interval time to control the speed of the loading bar
});


