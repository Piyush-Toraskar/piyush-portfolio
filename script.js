function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    document.querySelector('.dark-mode-toggle').textContent =
        document.body.classList.contains('dark') ? '☀️' : '🌙';
}
window.onload = function() {
    if(localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        document.querySelector('.dark-mode-toggle').textContent = '☀️';
    }
};
