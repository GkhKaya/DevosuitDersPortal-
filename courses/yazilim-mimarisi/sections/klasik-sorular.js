/* Devosuit Partial — klasik-sorular
 * Yazılım Mimarisi dersine ait 10 klasik sınav sorusu ve detaylı cevapları.
 */
window.__partials = window.__partials || {};
window.__partials['klasik-sorular'] = `<section id="klasik-sorular" class="project-section card">
    <div class="section-header">
        <h2>Yazılım Mimarisi — 10 Klasik Sınav Sorusu</h2>
        <span class="path-badge primary-badge"><i class="fas fa-pen-fancy"></i> Klasik Sınav Hazırlık</span>
    </div>
    <p class="section-desc">Müfredatta yer alan en kritik kavramlar üzerine hazırlanmış, vize ve final sınavlarında hocanın doğrudan sorabileceği 10 adet klasik (açık uçlu) soru ve detaylı akademik çözümleri aşağıda listelenmiştir. Cevapları görmek için "Cevabı Göster" butonuna tıklayabilirsiniz.</p>

    <!-- SORU 1 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 1:</strong> Yazılım Mimarisi (Software Architecture) ile Tasarım (Software Design) arasındaki farklar ve sınırlar nelerdir?
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Mimari nerede biter, tasarım nerede başlar? Proje yaşam döngüsündeki ilişkilerini açıklayınız.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_1'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_1" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Yazılım Mimarisi:</strong> Sistemlerin makro düzeydeki yapısını, sınırlarını, kısıtlamalarını ve kalite özniteliklerini (örneğin ölçeklenebilirlik, güvenlik vb.) belirler. Mimar, sistemin mikroservis mi, katmanlı mı yoksa olay tabanlı mı olacağına karar verir. Kararlar genellikle projenin başarısını doğrudan etkiler ve sonradan değiştirilmesi çok maliyetlidir.
                <br><br>
                <strong>Tasarım (Design):</strong> Belirlenen mimari sınırlar içerisinde, sistem bileşenlerinin ve sınıflarının mikro düzeyde nasıl kodlanacağını ve organize edileceğini tanımlar. Örneğin, bir modülün içinde veri okumak için hangi tasarım deseninin (Factory, Strategy, Observer) kullanılacağı tasarımın konusudur.
                <br><br>
                <strong>Sınırlar ve İlişki:</strong> Mimarlık ve tasarım birbirinden tamamen bağımsız değildir; yazılım projesi yaşam döngüsü boyunca paralel bir şekilde var olurlar. Mimari kurallar tasarıma yön verir ve kısıtlamalar koyar. Başarılı bir proje için bu iki sürecin sürekli olarak senkronize tutulması gerekir.
            </p>
        </div>
    </div>

    <!-- SORU 2 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 2:</strong> Yazılım Mimarisinin İki Temel Kuralı nedir ve bu kuralların mimarın karar verme sürecine etkilerini açıklayınız.
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Mimarın karar verirken popüler trendler yerine nelere odaklanması gerektiğini kurallara bağlı kalarak açıklayınız.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_2'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_2" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Birinci Kural:</strong> <em>"Yazılım mimarisinde her şey bir ödünleşimdir (trade-off)."</em> Mimaride mutlak doğru veya mükemmel bir çözüm yoktur. Her teknik kararın getirdiği avantajların yanında mutlaka bir maliyeti veya dezavantajı bulunur (Örn: Hızı artırmak için veri tutarlılığından ödün vermek).
                <br><br>
                <strong>İkinci Kural:</strong> <em>"Kararın 'neden' (gerekçesi) seçildiği, 'nasıl' uygulandığından daha önemlidir."</em> Teknolojik implementasyonlar zamanla değişebilir, ancak mimarın o kararı alırken dayandığı iş hedefleri ve kalite kısıtlamaları (karar gerekçesi) mimarinin temel direğidir.
                <br><br>
                <strong>Mimar Üzerindeki Etkisi:</strong> Bir mimar popüler olduğu için (örn: mikroservis popüler diye) doğrudan bir teknolojiyi seçemez. İki kural uyarınca, mevcut sistem kısıtlamalarını analiz etmeli, getireceği dezavantajları (trade-off) belirlemeli ve seçimin gerekçelerini iş hedeflerine bağlayarak belgelendirmelidir.
            </p>
        </div>
    </div>

    <!-- SORU 3 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 3:</strong> Açık artırma sisteminde teklif işleme senaryosu üzerinden Topic (Pub-Sub) ve Queue (Point-to-Point) modellerini karşılaştırarak açıklayınız.
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Modellerin bağlılık (coupling), genişletilebilirlik ve veri güvenliği açısından farklarını belirtiniz.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_3'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_3" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Topic (Pub-Sub) Modeli:</strong> Teklif yayınlandığında (publish), bu konuya abone (subscribe) olan tüm servisler (Örn: Fatura, SMS, Stok) mesajı alır.
                <br>• <em>Bağlılık ve Genişletilebilirlik:</em> Gevşek bağlıdır (loosely coupled). Yeni bir servis eklemek için sadece topic'e abone olması yeterlidir, üreticiyi etkilemez.
                <br>• <em>Dezavantajı:</em> Herkes abone olabildiği için veri gizliliği zordur ve mesajın hangi servislerce alındığını izlemek (tracing) karmaşıktır.
                <br><br>
                <strong>Queue (Point-to-Point) Modeli:</strong> Gönderilen transfer veya işlem mesajı kuyruğa girer ve yalnızca tek bir tüketici (consumer) tarafından çekilerek işlenir ve kuyruktan silinir.
                <br>• <em>Güvenlik ve Mükerrerlik:</em> Oldukça güvenlidir. Bir mesajın sadece bir kez işlenmesini garanti ederek finansal mükerrerliği önler.
                <br>• <em>Dezavantajı:</em> Sıkı bağlıdır (tightly coupled). Üretici hangi kuyruğa yollayacağını bilmek zorundadır, yeni alıcılar eklemek ekstra altyapı yapılandırması gerektirir.
            </p>
        </div>
    </div>

    <!-- SORU 4 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 4:</strong> Modülerlik analizinde Cohesion (Bağlılık/Tutarlılık) ve Coupling (Bağımlılık) neyi ölçer? "High Cohesion, Low Coupling" ilkesini açıklayınız.
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Bu ilkenin sistemin sürdürülebilirliği ve modüllerin bağımsızlığına etkisini belirtiniz.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_4'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_4" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Cohesion (Bağlılık/Tutarlılık):</strong> Bir modülün veya sınıfın kendi iç elemanlarının (metotlar, değişkenler) ne kadar güçlü bağlandığını ve tek bir amaca ne kadar odaklandığını ölçer. Sınıf içindeki elemanlar ortak hedefe hizmet ediyorsa cohesion yüksektir.
                <br><br>
                <strong>Coupling (Bağımlılık):</strong> Farklı modüller veya sınıflar arasındaki bağlantıların ve bağımlılıkların gücünü ölçer. Bir modüldeki değişikliğin diğer modülleri etkileme derecesidir.
                <br><br>
                <strong>High Cohesion, Low Coupling İlkesi:</strong> Modüllerin kendi içlerinde son derece tutarlı, bağımsız ve tek bir sorumluluğa sahip olmasını (yüksek cohesion), ancak diğer modüllerle olan dışsal bağlarının en az ve gevşek olmasını (düşük coupling) savunur. Bu sayede modüller birbirinden bağımsız geliştirilebilir, test edilebilir ve bir modüldeki hata diğerine sıçramaz (yüksek sürdürülebilirlik).
            </p>
        </div>
    </div>

    <!-- SORU 5 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 5:</strong> Connascence (Birlikte Evrimleşme) nedir? Statik ve Dinamik Connascence arasındaki farkı açıklayarak en tehlikeli connascence türünü belirtiniz.
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Hangi connascence türünün tespitinin neden daha zor olduğunu açıklayınız.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_5'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_5" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Connascence:</strong> İki veya daha fazla yazılım bileşeninin birindeki değişikliğin, diğerinde de değişiklik yapılmasını zorunlu kılması durumudur (birlikte doğma/bağımlı evrimleşme).
                <br><br>
                <strong>Statik Connascence:</strong> Derleme zamanında (build-time) kod analizi ile kolayca tespit edilebilen yapısal bağımlılıklardır. Örnek: <em>Connascence of Name</em> (metot isminin değişmesiyle çağıran yerlerin hata vermesi) veya <em>Connascence of Type</em> (veri türünün değişmesi).
                <br><br>
                <strong>Dinamik Connascence:</strong> Çalışma zamanında (run-time) ortaya çıkan davranışsal bağımlılıklardır. Örnek: <em>Connascence of Execution</em> (metotların mutlaka belirli bir sırayla çağrılma zorunluluğu) veya <em>Connascence of Value</em> (ortak bellek alanındaki bir değere olan bağımlılık).
                <br><br>
                <strong>En Tehlikeli Connascence:</strong> Dinamik Connascence'tır. Çünkü statik analiz araçları kodun yapısını inceleyerek bu bağımlılığı bulamaz. Sadece çalışma zamanında, testlerde veya canlı ortamda hatalara (race conditions, null exceptions) yol açarak kendisini belli eder, çözümü ve tespiti zordur.
            </p>
        </div>
    </div>

    <!-- SORU 6 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 6:</strong> ISO/IEC 25010 kalite standardı kapsamında operasyonel ve yapısal kalite öznitelikleri arasındaki farkı açıklayınız. İki özniteliğin çeliştiği (trade-off) bir örnek veriniz.
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Operasyonel ve yapısal özniteliklerin tanımlarını yaparak aralarındaki ödünleşim ilişkisini açıklayınız.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_6'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_6" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Operasyonel Kalite Öznitelikleri:</strong> Sistemin canlıda çalışırken sergilediği davranışları ve operasyonel kalitesini ölçer. Örnek: Erişilebilirlik (Availability), Ölçeklenebilirlik (Scalability), Performans (Performance) ve Esneklik (Elasticity).
                <br><br>
                <strong>Yapısal Kalite Öznitelikleri:</strong> Kod tabanının iç kalitesini ve geliştirme ekiplerinin bakım kolaylığını ölçer. Örnek: Sürdürülebilirlik (Maintainability), Test Edilebilirlik (Testability) ve Taşınabilirlik (Portability).
                <br><br>
                <strong>Çelişki (Trade-off) Örneği:</strong> Sistemin <strong>Güvenliğini (Security - Cross-cutting)</strong> en üst düzeye çıkarmak amacıyla, tüm servisler arası veri paketlerini şifreleyip (encryption) her API çağrısında çift taraflı token doğrulaması (handshake) eklersek; bu yapısal ek yük, sistemin yanıt süresini (<strong>Performance - Operasyonel</strong>) olumsuz etkileyerek gecikmeleri (latency) artıracaktır.
            </p>
        </div>
    </div>

    <!-- SORU 7 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 7:</strong> Modülerlik analizinde kullanılan LCOM (Lack of Cohesion in Methods) metriğini açıklayınız. 0 ve 1 değerleri neyi ifade eder?
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Sınıf içindeki metotların ortak değişkenleri kullanma durumuna göre bu metriğin nasıl yorumlandığını belirtiniz.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_7'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_7" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>LCOM (Metotlarda Bağlılık Eksikliği):</strong> Bir sınıf içindeki metotların, o sınıfın örnek değişkenlerini (field/state) ne oranda ortak kullanıp kullanmadığını ölçer.
                <br><br>
                <strong>LCOM = 0 (veya 0'a yakın):</strong> Sınıfın metotlarının neredeyse tamamının, sınıftaki ortak değişkenlere eriştiğini ve onları işlediğini belirtir. Bu, sınıfın son derece <strong>cohesive (tutarlı/odaklanmış)</strong> olduğunu ve tek bir amaca mükemmel hizmet ettiğini gösterir.
                <br><br>
                <strong>LCOM = 1 (veya 1'e yakın/üzeri):</strong> Metotların ortak değişkenleri paylaşmadığını, her metodun farklı değişkenlerle bağımsız çalıştığını gösterir. Bu durum, sınıfın aslında tek bir sorumluluğu olmadığını (Single Responsibility ihlali) ve birden fazla bağımsız sınıfa bölünmesi (refactoring) gerektiğini gösterir.
            </p>
        </div>
    </div>

    <!-- SORU 8 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 8:</strong> Mimaride "Ana Diziden Uzaklık" (Distance from Main Sequence) metriğini formülüyle (D = |A + I - 1|) açıklayınız. "Acı Bölgesi" ve "Gereksiz Bölge" nedir?
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Formüldeki soyutluk ve kararsızlık değişkenlerini tanımlayarak kritik bölgeleri açıklayınız.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_8'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_8" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Formül Bileşenleri:</strong>
                <br>• <strong>Abstractness (A):</strong> Modüldeki soyut sınıfların/arayüzlerin tüm sınıflara oranıdır (0 somut, 1 soyut).
                <br>• <strong>Instability (I):</strong> Dışa giden bağımlılıkların (Fan-out) toplam bağımlılıklara oranıdır (0 istikrarlı/stable, 1 kararsız).
                <br>• <strong>D Metriği:</strong> D = 0 ise ideal dengedir (Soyut sınıflar kararlıdır, somut sınıflar kararsızdır).
                <br><br>
                <strong>Zone of Pain (Acı Bölgesi - A=0, I=0):</strong> Modül tamamen somuttur ancak herkes ona bağımlıdır. Değiştirilmesi son derece zordur ve risklidir (Örn: java.lang.String veya Veritabanı sürücü kodları).
                <br><br>
                <strong>Zone of Uselessness (Gereksiz Bölge - A=1, I=1):</strong> Modül tamamen soyuttur (arayüzler) ama kimse ona bağımlı değildir. Hiçbir iş yapmayan ölü koddur, temizlenmesi gerekir.
            </p>
        </div>
    </div>

    <!-- SORU 9 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 9:</strong> Bileşen Bölümlemede (Component Partitioning) kullanılan "Technical Partitioning" ve "Domain Partitioning" yaklaşımlarını avantaj ve dezavantajlarıyla karşılaştırınız.
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Teknik katman bazlı ve iş alanı odaklı paketleme stratejilerinin farklarını açıklayınız.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_9'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_9" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Technical Partitioning (Teknik Bölümleme):</strong> Bileşenleri teknik rollerine göre paketler (Örn: `controllers`, `services`, `repositories` paketleri).
                <br>• <em>Avantajı:</em> Katmanlı yapıyı korumak kolaydır, benzer teknik sınıflar bir aradadır.
                <br>• <em>Dezavantajı:</em> Tek bir iş özelliği eklerken (Örn: Yeni bir ödeme metodu) yatayda tüm paketlerde değişiklik yapmayı gerektirir, koordinasyon yükü çok yüksektir.
                <br><br>
                <strong>Domain Partitioning (Alan Odaklı Bölümleme):</strong> Bileşenleri iş yeteneklerine göre paketler (Örn: `payment`, `order`, `catalog` paketleri).
                <br>• <em>Avantajı:</em> Her iş birimi kendi içinde bağımsızdır (lokalizasyon). Ekipler bağımsız çalışabilir ve mikroservislere geçiş son derece kolaydır (otonomi sağlar).
                <br>• <em>Dezavantajı:</em> İş alanlarının sınırlarını (Bounded Context) net belirlemek zordur, yanlış tasarımlarda veri çoğaltma yönetimi karmaşıklaşır.
            </p>
        </div>
    </div>

    <!-- SORU 10 -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">
            <strong>Soru 10:</strong> Katmanlı Mimari (Layered Architecture) stilini açıklayınız. "Sinkhole Anti-Pattern" nedir ve bu durumdan nasıl kaçınılabilir?
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Katmanlı mimarinin kapalı/açık katman yapısını ve passthrough isteklerin çözümünü açıklayınız.</p>
        
        <button class="back-to-dashboard-btn" style="margin-top: 0.75rem; width: auto; display: inline-flex; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;" 
                onclick="const el = document.getElementById('ans_10'); el.style.display = el.style.display === 'none' ? 'block' : 'none'; this.textContent = el.style.display === 'none' ? 'Cevabı Göster' : 'Cevabı Gizle';">
            Cevabı Göster
        </button>
        
        <div id="ans_10" class="info-block mt-3" style="display: none; background: rgba(59, 130, 246, 0.03); border: 1px solid rgba(59, 130, 246, 0.2);">
            <strong>Örnek Akademik Cevap:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
                <strong>Katmanlı Mimari:</strong> Kod tabanını hiyerarşik yatay katmanlara ayırır (Sunum -> İş Mantığı -> Veri Tabanı). Temel kural olarak üst katman sadece altındaki katmanı çağırır (kapalı katmanlar).
                <br><br>
                <strong>Sinkhole Anti-Pattern:</strong> Bir isteğin, katmanlarda hiçbir iş mantığı işletilmeden (kod eklenmeden) sadece katmanlardan geçerek (passthrough) doğrudan alt veritabanı katmanına erişmesi durumudur. İsteklerin %80'inden fazlası bu şekildeyse, katmanların getirdiği yönetim maliyeti ve gecikmeler (latency) boş yere ödenmiş olur.
                <br><br>
                <strong>Çözüm / Kaçınma:</strong> Belirli katmanların <strong>"Açık" (Open Layer)</strong> olarak yapılandırılmasına izin verilir. Bu sayede, aradaki işlevsiz katmanlar atlanarak (Örn: Sunum katmanından doğrudan Veri katmanına erişim) gereksiz passthrough işlem yükü engellenmiş olur.
            </p>
        </div>
    </div>
</section>`;
