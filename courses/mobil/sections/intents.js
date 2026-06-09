/* Devosuit Partial — intents
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['intents'] = `<section id="intents" class="project-section card">
        <div class="section-header">
            <h2>13. Intents & Permissions (Etkinlik Geçişleri)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/13-Intents_AndPermissions</span>
        </div>
        <p class="section-desc">Bileşenler arası iletişimi sağlayan Intent yapısı ve kamera izni kontrolü ile TabbedActivity (Sekmeli Görünüm) kullanımı.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>Explicit Intent (Açık):</strong> Hedef bileşenin sınıf adı doğrudan belirtilir. Örn: \`new Intent(this, TabbedActivity.class)\`. Uygulama içi ekran geçişlerinde kullanılır.</li><li><strong>Implicit Intent (Kapalı):</strong> Yapılacak eylem (Action) belirtilir, sistem en uygun uygulamayı açar. Örn: Kamera açma, web sayfası açma.</li><li><strong>TabbedActivity:</strong> TabLayout ve ViewPager (veya ViewPager2) kullanılarak sekmeli ve sağa-sola kaydırılabilir ekran geçişleri sunan yapıdır.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Intent ile veri nasıl taşynyr? (Gönderirken \`intent.putExtra("anahtar", veri)\` kullanılır, hedef activity'de ise \`getIntent().getStringExtra("anahtar")\` vb. ile alınır).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Explicit ve Implicit intent farkı nedir? (Açık intent hedef sınıfı net belirtir, kapalı intent ise sistemi yönlendirerek eyleme uygun harici uygulamaları (tarayıcı, harita, kamera) tetikler).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Kamera açma izni manifestte nasıl tanımlanır? (\`<uses-permission android:name="android.permission.CAMERA" />\`).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/13-Intents_AndPermissions/app/src/main/java/com/example/intents/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.intents;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;

import android.location.Location;

public class MainActivity extends AppCompatActivity {

    EditText editText;

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

        editText = findViewById(R.id.editTextMultiline);
    }
    
    public void intentActivity(View view) {
            // Explicit Intent: Belirli bir Activity’e geçiş
            Intent intent = new Intent(this, TabbedActivity.class);
            startActivity(intent);
            // finish(); //ActivityTwo’yu kapatır ve önceki Activity’ye (MainActivity) döner
    }
    
    
    public void intentCreateDoc(View view) {
        // Yeni bir dosya oluşturmak için Intent
        Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType(&quot;text/plain&quot;); // Dosya türü
        intent.putExtra(Intent.EXTRA_TITLE, &quot;yeni_dosya.txt&quot;); // Varsayılan dosya adı
        // Eskiden: startActivityForResult(intent, 1);
        // Yeni: launcher.launch(intent);
        launcherCreateDoc.launch(intent);
    }
    private ActivityResultLauncher&lt;Intent&gt; launcherCreateDoc = registerForActivityResult(
            new ActivityResultContracts.StartActivityForResult(),
            result -&gt; {
                if (result.getResultCode() == Activity.RESULT_OK) {
                    Intent data = result.getData();
                    // Burada sonucu işleyebilirsin
                    Uri uri = data.getData();
                    try {
                        OutputStream outputStream = getContentResolver().openOutputStream(uri);
                        outputStream.write(editText.getText().toString().getBytes());
                        outputStream.close();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
    );

    
    public void intentOpenDoc(View view) {
        // Yeni bir dosya oluşturmak için Intent
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
            //ACTION_OPEN_DOCUMENT → Kullanıcıya var olan dosyayı seçtirir.
            //ACTION_OPEN_DOCUMENT_TREE → Klasör seçmek için kullanılır.
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType(&quot;text/plain&quot;); // Dosya türü
        launcherOpenDoc.launch(intent);
    }
    private ActivityResultLauncher&lt;Intent&gt; launcherOpenDoc = registerForActivityResult(
            new ActivityResultContracts.StartActivityForResult(),
            result -&gt; {
                if (result.getResultCode() == Activity.RESULT_OK) {
                    Intent data = result.getData();
                    // Burada sonucu işleyebilirsin
                    Uri uri = data.getData();
                    try (InputStream inputStream = getContentResolver().openInputStream(uri)) {
                        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
                        StringBuilder builder = new StringBuilder();
                        String line;
                        while ((line = reader.readLine()) != null) {
                            builder.append(line).append(&quot;\\n&quot;);
                        }
                        editText.setText(builder.toString());
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
    );

    public void intentGoogleMaps(View view) {
        //Google Maps açma
        Uri gmmIntentUri = Uri.parse(&quot;google.navigation:q=Ankara+Türkiye&quot;);
        Intent intent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);
        intent.setPackage(&quot;com.google.android.apps.maps&quot;); // Google Maps ile aç
        startActivity(intent);
    }

    public void intentImageCapture(View view) {
        checkPermissionsCamera();

        // Explicit Intent: Belirli bir Activity’e geçiş
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        launcherImageCapture.launch(intent);
    }
    private ActivityResultLauncher&lt;Intent&gt; launcherImageCapture = registerForActivityResult(
            new ActivityResultContracts.StartActivityForResult(),
            result -&gt; {
                if (result.getResultCode() == Activity.RESULT_OK) {
                    Intent data = result.getData();
                    // Burada sonucu işleyebilirsin
                    if (data != null &amp;&amp; data.getExtras() != null) {
                        Bitmap imageBitmap = (Bitmap) data.getExtras().get(&quot;data&quot;);
                        ImageView imageView = findViewById(R.id.imageView);
                        imageView.setImageBitmap(imageBitmap);
                    }
                }
            }
    );
    void checkPermissionsCamera() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)
                != PackageManager.PERMISSION_GRANTED ) {

            ActivityCompat.requestPermissions(this, new String[]{
                    Manifest.permission.CAMERA
            }, 1);
        }
    }

    // !!!! Eskide kaldı. startActivityForResult(intent, 1) ile birlikte kullanılırdı.
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 1 &amp;&amp; resultCode == RESULT_OK) {
            Uri uri = data.getData();
            try {
                OutputStream outputStream = getContentResolver().openOutputStream(uri);
                outputStream.write(&quot;Merhaba Dünya!&quot;.getBytes());
                outputStream.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
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
                    <td class="analysis-code-cell"><code>new Intent(this, TabbedActivity.class)</code></td>
                    <td class="analysis-explain-cell">Hedef sınıfı açıkça belirterek (Explicit Intent) uygulama içindeki sekmeli ekrana geçiş hazırlar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>startActivity(intent)</code></td>
                    <td class="analysis-explain-cell">Hazırlanan geçiş isteğini (intent) işletim sistemine ileterek hedef Activity ekranını başlatır.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 13. Intents & Permissions (Etkinlik Geçişleri) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_intents" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_intents">Soru 1 / 10</span>
            <span id="mini_score_intents">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_intents" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_intents" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_intents" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_intents"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('intents', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('intents', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
