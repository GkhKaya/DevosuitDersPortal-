/**
 * Devosuit — Yazılım Mimarisi ve Tasarımı Ders Modülü
 * Sidebar navigasyon, arama, tema, quiz başlatma.
 */
'use strict';

const SECTION_ORDER = [
    'derse-giris',
    'mimari-dusunme',
    'modulerlik',
    'mimari-karakteristikler',
    'olcmeyi-yonetme',
    'bilesen-tabanli',
    'mimari-stiller',
    'exam-simulator',
];

let navObserver = null;

// ── Tema (flash önleme) ──────────────────────────────────────────────────────
(function () {
    if (localStorage.getItem('devosuit-theme') === 'light')
        document.documentElement.classList.add('light-theme');
})();

// ── Başlatma ─────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
    mountSections();
    applyStoredTheme();
});

function mountSections() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    const partials  = window.__partials || {};
    const frag      = document.createDocumentFragment();

    SECTION_ORDER.forEach(sid => {
        const html = partials[sid];
        if (!html) { console.warn('[Devosuit] Eksik partial:', sid); return; }
        const div = document.createElement('div');
        div.innerHTML = html;
        while (div.firstChild) frag.appendChild(div.firstChild);
    });

    container.appendChild(frag);

    if (window.Prism) requestAnimationFrame(() => Prism.highlightAll());
    initQuiz();
    initMiniQuizzes();
    initNavHighlight();
}

// ── Sidebar aktif link ────────────────────────────────────────────────────────
function initNavHighlight() {
    if (navObserver) navObserver.disconnect();
    const navLinks = document.querySelectorAll('.nav-links a');
    navObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = e.target.id;
                navLinks.forEach(l => l.classList.toggle('active',
                    l.getAttribute('href') === '#' + id));
            }
        });
    }, { rootMargin: '-10% 0px -80% 0px' });
    document.querySelectorAll('[id].project-section,[id].quiz-section')
            .forEach(s => navObserver.observe(s));
}

// ── Arama ────────────────────────────────────────────────────────────────────
function filterContent() {
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    document.querySelectorAll('.project-section').forEach(sec => {
        sec.style.display = (!q || sec.textContent.toLowerCase().includes(q)) ? '' : 'none';
    });
}

// ── Kod kopyalama ─────────────────────────────────────────────────────────────
function copyCode(btn) {
    const code = btn.closest('.code-tab-container')?.querySelector('code');
    if (!code) return;
    navigator.clipboard.writeText(code.innerText).then(() => {
        const o = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check text-accent"></i> Kopyalandı!';
        setTimeout(() => (btn.innerHTML = o), 2000);
    }).catch(() => {
        const r = document.createRange();
        r.selectNodeContents(code);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });
}

// ── Tema ─────────────────────────────────────────────────────────────────────
function toggleTheme() {
    const light = document.body.classList.toggle('light-theme');
    const icon  = light ? 'fa-sun'       : 'fa-moon';
    const label = light ? 'Aydınlık Mod' : 'Karanlık Mod';
    document.querySelectorAll('.theme-toggle').forEach(b => {
        b.innerHTML = `<i class="fas ${icon}"></i> <span>${label}</span>`;
    });
    localStorage.setItem('devosuit-theme', light ? 'light' : 'dark');
}

function applyStoredTheme() {
    if (localStorage.getItem('devosuit-theme') === 'light') {
        document.body.classList.add('light-theme');
        document.querySelectorAll('.theme-toggle').forEach(b => {
            b.innerHTML = '<i class="fas fa-sun"></i> <span>Aydınlık Mod</span>';
        });
    }
}
