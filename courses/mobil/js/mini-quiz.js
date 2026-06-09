/**
 * Devosuit Ders Portalı — Konu Sonu Mini Test Motoru
 * Bağımlılıklar: mini-quizzes.js (miniQuizzes global değişkeni)
 */

// Her proje için quiz durumunu tutar
// { projId: { currentIdx: 0, answers: {}, correctCount: 0, wrongCount: 0 } }
const miniQuizStates = {};

function initMiniQuizzes() {
    Object.keys(miniQuizzes).forEach(function(projId) {
        miniQuizStates[projId] = {
            currentIdx: 0,
            answers: {},
            correctCount: 0,
            wrongCount: 0
        };
        loadMiniQuestion(projId, 0);
    });
}

function loadMiniQuestion(projId, qIdx) {
    const state = miniQuizStates[projId];
    if (!state) return;

    state.currentIdx = qIdx;
    const questions = miniQuizzes[projId];
    const q = questions[qIdx];

    // İlerleme çubuğunu güncelle
    const progressBar = document.getElementById('mini_progress_bar_' + projId);
    if (progressBar) {
        progressBar.style.width = ((qIdx + 1) / questions.length * 100) + '%';
    }

    // Soru numarası ve skor
    const qNumEl = document.getElementById('mini_q_num_' + projId);
    if (qNumEl) {
        qNumEl.textContent = 'Soru ' + (qIdx + 1) + ' / ' + questions.length;
    }
    const scoreEl = document.getElementById('mini_score_' + projId);
    if (scoreEl) {
        scoreEl.textContent = 'Doğru: ' + state.correctCount + ' | Yanlış: ' + state.wrongCount;
    }

    // Soru metni
    const qTextDiv = document.getElementById('mini_q_text_' + projId);
    if (qTextDiv) qTextDiv.textContent = q.q;

    // Seçenekler
    const optionsUl = document.getElementById('mini_options_' + projId);
    if (optionsUl) {
        optionsUl.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];
        q.options.forEach(function(opt, oIdx) {
            const li = document.createElement('li');
            li.className = 'option-item';
            li.innerHTML =
                '<span class="option-badge">' + letters[oIdx] + '</span> <span>' + opt + '</span>';
            li.onclick = function() { selectMiniOption(projId, qIdx, oIdx); };
            optionsUl.appendChild(li);
        });
    }

    // Önceki cevabı geri yükle
    const feedbackDiv = document.getElementById('mini_feedback_' + projId);
    const feedbackTextP = document.getElementById('mini_feedback_text_' + projId);

    if (state.answers[qIdx] !== undefined) {
        const chosen = state.answers[qIdx];
        const optItems = document.querySelectorAll(
            '#mini_options_' + projId + ' .option-item'
        );
        optItems.forEach(function(item, oIdx) {
            if (oIdx === q.a) item.classList.add('correct');
            else if (oIdx === chosen) item.classList.add('wrong');
        });

        if (feedbackDiv && feedbackTextP) {
            feedbackDiv.style.display = 'block';
            feedbackDiv.className = 'feedback-box';
            if (chosen !== q.a) feedbackDiv.classList.add('wrong-feedback');
            feedbackTextP.textContent = q.desc;
        }
    } else {
        if (feedbackDiv) feedbackDiv.style.display = 'none';
    }
}

function selectMiniOption(projId, qIdx, oIdx) {
    const state = miniQuizStates[projId];
    const q = miniQuizzes[projId][qIdx];
    if (state.answers[qIdx] !== undefined) return;

    state.answers[qIdx] = oIdx;
    if (oIdx === q.a) state.correctCount++;
    else state.wrongCount++;

    loadMiniQuestion(projId, qIdx);
}

function navigateMiniQuiz(projId, direction) {
    const state = miniQuizStates[projId];
    const questions = miniQuizzes[projId];
    const nextIdx = state.currentIdx + direction;
    if (nextIdx >= 0 && nextIdx < questions.length) {
        loadMiniQuestion(projId, nextIdx);
    }
}
