@echo off
chcp 65001 >nul
echo ========================================================
echo   THANH ÂM SLI - LƯỢN ^| ĐẨY MÃ NGUỒN LÊN GITHUB
echo ========================================================
echo.
cd /d "%~dp0"
echo Repository: https://github.com/thanhlpph51442-png/H-t-Sli-h-t-L-n-v-d-n-ca-T-y-N-ng
echo.
echo Đang đồng bộ và đẩy mã nguồn lên nhánh main...
echo.
".\.git_bin\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [THÀNH CÔNG] Toàn bộ mã nguồn đã được tải lên GitHub thành công!
) else (
    echo [LƯU Ý] Nếu gặp lỗi xác thực, vui lòng đăng nhập GitHub qua trình duyệt hoặc cung cấp Personal Access Token (PAT).
)
echo.
pause
