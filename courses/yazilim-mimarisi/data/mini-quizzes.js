// Devosuit - Konu Sonu Mini Test Verileri
// Bu dosya otomatik üretilmiştir; elle düzenlemeyin.
const miniQuizzes = {
    "derse-giris": [
        {
            "q": "Yazılım mimarisinin (Software Architecture) dört temel yapıtaşından hangisi, tercih edilen mimari stilin (Mikroservis, Katmanlı vb.) türünü belirtir?",
            "options": [
                "Mimari Kararlar (Decisions)",
                "Yapı (Structure)",
                "Tasarım İlkeleri (Design Principles)",
                "Mimari Karakteristikler (Quality Attributes)"
            ],
            "a": 1,
            "desc": "Yapı (Structure), mimari stili temsil eder. Örneğin uygulamanın mikroservislerle yazılmış olması yapısını belirtir."
        },
        {
            "q": "Sistemin işlevselliğinden bağımsız olarak başarısını tanımlayan, genelde '-ebilirlik' (ölçeklenebilirlik, test edilebilirlik) ile biten kavram hangisidir?",
            "options": [
                "Mimari Yapı",
                "Tasarım İlkeleri",
                "Mimari Kararlar",
                "Mimari Karakteristikler"
            ],
            "a": 3,
            "desc": "Mimari Karakteristikler (Örn: Ölçeklenebilirlik, Güvenilirlik), fonksiyonel olmayan gereksinimlerdir."
        },
        {
            "q": "Mimar tarafından belirlenen, hangi katmanların veritabanına doğrudan erişebileceği gibi kesin sınırları ve kuralları ifade eden yapı hangisidir?",
            "options": [
                "Tasarım İlkeleri",
                "Mimari Kararlar (Decisions)",
                "Süreç Yönetimi",
                "Yazılım Yapısı"
            ],
            "a": 1,
            "desc": "Mimari Kararlar, geliştirme ekipleri için kesin kurallar ve kısıtlamalar belirler."
        },
        {
            "q": "Kesin kısıtlamalar yerine, asenkron mesajlaşma gibi geliştirici ekiplere yol gösteren rehber ilkeler hangisidir?",
            "options": [
                "Tasarım İlkeleri (Design Principles)",
                "Mimari Kararlar",
                "İş Kuralları",
                "Modülerlik Prensipleri"
            ],
            "a": 0,
            "desc": "Tasarım İlkeleri, kurallar yerine daha çok rehber niteliğindedir ve geliştiricilere özgürlük tanır."
        },
        {
            "q": "Yazılım Mimarisinin Birinci Kuralı aşağıdakilerden hangisidir?",
            "options": [
                "En popüler teknolojiyi seç.",
                "Her şeyin en hızlı şekilde çalışmasını sağla.",
                "Yazılım mimarisinde her şey bir ödünleşimdir (trade-off).",
                "Mimari kararlar asla değiştirilemez."
            ],
            "a": 2,
            "desc": "Birinci Kural: 'Yazılım mimarisinde her şey bir trade-off'tur. Gelişigüzel karar verilmez, her seçimin bir maliyeti vardır.'"
        },
        {
            "q": "Yazılım Mimarisinin İkinci Kuralı nedir?",
            "options": [
                "'Nasıl' yapıldığı, 'neden' yapıldığından daha önemlidir.",
                "'Neden' yapıldığı (neden o kararın seçildiği), 'nasıl' yapıldığından daha önemlidir.",
                "Sürekli yeni kütüphaneler kullanılmalıdır.",
                "Veritabanı tasarımı her zaman bağımsız olmalıdır."
            ],
            "a": 1,
            "desc": "İkinci Kural: 'Neden (Why) sorusu, Nasıl (How) sorusundan daha önemlidir.' Mimari kararın arkasındaki gerekçeler esastır."
        },
        {
            "q": "ISO/IEC/IEEE 42010 standardına göre mimari nedir?",
            "options": [
                "Sadece bir veritabanı şeması tasarımıdır.",
                "Bileşenlerin organizasyonu veya yapısı, bunların arayüzleri ve etkileşimleridir.",
                "Java veya C# dillerinde sınıflar yazma sanatıdır.",
                "Kodun çalıştırıldığı donanımın adıdır."
            ],
            "a": 1,
            "desc": "Standart tanımına göre mimari; bileşenlerin, arayüzlerin ve bunların etkileşimlerinin organizasyonu/yapısıdır."
        },
        {
            "q": "Mimaride kesin sınırları aşmak için izin verilen istisnalara ne ad verilir?",
            "options": [
                "Modülerlik",
                "Entropy",
                "Değişkenlik / Varyans (Variance)",
                "Coupling"
            ],
            "a": 2,
            "desc": "Mimari kararların dışına çıkılması gereken durumlardaki kontrollü istisnalara varyans (variance) denir."
        },
        {
            "q": "Teknolojideki hızlı değişimlerin yazılım mimarı kariyeri üzerindeki en büyük dezavantajı nedir?",
            "options": [
                "Trendlerin ve araçların çok hızlı değişmesi ve eskimesi.",
                "Kod yazma ihtiyacının tamamen ortadan kalkması.",
                "Donanım fiyatlarının artması.",
                "Çok fazla SQL sorgusu yazılması."
            ],
            "a": 0,
            "desc": "Teknoloji dünyasında sürekli yeni trendler çıktığından mimarların sürekli güncel kalması ve adaptasyon sağlaması zordur."
        },
        {
            "q": "Utilitas, Firmitas ve Venustas kavramlarının yazılımdaki karşılığı sırasıyla hangisidir?",
            "options": [
                "Hız, Güvenlik, Arayüz",
                "Kullanışlılık, Dayanıklılık/Sağlamlık, Zarafet/Güzellik",
                "Lisanslama, Test, Dağıtım",
                "Modül, Bileşen, Paket"
            ],
            "a": 1,
            "desc": "Antik Roma mimarı Vitruvius'un bu üç sac ayağı (işlev, sağlamlık, estetik) yazılım mimarisine de doğrudan uyarlanabilir."
        }
    ],
    "mimari-dusunme": [
        {
            "q": "Geliştirici (Developer) bakış açısı ile Mimar (Architect) bakış açısı arasındaki temel fark nedir?",
            "options": [
                "Geliştiriciler daha geniş bakar, mimarlar sadece tek bir fonksiyona odaklanır.",
                "Geliştiriciler derin uzmanlığa (depth) odaklanırken, mimarlar genişliğe (breadth) ve trade-off analizlerine odaklanır.",
                "Mimarlar sadece HTML/CSS yazar, geliştiriciler veritabanı yazar.",
                "Geliştiriciler planlama yapar, mimarlar sadece kod yazar."
            ],
            "a": 1,
            "desc": "Mimarın değeri teknolojileri geniş bir perspektiften ele alıp doğru seçimleri ve trade-off'ları yapabilmesiyle ölçülür."
        },
        {
            "q": "Bilgi Piramidinde (Knowledge Pyramid) bir mimarın değerinin en yüksek olduğu ve genişletmeye çalıştığı katman hangisidir?",
            "options": [
                "'Ne bilmediğini bilmek' (Known Unknowns) - teknik genişlik",
                "'Ne bildiğini bilmek' (Known Knowns) - teknik derinlik",
                "Hiçbir şey bilmemek",
                "Sadece donanım mimarisi"
            ],
            "a": 0,
            "desc": "Mimarlar için 'ne bilmediğini bilmek' (Known Unknowns) teknik genişliği artırır, böylece doğru araçları seçebilirler."
        },
        {
            "q": "Açık artırma sisteminde tekliflerin işlenmesi için 'Topic (Pub-Sub)' seçildiğinde elde edilen en büyük avantaj nedir?",
            "options": [
                "Her mesaja özel şifreleme sunması.",
                "Aynı mesajı sadece tek bir tüketicinin almasını garanti etmesi.",
                "Gevşek bağlılık (loosely coupled) ve yüksek genişletilebilirlik.",
                "Daha yüksek ağ hızı."
            ],
            "a": 2,
            "desc": "Pub-Sub yapısında üretici tüketicileri tanımaz. Yeni bir abone eklemek sadece o konuya üye olmakla mümkündür."
        },
        {
            "q": "Para çekme gibi işlemlerin yapıldığı bankacılık sisteminde neden 'Queue (Point-to-Point)' modeli tercih edilir?",
            "options": [
                "Aynı işlemin birden fazla servis tarafından kopyalanıp işlenmesini sağlamak için.",
                "Bir işlemin sadece tek bir tüketici tarafından güvenle işlenmesini ve kuyruktan silinmesini garanti etmek için.",
                "Kuyruk sisteminin ücretsiz olması.",
                "Herkesin veriye abone olabilmesi."
            ],
            "a": 1,
            "desc": "Kuyruk modelinde bir mesaj sadece tek bir tüketici tarafından çekilir ve işlenir. Çift işlem yapılması engellenir."
        },
        {
            "q": "Topic (Pub-Sub) modelinin en büyük dezavantajı nedir?",
            "options": [
                "Sıkı bağlılığa yol açması.",
                "Güvenlik/erişim kontrolünün zor olması ve mesaj takibinin (tracing) karmaşıklığı.",
                "Yeni abone eklenememesi.",
                "Sadece metin verisi taşınabilmesi."
            ],
            "a": 1,
            "desc": "Pub-Sub'da kimlerin abone olduğunu izlemek ve veri güvenliğini sağlamak kuyruk modeline göre daha zordur."
        },
        {
            "q": "Queue (Point-to-Point) modelinin en belirgin dezavantajı nedir?",
            "options": [
                "Tüketicilerin birbirini hiç tanımaması.",
                "Mesajların havada kaybolması.",
                "Üreticinin hangi tüketiciye/kuyruğa gönderdiğini bilmek zorunda olması (sıkı bağlılık).",
                "Sadece tek bir dilde yazılabilmesi."
            ],
            "a": 2,
            "desc": "Point-to-point modelinde üretici mesajı kime yollayacağını (kuyruk adını) bilmek zorundadır, bu da daha sıkı bağlılık yaratır."
        },
        {
            "q": "Mimar gibi düşünmenin dört boyutundan biri olan 'teknik kararları iş hedeflerine çevirebilmek' ne anlama gelir?",
            "options": [
                "Şirketin bütçesini tamamen mimara devretmek.",
                "İş ihtiyaçlarını (hızlı büyüme, güvenlik vb.) mimari özelliklere (ölçeklenebilirlik, yetkilendirme) dönüştürmek.",
                "İş analistlerine Java öğretmek.",
                "Yalnızca donanım masraflarını kısmak."
            ],
            "a": 1,
            "desc": "İyi bir mimar, şirketin iş hedeflerini (Business Goals) doğrudan teknik kalite özniteliklerine (Architectural Concerns) tercüme eder."
        },
        {
            "q": "Geleneksel yazılım geliştirme modellerinde mimarın takımdan ayrı çalışmasının yarattığı en büyük sorun nedir?",
            "options": [
                "Mimarın çok yüksek maaş alması.",
                "Mimarın aldığı kararların geliştiricilere ulaşmaması ve takımdan geri bildirim alınamaması (Fildişi Kule sendromu).",
                "Geliştiricilerin SQL yazmayı unutması.",
                "Sistemin daha hızlı güncellenmesi."
            ],
            "a": 1,
            "desc": "Mimar takımdan izole olduğunda, kararların uygulanabilirliği test edilemez ve mimari ile gerçek kod arasında kopukluk oluşur."
        },
        {
            "q": "Bir geliştiricinin mimar rolüne geçerken yaptığı en yaygın hata nedir?",
            "options": [
                "Daha az kahve içmeye başlaması.",
                "Her konuda uzmanlaşmaya çalışıp teknik genişlik kazanamamak veya eski bilgilerle kalmak.",
                "Sadece C# öğrenmek.",
                "Kod yazmayı tamamen bırakmak."
            ],
            "a": 1,
            "desc": "Yeni mimarlar bazı uzmanlık alanlarını bilinçli olarak bırakıp genel teknolojilere dair geniş bir bakış açısı kazanmalıdır."
        },
        {
            "q": "Yazılım mimarlığında 'It depends' (Duruma bağlıdır) ifadesi neyi vurgular?",
            "options": [
                "Mimarın konuyu tam olarak bilmediğini.",
                "Yazılımda mutlak doğru/yanlış olmadığını, her kararın ödünleşimlere (trade-offs) dayandığını.",
                "Uygulamanın çalışıp çalışmayacağının şans eseri olduğunu.",
                "Veritabanının tipini."
            ],
            "a": 1,
            "desc": "Mimaride her kararın artıları ve eksileri vardır. 'En iyi mimari' yoktur, 'belirli koşullardaki en uygun mimari' vardır."
        }
    ],
    "modulerlik": [
        {
            "q": "Modül (Module) ve Bileşen (Component) arasındaki temel fark zamanlama açısından nasıldır?",
            "options": [
                "Bileşen derleme zamanında, modül çalışma zamanında var olur.",
                "Modül geliştirme/derleme zamanında (build-time), Bileşen ise çalışma/dağıtım zamanında (run-time) var olur.",
                "Her ikisi de sadece yazım aşamasında vardır.",
                "Hiçbir farkları yoktur."
            ],
            "a": 1,
            "desc": "Modül kod seviyesindeki mantıksal gruplamadır (Java package, C# namespace). Bileşen ise çalışan dağıtık birimdir (Spring Bean, Mikroservis)."
        },
        {
            "q": "Plansız gelişim, acele güncellemeler sonucu oluşan, karmaşık, sınırları belirsiz ve sürdürülemez yazılım hiyerarşisine ne ad verilir?",
            "options": [
                "Microkernel Style",
                "Big Ball of Mud (Büyük Çamur Topu)",
                "Clean Architecture",
                "Layered Architecture"
            ],
            "a": 1,
            "desc": "Big Ball of Mud, yazılım entropisinin kontrolden çıkmasıyla oluşan en yaygın anti-desendir."
        },
        {
            "q": "SOLID ilkelerinden 'Liskov Substitution Principle (LSP)' neyi savunur?",
            "options": [
                "Sınıfların değişime kapalı, gelişime açık olmasını.",
                "Bir alt sınıfın, üst sınıfın yerine hiçbir hata oluşturmadan sorunsuzca geçebilmesini.",
                "Arayüzlerin olabildiğince küçük ve özelleşmiş olmasını.",
                "Her sınıfın tek bir iş yapmasını."
            ],
            "a": 1,
            "desc": "LSP, türetilmiş sınıfların ana sınıfın davranış sözleşmesini (contract) bozmaması gerektiğini belirtir."
        },
        {
            "q": "Bir modül içindeki elemanların birbirine ne kadar güçlü bağlandığını ve tek bir amaca hizmet ettiğini belirten ölçü hangisidir?",
            "options": [
                "Coupling (Bağımlılık)",
                "Connascence",
                "Cohesion (Bağlılık/Tutarlılık)",
                "Abstracness"
            ],
            "a": 2,
            "desc": "Cohesion, bir modülün 'içsel' odaklılığını ölçer. Yüksek cohesion her zaman tercih edilir."
        },
        {
            "q": "Modüller arası bağımlılığı (bir modülün diğerine olan ihtiyacı) ölçen kavram hangisidir?",
            "options": [
                "Cohesion",
                "Coupling (Gevşek/Sıkı Bağlılık)",
                "Refactoring",
                "Instability"
            ],
            "a": 1,
            "desc": "Coupling, modüller arası 'dışsal' bağımlılığı ifade eder. Düşük coupling (loose coupling) istenir."
        },
        {
            "q": "Bir sınıftaki değişikliğin diğer sınıfın güncellenmesini zorunlu kıldığı bağımlı evrimleşme durumuna ne ad verilir?",
            "options": [
                "Connascence",
                "Cohesion",
                "SRP",
                "DIP"
            ],
            "a": 0,
            "desc": "Connascence (birlikte doğma/evrimleşme), sistemin modülerliğini ve bakım maliyetini doğrudan etkileyen bir bağımlılık türüdür."
        },
        {
            "q": "Connascence türlerinden hangisi en tehlikelidir ve en zor tespit edilendir?",
            "options": [
                "Static Connascence",
                "Dynamic Connascence (Çalışma Zamanı / Sıralama bağımlılıkları vb.)",
                "Algoritmik Connascence",
                "Hiçbiri"
            ],
            "a": 1,
            "desc": "Dynamic Connascence (örn: Connascence of Execution/Order), çalışma zamanında ortaya çıktığı için kodu inceleyerek kolayca bulunamaz."
        },
        {
            "q": "Buzdağı Metaforuna göre, bir modülün dış dünyaya açık olan ve 'ne işe yaradığını' gösteren su üstündeki kısmına ne ad verilir?",
            "options": [
                "İmplementasyon (Body)",
                "Veritabanı",
                "Arayüz (Interface)",
                "Sınıf yapısı"
            ],
            "a": 2,
            "desc": "Dışa sunulan kısım arayüzdür (interface / contract). Gerçek işin yapıldığı görünmeyen kısım gövdedir (body)."
        },
        {
            "q": "Postel Yasası (Robustness Principle) neyi önerir?",
            "options": [
                "Sadece kendi bildiğin veriyi gönder.",
                "Gönderirken muhafazakar (strict), kabul ederken ise esnek/liberal (lenient) ol.",
                "Hataları kullanıcıya doğrudan göster.",
                "Tüm fonksiyonları statik yap."
            ],
            "a": 1,
            "desc": "Postel Yasası: 'Be conservative in what you send, be liberal in what you accept.' Dağıtık sistemlerin uyumunu artırır."
        },
        {
            "q": "Demeter Yasası (En Az Bilgi İlkesi) neyi savunur?",
            "options": [
                "Bir nesnenin yalnızca yakın arkadaşlarıyla konuşması gerektiğini (zincirleme metot çağrılarından kaçınmak).",
                "Tüm nesnelerin genel static değişkenlere erişmesini.",
                "Veritabanına her yerden erişilmesini.",
                "Sınıfların çok büyük olmasını."
            ],
            "a": 0,
            "desc": "Demeter Yasası, nesnelerin iç yapısını dışarıya sızdırmamasını ve `a.getB().getC().doAction()` gibi zincirlerden kaçınılmasını söyler."
        }
    ],
    "mimari-karakteristikler": [
        {
            "q": "ISO/IEC 25010 standardına göre, yazılımın beklenen işlevleri doğru ve eksiksiz yerine getirme yeteneği hangi kategoridir?",
            "options": [
                "Fonksiyonel Uygunluk (Functional Suitability)",
                "Güvenilirlik (Reliability)",
                "Sürdürülebilirlik (Maintainability)",
                "Kullanılabilirlik (Usability)"
            ],
            "a": 0,
            "desc": "Fonksiyonel uygunluk, sistemin belirtilen gereksinimleri ne kadar karşıladığının ölçüsüdür."
        },
        {
            "q": "Sistemin ani yük artışlarında (Örn: Kara Cuma indirimleri) kaynak eklenerek (donanım) kapasitesini artırma yeteneği hangisidir?",
            "options": [
                "Elasticity (Esneklik)",
                "Scalability (Ölçeklenebilirlik)",
                "Performance",
                "Availability"
            ],
            "a": 1,
            "desc": "Ölçeklenebilirlik, sistemin artan yükü (user count, request rate) donanım ekleyerek karşılayabilme kapasitesidir."
        },
        {
            "q": "Sistemin yük azaldığında kaynakları geri bırakıp, yük arttığında dinamik ve otomatik olarak (saniyeler içinde) genişleyebilmesi nedir?",
            "options": [
                "Scalability",
                "Elasticity (Esneklik)",
                "Reliability",
                "Auditability"
            ],
            "a": 1,
            "desc": "Esneklik, bulut sistemlerindeki anlık ve otomatik kaynak daraltma/genişletme (auto-scaling) yeteneğidir."
        },
        {
            "q": "Sistemin bir çökme veya hata anında verileri kaybetmeden en kısa sürede ayağa kalkabilme yeteneğine ne ad verilir?",
            "options": [
                "Recoverability (Kurtarılabilirlik)",
                "Maintainability",
                "Performance",
                "Extensibility"
            ],
            "a": 0,
            "desc": "Kurtarılabilirlik (Disaster Recovery/MTTR), sistemin felaket anından sonra tekrar çalışır hale gelebilmesidir."
        },
        {
            "q": "Geliştiricilerin kodda değişiklik yapma, hata bulma ve yeni özellik ekleme kolaylığını belirleyen yapısal karakteristik hangisidir?",
            "options": [
                "Testability",
                "Maintainability (Sürdürülebilirlik)",
                "Portability",
                "Reliability"
            ],
            "a": 1,
            "desc": "Sürdürülebilirlik (Maintainability), yazılımın yaşam döngüsü boyunca bakım ve geliştirme maliyetini belirler."
        },
        {
            "q": "Uygulamanın farklı işletim sistemlerine (Linux, Windows, macOS) veya bulut sağlayıcılarına kolayca taşınabilmesi yeteneği hangisidir?",
            "options": [
                "Interoperability",
                "Extensibility",
                "Portability (Taşınabilirlik)",
                "Scalability"
            ],
            "a": 2,
            "desc": "Taşınabilirlik (Portability), uygulamanın çalışma ortamından bağımsız olma derecesidir."
        },
        {
            "q": "Sisteme sızma girişimlerini engelleme, veriyi şifreleme ve yetkisiz erişimleri kısıtlama yeteneği hangi alana girer?",
            "options": [
                "Security (Güvenlik)",
                "Privacy",
                "Auditability",
                "Reliability"
            ],
            "a": 0,
            "desc": "Güvenlik (Security), sistem verilerinin ve kaynaklarının bütünlüğünü korumayı hedefler."
        },
        {
            "q": "Kritik yasal işlemlerin veya finansal hareketlerin geçmişe dönük olarak kimin tarafından yapıldığının izlenebilmesi özelliği hangisidir?",
            "options": [
                "Privacy",
                "Auditability (Denetlenebilirlik)",
                "Interoperability",
                "Elasticity"
            ],
            "a": 1,
            "desc": "Denetlenebilirlik (Auditability/Traceability), sistemdeki önemli olayların loglanıp takip edilebilmesini sağlar."
        },
        {
            "q": "Mimari karakteristiklerin belirlenmesindeki en büyük zorluk nedir?",
            "options": [
                "Sadece tek bir karakteristiğin seçilebilmesi.",
                "Karakteristiklerin birbiriyle çelişmesi ve trade-off gerektirmesi (örn: Güvenlik artarsa Performans düşebilir).",
                "Donanım maliyetleri.",
                "Kodlama dillerinin sınırlamaları."
            ],
            "a": 1,
            "desc": "Mimaride tüm kalite özniteliklerini aynı anda en tepeye çıkarmak imkansızdır. Birini seçmek diğerinden ödün vermeyi gerektirir."
        },
        {
            "q": "Bir e-ticaret sepetinin 7/24 kesintisiz çalışması hangi operasyonel kalite özniteliğidir?",
            "options": [
                "Scalability",
                "Maintainability",
                "Availability (Erişilebilirlik)",
                "Elasticity"
            ],
            "a": 2,
            "desc": "Erişilebilirlik (Availability), sistemin çalışma süresinin toplam süreye oranıdır (%99.9 vb.)."
        }
    ],
    "olcmeyi-yonetme": [
        {
            "q": "Bir kod bloğunun karmaşıklığını, kod içindeki bağımsız karar yollarının sayısını ölçerek bulan metrik hangisidir?",
            "options": [
                "LCOM",
                "Cyclomatic Complexity (Siklomaktik Karmaşıklık)",
                "Halstead Complexity",
                "Distance from Main Sequence"
            ],
            "a": 1,
            "desc": "Siklomaktik Karmaşıklık, kontrol akış grafiğindeki dallanma sayısını ölçer. Düşük değerler daha kolay test edilir."
        },
        {
            "q": "Cyclomatic Complexity hesaplama formülü M = E - N + 2P ifadesindeki E ve N neyi temsil eder?",
            "options": [
                "E = Sınıf sayısı, N = Metot sayısı",
                "E = Grafikteki kenarlar (edges), N = Düğümler (nodes)",
                "E = Hata sayısı, N = Satır sayısı",
                "E = Veritabanı tabloları, N = Bağlantılar"
            ],
            "a": 1,
            "desc": "E (edges) kontrol akış çizgilerini, N (nodes) ise karar ve işlem bloklarını (düğümleri) temsil eder."
        },
        {
            "q": "LCOM (Lack of Cohesion in Methods) değeri sıfıra yakın olduğunda ne anlama gelir?",
            "options": [
                "Sınıfın cohesion değerinin çok düşük ve parçalanması gerektiği.",
                "Sınıfın metotlarının ortak değişkenleri yoğun kullandığı, yani yüksek cohesion'a (tutarlılığa) sahip olduğu.",
                "Sınıfın hiç çalışmadığı.",
                "Sınıfta çok fazla hata olduğu."
            ],
            "a": 1,
            "desc": "LCOM, metotların ortak alanları kullanmama derecesidir. Sıfır veya sıfıra yakın olması metotların uyumlu çalıştığını (cohesive) gösterir."
        },
        {
            "q": "Mimaride Ana Diziden Uzaklık (Distance from Main Sequence) metriğinin sıfır olması neyi ifade eder?",
            "options": [
                "Sınıfın gereksiz olduğunu.",
                "Sistemin çökebileceğini.",
                "Soyutluk (Abstractness) ile Kararsızlık (Instability) dengesinin ideal olduğunu.",
                "Sistemde hiç soyut sınıf olmadığını."
            ],
            "a": 2,
            "desc": "D = |A + I - 1| formülüyle hesaplanır. D=0 ise soyutluk ve kararsızlık dengededir. D=1'e yaklaştıkça 'Gereksiz Bölge' veya 'Acı Bölgesi'ne girilir."
        },
        {
            "q": "Instability (Kararsızlık) metriği nasıl hesaplanır?",
            "options": [
                "I = Fan-in / (Fan-in + Fan-out)",
                "I = Fan-out / (Fan-in + Fan-out)",
                "I = Fan-in + Fan-out",
                "I = 1 - Abstractness"
            ],
            "a": 1,
            "desc": "Kararsızlık (I), dışa giden bağımlılıkların (Fan-out) toplam bağımlılıklara (Fan-in + Fan-out) oranıdır. I=1 kararsız, I=0 istikrarlıdır."
        },
        {
            "q": "Kararsızlık (Instability) değeri I = 0 olan bir modül için hangisi doğrudur?",
            "options": [
                "Başka hiçbir modül bu modüle bağımlı değildir.",
                "Tamamen kararsızdır, her an değişebilir.",
                "Dışarıya hiç bağımlılığı yoktur, oldukça istikrarlıdır (stable) ve değişmesi zordur.",
                "Kullanılamaz durumdadır."
            ],
            "a": 2,
            "desc": "I = 0 olması Fan-out = 0 demektir. Yani bu modül dışarıya bağımlı değildir, diğer modüller ona bağımlıdır."
        },
        {
            "q": "Mimari standartların korunmasını sağlamak amacıyla derleme (build) veya test süreçlerinde sürekli compliance denetimi yapan mekanizma hangisidir?",
            "options": [
                "Unit Test",
                "Integration Test",
                "Architectural Fitness Functions (Mimari Uygunluk Fonksiyonları)",
                "SonarQube"
            ],
            "a": 2,
            "desc": "Fitness Fonksiyonları, mimari karakteristiklerin ve kısıtlamaların zaman içinde bozulmasını engellemek için kurulan otomatik testlerdir."
        },
        {
            "q": "Java ekosisteminde mimari kuralları (örn: 'controller paketindeki sınıflar service paketini çağırmalı ama tersi olmamalı') test etmek için kullanılan kütüphane hangisidir?",
            "options": [
                "JUnit",
                "Mockito",
                "ArchUnit",
                "Log4j"
            ],
            "a": 2,
            "desc": "ArchUnit, Java sınıfları ve paketleri arasındaki mimari kuralları birim test olarak yazmamızı sağlayan popüler bir kütüphanedir."
        },
        {
            "q": "Fitness fonksiyonları hangi aşamada çalıştırılarak teknik borç (technical debt) birikmesi engellenmelidir?",
            "options": [
                "Sadece canlıya çıktıktan (production) aylar sonra.",
                "CI/CD (Sürekli Entegrasyon) derleme hattı (build pipeline) üzerinde her kod gönderiminde.",
                "Sadece lokal bilgisayarda elle tetiklendiğinde.",
                "Hiçbir zaman."
            ],
            "a": 1,
            "desc": "Otomatik fitness fonksiyonları CI/CD hatlarında her commit'te çalıştırılarak mimari bozulmalar anında engellenir."
        },
        {
            "q": "Distance metriğinde 'Zone of Pain (Acı Bölgesi)' neresidir?",
            "options": [
                "Soyutluğu çok yüksek, bağımlılığı hiç olmayan bölge.",
                "Soyutluğu sıfır (tam somut) ama kararsızlığı da sıfır (tam istikrarlı/stable) olan, yani değiştirilmesi aşırı zor olan katı bölge.",
                "Gereksiz sınıfların olduğu bölge.",
                "Hatalı kodların olduğu bölge."
            ],
            "a": 1,
            "desc": "Acı Bölgesi (A=0, I=0), değiştirilmesi çok zor olan ama herkesin bağımlı olduğu somut kütüphanelerin bulunduğu yerdir. (Örn: Java database driver)."
        }
    ],
    "bilesen-tabanli": [
        {
            "q": "Bileşen Tabanlı Düşünmede (Component-Based Thinking) bir bileşenin en önemli özelliği nedir?",
            "options": [
                "Yalnızca tek bir dosyadan oluşması.",
                "Dış dünyaya iyi tanımlanmış bir arayüz (interface) sunması ve bağımsız deploy edilebilmesi.",
                "Veritabanını doğrudan yönetmesi.",
                "Kullanıcı arayüzünü (HTML) içermesi."
            ],
            "a": 1,
            "desc": "Bileşenler, sistemin sınırları belirli, tak-çıkar yapılabilen ve arayüzler üzerinden haberleşen yapı taşlarıdır."
        },
        {
            "q": "Bileşenleri katmanlara göre (Sunum, İş mantığı, Veri erişim) ayırma stratejisi hangisidir?",
            "options": [
                "Domain Partitioning (Alan Odaklı Bölümleme)",
                "Technical Partitioning (Teknik Bölümleme)",
                "Database Partitioning",
                "Hybrid Partitioning"
            ],
            "a": 1,
            "desc": "Teknik bölümlemede sınıflar rollerine göre (Controller, Service, Repository) paketlenir."
        },
        {
            "q": "Bileşenleri iş alanlarına ve bounded context'lere göre (Ödeme, Katalog, Sipariş) ayırma stratejisi hangisidir?",
            "options": [
                "Technical Partitioning",
                "Domain Partitioning (Alan Odaklı Bölümleme)",
                "Infrastructure Partitioning",
                "Horizontal Partitioning"
            ],
            "a": 1,
            "desc": "Domain partitioning, bileşenleri iş yeteneklerine (business capabilities) göre gruplar. Mikroservislerin temelidir."
        },
        {
            "q": "Technical Partitioning (Teknik Bölümleme) yaklaşımının en büyük dezavantajı nedir?",
            "options": [
                "Teknolojilerin birbiriyle konuşamaması.",
                "Bir iş özelliğindeki (feature) değişikliğin tüm katmanları (presentation, business, database) etkilemesi ve koordinasyon yükü yaratması.",
                "Paket yapısının çok küçük olması.",
                "Sadece Java'da çalışması."
            ],
            "a": 1,
            "desc": "Teknik bölümlemede bir değişiklik yapmak yatayda tüm katmanlara dokunmayı gerektirir, deployment riskini artırır."
        },
        {
            "q": "Domain Partitioning (Alan Odaklı Bölümleme) yaklaşımının en büyük avantajı nedir?",
            "options": [
                "Katmanların birbirine çok sıkı bağlanması.",
                "Her iş alanının (sipariş, ödeme vb.) kendi içinde bağımsız geliştirilip, test edilip deploy edilebilmesi (lokalizasyon).",
                "Daha az kod satırı içermesi.",
                "Veritabanı bağlantı hızını artırması."
            ],
            "a": 1,
            "desc": "İş alanına göre bölme, ekiplerin kendi domainlerine odaklanmasını sağlar ve mikroservislere geçişi kolaylaştırır."
        },
        {
            "q": "Bir mimarın bileşen sınırlarını belirlerken aşırı küçük bileşenler tasarlamasının (over-partitioning) riski nedir?",
            "options": [
                "Bileşenlerin hiç çalışmaması.",
                "Bileşenler arası ağ/iletişim trafiğinin aşırı artması, entegrasyon karmaşıklığı ve performans kaybı.",
                "Kodun daha anlaşılır olması.",
                "Bellek tüketiminin sıfıra inmesi."
            ],
            "a": 1,
            "desc": "Aşırı parçalama (granularity sorunu), servislerin sürekli birbiriyle konuşmak zorunda kaldığı 'chatty' yapılara yol açar."
        },
        {
            "q": "Bileşenlerin tespiti (Component Identification) sürecinde ilk adım genellikle hangisidir?",
            "options": [
                "Doğrudan kod yazmaya başlamak.",
                "İlk mimari stili belirlemek.",
                "Başlangıç bileşenlerini (initial components) tanımlamak ve iş gereksinimlerini analiz etmek.",
                "Donanım satın almak."
            ],
            "a": 2,
            "desc": "Önce gereksinimler ve aktörler analiz edilerek sistemin kaba yapı taşları (initial components) belirlenir."
        },
        {
            "q": "Conway Yasası (Conway's Law) yazılım mimarisi ve bileşen tasarımı hakkında ne söyler?",
            "options": [
                "En pahalı donanım en iyi sonucu verir.",
                "Yazılım mimarileri, onu geliştiren organizasyonların iletişim yapısını yansıtır.",
                "Tüm bileşenler aynı dilde yazılmalıdır.",
                "Veritabanı hızı donanıma bağlıdır."
            ],
            "a": 1,
            "desc": "Conway Yasası: 'Sistem tasarlayan organizasyonlar, kendi iletişim yapılarını kopyalayan tasarımlar üretirler.' Ekip yapısı mimariyi belirler."
        },
        {
            "q": "Bileşen tasarımı sürecinde geri bildirim döngüsünün (feedback loop) önemi nedir?",
            "options": [
                "Bileşenlerin boyutunun ve sınırlarının zamanla gerçek dünya testlerine göre optimize edilmesini sağlamak.",
                "Kodun otomatik silinmesini engellemek.",
                "Ekiplerin kod yazmasını yavaşlatmak.",
                "İnternet hızını ölçmek."
            ],
            "a": 0,
            "desc": "Bileşen sınırları ilk seferde mükemmel olamaz. Geri bildirim döngüleriyle granülerlik ayarlanır."
        },
        {
            "q": "Domain-Driven Design (DDD) içindeki hangi kavram doğrudan bir domain bileşeninin sınırını belirler?",
            "options": [
                "Entity",
                "Value Object",
                "Bounded Context (Sınırlandırılmış Bağlam)",
                "Repository"
            ],
            "a": 2,
            "desc": "Bounded Context, bir veri ve iş modelinin sınırlarını çizer ve doğrudan bağımsız bir domain bileşenine (veya mikroservise) karşılık gelir."
        }
    ],
    "mimari-stiller": [
        {
            "q": "Katmanlı Mimari (Layered Architecture) stilinin en belirgin özelliği hangisidir?",
            "options": [
                "Bileşenlerin dairesel yerleşimidir.",
                "Bileşenlerin hiyerarşik katmanlar (Presentation, Business, Database) halinde düzenlenmesi ve üst katmanın alt katmanı çağırması.",
                "Her servisin kendi veritabanının olması.",
                "Hiçbir katmanın birbiriyle konuşamaması."
            ],
            "a": 1,
            "desc": "Katmanlı mimari, bileşenleri teknik sorumluluklarına göre yatay katmanlara ayırır."
        },
        {
            "q": "Katmanlı mimaride 'Sinkhole Anti-Pattern' nedir?",
            "options": [
                "Veritabanının çökmesi.",
                "İsteklerin hiçbir iş mantığı işletilmeden sadece katmanlardan geçip (passthrough) doğrudan veritabanına erişmesi.",
                "Sonsuz döngülerin oluşması.",
                "Katmanların sırasının karışması."
            ],
            "a": 1,
            "desc": "İsteklerin %80'inden fazlası katmanlarda işlem görmeden doğrudan alt katmana aktarılıyorsa bu bir sinkhole belirtisidir."
        },
        {
            "q": "Boru Hattı (Pipeline) mimari stilindeki filtre (filter) bileşenlerinin temel görevi nedir?",
            "options": [
                "Veritabanı bağlantılarını filtrelemek.",
                "Gelen veri akışını işlemek, dönüştürmek ve bir sonraki boruya (pipe) aktarmak (bağımsız ve izole).",
                "Uygulamaya sızmaları engellemek.",
                "Arayüzü çizmek."
            ],
            "a": 1,
            "desc": "Filtreler veri dönüştürücülerdir (data transformers). Pipe'lar ise filtreler arası veri taşıyan kanallardır."
        },
        {
            "q": "Eklenti tabanlı (Plug-in / Microkernel) mimari stilinin iki ana bileşeni hangisidir?",
            "options": [
                "Client ve Server",
                "Core System (Çekirdek) ve Plug-in Modules (Eklentiler)",
                "Database ve API",
                "Controller ve View"
            ],
            "a": 1,
            "desc": "Çekirdek sistem temel mantığı çalıştırır, ek özellikler ise çekirdeği bozmadan eklenti olarak sisteme takılır (Örn: IDE'ler, tarayıcılar)."
        },
        {
            "q": "Orkestrasyon-Odaklı Servis-Yönelimli Mimari (OD-SOA) modelinde tüm servis çağrılarını yöneten merkezi bileşen hangisidir?",
            "options": [
                "Database",
                "Orkestrasyon Motoru / ESB (Enterprise Service Bus)",
                "Sidecar",
                "API Gateway"
            ],
            "a": 1,
            "desc": "OD-SOA'da tüm mesaj akışları ve entegrasyon kuralları merkezi bir orkestrasyon motoru (ESB) üzerinden akar."
        },
        {
            "q": "Mikroservis Mimarisi (Microservices) stilinin SOA'dan en temel farkı nedir?",
            "options": [
                "SOA'nın daha hızlı çalışması.",
                "Mikroservislerin tam bağımsız dağıtılabilirlik (independent deployability) ve servis başına bağımsız veritabanı (database per service) ilkesini savunması.",
                "SOA'da sadece XML kullanılması.",
                "Mikroservislerin monolitik olması."
            ],
            "a": 1,
            "desc": "Mikroservisler paylaşımlı kaynakları (ESB, ortak veritabanı) reddeder, yüksek bağımsızlık için 'duplication over reuse' ilkesini uygular."
        },
        {
            "q": "Mikroservislerde her servisin kendi veritabanına sahip olmasının en önemli sonucu nedir?",
            "options": [
                "Veritabanı lisans masraflarının sıfırlanması.",
                "Servislerin veri düzeyinde birbirine bağımlılığının sıfırlanması ve bağımsız deploy edilebilmesi.",
                "Veri tabanlarının daha yavaş çalışması.",
                "Veri yedeklemenin imkansızlaşması."
            ],
            "a": 1,
            "desc": "Veritabanlarının ayrılması sıkı bağlılığı (coupling) kırar ve servislerin bağımsız geliştirilmesini sağlar."
        },
        {
            "q": "Mikroservis mimarisinde ortak operasyonel işlevleri (loglama, izleme vb.) ana servisin kodunu kirletmeden yanına eklemeyi sağlayan desen hangisidir?",
            "options": [
                "Mediator Pattern",
                "Sidecar Pattern",
                "Factory Pattern",
                "Observer Pattern"
            ],
            "a": 1,
            "desc": "Sidecar deseni, ana konteynerin yanına eklenen yardımcı konteynerlerle altyapı görevlerini yönetir."
        },
        {
            "q": "Sidecar'ların oluşturduğu ağ üzerinden servisler arası iletişimi ve trafiği yöneten altyapı katmanına ne ad verilir?",
            "options": [
                "ESB",
                "Service Mesh",
                "Orchestrator",
                "Load Balancer"
            ],
            "a": 1,
            "desc": "Service Mesh (örn: Istio), sidecar'lar aracılığıyla servislerin güvenliğini, yönlendirmesini ve izlenebilirliğini yönetir."
        },
        {
            "q": "Orkestrasyon-Odaklı SOA modelinde tek bir ortak servisin (Örn: Customer Service) kullanılmasının yarattığı en büyük tehlike nedir?",
            "options": [
                "Performansın aşırı artması.",
                "Aşırı bağımlılık (tight coupling) sebebiyle küçük bir değişikliğin tüm sistemi etkilemesi (ripple effect) ve koordine deployment zorunluluğu.",
                "Veritabanının silinmesi.",
                "Hiçbir ekinin o servisi kullanamaması."
            ],
            "a": 1,
            "desc": "Merkezi servis paylaşımı, sistemde 'ripple effect' yaratarak bağımsızlığı yok eder ve güncellemeleri zorlaştırır."
        }
    ]
};
