/* Devosuit Partial — yapay-zekaya-giris
 * Yapay Zekaya Giriş konu anlatımı ve mini testi.
 */
window.__partials = window.__partials || {};
window.__partials['yapay-zekaya-giris'] = `<section id="yapay-zekaya-giris" class="project-section card">
    <div class="section-header">
        <h2>1. Yapay Zekaya Giriş</h2>
        <span class="path-badge"><i class="fas fa-brain"></i> Kuramsal Temeller / Bölüm 1</span>
    </div>
    <p class="section-desc">Yapay Zeka (YZ), insan zihninin öğrenme, akıl yürütme, problem çözme ve karar verme gibi bilişsel işlevlerini bilgisayar sistemleri aracılığıyla simüle etme bilimidir. Bu bölümde rasyonel ajanlar, Turing testi ve çevre özellikleri incelenmektedir.</p>

    <div class="grid grid-2">
        <div class="info-block">
            <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
            <ul class="styled-list">
                <li><strong>Rasyonel Ajan (Rational Agent):</strong> Çevresini sensörlerle algılayıp aktüatörlerle eyleme dökerek, elindeki bilgi birikimi doğrultusunda beklenen performans ölçütünü maksimize etmeye çalışan sistemdir. Rasyonellik her şeyi bilmek (omniscience) değil, o anki verilere göre en doğru kararı vermektir.</li>
                <li><strong>Turing Testi:</strong> Alan Turing (1950) tarafından önerilen 'taklit oyunu'dur. Bir bilgisayarın yazılı diyalog yoluyla insanı kendisinin de insan olduğuna inandırıp inandıramayacağını ölçer. Başarılı olmak için Doğal Dil İşleme, Bilgi Temsili, Otomatik Akıl Yürütme ve Makine Öğrenmesi gereklidir.</li>
                <li><strong>YZ Tarihçesi ve YZ Kışı (AI Winter):</strong> 1956 Dartmouth Konferansı ile YZ alanı doğdu. Ancak aşırı vaatlerin yerine getirilememesi (örn. Perceptron kitabının tek katmanlı YSA sınırlarını göstermesi) sonucu fonların kesildiği dönemlere YZ Kışı denir.</li>
            </ul>
        </div>
        <div class="info-block warning-block">
            <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
            <ul class="exam-list">
                <li class="exam-item"><i class="fas fa-question-circle text-accent"></i> 
                    <div><strong>Soru:</strong> Rasyonellik ile Mükemmel Bilgi (Omniscience) arasındaki fark nedir? 
                    <br><small>Cevap: Mükemmel bilgi gelecekteki eylemlerin sonuçlarını kesin olarak bilir. Rasyonellik ise sadece o ana kadarki algı geçmişine göre performansı en iyilemeye çalışır. Rasyonel ajan hata yapabilir.</small></div>
                </li>
                <li class="exam-item"><i class="fas fa-question-circle text-accent"></i> 
                    <div><strong>Soru:</strong> PEAS (Performance, Environment, Actuators, Sensors) tanımı nedir? Bir taksi şoförü YZ için PEAS bileşenlerini yazınız.
                    <br><small>Cevap: P: Güvenli yolculuk, hız limiti, kar maksimizasyonu. E: Yollar, trafik, yayalar. A: Direksiyon, fren, gaz. S: Kameralar, Lidar, GPS, hız göstergesi.</small></div>
                </li>
                <li class="exam-item"><i class="fas fa-question-circle text-accent"></i> 
                    <div><strong>Soru:</strong> Epizodik (Episodic) ile Sıralı (Sequential) ortam arasındaki fark nedir?
                    <br><small>Cevap: Epizodik ortamda her bölüm bağımsızdır, anlık eylem gelecekteki algıları etkilemez (Örn: Kusurlu parça seçimi). Sıralı ortamda ise şu anki eylem geleceği doğrudan etkiler (Örn: Satranç).</small></div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Mini Quiz -->
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> Konu Sonu Hızlı Testi
        </h3>
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_yapay-zekaya-giris" class="mini-quiz-progress-fill"></div>
        </div>
        <div class="mini-quiz-meta">
            <span id="mini_q_num_yapay-zekaya-giris">Soru 1 / 5</span>
            <span id="mini_score_yapay-zekaya-giris">Doğru: 0 | Yanlış: 0</span>
        </div>
        <div id="mini_q_text_yapay-zekaya-giris" class="mini-quiz-text">Soru yükleniyor...</div>
        <ul id="mini_options_yapay-zekaya-giris" class="options-list"></ul>
        <div id="mini_feedback_yapay-zekaya-giris" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_yapay-zekaya-giris"></p>
        </div>
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('yapay-zekaya-giris', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('yapay-zekaya-giris', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>`;
