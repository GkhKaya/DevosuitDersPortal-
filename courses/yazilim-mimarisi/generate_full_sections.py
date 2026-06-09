# -*- coding: utf-8 -*-
import re
import os
import html
import json

ROOT = "/Users/gkhkaya/Desktop/DevosuitDersPortalı/courses/yazilim-mimarisi"
MD_PATH = os.path.join(ROOT, "softwareA.md")

with open(MD_PATH, "r", encoding="utf-8") as f:
    raw_content = f.read()

def clean_turkish(text):
    text = text.replace("[İ] Içeriği", "İçeriği")
    text = text.replace("[İ] Içerik", "İçerik")
    text = text.replace("[İ] Işlemi", "İşlemi")
    text = text.replace("[İ] Işlem", "İşlem")
    text = text.replace("[İ] Ilkeleri", "İlkeleri")
    text = text.replace("[İ] Ilke", "İlke")
    text = text.replace("[İ] Iyi", "İyi")
    text = text.replace("[İ] Ideal", "İdeal")
    text = text.replace("[İ] Iş", "İş")
    text = text.replace("[İ] Imha", "İmha")
    text = text.replace("[İ] Iç", "İç")
    text = text.replace("[İ] Istekleri", "İstekleri")
    text = text.replace("[İ] IB", "IB")
    text = text.replace("[İ] I", "İ")
    text = text.replace("[İ] i", "i")
    text = text.replace("[İ]", "İ")
    text = text.replace("[I] I", "I")
    text = text.replace("[I] ı", "ı")
    text = text.replace("[I]", "I")
    
    text = text.replace("˘g", "ğ").replace("g˘", "ğ")
    text = text.replace("˘s", "ş").replace("s˘", "ş")
    text = text.replace("˘c", "ç").replace("c˘", "ç")
    text = text.replace("s¸", "ş").replace("c¸", "ç")
    text = text.replace("u¨", "ü").replace("o¨", "ö")
    text = text.replace("U¨", "Ü").replace("O¨", "Ö")
    text = text.replace("S¸", "Ş").replace("C¸", "Ç")
    
    return text.strip()

# ── 1. Slaytları Ayrıştır ───────────────────────────────────────────────────
pages_raw = re.split(r"Sadık \(DPU\) Yazılım Mimarisi .*? \d+ / \d+", raw_content)

slides = []
current_bolum = 1

for idx, page in enumerate(pages_raw):
    lines = [l.strip() for l in page.split("\n") if l.strip()]
    if not lines:
        continue
    
    page_text = " ".join(lines)
    bolum_match = re.search(r"Bölüm (\d+)", page_text, re.IGNORECASE)
    if bolum_match:
        current_bolum = int(bolum_match.group(1))
    
    title = ""
    for line in lines:
        if line.startswith("##") or line.startswith("#"):
            title = line.replace("#", "").replace("_", "").strip()
            break
    if not title:
        title = lines[0].replace("_", "").strip()
        if len(title) > 60:
            title = title[:57] + "..."
            
    title = clean_turkish(title)
    
    body_html = ""
    in_list = False
    in_table = False
    table_rows = []
    
    for line in lines:
        if line.startswith("##") or line.startswith("#") or line.startswith("Bölüm "):
            continue
        if "Sadık (DPU)" in line:
            continue
            
        line_clean = clean_turkish(line)
        
        if "|" in line_clean:
            if in_list:
                body_html += "</ul>\n"
                in_list = False
            in_table = True
            table_rows.append(line_clean)
            continue
        elif in_table:
            body_html += "<div class='table-responsive'><table class='analysis-table'>\n"
            for r_idx, row in enumerate(table_rows):
                cols = [c.strip() for c in row.split("|")[1:-1]]
                if not cols:
                    continue
                tag = "th" if r_idx == 0 or "---" in row else "td"
                if "---" in row:
                    continue
                body_html += "<tr>" + "".join(f"<{tag}>{c}</{tag}>" for c in cols) + "</tr>\n"
            body_html += "</table></div>\n"
            in_table = False
            table_rows = []
            
        if line_clean.startswith("-") or line_clean.startswith("*") or line_clean.startswith("✔") or line_clean.startswith("✘") or (len(line_clean) > 1 and line_clean[0].isdigit() and line_clean[1] == " "):
            if not in_list:
                body_html += "<ul class='styled-list'>\n"
                in_list = True
            item_text = re.sub(r"^[-*✔✘\d\s\.]+", "", line_clean).strip()
            body_html += f"<li>{item_text}</li>\n"
        else:
            if in_list:
                body_html += "</ul>\n"
                in_list = False
            body_html += f"<p>{line_clean}</p>\n"
            
    if in_list:
        body_html += "</ul>\n"
    if in_table:
        body_html += "<div class='table-responsive'><table class='analysis-table'>\n"
        for r_idx, row in enumerate(table_rows):
            cols = [c.strip() for c in row.split("|")[1:-1]]
            if not cols:
                continue
            tag = "th" if r_idx == 0 or "---" in row else "td"
            if "---" in row:
                continue
            body_html += "<tr>" + "".join(f"<{tag}>{c}</{tag}>" for c in cols) + "</tr>\n"
        body_html += "</table></div>\n"

    slides.append({
        "bolum": current_bolum,
        "title": title,
        "html": body_html
    })

# ── 2. Bölüm Bölüm Slaytları Grupla ───────────────────────────────────────────
bolum_slides = {i: [] for i in range(1, 8)}
for s in slides:
    if 1 <= s["bolum"] <= 7:
        bolum_slides[s["bolum"]].append(s)

# ── 3. Zengin Arayüz Dosyalarını Üret ─────────────────────────────────────────
bolum_meta = {
    1: {
        "id": "derse-giris",
        "title": "1. Giriş & Yapıtaşları",
        "badge": "Giriş & Konsept",
        "desc": "Yazılım mimarisi, bir yazılım sisteminin yapıtaşlarını, arayüzlerini ve bu bileşenlerin birbirleriyle olan etkileşim kurallarını tanımlayan temel disiplindir.",
        "summary": """
            <li><strong>Yazılım Mimarisinin Yapıtaşları:</strong> Yapı (Structure - Mimari stil), Mimari Karakteristikler (Kalite öznitelikleri), Mimari Kararlar (Kısıtlayıcı kurallar) ve Tasarım İlkeleri (Geliştirici rehberleri).</li>
            <li><strong>Yapı vs. Mimari:</strong> Yapı tek başına mimariyi tanımlamaz. Uygulamanın 'mikroservisler' ile yazıldığını söylemek sadece yapıya atıfta bulunmaktır.</li>
            <li><strong>Vitruvius'un Sac Ayağı:</strong> Utilitas (Kullanışlılık), Firmitas (Sağlamlık) ve Venustas (Zarafet/Güzellik) prensipleri modern yazılım mimarisine de uygulanır.</li>
        """,
        "exam": """
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Yazılım Mimarisinin iki altın kuralı nedir? (1. Mimaride her şey bir trade-off'tur. 2. 'Neden' sorusu, 'nasıl' sorusundan daha önemlidir).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Mimari kararlar (decisions) ile tasarım ilkeleri (principles) arasındaki fark nedir? (Kararlar kesin kurallar ve kısıtlamalar getirirken, tasarım ilkeleri rehber niteliğindedir ve esneklik tanır).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Mimaride değişkenlik / varyans (variance) nedir? (Mimari kuralların dışına çıkılması gereken durumlardaki kontrollü istisnalardır).</div></li>
        """,
        "analysis": """
            <div class="analysis-table-container">
                <h4 class="analysis-table-title"><i class="fas fa-search-plus"></i> Dört Temel Yapıtaşının Analizi</h4>
                <table class="analysis-table">
                    <thead>
                        <tr>
                            <th class="analysis-th">Yapıtaşı</th>
                            <th class="analysis-th">Sorumluluk Tanımı</th>
                            <th class="analysis-th">Örnek Senaryo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="analysis-code-cell"><code>Yapı (Structure)</code></td>
                            <td class="analysis-explain-cell">Mimarinin genel şeklini ve şablonunu belirler.</td>
                            <td class="analysis-explain-cell">Katmanlı Mimari (Presentation, Business, Data layers).</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Karakteristikler (Quality)</code></td>
                            <td class="analysis-explain-cell">Sistemin fonksiyonel olmayan başarı kriterlerini ölçer.</td>
                            <td class="analysis-explain-cell">Ölçeklenebilirlik, Güvenilirlik, Performans.</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Kararlar (Decisions)</code></td>
                            <td class="analysis-explain-cell">Geliştiriciler için sınırları belirleyen katı kurallardır.</td>
                            <td class="analysis-explain-cell">"İş katmanı doğrudan veritabanına sorgu atamaz."</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>İlkeler (Principles)</code></td>
                            <td class="analysis-explain-cell">Ekiplere yol gösteren asenkron veya gevşek bağlı rehberlerdir.</td>
                            <td class="analysis-explain-cell">"Mikroservisler arası iletişimde asenkron mesajlaşma kullanın."</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        """
    },
    2: {
        "id": "mimari-dusunme",
        "title": "2. Mimari Düşünme & Ödünleşimler",
        "badge": "Mimari Düşünme",
        "desc": "Mimar gibi düşünmek; kod yazma derinliğinden sıyrılıp sistemlerin genişliğine, teknolojilerin birbiriyle olan ilişkilerine ve ödünleşim (trade-off) analizlerine odaklanmayı gerektirir.",
        "summary": """
            <li><strong>Genişlik vs Derinlik:</strong> Geliştirici belirli teknolojilerde derin uzmanlık kazanır. Mimar ise birçok farklı teknolojinin varlığı ve kullanım senaryoları hakkında geniş (breadth) bilgiye sahip olmalıdır.</li>
            <li><strong>Bilgi Piramidi:</strong> Mimarın asıl değeri 'Known Unknowns' (ne bilmediğini bilmek) alanını genişleterek esnek çözümler üretebilmesindedir.</li>
            <li><strong>Fildişi Kule Sendromu:</strong> Mimarın takımdan kopuk olması mimarinin başarısızlığına yol açar. Mimar ve geliştiriciler aynı takımda aktif çalışmalıdır.</li>
        """,
        "exam": """
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Mimar ve geliştirici rollerinin bilgi yapıları nasıl karşılaştırılır? (Geliştirici T-modelinin dikey bacağını yani derin uzmanlığı temsil eder; mimar ise yatay genişliği temsil eder).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Para çekme ve sipariş onayı senaryolarında hangi mesajlaşma modelleri seçilmelidir? (Para çekmede kesinlik ve tekil tüketim için Queue/Point-to-Point; sipariş onayında bildirim yaymak için Topic/Pub-Sub seçilmelidir).</div></li>
        """,
        "analysis": """
            <div class="analysis-table-container">
                <h4 class="analysis-table-title"><i class="fas fa-exchange-alt"></i> Topic (Pub-Sub) vs. Queue (Point-to-Point) Karşılaştırma Matrisi</h4>
                <table class="analysis-table">
                    <thead>
                        <tr>
                            <th class="analysis-th">Kriter</th>
                            <th class="analysis-th">Topic (Yayın-Abone)</th>
                            <th class="analysis-th">Queue (Noktadan Noktaya)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="analysis-code-cell"><code>Tüketici Sayısı</code></td>
                            <td class="analysis-explain-cell">Birden fazla tüketici (abone) alabilir.</td>
                            <td class="analysis-explain-cell">Sadece tek bir tüketici alabilir.</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Bağlılık (Coupling)</code></td>
                            <td class="analysis-explain-cell">Gevşek bağlı (Loosely Coupled).</td>
                            <td class="analysis-explain-cell">Sıkı bağlı (Tightly Coupled).</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Mesaj Güvenliği</code></td>
                            <td class="analysis-explain-cell">Daha az (Herkes kanala abone olabilir).</td>
                            <td class="analysis-explain-cell">Daha fazla (Belirli tüketiciler okur).</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Genişletilebilirlik</code></td>
                            <td class="analysis-explain-cell">Yeni aboneler eklemek çok kolaydır.</td>
                            <td class="analysis-explain-cell">Ekstra kuyruk yapılandırması gerekir.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        """
    },
    3: {
        "id": "modulerlik",
        "title": "3. Modüler Tasarım & SOLID",
        "badge": "Modülerlik & SOLID",
        "desc": "Modülerlik, ilgili kodların mantıksal olarak gruplandırılması ve bağımlılıkların azaltılmasıdır. SOLID, Cohesion, Coupling ve Connascence temel modüler tasarım araçlarıdır.",
        "summary": """
            <li><strong>Modül vs Bileşen:</strong> Modül geliştirme anında (build-time) mantıksal gruplamadır (Java paketi, C# namespace). Bileşen çalışma zamanında (run-time) var olan dağıtılabilir birimdir (mikroservis, DLL).</li>
            <li><strong>Cohesion & Coupling:</strong> Yüksek Cohesion (iç tutarlılık) ve Düşük Coupling (dışa bağımlılık) modülerliğin altın kuralıdır.</li>
            <li><strong>Buzdağı Metaforu:</strong> Modülün arayüzü (interface) suyun üstündeki küçük kısımdır, implementasyonu (body) ise suyun altındaki devasa kısımdır.</li>
        """,
        "exam": """
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Connascence nedir? (Bir modüldeki değişikliğin, diğer modülün de güncellenmesini gerektirmesidir. Statik ve Dinamik olarak ikiye ayrılır).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Demeter Yasası (Law of Demeter) ne söyler? (En az bilgi ilkesidir. Bir nesne yalnızca doğrudan ilişkili olduğu nesnelerle konuşmalıdır. 'A.getB().getC().doIt()' gibi zincirleme çağrılar yasaktır).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Postel Yasası (Robustness Principle) ne anlama gelir? (Veri gönderirken muhafazakar/katı, veri kabul ederken esnek/hoşgörülü ol).</div></li>
        """,
        "analysis": """
            <div class="code-tab-container">
                <div class="code-header">
                    <span><i class="fas fa-file-code"></i> Dependency Inversion Principle (DIP) & Interface Segregation (ISP)</span>
                </div>
                <pre class="line-numbers"><code class="language-java">// Kötü Tasarım (Sıkı Bağlılık)
class SQLDatabase {
    public void save(String data) {}
}
class PaymentService {
    private SQLDatabase db = new SQLDatabase(); // DIP ihlali!
    public void processPayment() { db.save("Ödeme"); }
}

// İyi Tasarım (DIP & ISP Uyumlu)
interface DatabaseReader { String read(); }
interface DatabaseWriter { void save(String data); } // Arayüz ayrıştırma (ISP)

class MySQLStore implements DatabaseWriter {
    public void save(String data) { System.out.print("Kaydedildi."); }
}

class ModernPaymentService {
    private final DatabaseWriter dbWriter; // Soyutlamaya bağımlı (DIP)
    
    public ModernPaymentService(DatabaseWriter writer) {
        this.dbWriter = writer;
    }
    
    public void process() { dbWriter.save("Ödeme verisi"); }
}</code></pre>
            </div>
        """
    },
    4: {
        "id": "mimari-karakteristikler",
        "title": "4. Kalite Öznitelikleri",
        "badge": "Mimari Karakteristikler",
        "desc": "Mimari karakteristikler, sistemin çalışması esnasındaki fonksiyon dışı gereksinimleri (NFR) ve kalite standartlarını (ISO/IEC 25010) tanımlar.",
        "summary": """
            <li><strong>ISO/IEC 25010 Kategorileri:</strong> Fonksiyonel uygunluk, Güvenilirlik, Performans verimliliği, Kullanılabilirlik, Güvenlik, Uyumluluk, Sürdürülebilirlik ve Taşınabilirlik.</li>
            <li><strong>Operational Attributes:</strong> Çalışma anını etkileyen özniteliklerdir. Ölçeklenebilirlik (Scalability), Esneklik (Elasticity), Erişilebilirlik (Availability) ve Güvenilirlik (Reliability).</li>
            <li><strong>Structural Attributes:</strong> Kod tabanının yapısıyla ilgilidir. Sürdürülebilirlik (Maintainability), Test edilebilirlik (Testability) ve Genişletilebilirlik (Extensibility).</li>
        """,
        "exam": """
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Scalability (Ölçeklenebilirlik) ile Elasticity (Esneklik) arasındaki fark nedir? (Ölçeklenebilirlik artan yükü donanım ekleyerek kaldırma yeteneğidir. Esneklik ise yük azaldığında veya arttığında kaynakları saniyeler içinde otomatik daraltıp genişletmektir).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Availability (Erişilebilirlik) nasıl hesaplanır? (MTBF / (MTBF + MTTR) formülüyle, sistemin ayakta kaldığı sürenin toplam süreye oranı olarak ölçülür).</div></li>
        """,
        "analysis": """
            <div class="analysis-table-container">
                <h4 class="analysis-table-title"><i class="fas fa-list"></i> Karakteristik Türleri ve Örnekleri</h4>
                <table class="analysis-table">
                    <thead>
                        <tr>
                            <th class="analysis-th">Operasyonel (Operational)</th>
                            <th class="analysis-th">Yapısal (Structural)</th>
                            <th class="analysis-th">Çapraz (Cross-Cutting)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="analysis-explain-cell"><strong>Performance:</strong> Tepki süreleri (response times).</td>
                            <td class="analysis-explain-cell"><strong>Testability:</strong> Birim test yazma kolaylığı.</td>
                            <td class="analysis-explain-cell"><strong>Security:</strong> Yetkilendirme ve veri şifreleme.</td>
                        </tr>
                        <tr>
                            <td class="analysis-explain-cell"><strong>Scalability:</strong> Sistem kapasitesini artırma.</td>
                            <td class="analysis-explain-cell"><strong>Maintainability:</strong> Teknik borcu azaltma.</td>
                            <td class="analysis-explain-cell"><strong>Privacy:</strong> GDPR/KVKK veri gizliliği.</td>
                        </tr>
                        <tr>
                            <td class="analysis-explain-cell"><strong>Availability:</strong> Yıllık çalışma oranı (%99.9).</td>
                            <td class="analysis-explain-cell"><strong>Extensibility:</strong> Yeni özellik ekleyebilme.</td>
                            <td class="analysis-explain-cell"><strong>Auditability:</strong> Geçmişe dönük işlem logları.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        """
    },
    5: {
        "id": "olcmeyi-yonetme",
        "title": "5. Metrikler & Fitness Functions",
        "badge": "Karakteristikleri Ölçme",
        "desc": "Kod kalitesi ve mimari kuralların sürdürülebilirliği; Siklomatik Karmaşıklık, LCOM, Ana Diziden Uzaklık metrikleri ve otomatik Mimari Uygunluk Fonksiyonları (ArchUnit) ile korunur.",
        "summary": """
            <li><strong>Siklomatik Karmaşıklık (M = E - N + 2P):</strong> Kodun içindeki karar mekanizmalarını (if, loop) ölçer. Bir metodun karmaşıklığı 10'un altında tutulmalıdır.</li>
            <li><strong>LCOM (Lack of Cohesion in Methods):</strong> Sınıf metotlarının sınıf alanlarını kullanma oranını ölçer. Değerin sıfıra yakın olması, sınıfın odaklı (cohesive) olduğunu gösterir.</li>
            <li><strong>Ana Diziden Uzaklık (D = |A + I - 1|):</strong> Soyutluk (A) ile Kararsızlık (I) arasındaki ideal dengeyi ölçer. D=0 idealdir. A=0, I=0 ise 'Acı Bölgesi', A=1, I=1 ise 'Gereksiz Bölge'dir.</li>
        """,
        "exam": """
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Mimari Fitness Fonksiyonları (Fitness Functions) ne işe yarar? (Mimari sınırların ve kuralların CI/CD sürecinde otomatik birim testlerle denetlenmesini sağlayarak teknik borç birikimini engeller).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Kararsızlık (Instability) metriği nasıl hesaplanır? (I = Fan-out / (Fan-in + Fan-out). I=0 istikrarlı/stable, I=1 kararsızdır).</div></li>
        """,
        "analysis": """
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
        """
    },
    6: {
        "id": "bilesen-tabanli",
        "title": "6. Bileşen Tasarımı",
        "badge": "Bileşen Tasarımı",
        "desc": "Bileşen tasarımı, sistemin iş mantığına (Domain) veya teknik rollerine (Technical) göre alt yapı taşlarına ayrıştırılarak ekiplerin organize edilmesini (Conway Yasası) sağlar.",
        "summary": """
            <li><strong>Bileşen Bölümleme Stratejileri:</strong> Teknik Bölümleme (yatay katmanlar halinde bölme) ve Alan Odaklı Bölümleme (Domain/iş alanlarına göre dikey bölme).</li>
            <li><strong>Conway Yasası:</strong> Yazılım sistemlerini tasarlayan organizasyonlar, kendi iletişim yapılarını taklit eden tasarımlar üretirler.</li>
            <li><strong>Bileşen Tespiti Adımları:</strong> Çekirdek gereksinimleri analiz etme, başlangıç bileşenlerini (initial components) oluşturma, bağımlılık analizleri yapma ve geri bildirim döngüleriyle sınırları belirleme.</li>
        """,
        "exam": """
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Technical Partitioning ile Domain Partitioning arasındaki en büyük fark nedir? (Teknik bölümlemede sınıflar rollerine göre [Controller, Service, DAO] ayrılır, bu da tek bir iş değiştiğinde tüm katmanların redeploy edilmesini gerektirir. Domain bölümlemede sipariş, fatura gibi iş birimleri izole edilir).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Bileşenlerde aşırı parçalama (over-partitioning / granularity) sorunu nedir? (Bileşenlerin aşırı ufalanması sonucu sürekli ağ üzerinden haberleşmek zorunda kalmaları [chatty services] ve performansın düşmesidir).</div></li>
        """,
        "analysis": """
            <div class="grid grid-2">
                <div class="info-block">
                    <h4><i class="fas fa-folder"></i> Teknik Bölümleme (Technical)</h4>
                    <pre><code class="language-plaintext">com.myapp
├── controllers
│   ├── OrderController.java
│   └── PaymentController.java
├── services
│   ├── OrderService.java
│   └── PaymentService.java
└── repositories
    ├── OrderRepository.java
    └── PaymentRepository.java</code></pre>
                </div>
                <div class="info-block">
                    <h4><i class="fas fa-folder-open"></i> Alan Odaklı Bölümleme (Domain)</h4>
                    <pre><code class="language-plaintext">com.myapp
├── order
│   ├── OrderController.java
│   ├── OrderService.java
│   └── OrderRepository.java
└── payment
    ├── PaymentController.java
    ├── PaymentService.java
    └── PaymentRepository.java</code></pre>
                </div>
            </div>
        """
    },
    7: {
        "id": "mimari-stiller",
        "title": "7. Mimari Stiller",
        "badge": "Mimari Stiller",
        "desc": "Yazılım sistemlerinin genel düzen şablonlarıdır. Katmanlı, Boru Hattı, Eklenti Tabanlı, Orkestrasyon SOA ve Mikroservis mimari modellerini kapsar.",
        "summary": """
            <li><strong>Katmanlı Mimari:</strong> Teknik katmanlardan (Closed/Open layers) oluşur. Kolay anlaşılır ama sinkhole anti-desenine müsaittir.</li>
            <li><strong>Microkernel (Plugin) Mimari:</strong> Çekirdek (core) ve eklenti modüllerinden oluşur. IDE'ler veya eklenti destekli web siteleri için uygundur.</li>
            <li><strong>SOA vs Mikroservisler:</strong> SOA entegrasyonu ve yeniden kullanımı merkezi ESB ile hedefler. Mikroservisler ise veri paylaşımını reddederek bağımsızlığı hedefler (database per service).</li>
        """,
        "exam": """
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Mikroservis mimarisindeki Sidecar deseni ne işe yarar? (Loglama, metrik toplama gibi operasyonel görevleri ana servisin yanına bağımsız bir yardımcı konteyner olarak yerleştirerek kodu temiz tutmayı sağlar).</div></li>
            <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Service Mesh nedir? (Sidecar'ların kendi aralarındaki ağ trafiğini, yönlendirmeyi ve güvenliği merkezi olarak yöneten servis ağı altyapısıdır).</div></li>
        """,
        "analysis": """
            <div class="analysis-table-container">
                <h4 class="analysis-table-title"><i class="fas fa-table"></i> Stillerin Karşılaştırmalı Analizi</h4>
                <table class="analysis-table">
                    <thead>
                        <tr>
                            <th class="analysis-th">Mimari Stil</th>
                            <th class="analysis-th">Temel Gücü</th>
                            <th class="analysis-th">Temel Zayıflığı</th>
                            <th class="analysis-th">Örnek Kullanım</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="analysis-code-cell"><code>Katmanlı (Layered)</code></td>
                            <td class="analysis-explain-cell">Basitlik, düzenli yapı</td>
                            <td class="analysis-explain-cell">Sinkhole riski, katı yapı</td>
                            <td class="analysis-explain-cell">Küçük/orta ölçekli web uygulamaları</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Boru Hattı (Pipeline)</code></td>
                            <td class="analysis-explain-cell">Tek yönlü veri işleme, izolasyon</td>
                            <td class="analysis-explain-cell">Durum yönetimi (state) zorluğu</td>
                            <td class="analysis-explain-cell">Veri analiz/transformasyon araçları</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Microkernel (Plugin)</code></td>
                            <td class="analysis-explain-cell">Genişletilebilirlik, çekirdek güvenliği</td>
                            <td class="analysis-explain-cell">Çekirdek sistem karmaşıklığı</td>
                            <td class="analysis-explain-cell">Eclipse IDE, VS Code, WordPress</td>
                        </tr>
                        <tr>
                            <td class="analysis-code-cell"><code>Mikroservisler</code></td>
                            <td class="analysis-explain-cell">Yüksek bağımsızlık ve ölçeklenebilirlik</td>
                            <td class="analysis-explain-cell">Dağıtık sistem karmaşıklığı, veri tutarlılığı</td>
                            <td class="analysis-explain-cell">Netflix, Amazon, büyük ölçekli SaaS'lar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        """
    }
}

for b_id, meta in bolum_meta.items():
    sid = meta["id"]
    s_list = bolum_slides.get(b_id, [])
    
    # Slaytları doğrudan kartlar halinde ve açık olarak sırala
    slides_html = ""
    for s_idx, s in enumerate(s_list):
        slides_html += f"""
        <div class="slide-card card" style="margin-bottom: 2rem; border-left: 5px solid var(--accent); background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 12px;">
            <div class="slide-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,.08); padding-bottom:0.75rem; margin-bottom:1rem;">
                <h4 style="margin:0; font-size:1.15rem; color:var(--primary-light); font-weight: 700;"><i class="fas fa-file-powerpoint"></i> Slayt {s_idx + 1}: {s['title']}</h4>
                <span class="path-badge" style="font-size:0.75rem; padding:0.25rem 0.6rem; background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3);">Sayfa {s_idx + 1} / {len(s_list)}</span>
            </div>
            <div class="slide-body" style="font-size:0.98rem; line-height:1.7; color:var(--text-secondary);">
                {s['html']}
            </div>
        </div>
        """
        
    full_html = f"""<section id="{sid}" class="project-section card">
        <div class="section-header">
            <h2>{meta['title']}</h2>
            <span class="path-badge"><i class="fas fa-book"></i> {meta['badge']}</span>
        </div>
        <p class="section-desc">{meta['desc']}</p>
        
        <!-- DETAYLI KONU ANLATIMI VE DERS NOTLARI (DERS KİTABI FORMATINDA - TÜM DETAYLAR AÇIK VE EKSİKSİZ) -->
        <div class="detailed-textbook-guide mt-4" style="background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 2rem; margin-bottom: 2.5rem;">
            <h3 style="margin-bottom: 1.5rem; display:flex; align-items:center; gap:0.6rem; font-size:1.5rem; color:var(--text-primary); border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom:1rem; font-weight:700;">
                <i class="fas fa-book-reader" style="color:var(--accent);"></i>
                <span>Tüm Detaylarıyla Konu Anlatımı ({len(s_list)} Slaytın Tam Akışı)</span>
            </h3>
            <div class="textbook-content" style="display: flex; flex-direction: column; gap: 2rem;">
                {slides_html}
            </div>
        </div>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Bölüm Özeti ve Anahtar Kavramlar</h3>
                <ul class="styled-list">
                    {meta['summary']}
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    {meta['exam']}
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4" style="margin-bottom: 2rem;">
            <h3><i class="fas fa-search-plus"></i> Kavramsal Analizler &amp; Tasarım Pratikleri</h3>
            {meta['analysis']}
        </div>
        
        <div class="mini-quiz-card mt-4">
            <h3 class="mini-quiz-title">
                <i class="fas fa-brain"></i> {meta['title']} - Konu Sonu Hızlı Testi (10 Soru)
            </h3>
            <div class="mini-quiz-progress-bar">
                <div id="mini_progress_bar_{sid}" class="mini-quiz-progress-fill"></div>
            </div>
            <div class="mini-quiz-meta">
                <span id="mini_q_num_{sid}">Soru 1 / 10</span>
                <span id="mini_score_{sid}">Doğru: 0 | Yanlış: 0</span>
            </div>
            <div id="mini_q_text_{sid}" class="mini-quiz-text">Soru yükleniyor...</div>
            <ul id="mini_options_{sid}" class="options-list"></ul>
            <div id="mini_feedback_{sid}" class="feedback-box">
                <strong>Açıklama:</strong>
                <p id="mini_feedback_text_{sid}"></p>
            </div>
            <div class="mini-quiz-controls">
                <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('{sid}', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
                <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('{sid}', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </section>"""

    # JS partial yaz
    js_path = os.path.join(ROOT, "sections", f"{sid}.js")
    escaped = full_html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    js_content = f"""/* Devosuit Partial — {sid}
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {{}};
window.__partials['{sid}'] = `{escaped}`;
"""
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"sections/{sid}.js yazıldı.")

print("Nihai derleme başarıyla tamamlandı!")
