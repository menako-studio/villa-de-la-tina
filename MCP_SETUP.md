# Konfigurasi MCP Server untuk Villa de Latina

## Koneksi Figma MCP Server

GitHub Copilot telah dikonfigurasi untuk terhubung dengan Figma MCP Server lokal di `http://127.0.0.1:3845/mcp`.

### Cara Menggunakan

1. Pastikan Figma MCP Server lokal Anda berjalan di port 3845
2. Restart VS Code untuk memuat konfigurasi MCP
3. GitHub Copilot sekarang dapat mengakses data Figma melalui MCP server

### Tools Figma MCP yang Tersedia

Dengan koneksi ini, GitHub Copilot dapat:
- Mengambil design context dari Figma
- Generate kode UI berdasarkan desain Figma
- Mendapatkan screenshot dari komponen Figma
- Mengakses metadata dan variabel desain
- Mendapatkan informasi Code Connect dari Figma

### Testing Koneksi

Anda bisa mencoba dengan perintah seperti:
- "Generate komponen berdasarkan design Figma di [URL]"
- "Ambil screenshot dari node Figma [node-id]"
- "Buat kode dari design system Figma"

### Keamanan

File konfigurasi MCP telah ditambahkan ke `.gitignore` untuk memastikan kredensial lokal tidak terpush ke repository.
