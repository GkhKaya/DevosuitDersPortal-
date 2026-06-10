/**
 * Devosuit Yapay Zekaya Giriş — 100 Soruluk Sınav Bankası
 */
const questionsList = [
    // 0-9: Yapay Zekaya Giriş
    {
        q: "Rasyonel Ajan (Rational Agent) tanımına göre en doğru ifade hangisidir?",
        options: [
            "Her zaman insani davranışları taklit eden ajandır.",
            "Sahip olduğu bilgi birikimi ve algı geçmişine göre beklenen performansı maksimize eden eylemi seçen ajandır.",
            "Turing testini başarıyla geçen ve duygusal zekaya sahip olan ajandır.",
            "Hata yapma olasılığı sıfır olan ve tüm geleceği bilen ajandır."
        ],
        a: 1,
        desc: "Rasyonellik, mükemmel bilgiye (omniscience) dayanmaz. Ajanın o ana kadarki algı geçmişi (percept sequence) ve yerleşik bilgisine dayanarak performans ölçütünü maksimize etmesidir."
    },
    {
        q: "Aşağıdaki ajan ortamı özelliklerinden hangisi Satranç oyunu için geçerlidir?",
        options: [
            "Kısmi Gözlemlenebilir, Stokastik, Sürekli",
            "Tam Gözlemlenebilir, Deterministik, Kesikli",
            "Tam Gözlemlenebilir, Stokastik, Sürekli",
            "Kısmi Gözlemlenebilir, Deterministik, Statik"
        ],
        a: 1,
        desc: "Satrançta tahtanın tamamı görülebilir (Tam Gözlemlenebilir), rastgelelik yoktur (Deterministik) ve hamleler sırayla adımlar halindedir (Kesikli)."
    },
    {
        q: "Turing Testi'nde yapay zekanın sahip olması gereken alt alanlardan hangisi, doğrudan sesli konuşma veya insan mimiklerini taklit etmekle ilgili değildir?",
        options: [
            "Doğal Dil İşleme",
            "Bilgi Temsili",
            "Otomatik Akıl Yürütme",
            "Robotik Protez Kontrolü"
        ],
        a: 3,
        desc: "Robotik protezler fiziksel dünya ile etkileşimle ilgilidir ancak standart Turing testi yazılı sohbet üzerinden yapıldığı için fiziksel taklit gerektirmez."
    },
    {
        q: "Güçlü YZ (Strong AI) ve Zayıf YZ (Weak AI) arasındaki temel fark nedir?",
        options: [
            "Zayıf YZ daha az bellek kullanırken, Güçlü YZ derin öğrenme modelleri kullanır.",
            "Zayıf YZ belirli bir dar göreve odaklanırken, Güçlü YZ insan gibi bilinçli, genel akıl yürütme becerisine (AGI) odaklanır.",
            "Zayıf YZ sadece kural tabanlıdır, Güçlü YZ veri tabanlıdır.",
            "Zayıf YZ donanımsız çalışır, Güçlü YZ süper bilgisayarlar gerektirir."
        ],
        a: 1,
        desc: "Zayıf YZ (Dar YZ), örneğin satranç oynamak veya dil çevirmek gibi özel görevlerde çalışırken; Güçlü YZ, insan bilincine ve esnekliğine sahip genel zekayı hedefler."
    },
    {
        q: "Bir vakum temizleyici robotun temizlik ortamı (temiz/kirli kareler) hangi tür ortama bir örnektir?",
        options: [
            "Erişilebilir (Tam gözlemlenebilir), Kesikli, Statik",
            "Erişilemez, Sürekli, Dinamik",
            "Stokastik, Sürekli, Epizodik",
            "Deterministik, Kısmi gözlemlenebilir, Dinamik"
        ],
        a: 0,
        desc: "Vakum robotu sensörleriyle karesini tam görür (Erişilebilir), durumlar kesiklidir (kirli/temiz) ve temizlik yaparken ortam kendiliğinden değişmiyorsa statiktir."
    },
    {
        q: "Yapay zeka tarihçesinde 'YZ Kışı' (AI Winter) terimi neyi ifade eder?",
        options: [
            "YZ donanımlarının soğuk hava depolarında saklanması gerekliliğini",
            "Modellerin aşırı finansman alarak kontrolden çıkmasını",
            "Abartılı vaatlerin gerçekleşmemesi sonucu fonların kesildiği ve ilginin azaldığı dönemleri",
            "Sadece kış aylarında ortaya çıkan veri eksikliklerini"
        ],
        a: 2,
        desc: "Tarihte özellikle 1970'ler ve 1980'lerin sonlarında, Perceptron sınırlamaları ve uzman sistemlerin yetersizlikleri sebebiyle fonların kesildiği dönemlere AI Winter denir."
    },
    {
        q: "Öğrenen Ajan (Learning Agent) yapısındaki 'Eleştirmen' (Critic) bileşeninin görevi nedir?",
        options: [
            "Ajanın yapacağı hamleleri rastgele seçmek",
            "Dışarıdan gelen performansı ölçüp standartlara göre değerlendirerek öğrenme elemanına geri bildirim sağlamak",
            "Yeni denemeler yapılması için ajanı kışkırtmak (problem jeneratörü)",
            "Sensörlerden gelen verileri doğrudan eyleme dönüştürmek"
        ],
        a: 1,
        desc: "Eleştirmen, ajanın eylemlerinin başarısını sabit bir performans standardına göre ölçer ve öğrenme elemanına geri bildirim verir."
    },
    {
        q: "Basit Refleks Ajanı (Simple Reflex Agent) karar verirken neyi temel alır?",
        options: [
            "Geçmişteki tüm algı geçmişini",
            "Gelecekteki olası durumların tahminini",
            "Sadece o andaki algıyı (Durum-Eylem kuralları)",
            "Hedefe ulaşmak için gereken maliyet analizini"
        ],
        a: 2,
        desc: "Basit refleks ajanları geçmişi hatırlamaz, sadece şu anki algıya bakarak 'if-then' kural tablosuna göre çalışır."
    },
    {
        q: "Hangisi yapay zekanın felsefi temellerinden 'Zihin-Beden Problemi' ile doğrudan ilgilidir?",
        options: [
            "Düalist ve Materyalist görüşler",
            "Turing makinesinin durma problemi",
            "Gödel'in Eksiklik Teoremi",
            "Fuzzy mantık kuralları"
        ],
        a: 0,
        desc: "Zihnin fiziksel bir beyinden nasıl türediği tartışması Düalizm (ruh ve beden ayrı) ve Materyalizm (zihin beynin fiziksel çıktısıdır) çerçevesinde ele alınır."
    },
    {
        q: "Aşağıdakilerden hangisi bir ajan ortamının 'Epizodik' (Episodic) olduğunu gösterir?",
        options: [
            "Her bir eylem geçmişteki eylemlerin sonuçlarına sıkı sıkıya bağlıdır.",
            "Ajanın şu anki kararı gelecekteki kararlarını veya sonraki algıları etkilemez; her aşama bağımsızdır.",
            "Ortam zamanla sürekli olarak değişmektedir.",
            "Ortamda birden fazla rekabetçi ajan bulunmaktadır."
        ],
        a: 1,
        desc: "Epizodik ortamlarda ajan eylemleri bağımsız bölümler halindedir; şu anki karar sonraki adımları etkilemez (Örn: Kusurlu ürün tarama)."
    },

    // 10-19: Arama Algoritmaları
    {
        q: "A* Arama algoritmasında f(n) = g(n) + h(n) fonksiyonunda h(n) sezgisinin (heuristic) 'Kabul Edilebilir' (Admissible) olması ne anlama gelir?",
        options: [
            "h(n) değerinin g(n) değerinden her zaman büyük olması",
            "h(n) sezgisinin, hedefe olan gerçek maliyeti hiçbir zaman aşırı tahmin etmemesi (overestimate etmemesi)",
            "h(n) değerinin negatif olması",
            "Sezginin sadece tamsayı değerler alabilmesi"
        ],
        a: 1,
        desc: "Kabul edilebilirlik, sezgisel tahminin gerçek en kısa yol mesafesinden her zaman küçük ya da eşit olmasıdır (h(n) <= h*(n)). Bu özellik A*'ın optimal olmasını garantiler."
    },
    {
        q: "Genişlik Öncelikli Arama (Breadth-First Search - BFS) algoritması için hangisi doğrudur?",
        options: [
            "Derinliği sonsuz olan ağaçlarda asla sonlanmaz.",
            "LIFO (yığın) veri yapısı kullanır.",
            "Hedefi sığ seviyelerde olan ağaçlarda bellek dostudur.",
            "FIFO (kuyruk) veri yapısı kullanır ve sığ seviyelerden başlayarak tüm genişliği tarar."
        ],
        a: 3,
        desc: "BFS, düğümleri FIFO (kuyruk) yapısında tutar ve köke en yakın seviyedeki düğümleri önce genişletir. Zaman ve bellek karmaşıklığı O(b^d) şeklindedir."
    },
    {
        q: "Derinlik Öncelikli Arama (Depth-First Search - DFS) algoritmasının alan (bellek) karmaşıklığı nedir? (b: dallanma katsayısı, m: maksimum derinlik)",
        options: [
            "O(b^m)",
            "O(b * m)",
            "O(d^2)",
            "O(log b)"
        ],
        a: 1,
        desc: "DFS'in en büyük avantajı bellek dostu olmasıdır. Sadece aktif dalı yığında tuttuğu için bellek karmaşıklığı doğrusal, yani O(b*m) mertebesindedir."
    },
    {
        q: "Üniform Maliyetli Arama (Uniform Cost Search - UCS) hangi algoritmanın genel halidir ve düğümleri genişletirken hangi ölçütü kullanır?",
        options: [
            "BFS'in genel halidir; kökten o düğüme kadar olan toplam g(n) maliyetini minimize eden düğümü genişletir.",
            "DFS'in genel halidir; sadece sezgisel tahmini kullanır.",
            "A* algoritmasının sezgisiz halidir ve en derin düğümü seçer.",
            "Greedy Best-First aramanın optimal halidir."
        ],
        a: 0,
        desc: "UCS, kenar maliyetleri farklı olduğunda BFS gibi davranır. Öncelik kuyruğu (Priority Queue) kullanarak g(n) değeri en küçük olan düğümü genişletir."
    },
    {
        q: "Minimax algoritmasında Alfa-Beta budaması (Alpha-Beta Pruning) yapıldığında hangisi gerçekleşir?",
        options: [
            "Minimax kararı değişir ve daha kötü bir hamle seçilir.",
            "Optimal karar değişmeden kalır, ancak arama ağacının büyük bir kısmı incelenmeden elenerek hız kazanılır.",
            "Algoritmanın bellek karmaşıklığı O(b*m)'den O(b^m)'e yükselir.",
            "Alfa değeri her zaman Min oyuncusunun güncellediği değerdir."
        ],
        a: 1,
        desc: "Alfa-Beta budaması sonucu değiştirmeden gereksiz dalları budar. Alfa, Max oyuncusunun garantilediği en iyi skordur; Beta ise Min oyuncusunun garantilediği en kötü skordur."
    },
    {
        q: "Greedy Best-First Arama (Açgözlü En İyi Öncelikli Arama) eylemleri seçerken neyi kullanır ve optimal midir?",
        options: [
            "Sadece g(n) kullanır ve optimaldir.",
            "Sadece h(n) (sezgisel tahmin) kullanır ve optimal değildir.",
            "f(n) = g(n) + h(n) kullanır ve optimaldir.",
            "Rastgele arama yapar ve optimaldir."
        ],
        a: 1,
        desc: "Greedy Best-First search sadece hedefe kalan tahmini mesafeye (h(n)) bakar. Hızlıdır fakat engeller etrafında dolanamayabileceği için optimal değildir."
    },
    {
        q: "Bir sezgi fonksiyonunun 'Tutarlı' (Consistent / Monotonic) olması için hangi koşulu sağlaması gerekir?",
        options: [
            "h(n) <= c(n, a, n') + h(n')",
            "h(n) >= g(n)",
            "h(n) = 0",
            "h(n) <= h*(n)"
        ],
        a: 0,
        desc: "Tutarlılık (Monotonicity), bir n düğümünün sezgisel değerinin, komşusu n' düğümüne geçiş maliyeti ile n' düğümünün sezgisel değerinin toplamından küçük veya eşit olmasıdır."
    },
    {
        q: "Iterative Deepening Search (Yinelemeli Derinleşen Arama) için en doğru ifade hangisidir?",
        options: [
            "DFS'in bellek avantajı ile BFS'in tamlık (completeness) ve optimallik avantajını birleştirir.",
            "Sadece sonsuz dalları tarayan bir derin arama yöntemidir.",
            "A* aramasından daha fazla bellek kaplar.",
            "Kenar maliyetleri negatif olduğunda çalışan tek optimal algoritmadır."
        ],
        a: 0,
        desc: "IDS (Yinelemeli Derinleşen Arama), DFS'i limitli derinliklerle (0, 1, 2...) sırayla çalıştırır. Belleği O(b*d) tutarken, BFS gibi optimal ve tam kalır."
    },
    {
        q: "Tepe Tırmanma (Hill-Climbing) arama algoritmasının en temel zayıflığı nedir?",
        options: [
            "Çok fazla bellek kullanması",
            "Yerel maksimumlara (Local Maxima), düzlüklere (Plateau) veya omuzlara takılıp küresel optimumu bulamaması",
            "Kuyruk veri yapısı kullanması",
            "Sonsuz döngüye girmesi"
        ],
        a: 1,
        desc: "Hill-Climbing sadece anlık komşulardan daha iyi olana tırmanır. Bu yüzden yerel maksimuma ulaştığında arama durur ve küresel maksimum kaçırılabilir."
    },
    {
        q: "Simüle Edilmiş Tavlama (Simulated Annealing) algoritması, Hill-Climbing'in yerel maksimum probleminden nasıl kaçınır?",
        options: [
            "Daha fazla düğümü bellekte tutarak",
            "Sonsuz derinlikte arama yaparak",
            "Belirli bir olasılıkla (Sıcaklık - Temperature parametresine bağlı olarak) kötü yöndeki hamleleri de kabul ederek",
            "Sadece optimal sezgiler kullanarak"
        ],
        a: 2,
        desc: "Fiziksel tavlama benzetimiyle, başlangıçta sıcaklık yüksekken kötü hamleler yüksek olasılıkla kabul edilir; sıcaklık azaldıkça algoritma Hill-Climbing gibi davranır."
    },

    // 20-29: Makine Öğrenmesi
    {
        q: "Gözetimli Öğrenme (Supervised Learning) ile Gözetimsiz Öğrenme (Unsupervised Learning) arasındaki temel fark nedir?",
        options: [
            "Gözetimli öğrenmede eğitim verisinde etiketler (hedef çıktılar) bulunurken, gözetimsiz öğrenmede etiket yoktur; veri yapısı çözümlenmeye çalışılır.",
            "Gözetimsiz öğrenme sadece yapay sinir ağları kullanır.",
            "Gözetimli öğrenmede model eğitimi yapılmaz.",
            "Gözetimsiz öğrenmede sadece kategorik veriler kullanılır."
        ],
        a: 0,
        desc: "Gözetimli öğrenmede girdi-çıktı çiftleri vardır (örn: Regresyon, Sınıflandırma). Gözetimsiz öğrenmede ise girdiler gruplanır (örn: Kümeleme - Clustering)."
    },
    {
        q: "K-En Yakın Komşu (K-Nearest Neighbors - KNN) algoritmasında K değerinin aşırı küçük seçilmesi (örn: K=1) modeli nasıl etkiler?",
        options: [
            "Model underfitting (eksik öğrenme) eğilimine girer ve çok pürüzsüz sınırlar çizer.",
            "Model overfitting (aşırı öğrenme) eğilimine girer, gürültüye karşı aşırı hassaslaşır ve karmaşık karar sınırları çizer.",
            "Modelin eğitim süresi katlanarak artar.",
            "Model sadece doğrusal karar sınırları üretebilir."
        ],
        a: 1,
        desc: "K=1 seçildiğinde karar sınırları eğitim verisindeki tekil gürültülerden bile etkilenir ve aşırı uyum (overfitting) meydana gelir. K büyüdükçe karar sınırları yumuşar."
    },
    {
        q: "Aşağıdakilerden hangisi doğrusal regresyonda (Linear Regression) aşırı uyumu (overfitting) engellemek amacıyla katsayılara ceza terimi ekleyen düzenlileştirme (Regularization) yöntemidir?",
        options: [
            "Ridge (L2) ve Lasso (L1) Regresyonu",
            "Lojistik Regresyon",
            "K-Means Kümeleme",
            "Karar Ağaçları"
        ],
        a: 0,
        desc: "L1 (Lasso) katsayıları sıfıra eşitleyerek özellik seçimi yaparken, L2 (Ridge) katsayı değerlerini küçülterek varyansı düşürür ve overfitting'i önler."
    },
    {
        q: "Karar Ağaçlarında (Decision Trees) bilgi kazancını (Information Gain) hesaplamak için kullanılan ve belirsizlik/düzensizlik ölçüsü olan kavram hangisidir?",
        options: [
            "Entropi (Entropy)",
            "Korelasyon Katsayısı",
            "Öklid Mesafesi",
            "Maliyet Fonksiyonu (Loss Function)"
        ],
        a: 0,
        desc: "Entropi belirsizlik miktarıdır. Bilgi Kazancı (Information Gain) ise bölünmeden önceki entropi ile bölündükten sonraki ağırlıklı entropiler arasındaki farktır."
    },
    {
        q: "Lojistik Regresyon (Logistic Regression) modeli hakkında hangi ifade doğrudur?",
        options: [
            "Sürekli sayısal değerleri tahmin etmek için kullanılan bir regresyon modelidir.",
            "Çıktısı 0 ile 1 arasında olan ve sınıflandırma (genelde ikili) için kullanılan olasılıksal bir modeldir.",
            "Gözetimsiz bir kümeleme algoritmasıdır.",
            "Karar sınırları çizemeyen kural tabanlı bir sistemdir."
        ],
        a: 1,
        desc: "Adında regresyon geçse de Lojistik Regresyon bir sınıflandırma algoritmasıdır. Sigmoid fonksiyonunu kullanarak çıktıları olasılığa (0-1 arasına) dönüştürür."
    },
    {
        q: "Makine öğrenmesinde 'Varyans - Yanlılık Dengesi' (Bias-Variance Tradeoff) ile ilgili hangisi doğrudur?",
        options: [
            "Yüksek yanlılık (High Bias) aşırı öğrenmeye (overfitting) yol açar.",
            "Yüksek varyans (High Variance) eksik öğrenmeye (underfitting) yol açar.",
            "Yüksek yanlılık basit modellere (underfitting), yüksek varyans ise karmaşık ve kararsız modellere (overfitting) işaret eder.",
            "Bias ve Variance değerlerinin her ikisi de aynı anda sıfır yapılabilir."
        ],
        a: 2,
        desc: "Model çok basitse yanlılığı yüksektir (veriyi temsil edemez). Model çok karmaşıksa eğitim verisini ezberler ve varyansı yüksek olur. Amaç bu ikisinin toplam hatasını minimize etmektir."
    },
    {
        q: "KNN algoritmasında iki veri noktası arasındaki benzerliği ölçmek için en sık kullanılan mesafe metriği hangisidir?",
        options: [
            "Minkowski veya Öklid (Euclidean) Mesafesi",
            "Entropi Katsayısı",
            "Kosinüs Benzerliği",
            "Karar Sınırı Katsayısı"
        ],
        a: 0,
        desc: "Sayısal verilerde en sık Öklid (Euclidean) mesafesi d = sqrt(sum((xi - yi)^2)) kullanılır. Manhattan mesafesi de alternatiflerden biridir."
    },
    {
        q: "Destek Vektör Makineleri (Support Vector Machines - SVM) algoritmasında karar sınırına en yakın olan ve bu sınırın konumunu belirleyen veri noktalarına ne ad verilir?",
        options: [
            "Destek Vektörleri (Support Vectors)",
            "Aykırı Değerler (Outliers)",
            "Küme Merkezleri (Centroids)",
            "Entropi Noktaları"
        ],
        a: 0,
        desc: "SVM, sınıflar arasındaki marjı (margin) maksimum yapacak düzlemi çizer. Bu marj sınır çizgisi üzerinde duran kritik veri noktalarına destek vektörleri denir."
    },
    {
        q: "Karar ağaçlarının aşırı büyüyerek eğitim verisini ezberlemesini önlemek için uygulanan budama (Pruning) işleminin mantığı nedir?",
        options: [
            "Ağacın derinliğini sınırlamak ve önemsiz dalları keserek modeli basitleştirmek",
            "Veri setindeki tüm gürültülü satırları silmek",
            "Ağaç sayısını artırarak rastgele orman (Random Forest) oluşturmak",
            "Aktivasyon fonksiyonu eklemek"
        ],
        a: 0,
        desc: "Budama (Pruning), ağacın yapraklarındaki küçük istatistiksel sapmalara göre açılmış gereksiz dalları traşlayarak genelleştirme yeteneğini artırır."
    },
    {
        q: "Rastgele Orman (Random Forest) algoritması hangi topluluk öğrenme (Ensemble Learning) sınıfına aittir?",
        options: [
            "Bagging (Bootstrap Aggregating)",
            "Boosting",
            "Stacking",
            "Dimensionality Reduction"
        ],
        a: 0,
        desc: "Rastgele Orman, Bootstrap yöntemiyle oluşturulan birden fazla bağımsız karar ağacının tahminlerinin çoğunluk oylaması (bagging) yöntemiyle birleştirilmesidir."
    },

    // 30-39: Yapay Sinir Ağları (YSA)
    {
        q: "Tek katmanlı bir Perseptron (Perceptron) hangi tip problemleri kesinlikle çözemez?",
        options: [
            "AND (VE) gibi doğrusal ayrılabilen problemleri",
            "OR (VEYA) gibi doğrusal karar sınırı olan problemleri",
            "XOR (Özel VEYA) gibi doğrusal ayrışamayan (non-linear) problemleri",
            "Binary sınıflandırma problemlerini"
        ],
        a: 2,
        desc: "Perseptron sadece doğrusal (lineer) karar sınırları çizebilir. XOR kapısında girdiler doğrusal bir doğruyla ikiye bölünemez. Bu durum YSA tarihinde ilk krize yol açmıştır."
    },
    {
        q: "Yapay Sinir Ağlarında Geri Yayılım (Backpropagation) algoritmasının temel amacı nedir?",
        options: [
            "Çıktı katmanındaki hatayı geriye doğru yayarak zincir kuralı (chain rule) ile ağırlıklara göre kısmi türev (gradyan) hesaplamak ve ağırlıkları güncellemek",
            "Ağın katman sayısını dinamik olarak artırmak",
            "Aktivasyon fonksiyonunun türevini sıfıra eşitlemek",
            "Girdi verilerini normalize etmek"
        ],
        a: 0,
        desc: "Backpropagation gradyan inişi (Gradient Descent) için gereklidir. Çıktı hatasını geriye doğru katman katman ileterek her bir ağırlığın hatadaki payını (gradyanını) zincir kuralıyla hesaplar."
    },
    {
        q: "Aktivasyon fonksiyonlarının gradyanının sıfıra yaklaşması sonucu derin ağlarda eğitimin durma noktasına gelmesi problemine ne ad verilir?",
        options: [
            "Overfitting",
            "Kaybolan Gradyan Problemi (Vanishing Gradient)",
            "Yerel Maksimum Sapması",
            "Aşırı Gradyan Patlaması (Exploding Gradient)"
        ],
        a: 1,
        desc: "Sigmoid veya Tanh gibi fonksiyonların türevleri uç değerlerde sıfıra çok yaklaşır. Katman sayısı arttıkça bu türevlerin çarpımı geriye doğru sıfırlanır ve ilk katmanlar öğrenemez."
    },
    {
        q: "Yapay sinir hücresindeki aktivasyon fonksiyonunun temel işlevi nedir?",
        options: [
            "Girdilerin ağırlıklı toplamına doğrusal olmayan (non-linear) bir dönüşüm uygulayarak ağın karmaşık ilişkileri öğrenmesini sağlamak",
            "Ağırlık matrisinin boyutunu küçültmek",
            "Gürültülü verileri silmek",
            "Öğrenme oranını (learning rate) ayarlamak"
        ],
        a: 0,
        desc: "Eğer aktivasyon fonksiyonları olmazsa, ağ kaç katmanlı olursa olsun matematiksel olarak sadece doğrusal bir dönüşüm yapabilir. Non-lineerlik ağın esnekliğini sağlar."
    },
    {
        q: "Sigmoid aktivasyon fonksiyonunun matematiksel ifadesi ve çıktı aralığı nedir?",
        options: [
            "f(x) = 1 / (1 + e^-x) , Çıktı aralığı: (0, 1)",
            "f(x) = max(0, x) , Çıktı aralığı: [0, +inf)",
            "f(x) = (e^x - e^-x) / (e^x + e^-x) , Çıktı aralığı: (-1, 1)",
            "f(x) = x , Çıktı aralığı: Tüm reel sayılar"
        ],
        a: 0,
        desc: "Sigmoid fonksiyonu girdileri 0 ile 1 arasına sıkıştırır. Olasılık tahminlerinde çıktı katmanında yaygın olarak tercih edilir."
    },
    {
        q: "Yapay Sinir Ağlarında 'Öğrenme Oranı' (Learning Rate - alpha) parametresi neyi kontrol eder?",
        options: [
            "Ağın katman sayısını",
            "Gradyan inişinde minimuma doğru atılacak adımların büyüklüğünü",
            "Mini-batch boyutunu",
            "Eğitim verisindeki gürültü miktarını"
        ],
        a: 1,
        desc: "Öğrenme oranı çok büyük seçilirse optimum nokta aşılabilir (diverge); çok küçük seçilirse eğitim çok yavaş ilerler ve yerel minimumlara takılabilir."
    },
    {
        q: "Çok Katmanlı Perseptron (MLP) mimarisinde girdilerin ağırlıklarla çarpılıp toplandıktan sonra eklenen sabit terime (kaydırma) ne denir?",
        options: [
            "Bias",
            "Aktivasyon",
            "Epoch",
            "Loss"
        ],
        a: 0,
        desc: "Bias (sapma) terimi, karar sınırının orijinden kaydırılmasını sağlar. Denklem y = w*x + b şeklindedir ve b bias değeridir."
    },
    {
        q: "Aşağıdaki aktivasyon fonksiyonlarından hangisi negatif girdiler için tamamen sıfır çıktısı üretirken, pozitif girdiler için girdiyi aynen iletir?",
        options: [
            "Sigmoid",
            "Tanh",
            "ReLU (Rectified Linear Unit)",
            "Softmax"
        ],
        a: 2,
        desc: "ReLU fonksiyonu f(x) = max(0, x) şeklinde tanımlanır. Hesaplanması çok hızlıdır ve derin öğrenmede Vanishing Gradient problemini hafifletmek için yaygın kullanılır."
    },
    {
        q: "Softmax aktivasyon fonksiyonu YSA'larda genellikle hangi amaçla ve hangi katmanda kullanılır?",
        options: [
            "Çok sınıflı sınıflandırma problemlerinde çıktı katmanında sınıfların olasılık dağılımını üretmek için",
            "Giriş katmanında özellikleri normalize etmek için",
            "Gizli katmanlarda doğrusal olmayan dönüşüm için",
            "Türev alma hızını artırmak için gizli katmanlarda"
        ],
        a: 0,
        desc: "Softmax çıktı değerlerinin toplamını 1'e eşitler ve her bir çıktı değerini olasılık olarak temsil eder. Çok sınıflı (multi-class) sınıflandırmada standarttır."
    },
    {
        q: "Yapay Sinir Ağlarında bir 'Epoch' neyi ifade eder?",
        options: [
            "Tek bir veri örneğinin ağdan geçişini",
            "Tüm eğitim veri setinin ağdan (hem ileri besleme hem geri yayılım olarak) bir kez tam geçişini",
            "Ağırlıkların güncellenme sıklığını",
            "Hata fonksiyonunun sıfırlanma anını"
        ],
        a: 1,
        desc: "Tüm veri seti ağa bir kez sunulduğunda 1 epoch tamamlanmış olur. Modeller genellikle yüzlerce epoch boyunca eğitilir."
    },

    // 40-49: Bulanık Mantık & Genetik Algoritmalar
    {
        q: "Klasik küme mantığı (Crisp Set) ile Bulanık Küme mantığı (Fuzzy Set) arasındaki temel fark nedir?",
        options: [
            "Klasik kümede üyelik derecesi sadece 0 veya 1 olabilir; bulanık kümede ise üyelik derecesi [0, 1] aralığında sürekli herhangi bir değer alabilir.",
            "Bulanık mantık bilgisayarlarda çalıştırılamaz.",
            "Klasik kümeler sadece sayısal verileri tutar.",
            "Bulanık kümede eleman sınırı yoktur."
        ],
        a: 0,
        desc: "Klasik kümede bir eleman kümeye ya aittir (1) ya da değildir (0). Bulanık kümede ise üyelik fonksiyonu (membership function) ile elemanın o kümeye ne derece ait olduğu (örn: 0.7) gösterilir."
    },
    {
        q: "Bulanık Çıkarım Sistemlerinde (Fuzzy Inference Systems) Mamdani yöntemi sonucunda elde edilen bulanık çıktıyı net bir sayısal değere dönüştürme işlemine ne ad verilir?",
        options: [
            "Bulanıklaştırma (Fuzzification)",
            "Durulama / Netleştirme (Defuzzification)",
            "Kural Tabanı Oluşturma",
            "Üyelik Derecelendirmesi"
        ],
        a: 1,
        desc: "Çıkarım sonucunda elde edilen alan şeklindeki bulanık çıktının net bir sayıya (örn: motor hızı = 45 devir) dönüştürülmesine Defuzzification denir. Ağırlık merkezi (Centroid) en sık kullanılan yöntemdir."
    },
    {
        q: "Bulanık mantıkta iki bulanık üyelik derecesi arasındaki 'VE' (AND) işlemi standart olarak nasıl hesaplanır?",
        options: [
            "İki değerin toplamı alınarak (a + b)",
            "Değerlerin çarpımı ile (a * b)",
            "Minimum değeri seçerek (min(a, b))",
            "Maksimum değeri seçerek (max(a, b))"
        ],
        a: 2,
        desc: "Bulanık mantık teorisinde T-Norm olarak bilinen 'VE' işlemi yaygın olarak üyelik derecelerinin minimumu alınarak hesaplanır. 'VEYA' (OR) işlemi için ise maksimum (S-Norm) kullanılır."
    },
    {
        q: "Genetik Algoritmalarda (Genetic Algorithms) 'Kromozom' (Chromosome) terimi neyi temsil eder?",
        options: [
            "Problemin olası bir çözüm adayının kodlanmış halini (genellikle bit dizisi veya sayı dizisi)",
            "Problemin en iyi çözümünü",
            "Çözümlerin kalitesini ölçen matematiksel fonksiyonu",
            "Mutasyona uğrayan tek bir geni"
        ],
        a: 0,
        desc: "Biyolojiden esinlenilen GA'da, her birey (kromozom) problemin bir çözüm önerisidir. Kromozomu oluşturan her bir parametre ise 'Gen' olarak adlandırılır."
    },
    {
        q: "Genetik Algoritmalarda en iyi çözümlerin sonraki nesillere aktarılma şansını artırmak için bireylerin kalitesini ölçen fonksiyon hangisidir?",
        options: [
            "Uygunluk Fonksiyonu (Fitness Function)",
            "Kayıp Fonksiyonu (Loss Function)",
            "Sigmoid Fonksiyonu",
            "Arama Algoritması Sezgisi"
        ],
        a: 0,
        desc: "Fitness Function, bir çözüm adayının ne kadar başarılı olduğunu hesaplar. Rulet tekerleği gibi seçim mekanizmaları bu fitness değerini olasılık ağırlığı olarak kullanır."
    },
    {
        q: "Genetik Algoritmalarda 'Çaprazlama' (Crossover) operatörünün temel amacı nedir?",
        options: [
            "Mevcut başarılı çözümlerin genlerini birleştirerek daha iyi yeni çözüm adayları (çocuklar) üretmek (Exploitation)",
            "Bireyin genlerini rastgele değiştirerek yeni bölgeleri keşfetmek (Exploration)",
            "Popülasyondaki en kötü bireyleri yok etmek",
            "Bireylerin fitness skorlarını normalize etmek"
        ],
        a: 0,
        desc: "Crossover, iki ebeveynin genetik kodlarını belirli noktalardan kesip birleştirerek yeni bireyler üretir. Genetik materyalin yeniden kombinasyonudur."
    },
    {
        q: "Genetik Algoritmalarda 'Mutasyon' (Mutation) operatörünün temel işlevi nedir?",
        options: [
            "Popülasyonun yerel optimumlara sıkışıp kalmasını engellemek için çeşitlilik yaratmak ve yeni arama alanlarını keşfetmek (Exploration)",
            "En iyi çözümü doğrudan sonraki nesle kopyalamak",
            "Ebeveyn kromozomlarını ikiye bölmek",
            "Fitness değerlerini sıfırlamak"
        ],
        a: 0,
        desc: "Mutasyon, kromozomdaki bazı genleri çok düşük bir olasılıkla rastgele değiştirir (örn: 0'ı 1 yapmak). Bu sayede popülasyonda hiç bulunmayan yeni özellikler sisteme katılır."
    },
    {
        q: "Bulanık mantıkta üyelik fonksiyonları tasarlanırken en sık kullanılan geometrik şekiller hangileridir?",
        options: [
            "Üçgen ve Yamuk (Triangular and Trapezoidal)",
            "Daire ve Kare",
            "Fraktal şekiller",
            "Logaritmik spiral"
        ],
        a: 0,
        desc: "Üçgen ve yamuk üyelik fonksiyonları, hesaplama kolaylığı ve anlaşılabilirlik açısından bulanık kontrolör tasarımlarında en sık tercih edilenlerdir. Gaussian da yaygın bir alternatiftir."
    },
    {
        q: "Genetik Algoritmalarda popülasyondaki en iyi bireylerin hiç değişime uğramadan doğrudan bir sonraki nesle kopyalanması stratejisine ne ad verilir?",
        options: [
            "Seçkincilik (Elitizm)",
            "Turnuva Seçimi (Tournament Selection)",
            "Çaprazlama",
            "Doğal Seçilim"
        ],
        a: 0,
        desc: "Elitizm, en iyi çözümlerin crossover veya mutasyon kazalarıyla kaybolmasını önler. En iyi %1-5'lik dilim doğrudan sonraki nesle aktarılır."
    },
    {
        q: "Bulanık mantık çıkarım aşamasında Sugeno yöntemi ile Mamdani yöntemi arasındaki en büyük fark nedir?",
        options: [
            "Sugeno yönteminde kural sonuçları bulanık kümeler yerine matematiksel bir fonksiyon veya sabit bir sayısal değerdir; durulama işlemi çok daha kolaydır.",
            "Mamdani bilgisayarda çalışmaz, Sugeno çalışır.",
            "Sugeno sadece gözetimsiz veri ile çalışır.",
            "Mamdani üyelik fonksiyonu kullanamaz."
        ],
        a: 0,
        desc: "Sugeno (veya Takagi-Sugeno) çıkarımında kural sonuçları z = a*x + b*y gibi doğrusal denklemlerdir. Çıktı net sayıların ağırlıklı ortalamasıyla doğrudan hesaplanır."
    },

    // 50-59: Derin Öğrenme Algoritmaları
    {
        q: "Evrişimli Sinir Ağlarında (Convolutional Neural Networks - CNN) Evrişim (Convolution) katmanının temel görevi nedir?",
        options: [
            "Girdi görüntüsü üzerinde filtreler (kernel) gezdirerek kenarlar, köşeler ve dokular gibi yerel özellikleri (feature map) çıkartmak",
            "Görüntünün boyutunu yarıya indirmek",
            "Sınıflandırma olasılıklarını hesaplamak",
            "Gradyan türevlerini sıfırlamak"
        ],
        a: 0,
        desc: "Evrişim katmanı, paylaşımlı ağırlıklara sahip filtreler kullanarak görüntüden öznitelik haritaları çıkarır. Görsel verilerde mekansal korelasyonu yakalar."
    },
    {
        q: "CNN mimarisindeki Ortaklama (Pooling / Örnekleme) katmanının (örn: Max Pooling) temel işlevi nedir?",
        options: [
            "Özellik haritalarının boyutunu küçülterek parametre sayısını ve hesaplama maliyetini düşürmek, aşırı öğrenmeyi önlemek ve kayma değişmezliği sağlamak",
            "Aktivasyon fonksiyonu uygulamak",
            "Kanal sayısını (RGB) artırmak",
            "Ağırlıkları geri yayılımla güncellemek"
        ],
        a: 0,
        desc: "Pooling katmanı görüntünün en-boy boyutunu küçültür. Max pooling, belirlenen penceredeki en yüksek değeri seçerek en belirgin özellikleri korur."
    },
    {
        q: "Derin öğrenmede 'Aşırı Uyum' (Overfitting) problemini önlemek için eğitim sırasında her adımda bazı nöronları rastgele devre dışı bırakma yöntemine ne denir?",
        options: [
            "Seyreltme (Dropout)",
            "Toplu Normalizasyon (Batch Normalization)",
            "Erken Durdurma (Early Stopping)",
            "Ağırlık Azaltma (Weight Decay)"
        ],
        a: 0,
        desc: "Dropout, eğitim esnasında her iterasyonda belirlenen oranda (örn: %50) nöronu geçici olarak kapatır. Bu sayede nöronların birbirine bağımlı ezber yapması engellenir."
    },
    {
        q: "Aşağıdakilerden hangisi derin sinir ağlarında gradyanların aşırı büyümesini (Exploding Gradients) engellemek için kullanılan basit bir yöntemdir?",
        options: [
            "Gradyan Kırpma (Gradient Clipping)",
            "Daha yüksek öğrenme oranı kullanmak",
            "Aktivasyon fonksiyonlarını kaldırmak",
            "Gizli katman sayısını artırmak"
        ],
        a: 0,
        desc: "Gradient clipping, gradyanların normu belirli bir eşik değeri aşarsa gradyanı o eşiğe sabitleyerek ağın kararsız olmasını engeller."
    },
    {
        q: "CNN katmanlarında filtre adımlarının kayma miktarına ne ad verilir?",
        options: [
            "Adım Boyu (Stride)",
            "Dolgulama (Padding)",
            "Havuzlama",
            "Kanal Genişliği"
        ],
        a: 0,
        desc: "Stride, filtrenin görüntü üzerinde yatay ve dikey yönde kaçar piksel atlayarak kaydırılacağını belirler. Stride arttıkça çıktı boyutu küçülür."
    },
    {
        q: "Derin öğrenmede, girdi görüntüsünün kenarlarındaki piksellerin evrişim sonrasında bilgi kaybına uğramasını engellemek için görüntünün dışına sıfırlar ekleme işlemine ne denir?",
        options: [
            "Dolgulama (Padding)",
            "Kırpma (Clipping)",
            "Normalizasyon",
            "Pooling"
        ],
        a: 0,
        desc: "Padding (özellikle Same Padding), girdinin kenarlarına ekstra pikseller (genelde 0) ekleyerek evrişim katmanı sonrasında mekansal boyutun korunmasını sağlar."
    },
    {
        q: "Sıralı veya zamana bağlı verileri (metin, ses, zaman serileri gibi) işlemek için geçmiş bilgileri kendi döngüsel hücrelerinde tutabilen derin öğrenme mimarisi hangisidir?",
        options: [
            "Yinelemeli Sinir Ağları (Recurrent Neural Networks - RNN / LSTM)",
            "Düz MLP Ağı",
            "Evrişimli Sinir Ağları (CNN)",
            "Autoencoder (Otokodlayıcı)"
        ],
        a: 0,
        desc: "RNN'ler gizli durumlarında (hidden state) geçmiş zamandaki bilgileri saklayarak sıralı verileri işleyebilir. Uzun vadeli bağımlılıklar için LSTM'ler tercih edilir."
    },
    {
        q: "Derin öğrenme modellerini eğitirken tüm veri setini belleğe yüklemek yerine veriyi küçük parçalara bölerek eğitmeye ne ad verilir ve bu parçaların boyutuna ne denir?",
        options: [
            "Batch / Yığın Boyutu (Batch Size)",
            "Epoch Sayısı",
            "Öğrenme Katsayısı",
            "Katman Genişliği"
        ],
        a: 0,
        desc: "Büyük veri setleri doğrudan belleğe sığmaz. Veri setinin mini-batch'lere (örn: 32, 64) bölünmesi hem bellek tasarrufu sağlar hem de gradyan güncellemelerini gürültülü yaparak yerel minimumlardan kaçmaya yardımcı olur."
    },
    {
        q: "CNN mimarisinin en sonunda yer alan ve 2 boyutlu özellik haritalarını tek boyutlu vektöre dönüştürdükten sonra standart bir sinir ağına bağlayan katman hangisidir?",
        options: [
            "Düzleştirme ve Tam Bağlantılı Katman (Flatten & Fully Connected - Dense Layer)",
            "Evrişim Katmanı",
            "Max Pooling",
            "Giriş Katmanı"
        ],
        a: 0,
        desc: "Flatten katmanı, 2D öznitelik haritasını uç uca ekleyerek 1D vektör yapar. Bu vektör, nihai sınıf tahminlerini üreten Fully Connected (Dense) katmana giriş olarak verilir."
    },
    {
        q: "Aşağıdakilerden hangisi gradyan inişini (Gradient Descent) hızlandırmak ve yerel minimumlardan momentum kullanarak kaçmak için derin öğrenmede en sık kullanılan optimizasyon algoritmasıdır?",
        options: [
            "Adam (Adaptive Moment Estimation)",
            "Basit Perseptron Kuralı",
            "Alfa Arama",
            "Hill Climbing"
        ],
        a: 0,
        desc: "Adam optimizasyon algoritması, RMSprop ve Momentum yöntemlerini birleştirir. Her parametre için adaptif öğrenme oranları tutarak gradyan inişini son derece hızlı ve kararlı hale getirir."
    }
];
