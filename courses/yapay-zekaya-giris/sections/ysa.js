/* Devosuit Partial — ysa
 * Yapay Sinir Ağları (YSA) ders notları. YZ-YSA.pdf içeriği eksiksiz eklenmiştir.
 */
window.__partials = window.__partials || {};
window.__partials['ysa'] = `<section id="ysa" class="project-section card">
    <div class="section-header">
        <h2>4. Yapay Sinir Ağları (YSA)</h2>
        <span class="path-badge"><i class="fas fa-file-pdf"></i> Final Konusu / YZ-YSA.pdf</span>
    </div>
    <p class="section-desc">İnsan beyninin bilgi işleme yönteminden esinlenerek geliştirilen, paralel ve dağıtık yapıda bilgi işleyen, öğrenme yeteneğine sahip bilgisayar sistemleridir. Bu bölümde YZ-YSA.pdf sunumunda yer alan tüm teorik kavramlar, matematiksel fonksiyonlar ve ağ modelleri detaylandırılmıştır.</p>

    <!-- PDF Eklentisi -->
    <div class="info-block mb-4" style="background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2);">
        <h3 style="color: var(--primary-light);"><i class="fas fa-file-pdf"></i> Sınav Kaynağı (Ders Sunumu)</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Final sınavı için hocanın hazırlamış olduğu Yapay Sinir Ağları ders dokümanını aşağıdan indirebilirsiniz:</p>
        <a href="YZ-YSA.pdf" class="back-to-dashboard-btn" style="width: auto; display: inline-flex; margin-bottom: 0; background: rgba(139, 92, 246, 0.1); border-color: rgba(139, 92, 246, 0.3); color: var(--primary-light);" download>
            <i class="fas fa-download"></i> YZ-YSA.pdf Dokümanını İndir
        </a>
    </div>

    <!-- 1. Temel Tanımlar ve Biyolojik Karşılıklar -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--primary-light);"><i class="fas fa-project-diagram"></i> Biyolojik ve Yapay Sinir Sistemi Karşılaştırması</h3>
        <p class="section-desc">Biyolojik sinir sistemi; merkezinde sürekli olarak bilgiyi alan, yorumlayan ve karar üreten beynin (merkezi sinir ağı) bulunduğu 3 katmanlı bir yapıdır (<strong>Uyarılar -> Alıcı Sinirler [Receptors] -> Merkezi Sinir Ağı [Beyin] -> Tepki Sinirleri [Effectors] -> Tepkiler</strong>). Bu kapalı çevrim bir denetim sistemidir. Biyolojik nöronun bileşenleri ile yapay sinir sistemi elemanları birebir eşleşir:</p>
        <table class="analysis-table" style="margin-top: 1rem;">
            <thead>
                <tr>
                    <th class="analysis-th">Biyolojik Sinir Sistemi</th>
                    <th class="analysis-th">Yapay Sinir Sistemi Karşılığı</th>
                    <th class="analysis-th">İşlevi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Nöron (Sinir Hücresi)</td>
                    <td class="analysis-code-cell" style="color: var(--text-primary);">İşlemci Eleman (Hücre)</td>
                    <td class="analysis-explain-cell">Temel işlem yapan, kararı üreten düğüm noktası.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Dendrit (Dendrites)</td>
                    <td class="analysis-code-cell" style="color: var(--text-primary);">Toplama Fonksiyonu</td>
                    <td class="analysis-explain-cell">Diğer hücrelerden gelen bilgileri hücre gövdesine ileten ağaçsı yollar.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Hücre Gövdesi (Soma / Nucleus)</td>
                    <td class="analysis-code-cell" style="color: var(--text-primary);">Transfer (Aktivasyon) Fonksiyonu</td>
                    <td class="analysis-explain-cell">Net girdiyi işleyerek hücrenin üreteceği çıktıyı belirleyen merkez.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Akson (Axon)</td>
                    <td class="analysis-code-cell" style="color: var(--text-primary);">Yapay Nöron Çıkışı</td>
                    <td class="analysis-explain-cell">Elektriksel darbeler şeklindeki bilgiyi hücre dışına taşıyan uzun yol.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Sinapslar (Synapses)</td>
                    <td class="analysis-code-cell" style="color: var(--text-primary);">Ağırlıklar (Weights)</td>
                    <td class="analysis-explain-cell">Akson-dendrit bağlantı noktaları. Bilginin önemini ve etkisini belirler.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 2. YSA Özellikleri, Avantaj ve Dezavantajları -->
    <div class="grid grid-2 mb-4">
        <div class="info-block">
            <h3><i class="fas fa-star"></i> YSA'nın En Önemli Özellikleri &amp; Avantajları</h3>
            <ul class="styled-list">
                <li><strong>Öğrenme:</strong> Karmaşık yapıdaki bağlantılar ve ağırlıklar önceden ayarlanamaz. YSA, problemden aldığı eğitim örneklerini kullanarak probleme ait özellikleri otomatik öğrenir.</li>
                <li><strong>Doğrusal Olmama (Non-Linearity):</strong> YSA'nın temel işlem elemanları doğrusal değildir. Bu özellik tüm ağa yayılmıştır ve doğrusal olmayan karmaşık problemlerin çözümünde en önemli araçtır.</li>
                <li><strong>Genelleme (Generalization):</strong> YSA, eğitim sürecinde karşılaşmadığı test girdileri için de arzu edilen uygun tepkileri üretebilir (Örn: Bozuk karakterleri doğru tanıma).</li>
                <li><strong>Uyarlanabilirlik (Adaptability):</strong> Belirli bir probleme göre eğitilen ağ, problemdeki değişimlere göre yeniden veya gerçek zamanlı olarak eğitime devam ederek uyarlanabilir.</li>
                <li><strong>Hata Toleransı (Fault Tolerance):</strong> YSA paralel dağıtılmış bir yapıya sahiptir. Bilgi ağdaki bağlantıların tamamına dağıtıldığından, bazı bağlantıların veya hücrelerin bozulması ağın genel çalışmasını etkilemez.</li>
                <li><strong>Donanım ve Hız:</strong> Büyük ölçekli entegre devre (VLSI) teknolojisi ile paralel yapıda gerçekleştirilebilir, bu da gerçek zamanlı sistemlerde yüksek hız sağlar.</li>
            </ul>
        </div>
        <div class="info-block warning-block">
            <h3><i class="fas fa-exclamation-triangle"></i> YSA'nın Dezavantajları &amp; Kullanım Şartları</h3>
            <ul class="exam-list">
                <li class="exam-item"><i class="fas fa-info-circle text-accent"></i> 
                    <div><strong>Ağ Yapısının Belirlenmesi:</strong> Uygun ağ yapısının (katman, hücre sayıları) seçilmesinde kesin kurallar yoktur, yapılar deneme-yanılma yoluyla belirlenir.</div>
                </li>
                <li class="exam-item"><i class="fas fa-info-circle text-accent"></i> 
                    <div><strong>Parametre Belirsizliği:</strong> Öğrenme katsayısı, momentum gibi değerlerin seçimi için kesin kural yoktur. Eğitim süreleri de eğiticinin deneyimine bağlıdır.</div>
                </li>
                <li class="exam-item"><i class="fas fa-info-circle text-accent"></i> 
                    <div><strong>Açıklanamazlık (Kara Kutu):</strong> Ağırlık matrisleri sayı dizilerinden oluştuğu için ağın davranışı matematiksel/sözel kurallarla doğrudan açıklanamaz. Güvenilirliği sorgulanabilir.</div>
                </li>
                <li class="exam-item"><i class="fas fa-check-double text-accent"></i> 
                    <div><strong>YSA Tercih Kriterleri:</strong> Bir problemin YSA ile çözülmesi için; ya sadece YSA ile pratik çözülebilir olması, ya da klasik yöntemlere göre daha kolay, etkin ve hızlı sonuç vermesi gerekir. Matematiksel modeli veya algoritması bulunmayan, gürültülü, kusurlu ve çok boyutlu problemlerde etkindir.</div>
                </li>
            </ul>
        </div>
    </div>

    <!-- 3. Toplama Fonksiyonları -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--primary-light);"><i class="fas fa-plus-square"></i> YSA Toplama Fonksiyonları (Net Girdi Hesaplama)</h3>
        <p class="section-desc">Toplama fonksiyonu, hücreye gelen net girişi hesaplar. Her hücre bağımsız olarak farklı bir toplama fonksiyonuna sahip olabilir. Sunumda yer alan formüller ve işlevleri şunlardır:</p>
        <table class="analysis-table" style="margin-top: 1rem;">
            <thead>
                <tr>
                    <th class="analysis-th">Fonksiyon Adı</th>
                    <th class="analysis-th">Matematiksel Formülü</th>
                    <th class="analysis-th">Açıklama / Mantığı</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Ağırlıklı Toplam (En Yaygın)</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">Net = &Sigma; (Xi * Wi)</td>
                    <td class="analysis-explain-cell">Giriş değerleri ile bunlara ait ağırlık değerleri çarpılır ve hepsi toplanır. En yaygın kullanılan yöntemdir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Çarpım</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">Net = &Pi; (Xi * Wi)</td>
                    <td class="analysis-explain-cell">Ağırlıklı girişlerin tamamı birbiriyle çarpılarak net girdi bulunur.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Maksimum</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">Net = Max(Xi * Wi)</td>
                    <td class="analysis-explain-cell">Ağırlıklarla çarpılan girdilerden en büyüğü hücrenin net girdisi olarak kabul edilir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Minimum</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">Net = Min(Xi * Wi)</td>
                    <td class="analysis-explain-cell">Ağırlıklı girdilerden en küçüğü hücrenin net girdisi seçilir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Çoğunluk</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">Net = &Sigma; sgn(Xi * Wi)</td>
                    <td class="analysis-explain-cell">Girdiler içinden pozitif ve negatif ağırlıklı olanların sayısal çoğunluğuna bakılarak net girdi atanır.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Kümilatif Toplam</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">Net = Net(eski) + &Sigma; sgn(Xi * Wi)</td>
                    <td class="analysis-explain-cell">Ağa yeni gelen ağırlıklı bilgiler, hücrenin bir önceki adımda sahip olduğu eski net girdi değerine eklenir.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 4. Aktivasyon Fonksiyonları -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--primary-light);"><i class="fas fa-bezier-curve"></i> YSA Aktivasyon (Etkinlik) Fonksiyonları</h3>
        <p class="section-desc">Aktivasyon fonksiyonu, toplama fonksiyonundan gelen net girdiyi işleyerek hücre çıktısını belirler. Genellikle doğrusal olmayan fonksiyonlar tercih edilir.</p>
        <table class="analysis-table" style="margin-top: 1rem;">
            <thead>
                <tr>
                    <th class="analysis-th">Fonksiyon Adı</th>
                    <th class="analysis-th">Matematiksel İfadesi</th>
                    <th class="analysis-th">Çıktı Aralığı &amp; Özelliği</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Doğrusal (Linear)</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">f(Net) = Net</td>
                    <td class="analysis-explain-cell">Girdi olduğu gibi çıktıya aktarılır. Genellikle çıkış katmanlarında veya basit doğrusal işlemlerde kullanılır.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Basamak / Eşik (Step)</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">f(Net) = 1 (Net > &theta;); 0 (Net &le; &theta;)</td>
                    <td class="analysis-explain-cell">Çıktı sadece 0 veya 1 olur. Girdi belirlenen eşik değerinin altındaysa 0, üstündeyse 1 çıktısı üretilir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Doyumlu Doğrusal (Ramp)</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">f(Net) = 1 (Net>1); Net (-1<Net<1); -1 (Net&le;-1)</td>
                    <td class="analysis-explain-cell">Girdiler -1 ile 1 arasında doğrusal aktarılır, bu sınırların dışında ise -1 veya 1'e doyurulur (sabitlenir).</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Sinüs (Sine)</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">f(Net) = Sin(Net)</td>
                    <td class="analysis-explain-cell">[-1, 1] aralığında periyodik çıktı üretir. Düğüm değerleri sinüs dağılımı gösterdiğinde kullanılır.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Hiperbolik Tanjant (Tanh)</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">f(Net) = (e^Net - e^-Net) / (e^Net + e^-Net)</td>
                    <td class="analysis-explain-cell">[-1, 1] aralığında simetrik çıktı üretir. Gizli katmanlarda öğrenmeyi hızlandırmak için tercih edilir.</td>
                </tr>
                <tr>
                    <td class="analysis-code-cell" style="color: var(--primary-light);">Sigmoid (Lojistik)</td>
                    <td class="analysis-code-cell" style="font-family: monospace;">f(Net) = 1 / (1 + e^(-&beta; * Net))</td>
                    <td class="analysis-explain-cell">(0, 1] aralığında sürekli türevlenebilir çıktı verir. Olasılıksal sınıflandırma problemleri için standarttır.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- 5. Sunumdaki Matematiksel Hesaplama Örneği -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--primary-light);"><i class="fas fa-calculator"></i> Sunumda Yer Alan Sayısal Hesaplama Örneği</h3>
        <p class="section-desc">Sunumun 34. sayfasında yer alan tek bir yapay hücrenin net girdisini ve sigmoid çıkışını hesaplayan sayısal örnek adımları:</p>
        <div class="grid grid-2" style="margin-top: 1rem; gap: 1.5rem;">
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>Verilen Parametreler</h4>
                <ul style="list-style: none; margin-top: 0.5rem; line-height: 1.8;">
                    <li><strong>Girdiler (X):</strong> x1 = 0.5, x2 = 0.6, x3 = 0.2, x4 = 0.7</li>
                    <li><strong>Ağırlıklar (W):</strong> w1 = -0.2, w2 = 0.6, w3 = 0.2, w4 = -0.1</li>
                    <li><strong>Aktivasyon Fonksiyonu:</strong> Standart Sigmoid (&beta; = 1)</li>
                </ul>
            </div>
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>Adım Adım Hesaplama</h4>
                <ol style="margin-left: 1.25rem; margin-top: 0.5rem; line-height: 1.8;">
                    <li><strong>Toplam Fonksiyonu (Net Girdi):</strong>
                        <br><span style="font-family: monospace; color: var(--primary-light);">Net = &Sigma; (Xi * Wi)</span>
                        <br><span style="font-family: monospace;">Net = (0.5 * -0.2) + (0.6 * 0.6) + (0.2 * 0.2) + (0.7 * -0.1)</span>
                        <br><span style="font-family: monospace;">Net = -0.10 + 0.36 + 0.04 - 0.07 = <strong>0.23</strong></span>
                    </li>
                    <li><strong>Aktivasyon Fonksiyonu Çıktısı (f(Net)):</strong>
                        <br><span style="font-family: monospace; color: var(--primary-light);">f(Net) = 1 / (1 + e^-0.23)</span>
                        <br><span style="font-family: monospace;">f(Net) = 1 / (1 + 0.7945) = 1 / 1.7945 &asymp; <strong>0.56</strong></span>
                    </li>
                </ol>
            </div>
        </div>
    </div>

    <!-- 6. Ağ Yapıları ve YSA Modelleri -->
    <div class="grid grid-2 mb-4">
        <div class="info-block">
            <h3><i class="fas fa-network-wired"></i> Ağ Bağlantı Yapıları (Topolojiler)</h3>
            <ul class="styled-list">
                <li><strong>Girdi Katmanı (Input Layer):</strong> Dış dünyadan gelen bilgileri doğrudan alır ve hiçbir değişikliğe uğratmadan gizli katmana iletir. Bu katmanda işlem yapılmaz.</li>
                <li><strong>Ara / Gizli Katman (Hidden Layer):</strong> Girdi katmanından gelen bilgileri işleyerek çıktı katmanına iletir. Ağda birden fazla gizli katman bulunabilir.</li>
                <li><strong>Çıktı Katmanı (Output Layer):</strong> Ara katmandan gelen bilgileri işleyerek ağın nihai kararını dış dünyaya veya diğer sistemlere iletir.</li>
                <li><strong>İleri Beslemeli Ağlar (Feedforward):</strong> İşlem girdiden çıktıya doğru tek yönde ilerler. Hücreler arasında geriye dönük bağlantı veya gecikme (delay) yoktur. Tek katmanlı ve çok katmanlı olarak ayrılırlar.</li>
                <li><strong>Geri Beslemeli Ağlar (Feedback / Recurrent):</strong> Bir katmanın çıkışı, kendisinden önceki veya kendi katmanındaki hücrelere girdi olarak geri bağlanır. Yapısında <strong>gecikme operatörleri (Z^-1)</strong> yer alır. Zamansal dinamikleri öğrenmekte etkilidir (Tam geri beslemeli ve kısmi geri beslemeli - Elman, Jordan).</li>
            </ul>
        </div>
        <div class="info-block warning-block">
            <h3><i class="fas fa-list-ul"></i> Sunumdaki Tüm YSA Modelleri Listesi</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">YSA modelleri bağlantı şekillerine, öğrenme kurallarına ve aktivasyon fonksiyonlarına göre ayrılır. Sınavda sorulabilecek modeller:</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.85rem; font-family: monospace;">
                <div>• Algılayıcılar (Perceptron)</div>
                <div>• Çok Katmanlı Algılayıcılar</div>
                <div>• Lineer Vektör Quantization (LVQ)</div>
                <div>• Kendi Kendini Organize Eden (SOM)</div>
                <div>• Adaptive Rezonans Teorisi (ART)</div>
                <div>• Hopfield Ağları</div>
                <div>• CounterPropagation Ağları</div>
                <div>• Neocognitron Ağları</div>
                <div>• Boltzmann Makineleri</div>
                <div>• Probabilistic (Olasılık) Ağları</div>
                <div>• Elman Ağları (Kısmi geri beslemeli)</div>
                <div>• Jordan Ağları (Kısmi geri beslemeli)</div>
                <div>• Radyal Temelli Ağlar (RBN)</div>
                <div>• Kohonen Ağları</div>
            </div>
        </div>
    </div>

    <!-- 7. Eğitme ve Öğrenme Stratejileri -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--primary-light);"><i class="fas fa-book-reader"></i> Ağın Eğitilmesi ve Öğrenme Stratejileri</h3>
        <p class="section-desc">YSA'da eğitim, hücre bağlantılarının ağırlık değerlerinin belirlenmesi işlemidir. Başlangıçta ağırlıklar rastgele alınır. Örneklerin %80'i eğitim seti, %20'si test seti olarak ayrılır. Sunumda yer alan tüm öğrenme stratejileri aşağıda detaylandırılmıştır:</p>
        <div class="grid grid-2" style="margin-top: 1rem;">
            <div class="info-block">
                <h4>1. Danışmanlı (Supervised) Öğrenme</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-top: 0.5rem;">Eğitim sırasında sisteme bir girdi ve hedeflenen çıktı vektörü çiftler halinde verilir. Ağın ürettiği çıktı ile hedef çıktı karşılaştırılarak hata sinyali elde edilir ve ağırlıklar bu hataya göre güncellenir (Örn: Widrow-Hoff Delta Kuralı, Geriye Yayılım [Backpropagation]).
                <br><strong>Çağrışımlı Bellek (Associative Memory):</strong> Girdi ve çıktı vektörleri tamamen aynı ise <em>Öz Çağrışımlı (Autoassociative)</em>, farklı ise <em>Karşıt Çağrışımlı (Heteroassociative)</em> bellek olarak adlandırılır.</p>
            </div>
            <div class="info-block">
                <h4>2. Danışmansız (Unsupervised) Öğrenme</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-top: 0.5rem;">Sisteme sadece girdi vektörleri verilir, hedef çıktılar belirtilmez. Ağ, girdilerin kendi içindeki benzerlik ve örüntülerini analiz ederek veriyi gruplar (Örn: Kohonen SOM, Grossberg ART).</p>
            </div>
        </div>
        <div class="grid grid-2" style="margin-top: 1rem;">
            <div class="info-block">
                <h4>3. Takviyeli (Reinforcement) Öğrenme</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-top: 0.5rem;">Gözetimli öğrenmeye yakındır ancak sisteme hedef çıktı verilmez. Bunun yerine, üretilen çıktının kalitesini gösteren bir takviye/ödül işareti (reinforcement signal) verilir. Ağırlıklar deneme-yanılma esasına göre güncellenir (Örn: Boltzmann kuralı, Genetik Algoritmalar).</p>
            </div>
            <div class="info-block">
                <h4>4. Karma, On-line ve Off-line Öğrenme</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-top: 0.5rem;"><strong>Karma:</strong> Birden fazla stratejinin birlikte kullanılmasıdır (Örn: RBN, PNN).
                <br><strong>Çevrimiçi (On-line):</strong> Sistem gerçek zamanda çalışırken bir yandan da öğrenmeye devam eder (Örn: ART, Kohonen).
                <br><strong>Çevrimdışı (Off-line):</strong> Sistem eğitildikten sonra gerçek uygulamaya alınır ve uygulama sırasında ağırlıklar güncellenmez. Yeni bilgi gerektiğinde sistem devreden çıkarılıp yeniden eğitilir.</p>
            </div>
        </div>
    </div>

    <!-- Mini Quiz -->
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> Konu Sonu Hızlı Testi
        </h3>
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_ysa" class="mini-quiz-progress-fill"></div>
        </div>
        <div class="mini-quiz-meta">
            <span id="mini_q_num_ysa">Soru 1 / 5</span>
            <span id="mini_score_ysa">Doğru: 0 | Yanlış: 0</span>
        </div>
        <div id="mini_q_text_ysa" class="mini-quiz-text">Soru yükleniyor...</div>
        <ul id="mini_options_ysa" class="options-list"></ul>
        <div id="mini_feedback_ysa" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_ysa"></p>
        </div>
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('ysa', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('ysa', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>`;
