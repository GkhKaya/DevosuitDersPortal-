/* Devosuit Partial — arama-algoritmalari
 * Arama Algoritmaları konu anlatımı ve mini testi.
 */
window.__partials = window.__partials || {};
window.__partials['arama-algoritmalari'] = `<section id="arama-algoritmalari" class="project-section card">
    <div class="section-header">
        <h2>2. Arama Algoritmaları</h2>
        <span class="path-badge"><i class="fas fa-search"></i> Arama Teknikleri / Bölüm 2</span>
    </div>
    <p class="section-desc">Yapay zekada ajanlar hedefe ulaşmak için durum uzaylarını taramak zorundadır. Arama algoritmaları bilgisiz (uninformed) ve bilgili (informed/sezgisel) arama olarak iki ana sınıfa ayrılır.</p>

    <div class="grid grid-2">
        <div class="info-block">
            <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
            <ul class="styled-list">
                <li><strong>Bilgisiz Arama (Uninformed Search):</strong> Hedefe olan kalan mesafe hakkında hiçbir ipucuna sahip olmayan aramalardır.
                    <br>- <em>Genişlik Öncelikli (BFS):</em> FIFO kuyruk kullanır. Sığ derinlikleri önce arar. Tam ve optimaldir (maliyet=1 iken). Bellek karmaşıklığı O(b^d) yüksektir.
                    <br>- <em>Derinlik Öncelikli (DFS):</em> LIFO yığın kullanır. En derine iner. Bellek O(b*m) dostudur fakat sonsuz dallarda takılabilir, optimal değildir.
                    <br>- <em>Üniform Maliyetli Arama (UCS):</em> Öncelikli kuyruk kullanır. Kökten o ana kadarki yol maliyeti g(n)'i en küçük olan düğümü açar. Maliyetler pozitifse optimaldir.
                </li>
                <li><strong>Bilgili / Sezgisel Arama (Informed Search):</strong> Sezgi fonksiyonu h(n) (hedefe tahmini kalan maliyet) kullanır.
                    <br>- <em>Greedy Best-First:</em> Sadece h(n)'i en küçük olanı seçer. Hızlıdır ama engellere takılabilir, optimal değildir.
                    <br>- <em>A* Arama:</em> f(n) = g(n) + h(n) değerini minimize eder. Eğer h(n) kabul edilebilir (admissible - gerçek yolu aşmayan) ise A* arama optimaldir.
                </li>
                <li><strong>Oyun Aramaları (Minimax & Alfa-Beta):</strong> İki kişilik oyunlarda (örn. Satranç, XOX) kullanılır. Max oyuncusu kendi faydasını maksimize etmeye çalışırken, Min oyuncusu bunu minimize etmeye çalışır. Alfa-Beta budaması, sonucu değiştirmeden gereksiz dalları eleyerek arama uzayını yarı yarıya düşürür.</li>
            </ul>
        </div>
        <div class="info-block warning-block">
            <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
            <ul class="exam-list">
                <li class="exam-item"><i class="fas fa-question-circle text-accent"></i> 
                    <div><strong>Soru:</strong> A* algoritmasının optimal olmasını garanti eden 'Kabul Edilebilirlik' (Admissibility) ve 'Tutarlılık' (Consistency) kavramları nedir?
                    <br><small>Cevap: <em>Kabul edilebilirlik:</em> h(n) sezgisinin, hedefe olan gerçek optimal maliyet h*(n)'den her zaman küçük veya eşit olmasıdır (h(n) <= h*(n)). 
                    <br><em>Tutarlılık:</em> Bir düğümden komşusuna geçişte h(n) <= c(n, a, n') + h(n') üçgen eşitsizliğini sağlamasıdır. Tutarlı olan her sezgi kabul edilebilirdir.</small></div>
                </li>
                <li class="exam-item"><i class="fas fa-question-circle text-accent"></i> 
                    <div><strong>Soru:</strong> Alfa-Beta budamasında Alfa ve Beta değerleri neyi temsil eder ve ne zaman budama yapılır?
                    <br><small>Cevap: Alfa, Max oyuncusunun o ana kadar garantilediği en yüksek değerdir (başlangıçta -inf). Beta, Min oyuncusunun garantilediği en düşük değerdir (başlangıçta +inf). Eğer bir adımda <strong>Alfa >= Beta</strong> durumu oluşursa, o dalın geri kalanı budanır.</small></div>
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
            <div id="mini_progress_bar_arama-algoritmalari" class="mini-quiz-progress-fill"></div>
        </div>
        <div class="mini-quiz-meta">
            <span id="mini_q_num_arama-algoritmalari">Soru 1 / 5</span>
            <span id="mini_score_arama-algoritmalari">Doğru: 0 | Yanlış: 0</span>
        </div>
        <div id="mini_q_text_arama-algoritmalari" class="mini-quiz-text">Soru yükleniyor...</div>
        <ul id="mini_options_arama-algoritmalari" class="options-list"></ul>
        <div id="mini_feedback_arama-algoritmalari" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_arama-algoritmalari"></p>
        </div>
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('arama-algoritmalari', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('arama-algoritmalari', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>`;
