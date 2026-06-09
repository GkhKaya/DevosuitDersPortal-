/* Devosuit Partial — resources
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['resources'] = `<section id="resources" class="project-section card">
        <div class="section-header">
            <h2>2. Resources & Empty Views Activity</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/2-EmptyViewsActivitiyAndUsingRes</span>
        </div>
        <p class="section-desc">Android projelerinde kaynakların (görseller, metinler, boyutlar, renkler vb.) koddan ve XML dosyalarından bağımsız şekilde yönetilmesi ve Java/Kotlin kodunda R sınıfı ile erişilmesi gösterilmektedir.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>R Sınıfı (R.java):</strong> Android derleme sürecinde otomatik olarak oluşturulan ve tüm kaynakların (res/ altındaki XML'ler, drawable'lar) ID'lerini biriktiren statik bir sınıftır.</li><li><strong>Ressources Ayrımı:</strong> Dil desteği için \`res/values/strings.xml\`, boyutlar için \`res/values/dimens.xml\`, renkler için \`res/values/colors.xml\` kullanılır. Bu sayede kod değiştirilmeden çoklu dil ve tema desteği sağlanır.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Kod içerisinden bir metin kaynağına nasıl erişilir? (\`getString(R.string.string_name)\` veya context.getResources().getString(id)).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>XML içinden bir boyut kaynağına nasıl erişilir? (\`@dimen/dimen_name\`).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Neden metinleri doğrudan koda yazmamalıyız (hardcoded)? (Uluslararasılaştırma/dil çevirisi (localization) yapılamaz ve tasarım standartları korunamaz).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/2-EmptyViewsActivitiyAndUsingRes/app/src/main/java/com/example/emptyviewsactivitiy/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.emptyviewsactivitiy;

import android.os.Bundle;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -&gt; {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
}</code></pre>
            
            <div class="analysis-table-container">
                <h4 class="analysis-table-title"><i class="fas fa-search-plus"></i> Kritik Satır Analizi</h4>
                <table class="analysis-table">
                    <thead>
                        <tr>
                            <th class="analysis-th">Kod Satırı</th>
                            <th class="analysis-th">Açıklama / İşlevi</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                <tr>
                    <td class="analysis-code-cell"><code>setContentView(R.layout.activity_main);</code></td>
                    <td class="analysis-explain-cell">Activity (ekran) sınıfına hangi XML arayüz dosyasının bağlanacağını (render edileceğini) söyler.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 2. Resources & Empty Views Activity - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_resources" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_resources">Soru 1 / 10</span>
            <span id="mini_score_resources">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_resources" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_resources" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_resources" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_resources"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('resources', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('resources', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
