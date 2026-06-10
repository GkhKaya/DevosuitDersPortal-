/* Devosuit Partial — makine-ogrenmesi
 * Makine Öğrenmesi konu anlatımı ve mini testi.
 */
window.__partials = window.__partials || {};
window.__partials['makine-ogrenmesi'] = `<section id="makine-ogrenmesi" class="project-section card">
    <div class="section-header">
        <h2>3. Makine Öğrenmesi Temelleri</h2>
        <span class="path-badge"><i class="fas fa-chart-line"></i> Klasik ML / Bölüm 3</span>
    </div>
    <p class="section-desc">Makine Öğrenmesi (ML), verilerden öğrenen ve açıkça programlanmadan kararlar veren algoritmalar bütünüdür. Bu bölümde gözetimli ve gözetimsiz öğrenme, KNN ve karar ağaçları incelenmektedir.</p>

    <div class="grid grid-2">
        <div class="info-block">
            <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
            <ul class="styled-list">
                <li><strong>Gözetimli Öğrenme (Supervised):</strong> Giriş verileri ile bunlara karşılık gelen çıktı etiketlerinin (labels) bulunduğu veri setleriyle çalışır.
                    <br>- <em>Regresyon:</em> Sürekli sayısal çıktı tahmini (Örn: Ev fiyatı tahmini).
                    <br>- <em>Sınıflandırma:</em> Ayrık sınıf tahmini (Örn: E-posta spam filtresi).
                </li>
                <li><strong>K-En Yakın Komşu (K-Nearest Neighbors - KNN):</strong> Parametrik olmayan, tembel (lazy learning) bir sınıflandırma algoritmasıdır. Yeni gelen bir veriyi en yakın K adet komşusuna olan mesafesine (genelde Öklid mesafesi) göre sınıflandırır.</li>
                <li><strong>Karar Ağaçları (Decision Trees):</strong> Veriyi öznitelik değerlerine göre dallara bölerek ağaç yapısında kararlar üreten algoritmadır. Bölünme kriterlerinde <em>Gini Safsızlığı</em> veya <em>Entropi</em> kullanılır.</li>
                <li><strong>Yanlılık - Varyans Dengesi (Bias-Variance Tradeoff):</strong>
                    <br>- <em>Yüksek Yanlılık (Underfitting):</em> Model çok basittir, verideki örüntüyü öğrenemez.
                    <br>- <em>Yüksek Varyans (Overfitting):</em> Model veri gürültülerini ezberler, yeni gelen verilerde çuvallar.
                </li>
            </ul>
        </div>
        <div class="info-block warning-block">
            <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
            <ul class="exam-list">
                <li class="exam-item"><i class="fas fa-question-circle text-accent"></i> 
                    <div><strong>Soru:</strong> Karar Ağaçlarında kullanılan Entropi (Entropy) ve Bilgi Kazancı (Information Gain) kavramları neyi ölçer? Formülü nedir?
                    <br><small>Cevap: Entropi, sistemdeki belirsizlik veya düzensizlik miktarıdır. Formülü: H(S) = - sum(pi * log2(pi)) dir. 
                    <br>Bilgi Kazancı, veriyi belirli bir özelliğe göre böldüğümüzde entropideki azalmayı ölçer. En yüksek Bilgi Kazancı veren özellik bölünme düğümü olarak seçilir.</small></div>
                </li>
                <li class="exam-item"><i class="fas fa-question-circle text-accent"></i> 
                    <div><strong>Soru:</strong> KNN algoritmasında K değerinin aşırı küçük (K=1) veya aşırı büyük olması modeli nasıl etkiler?
                    <br><small>Cevap: K=1 gibi küçük değerlerde model gürültülerden çok etkilenir, karar sınırları karmaşıklaşır ve overfitting (aşırı öğrenme) oluşur. K çok büyük seçildiğinde ise model aşırı genelleşir, underfitting (eksik öğrenme) eğilimi artar.</small></div>
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
            <div id="mini_progress_bar_makine-ogrenmesi" class="mini-quiz-progress-fill"></div>
        </div>
        <div class="mini-quiz-meta">
            <span id="mini_q_num_makine-ogrenmesi">Soru 1 / 5</span>
            <span id="mini_score_makine-ogrenmesi">Doğru: 0 | Yanlış: 0</span>
        </div>
        <div id="mini_q_text_makine-ogrenmesi" class="mini-quiz-text">Soru yükleniyor...</div>
        <ul id="mini_options_makine-ogrenmesi" class="options-list"></ul>
        <div id="mini_feedback_makine-ogrenmesi" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_makine-ogrenmesi"></p>
        </div>
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('makine-ogrenmesi', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('makine-ogrenmesi', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>`;
