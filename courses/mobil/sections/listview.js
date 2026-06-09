/* Devosuit Partial — listview
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['listview'] = `<section id="listview" class="project-section card">
        <div class="section-header">
            <h2>7. ListView & Adapter (Klasik Liste)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/7-ListViewAndAdapter</span>
        </div>
        <p class="section-desc">Veri kümelerini dikey bir liste halinde görüntülemek için kullanılan klasik Android bileşenidir. Küçük listeler için uygundur ancak büyük verilerde performans sorunu yaşatır.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>Adapter Prensibi:</strong> Veri kaynağı (List, Array vb.) ile arayüz bileşeni (ListView) arasında köprü görevi görür. Her veri hücresi için bir \`View\` oluşturur.</li><li><strong>ArrayAdapter:</strong> Basit metin tabanlı listeler için Android tarafından sağlanan hazır bir Adapter sınıfıdır.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>ListView'ın büyük veri kümelerindeki en büyük dezavantajı nedir? (Her satır için sürekli yeni bir View nesnesi oluşturmasıdır. Bu durum bellek kullanımını artırır ve arayüzde kasmaya (lag) sebep olur).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>ListView hücresi tıklamaları nasıl yakalanır? (\`setOnItemClickListener\` ile).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/7-ListViewAndAdapter/app/src/main/java/com/example/listviewandadapter/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.listviewandadapter;

import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {
    ArrayList&lt;String&gt; trCitys = new ArrayList&lt;&gt;(Arrays.asList(
            &quot;Adana&quot;, &quot;Adıyaman&quot;, &quot;Afyonkarahisar&quot;, &quot;Ağrı&quot;, &quot;Amasya&quot;, &quot;Ankara&quot;, &quot;Antalya&quot;, &quot;Artvin&quot;, &quot;Aydın&quot;,
            &quot;Balıkesir&quot;, &quot;Bilecik&quot;, &quot;Bingöl&quot;, &quot;Bitlis&quot;, &quot;Bolu&quot;, &quot;Burdur&quot;, &quot;Bursa&quot;, &quot;Çanakkale&quot;, &quot;Çankırı&quot;, &quot;Çorum&quot;,
            &quot;Denizli&quot;, &quot;Diyarbakır&quot;, &quot;Edirne&quot;, &quot;Elazığ&quot;, &quot;Erzincan&quot;, &quot;Erzurum&quot;, &quot;Eskişehir&quot;, &quot;Gaziantep&quot;, &quot;Giresun&quot;,
            &quot;Gümüşhane&quot;, &quot;Hakkâri&quot;, &quot;Hatay&quot;, &quot;Isparta&quot;, &quot;Mersin&quot;, &quot;İstanbul&quot;, &quot;İzmir&quot;, &quot;Kars&quot;, &quot;Kastamonu&quot;, &quot;Kayseri&quot;,
            &quot;Kırklareli&quot;, &quot;Kırşehir&quot;, &quot;Kocaeli&quot;, &quot;Konya&quot;, &quot;Kütahya&quot;, &quot;Malatya&quot;, &quot;Manisa&quot;, &quot;Kahramanmaraş&quot;, &quot;Mardin&quot;,
            &quot;Muğla&quot;, &quot;Muş&quot;, &quot;Nevşehir&quot;, &quot;Niğde&quot;, &quot;Ordu&quot;, &quot;Rize&quot;, &quot;Sakarya&quot;, &quot;Samsun&quot;, &quot;Siirt&quot;, &quot;Sinop&quot;, &quot;Sivas&quot;,
            &quot;Tekirdağ&quot;, &quot;Tokat&quot;, &quot;Trabzon&quot;, &quot;Tunceli&quot;, &quot;Şanlıurfa&quot;, &quot;Uşak&quot;, &quot;Van&quot;, &quot;Yozgat&quot;, &quot;Zonguldak&quot;, &quot;Aksaray&quot;,
            &quot;Bayburt&quot;, &quot;Karaman&quot;, &quot;Kırıkkale&quot;, &quot;Batman&quot;, &quot;Şırnak&quot;, &quot;Bartın&quot;, &quot;Ardahan&quot;, &quot;Iğdır&quot;, &quot;Yalova&quot;, &quot;Karabük&quot;,
            &quot;Kilis&quot;, &quot;Osmaniye&quot;, &quot;Düzce&quot;
    ));
    boolean[] grayScale = new boolean[200];

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

        //ImageView.setColorFilter için filter oluşturma
        ColorMatrix matrix = new ColorMatrix();
        matrix.setSaturation(0); // Set saturation to 0 for grayscale effect
        ColorMatrixColorFilter filter = new ColorMatrixColorFilter(matrix);

        ArrayAdapter&lt;String&gt; adapter = new ArrayAdapter&lt;String&gt;(this, R.layout.list_item, R.id.textView, trCitys) {
            @Override
            public View getView(int position, View convertView, ViewGroup parent) {
                // Inflate the layout if needed
                if (convertView == null) {
                    convertView = LayoutInflater.from(getContext()).inflate(R.layout.list_item, parent, false);
                }

                // Get the TextView and set the text
                TextView textView = convertView.findViewById(R.id.textView);
                textView.setText(getItem(position));

                // Get the Button and set an OnClickListener
                Button buttonInfo = convertView.findViewById(R.id.buttonInfo);
                buttonInfo.setOnClickListener(v -&gt; {
                    Toast.makeText(getContext(), &quot;Bilgi: &quot; + getItem(position), Toast.LENGTH_SHORT).show();
                });

                // Get the Button and set an OnClickListener
                convertView.findViewById(R.id.buttonDel).setOnClickListener(v -&gt; {
                    trCitys.remove(position);
                    this.notifyDataSetChanged();
                });

                ImageView imgView = convertView.findViewById(R.id.imageView);

                if (grayScale[position])
                    imgView.setColorFilter(filter);
                else
                    imgView.setColorFilter(null);

                imgView.setOnClickListener(v -&gt; {
                    grayScale[position] = !grayScale[position];
                    notifyDataSetChanged();
                });

                return convertView;
            }
        };

        ListView listView = findViewById(R.id.listView);
        listView.setAdapter(adapter);
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
                    <td class="analysis-code-cell"><code>ColorMatrix matrix = new ColorMatrix();</code></td>
                    <td class="analysis-explain-cell">Görselleri siyah-beyaz yapmak veya renk doygunluğunu ayarlamak için renk matrisi nesnesi üretir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>matrix.setSaturation(0);</code></td>
                    <td class="analysis-explain-cell">Renk doygunluğunu (saturation) sıfır yaparak görselin gri tonlamalı (grayscale) olmasını sağlar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>if (convertView == null)</code></td>
                    <td class="analysis-explain-cell">Eğer işletim sistemi daha önce oluşturulmuş eski bir satır görünümünü (convertView) geri dönüşüm için vermemişse, XML dosyasından sıfırdan oluşturur.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>notifyDataSetChanged();</code></td>
                    <td class="analysis-explain-cell">Listenin veri kümesi güncellendiğinde (örneğin bir şehir silindiğinde veya gri yapıldığında) listenin görsel olarak kendini yenilemesini sağlar.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 7. ListView & Adapter (Klasik Liste) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_listview" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_listview">Soru 1 / 10</span>
            <span id="mini_score_listview">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_listview" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_listview" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_listview" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_listview"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('listview', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('listview', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
