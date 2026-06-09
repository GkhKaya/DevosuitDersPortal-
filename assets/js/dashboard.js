'use strict';
(function () {
    if (localStorage.getItem('devosuit-theme') === 'light')
        document.body.classList.add('light-theme');
})();
function toggleTheme() {
    const light = document.body.classList.toggle('light-theme');
    const icon  = light ? 'fa-sun' : 'fa-moon';
    const label = light ? 'Aydınlık Mod' : 'Karanlık Mod';
    document.querySelectorAll('.theme-toggle').forEach(b => {
        b.innerHTML = `<i class="fas ${icon}"></i> <span>${label}</span>`;
    });
    localStorage.setItem('devosuit-theme', light ? 'light' : 'dark');
}
