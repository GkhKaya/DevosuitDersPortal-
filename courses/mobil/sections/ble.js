/* Devosuit Partial — ble
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['ble'] = `<section id="ble" class="project-section card">
        <div class="section-header">
            <h2>10. BLE (Bluetooth Low Energy) & Permissions</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/10-BLE(BluetoothLowEnergy)_AndPermissions</span>
        </div>
        <p class="section-desc">Düşük güç tüketen Bluetooth cihazlarını tarama, listeleme ve çalışma zamanı izinleri (Runtime Permissions) yönetimini gösteren gelişmiş proje.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>BluetoothLeScanner:</strong> BLE tarama işlemlerini başlatan ve durduran sınıftır. \`BluetoothAdapter.getDefaultAdapter().getBluetoothLeScanner()\` ile alınır.</li><li><strong>ScanCallback ve onScanResult():</strong> Tarayıcı bir BLE cihazı bulduğunda \`onScanResult(int callbackType, ScanResult result)\` callback metodu tetiklenir. Cihaz bilgiisi (isim ve MAC adresi) RecyclerView adaptörüne eklenir.</li><li><strong>Runtime Permissions:</strong> Android 6.0 (API 23) sonrasında riskli izinler çalışma zamanında kullanıcıdan istenir. Android 12 (API 31) sonrasında ise BLE için \`BLUETOOTH_SCAN\` ve \`BLUETOOTH_CONNECT\` izinleri zorunlu kılınmıştır.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Android 12+ (API 31) için BLE taraması yaparken manifestte hangi izinler tanımlanmalı ve çalışma zamanında istenmelidir? (1. \`android.permission.BLUETOOTH_SCAN\`, 2. \`android.permission.BLUETOOTH_CONNECT\`, 3. \`android.permission.ACCESS_FINE_LOCATION\` (Çevredeki cihazlardan konum tespiti yapılabildiği için konum izni şarttır)).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Kullanıcının izin isteğine verdiği cevap nasıl yakalanır? (Activity içerisindeki \`onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults)\` metodu override edilerek kontrol edilir).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>BLE Tarama süresini sınırlamanın önemi nedir ve nasıl yapılır? (BLE taraması pil tüketimini aşırı artırır. Projede \`handler.postDelayed(() -> stopScan(), 10000)\` ile tarama 10 saniye sonra otomatik olarak durdurulmaktadır).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/10-BLE(BluetoothLowEnergy)_AndPermissions/app/src/main/java/com/example/ble/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.ble;

import android.content.pm.PackageManager;
import android.os.Bundle;
import android.widget.Button;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.Manifest;
import android.widget.Toast;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private BleScanner bleScanner;
    public DataAdapter adapter;

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

        RecyclerView recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        adapter = new DataAdapter();
        recyclerView.setAdapter(adapter);

        bleScanner = new BleScanner(this);

        Button startScanButton = findViewById(R.id.startScanButton);
        Button stopScanButton = findViewById(R.id.stopScanButton);

        startScanButton.setOnClickListener(v -&gt; bleScanner.checkPermissionsAndStartScan());
        stopScanButton.setOnClickListener(v -&gt; bleScanner.stopScan());
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        switch (requestCode) {
            case BleScanner.PERMISSION_REQUEST_CODE: {
                for (int i = 0; i &lt; permissions.length; i++) {
                    String text = String.format(&quot;Grant %s = %s\\n&quot;,permissions[i].split(&quot;\\\\.&quot;)[2], grantResults[i] == PackageManager.PERMISSION_GRANTED);
                    Toast.makeText(this, text, Toast.LENGTH_LONG).show();
                }
                break;
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
                    <td class="analysis-code-cell"><code>bleScanner.checkPermissionsAndStartScan()</code></td>
                    <td class="analysis-explain-cell">Kullanıcı tarama butonuna bastığında, gerekli konum ve bluetooth izinlerini kontrol edip taramayı başlatır.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>onRequestPermissionsResult(...)</code></td>
                    <td class="analysis-explain-cell">İzin penceresinde kullanıcının onay veya red yanıtını yakalar ve durumu ekranda Toast mesajı olarak gösterir.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/10-BLE(BluetoothLowEnergy)_AndPermissions/app/src/main/java/com/example/ble/BleScanner.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.ble;

import android.Manifest;
import android.app.Activity;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.le.ScanCallback;
import android.bluetooth.le.ScanResult;
import android.bluetooth.le.BluetoothLeScanner;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import java.util.List;

public class  BleScanner {

    public static final int PERMISSION_REQUEST_CODE = 1001;
    private final String TAG = &quot;BLEScanner&quot;;
    private final BluetoothLeScanner bluetoothLeScanner;
    private Handler handler;
    private MainActivity activity;
    private static final long SCAN_PERIOD = 10000; // 10 seconds

    public BleScanner(MainActivity activity) {
        this.activity = activity;
        BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        bluetoothLeScanner = bluetoothAdapter.getBluetoothLeScanner();
        handler = new Handler(Looper.getMainLooper());
    }

    void checkPermissionsAndStartScan() {
        if (ContextCompat.checkSelfPermission(activity, android.Manifest.permission.BLUETOOTH_SCAN)
                != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(activity, android.Manifest.permission.BLUETOOTH_CONNECT)
                        != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(activity, android.Manifest.permission.ACCESS_FINE_LOCATION)
                        != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(activity, new String[]{
                    android.Manifest.permission.BLUETOOTH_SCAN,
                    android.Manifest.permission.BLUETOOTH_CONNECT,
                    Manifest.permission.ACCESS_FINE_LOCATION
            }, PERMISSION_REQUEST_CODE);
        } else {
            startScan();
        }
    }

    public void startScan() {
        handler.postDelayed(() -&gt; stopScan(), SCAN_PERIOD); //10s sonra durduran timer
        activity.adapter.items.clear();
        activity.adapter.notifyDataSetChanged();//!!!!!!
        bluetoothLeScanner.startScan(scanCallback);
        Log.i(TAG, &quot;Started&quot;);
    }

    public void stopScan() {
        bluetoothLeScanner.stopScan(scanCallback);
        Log.i(TAG, &quot;Stopped&quot;);
    }

    private final ScanCallback scanCallback = new ScanCallback() {
        @Override
        public void onScanResult(int callbackType, ScanResult result) {
            BluetoothDevice device = result.getDevice();
            String itemData = String.format(&quot;%d. %s [%s]&quot;, activity.adapter.getItemCount()+1 , device.getName(),device.getAddress());
            //device.connectGatt(activity, false, gattCallback);//Daha sonra anlatılacak. Bluetooth GATT (Genel Öznitelik Profili), herhangi bir BLE sisteminin tasarımının temelidir ve iki BLE cihazının birbiriyle etkileşim şeklini tanımlar.
            //System.out.println(itemData);
            Log.i(TAG, itemData);
            if (activity != null) {
                activity.adapter.items.add(itemData);
                activity.adapter.notifyDataSetChanged();
            }
        }
    };
}
</code></pre>
            
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
                    <td class="analysis-code-cell"><code>BluetoothAdapter.getDefaultAdapter().getBluetoothLeScanner()</code></td>
                    <td class="analysis-explain-cell">Cihazın yerleşik Bluetooth donanımı üzerinden Bluetooth Low Energy tarayıcısını (Scanner) alır.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>ActivityCompat.requestPermissions(...)</code></td>
                    <td class="analysis-explain-cell">Çalışma zamanında (runtime) kullanıcıdan BLE tarama ve konum için gerekli kritik izinleri ister.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>bluetoothLeScanner.startScan(scanCallback);</code></td>
                    <td class="analysis-explain-cell">BLE cihaz taramasını başlatır. Keşfedilen her cihaz callback arayüzüne düşer.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>handler.postDelayed(() -&gt; stopScan(), SCAN_PERIOD);</code></td>
                    <td class="analysis-explain-cell">Pil tasarrufu amacıyla BLE tarayıcısını 10 saniye (10000ms) sonra otomatik durduracak zamanlayıcıyı kurar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>onScanResult(...)</code></td>
                    <td class="analysis-explain-cell">Tarayıcı menzilinde bir BLE cihazı bulduğunda tetiklenen ve cihaz bilgilerini (MAC vb.) listeye ekleyen callback metodu.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 10. BLE (Bluetooth Low Energy) & Permissions - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_ble" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_ble">Soru 1 / 10</span>
            <span id="mini_score_ble">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_ble" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_ble" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_ble" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_ble"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('ble', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('ble', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
