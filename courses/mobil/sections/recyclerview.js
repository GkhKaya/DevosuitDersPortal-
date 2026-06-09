/* Devosuit Partial — recyclerview
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['recyclerview'] = `<section id="recyclerview" class="project-section card">
        <div class="section-header">
            <h2>5 & 6. RecyclerView & Adapter (Gelişmiş Liste)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/5-RecyclerViewAndAdapter</span>
        </div>
        <p class="section-desc">ListView bileşeninin yerini alan, görünmeyen listeleri bellekten silmek yerine geri dönüştürerek (recycle) tekrar kullanan yüksek performanslı liste bileşenidir.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>ViewHolder Kalıbı:</strong> Liste elemanlarının XML içerisindeki görünüm referanslarını (\`findViewById\`) önbelleğe alarak sürekli çağrılmasını engeller. RecyclerView bu yapıyı zorunlu tutar.</li><li><strong>onCreateViewHolder():</strong> Yeni bir liste hücresi tasarımı (\`my_item.xml\`) şişirildiğinde (inflate edildiğinde) çağrılır ve yeni bir ViewHolder nesnesi döner.</li><li><strong>onBindViewHolder():</strong> Belirli bir pozisyondaki veriyi ViewHolder içerisindeki görsel bileşenlere bağlar (verileri yazar). Hücre ekrana her geldiğinde çağrılır.</li><li><strong>Expandable (Genişletilebilir) RecyclerView:</strong> \`onBindViewHolder\` içinde tıklama olayı dinlenerek modeldeki \`expand\` durumu değiştirilir (\`item.expand = !item.expand\`). Detay alanının görünürlüğü \`View.VISIBLE\` veya \`View.GONE\` yapılır ve \`notifyItemChanged(position)\` ile sadece o satırın yeniden çizilmesi tetiklenir.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>RecyclerView'ı ListView'dan ayıran en temel farklar nelerdir? (1. Zorunlu ViewHolder deseni, 2. Düzeni esnekleştiren LayoutManager (Linear, Grid, Staggered), 3. Dahili ItemAnimator ile kolay hücre animasyonları, 4. Hücrelerin yeniden kullanımı ile mükemmel bellek yönetimi).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Neden Adapter içindeki \`ViewHolder\` sınıfı statik (static class) olarak tanımlanmalıdır? (Statik olmayan iç sınıflar üst dış sınıfın (Adapter) referansını gizli olarak tutar. Bu da gereksiz bellek kullanımına ve memory leak (bellek sızıntısı) riskine yol açar).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Liste verisi değiştiğinde hangi metotlar çağrılmalıdır? (Tüm listenin yenilenmesi için \`notifyDataSetChanged()\`, tek bir satırın güncellenmesi için performans dostu olan \`notifyItemChanged(position)\` tercih edilmelidir).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/5-RecyclerViewAndAdapter/app/src/main/java/com/example/myapplication/MyAdapter.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.myapplication;

import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class MyAdapter extends RecyclerView.Adapter&lt;MyAdapter.MyViewHolder&gt; {
    public static ArrayList&lt;ItemData&gt; itemList;

    // ViewHolder sınıfı
    static class MyViewHolder extends RecyclerView.ViewHolder {
        TextView itemText;

        MyViewHolder(View itemView) {
            super(itemView);
            itemText = itemView.findViewById(R.id.itemText);
        }
    }

    public MyAdapter() {
        itemList = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; 1000; i++) {
            ItemData item = new ItemData();
            item.title = &quot;ItemText &quot; + i;
            itemList.add(item);
        }
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.my_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.itemText.setBackgroundColor(position % 2 == 0 ? Color.LTGRAY : Color.GRAY);
        holder.itemText.setTextColor(Color.YELLOW);
        holder.itemText.setText(MyAdapter.itemList.get(position).title);
    }

    @Override
    public int getItemCount() {
        return itemList.size();
    }
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
                    <td class="analysis-code-cell"><code>static class MyViewHolder extends ...</code></td>
                    <td class="analysis-explain-cell">Bellek sızıntılarını (memory leaks) engellemek amacıyla statik olarak tanımlanmış, hücre elemanlarını tutan önbellek sınıfı.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>onCreateViewHolder(...)</code></td>
                    <td class="analysis-explain-cell">Liste hücresi (layout) ilk kez oluşturulurken XML dosyasını şişirir (inflate) ve ViewHolder'ı döndürür.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>onBindViewHolder(...)</code></td>
                    <td class="analysis-explain-cell">Hücre ekrana her geldiğinde tetiklenerek ilgili pozisyondaki verileri görsel arayüze (TextView vb.) yansıtır.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>notifyItemChanged(position)</code></td>
                    <td class="analysis-explain-cell">Tüm listeyi yenilemek yerine sadece durumu değişen satırı güncelleyerek işlemci yükünü azaltır.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/6-RecyclerViewAndAdapterItemExpandableItem/app/src/main/java/com/example/myapplication/MyAdapter.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.myapplication;

import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class MyAdapter extends RecyclerView.Adapter&lt;MyAdapter.MyViewHolder&gt; {
    public static ArrayList&lt;ItemData&gt; itemList;

    // ViewHolder sınıfı
    static class MyViewHolder extends RecyclerView.ViewHolder {

        TextView itemText, detailText;
        LinearLayout expandableLayout;

        MyViewHolder(View itemView) {
            super(itemView);
            itemText = itemView.findViewById(R.id.itemText);
            detailText = itemView.findViewById(R.id.detailText);
            expandableLayout = itemView.findViewById(R.id.expandableLayout);
        }
    }

    public MyAdapter() {
        itemList = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; 1000; i++) {
            ItemData item = new ItemData();
            item.title = &quot;ItemTitle &quot; + i;
            item.childTitle = &quot;ChildTitle &quot; + i;
            itemList.add(item);
        }
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.my_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        ItemData item = MyAdapter.itemList.get(position);

        holder.itemText.setBackgroundColor(position % 2 == 0 ? Color.LTGRAY : Color.GRAY);
        holder.itemText.setTextColor(Color.YELLOW);
        holder.itemText.setText(item.title);
        holder.detailText.setText(item.childTitle);

        // Açık/Kapalı kontrolü
        holder.expandableLayout.setVisibility(item.expand ? View.VISIBLE : View.GONE);

        // Tıklama ile expand/collapse
        holder.itemText.setOnClickListener(v -&gt; {
            item.expand = !item.expand;
            notifyItemChanged(position);
        });

    }

    @Override
    public int getItemCount() {

        return itemList.size();
    }
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
                    <td class="analysis-code-cell"><code>holder.expandableLayout.setVisibility(...)</code></td>
                    <td class="analysis-explain-cell">Satırdaki detay alanını, modeldeki 'expand' (açık) durumuna göre görünür (VISIBLE) veya gizli (GONE) yapar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>holder.itemText.setOnClickListener(...)</code></td>
                    <td class="analysis-explain-cell">Satır başlığına tıklandığında expand durumunu tersine çevirir ve o satırı yeniden çizdirir.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 5 & 6. RecyclerView & Adapter (Gelişmiş Liste) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_recyclerview" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_recyclerview">Soru 1 / 10</span>
            <span id="mini_score_recyclerview">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_recyclerview" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_recyclerview" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_recyclerview" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_recyclerview"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('recyclerview', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('recyclerview', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
