# 📝 MarkdownGeenie
### Professioneller Markdown zu Word Konverter
**Ursprünglich entwickelt von [gambadio](https://github.com/gambadio)** | **Weiterentwickelt von HorosCode** 🚀

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Web-lightgrey.svg)

**#Markdown #DOCX #WordConverter #Tauri #SvelteKit #Rust #TypeScript #DesktopApp #WebApp #OpenSource #Deutsch #German #MarkdownToWord #DocumentConverter #NativeApp #CrossPlatform #TailwindCSS #Vite**

</div>

---

## 🎯 Über das Projekt

**MarkdownGeenie** ist eine leistungsstarke Desktop- und Web-Anwendung, die Markdown-Dateien in professionell formatierte Word-Dokumente (.docx) konvertiert. Das Projekt wurde ursprünglich von **[gambadio](https://github.com/gambadio)** als Web-App entwickelt und von **HorosCode** zur nativen Desktop-Anwendung erweitert.

### ✨ Highlights

- 🖥️ **Native Desktop-App** - Gebaut mit Tauri (nur ~4 MB!)
- 🌐 **Web-Version** - Funktioniert auch komplett im Browser
- 🇩🇪 **Deutsche Benutzeroberfläche** - Vollständig lokalisiert
- 🔒 **Datenschutz First** - Alles läuft client-side, keine Server-Uploads
- 🎨 **Professionelle Themes** - Minimal & Elegant mit Dark Mode
- 📑 **Inhaltsverzeichnis** - Automatische TOC-Generierung
- ⚡ **Blitzschnell** - Native Performance dank Rust-Backend

---

## 🚀 Schnellstart

### Desktop-App starten

Einfach Doppelklick auf:
```
markdowngeenie.bat
```

### Oder via Terminal

```bash
# Dependencies installieren (einmalig)
npm install

# Desktop-App (Development)
npm run tauri:dev

# Web-Version (Browser)
npm run dev
```

---

## 🛠️ Tech Stack

### Frontend
- **SvelteKit** - Modernes Web-Framework mit SSR
- **TypeScript** - Typsicherheit im gesamten Projekt
- **Tailwind CSS** - Utility-First Styling
- **Vite** - Lightning-fast Build Tool

### Desktop
- **Tauri 2.0** - Rust-basiertes Framework für native Apps
- **Native APIs** - Windows File Dialogs, System Integration

### Conversion Engine
- **markdown-it** - Markdown Parser mit Plugin-System
- **docx** - Professionelle Word-Dokument-Generierung
- **Plugins**: Anchors, Attributes, Table of Contents

---

## 📦 Features im Detail

### 1️⃣ Mehrere Input-Methoden
- **Drag & Drop** - Dateien einfach ins Fenster ziehen
- **File Browser** - Klassische Dateiauswahl
- **Direkteingabe** - Markdown direkt in Textarea schreiben
- **Multi-File Support** - Mehrere .md Dateien kombinieren

### 2️⃣ Document Themes
**Minimal Theme**
- Calibri Sans-Serif Schrift
- Blaue Akzentfarben
- Modernes, cleanes Design
- Viel Weißraum

**Elegant Theme**
- Georgia Serif Überschriften
- Violette Akzentfarben
- Klassische Typografie
- Professioneller Look

### 3️⃣ Markdown Features
- ✅ Überschriften (H1-H6) mit individuellen Styles
- ✅ **Fett**, *kursiv*, ~~durchgestrichen~~
- ✅ Listen (geordnet & ungeordnet)
- ✅ Code-Blöcke mit Syntax-Highlighting Info
- ✅ Tabellen mit Headers & Borders
- ✅ Blockquotes mit Theme-Styling
- ✅ Horizontale Linien
- ✅ Links & Bilder

### 4️⃣ Desktop-Funktionen
- **Native Save Dialog** - Windows-Standard Datei-Speichern Dialog
- **Ordner & Dateinamen wählen** - Volle Kontrolle über Speicherort
- **Hot Reload** - Code-Änderungen live sichtbar
- **Keyboard Shortcuts** - Effiziente Bedienung
- **System Integration** - Fühlt sich an wie native Software

---

## 📂 Projektstruktur

```
markdowngeenie/
├── src/
│   ├── lib/
│   │   ├── components/        # Svelte Komponenten
│   │   │   ├── ConvertButton.svelte
│   │   │   ├── DropZone.svelte
│   │   │   ├── TextArea.svelte
│   │   │   ├── ThemeSelector.svelte
│   │   │   └── Toast.svelte
│   │   ├── utils/
│   │   │   ├── converter.ts   # Markdown → DOCX Engine
│   │   │   ├── converter.test.ts
│   │   │   └── tauri.ts       # Desktop Integration
│   │   ├── stores.ts          # Svelte Stores
│   │   └── types.ts           # TypeScript Typen
│   ├── routes/                # SvelteKit Routes
│   │   └── +page.svelte       # Hauptseite
│   └── app.css                # Globales Styling & Themes
├── src-tauri/                 # Tauri Desktop Backend
│   ├── src/
│   │   └── main.rs           # Rust Entry Point
│   ├── tauri.conf.json       # Tauri Konfiguration
│   └── Cargo.toml            # Rust Dependencies
├── tests/                     # E2E Tests
├── markdowngeenie.bat        # Desktop-App Starter
├── build-exe.bat             # Production Build
└── start-web.bat             # Web-Version Starter
```

---

## 🎨 Themes erweitern

Neue Themes in `src/app.css` definieren:

```css
/* Custom Theme */
:root {
  --theme-custom-bg: #f0f0f0;
  --theme-custom-text: #333333;
  --theme-custom-heading: #000000;
  --theme-custom-accent: #ff6600;
  --theme-custom-border: #cccccc;
}

[data-theme="custom"] .theme-bg { background-color: var(--theme-custom-bg); }
[data-theme="custom"] .theme-text { color: var(--theme-custom-text); }
/* ... weitere Styles */
```

Dann in `ThemeSelector.svelte` hinzufügen.

---

## 🔌 Markdown Plugins hinzufügen

In `src/lib/utils/converter.ts`:

```typescript
import myPlugin from 'markdown-it-my-plugin';

const md = new MarkdownIt()
  .use(markdownItAttrs)
  .use(markdownItAnchor)
  .use(myPlugin, { 
    // Plugin Optionen
  });
```

---

## 🏗️ Production Build

### Desktop Installer erstellen

```bash
npm run tauri:build
```

**Output:**
- `src-tauri/target/release/markdown-to-word.exe` (Standalone)
- `src-tauri/target/release/bundle/msi/MarkdownGeenie_0.1.0_x64_de-DE.msi` (Installer)

### Web-Version deployen

```bash
npm run build
```

Statische Dateien in `build/` für Hosting (Vercel, Netlify, etc.)

---

## 🧪 Testing

```bash
# Unit Tests
npm run test

# E2E Tests (Playwright)
npm run test:integration

# Type Checking
npm run check

# Linting
npm run lint
```

---

## 🎯 Entwicklungsgeschichte

### Von [gambadio](https://github.com/gambadio) entwickelt (Original):

#### Core Web-Anwendung
- ✅ SvelteKit Projekt-Setup mit TypeScript
- ✅ Markdown-it Integration mit Plugins
- ✅ DOCX Generation mit professionellen Styles
- ✅ Theme-System (Minimal & Elegant)
- ✅ Drag & Drop File Upload
- ✅ Live Markdown Editor
- ✅ Browser-basierte Konvertierung

### Von HorosCode weiterentwickelt:

#### Phase 1: Desktop Integration
- ✅ Tauri 2.0 Integration für native Windows-App
- ✅ Native Windows Save Dialog (statt Browser-Download)
- ✅ Hot Reload Development Setup
- ✅ Rust Backend Compilation
- ✅ .bat Starter Scripts (markdowngeenie.bat, build-exe.bat, start-web.bat)

#### Phase 2: Lokalisierung & Branding
- ✅ Komplette deutsche Übersetzung aller UI-Komponenten
- ✅ HorosCode Branding Integration
- ✅ Custom Window Titles
- ✅ Footer & Credits
- ✅ Umfassende deutsche Dokumentation (README, START-ANLEITUNG.md)
- ✅ Production Build Setup (.exe Generierung)

---

## 🔧 Konfiguration

### Tauri Permissions

File System Zugriff in `tauri.conf.json`:

```json
{
  "plugins": {
    "fs": {
      "scope": ["$DOWNLOAD/**", "$DOCUMENT/**"]
    }
  }
}
```

### Vite Config

File Watcher Settings in `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    watch: {
      ignored: ['**/src-tauri/**']  // Wichtig für Tauri!
    }
  }
});
```

---

## 🐛 Troubleshooting

### Port bereits belegt
```bash
# Prozess auf Port 5173 beenden
npx kill-port 5173
```

### Rust Compilation Fehler
```bash
# Target Ordner löschen und neu kompilieren
rm -rf src-tauri/target
npm run tauri:dev
```

### Vite File Watcher Fehler
Stelle sicher, dass `vite.config.ts` das `src-tauri` Verzeichnis ignoriert.

---

## 🏷️ Topics & Keywords

### Technologien
`svelte` `sveltekit` `tauri` `rust` `typescript` `javascript` `vite` `tailwindcss` `markdown-it` `docx` `nodejs` `pnpm` `npm`

### Funktionen
`markdown` `word` `docx` `converter` `markdown-to-word` `document-converter` `desktop-app` `web-app` `native-app` `cross-platform` `file-converter` `markdown-parser` `document-generation`

### Kategorien
`productivity` `tools` `utilities` `open-source` `german` `deutsch` `windows` `electron-alternative` `lightweight` `offline-first` `privacy` `client-side`

---

## 📝 Lizenz

MIT License - siehe LICENSE Datei

---

## 👨‍💻 Entwickler

**Original-Entwickler:** [gambadio](https://github.com/gambadio)
- Original-Repo: [gambadio/markdowngeenie](https://github.com/gambadio/markdowngeenie)

**Weiterentwicklung:** HorosCode ([@HorosCloudOfficial](https://github.com/HorosCloudOfficial))
- Desktop-Version: [HorosCloudOfficial/markdowngeenie](https://github.com/HorosCloudOfficial/markdowngeenie)

---

## 🙏 Credits & Danksagungen

**Frameworks & Libraries:**
- [Tauri](https://tauri.app/) - Native Desktop Framework (Rust)
- [SvelteKit](https://kit.svelte.dev/) - Web Application Framework
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown Parser
- [docx](https://docx.js.org/) - Word Document Generation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling

**Original-Entwickler:**
- Danke an [gambadio](https://github.com/gambadio) für die exzellente Web-App-Grundlage!

---

<div align="center">

**Ursprünglich entwickelt von [gambadio](https://github.com/gambadio)** | **Desktop-Version von HorosCode**

⭐ **Star** das Projekt wenn es dir gefällt!

[⬆ Nach oben](#-markdowngeenie)

</div>