const btnAbout = document.getElementById('btn-about');

btnAbout.addEventListener('mousemove', function(e) {
    const x = e.offsetX / this.offsetWidth * 100;
    const y = e.offsetY / this.offsetHeight * 100;

    btnAbout.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff0055, #f5831d)`;
});

btn.addEventListener('mouseleave', function() {
    btn.style.background = 'linear-gradient(45deg, #ff0055, #f5831d)';
});