/* Devosuit Partial — olcmeyi-yonetme
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['olcmeyi-yonetme'] = `<section id="olcmeyi-yonetme" class="project-section card">
        <div class="section-header">
            <h2>5. Metrikler & Fitness Functions</h2>
            <span class="path-badge"><i class="fas fa-book"></i> Karakteristikleri Ölçme</span>
        </div>
        <p class="section-desc">Kod kalitesi ve mimari kuralların sürdürülebilirliği; Siklomatik Karmaşıklık, LCOM, Ana Diziden Uzaklık metrikleri ve otomatik Mimari Uygunluk Fonksiyonları (ArchUnit) ile korunur.</p>
        
        <!-- DETAYLI KONU ANLATIMI VE DERS NOTLARI (DERS KİTABI FORMATINDA - TÜM DETAYLAR AÇIK VE EKSİKSİZ) -->
        <div class="detailed-textbook-guide mt-4" style="background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 2rem; margin-bottom: 2.5rem;">
            <h3 style="margin-bottom: 1.5rem; display:flex; align-items:center; gap:0.6rem; font-size:1.5rem; color:var(--text-primary); border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom:1rem; font-weight:700;">
                <i class="fas fa-book-reader" style="color:var(--accent);"></i>
                <span>Tüm Detaylarıyla Konu Anlatımı (15 Slaytın Tam Akışı)</span>
            </h3>
            <div class="textbook-content" style="display: flex; flex-direction: column; gap: 2rem;">
                
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 1: Bölüm 5 Mimari Karakteristikleri Ölçme ve Yönetme</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 1 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                
            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 2: Mimari Karakteristikleri Ölçme ve Yönetme</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 2 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <ul class='styled-list'>
<li>Mimarlar, yazılım projelerinde çok çeşitli mimari karakteristikleri**</li>
<li>yönetmek zorundadır:**</li>
</ul>
<p>Operasyonel karakteristikler: **Performans**, **Esneklik**, **ölçeklenebilirlik**</p>
<p>Yapısal karakteristikler: **Okunabilirlik**, **yayınlanabilirlik**</p>
<p>Bu bölüm, yaygın mimari karakteristikleri tanımlamaya ve onları yönetmek</p>
<p>için mekanizmalar oluşturmaya odaklanmaktadır.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 3: Mimari Karakteristikleri Ölçerken Karşılaşılan Sorunlar</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 3 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <ul class='styled-list'>
<li>Fiziksel Olmayan Kavramlar:**   - Çeviklik ( _agility_ ) veya</li>
</ul>
<p>yayınlanabilirlik ( _deployability_ ) gibi soyut kavramlar için net bir tasarım</p>
<p>yolu yoktur.</p>
<ul class='styled-list'>
<li>Değişken Tanımlar:**   - Aynı organizasyonda bile, farklı ekipler kritik</li>
</ul>
<p>özellikleri farklı tanımlayabilir (örneğin _performans_ ).</p>
<ul class='styled-list'>
<li>Çok Bileşenli Yapılar:**   - Örneğin, çeviklik ( _agility_ ) aslında modülerlik</li>
</ul>
<p>( _modularity_ ), yayınlanabilirlik ( _deployability_ ) ve test edilebilirlik</p>
<p>( _testability_ ) gibi alt özelliklerden oluşur.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 4: Çözüm: Objektif Tanımlar</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 4 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <ul class='styled-list'>
<li>Proje ekibi genelinde ortak tanımlar belirlemek, üç temel fayda sağlar:**</li>
<li>Ortak mimari dili oluşturma:**</li>
<li>Tüm ekiplerin aynı terimleri aynı şekilde anlamasını sağlar.</li>
</ul>
<p>2</p>
<ul class='styled-list'>
<li>Ölçülebilirlik:**</li>
<li>Karakteristikleri somut verilerle değerlendirmeye yardımcı olur.</li>
<li>Bileşenleri ayrıştırma:**</li>
<li>Büyük kavramları küçük, ölçülebilir alt bileşenlere ayırarak</li>
</ul>
<p>yönetilebilir hale getirir.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 5: Operasyonel Ölçümler</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 5 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Bazı mimari karakteristikler doğrudan ölçülebilir:</p>
<p>Performans</p>
<p>Ölçeklenebilirlik gibi</p>
<p>Ancak, ölçüm yöntemleri kritik öneme sahiptir. Örneğin, Bir sorguya ait</p>
<p>yanıt süresi performans ölçütü olarak incelenecekse;</p>
<p>Ortalama yanıt süresi odağa alınırsa hatalı bir analiz yapılmış olabilir.</p>
<p>Çünkü uç değerler (outliers) gözden kaçırılabilir.</p>
<p>Bu yüzden maksimum yanıt süresi ölçümü, aşırı gecikmeleri tespit etmek</p>
<p>için önemlidir.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 6: Operasyonel Ölçümler</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 6 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Örnek bir sorgu yanıt süresi analizi:</p>
<p>Sadece ortalama değeri (374,67 ms) baz alırsak hatalı bir analiz yapmış</p>
<p>oluruz.</p>
<p>Uç değerleri (outliers) gözden kaçırmamak lazım.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 7: İstatistiksel Analiz ve Dinamik Ölçüm</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 7 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Profesyonel ekipler sabit eşikler yerine istatistiksel modeller</p>
<p>kullanmalıdır.</p>
<p>Örnek: Bir video akış hizmeti ölçeklenebilirliği nasıl yönetir?</p>
<p>Ölçeklenebilirlik zaman içinde izlenir ve istatistiksel modeller oluşturulur.</p>
<p>Gerçek zamanlı veriler modelin dışına çıktığında alarm üretilir.</p>
<p>Bu yöntem, hem model hatalarını hem de sistemdeki anormallikleri</p>
<p>tespit etmeye yardımcı olur.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 8: İstatistiksel Yöntemlerle Ölçeklenebilirlik Takibi</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 8 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <ul class='styled-list'>
<li>Hareketli Ortalamalar** : Son _n_ ölçümün ortalamasını alarak ani</li>
</ul>
<p>değişimlere odaklanabilir.</p>
<ul class='styled-list'>
<li>Z-Skoru ile Anomali Tespiti** : Ölçümün ortalamadan kaç standart sapma</li>
</ul>
<p>uzaklıkta olduğunu belirler. _±_ 3 _σ_ dışındaki değerler anomali kabul</p>
<p>edilebilir.</p>
<ul class='styled-list'>
<li>EWMA (Üstel Ağırlıklı Hareketli Ortalama)** : Güncel verilere daha</li>
</ul>
<p>fazla ağırlık vererek ani değişimlere duyarlıdır.</p>
<ul class='styled-list'>
<li>ARIMA (AutoRegressive Integrated Moving Average) ile**</li>
<li>Tahminleme** : Geçmiş verilere dayanarak gelecekteki yük tahmin edilir,</li>
</ul>
<p>sapmalar alarm tetikleyebilir.</p>
<ul class='styled-list'>
<li>Yüzdelik (Percentile) Takibi** : p95 veya p99 değerlerini izleyerek en</li>
</ul>
<p>kötü durum performansı değerlendirilir.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 9: Yeni Ölçüm Yöntemleri ve Gelişen Metrikler</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 9 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Ölçülebilir karakteristikler sürekli gelişmektedir.</p>
<p>Örnek: Web performansı için yeni metrikler:</p>
<p>İlk içeriğin yüklenme süresi (First Contentful Paint)</p>
<p>İlk işlem için CPU’nun hazır olma süresi (First CPU Idle)</p>
<p>Cihazlar, hedefler ve teknolojiler değiştikçe yeni ölçüm yöntemleri</p>
<p>geliştirilmektedir.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 10: Yapısal (Structural) Ölçümler</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 10 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Yapısal ölçümler, kod kalitesini değerlendirmek için kullanılan metriklerdir:</p>
<ul class='styled-list'>
<li>Çeviklik ve Modülerlik**</li>
</ul>
<p>Modüler bir sistem, bağımlılığı en az bileşenlerden oluşmalıdır.</p>
<ul class='styled-list'>
<li>Bağımlılık Yoğunluğu** : Bir modülün diğer modüllere olan bağımlılığını</li>
</ul>
<p>ölçerek esneklik ve değiştirilebilirlik değerlendirilir.</p>
<ul class='styled-list'>
<li>Bağımlılık ve Bağlılık (Coupling and Cohesion)**</li>
<li>Bağımlılık (Coupling)** : Bir bileşenin başka bileşenlere bağımlılık</li>
</ul>
<p>seviyesini gösterir. Yüksek bağımlılık kod değişikliklerini zorlaştırır.</p>
<ul class='styled-list'>
<li>Bağlılık (Cohesion)** : Bir bileşenin içindeki parçaların birbirleriyle</li>
</ul>
<p>ilişkisini gösterir. Yüksek bağlılık, bileşenin belirli bir işlevi iyi yaptığını</p>
<p>gösterir.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 11: Yapısal (Structural) Ölçümler</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 11 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Yapısal ölçümler, kod kalitesini değerlendirmek için kullanılan metriklerdir:</p>
<ul class='styled-list'>
<li>Tekrarlılık (Duplication) ve Anlaşılabilirlik**</li>
<li>Tekrarlayan Kod** : Aynı işlevin farklı yerlerde tekrarlanması kötü bir</li>
</ul>
<p>işarettir.</p>
<ul class='styled-list'>
<li>Anlaşılabilirlik** : Yorum satırları/ kod oranı, fonksiyon uzunluğu, değişken</li>
</ul>
<p>adları gibi faktörler kodun okunabilirliğini etkiler.</p>
<ul class='styled-list'>
<li>Kodun Karmaşıklığı**</li>
</ul>
<p>Aşırı karmaşık kod, kod kalitesini olumsuz etkileyebilir.</p>
<ul class='styled-list'>
<li>Siklomatik Karmaşıklık** : Bir fonksiyonun sahip olduğu bağımsız</li>
</ul>
<p>yürütme yollarını sayarak kodun test edilebilirliğini ve hata yapma</p>
<p>olasılığını belirler.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 12: Siklomatik Karmaşıklık Nedir?</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 12 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Siklomatik karmaşıklık, bir programın veya fonksiyonun kontrol akış</p>
<p>grafiğini kullanarak hesaplanan bir ölçüdür.</p>
<p>Temel olarak, kodun ne kadar karmaşık olduğunu belirler ve test</p>
<p>edilmesi gereken bağımsız yürütme yollarının sayısını gösterir.</p>
<p>Bu metrik, Thomas McCabe tarafından 1976 yılında önerilmiş olup,</p>
<p>kodun anlaşılabilirliğini, hata yapma olasılığını ve test edilebilirliğini</p>
<p>analiz etmek için kullanılır.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 13: Bölüm 5 Mimari Karakteristikleri Ölçme</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 13 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <p>Bir fonksiyon veya programın akış grafiği çıkarılır ve aşağıdaki formülle</p>
<p>siklomatik karmaşıklık hesaplanır:</p>
<p>_CC_ = _E −_ _N_ + 2</p>
<p>Burada:</p>
<ul class='styled-list'>
<li>E (Edge - Kenar)** : Akış grafiğindeki yönlü bağlantıların (okların)</li>
</ul>
<p>sayısıdır.</p>
<ul class='styled-list'>
<li>N (Node - Düğüm)** : Akış grafiğindeki karar noktalarının (örneğin if,</li>
</ul>
<p>while, for gibi kontrol ifadelerinin) ve işlem düğümlerinin toplam</p>
<p>sayısıdır.</p>
<p>Bazı kaynaklar, CC’yi P (programın birbirine bağlı bileşenlerinin sayısı)</p>
<p>kullanarak şu şekilde de hesaplar:</p>
<p>_CC_ = _E −_ _N_ + 2 _P_</p>
<p>Eğer tek bir fonksiyon veya bağımsız bir kod parçası analiz ediliyorsa, P</p>
<p>genellikle 1 alınır.</p>

            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 14: Siklomatik Karmaşıklık</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 14 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                
            </div>
        </div>
        
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt 15: Siklomatik Karmaşıklık</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa 15 / 15</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                <div class='table-responsive'><table class='analysis-table'>
<tr><th>CC Değeri</th><th>Yorum</th></tr>
<tr><td>1-10<br>10-20<br>20-40<br>>40</td><td>Düşük karmaşıklık, kod iyi yönetilebilir.<br>Orta seviye karmaşıklık, kod gözden geçirilmeli.<br>Yüksek karmaşıklık, refaktör edilmesi önerilir.<br>Kritik seviyede karmaşıklık, kod çok zor test edilir.</td></tr>
</table></div>

            </div>
        </div>
        
            </div>
        </div>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Bölüm Özeti ve Anahtar Kavramlar</h3>
                <ul class="styled-list">
                    
            <li><strong>Siklomatik Karmaşıklık (M = E - N + 2P):</strong> Kodun içindeki karar mekanizmalarını (if, loop) ölçer. Bir metodun karmaşıklığı 10'un altında tutulmalıdır.</li>
            <li><strong>LCOM (Lack of Cohesion in Methods):</strong> Sınıf metotlarının sınıf alanlarını kullanma oranını ölçer. Değerin sıfıra yakın olması, sınıfın odaklı (cohesive) olduğunu gösterir.</li>
            <li><strong>Ana Diziden Uzaklık (D = |A + I - 1|):</strong> Soyutluk (A) ile Kararsızlık (I) arasındaki ideal dengeyi ölçer. D=0 idealdir. A=0, I=0 ise 'Acı Bölgesi', A=1, I=1 ise 'Gereksiz Bölge'dir.</li>
        
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Mimari Fitness Fonksiyonları (Fitness Functions) ne işe yarar? (Mimari sınırların ve kuralların CI/CD sürecinde otomatik birim testlerle denetlenmesini sağlayarak teknik borç birikimini engeller).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Kararsızlık (Instability) metriği nasıl hesaplanır? (I = Fan-out / (Fan-in + Fan-out). I=0 istikrarlı/stable, I=1 kararsızdır).</div></li>
        
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4" style="margin-bottom: 2rem;">
            <h3><i class="fas fa-search-plus"></i> Kavramsal Analizler &amp; Tasarım Pratikleri</h3>
            
            <div class="code-tab-container">
                <div class="code-header">
                    <span><i class="fas fa-file-code"></i> src/test/java/com/example/ArchitectureTest.java</span>
                </div>
                <pre class="line-numbers"><code class="language-java">import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;
import static com.tngtech.archunit.library.Architectures.layeredArchitecture;

@AnalyzeClasses(packages = "com.example.myapp")
public class ArchitectureTest {

    @ArchTest
    public static final ArchRule katmanli_mimari_kurali = layeredArchitecture()
        .consideringAllDependencies()
        .layer("Presentation").definedBy("..controller..")
        .layer("Business").definedBy("..service..")
        .layer("Persistence").definedBy("..repository..")
        
        .whereLayer("Presentation").mayNotBeAccessedByAnyLayer()
        .whereLayer("Business").mayOnlyBeAccessedByLayers("Presentation")
        .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Business");
}</code></pre>
            </div>
        
        </div>
        
        <div class="mini-quiz-card mt-4">
            <h3 class="mini-quiz-title">
                <i class="fas fa-brain"></i> 5. Metrikler & Fitness Functions - Konu Sonu Hızlı Testi (10 Soru)
            </h3>
            <div class="mini-quiz-progress-bar">
                <div id="mini_progress_bar_olcmeyi-yonetme" class="mini-quiz-progress-fill"></div>
            </div>
            <div class="mini-quiz-meta">
                <span id="mini_q_num_olcmeyi-yonetme">Soru 1 / 10</span>
                <span id="mini_score_olcmeyi-yonetme">Doğru: 0 | Yanlış: 0</span>
            </div>
            <div id="mini_q_text_olcmeyi-yonetme" class="mini-quiz-text">Soru yükleniyor...</div>
            <ul id="mini_options_olcmeyi-yonetme" class="options-list"></ul>
            <div id="mini_feedback_olcmeyi-yonetme" class="feedback-box">
                <strong>Açıklama:</strong>
                <p id="mini_feedback_text_olcmeyi-yonetme"></p>
            </div>
            <div class="mini-quiz-controls">
                <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('olcmeyi-yonetme', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
                <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('olcmeyi-yonetme', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </section>`;
