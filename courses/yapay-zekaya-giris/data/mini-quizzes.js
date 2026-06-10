/**
 * Devosuit Yapay Zekaya Giriş — Konu Sonu Mini Test Verileri
 */
window.miniQuizzes = {
    // 1. Yapay Zekaya Giriş
    'yapay-zekaya-giris': [
        {
            q: "Turing Testi'ni ilk olarak ortaya atan bilim insanı kimdir?",
            options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Claude Shannon"],
            a: 0,
            desc: "Alan Turing, 1950 yılında yayınladığı 'Computing Machinery and Intelligence' makalesinde 'Taklit Oyunu' (Imitation Game) adıyla bu testi önermiştir."
        },
        {
            q: "Yapay zeka (Artificial Intelligence) terimi ilk kez hangi konferansta resmi olarak kullanılmıştır?",
            options: ["Dartmouth Konferansı (1956)", "Turing Sempozyumu (1950)", "MIT Çalıştayı (1962)", "Stanford YZ Zirvesi (1965)"],
            a: 0,
            desc: "John McCarthy tarafından organize edilen 1956 Dartmouth Yaz Araştırma Projesi, yapay zeka alanının doğuşu olarak kabul edilir."
        },
        {
            q: "Aşağıdakilerden hangisi bir ajanın çevre ile etkileşimini sağlayan girdi alıcı birimdir?",
            options: ["Aktüatör (Eyleyici)", "Sensör (Algılayıcı)", "Efektör", "Öğrenme Elemanı"],
            a: 1,
            desc: "Sensörler (kameralar, sonar, kızılötesi, klavye girdisi vb.) ajanın çevresinden veri almasını sağlayan alıcı birimlerdir."
        },
        {
            q: "Bir satranç oyununda rakibin yapabileceği hamleleri bilmekle beraber tahtayı tam olarak görebiliyorsak bu ortam nasıl tanımlanır?",
            options: ["Kısmi Gözlemlenebilir", "Tam Gözlemlenebilir", "Stokastik", "Epizodik"],
            a: 1,
            desc: "Ajan ortamı tam olarak algılayabiliyorsa bu ortam Tam Gözlemlenebilir (Fully Observable) olarak adlandırılır."
        },
        {
            q: "Aşağıdaki ajan türlerinden hangisi kendi eylemlerinin sonuçlarını dahili bir modelde tutarak çevrenin görünmeyen kısımlarını tahmin edebilir?",
            options: ["Basit Refleks Ajanı", "Model Tabanlı Refleks Ajanı", "Hedef Tabanlı Ajan", "Fayda Tabanlı Ajan"],
            a: 1,
            desc: "Model tabanlı refleks ajanları (Model-based reflex agents), çevrenin doğrudan gözlemlenemeyen durumlarını dahili bir dünya modeli (state) tutarak takip eder."
        }
    ],

    // 2. Arama Algoritmaları
    'arama-algoritmalari': [
        {
            q: "Genişlik Öncelikli Arama (BFS) düğüm genişletme yapısı gereği hangi veri yapısını kullanır?",
            options: ["Yığın (Stack - LIFO)", "Kuyruk (Queue - FIFO)", "Öncelikli Kuyruk (g(n) + h(n))", "İkili Arama Ağacı"],
            a: 1,
            desc: "BFS, seviye seviye genişleme yaptığı için FIFO (Kuyruk) yapısı kullanır. En sığ düğümler önce genişletilir."
        },
        {
            q: "A* aramasında h(n) sezgisinin optimal sonucu garantilemesi için sahip olması gereken temel özellik hangisidir?",
            options: ["Kabul Edilebilirlik (Admissibility)", "Doğrusallık", "Negatiflik", "Stokastiklik"],
            a: 0,
            desc: "Kabul edilebilir (admissible) bir sezgi, hedefe olan gerçek maliyeti hiçbir zaman aşırı tahmin etmez (h(n) <= h*(n)). Bu A*'ı optimal yapar."
        },
        {
            q: "Minimax algoritmasında Alfa-Beta budaması yapıldığında, Alfa değeri hangi oyuncunun garantilediği en iyi skordur?",
            options: ["MAX oyuncusu", "MIN oyuncusu", "Rastgele oyuncu", "Hakem"],
            a: 0,
            desc: "Alfa (alpha), MAX oyuncusunun arama ağacında o ana kadar garantilediği en yüksek (en iyi) değerdir. Beta ise MIN oyuncusunun en düşük değeridir."
        },
        {
            q: "Bir hedefe olan mesafeyi düz kuş uçuşu (Euclidean distance) olarak tahmin eden sezgi fonksiyonu h(n) kabul edilebilir midir?",
            options: ["Evet, çünkü kuş uçuşu mesafe iki nokta arasındaki en kısa fiziksel yoldur ve gerçek maliyeti asla aşamaz.", "Hayır, engelleri hesaba katmadığı için aşabilir.", "Sadece labirentlerde kabul edilebilirdir.", "Sadece negatif maliyetlerde kabul edilebilirdir."],
            a: 0,
            desc: "Kuş uçuşu mesafe en kısa teorik yol olduğu için gerçek fiziksel yoldan her zaman küçük veya eşittir (h(n) <= h*(n)). Dolayısıyla kabul edilebilirdir."
        },
        {
            q: "En derin dalı sonuna kadar tarayan ve hedefe ulaşamadığında geri dönen (backtracking) algoritma hangisidir?",
            options: ["BFS", "DFS", "UCS", "A*"],
            a: 1,
            desc: "Derinlik Öncelikli Arama (DFS - Depth-First Search), en derin yaprağa kadar iner ve çıkmaza girdiğinde geri dönerek yan dalları tarar."
        }
    ],

    // 3. Makine Öğrenmesi
    'makine-ogrenmesi': [
        {
            q: "K-En Yakın Komşu (KNN) algoritması hangi makine öğrenmesi sınıfına girer?",
            options: ["Gözetimli Öğrenme (Sınıflandırma / Regresyon)", "Gözetimsiz Öğrenme (Kümeleme)", "Pekiştirmeli Öğrenme", "Boyut İndirgeme"],
            a: 0,
            desc: "KNN, eğitim verisindeki etiketleri temel alarak yeni gelen veri noktasını en yakın komşularının çoğunluk oylamasına göre sınıflandırır. Gözetimli sınıflandırmadır."
        },
        {
            q: "Aşırı Öğrenme (Overfitting) durumundaki bir model için hangisi söylenebilir?",
            options: ["Eğitim setinde yüksek hata, test setinde düşük hata verir.", "Hem eğitim hem test setinde çok yüksek hata verir.", "Eğitim setinde sıfıra yakın hata verirken, test (yeni gelen) verilerinde çok yüksek hata verir.", "Model çok basittir ve veriyi temsil edemiyordur."],
            a: 2,
            desc: "Overfitting, modelin eğitim verisindeki gürültüleri ezberlemesi sonucu oluşur. Eğitim başarısı çok yüksek olmasına rağmen yeni verilerde başarısız olur."
        },
        {
            q: "Lasso Regresyonu (L1 Regularization) katsayıları nasıl cezalandırır?",
            options: ["Katsayıların karelerini ceza olarak ekler.", "Katsayıların mutlak değerlerini ceza olarak ekler ve bazı katsayıları tam olarak sıfır yaparak özellik seçimi sağlar.", "Katsayıları rastgele değiştirir.", "Katsayıları sabit bir değerle çarpar."],
            a: 1,
            desc: "L1 (Lasso) katsayıların mutlak değerler toplamını ceza terimi olarak ekler. Matematiksel yapısı gereği önemsiz özelliklerin katsayısını tam 0 yapar."
        },
        {
            q: "Karar ağaçlarında bölünme kriteri olarak kullanılan Gini safsızlığı (Gini Impurity) veya Entropi neyi ölçer?",
            options: ["Verinin boyut sayısını", "Sınıf dağılımının düzensizliğini / belirsizliğini (safsızlığını)", "Eğitim süresini", "Ağacın yaprak sayısını"],
            a: 1,
            desc: "Gini ve Entropi, bir düğümdeki sınıfların karışıklık derecesini (safsızlığını) ölçer. Amaç bu değerleri sıfırlayarak pürüzsüz yapraklar elde etmektir."
        },
        {
            q: "Lojistik Regresyon girdileri olasılığa dönüştürmek için hangi fonksiyonu kullanır?",
            options: ["ReLU", "Sigmoid (Lojistik Fonksiyon)", "Tanh", "Linear"],
            a: 1,
            desc: "Sigmoid fonksiyonu f(z) = 1 / (1 + e^-z) formülüyle çıktı değerini [0, 1] arasına sıkıştırarak olasılık çıktısı üretir."
        }
    ],

    // 4. Yapay Sinir Ağları
    'ysa': [
        {
            q: "Doğrusal ayrıştırılamayan (non-lineer) XOR probleminin tek katmanlı Perseptron ile çözülemeyeceğini kanıtlayarak YSA alanında duraklamaya yol açan kitap kimlere aittir?",
            options: ["Marvin Minsky & Seymour Papert (1969)", "Alan Turing & John von Neumann", "McCulloch & Pitts", "Rumelhart & McClelland"],
            a: 0,
            desc: "1969 yılında yayınladıkları 'Perceptrons' kitabıyla Minsky ve Papert tek katmanlı ağların sınırlarını göstererek YSA çalışmalarını uzun yıllar yavaşlatmıştır."
        },
        {
            q: "Yapay Sinir Ağlarında gradyan inişi yaparken hata türevlerini geriye doğru katmanlar arasında ileten yöntemin adı nedir?",
            options: ["İleri Besleme (Feedforward)", "Geri Yayılım (Backpropagation)", "Aktivasyon Sıkıştırma", "Bootstrap Aggregating"],
            a: 1,
            desc: "Backpropagation, türev zincir kuralını (chain rule) kullanarak çıktı hatasının gradyanını geriye doğru giriş katmanına kadar iletir."
        },
        {
            q: "Aşağıdakilerden hangisi YSA'da negatif değerler için 0, pozitif değerler için girdiyi aynen veren popüler aktivasyon fonksiyonudur?",
            options: ["Sigmoid", "Tanh", "ReLU", "Softmax"],
            a: 2,
            desc: "ReLU (Rectified Linear Unit), f(x) = max(0, x) fonksiyonudur. Gradyan sönümlenmesini azalttığı için derin öğrenmede varsayılan gizli katman fonksiyonudur."
        },
        {
            q: "YSA'da 'Bias' (sapma) parametresinin temel görevi nedir?",
            options: ["Ağın katman sayısını optimize etmek", "Karar sınırını orijinden (0,0) bağımsız olarak sağa/sola kaydırabilmek", "Hata oranını doğrudan sıfıra eşitlemek", "Veriyi normalize etmek"],
            a: 1,
            desc: "Bias, girdi sıfır olduğunda nöronun eşik değerini aşmasını kontrol eder ve karar çizgisinin düzlemdeki yerini ayarlar."
        },
        {
            q: "Gradyan inişinde (Gradient Descent) ağırlık güncellemelerinin hızını ve yön adımlarını belirleyen katsayı hangisidir?",
            options: ["Epoch Sayısı", "Öğrenme Oranı (Learning Rate)", "Bias Değeri", "Mini-batch Boyutu"],
            a: 1,
            desc: "Öğrenme Oranı (learning rate, eta/alpha), gradyanın ne kadar büyük bir adımla çarpılarak ağırlıklardan çıkarılacağını kontrol eder."
        }
    ],

    // 5. Bulanık Mantık & Genetik Algoritmalar
    'bulanik-ga': [
        {
            q: "Bulanık mantık (Fuzzy Logic) kavramını ilk olarak 1965 yılında ortaya atan bilim insanı kimdir?",
            options: ["Lotfi A. Zadeh", "John Holland", "Mamdani", "Sugeno"],
            a: 0,
            desc: "Azerbaycan kökenli bilgisayar bilimcisi Lotfi A. Zadeh, 1965 yılında 'Fuzzy Sets' makalesiyle bulanık küme kuramını geliştirmiştir."
        },
        {
            q: "Bulanık kontrolörlerde, kural tabanından elde edilen bulanık sonuç alanının durulanmasında en sık kullanılan yöntem hangisidir?",
            options: ["Maksimumların En Küçüğü (LOM)", "Ağırlık Merkezi / Ağırlıklı Ortalama (Centroid)", "Bulanık Sınır Değerleme", "Alfa Kesim Yöntemi"],
            a: 1,
            desc: "Alan Ağırlık Merkezi (Centroid of Area) yöntemi, elde edilen şeklin ağırlık merkezini hesaplayarak en dengeli ve kararlı net çıktıyı üretir."
        },
        {
            q: "Genetik Algoritmalarda popülasyondaki kromozomların çözüme olan yakınlığını (kalitesini) ölçen fonksiyon hangisidir?",
            options: ["Kayıp Fonksiyonu (Loss Function)", "Uygunluk Fonksiyonu (Fitness Function)", "Aktivasyon Fonksiyonu", "Sezgi Fonksiyonu"],
            a: 1,
            desc: "Fitness (uygunluk) fonksiyonu, aday çözümün probleme ne derece uyduğunu temsil eden bir skor üretir."
        },
        {
            q: "Genetik Algoritmalarda yerel optimumlardan kaçarak yepyeni arama alanlarını keşfetmek için kromozomun bazı genlerini rastgele değiştiren operatör hangisidir?",
            options: ["Çaprazlama (Crossover)", "Mutasyon (Mutation)", "Seçim (Selection)", "Elitizm"],
            a: 1,
            desc: "Mutasyon, popülasyondaki genetik çeşitliliği canlı tutarak arama uzayında kaybolan veya popülasyonda hiç olmayan gen yapılarını keşfetmeyi sağlar."
        },
        {
            q: "Sugeno bulanık çıkarım sisteminin Mamdani sisteminden temel farkı nedir?",
            options: ["Üyelik fonksiyonları kullanamaz.", "Kural sonuç kısımları bulanık kümeler yerine net doğrusal fonksiyonlar veya sabit sayılardır.", "Bilgisayarlarda çalışması çok yavaştır.", "Doğal dil kuralları içeremez."],
            a: 1,
            desc: "Sugeno (veya Takagi-Sugeno) çıkarımında kural sonuçları sabit bir sayı ya da giriş parametrelerinin lineer denklemidir. Bu durum durulamayı kolaylaştırır."
        }
    ],

    // 6. Derin Öğrenme
    'derin-ogrenme': [
        {
            q: "Görüntü işlemede (CNN) paylaşımlı ağırlıklar kullanarak piksellerin yerel ilişkilerini yakalayan ve öznitelik haritası çıkaran katman hangisidir?",
            options: ["Havuzlama (Pooling) Katmanı", "Evrişim (Convolution) Katmanı", "Düzleştirme (Flatten) Katmanı", "Tam Bağlantılı (Fully Connected) Katman"],
            a: 1,
            desc: "Evrişim (Convolution) katmanı, görüntü üzerinde kaydırılan filtreler ile pikseller arasındaki yerel ilişkileri yakalar ve kenar/doku öznitelikleri çıkarır."
        },
        {
            q: "Evrişimli Sinir Ağlarında Max Pooling katmanı ne işe yarar?",
            options: ["Görüntüye gürültü ekler.", "Görüntünün en-boy boyutunu küçülterek parametre sayısını ve hesaplamayı azaltır, en belirgin öznitelikleri korur.", "Katman sayısını artırır.", "Ağırlıkları günceller."],
            a: 1,
            desc: "Max Pooling, penceredeki maksimum değeri seçerek mekansal çözünürlüğü azaltır (downsampling), parametre sayısını düşürür ve overfitting'i engeller."
        },
        {
            q: "Derin öğrenmede overfitting'i önlemek için her eğitim adımında nöronların belirlenen bir oranda rastgele kapatılması tekniğine ne denir?",
            options: ["Early Stopping", "Batch Normalization", "Dropout", "Weight Decay"],
            a: 2,
            desc: "Dropout (Seyreltme), nöronların birlikte uyum ezberlemesini (co-adaptation) önlemek için eğitim esnasında nöronları rastgele devre dışı bırakır."
        },
        {
            q: "Metin ve ses gibi zamana bağlı sıralı verileri (sequential data) işlemek için önceki kelimeleri/durumları hafızasında tutabilen ağ yapısı hangisidir?",
            options: ["Düz MLP Ağı", "CNN (Convolutional)", "RNN (Recurrent Neural Networks / LSTM)", "Autoencoder"],
            a: 2,
            desc: "Recurrent Neural Networks (RNN) ve LSTM, hücrelerindeki geri besleme döngüleri sayesinde sıralı ve zamana bağlı verileri hafızasında tutarak işleyebilir."
        },
        {
            q: "Derin öğrenmede katsayı güncellemelerini optimize etmek için momentum ve adaptif öğrenme oranını birleştiren popüler optimizasyon algoritması hangisidir?",
            options: ["Adam (Adaptive Moment Estimation)", "Basit SGD", "Perseptron Kuralı", "Hill Climbing"],
            a: 0,
            desc: "Adam optimizer, hız ve kararlılığı bir arada sunarak gradyan inişini optimize eden en yaygın kullanılan derin öğrenme optimizasyon motorudur."
        }
    ]
};
