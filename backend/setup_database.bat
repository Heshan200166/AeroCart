@echo off
REM AeroCart Database Setup Script
REM This script creates the database and tables for AeroCart

setlocal enabledelayedexpansion

REM Set MySQL executable path
set MYSQL_PATH="C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe"

REM If MySQL root password is set, add -p parameter
REM Leave blank for no password, or set it here
set MYSQL_PASSWORD=

echo Creating AeroCart database and tables...

if "%MYSQL_PASSWORD%"=="" (
    %MYSQL_PATH% -u root < "c:\Users\User\OneDrive\Desktop\AyuBoo\AeroCart\backend\aerocart_setup.sql"
) else (
    %MYSQL_PATH% -u root -p%MYSQL_PASSWORD% < "c:\Users\User\OneDrive\Desktop\AyuBoo\AeroCart\backend\aerocart_setup.sql"
)

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================
    echo Database setup completed successfully!
    echo ========================================
    echo.
    echo Database: aerocart
    echo Tables: users, flights, bookings, passengers, payments
    echo Sample data inserted.
) else (
    echo.
    echo Error: Database setup failed!
    echo Please check your MySQL connection and try again.
)

pause
