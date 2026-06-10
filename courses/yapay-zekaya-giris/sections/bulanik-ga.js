/* Devosuit Partial — bulanik-ga
 * Bulanık Mantık ve Genetik Algoritmalar ders notları. bulanık-GA.pdf içeriği eksiksiz eklenmiştir.
 */
window.__partials = window.__partials || {};
window.__partials['bulanik-ga'] = `<section id="bulanik-ga" class="project-section card">
    <div class="section-header">
        <h2>5. Bulanık Mantık &amp; Genetik Algoritmalar</h2>
        <span class="path-badge"><i class="fas fa-file-pdf"></i> Final Konusu / bulanık-GA.pdf</span>
    </div>
    <p class="section-desc">Bu bölümde, bulanık-GA.pdf sunumundaki yapay zekâ teknikleri olan Uzman Sistemler (US), Zeki Etmenler (Intelligent Agents), Genetik Algoritmalar (GA), Bulanık Mantık (BM) ve Hibrid Kontrol Yapıları teorik temelleriyle, akış diyagramlarıyla ve tüm alt bileşenleriyle eksiksiz olarak detaylandırılmıştır.</p>

    <!-- PDF Eklentisi -->
    <div class="info-block mb-4" style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2);">
        <h3 style="color: var(--accent);"><i class="fas fa-file-pdf"></i> Sınav Kaynağı (Ders Sunumu)</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Final sınavı için hocanın hazırlamış olduğu Bulanık Mantık ve Genetik Algoritmalar ders dokümanını aşağıdan indirebilirsiniz:</p>
        <a href="bulanık-GA.pdf" class="back-to-dashboard-btn" style="width: auto; display: inline-flex; margin-bottom: 0; background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); color: var(--accent);" download>
            <i class="fas fa-download"></i> bulanık-GA.pdf Dokümanını İndir
        </a>
    </div>

    <!-- 1. UZMAN SİSTEMLER (US) -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--accent);"><i class="fas fa-brain"></i> 1. Uzman Sistemler (US)</h3>
        <p class="section-desc">Uzman sistemler, belirli bir uzmanlık alanında insan uzmanların görüşlerine veya tecrübelerine dayandırılarak oluşturulan bilgisayar sistemleridir. İnsanın karar verme sürecindeki neden-sonuç ilişkisine bağlı kalarak sonuca varması gibi mantıksal işlemler gerçekleştirir. Kural tabanlı sistemler (Rule-Based Systems) olarak nitelendirilebilir.</p>
        
        <div class="grid grid-2" style="gap: 1.5rem; margin-top: 1rem;">
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>Uzman Sistemin 4 Temel Parçası</h4>
                <ul class="styled-list" style="margin-top: 0.5rem;">
                    <li><strong>Kural Tabanı (Rules Base):</strong> Sistemin sahip olduğu tüm kuralların (IF-THEN yapısı) tutulduğu kısımdır.</li>
                    <li><strong>Bilgi Tabanı (Knowledge Base):</strong> Probleme ve alana ait doğrulanmış bilgilerin saklandığı yerdir.</li>
                    <li><strong>Çıkarım Motoru (Inference Engine):</strong> Eldeki kuralları ve bilgileri kullanarak sonuca ulaşan karar mekanizmasıdır. Kuralları <code>IF ... THEN ... ELSE ...</code> şeklinde işler. İki farklı arama stratejisi kullanır:
                        <br>• <em>İleri doğru zincirleme (Forward Chaining)</em>
                        <br>• <em>Geri doğru zincirleme (Backward Chaining)</em>
                    </li>
                    <li><strong>Kullanıcı ve Uzman Arabirimi (Interface):</strong> Kullanıcının sistemle iletişim kurmasını, girdileri girmesini ve çıkarım sonuçlarını görmesini sağlayan arayüzdür.</li>
                </ul>
            </div>
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>Uzman Sistem Elemanları ve Bilgi Akış Şeması</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Sunumda yer alan bilgi akış diyagramına göre verilerin ve rollerin dağılımı şu şekildedir:</p>
                <div class="flow-chart" style="font-size: 0.85rem; font-family: monospace; color: var(--text-primary); background: rgba(255,255,255,0.02); padding: 1rem; border-radius: 8px; border: 1px dashed var(--border-color);">
                    <div style="text-align: center; font-weight: bold; color: var(--accent);">[UZMAN]</div>
                    <div style="text-align: center; margin: 0.25rem 0;">↓ Bilgi Temini</div>
                    <div style="text-align: center; font-weight: bold; color: var(--text-primary);">[MÜHENDİS]</div>
                    <div style="text-align: center; margin: 0.25rem 0;">↓ Bilgi Formülasyonu</div>
                    <div style="text-align: center; font-weight: bold; color: var(--accent);">[BİLGİ TABANI] ↔ [ÇIKARIM MEKANİZMASI]</div>
                    <div style="text-align: center; margin: 0.25rem 0;">↕ Karşılıklı Veri Alışverişi</div>
                    <div style="text-align: center; font-weight: bold; color: var(--text-primary);">[KULLANICI ARABİRİMİ]</div>
                    <div style="text-align: center; margin: 0.25rem 0;">↕ Girdi ve Çıktı Akışı</div>
                    <div style="text-align: center; font-weight: bold; color: var(--accent);">[KULLANICI]</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. ZEKİ ETMENLER -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--accent);"><i class="fas fa-robot"></i> 2. Zeki Etmenler (Intelligent Agents)</h3>
        <p class="section-desc">Zeki etmenler, bulundukları çevre içerisinde bağımsız olarak karar verebilen bilgisayar sistemleridir. Hem donanım (sensörler, eyleyiciler) hem de yazılım olarak geliştirilirler. Tek bir teknikle sınırlı kalmayıp birden fazla yapay zekâ tekniğini bir arada kullanabilirler. En önemli özellikleri öğrenme yeteneklerinin bulunması ve gerçek zamanlı (real-time) çalışabilmeleridir.</p>
        
        <div class="info-block" style="background: rgba(0,0,0,0.2); margin-top: 1rem;">
            <h4>Zeki Etmenin Elemanları ve Çevre Etkileşim Döngüsü</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Sunumda modellenen zeki etmen çalışma döngüsü ve bilgi kaynakları ilişkisi şu adımlarla gerçekleşir:</p>
            
            <table class="analysis-table">
                <thead>
                    <tr>
                        <th class="analysis-th" style="width: 25%;">Etmen Bileşeni</th>
                        <th class="analysis-th">Çalışma Mantığı ve Döngüdeki Görevi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="analysis-code-cell" style="color: var(--accent);">Algılama Sensörleri</td>
                        <td class="analysis-explain-cell">Çevreden gelen verileri ve uyarıları toplayarak etmenin kavrama mekanizmasına iletir.</td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: var(--accent);">Kavrama (Perception)</td>
                        <td class="analysis-explain-cell">Sensörlerden gelen verileri işleyen ana zihinsel merkezdir. Kendi içinde 4 alt süreçten oluşur:
                            <br>• <strong>Planlama:</strong> Hedefe ulaşmak için atılacak adımların tasarlanması.
                            <br>• <strong>Öğrenme:</strong> Çevresel geri bildirimlerden deneyim kazanılması.
                            <br>• <strong>Problem Çözme:</strong> Belirsizlik durumlarında çözümler üretilmesi.
                            <br>• <strong>Karar Verme:</strong> Eylemler arasından en uygun olanının seçilmesi.
                        </td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: var(--accent);">Bilgi Kaynakları</td>
                        <td class="analysis-explain-cell">Kavrama mekanizması ile çift yönlü (karşılıklı) etkileşimdedir. Karar verme ve planlama sırasında ihtiyaç duyulan referans bilgileri sağlar.</td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: var(--accent);">Eylem (Action)</td>
                        <td class="analysis-explain-cell">Kavrama sonucunda seçilen kararların fiziksel veya yazılımsal eyleyiciler vasıtasıyla çevreye uygulanmasıdır.</td>
                    </tr>
                    <tr>
                        <td class="analysis-code-cell" style="color: var(--accent);">Çevre (Environment)</td>
                        <td class="analysis-explain-cell">Döngünün başlangıcı ve bitişidir. Sensörler verileri çevreden okur, eylemler ise çevre üzerinde değişiklikler meydana getirir.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 3. GENETİK ALGORİTMALAR -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--accent);"><i class="fas fa-dna"></i> 3. Genetik Algoritmalar (GA)</h3>
        <p class="section-desc">Genetik Algoritma, doğal genetiği (evrim kuramını) modelleyen ve stokastik (değişken, raslantısal) yöntemler kullanarak en uygun çözümü arayan optimal arama ve optimizasyon algoritmalarıdır. Doğal seçilim (en uygun olanın hayatta kalması) ilkelerine dayanır. Olasılık kurallarına göre çalışan GA, geleneksel türev tabanlı yöntemlerin aksine sadece <strong>amaç (uygunluk) fonksiyonuna</strong> gereksinim duyar. Çözüm uzayının tamamını taramak yerine, belirli kısımlarını etkin şekilde arayarak çok daha kısa sürede çözüme ulaşır.</p>

        <div class="grid grid-2" style="gap: 1.5rem; margin-top: 1rem;">
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>GA Özellikleri</h4>
                <ul class="styled-list" style="margin-top: 0.5rem; font-size: 0.85rem;">
                    <li>Optimize edilecek parametrelerin kendileriyle değil, kodlanmış şekilleri (örneğin ikili bit dizileri) üzerinde çalışır.</li>
                    <li>Tek bir çözüm noktası yerine, çözümlerden oluşan bir <strong>popülasyon (çözüm havuzu)</strong> üzerinde işlem yapar.</li>
                    <li>Arama yönlendirmesi için türev veya ek bilgiye ihtiyaç duymaz, sadece uygunluk fonksiyonunu (fitness function) kullanır.</li>
                    <li>Doğal genetik kurallarından benzetilen operatörleri (çaprazlama, mutasyon, seçim vb.) kullanır.</li>
                    <li>Kuralları kesin ve belirlenmiş (deterministik) değildir, stokastik (raslantısal/olasılıksal) yöntemler temelinde çalışır.</li>
                </ul>
            </div>
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>GA Temel Elemanları</h4>
                <ul class="styled-list" style="margin-top: 0.5rem; font-size: 0.85rem;">
                    <li><strong>Kromozom ve Gen:</strong> Çözülmesi istenen problemin her bir parametre değerini genler, bu genlerin bir araya gelmesiyle oluşan çözüm adayını ise kromozomlar temsil eder.</li>
                    <li><strong>Çözüm Havuzu (Popülasyon):</strong> Problemin en iyi çözümünü aramak için başlangıçta rastgele belirlenmiş olan çözüm kümesidir.</li>
                    <li><strong>Çaprazlama (Crossover):</strong> Havuzda yer alan kromozomların ikişerli eşleşerek genetik bilgilerini birleştirmesi ve bu sayede yeni yavrular üretmesidir.</li>
                    <li><strong>Mutasyon:</strong> Arama yönünü değiştirmek, popülasyon çeşitliliğini korumak ve yerel optimumlara sıkışıp kalmayı önlemek amacıyla genlerde yapılan rasgele değişikliklerdir.</li>
                    <li><strong>Uygunluk Fonksiyonu:</strong> Belirlenen çözümlerin probleme ne kadar uygun olduğunun derecesini ölçen matematiksel fonksiyondur.</li>
                    <li><strong>Yeniden Üretme (Doğal Seçilim):</strong> En iyi bireylerin hayatta kalması esasına göre yeni nesle aktarılacak bireylerin seçilmesidir. <strong>Rus Ruleti (Rulet Tekerleği)</strong> en yaygın kullanılan yeniden üretme ve seçme yöntemidir.</li>
                </ul>
            </div>
        </div>

        <div class="info-block warning-block mt-4">
            <h4>Genetik Algoritmanın Çalışma Adımları ve Döngüsü</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">Bir Genetik Algoritmanın çalışması sunumda yer alan akış şemasına göre şu 5 ana aşamada gerçekleşir:</p>
            <ol class="styled-list" style="margin-left: 1.25rem;">
                <li><strong>DNA Yapısı Kodlaması:</strong> Çözülecek probleme ait parametreler DNA yapısı modellenerek bir diziye (genellikle ikili/binary diziye) dönüştürülür.</li>
                <li><strong>Başlangıç Popülasyonunun Üretimi:</strong> Çoğunlukla tamamen rastgele yöntemlerle, belirlenen popülasyon büyüklüğü kadar kromozom dizisi üretilir ve çözüm havuzuna atılır.</li>
                <li><strong>Uygunluk Değerlemesi:</strong> Havuzdaki her bir kromozom uygunluk fonksiyonu ile değerlendirilerek bir uygunluk skoru atanır.</li>
                <li><strong>Doğal Seçilim ve Genetik Operatörler:</strong> "En uygun olan yaşar" prensibine göre rulet tekerleğiyle seçilen diziler genetik operatörlerle (çaprazlama ve mutasyon) işlenerek yeni nesil oluşturulur.</li>
                <li><strong>Durdurma Koşulu Kontrolü (Karar Döngüsü):</strong> Belirlenen nesil sayısına veya istenen uygunluk değerine ulaşılmışsa döngü durdurulur ve <strong>Çözüm</strong> elde edilir. Ulaşılmamışsa, yeni üretilen nesil üzerinden 3. ve 4. adımlar tekrarlanarak döngü devam ettirilir.</li>
            </ol>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.75rem;"><strong>Kullanım Alanları:</strong> Kontrol sistemleri, sistem tanıma, görüntü işleme, şebeke/ağ tasarımı, çizelgeleme (scheduling) ve karmaşık sınıflandırma problemleri.</p>
        </div>
    </div>

    <!-- 4. BULANIK MANTIK -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--accent);"><i class="fas fa-project-diagram"></i> 4. Bulanık Mantık (BM)</h3>
        <p class="section-desc">Günlük hayatta karşılaştığımız birçok olay kesin sınırlarla tanımlanamayan belirsiz koşullarda gerçekleşir. Hayat her zaman istediğimiz gibi doğrusal gitmez, beklenmedik olaylarla karşılaşırız ve kararlarımızı bu belirsizlikler altında vermek zorunda kalırız. Örneğin; pikniğe gitmek isteyen birinin havanın bulutlu olmasından dolayı yağmur yağma ihtimalini değerlendirip planını değiştirmesi sözel ve belirsiz bir karar verme sürecidir.</p>

        <div class="grid grid-2" style="gap: 1.5rem; margin-top: 1rem;">
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>Klasik Küme (Crisp) ve Bulanık Küme (Fuzzy) Farkı</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.5rem;">Bulanık mantığın temeli klasik küme yaklaşımının genişletilmesine dayanır:</p>
                <ul class="styled-list" style="font-size: 0.85rem;">
                    <li><strong>Klasik Küme (Crisp Set):</strong> Bir varlık ya kümenin elemanıdır ya da değildir. Matematiksel olarak, varlık küme ile olan ilişkisine göre <code>1</code> (elemanı) veya <code>0</code> (elemanı değil) değerini alır. Ara değerler yoktur (Siyah veya Beyaz).</li>
                    <li><strong>Bulanık Küme (Fuzzy Set):</strong> Elemanların kümeye kısmi üyelikleri söz konusudur. Varlıkların üyelik derecesi <strong>(0, 1)</strong> aralığında herhangi sürekli bir değer alabilir. Üyelik fonksiyonu <strong>Y(x)</strong> ile gösterilir (Gri tonları).</li>
                </ul>
            </div>
            <div class="info-block" style="background: rgba(0,0,0,0.2);">
                <h4>Bulanık Mantık Çalışma Akışı</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">Bulanık mantık elemanları ve çalışma adımları sunumda belirtildiği üzere 3 temel aşamada gerçekleşir:</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem;">
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 0.5rem; border-radius: 4px; border-left: 3px solid var(--accent);">
                        <strong>1. BULANIKLAŞTIRMA (Fuzzification):</strong> Sisteme giren net sayısal (crisp) girdilerin, üyelik fonksiyonları kullanılarak sözel bulanık değerlere dönüştürülmesi işlemidir.
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 0.5rem; border-radius: 4px; border-left: 3px solid var(--accent);">
                        <strong>2. BULANIK ÖNERMEYİ İŞLEME (Inference):</strong> Bulanıklaştırılmış girdilerin kural tabanındaki <code>EĞER ... İSE ...</code> kuralları ile işlenip bulanık bir çıkış alanı ($\mu_C$) elde edilmesidir.
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 0.5rem; border-radius: 4px; border-left: 3px solid var(--accent);">
                        <strong>3. NETLEŞTİRME / DURULAMA (Defuzzification):</strong> Elde edilen bulanık çıkış alanının net, fiziksel bir çıkış değerine (sayısal değere) dönüştürülmesidir (Örn: Ağırlık Merkezi / Centroid yöntemi).
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-2 mt-4" style="gap: 1.5rem;">
            <div class="info-block">
                <h4>Bulanık Mantığın Avantaj ve Dezavantajları</h4>
                <ul class="styled-list" style="font-size: 0.85rem;">
                    <li><strong>En Güçlü Yönü (Avantajı):</strong> Sistem tasarımı yapılırken var olan insan/uzman bilgisinin sözel kurallar halinde sisteme doğrudan aktarılıp kullanılabilmesidir. Matematiksel modele ihtiyaç duymaz.</li>
                    <li><strong>En Büyük Dezavantajı:</strong> Uzman bilgisinin tam olarak elde edilemediği veya sözel olarak ifade edilemediği karmaşık durumlarda sistemin tasarlanamamasıdır.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h4>Uygulama ve Kullanım Alanları</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">Bulanık Mantık, endüstriyel ve evsel kontrol sistemlerinde yaygın başarıya sahiptir:</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.85rem; font-family: monospace; margin-top: 0.5rem;">
                    <div>• Robotik Denetim</div>
                    <div>• Proses Kontrolü</div>
                    <div>• Ev Elektroniği (Çamaşır makinesi vb.)</div>
                    <div>• Trafik Sinyalizasyonu</div>
                    <div>• Görüntü İşleme ve Analiz</div>
                    <div>• Veri Tabanı Sorgulama</div>
                    <div>• Arıza Teşhisi ve Denetimi</div>
                    <div>• Hız ve Fren Kontrolörleri</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 5. HİBRİD KONTROL YAPILARI -->
    <div class="card mb-4" style="background: rgba(255,255,255,0.01); border-color: var(--border-color);">
        <h3 style="margin-bottom: 1rem; color: var(--accent);"><i class="fas fa-network-wired"></i> 5. Hibrid Kontrol Yapıları</h3>
        <p class="section-desc">Uzman Sistemler (US), Bulanık Mantık (BM), Yapay Sinir Ağları (YSA) ve Genetik Algoritmalar (GA) gerçek uygulamalarda tek başlarına çözümler üretebildikleri gibi, her bir yöntemin kendine has avantajları ve dezavantajları göz önüne alınarak <strong>birlikte (hibrit)</strong> de kullanılırlar. Bu entegrasyon sayesinde tekil yöntemlerin zayıflıkları giderilerek çok daha etkin, esnek ve yüksek başarımlı kontrol sistemleri geliştirilmiştir (Örn: Nöro-Bulanık denetleyiciler, Genetik-Bulanık sistemler).</p>
    </div>

    <!-- Mini Quiz -->
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> Konu Sonu Hızlı Testi
        </h3>
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_bulanik-ga" class="mini-quiz-progress-fill"></div>
        </div>
        <div class="mini-quiz-meta">
            <span id="mini_q_num_bulanik-ga">Soru 1 / 5</span>
            <span id="mini_score_bulanik-ga">Doğru: 0 | Yanlış: 0</span>
        </div>
        <div id="mini_q_text_bulanik-ga" class="mini-quiz-text">Soru yükleniyor...</div>
        <ul id="mini_options_bulanik-ga" class="options-list"></ul>
        <div id="mini_feedback_bulanik-ga" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_bulanik-ga"></p>
        </div>
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('bulanik-ga', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('bulanik-ga', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</section>`;
