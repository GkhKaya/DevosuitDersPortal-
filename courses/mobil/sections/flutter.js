/* Devosuit Partial — flutter
 * Bu dosya otomatik üretilmiştir.
 * Her section kendi JS modülünde yaşar; app.js DOM'a ekler.
 */
window.__partials = window.__partials || {};
window.__partials['flutter'] = `<section id="flutter" class="project-section card">
        <div class="section-header">
            <h2>Flutter Basics (Cross-Platform Flutter)</h2>
            <span class="path-badge"><i class="fas fa-folder"></i> FlutterProjects/firstapp</span>
        </div>
        <p class="section-desc">Google tarafından geliştirilen ve Dart dili kullanan tek bir kod tabanıyla Android, iOS, Web ve Masaüstü uygulamaları geliştirmeyi sağlayan SDK.</p>
        
        <div class="grid grid-2">
            <div class="info-block">
                <h3><i class="fas fa-info-circle"></i> Konu Anlatımı ve Temel Bilgiler</h3>
                <ul class="styled-list">
                    <li><strong>StatelessWidget:</strong> Durumu değişmeyen, statik bileşenlerdir. İçerisinde veri güncellense bile ekran otomatik olarak yeniden çizilmez.</li><li><strong>StatefulWidget:</strong> Dinamik bileşenlerdir. Yaşam döngüsü boyunca durumunu (State) korur ve veri değiştikçe ekranı güncelleyebilir.</li><li><strong>setState():</strong> Flutter'a durumun değiştiğini bildirerek \`build(BuildContext context)\` metodunun tekrar çalışmasını (yeniden render edilmesini) tetikler.</li>
                </ul>
            </div>
            <div class="info-block warning-block">
                <h3><i class="fas fa-graduation-cap"></i> Hocanın Sorabileceği Detaylar (Sınav Odaklı)</h3>
                <ul class="exam-list">
                    <li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Hot Reload ile Hot Restart arasındaki fark nedir? (Hot Reload sadece arayüz kodlarındaki değişiklikleri uygulayarak uygulamanın durumunu (örneğin sayaç değerini) korur. Hot Restart ise uygulamayı tamamen baştan başlatır ve durum sıfırlanır).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Widget ağacı (Widget Tree) nedir ve BuildContext ne işe yarar? (BuildContext, widget'ın tüm ağaç yapısı içerisindeki yerini ve yerel tema/veri kaynaklarına erişimini temsil eden bir referanstır).</div></li><li class='exam-item'><i class='fas fa-question-circle text-accent'></i> <div>Neden setState() içerisine mantıksal işlemleri yazarız? (Değişkenlerin güncellenmesi ile ekran çiziminin eş zamanlı olması ve Flutter motorunun değişikliği yakalaması için).</div></li>
                </ul>
            </div>
        </div>
        
        <div class="code-section mt-4">
            <h3><i class="fas fa-code"></i> Dersin Kod Dosyaları</h3>
            
        <div class="code-tab-container">
            <div class="code-header">
                <span><i class="fas fa-file-code"></i> FlutterProjects/firstapp/lib/main.dart</span>
                <button class="copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Kopyala</button>
            </div>
            <pre class="line-numbers"><code class="language-dart">import &#x27;package:flutter/material.dart&#x27;;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: &#x27;Flutter Demo&#x27;,
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with &quot;flutter run&quot;. You&#x27;ll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke &quot;hot reload&quot; (save your changes or press the &quot;hot
        // reload&quot; button in a Flutter-supported IDE, or press &quot;r&quot; if you used
        // the command line to start the app).
        //
        // Notice that the counter didn&#x27;t reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: .fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyHomePage(title: &#x27;Flutter Demo Home Page&#x27;),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked &quot;final&quot;.

  final String title;

  @override
  State&lt;MyHomePage&gt; createState() =&gt; _MyHomePageState();
}

class _MyHomePageState extends State&lt;MyHomePage&gt; {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // TRY THIS: Try changing the color here to a specific color (to
        // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
        // change color while the other colors stay the same.
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          //
          // TRY THIS: Invoke &quot;debug painting&quot; (choose the &quot;Toggle Debug Paint&quot;
          // action in the IDE, or press &quot;p&quot; in the console), to see the
          // wireframe for each widget.
          mainAxisAlignment: .center,
          children: [
            const Text(&#x27;You have pushed the button this many times:&#x27;),
            Text(
              &#x27;$_counter&#x27;,
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: &#x27;Increment&#x27;,
        child: const Icon(Icons.add),
      ),
    );
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
                    <td class="analysis-code-cell"><code>class MyHomePage extends StatefulWidget</code></td>
                    <td class="analysis-explain-cell">Ekran durumu (değişkenler) değiştikçe kendisini yeniden çizebilen dinamik Flutter widget yapısı.</td>
                </tr>
                
                <tr>
                    <td class="analysis-code-cell"><code>setState(() { _counter++; });</code></td>
                    <td class="analysis-explain-cell">Durum değişkeninin güncellendiğini Flutter motoruna bildirerek build() metodunun yeniden tetiklenmesini sağlar.</td>
                </tr>
                
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </div>
        
        
    <div class="mini-quiz-card mt-4">
        <h3 class="mini-quiz-title">
            <i class="fas fa-brain"></i> Flutter Basics (Cross-Platform Flutter) - Konu Sonu Hızlı Testi (10 Soru)
        </h3>
        
        <div class="mini-quiz-progress-bar">
            <div id="mini_progress_bar_flutter" class="mini-quiz-progress-fill"></div>
        </div>
        
        <div class="mini-quiz-meta">
            <span id="mini_q_num_flutter">Soru 1 / 10</span>
            <span id="mini_score_flutter">Doğru: 0 | Yanlış: 0</span>
        </div>
        
        <div id="mini_q_text_flutter" class="mini-quiz-text">Soru yükleniyor...</div>
        
        <ul id="mini_options_flutter" class="options-list">
            <!-- Dynamic options -->
        </ul>
        
        <div id="mini_feedback_flutter" class="feedback-box">
            <strong>Açıklama:</strong>
            <p id="mini_feedback_text_flutter"></p>
        </div>
        
        <div class="mini-quiz-controls">
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('flutter', -1)"><i class="fas fa-arrow-left"></i> Önceki</button>
            <button class="quiz-btn mini-btn-half" onclick="navigateMiniQuiz('flutter', 1)">Sonraki <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    </section>`;
