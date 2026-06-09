/* Devosuit Partial — events
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['events'] = `<section id="events" class="project-section card">
        <div class="section-header">
            <h2>3. Events (Olay Yönetimi)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/3-Events</span>
        </div>
        <p class="section-desc">Android'de kullanıcı etkileşimlerini (tıklama, durum değiştirme, metin yazma vb.) dinleyen Event Listener yapısı ve kodda/XML'de atama yöntemleri.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>1. Yöntem (Interface/Lambda):</strong> Kod içinde \`setOnClickListener(v -> ...)\` veya \`setOnCheckedChangeListener\` kullanarak olayları yakalamak.</li><li><strong>2. Yöntem (Miras ile Override):</strong> View sınıfını miras alan yeni bir sınıf (örneğin Custom View veya iç sınıf \`MyEditText\`) oluşturarak \`onTextChanged()\` gibi korumalı event metodlarını ezmek (override).</li><li><strong>3. Yöntem (XML onClick):</strong> XML dosyasında ilgili View bileşenine \`android:onClick="doEvent"\` verip, MainActivity içinde \`public void doEvent(View view)\` metodunu tanımlamak.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>XML üzerinden onClick metodu tanımlanırken nelere dikkat edilmelidir? (Metot imzası kesinlikle \`public void methodName(View view)\` olmalı, parametre olarak sadece \`View\` almalıdır).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Dynamic View ekleme ve layout parametreleri: Kod üzerinde çalışma zamanında oluşturulan \`MyEditText\` bileşeni \`main.addView(myEditText)\` ile eklenirken \`ConstraintLayout.LayoutParams\` kullanılmıştır. Parametrelerin (\`leftToLeft\`, \`topToTop\`, margins) önemi nedir?</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Switch bileşeninin durum değişiklikleri hangi listener ile dinlenir? (\`CompoundButton.OnCheckedChangeListener\` ve \`onCheckedChanged(CompoundButton buttonView, boolean isChecked)\` metodu).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/3-Events/app/src/main/java/com/example/events/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.events;

import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.renderscript.ScriptGroup;
import android.text.InputType;
import android.view.InputDevice;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
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

        // 1. Metod ile event atamak

            Button myButton =  (Button) findViewById(R.id.button1);
            myButton.setOnClickListener(v -&gt; {
                myButton.setText(myButton.getText() + &quot;. &quot;);
            });

            Switch mySwitch =  (Switch) findViewById(R.id.switch1);
            mySwitch.setOnCheckedChangeListener((buttonView, isChecked) -&gt; {
                if(isChecked)
                    myButton.setBackgroundColor(Color.BLUE);
                else
                    myButton.setBackgroundColor(Color.MAGENTA);
                myButton.setText(&quot;Button&quot;);
            });

        // 1. END

        // 2. miras event metodunu override (üzerine yenisini koyma) etmek

            class MyEditText extends androidx.appcompat.widget.AppCompatEditText {

                public MyEditText(Context context) {
                    super(context);
                }

                @Override
                protected void onTextChanged(CharSequence text, int start, int lengthBefore, int lengthAfter) {
                    super.onTextChanged(text, start, lengthBefore, lengthAfter);
                    myButton.setText(myButton.getText() + text.toString());
                }
            };

            MyEditText myEditText = new MyEditText(this);
            ConstraintLayout.LayoutParams params = new ConstraintLayout.LayoutParams(600, 100);
            // Sol kenara bağla
            params.leftToLeft = ConstraintLayout.LayoutParams.PARENT_ID;
            // Üst kenara bağla
                params.topToTop = ConstraintLayout.LayoutParams.PARENT_ID;
            // Margin ekle
                params.leftMargin = 500;
                params.topMargin = 100;
            myEditText.setLayoutParams(params);
            myEditText.setInputType(InputType.TYPE_CLASS_TEXT);
            myEditText.setBackgroundColor(Color.RED);
            ConstraintLayout main =  findViewById(R.id.main);
            main.addView(myEditText);

        // 2. END
    }

    // 3. XML-layout içinden view event metoduna referans (doEvent) vererek. android:onClick=&quot;doEvent&quot;

        public void doEvent(View view) {
            Toast.makeText(this, &quot;XML onClick çalıştı!&quot;, Toast.LENGTH_SHORT).show();
        }

    // 3. END
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
                    <td class="analysis-code-cell"><code>myButton.setOnClickListener(v -&gt; ...)</code></td>
                    <td class="analysis-explain-cell">Butona tıklama dinleyicisi atar. Lambda fonksiyonu ile tıklama anındaki işlem tetiklenir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>mySwitch.setOnCheckedChangeListener(...)</code></td>
                    <td class="analysis-explain-cell">Switch durumunun değişmesini (aktif/pasif) dinler ve duruma göre butona yeni renkler atar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>class MyEditText extends ...</code></td>
                    <td class="analysis-explain-cell">Standart EditText sınıfından miras alan özel bir sınıf üretir. Amacı metin değişim metotlarını ezmektir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>onTextChanged(...)</code></td>
                    <td class="analysis-explain-cell">EditText içerisine yazı yazıldığında/silindiğinde çalışan olay tetikleyicisidir. Buton metnine dinamik yazı ekler.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>main.addView(myEditText)</code></td>
                    <td class="analysis-explain-cell">Çalışma zamanında (runtime) kod ile oluşturulan metin kutusunu arayüze (Layout) dinamik olarak yerleştirir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>public void doEvent(View view)</code></td>
                    <td class="analysis-explain-cell">XML dosyasında android:onClick özelliğiyle eşleşen, public ve tek View parametreli klasik event metodu.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 3. Events (Olay Yönetimi) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_events" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_events">Soru 1 / 10</span>
            <span id="mini_score_events">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_events" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_events" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_events" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_events"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('events', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('events', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
