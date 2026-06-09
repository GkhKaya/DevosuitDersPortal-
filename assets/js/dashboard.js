'use strict';

(function () {
    // Check local storage for theme
    const activeTheme = localStorage.getItem('devosuit-theme');
    if (activeTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    // Set theme toggle button text/icon initially
    updateThemeToggleUI(activeTheme === 'light');
    
    // Add event listeners to sidebar tabs and other buttons
    setupEventListeners();
})();

function toggleTheme() {
    const light = document.body.classList.toggle('light-theme');
    updateThemeToggleUI(light);
    localStorage.setItem('devosuit-theme', light ? 'light' : 'dark');
}

function updateThemeToggleUI(isLight) {
    const icon = isLight ? 'fa-sun' : 'fa-moon';
    const label = isLight ? 'Aydınlık Mod' : 'Karanlık Mod';
    document.querySelectorAll('.theme-toggle').forEach(b => {
        b.innerHTML = `<i class="fas ${icon}"></i> <span>${label}</span>`;
    });
}

// Search filtering logic for the course cards on dashboard
function filterDashboardCourses() {
    const query = document.getElementById('dashboardSearchInput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.dashboard-grid .course-card');
    
    cards.forEach(card => {
        // Skip the add-library card
        if (card.classList.contains('add-library-card')) {
            return;
        }
        
        const title = card.getAttribute('data-title').toLowerCase();
        const descText = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query) || descText.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Custom Alerts handler
function showAlert(title, message, iconClass = 'fa-info-circle') {
    const overlay = document.getElementById('alertOverlay');
    const titleEl = document.getElementById('alertTitle');
    const msgEl = document.getElementById('alertMessage');
    const iconContainer = overlay.querySelector('.alert-icon');
    
    if (iconContainer) {
        iconContainer.innerHTML = `<i class="fas ${iconClass}"></i>`;
    }
    titleEl.textContent = title;
    msgEl.textContent = message;
    overlay.classList.add('show');
}

function closeAlert() {
    document.getElementById('alertOverlay').classList.remove('show');
}

// Setup event listeners for tabs and actions
function setupEventListeners() {
    // Sidebar links (except courses)
    const notesTab = document.getElementById('tab-notes');
    const quizzesTab = document.getElementById('tab-quizzes');
    const archiveTab = document.getElementById('tab-archive');
    
    if (notesTab) {
        notesTab.addEventListener('click', function(e) {
            e.preventDefault();
            showAlert('Notlar', 'Tüm ders notlarının birleştirildiği merkezi Notlar paneli çok yakında hizmetinizde olacaktır. Şu an derslerin içerisindeki çalışma alanlarından notlara erişebilirsiniz.', 'fa-sticky-note');
        });
    }
    
    if (quizzesTab) {
        quizzesTab.addEventListener('click', function(e) {
            e.preventDefault();
            showAlert('Sınav Simülatörü', 'Merkezi Sınav Simülatörü sayesinde tüm derslerden karışık deneme testleri oluşturabileceksiniz. Şu an aktif derslerimizin içerisindeki "100 Soru Simülatör" özelliğini kullanabilirsiniz.', 'fa-file-signature');
        });
    }
    
    if (archiveTab) {
        archiveTab.addEventListener('click', function(e) {
            e.preventDefault();
            showAlert('Arşiv', 'Tamamlanan eski dönem dersleriniz ve notlarınız bu arşivde saklanacaktır.', 'fa-archive');
        });
    }
    
    // Buttons
    const newSessionBtn = document.getElementById('newSessionBtn');
    if (newSessionBtn) {
        newSessionBtn.addEventListener('click', function() {
            showAlert('Yeni Çalışma Seansı', 'Yapay zeka eşliğinde odaklanmış yeni bir çalışma seansı başlatma özelliği geliştirme aşamasındadır.', 'fa-plus');
        });
    }
    
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            showAlert('Ayarlar', 'Kişisel hesap ayarları ve portal tercihleri paneli çok yakında eklenecektir.', 'fa-cog');
        });
    }
    
    const supportBtn = document.getElementById('supportBtn');
    if (supportBtn) {
        supportBtn.addEventListener('click', function() {
            showAlert('Destek & Yardım', 'Herhangi bir sorun yaşarsanız destek talebi oluşturmak için bu panel aktif edilecektir.', 'fa-life-ring');
        });
    }
    
    const addLibraryBtn = document.getElementById('addLibraryCardBtn');
    if (addLibraryBtn) {
        addLibraryBtn.addEventListener('click', function() {
            showAlert('Kütüphaneye Ekle', 'Devosuit kütüphanesine yeni ders notu, PDF veya konu başlığı ekleme arayüzü çok yakında eklenecektir.', 'fa-plus');
        });
    }
    
    // Floating action buttons
    const fabTimer = document.getElementById('fabTimer');
    if (fabTimer) {
        fabTimer.addEventListener('click', function() {
            showAlert('Odaklanma Sayacı (Pomodoro)', 'Çalışmalarınızda verimliliği artıracak entegre Pomodoro zamanlayıcısı çok yakında alt bar üzerinden kontrol edilebilecektir.', 'fa-clock');
        });
    }
    
    const fabNotes = document.getElementById('fabNotes');
    if (fabNotes) {
        fabNotes.addEventListener('click', function() {
            showAlert('Hızlı Not Al', 'Portalın her yerinden erişebileceğiniz hızlı not alma ve taslak kaydetme çekmecesi çok yakında eklenecektir.', 'fa-edit');
        });
    }
    
    const fabFiles = document.getElementById('fabFiles');
    if (fabFiles) {
        fabFiles.addEventListener('click', function() {
            showAlert('Dosyalarım', 'Derslerinizde paylaşılan PDF, sunum ve kod dosyalarına hızlı erişim sekmesi çok yakında aktif olacaktır.', 'fa-file-alt');
        });
    }
    
    const fabAiSync = document.getElementById('fabAiSync');
    if (fabAiSync) {
        fabAiSync.addEventListener('click', function() {
            showAlert('Yapay Zeka Eşitlemesi (AI SYNC)', 'Yapay Zeka modülleri ile ders notlarınızı analiz ederek eksik konularınızı belirleyen ve soru tahminleri üreten AI Sync motoru arka planda kurulmaktadır.', 'fa-bolt');
        });
    }
}
