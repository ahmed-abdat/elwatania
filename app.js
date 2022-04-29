window.onload = function prelod() {
    setTimeout(() => {
        document.getElementById('loader').className = 'fade-out';
    }, 1500);

    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 2500);

}