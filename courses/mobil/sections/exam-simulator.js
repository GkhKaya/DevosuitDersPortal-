/* Devosuit Partial — exam-simulator
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['exam-simulator'] = `<section id="exam-simulator" class="quiz-section card">
            <div class="section-header">
                <h2>🧠 100 Soruluk Genel Sınav Simülatörü</h2>
                <span class="path-badge"><i class="fas fa-clock"></i> Süresiz Deneme</span>
            </div>
            <p class="section-desc">Hocanın psikolojisini tam yansıtan, caydırıcı ve kafa karıştırıcı şıklardan oluşan, tüm müfredatı kapsayan 100 adet çoktan seçmeli soru.</p>
            
            <div class="quiz-container">
                <div class="quiz-navigation-panel" id="quizNav">
                    <!-- Nav buttons will load here -->
                </div>
                
                <div class="quiz-body">
                    <div class="q-meta">
                        <span id="questionNumber">Soru: 1 / 100</span>
                        <span id="questionCategory">Kategori: Mobil Programlama Genel</span>
                    </div>
                    <div class="q-text" id="questionText">Soru yükleniyor...</div>
                    
                    <ul class="options-list" id="optionsList">
                        <!-- options will be loaded here -->
                    </ul>
                    
                    <div class="feedback-box" id="feedbackBox">
                        <strong id="feedbackTitle">Cevap Açıklaması:</strong>
                        <p id="feedbackText">Açıklama yükleniyor...</p>
                    </div>
                    
                    <div class="quiz-controls">
                        <button class="quiz-btn" id="prevBtn" onclick="navigateQuestion(-1)"><i class="fas fa-arrow-left"></i> Önceki Soru</button>
                        <button class="quiz-btn" id="nextBtn" onclick="navigateQuestion(1)">Sonraki Soru <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>`;
