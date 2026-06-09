/* Devosuit Partial — fragments
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['fragments'] = `<section id="fragments" class="project-section card">
        <div class="section-header">
            <h2>9. Fragments (Parçalı Arayüzler)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/9-Fragments</span>
        </div>
        <p class="section-desc">Bir Activity içerisinde kendi yaşam döngüsüne sahip, bağımsız, yeniden kullanılabilir arayüz modülleridir. Jetpack Navigation kütüphanesi ile geçişler yönetilmektedir.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>Fragment Yaşam Döngüsü:</strong> Activity yaşam döngüsüne bağlıdır. \`onCreateView\` arayüzün tasarlandığı, \`onViewCreated\` ise arayüz elemanlarının kodlandığı kısımdır.</li><li><strong>View Binding Bellek Yönetimi:</strong> Fragment'larda view binding nesnesi (\`binding\`) \`onDestroyView()\` içinde mutlaka \`null\` yapılmalıdır. Aksi takdirde fragment hafızadan atılsa bile arayüz nesneleri bellekte kalarak bellek sızıntısına (memory leak) yol açar.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Hocanın sınıfta düzelttiği kritik hata nedir? (\`Navigation.findNavController(Activity, viewId)\` kullanımı Activity henüz tamamen çizilmeden çağrıldığında hata verir. Bunun yerine \`getSupportFragmentManager().findFragmentById(id)\` ile \`NavHostFragment\` bulunmalı ve onun üzerinden \`getNavController()\` alınmalıdır).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Neden Fragment'ta \`onDestroyView\` içerisinde binding nesnesini null yapıyoruz? (Fragment yaşam döngüsünde Fragment nesnesi yok edilmeden önce View nesnesi yok edilebilir. Bu esnada binding'i temizlemezsek View nesneleri bellekte sızıntı yapar).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Fragment'lar arası geçiş ve geri tuşu yönetimi: \`navigate()\` yapıldığında geçişlerin geri tuşu ile takip edilebilmesi için backstack (geri yığını) yönetimi nasıl çalışır? (Jetpack Navigation bunu otomatik yönetir, klasik fragment işlemlerinde ise \`transaction.addToBackStack(null)\` çağrılmalıdır).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/9-Fragments/app/src/main/java/com/example/fragments/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.fragments;

import android.os.Bundle;

import androidx.activity.EdgeToEdge;

import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;

import android.view.View;

import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.fragment.NavHostFragment;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.example.fragments.databinding.ActivityMainBinding;

import android.view.Menu;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    private AppBarConfiguration appBarConfiguration;
    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        ViewCompat.setOnApplyWindowInsetsListener(binding.main, (v, insets) -&gt; {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
        setSupportActionBar(binding.toolbar);

        //NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);  //örneğin orjinal kodu. !!!hata var
        //Yeni eklendi
        NavHostFragment navHostFragment = (NavHostFragment) getSupportFragmentManager()
                        .findFragmentById(R.id.nav_host_fragment_content_main);
        NavController navController = navHostFragment.getNavController();
        //Yeni eklendi sonu
        appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

        binding.fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, &quot;Replace with your own action&quot;, Snackbar.LENGTH_LONG)
                        .setAnchorView(R.id.fab)
                        .setAction(&quot;Action&quot;, null).show();
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        return NavigationUI.navigateUp(navController, appBarConfiguration)
                || super.onSupportNavigateUp();
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
                    <td class="analysis-code-cell"><code>getSupportFragmentManager().findFragmentById(...)</code></td>
                    <td class="analysis-explain-cell">NavHostFragment'a erişebilmek için Activity yöneticisinden ilgili id'ye sahip fragment'ı bulur.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>NavController navController = navHostFragment.getNavController();</code></td>
                    <td class="analysis-explain-cell">Ekranda gezinmeyi (navigation) yönetecek olan kontrolcü nesnesini NavHostFragment üzerinden güvenle çeker.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/9-Fragments/app/src/main/java/com/example/fragments/FirstFragment.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.fragments;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.example.fragments.databinding.FragmentFirstBinding;

public class FirstFragment extends Fragment {

    private FragmentFirstBinding binding;

    @Override
    public View onCreateView(
            @NonNull LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = FragmentFirstBinding.inflate(inflater, container, false);
        return binding.getRoot();

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        binding.buttonFirst.setOnClickListener(v -&gt;
                NavHostFragment.findNavController(FirstFragment.this)
                        .navigate(R.id.action_FirstFragment_to_SecondFragment)
        );
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
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
                    <td class="analysis-code-cell"><code>binding = FragmentFirstBinding.inflate(...)</code></td>
                    <td class="analysis-explain-cell">Fragment arayüzünü (XML) belleğe yükler (inflate) ve bileşenlere erişim referansı sunar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>NavHostFragment.findNavController(...).navigate(...)</code></td>
                    <td class="analysis-explain-cell">Navigasyon grafiğinde tanımlı geçiş aksiyon ID'sini tetikleyerek sonraki fragment'a geçişi başlatır.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>binding = null;</code></td>
                    <td class="analysis-explain-cell">Fragment görünümü yok edildiğinde arayüz nesnelerini bellekten salmak ve memory leak oluşmasını engellemek için binding'i sıfırlar.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 9. Fragments (Parçalı Arayüzler) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_fragments" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_fragments">Soru 1 / 10</span>
            <span id="mini_score_fragments">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_fragments" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_fragments" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_fragments" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_fragments"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('fragments', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('fragments', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
