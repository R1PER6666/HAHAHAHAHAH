function showScare() {
    const overlay = document.getElementById('overlay');
    const scream = document.getElementById('scream');
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    scream.play();
}
