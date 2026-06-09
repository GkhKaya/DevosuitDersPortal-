#!/usr/bin/env python3
"""
Devosuit Ders Portalı — Yerel Geliştirme Sunucusu
Kullanım: python3 serve.py
Ardından tarayıcıda: http://localhost:8080
"""
import http.server, socketserver, webbrowser, os

PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({'.html': 'text/html; charset=utf-8'})

with socketserver.TCPServer(('', PORT), Handler) as httpd:
    url = f'http://localhost:{PORT}'
    print(f'\n  🚀 Devosuit sunucusu: {url}')
    print('  Durdurmak için CTRL+C\n')
    webbrowser.open(url)
    httpd.serve_forever()
