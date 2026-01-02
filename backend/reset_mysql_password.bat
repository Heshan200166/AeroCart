@echo off
REM MySQL Password Reset Script for Windows

echo ================================================
echo MySQL Root Password Reset
echo ================================================
echo.

REM Stop MySQL Service
echo Stopping MySQL Service...
net stop MySQL80
timeout /t 2 /nobreak >nul

REM Start MySQL in safe mode (skip grant tables)
echo Starting MySQL in safe mode...
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqld" --console --skip-grant-tables --shared-memory

REM In another terminal, run:
REM mysql -u root
REM FLUSH PRIVILEGES;
REM ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';
REM exit;

echo.
echo ================================================
echo Instructions:
echo 1. Open a NEW Command Prompt window as Administrator
echo 2. Run: mysql -u root
echo 3. Run: FLUSH PRIVILEGES;
echo 4. Run: ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';
echo 5. Run: exit;
echo 6. Close this window (Ctrl+C)
echo 7. Restart MySQL service normally
echo ================================================

pause
