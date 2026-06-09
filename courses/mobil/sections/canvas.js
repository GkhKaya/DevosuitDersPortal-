/* Devosuit Partial — canvas
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['canvas'] = `<section id="canvas" class="project-section card">
        <div class="section-header">
            <h2>8. Canvas (Özel Çizim ve Grafikler)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/8-Canvas</span>
        </div>
        <p class="section-desc">Android Custom View yapısı üzerinde 2D çizimler, geometrik şekiller, metinler ve resimler çizmeyi sağlayan çizim tahtası.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>Canvas Sınıfı:</strong> Çizim işlemlerini yürüten sınıftır. \`drawRect()\`, \`drawCircle()\`, \`drawLine()\`, \`drawRoundRect()\`, \`drawTextOnPath()\` ve \`drawBitmap()\` gibi metodları vardır.</li><li><strong>Paint Sınıfı:</strong> Çizilen şekillerin rengini, stilini (FILL veya STROKE), kalınlığını (\`setStrokeWidth\`) ve yazı özelliklerini belirleyen kalem nesnesidir. \`setAntiAlias(true)\` ile pürüzsüz çizim sağlar.</li><li><strong>Shader (Radyal Gradyan):</strong> \`RadialGradient\` kullanılarak bir çemberin merkezinden dışarı doğru yayılan çok renkli bir geçiş efekti oluşturulmuş ve Paint'e shader olarak set edilmiştir.</li><li><strong>Yol Üzerinde Yazı (Path):</strong> Bir yay yolu (\`Path.arcTo\`) tanımlanıp, bu yol üzerine \`canvas.drawTextOnPath()\` ile metin dairesel olarak yazdırılmıştır.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Ekranı sürekli yenileyerek animasyon oluşturma mekanizması nasıldır? (Bir \`Handler\` ve \`Runnable\` yardımıyla \`textStartAngle\` değişkeni sürekli artırılır. Her adımda \`invalidate()\` metodu çağrılarak sistemin \`onDraw()\` metodunu tekrar çalıştırması sağlanır. postDelayed ile bu döngü 10 ms'de bir yinelenir).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Custom View'larda \`onSizeChanged()\` metodu ne zaman tetiklenir? (Görünüm ilk oluşturulduğunda ve ekran boyutu değiştiğinde (örneğin ekran döndürüldüğünde) çağrılır. Çizim için bitmap oluşturma işlemleri burada yapılmalıdır).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>İki parametreli \`View(Context, AttributeSet)\` yapıcı metodu (constructor) ne zaman çalışır? (View, XML dosyası içerisinden şişirilerek (inflate edilerek) ekrana yerleştirildiğinde bu yapıcı metot çağrılır).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/8-Canvas/app/src/main/java/com/example/canvas/MyDrawingView.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.canvas;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PointF;
import android.graphics.RadialGradient;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.os.Handler;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

public class MyDrawingView extends View {

    private Paint paint;

    private Paint paintCircle;

    private Paint paintText;

    private RectF rectF;
    private int textStartAngle = 0;

    private PointF mousePos = new PointF();

    private Handler handler = new Handler();

    public MyDrawingView(Context context) {
        super(context);
        init();
    }

    public MyDrawingView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public MyDrawingView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        paint = new Paint();
        // Daha pürüzsüz kenarlar için kenar yumuşatmayı etkinleştir
        paint.setAntiAlias(true);
        // Çizim stilini şekli dolduracak şekilde ayarla
        paint.setStyle(Paint.Style.FILL);

        paintCircle = new Paint();
        paintCircle.setStyle(Paint.Style.STROKE); // Çizim stilini sadece kontur (çerçeve) olarak ayarla
        paintCircle.setStrokeWidth(8); // Kontur kalınlığını ayarla
        paintCircle.setColor(Color.RED); // Kontur rengini kırmızı olarak ayarla

        // Gradyan için renkleri tanımla
        int[] colors = new int[]{
                Color.RED, // Kırmızı
                Color.YELLOW, // Sarı
                Color.GREEN, // Yeşil
                Color.BLUE // Mavi
        };

        // Radyal Gradyan oluştur
        // Gradyan, çemberin merkezinden (centerX, centerY) başlar
        // ve verilen yarıçapla dışarı doğru genişler.
        RadialGradient radialGradient = new RadialGradient(
                50, // Gradyan merkezinin X koordinatı
                50, // Gradyan merkezinin Y koordinatı
                50, // Gradyan yarıçapı
                colors, // Kullanılacak renkler dizisi
                null, // Konumlar (null, eşit dağıtıldığı anlamına gelir)
                Shader.TileMode.CLAMP // Tanımlanan gradyanın dışında çizimin nasıl ele alınacağı
        );

        paintText = new Paint();
        paintText.setLetterSpacing(0.5F); // Harf aralığını ayarla
        // Paint üzerine shader&#x27;ı ayarla
        paintText.setShader(radialGradient);

        rectF = new RectF(); // Dikdörtgen koordinatlarını tutmak için RectF nesnesi oluştur

        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                // Tekrarlanan görevin burada
                textStartAngle ++; // Metin başlangıç açısını artır
                textStartAngle = textStartAngle % 360; // Açıyı 0-359 aralığında tut
                invalidate(); // Görünümü yeniden çizmek için çağır
                handler.postDelayed(this, 10); // Her 10 milisaniyede bir çalıştır
            }
        };
        handler.post(runnable); // Runnable&#x27;ı hemen başlat
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        mousePos.x = event.getX(); // Fare pozisyonunun X koordinatını al
        mousePos.y = event.getY(); // Fare pozisyonunun Y koordinatını al
        return true; // Dokunma olayını işlendi olarak işaretle
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas); // Üst sınıfın onDraw metodunu çağır

        int viewWidth = getWidth(); // Görünümün genişliğini al
        int viewHeight = getHeight(); // Görünümün yüksekliğini al

        // --- Kırmızı bir dikdörtgen çiz ---
        paint.setColor(Color.RED); // Rengi kırmızı olarak ayarla
        // Dikdörtgenin sınırlarını tanımla (sol, üst, sağ, alt)
        // 100x100 piksel boyutunda, (50, 50) konumundan başlayacak şekilde ayarla
        rectF.set(50, 50, 150, 150);
        canvas.drawRect(rectF, paint); // Dikdörtgeni çiz

        paint.setColor(Color.BLUE); // Rengi mavi olarak ayarla
        paint.setTextSize(40f); // Metin boyutunu ayarla
        // Belirli bir x, y koordinatında metin çiz
        canvas.drawText(&quot;Hello Canvas!&quot;, 200, 100, paint); // Metni çiz

        // --- Yeşil bir daire çiz ---
        paint.setColor(Color.GREEN); // Rengi yeşil olarak ayarla
        // Bir daire çiz (merkezX, merkezY, yarıçap, paint)
        canvas.drawCircle(viewWidth/2, viewHeight/2, 80, paint); // Daireyi çiz

        // --- Siyah bir çizgi çiz ---
        paint.setColor(Color.BLACK); // Rengi siyah olarak ayarla
        paint.setStrokeWidth(5f); // Çizgi kalınlığını ayarla
        // Bir çizgi çiz (başlangıçX, başlangıçY, bitişX, bitişY, paint)
        canvas.drawLine(50, 200, viewWidth, viewHeight, paint); // Çizgiyi çiz

        // Yuvarlatılmış bir dikdörtgen çizme
        paint.setColor(Color.MAGENTA); // Rengi mor olarak ayarla
        rectF.set(50, 400, 250, 500); // Dikdörtgenin sınırlarını ayarla
        float cornerRadius = 20f; // Yuvarlatılmış köşeler için yarıçap
        canvas.drawRoundRect(rectF, cornerRadius, cornerRadius, paint); // Yuvarlatılmış dikdörtgeni çiz

        // Kaynaklardan bir bitmap (resim) yükle
        Bitmap bmp = BitmapFactory.decodeResource(getResources(), R.drawable.cat1);
        if (bmp != null) { // Bitmap başarıyla yüklendiyse
            int bmpWidth = bmp.getWidth(); // Bitmap&#x27;in genişliğini al
            int bmpHeight = bmp.getHeight(); // Bitmap&#x27;in yüksekliğini al

            // Bitmap&#x27;i çiz (kaynak dikdörtgeni, hedef dikdörtgeni, paint)
            canvas.drawBitmap(bmp, new Rect(0, 0, bmpWidth, bmpHeight), // Kaynak dikdörtgeni (tüm bitmap)
                    new Rect(viewWidth/2-bmpWidth/8, 200, viewWidth/2+bmpWidth/8, 200+viewHeight/4), paint); // Hedef dikdörtgeni (ekranda nereye çizileceği)
        }

        // Metni bir yol üzerinde çiz
        Path arcPath = new Path(); // Yeni bir yol nesnesi oluştur
        RectF arcRect = new RectF(viewWidth/2, viewHeight/2, viewWidth/2, viewHeight/2); // Yay için dikdörtgen oluştur
        arcRect.inset(-200, -200); // Dikdörtgeni içe doğru büyüt (yayı genişletmek için)
        arcPath.arcTo(arcRect, textStartAngle, 359, true); // Yayı yola ekle (başlangıç açısı, süpürme açısı, zorla başlangıç noktasına taşı)
        paintText.setTextSize(50f); // Metin boyutunu ayarla
        canvas.drawTextOnPath(&quot;DUMLUPINAR ÜNİVERSİTESİ&quot;, arcPath, 0, 0, paintText); // Metni yol üzerinde çiz

        // Fare pozisyonunda daire çiz
        canvas.drawCircle(mousePos.x, mousePos.y, 50, paintCircle); // Fare pozisyonunda 50 yarıçaplı bir daire çiz
    }
}
</code></pre>
            
            <div class="analysis-table-container">
                <h4 class="analysis-table-title"><i class="fas fa-search-plus"></i> Kritik Satır Analizi</h4>
                <table class="analysis-table">
                    <thead>
                        <tr>
                            <th class="analysis-th">Kod Satırı</th>
                            <th class="analysis-th">Açıklama / İşlevi</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                <tr>
                    <td class="analysis-code-cell"><code>paint.setAntiAlias(true);</code></td>
                    <td class="analysis-explain-cell">Çizilen şekillerin kenarlarındaki merdiven efektini (pikselleşmeyi) yumuşatarak pürüzsüz görünmesini sağlar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>RadialGradient</code></td>
                    <td class="analysis-explain-cell">Çember merkezinden dışarı doğru yayılan dairesel renk geçişi (gradyan) tanımlar ve Paint'e set edilir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>handler.postDelayed(this, 10);</code></td>
                    <td class="analysis-explain-cell">Runnable görevini 10 milisaniye sonra tekrar kuyruğa ekleyerek sonsuz bir animasyon döngüsü (Timer) kurar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>canvas.drawTextOnPath(...)</code></td>
                    <td class="analysis-explain-cell">Yazıyı düz bir çizgi yerine, dairesel olarak tanımlanmış bir yay yolu (Path) üzerine kıvrımlı şekilde yazar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>canvas.drawCircle(mousePos.x, mousePos.y, ...)</code></td>
                    <td class="analysis-explain-cell">onTouchEvent'ten gelen en son dokunma koordinatlarına dinamik olarak daire çizer.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 8. Canvas (Özel Çizim ve Grafikler) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_canvas" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_canvas">Soru 1 / 10</span>
            <span id="mini_score_canvas">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_canvas" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_canvas" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_canvas" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_canvas"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('canvas', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('canvas', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
