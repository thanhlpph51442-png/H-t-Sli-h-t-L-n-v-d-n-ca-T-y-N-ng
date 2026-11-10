# THANH ÂM SLI – LƯỢN | DI SẢN DÂN CA TÀY NÙNG

> **Slogan:** *“Lưu giữ tiếng hát – Gìn giữ hồn văn hóa Tày Nùng”*

---

## 1. Giới thiệu tổng quan

Cổng thông tin và không gian số hóa **“THANH ÂM SLI – LƯỢN | DI SẢN DÂN CA TÀY NÙNG”** được xây dựng nhằm sưu tầm, lưu giữ, bảo tồn và giới thiệu những làn điệu dân ca truyền thống đặc sắc của hai dân tộc Tày và Nùng tại khu vực miền núi Đông Bắc Việt Nam (Cao Bằng, Lạng Sơn, Bắc Kạn, Tuyên Quang, Hà Giang).

Dự án cung cấp một hệ thống tư liệu số hoàn chỉnh, bao gồm lời ca nguyên bản bằng tiếng dân tộc, phiên âm ngữ âm tiếng Việt, bản dịch thơ truyền cảm, hệ thống âm thanh phục dựng cao độ chuẩn ngũ cung đàn Tính và lối hát đối bè tự nhiên của người Nùng.

---

## 2. Cấu trúc và Kiến trúc Dự án

```
c:\tuần3\
├── index.html                  # Giao diện chính Master Portal chuẩn Semantic HTML5 & Responsive
├── styles.css                  # Hệ thống thiết kế Design System mang đậm bản sắc thổ cẩm Tày - Nùng
├── data.js                     # Cơ sở dữ liệu di sản (12+ bài ca, 5 vùng văn hóa, 7 chuyên mục diễn xướng, từ điển)
├── audio-engine.js             # Bộ xử lý âm thanh Web Audio API (Mô phỏng Đàn Tính, hát đối bè Sli, Visualizer)
├── app.js                      # Bộ điều khiển giao diện (Lọc đa năng, tìm kiếm, modal 3 cột, lưu yêu thích)
├── README.md                   # Tài liệu hướng dẫn và giới thiệu di sản
└── assets/
    ├── images/
    │   ├── tay-nung-pattern.svg    # Hoa văn thổ cẩm quả trám & hoa hồi Tày Nùng
    │   ├── dan-tinh-hero.svg       # Vector Đàn Tính (Tính tẩu), tua rua đỏ & chùm xóc nhạc
    │   ├── cao-bang-banner.svg     # Thác Bản Giốc & non nước Cao Bằng
    │   ├── lang-son-banner.svg     # Xứ Lạng, Chợ Kỳ Lừa & vách đá Sli Giang
    │   ├── bac-kan-banner.svg      # Thuyền đuôi én Hồ Ba Bể & Chợ tình Xuân Dương
    │   ├── tuyen-quang-banner.svg  # Dòng sông Gâm xanh biếc & Chiêm Hóa
    │   └── ha-giang-banner.svg     # Ruộng bậc thang Hoàng Su Phì & Sli Nùng Dín
    └── icons/
```

---

## 3. Các Chức Năng Chính Của Website

### 1. Thư viện lời ca 3 cột độc lập (Lyrics Comparator)
- Hiển thị bài hát đồng thời qua 3 cột đối sánh:
  1. **Tiếng dân tộc nguyên bản** (chữ Tày/Nùng Latinh và Nôm Tày).
  2. **Phiên âm tiếng Việt** (hướng dẫn cách phát âm và thanh điệu chuẩn xác).
  3. **Bản dịch nghĩa tiếng Việt** (thơ văn vần giàu cảm xúc).
- Tùy chỉnh kích thước chữ hiển thị (Nhỏ / Vừa / Lớn).
- Công cụ **Sao chép lời ca** tích hợp dấu bản quyền di sản và nguồn trích dẫn văn hóa tự động.
- Bộ lọc đa tiêu chí: tìm kiếm tức thì theo từ khóa, lọc theo thể loại (Sli / Lượn) và theo 5 tỉnh thành.

### 2. Trình phát âm thanh di sản (Audio Player Engine)
- Trình phát âm thanh cố định dưới đáy màn hình hoạt động mượt mà:
  + Phát / Tạm dừng (Play / Pause).
  + Tua tiến 5 giây / Tua lùi 5 giây.
  + Chuyển bài trước / Bài kế tiếp trong danh sách phát (Playlist Queue).
  + Lặp lại bài hát (Loop mode).
  + Tùy chỉnh tốc độ phát (0.75x, 1.0x, 1.25x, 1.5x) tiện lợi cho việc học hát.
  + Thanh trượt tiến trình kéo thả (Interactive Scrubber) và điều chỉnh âm lượng.
  + **Visualizer sóng âm thực tế** hiển thị trên Canvas HTML5 theo thời gian thực.
  + Tích hợp bộ tổng hợp âm thanh **Web Audio API** phục dựng tiếng Đàn Tính (Tính tẩu 2 dây) và hiệu ứng hát bè Sli đối thanh (Bắt lờn & Táng lờn).

### 3. Chú giải bối cảnh diễn xướng & Phong tục hát đối
- 7 chuyên đề nghiên cứu văn hóa dân gian sâu sắc:
  1. Hát giao duyên nam nữ – Tiếng lòng tự tình qua núi non nương rẫy.
  2. Hát đối đáp nhóm nam - nữ – Nghệ thuật đa thanh độc đáo của Sli.
  3. Hát trong lễ hội truyền thống – Hội Lồng Tồng & Hội Nàng Hai cầu mùa.
  4. Hát tại chợ phiên và sinh hoạt cộng đồng – Chợ tình Kỳ Lừa & Xuân Dương.
  5. Không gian và thời điểm diễn xướng – Triền đồi, vách đá & mái sàn bên bếp lửa.
  6. Ý nghĩa văn hóa & Giá trị trao truyền đạo lý làm người.
  7. **Quy trình 6 chặng chuẩn mực của một cuộc hát đối đáp:**
     - Chặng 1: Hát Chào & Khai Khẩu (Slương thán / Khai khẩu)
     - Chặng 2: Hát Dò Hỏi & Làm Quen (Lượn rà / Sli ták)
     - Chặng 3: Hát Khen Cảnh & Khen Người
     - Chặng 4: Hát Đối Đố (Sli đố / Lượn đố - Thử tài trí tuệ)
     - Chặng 5: Hát Giãi Bày Tình Cảm & Hẹn Ước (Lượn kết đon / Sli slương)
     - Chặng 6: Hát Tạ Từ & Dặn Dò Lúc Rạng Đông (Sli pác slán / Lượn khảm slao)

### 4. Khám phá văn hóa theo 5 vùng miền Đông Bắc
- **Cao Bằng:** Cái nôi Lượn Cọi, Lượn Slương, Then Tính và Lễ hội Nàng Hai.
- **Lạng Sơn:** Thủ phủ Sli Giang, Sli Sình Làng và Chợ phiên Kỳ Lừa.
- **Bắc Kạn:** Cội nguồn Lượn Then Ba Bể và Phiên chợ tình kỳ thú Xuân Dương (mùng 5 tháng 3 âm lịch).
- **Tuyên Quang:** Vùng đất Lượn Cọi Chiêm Hóa và Lượn Quan Làng vượt dải chỉ đỏ trong đám cưới Tày.
- **Hà Giang:** Tiếng hát Sli Nùng Dín và Lượn Then giữa ruộng bậc thang Hoàng Su Phì.

### 5. Đóng góp tư liệu cộng đồng (Community Heritage Submission)
- Biểu mẫu trực tuyến cho phép các nhà nghiên cứu, nghệ nhân và người dùng đóng góp bài ca mới.
- Dữ liệu được lưu trữ an toàn trong `localStorage` trình duyệt và cập nhật ngay vào thư viện.

---

## 4. Hướng Dẫn Trải Nghiệm Website

1. **Khởi chạy trực tiếp:**
   - Mở tệp `index.html` bằng bất kỳ trình duyệt web hiện đại nào (Microsoft Edge, Google Chrome, Mozilla Firefox, Safari...).
   - Không yêu cầu cài đặt server Node.js hay Python phức tạp, hoàn toàn tương thích và chạy độc lập offline.

2. **Các phím tắt hỗ trợ:**
   - Phím **Space (Cách):** Bật / Tắt phát bài hát.
   - Phím **Escape (Esc):** Đóng các bảng xem lời ca hoặc bảng đóng góp.

---

## 5. Bản Quyền & Trân Trọng Di Sản

Dự án tuân thủ nghiêm ngặt nguyên tắc tôn trọng quyền tác giả và quyền cộng đồng sở hữu di sản phi vật thể:
- Lời ca và làn điệu đều được trích dẫn nguồn sưu tầm rõ ràng từ các công trình nghiên cứu điền dã của Hội Văn nghệ Dân gian Việt Nam, Sở Văn hóa Thể thao và Du lịch các tỉnh Cao Bằng, Lạng Sơn, Bắc Kạn, Tuyên Quang, Hà Giang cùng các Nghệ nhân Nhân dân, Nghệ nhân Ưu tú vùng Đông Bắc.
- Website phục vụ mục đích giáo dục, bảo tồn và lan tỏa phi thương mại.

