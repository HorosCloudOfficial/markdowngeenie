# MarkdownGeenie by HorosCode
## Startanleitung

## 🚀 Schnellstart

### Desktop-App (Entwicklungsmodus)
Doppelklick auf: **`markdowngeenie.bat`**
- Startet die Desktop-App mit Hot-Reload
- Änderungen werden live übernommen
- Nutzt Tauri (native Windows-App)

### Web-Version (Browser)
Doppelklick auf: **`start-web.bat`**
- Öffnet die App im Browser
- Unter: http://localhost:5173
- Keine Installation nötig

### Production Build erstellen
Doppelklick auf: **`build-exe.bat`**
- Erstellt fertige .exe Datei
- Erstellt Windows Installer (.msi)
- Dauert ~10-15 Minuten beim ersten Mal
- Findet sich dann in: `src-tauri\target\release\bundle\`

## 📦 Output Locations

Nach dem Build findest du:
- **Installer**: `src-tauri\target\release\bundle\msi\MarkdownGeenie_0.1.0_x64_en-US.msi`
- **Standalone EXE**: `src-tauri\target\release\markdown-to-word.exe`

## ⚡ Tipps

- **Erster Start**: Rust-Compilation dauert 5-10 Minuten
- **Weitere Starts**: Nur noch 5-10 Sekunden (gecacht)
- **Probleme**: Lösche `src-tauri\target` und versuch nochmal

## 🛠️ Manuelle Commands

```bash
# Development
npm run tauri:dev    # Desktop-App Development
npm run dev          # Web-Version Development

# Production
npm run tauri:build  # Build Desktop-App
npm run build        # Build Web-Version
```
