/**
 * Devosuit Ders Portalı — 100 Soruluk Sınav Motoru
 * Bağımlılıklar: questions.js (questionsList global değişkeni)
 */

let currentQuestionIndex = 0;
const userAnswers = {}; // kullanıcının seçimleri { index: chosenOption }

function initQuiz() {
    const navContainer = document.getElementById('quizNav');
    if (!navContainer) return;
    navContainer.innerHTML = '';

    for (let i = 0; i < questionsList.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'q-nav-btn';
        btn.textContent = i + 1;
        btn.id = 'qbtn_' + i;
        btn.onclick = (function(idx) {
            return function() { selectQuestion(idx); };
        })(i);
        navContainer.appendChild(btn);
    }

    loadQuestion(0);
}

function selectQuestion(idx) {
    loadQuestion(idx);
}

function loadQuestion(index) {
    if (questionsList.length === 0) return;
    currentQuestionIndex = index;
    const q = questionsList[index];

    // Nav butonlarını güncelle
    document.querySelectorAll('.q-nav-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    const currentBtn = document.getElementById('qbtn_' + index);
    if (currentBtn) currentBtn.classList.add('active');

    // Soru numarası ve kategori
    const questionNumberEl = document.getElementById('questionNumber');
    if (questionNumberEl) {
        questionNumberEl.textContent = 'Soru: ' + (index + 1) + ' / ' + questionsList.length;
    }

    const categoryRanges = [
        { max: 15,  label: 'Bölüm 1: Derse Giriş - Giriş & Temel Yapıtaşları' },
        { max: 30,  label: 'Bölüm 2: Mimari Düşünme & Ödünleşimler (Topic & Queue)' },
        { max: 45,  label: 'Bölüm 3: Modülerlik, SOLID, Cohesion, Coupling & Connascence' },
        { max: 60,  label: 'Bölüm 4: Mimari Kalite Öznitelikleri (Operational, Structural & Cross-Cutting)' },
        { max: 70,  label: 'Bölüm 5: Metrikler (Cyclomatic, LCOM, Distance) & Fitness Fonksiyonları (ArchUnit)' },
        { max: 80,  label: 'Bölüm 6: Bileşen Tabanlı Düşünme & Bileşen Bölümleme (Technical vs Domain)' },
        { max: Infinity, label: 'Bölüm 7: Mimari Stiller (Katmanlı, Boru Hattı, Eklenti, SOA, Mikroservisler)' }
    ];
    let catObj = categoryRanges.find(function(r) { return index < r.max; });
    let cat = catObj ? catObj.label : 'Yazılım Mimarisi';
    const questionCategoryEl = document.getElementById('questionCategory');
    if (questionCategoryEl) {
        questionCategoryEl.textContent = 'Kategori: ' + cat;
    }

    // Soru metni
    const questionTextEl = document.getElementById('questionText');
    if (questionTextEl) {
        questionTextEl.textContent = q.q;
    }

    // Seçenekler
    const optionsContainer = document.getElementById('optionsList');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E'];
        q.options.forEach(function(opt, oIdx) {
            const li = document.createElement('li');
            li.className = 'option-item';
            li.innerHTML =
                '<span class="option-badge">' + letters[oIdx] + '</span> <span>' + opt + '</span>';
            li.onclick = function() { selectOption(oIdx); };
            optionsContainer.appendChild(li);
        });
    }

    // Daha önce cevap verildiyse geri yükle
    const feedbackBox = document.getElementById('feedbackBox');
    if (feedbackBox) {
        feedbackBox.className = 'feedback-box';

        if (userAnswers[index] !== undefined) {
            const chosen = userAnswers[index];
            const optItems = optionsContainer.querySelectorAll('.option-item');
            optItems.forEach(function(item, oIdx) {
                if (oIdx === q.a) {
                    item.classList.add('correct');
                } else if (oIdx === chosen) {
                    item.classList.add('wrong');
                }
            });

            const feedbackText = document.getElementById('feedbackText');
            if (feedbackText) {
                feedbackText.textContent = q.desc;
            }
            feedbackBox.classList.add('show');
            if (chosen !== q.a) feedbackBox.classList.add('wrong-feedback');
        }
    }
}

function selectOption(oIdx) {
    if (userAnswers[currentQuestionIndex] !== undefined) return; // zaten cevaplandı

    userAnswers[currentQuestionIndex] = oIdx;
    const q = questionsList[currentQuestionIndex];
    const optItems = document.querySelectorAll('#optionsList .option-item');

    optItems.forEach(function(item, i) {
        item.onclick = null; // tekrar tıklamayı engelle
        if (i === q.a) {
            item.classList.add('correct');
        } else if (i === oIdx) {
            item.classList.add('wrong');
        }
    });

    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackText = document.getElementById('feedbackText');
    if (feedbackText) {
        feedbackText.textContent = q.desc;
    }
    if (feedbackBox) {
        feedbackBox.classList.add('show');
        if (oIdx !== q.a) feedbackBox.classList.add('wrong-feedback');
    }

    // Nav butonu rengini güncelle
    const navBtn = document.getElementById('qbtn_' + currentQuestionIndex);
    if (navBtn) navBtn.classList.add(oIdx === q.a ? 'correct' : 'wrong');
}

function navigateQuestion(direction) {
    const nextIdx = currentQuestionIndex + direction;
    if (nextIdx >= 0 && nextIdx < questionsList.length) {
        loadQuestion(nextIdx);
    }
}
