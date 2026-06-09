/* Devosuit Partial — location
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['location'] = `<section id="location" class="project-section card">
        <div class="section-header">
            <h2>12. Location & Permissions (Konum Servisleri)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/12-Location_AndPermissions</span>
        </div>
        <p class="section-desc">Google Play Hizmetleri aracılığıyla en son bilinen cihaz konumunu (enlem/boylam) alma ve konum izinlerinin yönetimi.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>Reseller / Provider Farkı:</strong> Konum almak için en optimize sağlayıcı Google'ın \`FusedLocationProviderClient\` yapısıdır. GPS, Wi-Fi ve baz istasyonlarını harmanlayarak pil tasarrufu sağlar.</li><li><strong>getLastLocation():</strong> Cihazda kayıtlı en son konum verisini getirir. Asenkron bir görev (Task) döndürdüğü için \`addOnSuccessListener\` ile dinlenir.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Konum alırken kullanılan iki temel izin arasındaki fark nedir? (\`ACCESS_COARSE_LOCATION\` yaklaşık konum sunarken (hücresel baz istasyonları ve Wi-Fi), \`ACCESS_FINE_LOCATION\` GPS kullanarak hassas konum tespiti sağlar).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>FusedLocationProviderClient kullanmanın geleneksel LocationManager'a göre avantajı nedir? (Pil verimliliği, otomatik sağlayıcı seçimi ve GPS uydularının bağlanmasını beklemeden hızlıca son konumu getirebilmesidir).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Eğer cihazda konum servisleri kapalıysa veya önbellekte konum yoksa \`getLastLocation()\` ne döner? (\`null\` döner. Bu yüzden gelen değer mutlaka null kontrolünden geçirilmelidir).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/12-Location_AndPermissions/app/src/main/java/com/example/location/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.location;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.Task;

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

    public void getLocation(View view) {
        // Konum bilgis alma
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED &amp;&amp; ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            checkPermissionsLocation();
            return;
        }

        FusedLocationProviderClient fusedLocationClient = LocationServices.getFusedLocationProviderClient(this);
        fusedLocationClient.getLastLocation()
                .addOnSuccessListener(this, location -&gt; {
                    if (location != null) {
                        double latitude = location.getLatitude();
                        double longitude = location.getLongitude();
                        Toast.makeText(this,
                                &quot;Lat: &quot; + latitude + &quot; Lon: &quot; + longitude,
                                Toast.LENGTH_LONG).show();
                    } else {
                        Toast.makeText(this, &quot;Konum bulunamadı&quot;, Toast.LENGTH_SHORT).show();
                    }
                });
    }

    void checkPermissionsLocation() {
        if (ContextCompat.checkSelfPermission(this, android.Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION)
                        != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(this, new String[]{
                    Manifest.permission.ACCESS_FINE_LOCATION,
                    Manifest.permission.ACCESS_COARSE_LOCATION
            }, 1);
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
                    <td class="analysis-code-cell"><code>LocationServices.getFusedLocationProviderClient(this)</code></td>
                    <td class="analysis-explain-cell">En az güç tüketimiyle hassas konum sunan Google Play Hizmetleri konum istemcisini alır.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>fusedLocationClient.getLastLocation()</code></td>
                    <td class="analysis-explain-cell">Cihazın önbelleğe aldığı en son bilinen coğrafi konumunu (enlem/boylam) asenkron olarak talep eder.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>addOnSuccessListener(...)</code></td>
                    <td class="analysis-explain-cell">Konum verisi başarıyla alındığında tetiklenen dinleyici. Gelen konum null değilse enlem boylam verilerini okur.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 12. Location & Permissions (Konum Servisleri) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_location" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_location">Soru 1 / 10</span>
            <span id="mini_score_location">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_location" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_location" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_location" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_location"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('location', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('location', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
