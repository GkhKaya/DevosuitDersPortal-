/* Devosuit Partial — exam-simulator
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['exam-simulator'] = `<section id="exam-simulator" class="quiz-section card">
        <div class="section-header">
            <h2>Yazılım Mimarisi ve Tasarımı — 100 Soru Simülatörü</h2>
            <span class="path-badge danger-badge"><i class="fas fa-graduation-cap"></i> Final Sınavı Hazırlık</span>
        </div>
        <p class="section-desc">Müfredattaki 7 bölümün tamamını kapsayan, hocanın sınavda sorabileceği detayları içeren 100 soruluk simülatör. Yanıt verdikten sonra açıklama kutusu açılacaktır.</p>
        
        <div class="quiz-container">
            <div class="quiz-navigation-panel" id="quizNav">
                <!-- Nav buttons will load here -->
            </div>
            
            <div class="quiz-body">
                <div class="q-meta">
                    <span id="questionNumber">Soru Yükleniyor...</span>
                    <span id="questionCategory">Kategori</span>
                </div>
                
                <div class="q-text" id="questionText">Soru metni buraya gelecek...</div>
                
                <ul class="options-list" id="optionsList"></ul>
                
                <div class="feedback-box" id="feedbackBox">
                    <strong>Sınav Açıklaması &amp; Analiz:</strong>
                    <p id="feedbackText">Açıklama metni.</p>
                </div>
                
                <div class="quiz-controls">
                    <button class="quiz-btn" onclick="navigateQuestion(-1)"><i class="fas fa-arrow-left"></i> Önceki Soru</button>
                    <button class="quiz-btn" onclick="navigateQuestion(1)">Sonraki Soru <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </section>`;
