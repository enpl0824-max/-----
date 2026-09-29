@echo off
echo ========================================================
echo Starting Sookil Kim Lab Website (Local Development Server)
echo ========================================================
cd "%~dp0site"
call node_modules\.bin\astro.cmd dev --host
pause
