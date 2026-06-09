/* Devosuit Partial — layouts
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['layouts'] = `<section id="layouts" class="project-section card">
        <div class="section-header">
            <h2>1. Layouts (Arayüz Düzenleri)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/1-Layouts</span>
        </div>
        <p class="section-desc">Android'de arayüz elemanlarının (Views) ekranda nasıl konumlandırılacağını kontrol eden düzen yapısıdır. Projede ConstraintLayout, horizontal ve vertical LinearLayout'ların bir arada kullanımı (iç içe yerleşim) gösterilmektedir.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>ConstraintLayout:</strong> Ekrandaki diğer elemanlara veya parent'a göre bağlar kurarak esnek ve tek katmanlı (flat) arayüzler tasarlamayı sağlar. Performans açısından derin iç içe yerleşimlerin önüne geçer.</li><li><strong>LinearLayout:</strong> Elemanları alt alta (vertical) veya yan yana (horizontal) sıralamak için kullanılır. \`android:orientation\` özelliği ile yönü belirlenir.</li><li><strong>match_parent vs wrap_content:</strong> match_parent bileşenin genişliğini/yüksekliğini üst kapsayıcıya (parent) eşitler; wrap_content ise sadece içeriği kadar yer kapmasını sağlar.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Neden derin iç içe LinearLayout yerine ConstraintLayout tercih edilmelidir? (Çünkü iç içe yerleşimler View hiyerarşisini derinleştirir, ölçüm ve yerleşim adımlarını iki katına çıkararak render performansını düşürür).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>LinearLayout içinde \`android:layout_weight\` ne işe yarar? (Bileşenlerin boş alanı hangi oranda paylaşacağını belirler. Ağırlık hesabı yapılırken genişlik/yükseklik 0dp yapılmalıdır).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>ConstraintLayout'ta zincirler (Chains) nedir ve nasıl oluşturulur? (En az iki elemanın birbirine karşılıklı bağlanmasıyla oluşur. Spread, spread_inside ve packed modları vardır).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/1-Layouts/app/src/main/res/layout/activity_main.xml</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-markup">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;androidx.constraintlayout.widget.ConstraintLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:app=&quot;http://schemas.android.com/apk/res-auto&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    android:id=&quot;@+id/main&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    tools:context=&quot;.MainActivity&quot;&gt;

    &lt;LinearLayout
        android:id=&quot;@+id/linearLayout&quot;
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:orientation=&quot;horizontal&quot;&gt;

        &lt;Button
            android:layout_width=&quot;100dp&quot;
            android:layout_height=&quot;50dp&quot;
            android:text=&quot;Bnt1&quot; /&gt;

        &lt;Button
            android:layout_width=&quot;100dp&quot;
            android:layout_height=&quot;50dp&quot;
            android:text=&quot;Bnt2&quot; /&gt;

        &lt;Button
            android:layout_width=&quot;100dp&quot;
            android:layout_height=&quot;50dp&quot;
            android:text=&quot;Bnt3&quot; /&gt;
    &lt;/LinearLayout&gt;

    &lt;LinearLayout
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:layout_marginTop=&quot;104dp&quot;
        android:orientation=&quot;vertical&quot;
        app:layout_constraintTop_toBottomOf=&quot;@+id/linearLayout&quot;
        tools:layout_editor_absoluteX=&quot;16dp&quot;&gt;

        &lt;Button
            android:layout_width=&quot;100dp&quot;
            android:layout_height=&quot;50dp&quot;
            android:text=&quot;Bnt4&quot; /&gt;

        &lt;Button
            android:layout_width=&quot;100dp&quot;
            android:layout_height=&quot;50dp&quot;
            android:text=&quot;Bnt5&quot; /&gt;

        &lt;Button
            android:layout_width=&quot;100dp&quot;
            android:layout_height=&quot;50dp&quot;
            android:text=&quot;Bnt6&quot; /&gt;
    &lt;/LinearLayout&gt;

    &lt;TextView
        android:layout_width=&quot;wrap_content&quot;
        android:layout_height=&quot;wrap_content&quot;
        android:text=&quot;Hello World!&quot;
        app:layout_constraintBottom_toBottomOf=&quot;parent&quot;
        app:layout_constraintEnd_toEndOf=&quot;parent&quot;
        app:layout_constraintStart_toStartOf=&quot;parent&quot;
        app:layout_constraintTop_toTopOf=&quot;parent&quot; /&gt;

&lt;/androidx.constraintlayout.widget.ConstraintLayout&gt;</code></pre>
            
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
                    <td class="analysis-code-cell"><code>xmlns:android=&quot;...&quot;</code></td>
                    <td class="analysis-explain-cell">Android isim uzayını tanımlar; 'android:' önekiyle başlayan tüm görsel özelliklerin şemasını belirtir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>ConstraintLayout</code></td>
                    <td class="analysis-explain-cell">Arayüz elemanlarını birbirine ve ekran kenarlarına göre bağlayarak düz (flat) bir hiyerarşi kuran esnek düzen kapsayıcısı.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>LinearLayout</code></td>
                    <td class="analysis-explain-cell">Bileşenleri dikey (vertical) veya yatay (horizontal) olarak arka arkaya sıralayan hizalama kapsayıcısı.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>android:orientation=&quot;vertical&quot;</code></td>
                    <td class="analysis-explain-cell">İçerideki elemanların alt alta sıralanacağını belirtir. Yatay için 'horizontal' girilir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>app:layout_constraintTop_toBottomOf=&quot;...&quot;</code></td>
                    <td class="analysis-explain-cell">Bileşenin üst kenarını, belirtilen diğer bileşenin alt kenarına hizalar (Constraint bağlaması).</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/1-Layouts/app/src/main/java/com/example/layouts/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.layouts;

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
                    <td class="analysis-code-cell"><code>EdgeToEdge.enable(this);</code></td>
                    <td class="analysis-explain-cell">Uygulamanın durum çubuğu (status bar) ve navigasyon çubuğunun arkasına kadar uzanmasını (tam ekran) sağlar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>ViewCompat.setOnApplyWindowInsetsListener(...)</code></td>
                    <td class="analysis-explain-cell">Sistem barlarının (durum ve yönlendirme çubukları) kapladığı alanı hesaplar ve içeriğin bu alanların altında kalıp kesilmesini engellemek için padding uygular.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 1. Layouts (Arayüz Düzenleri) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_layouts" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_layouts">Soru 1 / 10</span>
            <span id="mini_score_layouts">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_layouts" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_layouts" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_layouts" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_layouts"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('layouts', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('layouts', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
