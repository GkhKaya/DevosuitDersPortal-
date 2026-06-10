/* Devosuit Partial — derin-ogrenme
 * Derin Öğrenme ders notları. derinöğrenme-algoritmalarıııııımmm.pdf içeriği eksiksiz eklenmiştir.
 */
window.__partials = window.__partials || {};
window.__partials['derin-ogrenme'] = `<section id="derin-ogrenme" class="project-section card">
    <div class="section-header">
        <h2>6. Derin Öğrenme Algoritmaları</h2>
        <span class="path-badge"><i class="fas fa-file-pdf"></i> Final Konusu / derinöğrenme-algoritmalarıııııımmm.pdf</span>
    </div>
    <p class="section-desc">Derin Öğrenme, yapay sinir ağlarının çok sayıda katmandan (derin) oluştuğu ve ham veriden (görüntü, ses, metin vb.) öznitelikleri doğrudan hiyerarşik olarak öğrenebildiği modern yapay zekâ alanıdır. Bu bölümde sunumda yer alan 10 temel derin öğrenme modeli, CNN ve LSTM yapıları tüm detayları ve matematiksel kapı formülleriyle açıklanmıştır.</p>

    <!-- PDF Eklentisi -->
    <div class="info-block mb-4" style="background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2);">
        <h3 style="color: #38bdf8;"><i class="fas fa-file-pdf"></i> Sınav Kaynağı (Ders Sunumu)</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Final sınavı için hocanın hazırlamış olduğu Derin Öğrenme ders dokümanını aşağıdan indirebilirsiniz:</p>
        <a href="derinöğrenme-algoritmalarıııııımmm.pdf" class="back-to-dashboard-btn" style="width: auto; display: inline-flex; margin-bottom: 0; background: rgba(2, 132, 199, 0.1); border-color: rgba(2, 132, 199, 0.3); color: #38bdf8;" download>
            <i class="fas fa-download"></i> derinöğrenme-algoritmaları.pdf Dokümanını İndir
        </a>
    </div>

    <!-- 1. 10 DERİN ÖĞRENME MODELİ -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: #38bdf8;"><i class="fas fa-list-ol"></i> 1. Sınav Müfredatındaki 10 Derin Öğrenme Modeli</h3>
        <p class="section-desc">Sunumun 2. sayfasında listelenen ve sınavda sorumlu olunan 10 temel derin öğrenme modeli ve bunların teorik tanımları aşağıda açıklanmıştır:</p>
        
        <table class="analysis-table">
            <thead>
                <tr>
                    <th class="analysis-th" style="width: 30%;">Model Adı</th>
                    <th class="analysis-th">Teorik Yapısı ve Açıklaması</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">1. Evrişimli Sinir Ağları (CNN)</td>
                    <td class="analysis-explain-cell">Özellikle görsel verilerin işlenmesi, sınıflandırılması ve segmantasyonu için tasarlanmış derin öğrenme mimarisidir. Ön işlem gerektirmeden görüntüdeki kenar, doku, şekil gibi özellikleri hiyerarşik olarak otomatik öğrenir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">2. Uzun Kısa Süreli Bellek (LSTM)</td>
                    <td class="analysis-explain-cell">Sıralı ve zamana bağlı (sequential) verilerdeki uzun vadeli bağımlılıkları öğrenmek üzere tasarlanmış özel bir Yinelemeli Sinir Ağı (RNN) mimarisidir. Sahip olduğu unutma, giriş ve çıkış kapıları sayesinde geçmiş bilgiyi saklayabilir veya silebilir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">3. Tekrarlayan Sinir Ağları (RNN)</td>
                    <td class="analysis-explain-cell">Girdilerin yönlendirilmiş döngüler oluşturarak birbirine bağlandığı, zamansal dinamikleri öğrenen ağlardır. $t$ anındaki çıktı, $t-1$ adımındaki geçmiş çıktılarla ilişkilendirilerek sonraki adım ($t+1$) beslenir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">4. Üretken Çekişmeli Ağlar (GAN)</td>
                    <td class="analysis-explain-cell">Eğitim verileriyle eşleşen yeni veri örnekleri üretmek için kullanılan iki bileşenli mimaridir. Sahte veri üreten bir <strong>Üreteç (Generator)</strong> ile verinin gerçek mi sahte mi olduğunu ayırt etmeye çalışan <strong>Ayrımcı (Discriminator)</strong> çekişmeli eğitilir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">5. Radyal Temel Fonksiyon Ağları (RBFN)</td>
                    <td class="analysis-explain-cell">Aktivasyon fonksiyonunda radyal temelli fonksiyonlar (Gauss fonksiyonu) kullanan ileri beslemeli sinir ağlarıdır. Zaman serisi tahmini, regresyon ve sınıflandırmada kullanılır. Gizli katman, merkez nokta ile olan uzaklığı Gauss ile hesaplar; çıkış katmanı ise bunların doğrusal kombinasyonunu alır.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">6. Çok Katmanlı Algılayıcılar (MLP)</td>
                    <td class="analysis-explain-cell">Derin öğrenmenin temeli olan, ileri beslemeli yapay sinir ağlarıdır. Giriş katmanı ile çıkış katmanı arasında bir veya birden fazla gizli katman içerir. Düğümlerde tanh, sigmoid veya ReLU aktivasyon fonksiyonları kullanılarak veri setinden istenen çıktıyı üretmek için eğitilir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">7. Kendi Kendini Organize Eden Haritalar (SOM)</td>
                    <td class="analysis-explain-cell">Denetimsiz (unsupervised) öğrenme ile çalışan, yüksek boyutlu verilerin boyutunu azaltmak ve görselleştirmek için kullanılan ağlardır. En İyi Eşleşen Birim (BMU - Best Matching Unit) adı verilen kazanan düğüm seçimi esasına göre çalışır.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">8. Derin İnanç Ağları (DBN)</td>
                    <td class="analysis-explain-cell">Çok sayıda gizli katmana sahip üretken (generative) modellerdir. Kısıtlı Boltzmann Makinelerinin (RBM) birbirinin üzerine istiflenmesiyle oluşturulur. Aşağıdan yukarıya geçiş yaklaşımıyla öğrenirler, video ve görüntü tanımada etkindirler.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">9. Kısıtlı Boltzmann Makineleri (RBM)</td>
                    <td class="analysis-explain-cell">Görünür katman ve gizli katman olmak üzere iki katmandan oluşan, olasılıksal veri yapılarına sahip denetimsiz ağlardır. Girdilerin ağırlıklarını hesaba katarak boyut küçültme, regresyon, sınıflandırma ve konu modelleme yaparlar. DBN'lerin temel yapı taşıdır.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: #38bdf8;">10. Otomatik Kodlayıcılar (Autoencoders)</td>
                    <td class="analysis-explain-cell">Giriş ve çıkış boyutlarının aynı olduğu, veriyi kopyalamayı amaçlayan denetimsiz ağlardır. Veriyi düşük boyutlu temsil koduna dönüştüren <strong>Kodlayıcı (Encoder)</strong>, ara kod kısmı ve bu koddan veriyi netleştirerek geri üreten <strong>Kod Çözücü (Decoder)</strong> bileşenlerinden oluşur.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 2. EVRİŞİMLİ SİNİR AĞLARI (CNN) DETAYLI ANALİZ -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: #38bdf8;"><i class="fas fa-image"></i> 2. Evrişimli Sinir Ağları (CNN) Derinlemesine Detayları</h3>
        
        <div class="grid grid-2" style="gap: 1.5rem;">
            <div class="info-block">
                <h4>Klasik Yapay Sinir Ağlarının Problemi ve CNN Çözümü</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">Klasik tam bağlı (Fully Connected) ağlar, görselleri işlerken şu temel sorunları yaşarlar:</p>
                <ul class="styled-list" style="font-size: 0.85rem; margin-top: 0.25rem;">
                    <li>Görüntülerdeki her piksel bir girdi olduğundan <strong>çok fazla parametre</strong> üretilir.</li>
                    <li>Bu durum <strong>hesaplama maliyetini</strong> aşırı yükseltir.</li>
                    <li>Görüntüdeki piksellerin konum ilişkisini (<strong>uzamsal bilgiyi</strong>) koruyamaz.</li>
                </ul>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-top: 0.5rem;"><strong>CNN Çözümü:</strong> CNN'ler, görüntülerin <em>Kenar, Doku, Şekil ve Nesne</em> özelliklerini insan müdahalesi olmadan otomatik öğrenebilen, uzamsal özellikleri koruyan mimarilerdir.</p>
            </div>
            <div class="info-block warning-block">
                <h4>CNN Avantaj, Dezavantaj ve Kullanım Alanları</h4>
                <div style="font-size: 0.85rem; line-height: 1.5;">
                    <strong>Avantajları:</strong> Daha az parametre gereksinimi, yüksek doğruluk oranı, uzamsal özelliklerin korunması, otomatik öznitelik çıkarımı.
                    <br><br><strong>Dezavantajları:</strong> Yüksek işlem gücü (GPU) gereksinimi, büyük eğitim verisi ihtiyacı, uzun eğitim süresi, kararların matematiksel açıklamasının zor olması (yorumlanabilirlik düşüklüğü).
                    <br><br><strong>Kullanım Alanları:</strong> Yüz tanıma, nesne tespiti, otonom araçlar (sürüş kontrolü), tıbbi görüntü analizi (MR, kanser tespiti), güvenlik kamera sistemleri, el yazısı tanıma, tarımda hastalık analizi.
                </div>
            </div>
        </div>

        <div class="info-block mt-4" style="background: rgba(0,0,0,0.2);">
            <h4>CNN Katmanları, Veri Akış Sırası ve Çalışma Mantığı</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Bir CNN mimarisi hiyerarşik temsil öğrenimi (Hierarchical representation learning) gerçekleştirir. İlk katmanlar basit kenarları, orta katmanlar göz gibi nesne parçalarını, derin katmanlar ise insan yüzü gibi karmaşık nesneleri öğrenir. Veri akışı ve katmanlar sırasıyla şunlardır:</p>
            
            <ol class="styled-list" style="margin-left: 1.25rem; font-size: 0.85rem; line-height: 1.7;">
                <li><strong>Girdi Katmanı (Input Layer):</strong> Ham görüntünün sisteme alındığı katmandır.</li>
                <li><strong>Evrişim Katmanı (Convolution Layer):</strong> Görüntü üzerinde küçük filtrelerin (kernel) gezdirilmesiyle öznitelik çıkarımı yapılır. Örneğin, dikey kenarları tespit etmek için sunumda verilen 3x3 boyutundaki şu filtre kullanılır:
                    <br><span style="font-family: monospace; display: block; background: rgba(0,0,0,0.4); padding: 0.5rem; width: 120px; border-radius: 4px; margin: 0.25rem 0;">
                    [ 1  0 -1 ]<br>[ 1  0 -1 ]<br>[ 1  0 -1 ]
                    </span>
                    Filtre resim üzerinde kaydırılarak her bölgede çarpma-toplama işlemi yapılır ve çıktı olarak <strong>Özellik Haritası (Feature Map)</strong> oluşturulur.
                </li>
                <li><strong>Aktivasyon Fonksiyonu (ReLU) Katmanı:</strong> Negatif değerleri sıfırlayarak ağa doğrusal olmayan (non-linear) yapı kazandırır ve eğitimi hızlandırır. Formülü:
                    <br><span style="font-family: monospace; color: #38bdf8;">f(x) = max(0, x)</span>
                    <br>Vanishing Gradient (kaybolan gradyan) problemini azaltır.
                </li>
                <li><strong>Havuzlama Katmanı (Pooling Layer):</strong> Özellik haritasının en-boy boyutunu küçülterek parametre sayısını, dolayısıyla hesaplama yükünü azaltır. Aşırı öğrenmeyi (overfitting) engelleyebilir. Türleri:
                    <br>• <em>Max Pooling:</em> Havuzlama penceresindeki en büyük değeri seçer.
                    <br>• <em>Average Pooling:</em> Penceredeki değerlerin ortalamasını alır.
                </li>
                <li><strong>Tam Bağlı Katman (Fully Connected - FC Layer):</strong> CNN'in son kısmıdır. Çıkarılan tüm özellikleri düzleştirerek (Flatten) alır ve sınıflandırma kararı vermek amacıyla kullanır. Tüm nöronlar birbirine bağlıdır ve çıkışta olasılıksal dağılım için genellikle Softmax kullanılır (Kedi, köpek sınıflandırması gibi).</li>
                <li><strong>Çıkış Katmanı:</strong> Ağın nihai tahminini ürettiği katmandır.</li>
            </ol>
        </div>

        <div class="grid grid-2 mt-4" style="gap: 1.5rem;">
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>CNN Nasıl Eğitilir? (Eğitim Süreci)</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">Eğitim süreci şu döngüsel adımlardan oluşur:</p>
                <ul class="styled-list" style="font-size: 0.85rem; margin-top: 0.25rem;">
                    <li>Veri seti hazırlanır ve görüntüler modele girdi olarak verilir.</li>
                    <li>Model ileri besleme ile tahminde bulunur.</li>
                    <li>Tahmin ile gerçek değer karşılaştırılarak hata hesaplanır.</li>
                    <li><strong>Geri Yayılım (Backpropagation)</strong> uygulanarak geriye doğru gradyanlar hesaplanır.</li>
                    <li>Optimizer yardımıyla ağın ağırlıkları güncellenir.</li>
                </ul>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;"><strong>Eğitimde Kullanılan Temel Kavramlar:</strong> Loss Function (Kayıp Fonksiyonu), Gradient Descent (Gradyan İnişi), Epoch (Dönem), Batch Size (Yığın Boyutu), Learning Rate (Öğrenme Oranı).</p>
            </div>
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>Popüler CNN Modelleri</h4>
                <ul class="styled-list" style="font-size: 0.85rem; margin-top: 0.25rem;">
                    <li><strong>LeNet:</strong> İlk başarılı ve tarihi öneme sahip CNN modellerinden biridir.</li>
                    <li><strong>AlexNet:</strong> 2012 yılında derin öğrenme devrimini başlatan öncü mimaridir.</li>
                    <li><strong>VGGNet:</strong> Çok derin ancak oldukça düzenli ve simetrik bir yapıya sahip olan modeldir.</li>
                    <li><strong>ResNet:</strong> Residual (atlama/artık) bağlantılar kullanarak çok derin ağlarda eğitim başarısı sağlar.</li>
                    <li><strong>YOLO (You Only Look Once):</strong> Gerçek zamanlı nesne tespiti yapan, tek bir ileri besleme ile tüm resmi tarayan hızlı modeldir.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 3. UZUN KISA SÜRELİ BELLEK AĞLARI (LSTM) DETAYLI ANALİZ -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: #38bdf8;"><i class="fas fa-history"></i> 3. Uzun Kısa Süreli Bellek Ağları (LSTM) ve Matematiksel Kapı Formülleri</h3>
        <p class="section-desc">LSTM'ler, uzun süreli bağımlılıkları öğrenmek ve bunlara uyum sağlamak üzere geliştirilmiş özel Tekrarlayan Sinir Ağları (RNN) olarak tanımlanır. Klasik RNN'lerdeki kaybolan gradyan problemini çözerek geçmişteki bilgilerin korunmasını veya silinmesini sağlar. LSTM hücresi içerisinde bilgiyi taşıyan ana omurga <strong>Hücre Durumu (Cell State - C_t)</strong> hattıdır. Bu hat üzerindeki bilgi akışı; Giriş (Input), Çıkış (Output) ve Unutma (Forget) kapıları olmak üzere 3 kapıyla kontrol edilir. Bu kapılar hücrenin yazılmasını, okunmasını ve sıfırlanmasını gerçekleştirir.</p>

        <div class="info-block" style="background: rgba(0,0,0,0.2); margin-top: 1rem;">
            <h4>LSTM Kapılarının Matematiksel İfadeleri</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Sunumda yer alan her kapının görevi, matematiksel formülü ve açıklaması şu şekildedir:</p>
            
            <table class="analysis-table">
                <thead>
                    <tr>
                        <th class="analysis-th" style="width: 25%;">Kapı / Durum Adı</th>
                        <th class="analysis-th" style="width: 35%;">Matematiksel Formülü</th>
                        <th class="analysis-th">Çalışma Mantığı ve Görevi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="analysis-code-cell" style="color: #38bdf8;">1. Unutma Kapısı<br>(Forget Gate)</td>
                        <td class="analysis-code-cell" style="font-family: monospace;">f_t = &sigma;(W_f * [h_t-1, x_t] + b_f)</td>
                        <td class="analysis-explain-cell">Önceki gizli durum (h_t-1) ve mevcut girişten (x_t) gelen bilgilerin hangisinin silineceğini belirler. Çıktı 0 ile 1 arasındadır.
                            <br>• <strong>0:</strong> Bilgiyi tamamen unut/sil.
                            <br>• <strong>1:</strong> Bilgiyi tamamen koru.
                            <br>Gereksiz bilgilerin temizlenmesini sağlar.
                        </td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: #38bdf8;">2. Giriş Kapısı<br>(Input Gate)</td>
                        <td class="analysis-code-cell" style="font-family: monospace;">i_t = &sigma;(W_i * [h_t-1, x_t] + b_i)</td>
                        <td class="analysis-explain-cell">Yeni gelen bilgilerin ne kadarının hafızaya (hücre durumuna) ekleneceğini kontrol eder.</td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: #38bdf8;">3. Yeni Aday Hücre Durumu<br>(Candidate Cell State)</td>
                        <td class="analysis-code-cell" style="font-family: monospace;">C~_t = tanh(W_c * [h_t-1, x_t] + b_c)</td>
                        <td class="analysis-explain-cell">Hücreye eklenebilecek yeni aday bilgi vektörünü oluşturur.</td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: #38bdf8; font-weight: bold;">4. Hücre Durumu Güncellemesi<br>(Cell State Update)</td>
                        <td class="analysis-code-cell" style="font-family: monospace; font-weight: bold; color: var(--accent);">C_t = f_t * C_t-1 + i_t * C~_t</td>
                        <td class="analysis-explain-cell">Yeni hücre durumu hesaplanır. Eski bilgiler unutma kapısı (f_t) ile çarpılarak filtrelenir, yeni aday bilgiler (C~_t) giriş kapısı (i_t) ile çarpılarak eklenir. Böylece uzun süreli hafıza korunur.</td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: #38bdf8;">5. Çıkış Kapısı<br>(Output Gate)</td>
                        <td class="analysis-code-cell" style="font-family: monospace;">o_t = &sigma;(W_o * [h_t-1, x_t] + b_o)</td>
                        <td class="analysis-explain-cell">Hücreden dışarıya hangi bilginin aktarılacağını belirler.</td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: #38bdf8;">6. Gizli Durum / Çıktı<br>(Hidden State)</td>
                        <td class="analysis-code-cell" style="font-family: monospace;">h_t = o_t * tanh(C_t)</td>
                        <td class="analysis-explain-cell">Güncellenmiş hücre durumu tanh fonksiyonundan geçirilerek Çıkış Kapısı (o_t) ile çarpılır ve bir sonraki adım için çıktı üretilmiş olur.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="grid grid-2 mt-4" style="gap: 1.5rem;">
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>LSTM Nasıl Çalışır? (Adım Adım)</h4>
                <ol class="styled-list" style="margin-left: 1.25rem; font-size: 0.85rem; line-height: 1.8;">
                    <li>Mevcut giriş verisi ve önceki gizli durum alınır.</li>
                    <li><strong>Forget Gate</strong> gereksiz eski bilgileri siler.</li>
                    <li><strong>Input Gate</strong> yeni eklenmesi gereken bilgileri belirler.</li>
                    <li><strong>Cell State</strong> bu silme ve ekleme işlemlerine göre güncellenir.</li>
                    <li><strong>Output Gate</strong> güncel hücre durumuna göre bir sonraki adıma aktarılacak çıktıyı üretir.</li>
                </ol>
            </div>
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>LSTM Kullanım Alanları, Avantajları ve RNN Karşılaştırması</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;"><strong>Kullanım Alanları:</strong> Doğal Dil İşleme (NLP - metin üretimi, çeviri, duygu analizi), Zaman serileri (hisse senedi tahmini, hava durumu, sensör verileri), Ses işleme (konuşma tanıma, ses sentezi), Sağlık (hasta verisi analizi, EKG sinyalleri).</p>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-top: 0.5rem;"><strong>Karşılaştırma:</strong> LSTM, uzun süreli bağımlılıkları öğrenmede RNN'den çok daha güçlüdür. Ancak RNN'e kıyasla daha karmaşıktır, daha fazla parametreye sahiptir ve eğitimi daha yavaştır.</p>
            </div>
        </div>
    </div>

    <!-- Mini Quiz -->
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> Konu Sonu Hızlı Testi
        </h3>
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_derin-ogrenme" class="mini-quiz-progress-fill"></div>
        </div>
        <div class="mini-quiz-meta">
            <span id="mini_q_num_derin-ogrenme">Soru 1 / 5</span>
            <span id="mini_score_derin-ogrenme">Doğru: 0 | Yanlış: 0</span>
        </div>
        <div id="mini_q_text_derin-ogrenme" class="mini-quiz-text">Soru yükleniyor...</div>
        <ul id="mini_options_derin-ogrenme" class="options-list"></ul>
        <div id="mini_feedback_derin-ogrenme" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_derin-ogrenme"></p>
        </div>
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('derin-ogrenme', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('derin-ogrenme', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>`;
