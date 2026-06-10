// Devosuit - 100 Soruluk Sınav Soruları
// Bu dosya otomatik üretilmiştir; elle düzenlemeyin.
const questionsList = [
    // 1. Android Arayüz & Layouts (0-9)
    {
        "q": "Android'de LinearLayout içinde kullanılan android:weightSum niteliği ile alt elemanların android:layout_weight nitelikleri arasındaki çalışma prensibi hangisidir?",
        "options": [
            "weightSum, uygulamanın RAM üzerinde tüketeceği maksimum piksel yoğunluğunu sınırlandırmak için kullanılır.",
            "LinearLayout alt elemanların layout_weight değerlerini toplar; weightSum belirtilmişse bu değeri bölü payda kabul ederek boş alanı orantılı paylaştırır.",
            "weightSum, bileşenlerin yazı boyutlarının toplamını sınırlandırarak ekran dışına taşmaları otomatik engeller.",
            "Yalnızca ConstraintLayout içerisindeki elemanların dikey kayma (vertical bias) oranlarını hesaplamak için kullanılır."
        ],
        "a": 1,
        "desc": "weightSum, LinearLayout'taki toplam ağırlık sınırını belirler. Alt elemanların weight değerleri bu toplama oranlanarak ekranda kaplayacakları alan hesaplanır."
    },
    {
        "q": "ConstraintLayout içinde kullanılan '0dp (match_constraint)' değeri ile 'match_parent' arasındaki fark ve kullanım önerisi nedir?",
        "options": [
            "match_parent ekran kartını %100 yükte çalıştırırken, 0dp işlemciyi serbest bırakır.",
            "ConstraintLayout bağlayıcı (constraint) kuralları ile çalışır. match_parent kullanıldığında bu bağlar geçersiz kalabilir; bu yüzden 0dp (match_constraint) kullanılmalıdır.",
            "ConstraintLayout match_parent değerini hiçbir şekilde desteklemez ve derleme hatası verir.",
            "0dp sadece dikey yönlendirmelerde çalışırken, match_parent yatay yönlendirmelerde zorunludur."
        ],
        "a": 1,
        "desc": "ConstraintLayout'ta match_parent yerine 0dp (match_constraint) tercih edilir. 0dp, tanımlanan kenar bağlarına (constraints) tam uyum sağlayarak dinamik boyutlandırma yapar."
    },
    {
        "q": "ConstraintLayout kullanırken iki elemanın dikey hizalanmasında kullanılan 'vertical bias' (dikey eğilim) neyi kontrol eder?",
        "options": [
            "Elemanın dikeyde kendi ekseni etrafındaki dönüş açısını (rotasyonunu).",
            "Elemanın üst ve alt bağlar (constraints) arasındaki orantısal dikey konumunu (Örn: %30 yukarıda, %70 aşağıda).",
            "Bileşenin yüksekliğini ekran çözünürlüğünün yarısına eşitleyerek responsive tasarım kurmayı.",
            "Dokunma hassasiyetini dikey yönde kısıtlayarak kazara tıklamaları önlemeyi."
        ],
        "a": 1,
        "desc": "Bias (eğilim), bir View'ın sol-sağ veya üst-alt constraint bağları arasındaki dengesini yüzde cinsinden ayarlayarak hassas konumlandırma yapmayı sağlar."
    },
    {
        "q": "Android arayüz çizim sisteminde ViewGroup içindeki çocuk bileşenlerin yerleşimini hesaplamak için çağrılan ilk yaşam döngüsü adımı hangisidir?",
        "options": [
            "onLayout() adımı ile elemanlar ekrandaki koordinatlarına yerleştirilir.",
            "onMeasure() adımı ile bileşenlerin genişlik ve yükseklikleri hesaplanır.",
            "onDraw() adımı ile bileşenlerin pikselleri ekrana çizilir.",
            "onAttachedToWindow() adımı ile pencereye bağlantı sağlanır."
        ],
        "a": 1,
        "desc": "Android arayüz çizim sistemi önce ölçüm yapar (onMeasure). Bileşenlerin genişlik ve yükseklikleri belirlendikten sonra yerleşim (onLayout) adımına geçilir."
    },
    {
        "q": "RecyclerView hücresi tasarlanırken kök etiketinin (root layout) yüksekliğinin 'match_parent' olarak ayarlanması neye yol açar?",
        "options": [
            "Listenin bellekte 10 kat daha fazla yer kaplamasına neden olur.",
            "Listenin her bir hücresinin tüm ekranı kaplamasına ve ekranda tek seferde sadece tek bir hücre görünmesine neden olur.",
            "Kaydırma (scroll) yönünün dikeyden yataya otomatik dönmesine yol açar.",
            "Görsel öğelerin birbirinin üzerine binerek tamamen görünmez olmasına sebep olur."
        ],
        "a": 1,
        "desc": "RecyclerView hücre kök yüksekliği match_parent yapılırsa, her hücre tüm ekranı kaplar. Bu yüzden hücre yükseklikleri 'wrap_content' veya belirli bir 'dp' değeri olmalıdır."
    },
    {
        "q": "RelativeLayout mimarisinde bir bileşenin diğerinin hemen altında yer almasını sağlayan XML niteliği hangisidir?",
        "options": [
            "android:layout_gravity=\"bottom\"",
            "android:layout_below",
            "android:layout_alignBottom",
            "android:layout_alignParentBottom"
        ],
        "a": 1,
        "desc": "android:layout_below niteliği, verilen id'ye sahip diğer View bileşeninin hemen altında konumlanmayı sağlar."
    },
    {
        "q": "ConstraintLayout içerisindeki 'Guideline' (Kılavuz Çizgi) bileşeninin temel işlevi nedir?",
        "options": [
            "Kullanıcıya ekran üzerinde dokunabileceği sınırları görsel olarak göstermek.",
            "Arayüz tasarımında referans alınabilecek, ekranda görünmeyen yatay veya dikey yardımcı çizgiler tanımlayarak responsive tasarımı kolaylaştırmak.",
            "Uygulamanın internet üzerinden yeni arayüz şablonları indirmesini sağlamak.",
            "Butonların tıklanma animasyonlarını otomatik yönetmek."
        ],
        "a": 1,
        "desc": "Guideline'lar çalışma zamanında ekranda görünmeyen, sadece ConstraintLayout içinde diğer elemanları yüzdesel veya dp bazlı hizalamak için kullanılan kılavuz çizgilerdir."
    },
    {
        "q": "FrameLayout bileşeni genellikle hangi amaçla tercih edilir?",
        "options": [
            "Elemanları karmaşık zincirlerle birbirine bağlayıp esnek hizalamalar yapmak için.",
            "Tek bir çocuk view barındırmak veya fragment'ları (ekran parçalarını) dinamik olarak yerleştirmek/üst üste bindirmek için.",
            "Tablo biçimli verileri satır satır göstermek için.",
            "Veritabanından gelen verileri otomatik listelemek için."
        ],
        "a": 1,
        "desc": "FrameLayout en basit layout türüdür. Genellikle tek bir alt View barındırmak veya Fragment konteyneri (Container) olarak kullanılmak üzere tasarlanmıştır."
    },
    {
        "q": "Bir View bileşenine atanan 'android:visibility=\"gone\"' değeri ile 'invisible' arasındaki temel fark nedir?",
        "options": [
            "gone bileşeni tamamen siler, invisible ise sadece şeffaf yapar ama ekranda kapladığı alanı ve yerleşim boyutunu korur.",
            "invisible bileşeni tamamen siler, gone ise yerini korur.",
            "gone sadece yatay modda, invisible ise dikey modda çalışır.",
            "gone RAM tüketimini azaltır, invisible ise GPU tüketimini azaltır."
        ],
        "a": 0,
        "desc": "invisible değerinde View görünmez olur ama ekrandaki yerini/boyutunu korur. gone değerinde ise View ekrandan tamamen çıkarılır ve yer kaplamaz, düzen yeniden hesaplanır."
    },
    {
        "q": "ConstraintLayout'ta kullanılan 'Barrier' (Engel) bileşeni ne işe yarar?",
        "options": [
            "Kullanıcının belirli alanlara tıklamasını engelleyen güvenlik duvarıdır.",
            "Birden fazla bileşenin boyut değişimlerine göre dinamik olarak genişleyen veya daralan ortak bir sanal sınır (engel) oluşturarak diğer elemanların taşmasını önler.",
            "Ağ bağlantısı koptuğunda arayüzün kilitlenmesini sağlar.",
            "Uygulamanın arka plana geçmesini engeller."
        ],
        "a": 1,
        "desc": "Barrier, referans verilen View'ların en uç sınırını (sol, sağ, üst veya alt) dinamik takip eder ve diğer View'ların bu sınırın ötesine geçmesini engeller."
    },

    // 2. Android Resources & Manifest (10-19)
    {
        "q": "Android'de, MediaStore.ACTION_IMAGE_CAPTURE intent'ini kullanarak resim çektirirken, manifestte android.permission.CAMERA izni eklemek neye yol açar?",
        "options": [
            "Fotoğraf kalitesinin ve çözünürlüğünün sistem tarafından otomatik olarak yarı yarıya düşürülmesine neden olur.",
            "Gereksiz izin uyarısına yol açar ve Google Play Store tarafından gereksiz izin kullanımı nedeniyle uygulamanın reddedilmesine sebep olabilir.",
            "Uygulamanın internet erişim yetkilerinin ve ağ soket bağlantılarının işletim sistemince askıya alınmasına yol açar.",
            "Kamera uygulamasının donanımsal arıza vermesine ve uygulamanın aniden kapanmasına yol açar."
        ],
        "a": 1,
        "desc": "Implicit Intent ile fotoğraf çektirirken izin gerekmez, eylemi harici kamera uygulaması üstlenir. İzin istemek caydırıcı bir hatadır!"
    },
    {
        "q": "Android Manifest dosyasındaki bir activity etiketine eklenen android:exported=\"false\" niteliği neyi ifade eder?",
        "options": [
            "Bu activity'nin cihazın dış ekranına (projeksiyon vb.) görüntü vermesini donanımsal olarak engelleyeceğini belirtir.",
            "Bu activity'nin hiçbir şekilde internete erişemeyeceğini ve veri alışverişi yapamayacağını güvenlik amacıyla belirtir.",
            "Bu activity'nin sadece kendi uygulamamız içinden başlatılabileceğini, harici uygulamalar tarafından tetiklenemeyeceğini belirtir.",
            "Activity'nin kullanımdan tamamen kaldırıldığını (deprecated) ve yerine yeni bir activity kullanılması gerektiğini ifade eder."
        ],
        "a": 2,
        "desc": "Exported=false olan bir activity'i dış uygulamalar intent'ler ile doğrudan açamaz. Güvenlik açısından kritik ekranlar için false verilmelidir."
    },
    {
        "q": "Android'de 'R sınıfı' (R.java) hakkında aşağıdakilerden hangisi doğrudur?",
        "options": [
            "Geliştirici tarafından elle yazılması ve her yeni kaynak eklendiğinde güncellenmesi gereken bir Java sınıfıdır.",
            "Derleme (build) sırasında sistem (aapt) tarafından otomatik oluşturulan, res/ klasöründeki kaynakların ID'lerini tutan final bir sınıftır.",
            "Çalışma zamanında değiştirilebilen ve SQL sorguları ile veri tabanına yazılabilen dinamik bir yapıdır.",
            "Uygulamanın internet bağlantı ayarlarını ve API istek protokollerini yöneten sistem sınıfıdır."
        ],
        "a": 1,
        "desc": "R sınıfı derleme aşamasında gradle/aapt tarafından üretilir. `R.layout.activity_main` veya `R.id.button` gibi sabit int ID'leri barındırır."
    },
    {
        "q": "Android'de farklı ekran yoğunlukları (density) için resim kaynakları (drawable) yerleştirilirken kullanılan 'xxhdpi' klasörü neyi temsil eder?",
        "options": [
            "Ekranın fiziksel inç boyutunun 10 inçten büyük olduğunu.",
            "Yaklaşık 480 dpi (dots per inch) yoğunluğundaki ekranlar için optimize edilmiş yüksek çözünürlüklü görselleri.",
            "Görsellerin sıkıştırılmadan orijinal boyutlarıyla saklandığı klasörü.",
            "Sadece vektörel (SVG/XML) çizimlerin yüklendiği özel klasörü."
        ],
        "a": 1,
        "desc": "Android ekran yoğunluklarını mdpi (1x), hdpi (1.5x), xhdpi (2x), xxhdpi (3x) şeklinde sınıflandırır. xxhdpi 480dpi civarını temsil eder."
    },
    {
        "q": "Android'de localization (yerelleştirme/dil desteği) sağlamak için Türkçe dil kaynakları hangi klasör altında tutulmalıdır?",
        "options": [
            "res/values-tr/strings.xml",
            "res/strings-tr.xml",
            "res/locales/tr/strings.xml",
            "assets/languages/tr.json"
        ],
        "a": 0,
        "desc": "Yerelleştirme için dil kodu values klasörünün sonuna eklenir (values-tr, values-en vb.). Sistem cihaz diline göre doğru dosyayı yükler."
    },
    {
        "q": "Android Manifest dosyasındaki `<application>` etiketi içinde yer alan `android:allowBackup=\"true\"` değeri ne işe yarar?",
        "options": [
            "Uygulamanın çökme durumlarında otomatik olarak kendini yeniden başlatmasını sağlar.",
            "Uygulama verilerinin (shared preferences, database vb.) Google bulut yedekleme sistemine dahil edilmesini ve yeni cihaza geçişte geri yüklenmesini sağlar.",
            "Uygulamanın SD karta yedek kopyasının çıkarılmasına izin verir.",
            "Kullanıcının uygulamayı silmesini tamamen engeller."
        ],
        "a": 1,
        "desc": "allowBackup=true, sistemin uygulama verilerini yedeklemesine izin verir. Ancak güvenlik kritik uygulamalarda (finans, bankacılık vb.) sızıntıları önlemek için false yapılmalıdır."
    },
    {
        "q": "Farklı Android sürümleri için (örneğin Android 10 ve Android 12) farklı tema veya renk şablonları uygulamak için hangi klasör yapısı kullanılır?",
        "options": [
            "res/values-v29/themes.xml ve res/values-v31/themes.xml",
            "res/themes/android10.xml ve res/themes/android12.xml",
            "res/values/themes-v29.xml",
            "assets/themes/v29.json"
        ],
        "a": 0,
        "desc": "Klasör isminin sonuna eklenen `-vXX` takısı (örn: -v29 API 29 için), belirli API seviyeleri ve üzerindeki cihazlar için özel kaynaklar tanımlamayı sağlar."
    },
    {
        "q": "Android'de derlenmemiş ham dosyaları (raw ses, video veya veri dosyaları) saklamak ve bunlara doğrudan InputStream ile erişmek için hangi kaynak klasörü kullanılır?",
        "options": [
            "res/raw/ veya assets/",
            "res/drawable/",
            "res/values/",
            "res/xml/"
        ],
        "a": 0,
        "desc": "res/raw/ veya assets/ klasörleri derlenmemiş ham dosyaları saklar. raw altındaki dosyalara R.raw.dosya_adi şeklinde erişilebilir."
    },
    {
        "q": "Android Manifest dosyasındaki `<uses-sdk>` etiketinde yer alan `targetSdkVersion` değeri neyi ifade eder?",
        "options": [
            "Uygulamanın kurulabileceği en düşük Android sürümünü.",
            "Uygulamanın test edildiği ve uyumlu çalıştığı, sistem davranışlarının (izinler vb.) referans alınacağı hedef Android API seviyesini.",
            "Uygulamanın derleme (compile) esnasında kullandığı derleyici sürümünü.",
            "Uygulamanın sadece o sürümde çalışıp diğer sürümlerde çalışmayacağını."
        ],
        "a": 1,
        "desc": "targetSdkVersion, uygulamanın hangi API seviyesine göre tasarlandığını ve test edildiğini belirtir. İşletim sistemi bu değere göre geriye dönük uyumluluk kurallarını işletir."
    },
    {
        "q": "Android Manifest dosyasında tanımlanan `<uses-permission>` etiketlerinin ana görevi nedir?",
        "options": [
            "Uygulamanın market fiyatını belirlemek.",
            "Uygulamanın kamera, internet, bluetooth gibi hassas donanım ve yazılım kaynaklarına erişebilmek için işletim sisteminden yetki talep etmesini sağlamak.",
            "Geliştirici ekibe kod yazarken ek yetkiler tanımlamak.",
            "Kullanıcıya reklam gösterilmesini zorunlu kılmak."
        ],
        "a": 1,
        "desc": "uses-permission, uygulamanın çalışabilmesi için ihtiyaç duyduğu sistem izinlerini bildirmek için manifest dosyasında kullanılır."
    },

    // 3. Android Lifecycle & Bellek Yönetimi (20-34)
    {
        "q": "Android'de, Activity yaşam döngüsünde onStop() çalıştırılmadan doğrudan onDestroy() metoduna geçilen tek durum hangisidir?",
        "options": [
            "Ekran dikey moddan yatay moda döndürüldüğünde ve konfigürasyon değişikliği tetiklendiğinde.",
            "onCreate() veya onStart() metotları içerisindeyken doğrudan finish() çağrıldığında bu durum yaşanır.",
            "Uygulama arka plana alındığında ve işletim sistemi bellek boşaltmak amacıyla activity'yi askıya aldığında.",
            "Kullanıcı geri tuşuna basarak uygulamadan tamamen çıktığında."
        ],
        "a": 1,
        "desc": "Eğer Activity henüz başlatılma aşamasındayken (onCreate/onStart) programatik olarak finish() edilirse, onStop adımı atlanarak doğrudan onDestroy tetiklenir."
    },
    {
        "q": "Android'de bir Activity sonlandırıldığında (onDestroy) arka planda çalışan AsyncTask veya Thread'ler otomatik olarak sonlandırılır mı?",
        "options": [
            "Evet, işletim sistemi tüm arka plan işlemlerini ve threadleri anında sonlandırır ve RAM'den temizler.",
            "Hayır, arka plan iş parçacıkları (thread) çalışmaya devam eder ve bu durum hafıza sızıntısı (memory leak) veya çökme (Crash) riskine yol açar.",
            "Sadece AsyncTask sonlandırılır, standart Java Thread'leri ise kaldığı yerden çalışmayı sürdürür.",
            "Uygulama arka plana alınırsa sonlandırılır, aksi takdirde çalışmaya devam eder."
        ],
        "a": 1,
        "desc": "Android'de thread'ler activity yaşam döngüsüne bağlı değildir. Activity yok edilse bile thread devam eder ve yok olan arayüze erişmeye çalışırsa NullPointerException ile çöker."
    },
    {
        "q": "Activity yaşam döngüsünde 'onSaveInstanceState(Bundle outState)' metodu ne zaman tetiklenir?",
        "options": [
            "Uygulama ilk kez telefona yüklendiğinde ve açılış ayarları yapılandırıldığında.",
            "Activity, sistem tarafından bellek ihtiyacı nedeniyle veya konfigürasyon değişimi (ekran dönmesi) sebebiyle yok edilmeden hemen önce arayüz durumunu kaydetmek için.",
            "Kullanıcı uygulamayı tamamen kapattığında ve arka plan işlemlerini durdurduğunda.",
            "Sadece internet bağlantısı koptuğunda ve veri kaybını önlemek amacıyla."
        ],
        "a": 1,
        "desc": "onSaveInstanceState, geçici arayüz verilerini saklamak için kullanılır. Cihaz döndürüldüğünde yok olan activity'nin verileri bu Bundle sayesinde geri yüklenir."
    },
    {
        "q": "Android'de bir Activity'nin 'singleTask' launchMode (başlatma modu) özelliği ne işe yarar?",
        "options": [
            "Activity başlatıldığında yeni bir task oluşturulur veya var olan task'ın köküne yerleştirilir. Eğer bu Activity zaten varsa üzerindeki tüm ekranlar temizlenir (clear-top).",
            "Uygulamada sadece tek bir buton bulunabileceğini XML düzeyinde sınırlar.",
            "Bu Activity'nin sadece tek bir thread üzerinde çalışacağını garanti altına alır.",
            "Activity'nin hafızada asla yer kaplamamasını ve otomatik silinmesini sağlar."
        ],
        "a": 0,
        "desc": "singleTask modu, ilgili Activity'nin sistemde sadece tek bir örneğinin (instance) bulunmasını ve çağrıldığında yığındaki üstündeki ekranların temizlenerek öne getirilmesini sağlar."
    },
    {
        "q": "Android'de, Activity sınıfı henüz tamamen çizilmeden onCreate() aşamasında doğrudan Navigation.findNavController(Activity, viewId) çağrıldığında ne olur?",
        "options": [
            "Sistem varsayılan olarak ana ekrana yönlendirir.",
            "Uygulama çöker (IllegalStateException: Activity does not have a NavController set) hatası alınır.",
            "Uygulama başarıyla bir sonraki ekrana geçer.",
            "Navigation işlemi sessizce iptal edilir ve logcat ekranında herhangi bir hata mesajı gösterilmez."
        ],
        "a": 1,
        "desc": "onCreate esnasında NavHostFragment henüz tamamen arayüze bağlanıp initialize edilmemiştir. Bu yüzden getSupportFragmentManager üzerinden erişim yapılmalıdır."
    },
    {
        "q": "Activity yaşam döngüsünde 'onStart()' ve 'onResume()' metotları arasındaki fark nedir?",
        "options": [
            "onStart arka planda çalışırken, onResume sadece ön planda çalışır.",
            "onStart activity'nin ekranda görünür hale geldiğini belirtir; onResume ise activity'nin odağa (focus) sahip olduğunu ve kullanıcıyla etkileşime girebileceğini belirtir.",
            "onStart sadece bir kez çağrılır, onResume ise her dakika çağrılır.",
            "onResume veritabanı bağlantılarını başlatırken, onStart ağ bağlantılarını kurar."
        ],
        "a": 1,
        "desc": "onStart ekranın görünmesini sağlar. onResume ise kullanıcı tıklamalarını ve etkileşimini kabul etmeye başladığı an tetiklenir."
    },
    {
        "q": "Kullanıcının uygulamayı kullanırken gelen bir telefon araması nedeniyle ekranın kısmen kapanması durumunda Activity hangi aşamaya geçer?",
        "options": [
            "onPause()",
            "onStop()",
            "onDestroy()",
            "onRestart()"
        ],
        "a": 0,
        "desc": "Activity ekranda hala kısmen görünür durumda ama odağını kaybetmişse (Örn: Üstüne diyalog veya telefon penceresi açılması) onPause() durumuna geçer."
    },
    {
        "q": "Activity tamamen arka plana geçtiğinde (kullanıcı ana ekrana döndüğünde) hangi metot tetiklenir?",
        "options": [
            "onPause()",
            "onStop()",
            "onDestroy()",
            "onFinish()"
        ],
        "a": 1,
        "desc": "Activity kullanıcıya artık görünmüyorsa onStop() çalışır. Burada yoğun kaynak tüketen işlemler durdurulmalıdır."
    },
    {
        "q": "Kullanıcı arka plandaki uygulamaya geri döndüğünde, sırasıyla hangi yaşam döngüsü metotları çağrılır?",
        "options": [
            "onRestart() -> onStart() -> onResume()",
            "onStart() -> onResume()",
            "onResume() -> onStart()",
            "onCreate() -> onStart() -> onResume()"
        ],
        "a": 0,
        "desc": "Durdurulmuş (onStop) bir activity'ye geri dönüldüğünde önce onRestart() tetiklenir, ardından normal başlatma adımları (onStart, onResume) izlenir."
    },
    {
        "q": "Android'de 'Task' (Görev) ve 'Back Stack' (Geri Yığını) kavramı neyi ifade eder?",
        "options": [
            "İşlemcinin o an yürüttüğü thread sayısını ve bellek tüketim oranını.",
            "Kullanıcının belirli bir işi yaparken etkileşimde bulunduğu, yığın (stack) şeklinde organize edilmiş Activity'ler koleksiyonunu.",
            "Arka planda indirilen dosyaların ve çalışan ağ servislerinin listesini.",
            "Uygulamanın yükleme boyutunu azaltan sıkıştırma algoritmasını."
        ],
        "a": 1,
        "desc": "Task, kullanıcının bir işlemi gerçekleştirirken açtığı ekranların (Activity) oluşturduğu Back Stack (Geri Yığını) yapısını yöneten işletim sistemi kavramıdır."
    },
    {
        "q": "Activity'nin 'standard' launchMode özelliği (varsayılan) nasıl çalışır?",
        "options": [
            "Aynı Activity'den her çağrıldığında yığının en üstüne yeni bir örnek (instance) oluşturulup konulur.",
            "Eğer yığında zaten varsa yeni örnek oluşturulmaz, mevcut olan öne getirilir.",
            "Yalnızca tek bir task içinde çalışmasına izin verir.",
            "Sistem activity'yi her zaman arka planda başlatır."
        ],
        "a": 0,
        "desc": "Standard başlatma modunda, intent her gönderildiğinde hedef Activity'nin yepyeni bir nesnesi üretilir ve yığına eklenir."
    },
    {
        "q": "LaunchMode tiplerinden 'singleTop' özelliğinin standard moddan farkı nedir?",
        "options": [
            "Activity yığında varsa hiçbir zaman yeni nesne oluşturmaz.",
            "Eğer çağrılan Activity zaten yığının en üstünde (top) aktif ise, yeni nesne oluşturulmaz; bunun yerine `onNewIntent()` çağrısı gönderilir.",
            "Activity'yi yeni bir task oluşturarak orada başlatır.",
            "Sadece tek bir thread üzerinde çalışmasını sağlar."
        ],
        "a": 1,
        "desc": "singleTop, hedeflenen Activity zaten yığının en üstündeyse mükerrer nesne oluşturulmasını engelleyerek mevcut olanı kullanır."
    },
    {
        "q": "Android işletim sisteminin RAM yetersizliğinde arka plandaki uygulamayı yok etmesi durumunda, Activity verilerini kurtarmak için hangi Bundle nesnesi onCreate'e parametre gelir?",
        "options": [
            "Intent.getExtras()",
            "savedInstanceState",
            "activityConfigBundle",
            "restoreStateData"
        ],
        "a": 1,
        "desc": "onCreate(Bundle savedInstanceState) parametresi, onSaveInstanceState ile kaydedilen verileri içerir. Null kontrolü yapılarak veriler geri yüklenir."
    },
    {
        "q": "Bellek sızıntılarını (memory leak) önlemek amacıyla Android'de Context nesnesi saklanırken hangisinden kaçınılmalıdır?",
        "options": [
            "Context'i local değişken olarak kullanmaktan.",
            "Statik (static) bir değişkende Activity context'i referans olarak tutmaktan.",
            "ApplicationContext nesnesini kullanmaktan.",
            "Context parametresini metotlara geçirmekten."
        ],
        "a": 1,
        "desc": "Statik bir değişkende Activity context'i saklanırsa, activity yok edilse bile statik referans nedeniyle bellekten silinemez ve sızıntı oluşur."
    },
    {
        "q": "Android'de 'SharedPreferences' yapısı hangi veri türlerini saklamak için tasarlanmıştır?",
        "options": [
            "XML tabanlı anahtar-değer (Key-Value) çiftleri halinde basit ilkel (primitive) verileri (int, float, boolean, string).",
            "Yüksek boyutlu resim ve video dosyalarını yerel klasörlerde saklamak.",
            "Uygulamanın tüm derlenmiş makine kodlarını yedeklemek.",
            "SQL ilişkisel veri tablolarını ve indekslenmiş verileri depolamak."
        ],
        "a": 0,
        "desc": "SharedPreferences, ufak ayarları (örneğin beni hatırla durumu, kullanıcı adı, tema seçimi) saklamak için kullanılan hafif bir veri depolama aracıdır."
    },

    // 4. Event Handling & Dinamik Viewlar (35-44)
    {
        "q": "Bir Android butonuna XML dosyasında android:onClick=\"myClick\" tanımlanmıştır. MainActivity içindeki bu metodun imzası nasıl olmalıdır?",
        "options": [
            "static void myClick(Context ctx) şeklinde static ve Context parametreli.",
            "public boolean myClick(Button btn) şeklinde boolean dönüş tipli ve Button parametreli.",
            "public void myClick(View view) şeklinde public, void ve tek View parametreli.",
            "private void myClick() şeklinde parametresiz ve dışarıya kapalı."
        ],
        "a": 2,
        "desc": "XML onClick metotları mutlaka 'public', dönüş tipi 'void' ve parametresi tek bir 'View' nesnesi olmak zorundadır. Aksi takdirde çalışma zamanında çökme yaşanır."
    },
    {
        "q": "Kotlin/Java kodunda dinamik olarak bir View bileşeni oluşturup ekrana eklemek için hangi yöntem izlenir?",
        "options": [
            "XML dosyasına manuel satır eklenir.",
            "Bileşen kodu nesnesi (new Button) oluşturulur ve parent layout nesnesinin `addView(view)` metodu çağrılır.",
            "findViewById ile var olan bir buton kopyalanır.",
            "Bunun için mutlaka yeni bir Activity başlatılması gerekir."
        ],
        "a": 1,
        "desc": "Dinamik arayüz tasarımında kod tarafında oluşturulan View nesneleri bir ViewGroup'a (LinearLayout, FrameLayout vb.) addView metoduyla eklenir."
    },
    {
        "q": "Android'de Button nesnesine tanımlanan `setOnClickListener` ile `setOnLongClickListener` arasındaki tetiklenme farkı nedir?",
        "options": [
            "setOnClickListener sadece çift tıklamalarda tetiklenir.",
            "setOnLongClickListener kullanıcının butona en az 5 saniye basılı tutmasını gerektirir.",
            "setOnLongClickListener basılı tutmayı algılar ve boolean döner; true dönülürse click olayı yutulur (consume edilir), aksi halde click de tetiklenir.",
            "İkisi aynı anda hiçbir şekilde tanımlanamaz."
        ],
        "a": 2,
        "desc": "setOnLongClickListener metodunun true dönmesi, olayın işlendiğini (consumed) bildirir ve klik olayının (onClick) arka arkaya tetiklenmesini engeller."
    },
    {
        "q": "Bir metin alanındaki (EditText) karakter değişimlerini anlık dinlemek için hangi arayüz (listener) implement edilmelidir?",
        "options": [
            "OnClickListener",
            "TextWatcher (beforeTextChanged, onTextChanged, afterTextChanged)",
            "OnKeyListener",
            "OnFocusChangeListener"
        ],
        "a": 1,
        "desc": "TextWatcher arayüzü, EditText içindeki metin değişimlerini (karakter yazılması, silinmesi) anlık yakalamayı sağlar."
    },
    {
        "q": "Android'de XML layout dosyalarını kod tarafında Java/Kotlin nesnesine dönüştürmek için kullanılan sistem sınıfı hangisidir?",
        "options": [
            "ViewInflater",
            "LayoutInflater (inflate metodu ile)",
            "ResourceManager",
            "LayoutParser"
        ],
        "a": 1,
        "desc": "LayoutInflater, XML yerleşim dosyalarını Java nesnelerine 'şişirmek' (inflate) için kullanılır (Örn: Adapter veya Custom View içinde)."
    },
    {
        "q": "Arayüzdeki bir bileşene dokunulduğunda tetiklenen `setOnTouchListener` dinleyicisinin `onTouch` metodu ne zaman tetiklenir?",
        "options": [
            "Sadece tıklama bittiğinde (parmak kalktığında).",
            "Parmağın ekrana dokunma (DOWN), kayma (MOVE) ve kalkma (UP) gibi tüm hareket adımlarında.",
            "Sadece ekran döndürüldüğünde.",
            "Bileşen odak kaybettiğinde."
        ],
        "a": 1,
        "desc": "Touch event'ler düşük seviyeli hareketleri yakalar ve dokunma süresince gerçekleşen her harekette tetiklenir."
    },
    {
        "q": "Android'de `findViewById` kullanımının getirdiği performans yükünü ve tip güvenliği (type safety) sorunlarını çözmek için sunulan modern çözüm hangisidir?",
        "options": [
            "Manual Casting",
            "View Binding (veya Jetpack Compose)",
            "ButterKnife Kütüphanesi",
            "R sınıfı optimizasyonu"
        ],
        "a": 1,
        "desc": "View Binding, XML dosyaları için doğrudan tip güvenli bağlama sınıfları üreterek findViewById kullanımını ve olası null pointer hatalarını önler."
    },
    {
        "q": "Dinamik arayüzlerde, bir View'ın yerleşim parametrelerini (width, height, margin) kod ile değiştirmek için hangi sınıf nesnesi güncellenmelidir?",
        "options": [
            "LayoutParams (View'ın ait olduğu üst layout türündeki LayoutParams)",
            "ViewAttributes",
            "LayoutAttributes",
            "ConstraintSet"
        ],
        "a": 0,
        "desc": "Bir View'ın boyutsal parametreleri parent layout'un LayoutParams sınıfı üzerinden değiştirilir (örn. LinearLayout.LayoutParams)."
    },
    {
        "q": "Kullanıcının geri tuşuna (Back Button) basmasını dinlemek ve bu hareketi özelleştirmek için modern Android SDK'sında hangi yapı kullanılır?",
        "options": [
            "onBackPressedCallback (OnBackPressedDispatcher üzerinden)",
            "System.exit(0)",
            "finish()",
            "KeyEvent.KEYCODE_BACK override edilerek"
        ],
        "a": 0,
        "desc": "Modern Android'de onBackPressed() override etmek yerine OnBackPressedDispatcher ve OnBackPressedCallback kullanılması tavsiye edilir."
    },
    {
        "q": "Arayüz elemanlarının odaklanma durumunu (focus state) kontrol etmek ve klavyenin otomatik açılmasını sağlamak için hangi View metodu çağrılır?",
        "options": [
            "requestFocus()",
            "setFocused(true)",
            "invalidate()",
            "bringToFront()"
        ],
        "a": 0,
        "desc": "requestFocus() çağrısı View bileşenine odak kazandırır ve eğer EditText ise klavyenin açılmasını tetikleyebilir."
    },

    // 5. Multi-Touch & MotionEvents (45-54)
    {
        "q": "Çoklu dokunmatik (Multi-Touch) işlemlerde ekrandaki parmakların takibini yaparken getActionIndex() yerine neden getPointerId() tercih edilir?",
        "options": [
            "Index değeri parmaklar kaldırıldığında dinamik olarak değişirken, Pointer ID parmak ekrandan kalkana kadar sabit kalır.",
            "Pointer ID sadece ilk dokunan parmağa atanır ve diğer parmakların koordinatlarının sisteme karışmasını engellemek için kullanılır.",
            "Pointer ID, parmakların ekrandaki anlık piksel koordinatını doğrudan veren donanımsal bir kimlik parametresi olduğu için.",
            "Index değeri donanımsal olup değiştirilemezken, Pointer ID yazılım tarafından dinamik olarak yeniden yapılandırılabildiği için."
        ],
        "a": 0,
        "desc": "Ekrandan parmak kaldırıldığında parmak indeksleri (0,1,2...) güncellenir. Ancak parmağın benzersiz ID'si dokunuş bitene kadar değişmez, bu sayede parmaklar karıştırılmaz."
    },
    {
        "q": "Android'de 'onInterceptTouchEvent()' metodu hangi bileşen türlerinde bulunur ve temel görevi nedir?",
        "options": [
            "Android Manifest dosyasında izinleri kesmek ve güvenlik duvarı oluşturmak için tanımlanır.",
            "ViewGroup (veya Layout) sınıflarında bulunur; dokunma olayının alt bileşenlere mi aktarılacağını yoksa kendisi tarafından mı kesilip (intercept) işleneceğini belirler.",
            "Sadece Custom View yapılarında çizimi iptal etmek amacıyla override edilir.",
            "Sadece Button bileşeninde bulunur; tıklamayı engellemek için kullanılır."
        ],
        "a": 1,
        "desc": "onInterceptTouchEvent, ViewGroup'lara özeldir. Alt elemanlardan önce dokunma olayını inceler. Eğer true dönerse olayı kendi üstlenir ve alt elemanlara göndermez."
    },
    {
        "q": "Custom View yapılarında onTouchEvent() metodunun sonunda 'return false;' dönersek ne olur?",
        "options": [
            "Ekran dokunmaya karşı tamamen kilitlenir ve kullanıcının cihazı yeniden başlatması gerekir.",
            "View tamamen görünmez (INVISIBLE) hale gelir ve ekrandaki yerleşim düzeni tamamen bozulur.",
            "Sadece ilk dokunma olayı (ACTION_DOWN) yakalanır; sonraki sürükleme (ACTION_MOVE) ve bırakma (ACTION_UP) olayları bu View'a iletilmez.",
            "Dokunma olayı iptal edilir ve uygulama bir önceki ekrana geri dönerek akışı baştan başlatır."
        ],
        "a": 2,
        "desc": "onTouchEvent false dönerse, sistem bu View'ın dokunma hareketleriyle ilgilenmediğini varsayar ve o dokunma serisine ait sonraki hareketleri (MOVE, UP) View'a göndermez."
    },
    {
        "q": "MotionClass veya MotionEvent nesnesinde çoklu dokunma algılandığında, dokunma eylemini ve hangi parmağın hareket ettiğini öğrenmek için hangi maskeleme yöntemi kullanılır?",
        "options": [
            "event.getActionMasked()",
            "event.getAction()",
            "event.getPointerCount()",
            "event.getSource()"
        ],
        "a": 0,
        "desc": "Çoklu dokunmada getAction() yerine getActionMasked() kullanılmalıdır. Bu metot, parmak indeks bilgisini ayırarak saf eylemi (ACTION_POINTER_DOWN vb.) döner."
    },
    {
        "q": "MotionEvent sınıfındaki `ACTION_POINTER_DOWN` eylemi neyi temsil eder?",
        "options": [
            "İlk parmağın ekrana dokunduğu anı.",
            "Ekranda zaten bir parmak basılıyken, ikinci veya daha sonraki bir parmağın ekrana dokunduğu anı.",
            "Tüm parmakların ekrandan tamamen çekildiği anı.",
            "Parmağın ekran üzerinde sürüklendiği anı."
        ],
        "a": 1,
        "desc": "İlk parmak dokunduğunda ACTION_DOWN, sonraki ek dokunuşlarda ise ACTION_POINTER_DOWN tetiklenir."
    },
    {
        "q": "Çoklu dokunmatik bir çizim uygulamasında 2. parmağın X ve Y koordinatlarını almak için kullanılan doğru metot imzası hangisidir?",
        "options": [
            "getX(1) ve getY(1) [pointer index parametresi geçilerek]",
            "getX() ve getY()",
            "getPointerX(2) ve getPointerY(2)",
            "getRawX() ve getRawY()"
        ],
        "a": 0,
        "desc": "getX() ve getY() varsayılan olarak 0. indeksli (ilk) parmağın koordinatını verir. Diğer parmaklar için indeks belirtilmelidir (örn: getX(pointerIndex))."
    },
    {
        "q": "MotionEvent.ACTION_CANCEL hangi durumda tetiklenir?",
        "options": [
            "Kullanıcı çizimi bilerek iptal ettiğinde.",
            "Bir üst ViewGroup (örn: ScrollView) dokunma hareketine el koyup (intercept) kendi kontrolüne aldığında mevcut View'ın dokunma serisini iptal etmek için.",
            "Telefonun şarjı bittiğinde.",
            "Uygulama arka plana alındığında."
        ],
        "a": 1,
        "desc": "ACTION_CANCEL, parent layout dokunma kontrolünü üstlendiğinde (Örn: kaydırma başladığında) alttaki bileşenin dokunma işlemini kesmek için gönderilir."
    },
    {
        "q": "Android'de iki parmakla kıstırma (Pinch-to-Zoom) hareketini kolayca yakalamak için sunulan yerleşik yardımcı sınıf hangisidir?",
        "options": [
            "GestureDetector",
            "ScaleGestureDetector",
            "MultiTouchDetector",
            "ZoomController"
        ],
        "a": 1,
        "desc": "ScaleGestureDetector, iki parmakla yapılan yakınlaştırma/uzaklaştırma hareketlerini ve ölçek oranını (scale factor) hesaplayan hazır bir sınıftır."
    },
    {
        "q": "Kullanıcının ekranda çift tıklama (double tap) veya hızlı kaydırma (fling) yapmasını algılamak için hangi sınıf kullanılır?",
        "options": [
            "ScaleGestureDetector",
            "GestureDetector",
            "TouchListener",
            "MotionDetector"
        ],
        "a": 1,
        "desc": "GestureDetector sınıfı, dokunma eylemlerinden çift tıklama, basılı tutma (long press) ve hızlı kaydırma (fling) gibi kompleks jestleri ayırt eder."
    },
    {
        "q": "Çoklu dokunmada ekrandaki toplam aktif parmak sayısını öğrenmek için hangi metot çağrılır?",
        "options": [
            "event.getPointerCount()",
            "event.getFingerCount()",
            "event.getActionIndex()",
            "event.getPointerId()"
        ],
        "a": 0,
        "desc": "getPointerCount() metodu, o an ekran üzerinde temas halinde olan toplam parmak sayısını döner."
    },

    // 6. ListView & RecyclerView & ViewHolder (55-69)
    {
        "q": "RecyclerView.Adapter içindeki ViewHolder sınıfı neden statik (static) bir iç sınıf olarak tanımlanmalıdır?",
        "options": [
            "Hücrelerin ekranda daha hızlı kaydırılmasını ve kaydırma esnasında görsel yırtılmaların önüne geçilmesini sağlamak için.",
            "Android Studio derleme aşamasında 'non-static inner class' hatası vererek kodun derlenmesini tamamen engelleyeceği için.",
            "ViewHolder nesnesinin dıştaki Adapter nesnesinin gizli referansını tutmasını engelleyerek bellek sızıntısını (memory leak) önlemek için.",
            "ViewHolder nesnesinin liste arayüzüne (XML) düzgün bağlanabilmesini ve derleme anında hata oluşmamasını garanti altına almak için."
        ],
        "a": 2,
        "desc": "Java'da non-static inner class'lar outer class'a gizli bir referans tutar. ViewHolder'lar geri dönüştürülürken bu gizli referans yüzünden Adapter bellekten temizlenemez."
    },
    {
        "q": "RecyclerView.Adapter içindeki notifyDataSetChanged() metodu ile notifyItemChanged(int position) arasındaki temel performans farkı nedir?",
        "options": [
            "İkisi arasında hiçbir çalışma farkı yoktur; tamamen aynı işi farklı isimlerle yaparlar.",
            "notifyDataSetChanged tüm listeyi ve hücreleri baştan çizer; notifyItemChanged ise sadece belirtilen pozisyondaki hücreyi güncelleyerek işlemci yükünü azaltır.",
            "notifyItemChanged sadece internet bağlantısı varken çalışır, notifyDataSetChanged ise çevrimdışı çalışabilir.",
            "notifyDataSetChanged tüm ekranı dondururken, diğeri sadece arka plan threadlerini askıya alır."
        ],
        "a": 1,
        "desc": "notifyDataSetChanged gereksiz yere tüm hücrelerin yeniden oluşturulmasına (bind) yol açar. notifyItemChanged ise sadece değişen tek hücreyi hedef alarak performansı korur."
    },
    {
        "q": "RecyclerView.Adapter içindeki 'onCreateViewHolder' metodu ne zaman çağrılır?",
        "options": [
            "Uygulama arka plana alındığında ve hücreler bellekten silindiğinde tetiklenir.",
            "RecyclerView'ın yeni bir hücre görünümüne (ViewHolder) ihtiyacı olduğunda (şişirme işlemi için) çağrılır.",
            "Kullanıcı listeyi aşağı kaydırdığı her an durmaksızın ve kesintisiz çağrılır.",
            "Listedeki veri kümesi her güncellendiğinde ve arayüz yenilendiğinde çağrılır."
        ],
        "a": 1,
        "desc": "onCreateViewHolder sadece yeni hücre arayüz referansı oluşturulurken çağrılır. Hücreler ekrandan çıkıp tekrar girerken bu metot değil, `onBindViewHolder` tetiklenir."
    },
    {
        "q": "RecyclerView kullanırken listenin dikey, yatay veya ızgara (Grid) biçiminde yerleşeceğini belirleyen yardımcı sınıf hangisidir?",
        "options": [
            "RecyclerView.Adapter",
            "LayoutManager (LinearLayoutManager, GridLayoutManager vb.)",
            "ViewHolder",
            "ItemDecoration"
        ],
        "a": 1,
        "desc": "LayoutManager, RecyclerView içerisindeki elemanların konumlandırılmasından ve kaydırma davranışlarından sorumlu olan sınıftır."
    },
    {
        "q": "RecyclerView.Adapter'da `onBindViewHolder(ViewHolder holder, int position)` metodunun görevi nedir?",
        "options": [
            "XML dosyasını şişirerek (inflate) ViewHolder oluşturmak.",
            "Verilen pozisyondaki verileri ViewHolder içindeki arayüz elemanlarına (TextView, ImageView) bağlayarak içeriği göstermek.",
            "Listenin toplam eleman sayısını sisteme bildirmek.",
            "Hücrelerin ekrandaki genişlik ve yükseklik ölçümlerini yapmak."
        ],
        "a": 1,
        "desc": "onBindViewHolder, geri dönüştürülen hücrelerin içini yeni verilerle doldurmak (bind etmek) için kullanılır."
    },
    {
        "q": "RecyclerView ile ListView karşılaştırıldığında, RecyclerView'ın getirdiği en büyük mimari yenilik hangisidir?",
        "options": [
            "Veritabanı bağlantılarını doğrudan yapabilmesi.",
            "ViewHolder desenini (design pattern) zorunlu kılarak hücre görünümlerinin bellekte geri dönüştürülmesini standartlaştırması.",
            "Daha az RAM tüketmesi ama daha yavaş çalışması.",
            "Sadece internetten gelen verileri listeleyebilmesi."
        ],
        "a": 1,
        "desc": "ListView'da ViewHolder kullanımı isteğe bağlıydı ve yapılmadığında ciddi yavaşlamalara yol açıyordu. RecyclerView bu deseni zorunlu kılarak performansı garantiye alır."
    },
    {
        "q": "RecyclerView'da listeye yeni bir eleman eklendiğinde bunu animasyonlu bir şekilde listeye bildirmek için hangi metot çağrılmalıdır?",
        "options": [
            "notifyDataSetChanged()",
            "notifyItemInserted(int position)",
            "notifyItemChanged(int position)",
            "notifyItemRemoved(int position)"
        ],
        "a": 1,
        "desc": "notifyItemInserted, listeye sadece o pozisyonda eleman eklendiğini bildirir ve RecyclerView ekleme animasyonunu otomatik tetikler."
    },
    {
        "q": "RecyclerView'da iki liste arasındaki veri farkını (eklenen, silinen, güncellenen) arka planda hesaplayarak performansı optimize eden araç hangisidir?",
        "options": [
            "ListAdapter",
            "DiffUtil",
            "ItemAnimator",
            "FastScroller"
        ],
        "a": 1,
        "desc": "DiffUtil sınıfı, eski liste ile yeni liste arasındaki farkı Eugene W. Myers'ın fark algoritması ile hesaplayarak sadece değişen yerlerin güncellenmesini sağlar."
    },
    {
        "q": "RecyclerView hücreleri arasına çizgi, boşluk veya özel kenarlıklar eklemek için hangi bileşen kullanılır?",
        "options": [
            "LayoutManager",
            "ItemDecoration (DividerItemDecoration vb.)",
            "ItemAnimator",
            "ViewHolder"
        ],
        "a": 1,
        "desc": "ItemDecoration, hücrelerin sınırlarına özel çizimler, sınırlar veya boşluklar eklemek için kullanılır."
    },
    {
        "q": "ListView'da kullanılan 'BaseAdapter' sınıfından türetilen bir adaptörde, listenin toplam eleman sayısını dönmek zorunda olduğumuz metot hangisidir?",
        "options": [
            "getView()",
            "getCount()",
            "getItemId()",
            "getItem()"
        ],
        "a": 1,
        "desc": "getCount() metodu, listenin toplam veri sayısını döner. Sistem bu değere göre döngüleri ve kaydırma çubuğunu oluşturur."
    },
    {
        "q": "ListView adaptöründeki `getView(int position, View convertView, ViewGroup parent)` metodundaki `convertView` parametresinin işlevi nedir?",
        "options": [
            "Bileşenin arka plan rengini tutan nesnedir.",
            "Ekranda kaydırılarak kaybolan ve yeni gelen veriler için tekrar kullanılmak (reuse) üzere gönderilen eski hücre tasarımı referansıdır.",
            "Sadece tıklama olaylarını dinleyen bir butondur.",
            "Veritabanından çekilen veri satırıdır."
        ],
        "a": 1,
        "desc": "convertView, Null kontrolü yapılarak tekrar kullanılırsa sistemin sürekli sıfırdan XML şişirmesini (inflate) önler ve ciddi performans kazandırır."
    },
    {
        "q": "RecyclerView'da kaydırma esnasında hücrelerin kayma veya titreme yapmadan yüklenmesini sağlamak için görsel boyutlar nasıl tanımlanmalıdır?",
        "options": [
            "Görsellerin yükseklikleri mutlaka wrap_content olmalıdır.",
            "Hücrelerin veya içindeki resimlerin boyutları (genişlik/yükseklik) sabit (dp bazında) tanımlanmalı veya aspect ratio kullanılmalıdır.",
            "Tüm görseller sadece vektörel XML olmalıdır.",
            "Kaydırma hızı yazılımsal olarak yavaşlatılmalıdır."
        ],
        "a": 1,
        "desc": "Boyutlar belirsiz olduğunda (wrap_content) resim yüklendikten sonra hücre boyutu aniden değişir (layout thrashing) ve ekran titrer. Sabit yer tutucular şarttır."
    },
    {
        "q": "BaseAdapter implementasyonunda her hücre için benzersiz bir sayısal ID dönmek amacıyla override edilen metot hangisidir?",
        "options": [
            "getItem()",
            "getItemId(int position)",
            "getViewType()",
            "getCount()"
        ],
        "a": 1,
        "desc": "getItemId, elemanların pozisyonuna göre benzersiz bir long ID dönmesini sağlar, veri tabanı ID'si dönmek yaygın bir pratiktir."
    },
    {
        "q": "RecyclerView'da kaydırma animasyonlarını ve ekleme/silme efektlerini yöneten sınıf hangisidir?",
        "options": [
            "LayoutManager",
            "ItemAnimator (DefaultItemAnimator vb.)",
            "ItemDecoration",
            "Adapter"
        ],
        "a": 1,
        "desc": "ItemAnimator, eleman eklendiğinde, silindiğinde veya taşındığında oluşacak görsel animasyonları yönetir."
    },
    {
        "q": "RecyclerView'da farklı veri modellerini (Örn: Bir reklam hücresi, bir normal ürün hücresi) aynı listede göstermek için adaptördeki hangi metot override edilmelidir?",
        "options": [
            "onCreateViewHolder()",
            "getItemViewType(int position)",
            "onBindViewHolder()",
            "getItemCount()"
        ],
        "a": 1,
        "desc": "getItemViewType pozisyona göre bir int değer döner. onCreateViewHolder metodu da bu int değere bakarak farklı XML tasarımları şişirir."
    },

    // 7. Canvas & Paint & Özel Çizimler (70-79)
    {
        "q": "Custom View çizimlerinde onDraw() metodunun içerisinde 'new Paint()' veya 'new Path()' gibi nesne oluşturma işlemlerinden kaçınılmasının temel nedeni nedir?",
        "options": [
            "onDraw içinde oluşturulan nesnelerin null pointer fırlatarak çökme yaratması.",
            "onDraw metodu saniyede 60-120 kez çağrılabilir; burada nesne oluşturmak sürekli Garbage Collector (GC) tetikleyerek arayüzde kasmaya (jank) neden olur.",
            "Sistemin donanım ivmesini devre dışı bırakması ve tüm çizim işlemlerini CPU üzerine yüklemesi.",
            "Paint nesnesi onDraw içinde oluşturulduğunda renk ve stil atamalarının çalışmaması."
        ],
        "a": 1,
        "desc": "onDraw çok sık tetiklenen bir metottur. İçerisinde sürekli nesne tahsis etmek (allocation) belleği doldurur ve GC çalışarak uygulamayı anlık dondurur."
    },
    {
        "q": "Custom View yapılarında 'postInvalidate()' metodunun 'invalidate()' metoduna göre farkı nedir?",
        "options": [
            "postInvalidate sadece internet bağlantısı varken çalışır.",
            "invalidate sadece ana UI thread'inden çağrılabilirken, postInvalidate arka plan thread'lerinden de güvenle çağrılıp ekran güncellemesi yapabilir.",
            "postInvalidate çizimi daha düşük kalitede yaparak pil tasarrufu sağlar.",
            "postInvalidate çağrıldığında onDraw tetiklenmez."
        ],
        "a": 1,
        "desc": "Android'de arayüze sadece UI (main) thread dokunabilir. Arka plandan (worker thread) çizim tetiklemek için mesaj kuyruğuna ekleme yapan postInvalidate kullanılır."
    },
    {
        "q": "Android Custom View'larında 'onDraw(Canvas canvas)' metoduna parametre olarak gelen Canvas nesnesi neyi temsil eder?",
        "options": [
            "Bileşenin arka plan rengini saklayan renk paletini.",
            "Çizim işlemlerini (şekil, çizgi, yazı, görsel yerleştirme) gerçekleştirdiğimiz çizim yüzeyini/tahtasını.",
            "Dokunma olaylarının koordinat listesini.",
            "Ekran çözünürlüğünü değiştiren ve grafik kartı sürücüsünü yöneten nesnedir."
        ],
        "a": 1,
        "desc": "Canvas, 2D grafik çizimleri yapabildiğimiz sanal tuvaldir. Çizim komutları bu nesne üzerinden yürütülür."
    },
    {
        "q": "Custom View çizimlerinde kullanılan Paint nesnesinin 'setAntiAlias(true)' metodu ne işe yarar?",
        "options": [
            "Çizilen kenarların pürüzsüz görünmesini sağlar (pikselleşmeyi/merdiven etkisini engeller).",
            "Dokunma hassasiyetini iki katına çıkararak daha hızlı çizim yapmayı sağlar.",
            "Çizimlerin rengini tersine çevirerek zıt renkler elde edilmesini sağlar.",
            "Çizimi 3D derinliğe kavuşturur."
        ],
        "a": 0,
        "desc": "Anti-aliasing (kenar yumuşatma), eğri çizimlerinde kenarlardaki merdiven efektini (pikselleşmeyi) hafif geçişli piksellerle kapatarak pürüzsüzleştirir."
    },
    {
        "q": "Custom View yapılarında onSizeChanged(int w, int h, int oldw, int oldh) metodu ne zaman tetiklenir?",
        "options": [
            "View ilk oluşturulduğunda ve ekran boyutu değiştiğinde (örneğin cihaz yatay/dikey moda geçtiğinde) çağrılır.",
            "onDraw metodu her sonlandığında ekranın yenilenmesini kontrol etmek için çağrılır.",
            "Kullanıcı ekrana her dokunduğunda ve parmağını hareket ettirdiğinde.",
            "Sadece uygulama kapatılırken kaynakları serbest bırakmak amacıyla."
        ],
        "a": 0,
        "desc": "onSizeChanged, görünümün boyutları ilk kez hesaplandığında veya ekran yönü/boyutu değiştiğinde çağrılır. Çizim için kullanılacak Bitmap boyutlandırmaları burada yapılmalıdır."
    },
    {
        "q": "Custom View yapılarında 'invalidate()' çağrıldığında sistem arka planda hangi metodu tetikler?",
        "options": [
            "onLayout() metodunu tetikleyerek çocuk bileşenleri hizalar.",
            "onMeasure() metodunu tetikleyerek boyutları yeniden hesaplattırır.",
            "onDraw() metodunu tetikleyerek görünümün yeniden çizilmesini sağlar.",
            "onTouchEvent() metodunu tetikler."
        ],
        "a": 2,
        "desc": "invalidate() çağrısı sistem arayüz yöneticisine 'bu View güncelliğini yitirdi, yeniden çiz' mesajı gönderir. Sistem de en kısa sürede onDraw(Canvas) metodunu çağırır."
    },
    {
        "q": "Paint sınıfındaki 'setStyle(Paint.Style style)' metoduna 'Paint.Style.STROKE' verilirse çizim nasıl görünür?",
        "options": [
            "Çizilen şeklin içi tamamen boyanır.",
            "Şeklin içi boş bırakılarak sadece dış sınırları (çerçevesi) çizilir.",
            "Şekil kesikli çizgilerle çizilir.",
            "Çizim tamamen şeffaf hale gelir."
        ],
        "a": 1,
        "desc": "Paint.Style.FILL şeklin içini doldururken, STROKE sadece dış kontur çizgilerini çizer. FILL_AND_STROKE ise her ikisini yapar."
    },
    {
        "q": "Custom View tasarlarken, görünümün boyutlarını (genişlik ve yükseklik) parent layout isteklerine göre hesaplamak için hangi metot override edilmelidir?",
        "options": [
            "onDraw()",
            "onMeasure(int widthMeasureSpec, int heightMeasureSpec)",
            "onLayout()",
            "onSizeChanged()"
        ],
        "a": 1,
        "desc": "onMeasure, View'ın ne kadar yer kaplamak istediğini hesaplayıp `setMeasuredDimension(w, h)` metoduyla sisteme bildirdiği kritik adımdır."
    },
    {
        "q": "onMeasure metoduna parametre gelen 'MeasureSpec' değerlerinin içindeki modlardan 'MeasureSpec.EXACTLY' ne anlama gelir?",
        "options": [
            "View'ın istediği kadar büyük olabileceğini.",
            "View'a üst layout tarafından kesin/sabit bir boyut (örneğin 100dp veya match_parent) dayatıldığını.",
            "View'ın boyutunun sadece sıfır olabileceğini.",
            "Genişliğin yüksekliğe eşit olmak zorunda olduğunu."
        ],
        "a": 1,
        "desc": "EXACTLY, kesin bir boyut dayatıldığını belirtir. AT_MOST en fazla şu kadar olabileceğini (wrap_content), UNSPECIFIED ise boyut sınırlaması olmadığını söyler."
    },
    {
        "q": "Canvas üzerinde karmaşık geometrik yollar (eğriler, çokgenler vb.) oluşturup çizmek için hangi sınıf kullanılır?",
        "options": [
            "Path",
            "Rect",
            "Paint",
            "Matrix"
        ],
        "a": 0,
        "desc": "Path sınıfı, çizgi segmentleri, kuadratik eğriler veya kübik eğrilerden oluşan çoklu çizim yollarını temsil etmek için kullanılır."
    },

    // 8. Fragments & Jetpack Navigation (80-89)
    {
        "q": "Fragment yaşam döngüsünde View Binding nesnesinin onDestroyView() içinde null yapılmasının ana gerekçesi nedir?",
        "options": [
            "Android Studio derleme hatası verir.",
            "Fragment'ın kendisi yok olmadan önce View yapısı yok edildiğinden, temizlenmeyen referanslar bellek sızıntısına (memory leak) sebep olur.",
            "Null yapılmazsa fragment arka planda çalışmaya devam eder ve pil tüketimini artırır.",
            "Aksi takdirde sonraki geçişlerde fragment tekrar oluşturulamaz."
        ],
        "a": 1,
        "desc": "Fragment'ın yaşam döngüsü View ömründen uzundur. onDestroyView çağrıldığında arayüz yok edilir ancak fragment bellektedir. Binding null yapılmazsa eski View nesneleri bellekte asılı kalır."
    },
    {
        "q": "Fragment yaşam döngüsünde, arayüzün (XML) şişirilip (inflate) View nesnesi olarak döndürüldüğü metot hangisidir?",
        "options": [
            "onCreate()",
            "onCreateView(LayoutInflater, ViewGroup, Bundle)",
            "onViewCreated()",
            "onActivityCreated()"
        ],
        "a": 1,
        "desc": "onCreateView, Fragment'ın kendi arayüzünü oluşturduğu ve geriye döndürdüğü yerdir. Arayüz elemanları bağlandıktan sonra onViewCreated tetiklenir."
    },
    {
        "q": "Bir Fragment içinden Activity'nin Context'ine veya kaynaklarına güvenle erişmek için hangi metot çağrılmalıdır?",
        "options": [
            "getContext() veya getActivity() (null olabilme durumuna göre requireContext() / requireActivity())",
            "SystemContext.get()",
            "getApplication()",
            "Context.getInstance()"
        ],
        "a": 0,
        "desc": "Fragment'lar bağımsız değildir, bir Activity'ye bağlıdır. getActivity() veya getContext() ile bağlı olunan activity referansı alınır. require... metotları null değilse kesin döner, yoksa hata fırlatır."
    },
    {
        "q": "Jetpack Navigation bileşeninde sayfalar arası veri taşımak için tip güvenliği (type-safety) sunan eklenti hangisidir?",
        "options": [
            "Safe Args",
            "Bundle传递",
            "Serializable",
            "Parcelable"
        ],
        "a": 0,
        "desc": "Safe Args Gradle eklentisi, yönlendirme (Directions) ve argüman (Args) sınıflarını otomatik üreterek tip güvenli veri taşımayı sağlar."
    },
    {
        "q": "Bir Fragment'ın yaşam döngüsündeki 'onAttach()' metodu ne zaman çağrılır?",
        "options": [
            "Fragment ekranda görünür olduğunda.",
            "Fragment bir Activity ile ilişkilendirildiği (bağlandığı) ilk anda.",
            "Fragment'ın arayüzü çizilmeye başlandığında.",
            "Uygulama arka plana geçtiğinde."
        ],
        "a": 1,
        "desc": "onAttach, Fragment yaşam döngüsünün ilk adımıdır. Bu aşamada fragment'a bağlı olduğu Activity referansı geçirilir."
    },
    {
        "q": "FragmentTransaction işlemlerinde 'addToBackStack(String name)' çağrısı ne işe yarar?",
        "options": [
            "Fragment verilerini veritabanına yedekler.",
            "Yapılan fragment değiştirme işlemini (replace/add) geri yığına ekleyerek kullanıcının geri tuşuna bastığında bir önceki fragment'a dönmesini sağlar.",
            "Fragment'ın önbelleğe alınmasını sağlayarak RAM kullanımını düşürür.",
            "Uygulamanın ana ekranına yönlendirme yapar."
        ],
        "a": 1,
        "desc": "addToBackStack kullanılmazsa, replace işleminden sonra geri tuşuna basıldığında bir önceki fragment'a dönmek yerine doğrudan Activity sonlanır."
    },
    {
        "q": "Jetpack Navigation XML dosyasında (nav_graph) ekranlar arası geçişleri ve animasyonları tanımlayan çizgilere ne ad verilir?",
        "options": [
            "Destinations",
            "Actions",
            "Pipes",
            "Routes"
        ],
        "a": 1,
        "desc": "nav_graph içindeki 'Destinations' ekranları temsil ederken, 'Actions' ekranlar arasındaki geçiş yollarını ve parametrelerini temsil eder."
    },
    {
        "q": "Fragment içinde LiveData veya StateFlow gözlemlerken (observe) neden 'viewLifecycleOwner' parametresi kullanılmalıdır?",
        "options": [
            "Daha yüksek işlemci hızı elde etmek için.",
            "Fragment'ın kendisi arka planda yaşarken View'ı yok edildiğinde (onDestroyView), gözlemcinin otomatik temizlenmesini sağlayarak bellek sızıntısını önlemek için.",
            "Sadece Kotlin dillerinde zorunlu olduğu için.",
            "Ağ bağlantısının kopmasını engellemek için."
        ],
        "a": 1,
        "desc": "Fragment nesnesi ile arayüzünün (View) ömürleri farklıdır. viewLifecycleOwner, arayüzün ömrünü temsil eder ve arayüz yok olduğunda observer'ı kapatır."
    },
    {
        "q": "ViewPager2 bileşeni içinde fragment'ları yönetmek için hangi adaptör sınıfı miras alınmalıdır?",
        "options": [
            "FragmentPagerAdapter",
            "FragmentStateAdapter",
            "RecyclerView.Adapter",
            "BaseAdapter"
        ],
        "a": 1,
        "desc": "ViewPager2, RecyclerView altyapısını kullanır. Fragment'ları yönetmek için modern FragmentStateAdapter sınıfı kullanılmalıdır."
    },
    {
        "q": "Birden fazla Fragment'ın kendi aralarında veya bağlı oldukları Activity ile veri paylaşımını temiz bir şekilde yönetmek için önerilen Jetpack mimarisi hangisidir?",
        "options": [
            "Shared ViewModel (activityViewModels() delegate'i ile)",
            "Static variables",
            "Broadcast Receivers",
            "EventBus Kütüphanesi"
        ],
        "a": 0,
        "desc": "Aynı Activity'ye bağlı fragment'lar, activity kapsamlı (Activity-scoped) bir paylaşımlı ViewModel kullanarak veri alışverişini sızıntısız yönetebilir."
    },

    // 9. Bluetooth Low Energy (BLE) & Runtime Permissions (90-94)
    {
        "q": "Android 12 (API 31) ve üzerinde Bluetooth Low Energy (BLE) cihaz taraması yapabilmek için Manifest'te hangi izinlerin alınması zorunludur?",
        "options": [
            "BLUETOOTH_SCAN, BLUETOOTH_CONNECT ve ACCESS_FINE_LOCATION izinlerinin çalışma zamanında kullanıcıdan talep edilmesi gerekir.",
            "ACCESS_FINE_LOCATION ve INTERNET izinleri cihaz taraması yapmak için tek başına yeterlidir.",
            "BLUETOOTH_ADVERTISE ve ACCESS_COARSE_LOCATION izinlerinin yanı sıra kamera izinleri zorunludur.",
            "Yalnızca BLUETOOTH ve BLUETOOTH_ADMIN izinlerinin alınması tarama işlemi için yeterlidir."
        ],
        "a": 0,
        "desc": "Android 12 ile yeni bluetooth izinleri (SCAN, CONNECT) getirilmiştir. Cihaz taraması konum tespitine yol açtığından hassas konum (ACCESS_FINE_LOCATION) izni de şarttır."
    },
    {
        "q": "Yazılan BLE uygulamasında SCAN_PERIOD = 10000 (10 saniye) olarak belirlenmiştir. Bu sürenin sonunda stopScan() çağrılmasının sebebi nedir?",
        "options": [
            "BLE taraması pil tüketimini aşırı artırır; bu yüzden tarama süresi sınırlandırılmalı ve amaca ulaşıldığında durdurulmalıdır.",
            "Bluetooth standardına göre kesintisiz tarama yapmak cihazın benzersiz MAC adresini sıfırlar.",
            "10 saniyeden sonra Bluetooth anteninin aşırı ısınarak fiziksel zarar görmesini engellemek.",
            "Android OS 10 saniyeden uzun taramaları güvenlik gerekçesiyle otomatik kapatır."
        ],
        "a": 0,
        "desc": "Bluetooth taraması en çok güç tüketen işlemlerden biridir. Pil verimliliği ve işletim sistemi kaynak koruması için tarama süresi kısıtlı tutulmalıdır."
    },
    {
        "q": "Android'de runtime (çalışma zamanı) izni istenirken kullanılan 'shouldShowRequestPermissionRationale()' metodu ne işe yarar?",
        "options": [
            "İznin tehlikeli izin grubunda olup olmadığını denetler.",
            "Uygulamanın internet hızını ölçerek izin alma süresini optimize eder.",
            "Kullanıcıya bu iznin neden gerekli olduğunu açıklayan ek bir açıklama arayüzü gösterilip gösterilmeyeceğini belirler (kullanıcı izni daha önce reddetmişse true döner).",
            "İznin sistem tarafından otomatik olarak onaylanmasını sağlar."
        ],
        "a": 2,
        "desc": "shouldShowRequestPermissionRationale, kullanıcı izni bir kez reddetmişse true döner. Böylece kullanıcıya 'bu izne neden ihtiyacımız var' açıklaması sunulabilir."
    },
    {
        "q": "Android Manifest dosyasında tanımlanan '<uses-feature android:name=\"android.hardware.bluetooth_le\" android:required=\"true\" />' satırı neyi ifade eder?",
        "options": [
            "Bluetooth izinlerini kullanıcıdan çalışma zamanında istemek için kullanılan bir bildirim satırıdır.",
            "Uygulama açılırken işletim sistemi tarafından otomatik olarak bluetooth'un aktif hale getirilmesini sağlar.",
            "Uygulamanın Bluetooth Low Energy donanımına sahip olmayan cihazlara Google Play Store'da gösterilmemesini ve yüklenememesini sağlar.",
            "Cihazın pil ömrünü artırmak için kullanılmayan bluetooth donanımını otomatik kapatır."
        ],
        "a": 2,
        "desc": "uses-feature etiketindeki required=true değeri, uygulamanın çalışması için o donanımın (BLE) şart olduğunu belirtir. Donanımı barındırmayan cihazlar uygulamayı indiremez."
    },
    {
        "q": "BLE taraması yapıldıktan sonra bulunan bir cihazla bağlantı kurmak (GATT sunucusuna bağlanmak) için BluetoothDevice nesnesi üzerinden hangi metot çağrılır?",
        "options": [
            "connectGatt(Context, boolean autoConnect, BluetoothGattCallback)",
            "startConnection()",
            "establishSocketChannel()",
            "bindDeviceAddress()"
        ],
        "a": 0,
        "desc": "connectGatt metodu cihazla bağlantıyı başlatır ve bağlantı durumundaki değişimleri BluetoothGattCallback üzerinden bildirir."
    },

    // 10. Location Services, Intents & Cross-Platform (95-99)
    {
        "q": "Android'de FusedLocationProviderClient sınıfının getLastLocation() metodu hangi durumda 'null' değer döndürür?",
        "options": [
            "Cihazda konum servisleri kapalıysa veya cihaz yeni açılmış olup henüz hiç konum önbelleği oluşmamışsa.",
            "İnternet bağlantısı kesildiğinde ve haritalar servisine erişim tamamen koptuğunda.",
            "Uygulama arka planda çalışıyorsa ve konum izinleri arka plan için tanımlanmamışsa.",
            "Cihazda GPS donanımı bulunmadığında."
        ],
        "a": 0,
        "desc": "getLastLocation önbelleğe alınmış son konumu döndürür. Konum servisleri kapalıysa veya önbellekte veri yoksa null döner, bu duruma karşı kodda kontrol yapılmalıdır."
    },
    {
        "q": "Android işletim sisteminde 'Explicit Intent' (Açık Intent) hangi amaçla kullanılır?",
        "options": [
            "Kamerayı açıp fotoğraf çekmek veya harita uygulamasını tetiklemek amacıyla.",
            "Hedef bileşenin sınıf adı doğrudan belirtilerek uygulama içindeki belirli bir Activity veya Servis'i başlatmak için.",
            "Bir web adresini tarayıcıda açtırmak için.",
            "Kullanıcıya sistem ayarları menüsünü göstermek için."
        ],
        "a": 1,
        "desc": "Explicit Intent'lerde sınıf ismi açıkça belirtilir. Örn: `new Intent(context, TargetActivity.class)`. Kendi uygulamamızın ekranları arasında geçişte kullanılır."
    },
    {
        "q": "Android'de 'Implicit Intent' (Kapalı Intent) gönderildiğinde, sistemde eylemi gerçekleştirebilecek birden fazla uygulama varsa ne olur?",
        "options": [
            "Uygulama doğrudan cihazda kurulu olan en eski uygulamayı açarak işlemi tamamlar.",
            "Sistem kullanıcıya bir seçici (App Chooser) penceresi göstererek hangi uygulamayı kullanmak istediğini sorar.",
            "Uygulama 'MultipleActivityException' hatası ile çalışma zamanında aniden çöker.",
            "Sistem tüm uyumlu uygulamaları aynı anda arka planda başlatır."
        ],
        "a": 1,
        "desc": "Implicit intent hedefi net belirtmez, aksiyon belirtir (ACTION_VIEW vb.). Eşleşen birden fazla uygulama varsa Android işletim sistemi kullanıcıya seçme ekranı sunar."
    },
    {
        "q": "Blazor Hybrid (.NET MAUI) uygulamasındaki Razor sayfalarında kullanılan HTML 'onclick' özelliği ile Blazor '@onclick' özelliği arasındaki temel fark nedir?",
        "options": [
            "@onclick kullanımı internet bağlantısı gerektirirken, onclick tamamen çevrimdışı (offline) modda çalışabilir.",
            "onclick tarayıcı (WebView) tarafındaki JavaScript motorunda çalışırken, @onclick native .NET runtime tarafındaki C# kodunu tetikler.",
            "onclick yalnızca CSS animasyonlarını tetiklerken, @onclick doğrudan C# kodunun veri tabanına erişmesini sağlar.",
            "İkisi arasında hiçbir çalışma ve derleme farkı yoktur."
        ],
        "a": 1,
        "desc": "@onclick Blazor'ın C# olay yöneticisine bağlıdır ve WebView içinden C# kodunu çalıştırır. onclick ise klasik istemci tarafı JS kodudur."
    },
    {
        "q": "İşletim Sistemleri teorisindeki 'Process' (Süreç) ile 'Thread' (İş Parçacığı) arasındaki temel fark nedir?",
        "options": [
            "Process'ler işletim sistemi tarafından hiçbir şekilde sonlandırılamazken, Thread'ler kapatılabilir.",
            "Process bağımsız bir bellek ve adres uzayına sahipken; Thread'ler aynı process içindeki ortak bellek alanını (heap) paylaşarak çalışırlar.",
            "Thread'in çalışması için internet bağlantısı şarttır ancak Process tamamen çevrimdışı çalışabilir.",
            "Process sadece Java projelerinde kullanılırken, Thread C# projelerinde yer alır."
        ],
        "a": 1,
        "desc": "Process işletim sisteminin yürüttüğü en büyük program birimidir, izole bellek alanına sahiptir. Thread ise process içindeki hafif iş parçacığıdır."
    }
];
