@echo off
echo ========================================
echo  MarkdownGeenie by HorosCode
echo  Build Production EXE
echo ========================================
echo.
echo This will create a production build...
echo The installer will be in: src-tauri\target\release\bundle
echo.
pause

npm run tauri:build

echo.
echo ========================================
echo  Build Complete!
echo ========================================
echo.
echo Your .exe installer is located at:
echo src-tauri\target\release\bundle\msi\MarkdownGeenie_0.1.0_x64_en-US.msi
echo.
echo Or standalone .exe at:
echo src-tauri\target\release\markdown-to-word.exe
echo.
pause
