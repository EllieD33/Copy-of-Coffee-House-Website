document.getElementById('bars').addEventListener('click', function() {
    const bars = document.getElementById('bars');
    const menu = document.getElementById('burger-menu');
    const closeBtn = document.getElementById('close-btn');

    if (bars) {
        bars.addEventListener('click', function() {
            menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            menu.style.display = 'none';
        });
    }
});
