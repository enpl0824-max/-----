@echo off
echo ========================================================
echo Building Sookil Kim Lab Website (Static Export)
echo ========================================================
cd "%~dp0site"
call node_modules\.bin\astro.cmd build
echo.
echo Build completed successfully! Generated files are in '%~dp0dist\'.
pause
