@echo off
chcp 65001 >nul
title ĐẨY MÃ NGUỒN LÊN GITHUB - THANH ÂM SLI - LƯỢN
echo =======================================================================
echo     CỔNG DI SẢN THANH ÂM SLI - LƯỢN ^| ĐỒNG BỘ MÃ NGUỒN GITHUB
echo =======================================================================
echo.
cd /d "%~dp0"
set "PATH=%~dp0.git_bin\cmd;%~dp0.git_bin\mingw64\bin;%PATH%"

echo Kho lưu trữ đích:
echo https://github.com/thanhlpph51442-png/H-t-Sli-h-t-L-n-v-d-n-ca-T-y-N-ng
echo.
echo [Lựa chọn 1] Nếu bạn có sẵn GitHub Personal Access Token (PAT):
echo Nhập hoặc dán token (dạng ghp_...) vào bên dưới rồi nhấn Enter.
echo.
echo [Lựa chọn 2] Hoặc chỉ cần nhấn Enter để Git nhắc nhập tài khoản:
set /p TOKEN=">> GitHub Token: "

if not "%TOKEN%"=="" (
    echo.
    echo Đang cấu hình URL xác thực bằng Token...
    git remote set-url origin https://%TOKEN%@github.com/thanhlpph51442-png/H-t-Sli-h-t-L-n-v-d-n-ca-T-y-N-ng.git
)

echo.
echo Đang đẩy mã nguồn lên nhánh main...
echo.
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo =======================================================================
    echo   [THÀNH CÔNG] Toàn bộ mã nguồn đã được tải lên GitHub thành công!
    echo   Kiểm tra tại: https://github.com/thanhlpph51442-png/H-t-Sli-h-t-L-n-v-d-n-ca-T-y-N-ng
    echo =======================================================================
) else (
    echo.
    echo =======================================================================
    echo   [HƯỚNG DẪN TẠO TOKEN]
    echo   1. Truy cập: https://github.com/settings/tokens
    echo   2. Chọn "Generate new token (classic)", tích chọn quyền "repo"
    echo   3. Sao chép mã token và chạy lại tệp này để dán vào.
    echo =======================================================================
)
echo.
pause
