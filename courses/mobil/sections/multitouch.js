/* Devosuit Partial — multitouch
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['multitouch'] = `<section id="multitouch" class="project-section card">
        <div class="section-header">
            <h2>4. Multi-Touch (Çoklu Dokunmatik Olaylar)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> AndroidStudioProjects/4-MultiTouchEvent</span>
        </div>
        <p class="section-desc">Ekran üzerinde birden fazla parmağın koordinatlarını ve hareketlerini aynı anda takip etme, çizim yapma prensiplerini gösteren proje.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>Pointer ID vs Pointer Index:</strong> \`Pointer Index\` her dokunuşta değişebilir (parmaklar kaldırıldığında indeksler güncellenir). \`Pointer ID\` ise parmak ekrandan kalkana kadar sabit kalan benzersiz bir değerdir. Çoklu dokunmatik takibinde parmakları ayırt etmek için Pointer ID kullanılmalıdır.</li><li><strong>getActionMasked() vs getAction():</strong> \`getActionMasked()\`, olayın asıl türünü (DOWN, MOVE, UP vb.) verirken, \`getAction()\` ayrıca pointer indeks bilgisini de içinde barındırır. Çoklu dokunmatik işlemlerde maskelenmiş aksiyonlar kullanılmalıdır.</li><li><strong>MotionEvent Sabitleri:</strong> \`ACTION_DOWN\` (ilk dokunuş), \`ACTION_POINTER_DOWN\` (ekstra parmak dokunuşu), \`ACTION_MOVE\` (hareket), \`ACTION_POINTER_UP\` (ekstra parmağın kalkışı), \`ACTION_UP\` (son parmağın kalkışı).</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Çoklu dokunmada parmakların koordinatları \`ACTION_MOVE\` olayında nasıl alınır? (Tüm parmaklar için bir döngü kurularak \`event.getPointerId(i)\` ile ID alınır, ardından \`event.getX(i)\` ve \`event.getY(i)\` ile koordinatları okunur).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Neden \`onTouchEvent\` metodunun sonunda \`return true;\` dönülmelidir? (Eğer false dönülürse, Android sistemi sonraki dokunma olaylarını (MOVE, UP) bu View'a iletimi durdurur).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Çizimin ekranda güncellenmesini sağlayan tetikleyici nedir? (\`invalidate()\` metodu. Bu metot View'ın \`onDraw()\` metodunu tekrar çağırarak ekranın yeniden çizilmesini tetikler).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/4-MultiTouchEvent/app/src/main/java/com/example/multitouchevent/DrawingView.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.multitouchevent;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.PointF;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import androidx.annotation.NonNull;

public class DrawingView extends View {
    private Bitmap canvasBitmap;
    private Canvas drawCanvas;
    private Paint drawPaint;
    public boolean eraseCanvas = false;
    private final PointF[] fromPoints = new PointF[32];
    private final int[] pointerColors = new int[32];
    private final Paint txtPaint = new Paint();
    private String txt = &quot;&quot;;

    public DrawingView(Context context, AttributeSet attrs) {
        super(context, attrs);
        setupDrawing();
    }

    private void setupDrawing() {
        for (int i = 0; i &lt; fromPoints.length; i++) {
            fromPoints[i] = new PointF();
        }

        pointerColors[0] = Color.RED;
        pointerColors[1] = Color.GREEN;
        pointerColors[2] = Color.BLUE;
        pointerColors[3] = Color.YELLOW;
        pointerColors[4] = Color.MAGENTA;
        pointerColors[5] = Color.CYAN;
        pointerColors[6] = Color.BLACK;
        pointerColors[7] = Color.WHITE;
        pointerColors[8] = Color.GRAY;
        pointerColors[9] = Color.LTGRAY;
        pointerColors[10] = Color.DKGRAY;
        pointerColors[11] = Color.rgb(128, 0, 128); // Example: Purple
        pointerColors[12] = Color.rgb(0, 128, 128); // Example: Teal
        pointerColors[13] = Color.rgb(128, 128, 0); // Example: Olive
        pointerColors[14] = Color.rgb(128, 0, 0);   // Example: Maroon
        pointerColors[15] = Color.rgb(0, 128, 0);   // Example: Dark Green
        pointerColors[16] = Color.rgb(0, 0, 128);   // Example: Navy
        pointerColors[17] = Color.rgb(255, 165, 0); // Example: Orange
        pointerColors[18] = Color.rgb(255, 192, 203);// Example: Pink
        pointerColors[19] = Color.rgb(165, 42, 42); // Example: Brown
        pointerColors[20] = Color.rgb(240, 230, 140); // Example: Khaki
        pointerColors[21] = Color.rgb(102, 205, 170); // Example: Medium Aquamarine
        pointerColors[22] = Color.rgb(147, 112, 219); // Example: Medium Purple
        pointerColors[23] = Color.rgb(135, 206, 250); // Example: Light Sky Blue
        pointerColors[24] = Color.rgb(255, 215, 0);   // Example: Gold
        pointerColors[25] = Color.rgb(218, 165, 32); // Example: Goldenrod
        pointerColors[26] = Color.rgb(210, 105, 30); // Example: Chocolate
        pointerColors[27] = Color.rgb(192, 192, 192);// Example: Silver
        pointerColors[28] = Color.rgb(255, 105, 180); // Example: Hot Pink
        pointerColors[29] = Color.rgb(173, 255, 47); // Example: Green Yellow
        pointerColors[30] = Color.rgb(0, 255, 127);  // Example: Spring Green
        pointerColors[31] = Color.rgb(255, 248, 220);// Example: Cornsilk

        canvasBitmap = Bitmap.createBitmap(100, 100, Bitmap.Config.ARGB_8888);
        drawCanvas = new Canvas(canvasBitmap);

        drawPaint = new Paint();
        drawPaint.setColor(Color.BLACK);
        drawPaint.setAntiAlias(true);
        drawPaint.setStrokeWidth(20f);
        drawPaint.setStyle(Paint.Style.STROKE);
        drawPaint.setStrokeJoin(Paint.Join.ROUND);
        drawPaint.setStrokeCap(Paint.Cap.ROUND);

        txtPaint.setStrokeWidth(1f);
        txtPaint.setStyle(Paint.Style.FILL);
        txtPaint.setColor(Color.BLACK);
        txtPaint.setAntiAlias(true);
        txtPaint.setTextSize(48f);
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);

        canvasBitmap = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
        drawCanvas = new Canvas(canvasBitmap);
    }

    public void clearCanvas() {
        drawCanvas.drawColor(Color.WHITE);
        invalidate();
    }

    @Override
    public void onDraw(@NonNull Canvas canvas) {
        super.onDraw(canvas);

        canvas.drawBitmap(canvasBitmap, 0, 0, null);
        canvas.drawText(txt, 40, 40, txtPaint);
    }

    @SuppressLint(&quot;ClickableViewAccessibility&quot;)
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        int action = event.getActionMasked();
        int pointerIndex = event.getActionIndex();
        int pointerId = event.getPointerId(pointerIndex);

        float touchX = event.getX(pointerIndex);
        float touchY = event.getY(pointerIndex);
        txt = &quot;X: &quot; + (int) touchX + &quot;,  Y: &quot; + (int) touchY + &quot;,  &quot; + action + &quot;, Pointers: &quot; + event.getPointerCount();

        switch (action) {
            case MotionEvent.ACTION_DOWN:
            case MotionEvent.ACTION_POINTER_DOWN:
                fromPoints[pointerId].set(event.getX(pointerId), event.getY(pointerId));
                break;
            case MotionEvent.ACTION_MOVE:
                for (int i = 0; i &lt; event.getPointerCount(); i++) {
                    int id = event.getPointerId(i);
                    drawPaint.setColor(eraseCanvas ? Color.WHITE :  pointerColors[id]);
                    drawCanvas.drawLine(fromPoints[id].x, fromPoints[id].y, event.getX(i), event.getY(i), drawPaint);
                    fromPoints[id].set(event.getX(i), event.getY(i));
                }
                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_POINTER_UP:
                break;
            case MotionEvent.ACTION_CANCEL:
                break;
            default:
                return false;
        }

        invalidate();
        return true; // Indicate that we&#x27;ve handled the touch event
    }
}</code></pre>
            
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
                    <td class="analysis-code-cell"><code>int action = event.getActionMasked();</code></td>
                    <td class="analysis-explain-cell">Çoklu dokunmalarda asıl aksiyon tipini (DOWN, MOVE, UP vb.) indeks bilgisinden ayıklayarak alır.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>int pointerIndex = event.getActionIndex();</code></td>
                    <td class="analysis-explain-cell">O an ekrana dokunan veya kalkan parmağın geçici sıra indeksini (index) verir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>int pointerId = event.getPointerId(pointerIndex);</code></td>
                    <td class="analysis-explain-cell">Dinamik olan indeks değerinin aksine, parmak ekrandan kalkana kadar sabit kalan benzersiz kimliğini (ID) alır.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>MotionEvent.ACTION_POINTER_DOWN</code></td>
                    <td class="analysis-explain-cell">Ekranda zaten bir parmak varken ikinci, üçüncü veya daha fazla parmağın ekrana dokunduğu anı yakalar.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>drawCanvas.drawLine(...)</code></td>
                    <td class="analysis-explain-cell">Bir önceki parmak koordinatından anlık hareket koordinatına çizgi çizerek çizim işlemini gerçekleştirir.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>invalidate();</code></td>
                    <td class="analysis-explain-cell">Görünümün geçerliliğini yitirdiğini sisteme bildirir ve onDraw() metodunun en kısa sürede tekrar çalışmasını tetikler.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> AndroidStudioProjects/4-MultiTouchEvent/app/src/main/java/com/example/multitouchevent/MainActivity.java</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-java">package com.example.multitouchevent;

import android.os.Bundle;
import android.widget.Button;
import android.widget.Switch;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.parentLayout), (v, insets) -&gt; {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        findViewById(R.id.buttonClear).setOnClickListener(v -&gt; {
            ((DrawingView)findViewById(R.id.drawingView)).clearCanvas();
        });

        ((Switch)findViewById(R.id.switchErase)).setOnCheckedChangeListener((buttonView, isChecked) -&gt;
        {
            ((DrawingView)findViewById(R.id.drawingView)).eraseCanvas = isChecked;
        });
    }
}</code></pre>
            
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
                    <td class="analysis-code-cell"><code>findViewById(R.id.buttonClear).setOnClickListener(...)</code></td>
                    <td class="analysis-explain-cell">Temizle butonuna basıldığında çizim tahtasını (DrawingView) temizleyen metodu tetikler.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>((DrawingView)findViewById(R.id.drawingView)).eraseCanvas = isChecked;</code></td>
                    <td class="analysis-explain-cell">Silgi switch'inin açık/kapalı durumuna göre çizim tahtasında silme modunu aktif veya pasif yapar.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> 4. Multi-Touch (Çoklu Dokunmatik Olaylar) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_multitouch" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_multitouch">Soru 1 / 10</span>
            <span id="mini_score_multitouch">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_multitouch" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_multitouch" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_multitouch" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_multitouch"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('multitouch', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('multitouch', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
