// Devosuit - 100 Soruluk Sınav Soruları
// Bu dosya otomatik üretilmiştir; elle düzenlemeyin.
const questionsList = [
    // Bölüm 1: Derse Giriş - Giriş & Temel Yapıtaşları (0-14)
    {
        "q": "Yazılım mimarisinin (Software Architecture) dört temel yapıtaşından hangisi, tercih edilen mimari stilin (Mikroservis, Katmanlı vb.) türünü belirtir?",
        "options": [
            "Mimari Kararlar (Decisions)",
            "Yapı (Structure)",
            "Tasarım İlkeleri (Design Principles)",
            "Mimari Karakteristikler (Quality Attributes)"
        ],
        "a": 1,
        "desc": "Yapı (Structure), sistemin genel mimari stilini temsil eder. Sadece yapı mimarinin tamamını tanımlamaz, diğer yapıtaşlarıyla bütünleşiktir."
    },
    {
        "q": "Sistemin işlevselliğinden bağımsız olarak başarısını tanımlayan, genelde '-ebilirlik' (ölçeklenebilirlik, test edilebilirlik) ile biten kavram hangisidir?",
        "options": [
            "Mimari Yapı (Structure)",
            "Tasarım İlkeleri (Design Principles)",
            "Mimari Kararlar (Decisions)",
            "Mimari Karakteristikler (Quality Attributes)"
        ],
        "a": 3,
        "desc": "Mimari Karakteristikler, sistemin fonksiyonel olmayan gereksinimlerini ve sistemin operasyonel veya yapısal başarısını ölçen niteliklerdir."
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
        "desc": "Mimari Kararlar, geliştiricilere rehberlik etmek yerine kesin sınırlar ve kurallar (kısıtlamalar) tanımlar."
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
        "desc": "Tasarım İlkeleri, mimari kararlar kadar katı olmayan, geliştiricilere uygun çözümü seçerken rehberlik ve özgürlük sunan yönergelerdir."
    },
    {
        "q": "Yazılım Mimarisinin Birinci Kuralı aşağıdakilerden hangisidir?",
        "options": [
            "En popüler teknolojiyi seçmek her zaman en düşük riskli çözümdür.",
            "Her şeyin en hızlı şekilde çalışmasını sağlamak mimarinin nihai hedefidir.",
            "Yazılım mimarisinde her şey bir ödünleşimdir (trade-off).",
            "Mimari kararlar bir kez alındıktan sonra asla değiştirilemez."
        ],
        "a": 2,
        "desc": "Birinci Kural: 'Yazılım mimarisinde her şey bir trade-off'tur. Eğer bir mimar herhangi bir trade-off bulamadığını söylüyorsa, henüz yeterince araştırmamış demektir.'"
    },
    {
        "q": "Yazılım Mimarisinin İkinci Kuralı nedir?",
        "options": [
            "Kararın 'nasıl' uygulandığı, 'neden' seçildiğinden her zaman daha önemlidir.",
            "Bir kararın 'neden' (gerekçesi) seçildiği, 'nasıl' uygulandığından daha önemlidir.",
            "En kararlı sistemler, veri katmanını tamamen soyutlayan sistemlerdir.",
            "Sistem tasarımları kullanılan programlama dilinin yetenekleriyle sınırlandırılmalıdır."
        ],
        "a": 1,
        "desc": "İkinci Kural: 'Neden sorusu, Nasıl sorusundan daha önemlidir.' Alınan kararın arkasındaki mimari gerekçeler esastır."
    },
    {
        "q": "ISO/IEC/IEEE 42010 standardına göre mimarinin resmi tanımı nedir?",
        "options": [
            "Bir yazılım sisteminin veritabanı şemalarının ve SQL sorgu performanslarının toplamıdır.",
            "Arayüzler aracılığıyla etkileşime giren önemli bileşenlerin organizasyonu veya yapısıdır.",
            "Programlama dilinde yazılan sınıfların ve aralarındaki kalıtım ilişkilerinin derleme zamanındaki şemasıdır.",
            "Kodun canlı sunuculardaki donanım kaynaklarına dağıtılmasını sağlayan topoloji diyagramıdır."
        ],
        "a": 1,
        "desc": "Standart tanımına göre mimari; arayüzler vasıtasıyla etkileşime giren önemli bileşenlerin organizasyonu veya yapısıdır."
    },
    {
        "q": "Mimaride kesin sınırları ve kuralları aşmak için mimar kontrolünde izin verilen istisnalara ne ad verilir?",
        "options": [
            "Modülerlik",
            "Entropi (Entropy)",
            "Değişkenlik / Varyans (Variance)",
            "Bağımlılık (Coupling)"
        ],
        "a": 2,
        "desc": "Mimari kararların dışına çıkılması gereken özel durumlar için mimar tarafından onaylanan kontrollü sapmalara varyans (variance) denir."
    },
    {
        "q": "Yazılım mimarlığı mesleğindeki 'teknoloji değişkenliği ve hızlı trend kaymaları' mimar üzerinde ne tür bir zorluk yaratır?",
        "options": [
            "Mimarın sürekli kod yazmak zorunda kalarak idari işlerden uzaklaşması.",
            "Teknolojik yenilikleri takip edemeyip eski bilgilerle mimari tasarlamaya devam etme riski.",
            "Tüm donanım maliyetlerinin doğrudan yazılım mimarının bütçesinden düşülmesi.",
            "Yazılım geliştiricilerle mimarların aynı takımlarda çalışmasını tamamen imkansız kılması."
        ],
        "a": 1,
        "desc": "Teknoloji dünyası çok hızlı değişmektedir. Bir mimar için en büyük zorluklardan biri, teknik genişliğini güncel tutarak eski veya yanlış teknolojilerle kararlar vermemektir."
    },
    {
        "q": "Antik Roma mimarı Vitruvius'un iyi binalar için belirlediği 'Utilitas, Firmitas, Venustas' kavramlarının yazılım mimarisindeki sırasıyla anlam karşılığı nedir?",
        "options": [
            "Performans hızı, Kodun güvenliği, Kullanıcı arayüzünün estetiği",
            "İşlevsellik/Kullanışlılık, Dayanıklılık/Sağlamlık, Zarafet/Temiz Tasarım",
            "Donanım esnekliği, Veritabanı tutarlılığı, Lisanslama maliyeti",
            "Mikroservis yapısı, Entegrasyon kolaylığı, Test kapsamı"
        ],
        "a": 1,
        "desc": "Vitruvius'un bu üç prensibi (kullanışlılık, sağlamlık, zarafet/estetik) yazılım mimarisinin kalitesini değerlendirmede de temel referanslardır."
    },
    {
        "q": "Yazılım mimarisinin yapısal bileşenlerini tanımlarken kullanılan 'Bileşen' (Component) teriminin en belirgin özelliği hangisidir?",
        "options": [
            "Yalnızca tek bir kaynak kod dosyasından oluşan en küçük mantıksal birim olması.",
            "Dış dünyaya iyi tanımlanmış arayüzler (interface) sunan ve bağımsız olarak kurulabilen/çalıştırılabilen modül kümesi olması.",
            "Yalnızca veritabanı işlemlerini yürüten SQL sınıflarını temsil etmesi.",
            "Uygulamanın çalışacağı donanımsal sunucu bilgisayarların fiziksel adıdır."
        ],
        "a": 1,
        "desc": "Bileşenler (components), sınırları belirlenmiş, arayüzler vasıtasıyla etkileşen, bağımsız dağıtılabilen (deployable) yapı taşlarıdır."
    },
    {
        "q": "Mimaride 'Tasarım İlkeleri' (Design Principles) ile 'Mimari Kararlar' (Decisions) arasındaki en temel fark nedir?",
        "options": [
            "Tasarım ilkeleri kodun derlenmesini sağlarken, mimari kararlar sadece dökümantasyon amaçlıdır.",
            "Kararlar kesin sınırlar çizen katı kurallarken, ilkeler geliştiricilere rehberlik sunan esnek önerilerdir.",
            "İlkeler veri tabanı şemasını belirler, kararlar ise kullanıcı arayüzünü tasarlar.",
            "İkisi arasında hiçbir kavramsal fark yoktur; aynı anlama gelirler."
        ],
        "a": 1,
        "desc": "Kararlar (decisions) kesin kurallardır ve kısıtlama yaratır. İlkeler (principles) ise geliştiricilere yol gösterir ve özgürlük tanır."
    },
    {
        "q": "Bir e-ticaret uygulamasında 'Sepet Servisi'nin ödeme anında hata vermeden çalışması ve 7/24 ayakta kalması hangi yapıtaşı ile doğrudan ilgilidir?",
        "options": [
            "Tasarım İlkeleri",
            "Mimari Kararlar",
            "Mimari Karakteristikler (Erişilebilirlik/Güvenilirlik)",
            "Mimari Stiller"
        ],
        "a": 2,
        "desc": "Sistemin kesintisiz çalışması ve ayakta kalması operasyonel bir kalite özniteliğidir (Availability - Erişilebilirlik)."
    },
    {
        "q": "Yazılım mimarisinin yapı (structure) boyutu aşağıdakilerden hangisini netleştirmek için kullanılır?",
        "options": [
            "Hangi programlama dilinin hangi sürümünün seçileceğini.",
            "Kullanılacak veri tabanındaki tablo ilişkilerini ve indeks stratejilerini.",
            "Katmanlı, olay tabanlı, mikroservis veya mikroçekirdek gibi mimari stil türünü.",
            "Kodun test coverage oranının minimum kaç olması gerektiğini."
        ],
        "a": 2,
        "desc": "Yapı (structure), tercih edilen mimari stilin türünü (Örn: Monolitik katmanlı mimari veya Mikroservis) belirtir."
    },
    {
        "q": "Mimar tarafından belirlenen kararların geliştirici ekipler tarafından uygulanmamasının önündeki en büyük organizasyonel engel hangisidir?",
        "options": [
            "Geliştirici ekiplerin kullanılan dilde uzman olmaması.",
            "Mimarın takımdan izole çalışarak fildişi kule (ivory tower) sendromu oluşturması.",
            "Gereksinimlerin iş analistleri tarafından sürekli değiştirilmesi.",
            "Uygulamanın test sunucularının bulunmaması."
        ],
        "a": 1,
        "desc": "Mimar ekiplerden bağımsız ve izole çalıştığında kararların gerçek koda aktarımı kopar ve mimari ile kod arasında tutarsızlık oluşur."
    },

    // Bölüm 2: Mimari Düşünme & Ödünleşimler (Topic & Queue) (15-29)
    {
        "q": "Geliştirici (Developer) bakış açısı ile Mimar (Architect) bakış açısı arasındaki en temel fark nedir?",
        "options": [
            "Geliştirici sistemi daha geniş bir açıdan tasarlarken, mimar sadece veritabanına odaklanır.",
            "Geliştirici derinlemesine teknik uzmanlığa odaklanırken, mimar teknik genişliğe ve trade-off'lara odaklanır.",
            "Mimar sadece dökümantasyon yazar, geliştirici ise tüm kararları tek başına alır.",
            "Geliştirici iş hedeflerini belirler, mimar ise sadece kod yazar."
        ],
        "a": 1,
        "desc": "Geliştirici belirli bir konuda derin uzmanlığa (depth) yönelirken, mimar geniş bir perspektiften (breadth) teknolojileri ve ödünleşimleri analiz eder."
    },
    {
        "q": "Bilgi Piramidinde (Knowledge Pyramid) bir mimarın değerinin en yüksek olduğu ve sürekli genişletmeye çalıştığı katman hangisidir?",
        "options": [
            "'Ne bildiğini bilmek' (Known Knowns) - teknik derinlik",
            "'Ne bilmediğini bilmek' (Known Unknowns) - teknik genişlik",
            "'Ne bildiğini bilmemek' (Unknown Knowns) - gizli yetenekler",
            "'Ne bilmediğini bilmemek' (Unknown Unknowns) - tam belirsizlik"
        ],
        "a": 1,
        "desc": "Known Unknowns katmanı, mimarın aşina olduğu ama derinlemesine bilmediği teknolojileri içerir. Bu katman genişledikçe mimarın çözüm seçenekleri artar."
    },
    {
        "q": "Bir geliştiricinin mimarlık rolüne geçerken yaptığı en yaygın kariyer hatası nedir?",
        "options": [
            "Sadece tek bir dilde uzmanlaşmaya devam etmek yerine yeni dilleri öğrenmeye başlamak.",
            "Teknik genişlik kazanmak yerine eski uzman olduğu alanda aşırı derin kalmaya çalışıp kararları sınırlamak.",
            "Veritabanı optimizasyon derslerini almaktan kaçınmak.",
            "Kod yazmayı tamamen durdurup sadece iş analizi yapmak."
        ],
        "a": 1,
        "desc": "Yeni mimarlar bazı uzmanlıklarını bilinçli olarak bırakıp daha geniş bir teknoloji portföyü oluşturmalıdır, aksi takdirde 'her probleme çekiçle yaklaşan çivici' olurlar."
    },
    {
        "q": "Yazılım mimarisinde sıkça kullanılan 'Duruma bağlıdır' (It depends) ifadesi neyi vurgulamaktadır?",
        "options": [
            "Mimari tasarımların tesadüflere bağlı olarak başarıya ulaştığını.",
            "Yazılımda mutlak doğru veya yanlış olmadığını, her kararın belirli ödünleşimlere (trade-off) dayandığını.",
            "Mimarın karar vermekten kaçınarak sorumluluğu geliştiricilere attığını.",
            "Sadece veritabanının türünün mimariyi belirlediğini."
        ],
        "a": 1,
        "desc": "Mimaride her kararın artıları ve eksileri vardır. Koşullara göre en az kötü olan karar (en uygun trade-off) seçilmelidir."
    },
    {
        "q": "Açık artırma sisteminde tekliflerin (bid) işlenmesi için 'Topic (Pub-Sub)' modeli seçildiğinde elde edilen en büyük mimari avantaj hangisidir?",
        "options": [
            "Her teklif mesajının ağ üzerinde şifrelenmesini garanti etmesi.",
            "Teklifin sadece tek bir tüketici tarafından işlenmesini garanti etmesi.",
            "Gevşek bağlılık (loosely coupled) ve yüksek genişletilebilirlik (yeni abonelerin kolayca eklenmesi).",
            "Daha yüksek ağ iletim hızına sahip olması."
        ],
        "a": 2,
        "desc": "Pub-Sub (Topic) yapısı gevşek bağlıdır. Üretici tüketicileri bilmez, sisteme yeni tüketiciler (subscriber) eklemek üreticiyi etkilemez."
    },
    {
        "q": "Para çekme ve bakiye güncelleme işlemlerinin yapıldığı bir bankacılık sisteminde neden 'Queue (Point-to-Point)' modeli tercih edilir?",
        "options": [
            "Aynı para çekme mesajının tüm banka şubelerine kopyalanarak gönderilmesi için.",
            "Mesajın sadece tek bir tüketici (para çekme servisi) tarafından güvenle işlenip kuyruktan silinmesini garanti etmek için.",
            "Kuyruk yapısının topic yapısına göre her zaman daha ucuz maliyetli olması.",
            "Kuyruğa bağlanan herkesin veriyi kolayca dinleyebilmesi."
        ],
        "a": 1,
        "desc": "Queue modelinde bir mesaj sadece bir tüketici tarafından çekilir ve işlenir. Bu sayede aynı finansal işlemin mükerrer yapılması engellenir."
    },
    {
        "q": "Topic (Pub-Sub) mimari modelinin en belirgin dezavantajı aşağıdakilerden hangisidir?",
        "options": [
            "Servislerin birbirine çok sıkı bağlı (tightly coupled) olması.",
            "Mesaj takibinin (tracing/debugging) karmaşıklaşması ve mesaj güvenliğinin (kimin abone olduğunu kontrol etme) zorluğu.",
            "Kuyruk boyutunun dinamik olarak artırılamaması.",
            "Yalnızca metin formatında veri iletimine izin vermesi."
        ],
        "a": 1,
        "desc": "Topic modelinde mesajlar herkese açık olabildiğinden erişim kontrolü zordur ve mesajın hangi servisler tarafından başarıyla işlendiğini izlemek ek yük getirir."
    },
    {
        "q": "Queue (Point-to-Point) modelinin en belirgin mimari dezavantajı nedir?",
        "options": [
            "Tüketicilerin kuyruğa bağlanırken hata alması.",
            "Kuyruğa eklenen mesajların zamanla kendiliğinden silinmesi.",
            "Üreticinin (producer) hangi kuyruğa (ve dolayısıyla dolaylı olarak hangi tüketiciye) göndereceğini bilmek zorunda olması (sıkı bağlılık).",
            "Kuyruğun sadece tek yönlü veri akışını desteklemesi."
        ],
        "a": 2,
        "desc": "Queue modelinde üretici ile tüketici arasında kuyruk adı üzerinden daha sıkı bir bağ (coupling) vardır."
    },
    {
        "q": "Mimar gibi düşünmenin dört boyutundan biri olan 'teknik kararları iş hedeflerine çevirebilmek' ne anlama gelir?",
        "options": [
            "Şirketin finansal bütçesini tamamen mimara devretmek.",
            "İş gereksinimlerini (Örn: Hızlı büyüme, veri güvenliği) teknik kalite özniteliklerine (Örn: Ölçeklenebilirlik, şifreleme) dönüştürmek.",
            "İş analistlerine Java veya C# programlama dillerini öğretmek.",
            "Yalnızca donanım masraflarını kısarak bütçe tasarrufu sağlamak."
        ],
        "a": 1,
        "desc": "İyi bir mimar, şirketin iş hedeflerini doğrudan teknik kalite özniteliklerine ve mimari kararlara tercüme eder."
    },
    {
        "q": "Geleneksel yazılım geliştirme modellerinde mimarın takımdan ayrı çalışmasının yarattığı en büyük sorun nedir?",
        "options": [
            "Mimarın aldığı kararların geliştiricilere ulaşmaması ve takımdan geri bildirim alınamaması (Fildişi Kule sendromu).",
            "Geliştiricilerin SQL yazmayı tamamen unutması.",
            "Sistemin daha hızlı güncellenmesi ve test edilmesi.",
            "Mimarın çok yüksek maaş alması."
        ],
        "a": 0,
        "desc": "Mimar takımdan izole olduğunda, kararların uygulanabilirliği test edilemez ve mimari ile gerçek kod arasında kopukluk oluşur."
    },
    {
        "q": "Bir mimar, açık artırma sisteminde teklif işleme için 'Topic' mi yoksa 'Queue' mu seçeceğine karar verirken aşağıdakilerden hangisini öncelikle yapmalıdır?",
        "options": [
            "Hangisi daha popüler ise doğrudan onu seçmelidir.",
            "Seçeneklerin getireceği ödünleşimleri (güvenlik, genişletilebilirlik, bağlılık) iş hedeflerine göre analiz etmelidir.",
            "Veritabanı yönetim sistemini değiştirmelidir.",
            "Kararı tamamen geliştiricilerin oylamasına bırakmalıdır."
        ],
        "a": 1,
        "desc": "Mimarlık kararları ödünleşimlerin (trade-off) analiziyle verilir. Koşullara göre en doğru model belirlenmelidir."
    },
    {
        "q": "Yazılım mimarisinde bir kararın 'neden' alındığının belgelenmesi neden kritiktir?",
        "options": [
            "Sadece yasal denetimlerde ceza almamak için.",
            "Gelecekte mimari değiştiğinde, eski kararın hangi kısıtlamalar ve hedefler altında alındığını anlayabilmek için.",
            "Geliştiricilerin maaş zamlarını belirlemek için.",
            "Programlama dilinin güncellenmesini engellemek için."
        ],
        "a": 1,
        "desc": "Kararın arkasındaki gerekçe (why), kararın nasıl (how) uygulandığından daha değerlidir çünkü gelecekteki değişikliklere ışık tutar."
    },
    {
        "q": "Mimari kararların ekipler üzerindeki kısıtlayıcı etkisini esnetmek için kullanılan 'istisna süreci' nasıl yönetilmelidir?",
        "options": [
            "Her geliştirici istediği an kendi istisnasını uygulayabilmelidir.",
            "Mimar tarafından değerlendirilen ve onaylanan resmi bir 'Varyans (Variance)' mekanizması ile yönetilmelidir.",
            "Tüm kurallar tamamen kaldırılarak esneklik sağlanmalıdır.",
            "Sadece Java dışındaki dillerde istisnalara izin verilmelidir."
        ],
        "a": 1,
        "desc": "Varyans süreci, mimari standartların korunması ama aynı zamanda tıkanıklıkların önlenmesi için kontrollü istisnalar tanımlar."
    },
    {
        "q": "Bir e-ticaret sepetinde siparişlerin faturalandırılması, stok düşülmesi ve kargo bildirimi gibi adımların paralel tetiklenmesinde hangi model daha uygundur?",
        "options": [
            "Queue (Noktadan Noktaya)",
            "Topic (Pub-Sub)",
            "Single Instance Task",
            "Batch Job Processing"
        ],
        "a": 1,
        "desc": "Sipariş oluşturulduğunda bir olayın (event) yayınlanması ve fatura, stok, kargo servislerinin bağımsız olarak bu olayı dinlemesi (Topic) en gevşek bağlı tasarımdır."
    },
    {
        "q": "Bankacılık transferlerinde kuyruğa eklenen bir para gönderme talimatının iki farklı sunucu tarafından aynı anda çekilip mükerrer gönderilmesini önleyen model hangisidir?",
        "options": [
            "Topic (Yayın-Abone)",
            "Queue (Noktadan Noktaya)",
            "Shared Cache System",
            "Synchronous REST Call"
        ],
        "a": 1,
        "desc": "Queue modeli, bir mesajın sadece tek bir tüketici tarafından işlenip silinmesini garanti ettiği için mükerrer işlemleri önler."
    },

    // Bölüm 3: Modülerlik, SOLID, Cohesion, Coupling & Connascence (30-44)
    {
        "q": "Modül (Module) ve Bileşen (Component) arasındaki fark zamanlama (lifecycle) açısından nasıldır?",
        "options": [
            "Bileşen kodlama aşamasında vardır, modül ise canlı sunucuda oluşur.",
            "Modül derleme/geliştirme zamanında (build-time) mantıksal gruplamadır; Bileşen ise çalışma zamanında (run-time) dağıtılan/çalıştırılan birimdir.",
            "Modül sadece veritabanı tablolarıdır, bileşen ise kullanıcı arayüzüdür.",
            "Her ikisi de sadece tasarım aşamasında var olan soyut kavramlardır."
        ],
        "a": 1,
        "desc": "Modül geliştirme aşamasındaki paket/namespace yapısıdır. Bileşen ise çalışma zamanında çalışan deploy edilebilir bir yapıdır (örn. jar, dll, mikroservis)."
    },
    {
        "q": "Plansız gelişim, acele düzeltmeler ve mimari denetim eksikliği sonucu oluşan, sınırları belirsiz ve sürdürülemez yazılım yapısına verilen isim nedir?",
        "options": [
            "Clean Architecture",
            "Microkernel Style",
            "Big Ball of Mud (Büyük Çamur Topu)",
            "Layered Architecture"
        ],
        "a": 2,
        "desc": "Big Ball of Mud, modülerliğin yok olduğu ve her şeyin birbirine sıkı sıkıya bağlandığı sürdürülemez bir mimari anti-desendir."
    },
    {
        "q": "SOLID ilkelerinden 'Liskov Substitution Principle (LSP)' temel olarak neyi savunur?",
        "options": [
            "Sınıfların değişime kapalı, yeni özelliklere açık tasarlanmasını.",
            "Bir alt sınıf nesnesinin, türetildiği üst sınıf nesnesi yerine hiçbir hata üretmeden geçebilmesini.",
            "Her sınıfın sadece tek bir sorumluluğu olmasını.",
            "Arayüzlerin olabildiğince büyük ve genel tanımlanmasını."
        ],
        "a": 1,
        "desc": "LSP, türetilmiş sınıfların ana sınıfın davranış sözleşmesini (contract) bozmaması ve onun yerine sorunsuz kullanılabilmesini gerektirir."
    },
    {
        "q": "Bir modül içerisindeki elemanların birbirine ne kadar sıkı bağlandığını ve tek bir amaca ne kadar hizmet ettiğini ölçen nitelik hangisidir?",
        "options": [
            "Bağımlılık (Coupling)",
            "Birlikte Evrimleşme (Connascence)",
            "Bağlılık/Tutarlılık (Cohesion)",
            "Kararsızlık (Instability)"
        ],
        "a": 2,
        "desc": "Cohesion, modülün içsel elemanlarının ortak bir amaca yönelik odaklanma derecesidir. Yüksek cohesion istenir."
    },
    {
        "q": "Farklı modüller arasındaki bağımlılık derecesini ve bir modüldeki değişikliğin diğerini etkileme oranını ölçen kavram hangisidir?",
        "options": [
            "Cohesion",
            "Coupling (Gevşek/Sıkı Bağlılık)",
            "Soyutluk (Abstractness)",
            "Siklomaktik Karmaşıklık"
        ],
        "a": 1,
        "desc": "Coupling, modüller arası dışsal bağımlılığı ölçer. Mimaride düşük coupling (loose coupling) hedeflenir."
    },
    {
        "q": "Bir sınıftaki değişikliğin diğer sınıfın güncellenmesini zorunlu kıldığı 'birlikte doğma/evrimleşme' bağımlılığına ne ad verilir?",
        "options": [
            "Connascence",
            "Cohesion",
            "Encapsulation",
            "Abstraction"
        ],
        "a": 0,
        "desc": "Connascence, iki veya daha fazla bileşenin birindeki değişikliğin diğerinde de değişiklik gerektirmesi durumudur."
    },
    {
        "q": "Connascence türlerinden hangisi en tehlikelidir ve statik analiz araçlarıyla kod incelenerek tespit edilmesi en zordur?",
        "options": [
            "Static Connascence (Name, Type vb.)",
            "Dynamic Connascence (Execution/Order - Çalışma zamanı sırası vb.)",
            "Algoritmik Connascence",
            "Kalıtımsal Connascence"
        ],
        "a": 1,
        "desc": "Dynamic Connascence çalışma zamanı davranışına bağlı olduğundan (Örn: A metodunun mutlaka B'den önce çağrılması gerekliliği) tespiti zordur."
    },
    {
        "q": "Buzdağı Metaforuna (Iceberg Metaphor) göre, bir modülün dış dünyaya sunduğu kısım ile gerçekte işin yapıldığı kısım sırasıyla hangileridir?",
        "options": [
            "İmplementasyon (Gövde) ve Arayüz (Interface)",
            "Veritabanı şeması ve SQL sorguları",
            "Arayüz (Interface) ve İmplementasyon (Gövde)",
            "Web sayfası ve Sunucu donanımı"
        ],
        "a": 2,
        "desc": "Arayüz su üstündeki küçük kısımdır (ne yaptığını söyler), implementasyon ise su altındaki büyük gövdedir (nasıl yaptığını gizler)."
    },
    {
        "q": "Postel Yasası (Robustness Principle) yazılım bileşenleri arası veri alışverişinde neyi tavsiye eder?",
        "options": [
            "Veri yollarken olabildiğince esnek, veri kabul ederken ise olabildiğince katı ve kısıtlayıcı olun.",
            "Veri gönderirken muhafazakar/standartlara tam uygun (strict), kabul ederken ise esnek/liberal (lenient) olun.",
            "Tüm hataları kullanıcıya doğrudan ham haliyle gösterin.",
            "Sadece JSON formatında veri alışverişi yapın."
        ],
        "a": 1,
        "desc": "Postel Yasası, dağıtık sistemlerin birbiriyle uyumlu çalışabilmesi için gönderilen verinin katı kurallara uymasını, alınan verinin ise ufak sapmalara toleranslı olmasını söyler."
    },
    {
        "q": "Demeter Yasası (Law of Demeter - En Az Bilgi İlkesi) kod yazımında hangisinden kaçınmayı öğütler?",
        "options": [
            "Sınıfların kalıtım (inheritance) yoluyla türetilmesinden.",
            "`a.getB().getC().doSomething()` gibi nesne zincirleri oluşturarak iç yapıları sızdırmaktan.",
            "Metotların parametre almasından.",
            "Arayüzlerin (interface) implement edilmesinden."
        ],
        "a": 1,
        "desc": "Demeter Yasası, bir nesnenin sadece kendi doğrudan ilişkili olduğu nesnelerle konuşması gerektiğini savunur (Zincirleme metot çağrılarını önler)."
    },
    {
        "q": "Modüller arası coupling türlerinden hangisi en sıkı (en kötü) bağımlılığa yol açar?",
        "options": [
            "Data Coupling (Sadece basit parametre geçişi)",
            "Content/Path Coupling (Bir modülün diğerinin iç yapısına/koduna doğrudan erişmesi)",
            "Control Coupling (Bir modülün diğerine ne yapacağını parametreyle dikte etmesi)",
            "Stamp Coupling (Karmaşık veri yapılarının geçirilmesi)"
        ],
        "a": 1,
        "desc": "Content Coupling'de bir modül diğerinin doğrudan iç koduna veya verisine müdahale eder, bağımsızlığı tamamen yok eder."
    },
    {
        "q": "SOLID ilkelerinden 'Interface Segregation Principle (ISP)' neyi hedefler?",
        "options": [
            "Tüm sınıfların tek bir arayüzden türetilmesini.",
            "Arayüzlerin olabildiğince büyük tutularak tüm metotları kapsamasını.",
            "İstemcilerin kullanmadıkları metotları barındıran şişman arayüzlere zorlanmamasını (küçük, özelleşmiş arayüzler).",
            "Arayüzlerin sadece statik sınıflarda tanımlanmasını."
        ],
        "a": 2,
        "desc": "ISP, büyük ve genel arayüzler yerine, belirli roller ve istemciler için özelleşmiş küçük arayüzler tanımlanmasını önerir."
    },
    {
        "q": "Static Connascence türlerinden biri olan 'Connascence of Type' neyi ifade eder?",
        "options": [
            "İki bileşenin aynı veritabanı tablosuna erişmesini.",
            "Metot isimlerinin birebir aynı olmasını.",
            "Bir değişkenin veya parametrenin veri tipinin (örn: Integer) değişmesi durumunda diğer bileşenin de değişmek zorunda kalmasını.",
            "Sınıfların aynı paket altında bulunmasını."
        ],
        "a": 2,
        "desc": "Type connascence, değişken tiplerinin değişmesiyle ilişkili olan derleme zamanında tespit edilebilen statik bir connascence'tır."
    },
    {
        "q": "Dynamic Connascence türlerinden 'Connascence of Execution' neyi kısıtlar?",
        "options": [
            "Kodun çalışma süresini.",
            "Birden fazla metodun çağrılma sırasının (Örn: Önce initialize(), sonra start()) kritik olmasını.",
            "Kullanılan CPU çekirdeği sayısını.",
            "Veritabanı işlemlerinin rollback edilmesini."
        ],
        "a": 1,
        "desc": "Execution/Order connascence, metotların doğru çalışması için belirli bir sırayla çağrılmasını şart koşar."
    },
    {
        "q": "Yüksek bağlılığa (Cohesion) sahip bir sınıf tasarlamanın yazılıma en büyük faydası hangisidir?",
        "options": [
            "Sınıfın daha hızlı derlenmesi.",
            "Sınıfın kod satırı sayısının (LOC) otomatik olarak azalması.",
            "Sınıfın kolay anlaşılması, bakımının kolaylaşması ve sadece kendi sorumluluğuna odaklanması.",
            "Veritabanı bağlantı havuzunu optimize etmesi."
        ],
        "a": 2,
        "desc": "Yüksek Cohesion, sınıf içindeki elemanların tek bir işe odaklanmasını sağlar, bu da bakım ve test edilebilirliği artırır."
    },

    // Bölüm 4: Mimari Kalite Öznitelikleri (Operational, Structural & Cross-Cutting) (45-59)
    {
        "q": "ISO/IEC 25010 kalite standardına göre, yazılımın belirtilen işlevleri doğru, eksiksiz ve uygun şekilde yerine getirme yeteneği hangi kategoridir?",
        "options": [
            "Fonksiyonel Uygunluk (Functional Suitability)",
            "Güvenilirlik (Reliability)",
            "Sürdürülebilirlik (Maintainability)",
            "Kullanılabilirlik (Usability)"
        ],
        "a": 0,
        "desc": "Fonksiyonel Uygunluk, yazılımın kendisinden beklenen işlevleri ne kadar doğru karşıladığının ölçüsüdür."
    },
    {
        "q": "Sistemin ani ve aşırı yük artışlarında (Örn: Kampanya dönemleri) donanım kaynakları eklenerek kapasitesini artırma yeteneği hangisidir?",
        "options": [
            "Esneklik (Elasticity)",
            "Ölçeklenebilirlik (Scalability)",
            "Kullanılabilirlik (Usability)",
            "Kurtarılabilirlik (Recoverability)"
        ],
        "a": 1,
        "desc": "Ölçeklenebilirlik (Scalability), sistemin artan yükü donanım ekleyerek (yatay veya dikey) kaldırabilme potansiyelidir."
    },
    {
        "q": "Bulut bilişim sistemlerinde, yük azaldığında kaynakların geri bırakılması ve yük arttığında saniyeler içinde dinamik ve otomatik kaynak genişletilmesi nedir?",
        "options": [
            "Ölçeklenebilirlik (Scalability)",
            "Esneklik (Elasticity)",
            "Taşınabilirlik (Portability)",
            "Sürdürülebilirlik (Maintainability)"
        ],
        "a": 1,
        "desc": "Esneklik (Elasticity), kaynakların talebe göre anlık ve otomatik olarak daralıp genişleyebilmesidir (Örn: Auto-scaling)."
    },
    {
        "q": "Sistemin bir çökme veya fiziksel felaket (disaster) anında verileri kaybetmeden en kısa sürede (MTTR) ayağa kalkabilme yeteneğine ne ad verilir?",
        "options": [
            "Kurtarılabilirlik (Recoverability)",
            "Sürdürülebilirlik (Maintainability)",
            "Performans (Performance)",
            "Test Edilebilirlik (Testability)"
        ],
        "a": 0,
        "desc": "Kurtarılabilirlik (Recoverability / Disaster Recovery), sistemin arıza sonrası tekrar çalışır duruma gelme kapasitesidir."
    },
    {
        "q": "Geliştiricilerin kodda değişiklik yapabilme, hataları bulabilme ve yeni özellikleri kolayca ekleyebilmesini belirleyen yapısal kalite özniteliği hangisidir?",
        "options": [
            "Test Edilebilirlik (Testability)",
            "Sürdürülebilirlik (Maintainability)",
            "Taşınabilirlik (Portability)",
            "Birlikte Çalışabilirlik (Interoperability)"
        ],
        "a": 1,
        "desc": "Sürdürülebilirlik (Maintainability), kodun yaşam döngüsü boyunca bakım, refactoring ve geliştirme maliyetlerini doğrudan belirler."
    },
    {
        "q": "Uygulamanın farklı işletim sistemlerine (Linux, Windows) veya bulut sağlayıcılarına (AWS, Azure) minimum kod değişikliğiyle taşınabilmesi yeteneği hangisidir?",
        "options": [
            "Birlikte Çalışabilirlik (Interoperability)",
            "Genişletilebilirlik (Extensibility)",
            "Taşınabilirlik (Portability)",
            "Ölçeklenebilirlik (Scalability)"
        ],
        "a": 2,
        "desc": "Taşınabilirlik (Portability), uygulamanın platformdan bağımsız olarak farklı ortamlarda çalışabilme derecesidir."
    },
    {
        "q": "Sisteme yönelik yetkisiz sızma girişimlerini engelleme, kullanıcı verilerini koruma ve kimlik doğrulamayı yönetme yeteneği hangi alana girer?",
        "options": [
            "Güvenlik (Security)",
            "Gizlilik (Privacy)",
            "Denetlenebilirlik (Auditability)",
            "Güvenilirlik (Reliability)"
        ],
        "a": 0,
        "desc": "Güvenlik (Security), sistem verilerinin ve kaynaklarının bütünlüğünü, gizliliğini ve erişilebilirliğini korur."
    },
    {
        "q": "Finansal işlemler yürüten bir sistemde, kritik hareketlerin geçmişe dönük olarak kimin tarafından ne zaman yapıldığının izlenebilmesi özelliği hangisidir?",
        "options": [
            "Gizlilik (Privacy)",
            "Denetlenebilirlik (Auditability)",
            "Birlikte Çalışabilirlik (Interoperability)",
            "Esneklik (Elasticity)"
        ],
        "a": 1,
        "desc": "Denetlenebilirlik (Auditability / Traceability), yasal ve operasyonel takip için kritik sistem eylemlerinin loglanmasıdır."
    },
    {
        "q": "Kalite özniteliklerinin (Quality Attributes) belirlenmesi ve mimari tasarımdaki en büyük mühendislik zorluğu nedir?",
        "options": [
            "Kalite özniteliklerinin hiçbir zaman ölçülemez olması.",
            "Kalite özniteliklerinin birbiriyle çelişmesi ve ödünleşme (trade-off) gerektirmesi (Örn: Güvenlik seviyesi çok artarsa Performans düşebilir).",
            "Yazılım geliştirme dillerinin bu özellikleri desteklememesi.",
            "Donanım üreticilerinin kalite standartlarını engellemesi."
        ],
        "a": 1,
        "desc": "Tüm kalite özniteliklerini aynı anda en üst düzeye çıkarmak imkansızdır. Birini artırmak genellikle diğerinden ödün vermeyi gerektirir."
    },
    {
        "q": "Sistemin belirli bir zaman diliminde arızalanmadan doğru şekilde çalışma olasılığını ifade eden karakteristik hangisidir?",
        "options": [
            "Erişilebilirlik (Availability)",
            "Güvenilirlik (Reliability)",
            "Sürdürülebilirlik (Maintainability)",
            "Ölçeklenebilirlik (Scalability)"
        ],
        "a": 1,
        "desc": "Güvenilirlik (Reliability / MTBF), sistemin hata vermeden sürekli çalışabilme olasılığı ve kararlılığıdır."
    },
    {
        "q": "Bir web API'sinin gelen isteklere 100 milisaniyenin altında yanıt vermesi (response time) hangi kalite özniteliğidir?",
        "options": [
            "Performans / Zaman Davranışı (Performance)",
            "Güvenilirlik (Reliability)",
            "Erişilebilirlik (Availability)",
            "Esneklik (Elasticity)"
        ],
        "a": 0,
        "desc": "Zaman davranışı ve kaynak kullanımı (CPU/RAM/Network) performansı tanımlayan metriklerdir."
    },
    {
        "q": "Sistemin dışarıdaki diğer sistemlerle standart protokoller üzerinden sorunsuz veri alışverişi yapabilmesi yeteneğine ne ad verilir?",
        "options": [
            "Taşınabilirlik (Portability)",
            "Birlikte Çalışabilirlik (Interoperability)",
            "Genişletilebilirlik (Extensibility)",
            "Güvenilirlik (Reliability)"
        ],
        "a": 1,
        "desc": "Interoperability, farklı heterojen sistemlerin birbiriyle entegre olabilme ve konuşabilme yeteneğidir."
    },
    {
        "q": "Geliştiricilerin yazılan kod bloklarını veya fonksiyonları kolayca test edebilme ve test otomasyonuna tabi tutabilme kolaylığı hangisidir?",
        "options": [
            "Sürdürülebilirlik (Maintainability)",
            "Test Edilebilirlik (Testability)",
            "Analiz Edilebilirlik (Analyzability)",
            "Fonksiyonel Uygunluk"
        ],
        "a": 1,
        "desc": "Test Edilebilirlik (Testability), sistemin hatalarının test senaryolarıyla ne kadar kolay ortaya çıkarılabileceğinin ölçüsüdür."
    },
    {
        "q": "Kullanıcının uygulamayı kullanırken hata yapmasını engelleme, kolay öğrenme ve memnuniyet seviyesi hangi karakteristik altındadır?",
        "options": [
            "Kullanılabilirlik (Usability)",
            "Sürdürülebilirlik (Maintainability)",
            "Fonksiyonel Uygunluk",
            "Güvenilirlik"
        ],
        "a": 0,
        "desc": "Usability (Kullanılabilirlik), kullanıcı deneyimini (UX), arayüz kolaylığını ve öğrenilebilirliği kapsar."
    },
    {
        "q": "Sistemin sadece yetkili kullanıcıların kişisel verilerine erişmesini sağlama ve veri ifşasını engelleme yeteneği hangisidir?",
        "options": [
            "Denetlenebilirlik (Auditability)",
            "Gizlilik (Privacy)",
            "Güvenilirlik (Reliability)",
            "Esneklik (Elasticity)"
        ],
        "a": 1,
        "desc": "Privacy (Veri Gizliliği), kullanıcı bilgilerinin yasalara (GDPR, KVKK) uygun şekilde korunması ve yetkisiz paylaşılmamasını sağlar."
    },

    // Bölüm 5: Metrikler (Cyclomatic, LCOM, Distance) & Fitness Fonksiyonları (ArchUnit) (60-69)
    {
        "q": "Bir kod bloğunun içindeki bağımsız karar yollarının (dallanmalarının) sayısını ölçen metrik hangisidir?",
        "options": [
            "Lack of Cohesion in Methods (LCOM)",
            "Siklomaktik Karmaşıklık (Cyclomatic Complexity)",
            "Distance from Main Sequence (Ana Diziden Uzaklık)",
            "Kararsızlık (Instability)"
        ],
        "a": 1,
        "desc": "Siklomaktik Karmaşıklık, kodun kontrol akış grafiğindeki döngü ve karar noktalarını (if, for vb.) ölçer."
    },
    {
        "q": "Siklomaktik Karmaşıklık hesaplama formülü M = E - N + 2P ifadesindeki E ve N harfleri sırasıyla neyi temsil eder?",
        "options": [
            "E = Sınıf sayısı, N = Metot sayısı",
            "E = Grafikteki kenarlar (edges), N = Düğümler (nodes)",
            "E = Hata sayısı, N = Satır sayısı",
            "E = Veritabanı tabloları, N = İlişkiler"
        ],
        "a": 1,
        "desc": "E (edges) kontrol akış yollarını/kenarları, N (nodes) ise karar ve işlem bloklarını/düğümleri temsil eder."
    },
    {
        "q": "LCOM (Lack of Cohesion in Methods) metriğinin değerinin sıfıra yakın (0) olması neyi ifade eder?",
        "options": [
            "Sınıfın cohesion değerinin çok düşük olduğunu ve bölünmesi gerektiğini.",
            "Sınıfın metotlarının ortak değişkenleri yoğun şekilde kullandığını, yani yüksek cohesion'a (bağlılığa) sahip olduğunu.",
            "Sınıfta hiçbir metot bulunmadığını.",
            "Sınıfın çalışma zamanında bellek hatası fırlattığını."
        ],
        "a": 1,
        "desc": "LCOM, metotların ortak değişkenleri kullanmama derecesidir. Sıfır veya sıfıra yakın olması, sınıfın son derece cohesive (tutarlı/odaklanmış) olduğunu gösterir."
    },
    {
        "q": "Mimaride Ana Diziden Uzaklık (Distance from Main Sequence) metriğinin D = 0 olması neyi ifade eder?",
        "options": [
            "Sınıfın gereksiz yazıldığını.",
            "Sistemin çökmek üzere olduğunu.",
            "Soyutluk (Abstractness) ile Kararsızlık (Instability) dengesinin ideal olduğunu.",
            "Hiçbir modülün bu sınıfa erişemediğini."
        ],
        "a": 2,
        "desc": "D = |A + I - 1| formülünde D=0 olması, soyutlama derecesi ile kararsızlık (bağımlılık) oranının mükemmel dengede olduğunu gösterir."
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
        "desc": "Kararsızlık (I), dışa giden bağımlılıkların (Fan-out) toplam bağımlılıklara (Fan-in + Fan-out) oranıdır."
    },
    {
        "q": "Kararsızlık (Instability) değeri I = 0 olan bir modül için hangisi doğrudur?",
        "options": [
            "Başka hiçbir modül bu modüle bağımlı değildir.",
            "Modül tamamen kararsızdır ve sürekli değişmesi beklenir.",
            "Modülün dışarıya hiç bağımlılığı yoktur, oldukça istikrarlıdır (stable) ve değişmesi zordur.",
            "Modülün derlenmesi imkansızdır."
        ],
        "a": 2,
        "desc": "I=0 olması Fan-out=0 demektir. Yani bu modül dışarıya bağımlı değildir, diğer modüller ona bağımlıdır. Oldukça istikrarlıdır (stable)."
    },
    {
        "q": "Mimari standartların zamanla bozulmasını ve teknik borç birikmesini engellemek amacıyla sürekli denetim yapan otomatik mekanizma hangisidir?",
        "options": [
            "Birim Testler (Unit Tests)",
            "Entegrasyon Testleri (Integration Tests)",
            "Mimari Uygunluk Fonksiyonları (Architectural Fitness Functions)",
            "Kod Formatlama Araçları (Prettier/Linter)"
        ],
        "a": 2,
        "desc": "Fitness fonksiyonları, mimari karakteristiklerin ve tasarım kurallarının korunmasını sağlayan otomatik test mekanizmalarıdır."
    },
    {
        "q": "Java ekosisteminde mimari kuralları (Örn: 'Controller sınıfları doğrudan Repository çağırmamalıdır') birim test olarak yazmamızı sağlayan kütüphane hangisidir?",
        "options": [
            "JUnit",
            "ArchUnit",
            "Mockito",
            "Spring Boot Test"
        ],
        "a": 1,
        "desc": "ArchUnit, Java sınıfları, paketleri ve katmanları arasındaki mimari kuralları doğrulamak için özel tasarlanmış bir test kütüphanesidir."
    },
    {
        "q": "Fitness fonksiyonları, teknik borç (technical debt) birikmesini engellemek için yazılım sürecinin hangi aşamasında çalıştırılmalıdır?",
        "options": [
            "Sadece proje canlıya çıktıktan aylar sonra manuel tetiklenerek.",
            "CI/CD (Sürekli Entegrasyon) derleme hattı (build pipeline) üzerinde her kod gönderiminde otomatik olarak.",
            "Sadece yazılım mimarının kişisel bilgisayarında istendiğinde.",
            "Hiçbir zaman; manuel denetim her zaman yeterlidir."
        ],
        "a": 1,
        "desc": "Otomatik fitness fonksiyonlarının CI/CD hatlarında her commit/push işleminde çalıştırılması mimari erozyonu anında önler."
    },
    {
        "q": "Distance metriğinde 'Zone of Pain (Acı Bölgesi)' olarak adlandırılan bölge (A=0, I=0) neleri tanımlar?",
        "options": [
            "Soyutluğu çok yüksek ama bağımlılığı olmayan sınıfları.",
            "Soyutluğu sıfır (somut) ama kararsızlığı sıfır (tam istikrarlı/stable) olan, yani değiştirilmesi aşırı zor olan katı bölgeyi.",
            "Gereksiz yazılmış sınıfları.",
            "Sürekli hata veren ve çöken kod bloklarını."
        ],
        "a": 1,
        "desc": "Acı Bölgesindeki kodlar somuttur (A=0) ve herkes onlara bağımlıdır (I=0). Bu yüzden bu kodlarda değişiklik yapmak sistemi kırabilir (Örn: Veritabanı sürücüleri)."
    },

    // Bölüm 6: Bileşen Tabanlı Düşünme & Bileşen Bölümleme (Technical vs Domain) (70-79)
    {
        "q": "Yazılım bileşenlerini katmanlara göre (Controller, Service, Repository / Presentation, Business, Database) gruplama stratejisi hangisidir?",
        "options": [
            "Domain Partitioning (Alan Odaklı Bölümleme)",
            "Technical Partitioning (Teknik Bölümleme)",
            "Database Partitioning",
            "Hybrid Partitioning"
        ],
        "a": 1,
        "desc": "Teknik bölümleme (technical partitioning), sınıfları teknik rollerine ve sorumluluklarına göre katmanlar halinde paketler."
    },
    {
        "q": "Bileşenleri iş alanlarına ve iş yeteneklerine göre (Ödeme, Sepet, Sipariş, Katalog) ayırma stratejisi hangisidir?",
        "options": [
            "Technical Partitioning",
            "Domain Partitioning (Alan Odaklı Bölümleme)",
            "Infrastructure Partitioning",
            "Horizontal Partitioning"
        ],
        "a": 1,
        "desc": "Alan odaklı bölümleme (domain partitioning), bileşenleri iş yeteneklerine (business capabilities) göre gruplar ve mikroservislerin temelidir."
    },
    {
        "q": "Technical Partitioning (Teknik Bölümleme) yaklaşımının en büyük dezavantajı aşağıdakilerden hangisidir?",
        "options": [
            "Teknolojik entegrasyonların yapılamaması.",
            "Tek bir iş özelliğindeki (feature) değişikliğin tüm katmanları (yatayda controller, service, repository) etkilemesi ve koordinasyon yükü.",
            "Paket yapılarının çok küçük olması.",
            "Sadece belirli dillerde uygulanabilmesi."
        ],
        "a": 1,
        "desc": "Teknik bölümlemede bir değişiklik yapmak yatayda tüm katmanlara dokunmayı gerektirir, deployment riskini ve ekipler arası koordinasyonu artırır."
    },
    {
        "q": "Domain Partitioning (Alan Odaklı Bölümleme) yaklaşımının en büyük mimari avantajı nedir?",
        "options": [
            "Katmanların birbirine sıkı bağlanmasını kolaylaştırması.",
            "Her iş alanının (Örn: Ödeme) kendi içinde bağımsız geliştirilip, test edilip deploy edilebilmesi (lokalizasyon ve otonomi).",
            "Yazılan kod satırı sayısını büyük oranda azaltması.",
            "Veritabanı bağlantı hızını artırması."
        ],
        "a": 1,
        "desc": "İş alanına göre bölme, ekiplerin kendi domainlerine odaklanmasını sağlar ve mikroservis gibi bağımsız deploy edilebilir yapılara geçişi kolaylaştırır."
    },
    {
        "q": "Bir mimarın bileşen sınırlarını belirlerken aşırı küçük bileşenler tasarlamasının (over-partitioning / high granularity) riski nedir?",
        "options": [
            "Bileşenlerin hiçbir şekilde derlenememesi.",
            "Bileşenler arası ağ/iletişim trafiğinin aşırı artması, entegrasyon karmaşıklığı ve performans kaybı.",
            "Kodun okunabilirliğinin tamamen kaybolması.",
            "Bellek tüketiminin sıfıra inmesi."
        ],
        "a": 1,
        "desc": "Aşırı parçalama (granularity sorunu), servislerin sürekli birbiriyle konuşmak zorunda kaldığı 'chatty' yapılara ve ağ gecikmelerine yol açar."
    },
    {
        "q": "Bileşenlerin tespiti (Component Identification) sürecinde ilk adım genellikle aşağıdakilerden hangisidir?",
        "options": [
            "Doğrudan kod yazmaya başlamak.",
            "Nihai mimari stili seçmek.",
            "Başlangıç bileşenlerini (initial components) tanımlamak ve iş gereksinimlerini analiz etmek.",
            "Donanım ve sunucu kaynaklarını kiralamak."
        ],
        "a": 2,
        "desc": "Önce iş gereksinimleri ve aktörler analiz edilerek sistemin kaba yapı taşları (initial components) belirlenir."
    },
    {
        "q": "Conway Yasası (Conway's Law) yazılım mimarisi ve organizasyon yapısı hakkında ne söyler?",
        "options": [
            "En yüksek bütçeli donanım her zaman en iyi yazılımı üretir.",
            "Yazılım mimarileri, onu geliştiren organizasyonların iletişim yapılarını kopyalar.",
            "Tüm yazılım bileşenleri aynı dilde yazılmalıdır.",
            "Yazılım kalitesi geliştirici sayısıyla doğru orantılıdır."
        ],
        "a": 1,
        "desc": "Conway Yasası: 'Sistem tasarlayan organizasyonlar, kendi iletişim yapılarını kopyalayan tasarımlar üretirler.' Ekip yapısı mimariyi doğrudan şekillendirir."
    },
    {
        "q": "Bileşen tasarımı sürecinde geri bildirim döngüsünün (feedback loop) mimar üzerindeki en önemli işlevi nedir?",
        "options": [
            "Bileşenlerin boyutunun ve sınırlarının zamanla gerçek dünya gereksinimlerine göre ayarlanmasını (refining granularity) sağlamak.",
            "Yazılan kodların otomatik silinmesini önlemek.",
            "Geliştirici ekiplerin kod yazma hızını yavaşlatarak kontrol sağlamak.",
            "Ağ hızını ve internet bant genişliğini ölçmek."
        ],
        "a": 0,
        "desc": "Bileşen sınırları ilk seferde mükemmel olamaz. Geri bildirim döngüleriyle granülerlik ve sınırlar optimize edilir."
    },
    {
        "q": "Domain-Driven Design (DDD) yaklaşımındaki hangi kavram doğrudan bağımsız bir domain bileşeninin (veya mikroservisin) sınırını çizer?",
        "options": [
            "Entity (Varlık)",
            "Value Object (Değer Nesnesi)",
            "Bounded Context (Sınırlandırılmış Bağlam)",
            "Repository (Depo)"
        ],
        "a": 2,
        "desc": "Bounded Context, bir veri ve iş modelinin sınırlarını çizer ve doğrudan bağımsız bir domain bileşenine (veya mikroservise) karşılık gelir."
    },
    {
        "q": "Bileşenlerin granülerliği (size/granularity) belirlenirken aşağıdakilerden hangisi göz önüne alınmalıdır?",
        "options": [
            "Sadece veritabanındaki tablo sayısı.",
            "Bileşenlerin bağımsız deploy edilme ihtiyacı, veri paylaşım sıklığı ve ağ gecikmesi toleransı.",
            "Geliştiricilerin kıdem seviyesi.",
            "Kullanılan framework'ün dosya boyutu limitleri."
        ],
        "a": 1,
        "desc": "Bileşenlerin çok büyük olması monolitik hantallık yaratırken, çok küçük olması ağ trafiğini artırır. Bu denge deploy edilebilirlik ve veri paylaşım sıklığına göre kurulur."
    },

    // Bölüm 7: Mimari Stiller (Katmanlı, Boru Hattı, Eklenti, SOA, Mikroservisler) (80-99)
    {
        "q": "Katmanlı Mimari (Layered Architecture) stilinin en belirgin yapısal özelliği hangisidir?",
        "options": [
            "Bileşenlerin dairesel olarak yerleştirilmesidir.",
            "Bileşenlerin yatay hiyerarşik katmanlar (Presentation, Business, Database) halinde düzenlenmesi ve katmanların kapalı (closed) veya açık (open) olması.",
            "Her servisin mutlaka kendi bağımsız veritabanının bulunması.",
            "Bileşenlerin sadece olaylar (events) üzerinden asenkron haberleşmesi."
        ],
        "a": 1,
        "desc": "Katmanlı mimari, bileşenleri sorumluluklarına göre yatay katmanlara ayırır. Kapalı katmanlar üstündeki katmanın altındaki katmanı atlamasını engeller."
    },
    {
        "q": "Katmanlı mimaride, bir isteğin hiçbir iş mantığı işletilmeden sadece katmanlardan geçerek doğrudan veritabanına erişmesine ne ad verilir?",
        "options": [
            "Big Ball of Mud",
            "Sinkhole Anti-Pattern (Lavabo Deliği Anti-Deseni)",
            "Circular Dependency",
            "Liskov Violation"
        ],
        "a": 1,
        "desc": "Sinkhole anti-deseninde istekler katmanlarda işlem görmeden doğrudan alt katmana aktarılır. Bu durum katmanlı yapının getirdiği performansı boş yere tüketir."
    },
    {
        "q": "Boru Hattı (Pipeline) mimari stilindeki 'filtre' (filter) bileşenlerinin temel görevi nedir?",
        "options": [
            "Veritabanı bağlantı havuzunu sınırlamak.",
            "Gelen veri akışını bağımsız olarak işlemek, dönüştürmek ve bir sonraki boruya (pipe) aktarmak.",
            "Kullanıcının sisteme erişim yetkilerini kontrol etmek.",
            "Arayüzün renk paletini belirlemek."
        ],
        "a": 1,
        "desc": "Filtreler veri dönüştürücülerdir (data transformers) ve birbirlerinden tamamen bağımsız/izole çalışırlar."
    },
    {
        "q": "Eklenti tabanlı (Plug-in / Microkernel) mimari stilinin iki ana bileşeni hangisidir?",
        "options": [
            "Client ve Server",
            "Core System (Çekirdek Sistem) ve Plug-in Modules (Eklenti Modülleri)",
            "Database ve Cache Layer",
            "Controller ve View"
        ],
        "a": 1,
        "desc": "Çekirdek sistem temel minimum mantığı çalıştırır, ek özellikler ise çekirdeği bozmadan eklenti olarak sisteme takılıp çıkarılır (Örn: IDE'ler)."
    },
    {
        "q": "Orkestrasyon-Odaklı Servis-Yönelimli Mimari (OD-SOA) modelinde tüm servis çağrılarını ve entegrasyonu yöneten merkezi bileşen hangisidir?",
        "options": [
            "Relational Database",
            "Orkestrasyon Motoru / ESB (Enterprise Service Bus)",
            "Sidecar Proxy",
            "API Gateway"
        ],
        "a": 1,
        "desc": "OD-SOA'da tüm mesaj akışları ve entegrasyon kuralları merkezi bir orkestrasyon motoru (ESB) üzerinden akar."
    },
    {
        "q": "Mikroservis Mimarisi (Microservices) stilinin SOA'dan en temel farkı aşağıdakilerden hangisidir?",
        "options": [
            "Mikroservislerin daha yavaş çalışması.",
            "Tam bağımsız dağıtılabilirlik (independent deployability) ve servis başına bağımsız veritabanı (database per service) ilkelerini savunması.",
            "Mikroservislerde merkezi bir ESB kullanılması.",
            "Mikroservislerin monolitik veri yapılarını paylaşması."
        ],
        "a": 1,
        "desc": "Mikroservisler paylaşımlı kaynakları (ESB, ortak veritabanı) reddeder, yüksek bağımsızlık için 'duplication over reuse' ilkesini uygular."
    },
    {
        "q": "Mikroservislerde her servisin kendi veritabanına sahip olmasının en önemli mimari sonucu nedir?",
        "options": [
            "Veritabanı lisans masraflarının azalması.",
            "Servislerin veri düzeyinde birbirine bağımlılığının (coupling) kırılması ve bağımsız geliştirilip deploy edilebilmesi.",
            "Veri tabanlarının daha yavaş çalışması.",
            "Veri yedeklemenin imkansızlaşması."
        ],
        "a": 1,
        "desc": "Veritabanlarının ayrılması sıkı bağlılığı (coupling) kırar ve servislerin bağımsız geliştirilmesini ve ölçeklenmesini sağlar."
    },
    {
        "q": "Mikroservis mimarisinde ortak operasyonel işlevleri (loglama, izleme, güvenlik vb.) ana servisin kodunu kirletmeden yanına eklemeyi sağlayan desen hangisidir?",
        "options": [
            "Mediator Pattern",
            "Sidecar Pattern",
            "Factory Pattern",
            "Observer Pattern"
        ],
        "a": 1,
        "desc": "Sidecar deseni, ana konteynerin yanına eklenen yardımcı konteynerlerle altyapı ve ağ görevlerini yönetir."
    },
    {
        "q": "Sidecar'ların oluşturduğu ağ üzerinden servisler arası iletişimi, yönlendirmeyi ve trafiği yöneten altyapı katmanına ne ad verilir?",
        "options": [
            "Enterprise Service Bus (ESB)",
            "Service Mesh (Servis Ağı)",
            "Message Broker",
            "Load Balancer"
        ],
        "a": 1,
        "desc": "Service Mesh (örn: Istio), sidecar'lar aracılığıyla servislerin güvenliğini, yönlendirmesini ve izlenebilirliğini merkezi yönetir."
    },
    {
        "q": "Orkestrasyon-Odaklı SOA modelinde tek bir ortak servisin (Örn: Customer Service) kullanılmasının yarattığı en büyük tehlike nedir?",
        "options": [
            "Performansın aşırı artması.",
            "Aşırı bağımlılık (tight coupling) sebebiyle küçük bir değişikliğin tüm sistemi etkilemesi (ripple effect) ve koordine/büyük deployment zorunluluğu.",
            "Veritabanının silinmesi.",
            "Ekiplerin o servisi hiç kullanamaması."
        ],
        "a": 1,
        "desc": "Merkezi servis paylaşımı, sistemde 'ripple effect' yaratarak bağımsızlığı yok eder ve güncellemeleri zorlaştırır."
    },
    {
        "q": "Eklenti tabanlı (Plug-in) mimari tasarımında eklentiler çekirdek sisteme (core) nasıl bağlanır ve veri alışverişi yapar?",
        "options": [
            "Doğrudan veritabanı tabloları üzerinden ortak SQL sorguları yazarak.",
            "Çekirdek sistem tarafından sunulan ve sınırları belirlenmiş kayıt (registration) arayüzleri ve API'ler vasıtasıyla.",
            "Ağ üzerinden sürekli REST API çağrıları atarak.",
            "Eklentiler çekirdek sistemin kaynak kodunu derleme anında doğrudan değiştirerek."
        ],
        "a": 1,
        "desc": "Eklentiler, çekirdek sistemin tanımladığı arayüzleri implement ederek veya çekirdek API'lerini kullanarak sisteme bağlanır."
    },
    {
        "q": "Boru Hattı (Pipeline / Pipes and Filters) mimari stilinde boruların (pipes) temel görevi hangisidir?",
        "options": [
            "Veriyi işlemek ve dönüştürmek.",
            "Filtreler arasında veri akışını tek yönlü olarak taşımak (iletişim kanalı).",
            "Kullanıcı isteklerini karşılayan arayüzleri sunmak.",
            "Veritabanı tablolarını birbirine bağlamak."
        ],
        "a": 1,
        "desc": "Pipe'lar veri üzerinde işlem yapmaz, sadece filtreler arası tek yönlü veri taşıyan kanallardır."
    },
    {
        "q": "Alan Tabanlı Mimari (Space-Based Architecture) hangi temel problemi çözmek için tasarlanmıştır?",
        "options": [
            "Kodun test edilebilirliğini artırmak.",
            "Veritabanındaki tıkanıklıkları (database bottleneck) önlemek ve yüksek eşzamanlı istekleri RAM (bellek) içi veri ızgaralarıyla (data grids) karşılamak.",
            "Arayüz yükleme sürelerini optimize etmek.",
            "Mikroservislerin boyutunu küçültmek."
        ],
        "a": 1,
        "desc": "Space-Based mimari, merkezi veritabanı darboğazını aşmak için veriyi bellek içi (In-Memory Data Grid) üzerinde replike ederek çalışır."
    },
    {
        "q": "Olay Tabanlı Mimari (Event-Driven Architecture) stilinde olayların asenkron işlenmesinin en büyük faydası nedir?",
        "options": [
            "Hata ayıklamanın (debugging) çok kolaylaşması.",
            "Yüksek ölçeklenebilirlik, esneklik ve servislerin çalışma zamanında birbirini beklemeden (non-blocking) çalışabilmesi.",
            "Veri tabanının tutarlılığını (ACID) anlık garanti etmesi.",
            "Uygulamanın RAM tüketimini tamamen sıfırlaması."
        ],
        "a": 1,
        "desc": "Asenkron olay işleme, servislerin yanıt vermesini beklemeden iş akışının sürmesini sağlar (gevşek bağlılık)."
    },
    {
        "q": "Katmanlı mimaride bir katmanın sadece altındaki katmana erişebilmesini zorunlu kılan kurala ne ad verilir?",
        "options": [
            "Açık Katman (Open Layer)",
            "Kapalı Katman (Closed Layer)",
            "İzole Katman",
            "Kısıtlı Katman"
        ],
        "a": 1,
        "desc": "Kapalı Katman (Closed Layer) kuralı, isteklerin aradaki katmanları atlamasını engelleyerek katmanlar arası bağımlılığın kontrol edilmesini sağlar."
    },
    {
        "q": "Mikroservis mimarisinde 'Veri Çoğaltma' (Data Duplication / Denormalization) neden bir tercih sebebi olabilir?",
        "options": [
            "Daha fazla disk alanı doldurarak sunucu kapasitesini test etmek için.",
            "Servislerin veri okuma işlemlerinde diğer servislere olan ağ bağımlılığını (coupling) kırıp bağımsız çalışabilmelerini sağlamak için.",
            "Veritabanı yedekleme işlemlerini otomatikleştirmek için.",
            "SQL sorgularını daha karmaşık hale getirmek için."
        ],
        "a": 1,
        "desc": "Mikroservisler yüksek otonomi için paylaşımlı veri tabanları yerine veri kopyalamayı (duplication over reuse) tercih ederler."
    },
    {
        "q": "Eklenti tabanlı (Plug-in) mimaride çekirdeğin (core) eklentilerdeki bir hatadan etkilenip çökmesini önlemek için uygulanan yöntem hangisidir?",
        "options": [
            "Eklentileri tamamen statik sınıflarla yazmak.",
            "Eklentileri ana işlemden (process) izole ederek ayrı iş parçacıklarında veya konteynerlerde çalıştırmak.",
            "Eklentilerin RAM kullanımını işletim sistemi düzeyinde tamamen kapatmak.",
            "Eklenti yazımını yasaklamak."
        ],
        "a": 1,
        "desc": "İzolasyon, eklentilerin çekirdek sistemi (core) kilitlemesini veya çökertmesini önlemek için uygulanan güvenlik ve kararlılık yönetimidir."
    },
    {
        "q": "Alan Tabanlı Mimari (Space-Based) stilinin en büyük dezavantajı aşağıdakilerden hangisidir?",
        "options": [
            "Performansının çok düşük olması.",
            "Veri tutarlılığını (eventual consistency) yönetmenin zorluğu ve bellek içi veri replikasyonunun getirdiği karmaşıklık.",
            "Bulut sunucularda çalıştırılamaması.",
            "Kullanıcı arayüzü entegrasyonunun imkansız olması."
        ],
        "a": 1,
        "desc": "Space-based mimaride veriler RAM'de tutulduğundan ve asenkron veritabanına yazıldığından, veri tutarlılığını sağlamak ve çökme anında veri kaybını önlemek zordur."
    },
    {
        "q": "Olay tabanlı mimaride olay kuyruğu (event queue) ile olay kanalı (event channel) arasındaki fark nedir?",
        "options": [
            "Kuyruk veriyi kalıcı saklar, kanal ise veriyi siler.",
            "Kuyruk gelen olayları sıraya alır (input), kanal ise olayları abonelere dağıtır (router/broker).",
            "Kuyruk sadece Java'da vardır, kanal ise her dilde kullanılabilir.",
            "İkisi arasında hiçbir mimari fark yoktur."
        ],
        "a": 1,
        "desc": "Olay kuyruğu istekleri toplar (Örn: Ingestion), olay kanalı ise bu olayları doğru abonelere/tüketicilere iletir (Örn: Event Broker)."
    },
    {
        "q": "Mikroservis mimarisine geçiş kararında rol oynayan en önemli itici güç hangisi olmalıdır?",
        "options": [
            "Geliştirici ekibin sadece en son teknolojileri denemek istemesi.",
            "Uygulamanın farklı iş alanlarının (domain) bağımsız hızlarda büyümesi, bağımsız dağıtım (deployment) ve farklı ekiplerin otonom çalışma ihtiyacı.",
            "Tüm kod tabanını tek bir büyük dosyada toplama isteği.",
            "Veritabanı lisans maliyetlerini azaltmak."
        ],
        "a": 1,
        "desc": "Mikroservisler teknik bir heves değil; bağımsız deploy edilebilirlik, ölçeklenebilirlik ve ekip otonomisi (organizasyonel hız) ihtiyacı için seçilmelidir."
    }
];
