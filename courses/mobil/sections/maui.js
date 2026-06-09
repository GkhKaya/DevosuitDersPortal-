/* Devosuit Partial — maui
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['maui'] = `<section id="maui" class="project-section card">
        <div class="section-header">
            <h2>.NET MAUI & Blazor Hybrid</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> VisualStudioProjects</span>
        </div>
        <p class="section-desc">Microsoft'un C# ve XAML kullanarak cross-platform yerel uygulamalar geliştirmeyi sağlayan yapısı ve Blazor web bileşenlerinin native container içinde çalıştırılması.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>.NET MAUI:</strong> Xamarin.Forms'un gelişmiş versiyonudur. Android, iOS, macOS ve Windows için yerel kullanıcı arayüzleri sağlar.</li><li><strong>Blazor Hybrid:</strong> HTML/CSS ve Razor bileşenleri içeren web kodlarının, MAUI içinde gömülü bir \`BlazorWebView\` üzerinde çalıştırılarak yerel cihaz özelliklerine doğrudan C# üzerinden erişebilmesidir.</li><li><strong>Razor ve C# Etkinlikleri:</strong> HTML butonu üzerinde \`@onclick="myclickfunc"\` yazılarak Blazor C# metodları tetiklenebilir veya inline JavaScript \`onclick="this.innerHTML+='A'"\` ile doğrudan tarayıcı DOM'u üzerinde işlem yapılabilir.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Blazor Hybrid'in geleneksel Web View tabanlı uygulamalardan (Cordova vb.) farkı nedir? (Blazor Hybrid'de C# kodları bir WebAssembly veya sunucu köprüsü üzerinden değil, doğrudan cihaz üzerinde yerel makine kodu hızında çalışır ve platform API'lerine (dosya sistemi, kamera vb.) doğrudan erişebilir).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>XAML dosyası ile arka plan kodu (code-behind) arasındaki ilişki nasıldır? (Örneğin \`MainPage.xaml\` tasarımı tanımlarken, \`MainPage.xaml.cs\` C# kodlarını içerir. This iki dosya derleme aşamasında \`partial class\` birleşimi ile bir araya gelir).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>MauiProgram.cs dosyasının görevi nedir? (Uygulamanın başlangıç noktasıdır. Fontları kaydeder, bağımlılık enjeksiyonunu (Dependency Injection) yapılandırır ve \`MauiApp\` nesnesini oluşturur).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> VisualStudioProjects/1-MauiApp/DotNetMauiApp/MainPage.xaml.cs</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-csharp">﻿namespace DotNetMauiApp
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void OnCounterClicked(object? sender, EventArgs e)
        {
            count++;

            if (count == 1)
                CounterBtn.Text = $&quot;Clicked {count} time&quot;;
            else
                CounterBtn.Text = $&quot;Clicked {count} times&quot;;

            SemanticScreenReader.Announce(CounterBtn.Text);
        }
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
                    <td class="analysis-code-cell"><code>InitializeComponent();</code></td>
                    <td class="analysis-explain-cell">XAML dosyasında tanımlanan görsel bileşenleri yükler ve arka plandaki C# değişkenleriyle eşleştirir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>SemanticScreenReader.Announce(...)</code></td>
                    <td class="analysis-explain-cell">Ekran okuyucu (erişilebilirlik) kullanan kullanıcılara butonun tıklandığı bilgisini sesli olarak bildirir.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> VisualStudioProjects/2-MAUIBlazorHybridApp/MAUIBlazorHybridApp/Components/Pages/MyPage.razor</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-razor">﻿@page &quot;/mypage&quot;

&lt;h3&gt;MyPage&lt;/h3&gt;

&lt;ol&gt;
    @for (int i = 0; i &lt; 10; i++)
    {
        &lt;li&gt;item @i&lt;/li&gt;
    }
&lt;/ol&gt;

&lt;button @onclick=&quot;myclickfunc&quot;&gt;Button&lt;/button&gt;

&lt;div&gt;@ResultText&lt;/div&gt;

&lt;div onclick=&quot;this.innerHTML+=&#x27;A&#x27;&quot;&gt;Buraya Tıkla&lt;/div&gt;

@code {
    public class MyClass
    {
        //üyeler ... tanımlayabilirsin
    }

    private string ResultText = &quot;Henüz tıklanmadı&quot;;

    private void myclickfunc()
    {
        ResultText = &quot;Butona tıklandı!&quot;;
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
                    <td class="analysis-code-cell"><code>@page &quot;/mypage&quot;</code></td>
                    <td class="analysis-explain-cell">Sayfanın uygulama içi yönlendirme adresini (route path) belirler.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>@onclick=&quot;myclickfunc&quot;</code></td>
                    <td class="analysis-explain-cell">HTML butonuna tıklandığında arka planda (native .NET) çalışan C# metodunun tetiklenmesini sağlar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>onclick=&quot;this.innerHTML+=&#x27;A&#x27;&quot;</code></td>
                    <td class="analysis-explain-cell">Blazor runtime yerine doğrudan WebView tarayıcısının JavaScript motorunda çalışan istemci taraflı inline JS olayı.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> .NET MAUI & Blazor Hybrid - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_maui" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_maui">Soru 1 / 10</span>
            <span id="mini_score_maui">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_maui" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_maui" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_maui" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_maui"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('maui', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('maui', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
