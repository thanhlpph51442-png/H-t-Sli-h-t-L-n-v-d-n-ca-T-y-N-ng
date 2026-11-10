/**
 * DỮ LIỆU DI SẢN DÂN CA TÀY - NÙNG
 * Dự án: THANH ÂM SLI - LƯỢN | DI SẢN DÂN CA TÀY NÙNG
 * Bản quyền tư liệu & bảo tồn văn hóa truyền thống các dân tộc Việt Nam
 */

const HERITAGE_DATA = {
  // THÔNG TIN CHUNG
  siteInfo: {
    title: "THANH ÂM SLI – LƯỢN",
    subtitle: "DI SẢN DÂN CA TÀY NÙNG",
    slogan: "Lưu giữ tiếng hát – Gìn giữ hồn văn hóa Tày Nùng",
    description: "Cổng thông tin số hóa, lưu trữ và tôn vinh các làn điệu hát Sli, hát Lượn và dân ca truyền thống của cộng đồng người Tày và người Nùng vùng Đông Bắc Việt Nam.",
    established: "2026",
    organization: "Dự án Bảo tồn Di sản Diễn xướng Dân gian Việt Bắc"
  },

  // DANH SÁCH BÀI DÂN CA (SLI, LƯỢN, THEN...)
  songs: [
    {
      id: "song-01",
      title: "Lượn Slương – Hoa Nở Nhớ Bạn Hiền",
      genre: "Lượn",
      subGenre: "Lượn Slương (Lượn thương)",
      ethnic: "Tày",
      region: "Cao Bằng",
      district: "Huyện Trùng Khánh & Quảng Hòa",
      artisan: "Nghệ nhân Ưu tú Nông Thị Thược (truyền khẩu)",
      collector: "Ban Văn hóa Dân gian Cao Bằng (sưu tầm 1986, bổ chú 2024)",
      source: "Kho tàng Văn học Dân gian Tày - Nùng Cao Bằng, NXB Văn hóa Dân tộc",
      recordDate: "1994 (Phục dựng âm thanh số hóa 2024)",
      recordType: "Bản ghi âm điền dã mẫu (Web Audio phục dựng cao độ)",
      duration: "03:42",
      audioNote: "Giai điệu Lượn Slương cổ truyền, nhịp tự do (rubato), âm giai ngũ cung Tày mang sắc thái trầm bổng, bâng khuâng da diết.",
      audioPreset: "luon_sluong",
      summary: "Khúc Lượn Slương tiêu biểu trong đêm hội xuân. Chàng trai và cô gái giãi bày niềm thương nỗi nhớ khi thấy cành đào, cành mận nở trắng sườn non, hẹn ước trọn đời son sắt như vách đá Trùng Khánh.",
      context: "Hát trong đêm trăng sáng bên bếp lửa nhà sàn hoặc lán nương, nam nữ ngồi hai bên chiếu hoa, hát đối thâu đêm đến sáng tỏ.",
      tags: ["Giao duyên", "Lượn Slương", "Cao Bằng", "Tình ca", "Hội xuân"],
      // Lời ca 3 cột
      lyrics: {
        original: [
          "Bắt mừ sli khéc mạy tàng quai,",
          "Đon cọi pết bươn vọng hẳm vài.",
          "Khéc sli bươn slám hoa nở trảng,",
          "Slương tởi khóp pi ngỏ đảy bái.",
          "Nặm khoong lộng chảy khảm bjoóc mạ,",
          "Nỏ dẳm cằm sli rẳm táng tàng.",
          "Tưới nẩy hẳm nhằng vừ slương khéc,",
          "Pắc mừ pác slán thán ngài lai."
        ],
        phonetic: [
          "Bắt mừ sli khéc mạy tàng quai,",
          "Đon cọi pết bươn vọng hẳm vài.",
          "Khéc sli bươn slám hoa nở trảng,",
          "Slương tởi khóp pi ngỏ đảy bái.",
          "Nặm khoong lộng chảy khảm bioóc mạ,",
          "Nỏ dẳm cằm sli rẳm táng tàng.",
          "Tưới nẩy hẳm nhằng vừ slương khéc,",
          "Pắc mừ pác slán thán ngài lai."
        ],
        translation: [
          "Nắm tay khách quý bước chung đường dặm dài,",
          "Khúc lượn cọi giăng mùng tám tháng giêng vương vấn lòng.",
          "Khách đến tháng ba khi hoa nở trắng đồi nương,",
          "Thương nhau trọn kiếp, lòng này xin khắc ghi.",
          "Dòng nước nguồn trong vắt luồn qua vạt hoa rực rỡ,",
          "Bước chân dừng lại ngập ngừng lắng tiếng sli ngân nga.",
          "Đêm nay trăng nghiêng mái sàn còn vương thương nhớ khách,",
          "Lời trao câu giã bạn bịn rịn tới tận ban mai."
        ]
      }
    },
    {
      id: "song-02",
      title: "Sli Giang – Tiếng Hát Chợ Xuân Kỳ Lừa",
      genre: "Sli",
      subGenre: "Sli Giang (Hát nhiều bè Nùng Giang)",
      ethnic: "Nùng",
      region: "Lạng Sơn",
      district: "Huyện Văn Quan & Thành phố Lạng Sơn",
      artisan: "Nghệ nhân Dân gian Hoàng Văn Ván, Lương Thị Kính",
      collector: "Hội Văn học Nghệ thuật Tỉnh Lạng Sơn (Tập hợp điền dã)",
      source: "Hát Then, Lượn, Sli xứ Lạng - Sở VHTTDL Lạng Sơn, 2012",
      recordDate: "2003 (Bản số hóa di sản phi vật thể)",
      recordType: "Bản ghi âm diễn xướng đối bè nguyên bản",
      duration: "04:15",
      audioNote: "Đặc trưng hát bè Sli không nhạc cụ: bè chính dẫn điệu, bè phụ hát đuổi cao hơn một quãng ba hoặc quãng năm tự nhiên, tạo âm hưởng vang rền như vách đá vọng lại.",
      audioPreset: "sli_giang",
      summary: "Khúc ca chào hỏi và đối đáp trong phiên chợ Kỳ Lừa mùng 2 tháng 2 âm lịch. Các bạn hát từ các bản làng vượt dốc núi gặp nhau nơi phố chợ, cất giọng thử tài đọ sắc.",
      context: "Diễn xướng ngoài trời ở chợ phiên, trên cầu Kỳ Cùng, triền dốc đá vôi hoặc bãi cỏ ven làng; hai tốp nam - nữ đứng đối diện nhau cách vài bước chân.",
      tags: ["Đối đáp", "Sli Giang", "Lạng Sơn", "Chợ phiên", "Hát bè"],
      lyrics: {
        original: [
          "Kỳ Lừa bươn di rộn tàng phuôn,",
          "Sli Giang táng lờn vắng lẳm buôn.",
          "Khảm nặm khảm khe mạy pền cặp,",
          "Bắt lờn dở pát chập slương chuôn.",
          "Áo chàm vằn nẩy xôm lăng xỉnh,",
          "Khăn thêu xanh đỏ dệt công tình.",
          "Chợ vãn người tan lòng chửa nỡ,",
          "Ngẩng nhìn vách núi bóng nghiêng trông."
        ],
        phonetic: [
          "Kỳ Lừa bươn di rộn tàng phuôn,",
          "Sli Giang táng lờn vắng lẳm buôn.",
          "Khảm nặm khảm khe mạy pền cặp,",
          "Bắt lờn dở pát chập slương chuôn.",
          "Áo chàm vằn nẩy xôm lăng xỉnh,",
          "Khăn thêu xanh đỏ dệt công tình.",
          "Chợ vãn người tan lòng chửa nỡ,",
          "Ngẩng nhìn vách núi bóng nghiêng trông."
        ],
        translation: [
          "Chợ Kỳ Lừa tháng hai tấp nập khách bốn phương,",
          "Khúc Sli Giang cất lên bè trầm bè bổng vang xa thung lũng.",
          "Vượt thác băng ghềnh nay tìm về sum họp sánh đôi,",
          "Bè xướng bè theo hòa nhịp tình thương lưu luyến.",
          "Áo chàm hôm nay sao thấy đẹp đượm màu duyên dáng,",
          "Chiếc khăn thêu hoa sắc thắm dệt bao nỗi lòng.",
          "Chợ chiều dẫu vãn người về lòng còn chửa nỡ,",
          "Trông lên vách núi đá vôi bóng người còn dùng dằng."
        ]
      }
    },
    {
      id: "song-03",
      title: "Lượn Cọi – Thác Bản Giốc Ngân Cung Đàn Tính",
      genre: "Lượn",
      subGenre: "Lượn Cọi (Dân tộc Tày)",
      ethnic: "Tày",
      region: "Cao Bằng",
      district: "Huyện Trùng Khánh (Bản Giốc - Đàm Thủy)",
      artisan: "Nghệ nhân Nhân dân Hoàng Triều & Đội Then bản Giốc",
      collector: "Trung tâm Bảo tồn Văn hóa Dân gian Việt Bắc",
      source: "Tuyển tập Ca khúc & Dân ca Tày Cao Bằng",
      recordDate: "2018 (Thu âm phòng thu bảo tồn văn hóa)",
      recordType: "Bản thu thanh có đệm đàn Tính tẩu và xóc nhạc",
      duration: "03:18",
      audioNote: "Điệu Tính tẩu 2 dây trầm bổng, giai điệu dạt dào như thác đổ, lời hát mềm mại nhấn vuốt đậm chất chữ tình vùng núi đá biên cương.",
      audioPreset: "dan_tinh_coi",
      summary: "Ca ngợi vẻ đẹp hùng vĩ của Thác Bản Giốc và tình cảm sắt son của đồng bào người Tày với non sông bờ cõi, gửi gắm lời yêu qua tiếng đàn Tính bầu.",
      context: "Diễn xướng trong các dịp mừng công, đón khách quý đến thăm bản, hội hoa hạt dẻ và sinh hoạt gia đình bên khung cửi.",
      tags: ["Lượn Cọi", "Đàn Tính", "Bản Giốc", "Cao Bằng", "Tình quê hương"],
      lyrics: {
        original: [
          "Nặm Thoong lộng chảy khảm slung đao,",
          "Tính tẩu ngân nga tiệng ngọt ngào.",
          "Bươn dỉ lồng tồng lăng bản bẩu,",
          "Pác khảm lời sli gửi ước ao.",
          "Cần Tày hẳm slướng then pút pết,",
          "Cần nương dệt cửi dệt tình sâu.",
          "Bản Giốc nghìn năm còn dội mãi,",
          "Tiếng lượn quê hương thấu mây cao."
        ],
        phonetic: [
          "Nặm Thoong lộng chảy khảm slung đao,",
          "Tính tẩu ngân nga tiệng ngọt ngào.",
          "Bươn dỉ lồng tồng lăng bản bẩu,",
          "Pác khảm lời sli gửi ước ao.",
          "Cần Tày hẳm slướng then pút pết,",
          "Cần nương dệt cửi dệt tình sâu.",
          "Bản Giốc nghìn năm còn dội mãi,",
          "Tiếng lượn quê hương thấu mây cao."
        ],
        translation: [
          "Dòng thác Bản Giốc tuôn cuồn cuộn qua vách đá cao ngất,",
          "Cây đàn Tính bầu buông tiếng đàn ngọt ngào ngân vang.",
          "Tháng hai rủ nhau đi hội Lồng Tồng sau làng mở,",
          "Đôi bờ môi cất câu đối lượn gửi gắm biết bao ước ao.",
          "Người Tày đêm khuya nhớ tiếng then câu pút tha thiết,",
          "Người con gái ngồi bên khung cửi dệt trọn mối thâm tình.",
          "Thác ngọc ngàn năm còn ngân nga réo rắt,",
          "Tiếng lượn quê hương bay vút thấu tầng mây biên cương."
        ]
      }
    },
    {
      id: "song-04",
      title: "Sli Sình Làng – Đêm Trăng Bên Bếp Lửa Nhà Sàn",
      genre: "Sli",
      subGenre: "Sli Sình Làng (Sli trữ tình giao lưu)",
      ethnic: "Nùng",
      region: "Lạng Sơn",
      district: "Huyện Cao Lộc & Huyện Lộc Bình",
      artisan: "Nghệ nhân Hà Thị Dậu, Lương Văn Thưởng",
      collector: "Chi hội Di sản Văn hóa Xứ Lạng",
      source: "Di sản Diễn xướng Dân gian Nùng Phàn Slình",
      recordDate: "2015 (Ghi âm thực địa)",
      recordType: "Bản thu âm trực tiếp tại nhà sàn truyền thống",
      duration: "03:55",
      audioNote: "Lối hát trầm ấm, sâu lắng, tiết tấu chậm rãi như hơi thở của màn đêm rừng núi, người hát lấy hơi dài và luyến láy vi tế.",
      audioPreset: "sli_sinh_lang",
      summary: "Cuộc hát bên bếp lửa hồng nhà sàn khi màn sương buông xuống bản. Khách đến chơi nhà, chủ khách cùng nâng chén rượu ngô men lá, cất lời ca đượm nghĩa tình hiếu khách.",
      context: "Hát trong không gian nhà sàn ấm cúng, mùa đông và mùa xuân bên bếp lửa trung tâm; hai tốp ngồi đối diện nhau qua mâm trà shan tuyết.",
      tags: ["Sli Sình Làng", "Lạng Sơn", "Bếp lửa", "Giao duyên", "Hiếu khách"],
      lyrics: {
        original: [
          "Bếp lửa nhà sàn than đỏ hoe,",
          "Khách sang thăm bản tiếng lượn che.",
          "Rượu ngô men lá cay đầu lưỡi,",
          "Sli Sình Làng hát chẳng muốn về.",
          "Pác mạy nả sàn trăng vằng vặc,",
          "Đá núi vươn cao tạc dạ ghi.",
          "Hôm nay hạnh ngộ bên bếp lửa,",
          "Mai này chia cách dạ hoài nghi."
        ],
        phonetic: [
          "Bếp lửa nhà sàn than đỏ hoe,",
          "Khách sang thăm bản tiệng lượn che.",
          "Lẩu khảu mèn lả cay thâng lưỡi,",
          "Sli Sình Làng khiếu chắng muống pày.",
          "Pác mạy nả sàn trăng vằng vặc,",
          "Phia đá vươn cao tạc dạ ghi.",
          "Vằn nẩy hạnh ngộ then bếp lửa,",
          "Mường ngoài xa xôi dạ hoài ghi."
        ],
        translation: [
          "Bếp than nhà sàn thắp ánh đỏ ấm nồng đêm lạnh,",
          "Khách quý ghé thăm bản mang theo tiếng lượn rộn ràng.",
          "Chén rượu ngô ủ men lá thơm cay nơi đầu lưỡi,",
          "Lời Sli Sình Làng ngân mãi khiến khách bước chẳng muốn về.",
          "Trước bao lơn nhà sàn trăng rọi sáng trong ngần,",
          "Vách đá sừng sững ngàn năm xin chứng giám tấm lòng son.",
          "Đêm nay tao ngộ vui vầy bên đốm lửa sưởi ấm,",
          "Ngày mai đường xa dặm thẳm mong người đừng quên nhau."
        ]
      }
    },
    {
      id: "song-05",
      title: "Lượn Nàng Hai – Mời Tiên Giáng Trần Cầu Mùa",
      genre: "Lượn",
      subGenre: "Lượn Nàng Hai (Nghi lễ & giao duyên)",
      ethnic: "Tày",
      region: "Cao Bằng",
      district: "Huyện Phục Hòa & Huyện Thạch An",
      artisan: "Bà Then Đinh Thị Dậu cùng đội Nàng Hai Tiên Thành",
      collector: "Viện Nghiên cứu Âm nhạc Dân tộc Việt Nam",
      source: "Lễ hội Nàng Hai di sản phi vật thể quốc gia - Hồ sơ tư liệu 2017",
      recordDate: "2019 (Thu âm nghi lễ lễ hội)",
      recordType: "Bản thu nghi lễ dân gian thực tế",
      duration: "04:30",
      audioNote: "Nhịp điệu dập dờn cánh quạt giấy, tiếng gõ xóc nhạc rộn ràng theo nhịp chân bước uyển chuyển của các thiếu nữ Tày trong vai các tiên nữ.",
      audioPreset: "luon_nang_hai",
      summary: "Lời ca trong lễ hội Nàng Hai (Nàng Mẹ Trăng) vào tháng Giêng và tháng Hai âm lịch. Hát mời các nàng Tiên trên trời hạ phàm giúp dân bản xua đuổi dịch bệnh, làm cho mùa màng tươi tốt, ngô trĩu bắp, lúa trĩu bông.",
      context: "Diễn xướng tại nhà sàn Nàng Hai và sân đình bãi cỏ trước làng trong lễ tiễn Nàng Hai về trời.",
      tags: ["Lễ hội Nàng Hai", "Cao Bằng", "Nghi lễ", "Cầu mùa", "Múa quạt"],
      lyrics: {
        original: [
          "Lạy Mẹ Nàng Hai giáng thế gian,",
          "Gió đưa dải áo dạo mây ngàn.",
          "Ban cho lúa nương bông vàng trĩu,",
          "Ban cho dòng suối mát trong tràn.",
          "Bjoóc bjoóc mạy xuân chồi nở rộ,",
          "Lượn câu mừng bạn đón tiên sang.",
          "Lòng dân bản Tày lòng trong sáng,",
          "Giữ trọn đạo trời đức chứa chan."
        ],
        phonetic: [
          "Lạy Mẹ Nàng Hai giáng thế gian,",
          "Lồm pắt dải áo dạo mây ngàn.",
          "Hẳm hẩư khảu nương bông vàng trĩu,",
          "Hẳm hẩư nặm suối mát trong tràn.",
          "Bioóc bioóc mạy xuân chồi nở rộ,",
          "Lượn cằm mừng bạn đón tiên sang.",
          "Lòng cần bản Tày lòng trảng lẻ,",
          "Nỏ dẳm đạo phua đức chứa chan."
        ],
        translation: [
          "Chúng con kính lạy Mẹ Nàng Hai từ cung mây giáng xuống trần,",
          "Làn gió xuân lay nhẹ tà áo chàm bay bổng giữa mây ngàn.",
          "Cúi xin Người ban cho nương lúa trĩu hạt vàng óng ả,",
          "Xin ban cho dòng suối nguồn tuôn nước mát nuôi bãi ngô khoai.",
          "Muôn hoa rừng nở rộ đón mùa xuân tươi thắm khắp bản làng,",
          "Cất câu lượn trong trẻo mừng đón các nàng Tiên ngự giá.",
          "Tấm lòng người Tày mộc mạc như cây rừng suối mát,",
          "Nguyện giữ trọn lòng thành kính và đức nghĩa dài lâu."
        ]
      }
    },
    {
      id: "song-06",
      title: "Sli Chợ Tình Xuân Dương – Hẹn Bạn Mùng Năm Tháng Ba",
      genre: "Sli",
      subGenre: "Sli Nùng Phan Slinh (Hát hội)",
      ethnic: "Nùng",
      region: "Bắc Kạn",
      district: "Huyện Na Rì (Xã Xuân Dương)",
      artisan: "Cụ Nông Văn Báo & Nghệ nhân Lường Thị Vui",
      collector: "Trung tâm Văn hóa Tỉnh Bắc Kạn",
      source: "Chợ tình Xuân Dương - Nét đẹp văn hóa dân tộc Nùng Na Rì",
      recordDate: "2021 (Thu âm hiện trường mùng 5/3 âm lịch)",
      recordType: "Bản thu hiện trường ngày hội chợ tình",
      duration: "04:02",
      audioNote: "Chất giọng da diết, trầm bổng của các nghệ nhân cao tuổi hát gặp lại bạn tình xưa sau bao năm xa cách. Bè hát quyện vào nhau tạo không gian hoài niệm xúc động sâu sắc.",
      audioPreset: "sli_xuan_duong",
      summary: "Chợ tình Xuân Dương mùng 5 tháng 3 âm lịch là phiên chợ độc nhất vô nhị vùng Đông Bắc. Những người từng yêu nhau nhưng không lấy được nhau được phép gặp lại, cùng uống chén rượu và hát Sli giãi bày nỗi niềm mà không ai ghen tuông.",
      context: "Hát ven suối, dưới bóng râm hàng rào đá, bậc thềm trường học hoặc góc chợ phiên Xuân Dương.",
      tags: ["Chợ tình Xuân Dương", "Sli Na Rì", "Bắc Kạn", "Ngoại tình nhân văn", "Tình bạn xưa"],
      lyrics: {
        original: [
          "Bươn slám vằn hở gặp lại bạn,",
          "Tóc đã pha sương mắt lệ tràn.",
          "Sli câu dở dang xưa chửa dứt,",
          "Nay mượn chén cay sẻ nỗi lòng.",
          "Đường về bản anh xa cách núi,",
          "Đường sang bản em cách trùng đèo.",
          "Gặp nhau chỉ hát câu ân nghĩa,",
          "Trời đất chứng cho dạ chẳng phai."
        ],
        phonetic: [
          "Bươn slám vằn hở gặp lại bạn,",
          "Khảu slở pha sương mắt lệ tràn.",
          "Sli cằm dở dang xưa chửa dứt,",
          "Vằn nẩy mượn lẩu sẻ nỗi lòng.",
          "Tàng thâng bản pỉ xa phia núi,",
          "Tàng thâng bản nọng khảm trùng đèo.",
          "Chập lờn chỉ khiếu cằm ân nghĩa,",
          "Trời phua chứng hẩư dạ chẳng phai."
        ],
        translation: [
          "Tháng ba mùng năm hẹn gặp lại người bạn cũ thuở hàn vi,",
          "Mái tóc nay đã pha màu sương trắng lệ rưng khóe mi.",
          "Câu Sli giang dở ngày xưa chưa kịp tỏ bầy tròn trịa,",
          "Hôm nay mượn chén rượu cay nâng lên để sẻ chia nỗi lòng.",
          "Đường về bản chàng cách mấy quả núi đá trập trùng,",
          "Đường sang bản thiếp vượt qua bao nhiêu ngọn đèo dốc thẳm.",
          "Chỉ mong gặp lại để hát cùng nhau câu tình nghĩa thủy chung,",
          "Trời xanh đất mẹ chứng giám cho lòng này trước sau như một."
        ]
      }
    },
    {
      id: "song-07",
      title: "Lượn Cọi Chiêm Hóa – Gửi Lòng Vào Nước Sông Gâm",
      genre: "Lượn",
      subGenre: "Lượn Cọi Na Hang - Chiêm Hóa",
      ethnic: "Tày",
      region: "Tuyên Quang",
      district: "Huyện Chiêm Hóa & Huyện Na Hang",
      artisan: "Nghệ nhân Ma Văn Đức & Câu lạc bộ Hát Cọi Chiêm Hóa",
      collector: "Sở Văn hóa Thể thao và Du lịch Tuyên Quang",
      source: "Dân ca các dân tộc Tuyên Quang, 2016",
      recordDate: "2020 (Bản thu phòng âm thanh di sản)",
      recordType: "Bản ghi âm chất lượng cao",
      duration: "03:36",
      audioNote: "Giai điệu cọi êm ả, nhịp điệu thong dong như mái chèo khua trên sóng nước sông Gâm xanh biếc, luyến láy ngọt ngào ở các từ cuối câu.",
      audioPreset: "dan_tinh_coi",
      summary: "Lời tự tình của người con gái Tày Chiêm Hóa tựa cửa sổ nhà sàn nhìn xuống dòng sông Gâm bồng bềnh mây trắng, gửi gắm tiếng lòng đến người thương đang dọn nương làm rẫy.",
      context: "Hát trong sinh hoạt hằng ngày, lúc dệt vải, làm nương ngô ven hồ sinh thái hoặc trong đêm văn nghệ bản văn hóa du lịch.",
      tags: ["Lượn Cọi", "Tuyên Quang", "Sông Gâm", "Trữ tình", "Chiêm Hóa"],
      lyrics: {
        original: [
          "Sông Gâm nước chảy trong xanh biếc,",
          "Thuyền ai lững lờ trôi lướt êm.",
          "Tính tẩu buông lơi câu Lượn Cọi,",
          "Gửi trọn niềm thương đến bạn hiền.",
          "Rừng Chiêm Hóa ngát hương chè búp,",
          "Đất Thổ Bình dâu thắm ruộng nương.",
          "Hẹn bạn ngày mai mùa gặt mới,",
          "Về cùng xướng lượn kết duyên lành."
        ],
        phonetic: [
          "Nặm Gâm lộng chảy trong xanh biếc,",
          "Pè pác lững lờ trôi lướt êm.",
          "Tính tẩu buông lơi cằm Lượn Cọi,",
          "Gửi trọn niềm thương đến bạn hiền.",
          "Đung Chiêm Hóa ngát chè búp thơm,",
          "Thổ Bình mạ dâu thắm ruộng nương.",
          "Hẹn bạn vằn mai mùa khảu mới,",
          "Mạy cọi xướng lượn kết duyên lành."
        ],
        translation: [
          "Nước dòng sông Gâm cuộn chảy một màu ngọc bích trong ngần,",
          "Chiếc bè mảng của ai lững lờ trôi êm đềm giữa đôi bờ vách đá.",
          "Ngón tay buông lơi trên phím đàn Tính tẩu gieo điệu lượn cọi,",
          "Gửi trao trọn vẹn nỗi niềm thương mến tới người bạn hiền nơi xa.",
          "Rừng Chiêm Hóa ngào ngạt hương búp chè xanh vừa hái,",
          "Đất Thổ Bình bãi dâu xanh mướt trải dài ven triền nương.",
          "Xin hẹn người thương ngày mai khi mùa lúa mới chín vàng rực rỡ,",
          "Cùng trở về dưới mái sàn xướng câu lượn kết mối lương duyên."
        ]
      }
    },
    {
      id: "song-08",
      title: "Sli Nùng Dín – Tiếng Vọng Hoàng Su Phì",
      genre: "Sli",
      subGenre: "Sli Nùng Dín (Sli ruộng bậc thang)",
      ethnic: "Nùng",
      region: "Hà Giang",
      district: "Huyện Hoàng Su Phì & Xín Mần",
      artisan: "Nghệ nhân Thào Seo Sùng, Vàng Thị Hoa",
      collector: "Hội Văn nghệ Dân gian Tỉnh Hà Giang",
      source: "Văn hóa dân gian các dân tộc vùng cao Tây Côn Lĩnh",
      recordDate: "2018 (Thu âm thực địa vùng cao)",
      recordType: "Bản ghi âm giọng hát mộc tự nhiên",
      duration: "04:10",
      audioNote: "Âm vực cao vút, âm hưởng đặc thù của người vùng núi dốc cao: tiếng vang xuyên qua thung lũng mây mù, bè luyến sắc sảo và rắn rỏi.",
      audioPreset: "sli_giang",
      summary: "Khúc Sli mộc mạc của chàng trai cô gái Nùng Dín bên những thửa ruộng bậc thang kỳ vĩ dưới chân đỉnh Tây Côn Lĩnh trong mùa lúa chín.",
      context: "Hát gọi nhau từ bờ ruộng này sang quả đồi kia, hoặc khi nghỉ trưa dưới bóng cây cổ thụ giữa nương ngô.",
      tags: ["Sli Nùng Dín", "Hà Giang", "Hoàng Su Phì", "Ruộng bậc thang", "Mây ngàn"],
      lyrics: {
        original: [
          "Tây Côn Lĩnh đỉnh mây che phủ,",
          "Ruộng bậc thang vàng rực nắng hoe.",
          "Em đứng đỉnh dốc cất tiếng hát,",
          "Anh bên triền núi dạ ngóng nghe.",
          "Tiếng Sli Nùng Dín vút tầng không,",
          "Gửi chén rượu nồng sưởi gió đông.",
          "Dẫu cách đèo cao nghìn trắc trở,",
          "Lòng này son sắt một tấm lòng."
        ],
        phonetic: [
          "Tây Côn Lĩnh đỉnh mây che phủ,",
          "Slương ruộng vàng rực nắng ấm hoe.",
          "Nọng nả đỉnh dốc cất tiệng hát,",
          "Pỉ nả phia đá dạ ngóng nghe.",
          "Tiệng Sli Nùng Dín vút tầng không,",
          "Gửi chén rượu nồng sưởi gió đông.",
          "Dẫu khảm đèo cao ngàn trắc trở,",
          "Dạ nẩy son sắt một tấm lòng."
        ],
        translation: [
          "Đỉnh núi Tây Côn Lĩnh quanh năm mây mù bao phủ trắng xóa,",
          "Những bậc thang vàng rực đón ánh nắng trưa rạng rỡ.",
          "Em gái đứng trên mỏm dốc cất vang câu Sli Nùng Dín,",
          "Chàng trai bên sườn đá chăm chú lắng nghe từng nhịp bè.",
          "Tiếng hát bay vút qua đại ngàn mây trắng chạm tới trời xanh,",
          "Gửi trao chén rượu ngô ấm nồng xua đi giá lạnh mùa đông.",
          "Dẫu phải vượt qua bao dốc đèo gian nan cách trở lối,",
          "Tấm lòng này vẫn son sắt một niềm tin trọn vẹn yêu thương."
        ]
      }
    },
    {
      id: "song-09",
      title: "Lượn Quan Làng – Hát Trải Chiếu Chắn Cổng Cưới",
      genre: "Lượn",
      subGenre: "Lượn Quan Làng (Hát nghi lễ hôn nhân)",
      ethnic: "Tày",
      region: "Tuyên Quang",
      district: "Huyện Hàm Yên & Yên Sơn",
      artisan: "Nghệ nhân Ưu tú Ma Văn Phóng",
      collector: "Sở VHTT&DL Tuyên Quang & Viện Dân tộc học",
      source: "Nghi lễ chu kỳ đời người của dân tộc Tày Việt Bắc",
      recordDate: "2016 (Ghi âm nghi lễ đám cưới truyền thống)",
      recordType: "Bản thu thanh nghi lễ có đối đáp Quan Làng và Mẹ Đón",
      duration: "04:45",
      audioNote: "Lối hát trịnh trọng, âm thanh ngân nga theo thể thơ thất ngôn lượn, mang tính chất ứng khẩu đối tài thông minh, khéo léo.",
      audioPreset: "luon_sluong",
      summary: "Một trong những chặng hát gay cấn và hóm hỉnh nhất trong đám cưới Tày: Ông Quan Làng (đại diện nhà trai) dùng tài ứng đối thơ lượn để vượt qua hàng rào sợi chỉ đỏ và những câu đố hóc búa của họ nhà gái để xin vào nhà rước dâu.",
      context: "Diễn xướng ngay trước bậc thang nhà sàn họ nhà gái khi đoàn rước dâu nhà trai tới cửa.",
      tags: ["Lượn Quan Làng", "Đám cưới Tày", "Nghi lễ", "Tuyên Quang", "Đối đáp trí tuệ"],
      lyrics: {
        original: [
          "Bên nhà trai sửa lễ sang thưa,",
          "Vượt trăm con suối chẳng ngại mưa.",
          "Xin rào chỉ tháo lối bậc thang,",
          "Cho chú rể bước vào bái quỳ.",
          "Nhà gái giăng câu đố cửa nhà,",
          "Muốn đón dâu hiền tài phải qua.",
          "Lượn câu thông tuệ tròn đạo lễ,",
          "Rót chén rượu hồng kết thông gia."
        ],
        phonetic: [
          "Phía quan làng sửa lễ sang thưa,",
          "Khảm bách khe suối nỏ ngài mưa.",
          "Slỉnh rào chỉ tháo tàng bậc thang,",
          "Hẩư chàng rể bước bái quỳ nhà.",
          "Phía mế đón giăng cằm đố khảm,",
          "Muốn đón dâu hiền tài phải qua.",
          "Lượn cằm thông tuệ tròn đạo lễ,",
          "Rót lẩu chén hồng kết thông gia."
        ],
        translation: [
          "Phái đoàn quan làng nhà trai kính cẩn sắm sửa trầu cau sang thưa chuyện,",
          "Vượt qua trăm con suối ngàn ngọn đồi chẳng quản ngại gió mưa.",
          "Kính xin họ nhà gái tháo dải chỉ hồng chắn ngang đầu cầu thang,",
          "Để cho chàng rể hiền được bước lên nhà sàn bái lạy tổ tiên họ ngoại.",
          "Bà Mế Đón nhà gái buông câu lượn đối đố thử lòng khách quý,",
          "Muốn đón được bông hoa dâu hiền thì tài thơ trí tuệ phải vượt qua.",
          "Quan Làng cất lời lượn đối đáp tinh thông trọn vẹn phép tắc gia phong,",
          "Đôi bên cùng nâng chén rượu hồng mừng kết mối lương duyên thông gia bền chặt."
        ]
      }
    },
    {
      id: "song-10",
      title: "Sli Poóng Lèng – Hát Mừng Nhà Mới Trên Nương",
      genre: "Sli",
      subGenre: "Sli Poóng Lèng (Sli sinh hoạt Nùng)",
      ethnic: "Nùng",
      region: "Lạng Sơn",
      district: "Huyện Bình Gia & Huyện Bắc Sơn",
      artisan: "Nghệ nhân Nông Văn Hùng, Hoàng Thị May",
      collector: "Bảo tàng Tỉnh Lạng Sơn",
      source: "Dân ca và nghi lễ Nùng Cháo xứ Lạng, 2014",
      recordDate: "2017 (Thu âm lễ mừng nhà mới)",
      recordType: "Bản thu âm điền dã",
      duration: "03:50",
      audioNote: "Nhịp điệu dồn dập, rộn rã, thể hiện niềm hân hoan chúc phúc cho chủ nhà dựng được mái sàn vững chãi, thóc ngô đầy bồ.",
      audioPreset: "sli_giang",
      summary: "Khúc ca mừng nhà mới của người Nùng. Anh em họ hàng và bạn bè khắp mường kéo đến chung vui, hát đối đáp chúc gia chủ ấm no, lợn gà đầy chuồng, con cháu phương trưởng.",
      context: "Hát trong đêm khánh thành nhà sàn mới, cả bản tụ họp quanh bếp than đượm nồng từ tối đến sáng hôm sau.",
      tags: ["Sli Poóng Lèng", "Nhà mới", "Lạng Sơn", "Nùng Cháo", "Chúc phúc"],
      lyrics: {
        original: [
          "Dựng cột lim vững tựa ngọn phia,",
          "Lợp lá cọ che trọn nắng mưa.",
          "Mừng bác mừng anh nhà mới sáng,",
          "Bồ thóc bồ ngô chất đầy thừa.",
          "Tiếng Sli rộn rã chén rượu nâng,",
          "Chúc mẹ chúc cha hưởng phúc lành.",
          "Cả bản hôm nay say câu lượn,",
          "Đón ánh bình minh chiếu rọi cành."
        ],
        phonetic: [
          "Dựng cột lim vững tựa ngọn phia,",
          "Lợp lá cọ che trọn nắng mưa.",
          "Mừng bác mừng anh rườn mới trảng,",
          "Lủng khảu lủng ngô chất đầy thừa.",
          "Tiệng Sli rộn rã lẩu chén nâng,",
          "Chúc mế chúc pỉ hưởng phúc lành.",
          "Cả bản vằn nẩy say cằm lượn,",
          "Đón ánh bình minh chiếu rọi cành."
        ],
        translation: [
          "Dựng bốn cột lim to vững chãi như chân ngọn núi đá vôi,",
          "Lợp trăm tấm lá cọ dày che chở cho gia đình qua bao mùa nắng mưa.",
          "Xin chúc mừng gia đình dựng xong ngôi nhà sàn mới rạng rỡ thơm mùi gỗ,",
          "Mong bồ thóc bồ ngô lúc nào cũng đầy ắp không bao giờ vơi cạn.",
          "Tiếng Sli ngân nga hòa cùng tiếng cụng chén rượu thơm men lá,",
          "Cầu chúc cho ông bà cha mẹ trường thọ vẹn toàn phúc đức.",
          "Cả bản làng hôm nay say trong men rượu và say trong câu hát,",
          "Cùng thức đón ánh bình minh rạng rỡ soi qua từng khe vách nhà sàn."
        ]
      }
    },
    {
      id: "song-11",
      title: "Lượn Hà Lều – Tiếng Gọi Bạn Hồ Ba Bể",
      genre: "Lượn",
      subGenre: "Lượn Hà Lều (Dân tộc Tày Bắc Kạn)",
      ethnic: "Tày",
      region: "Bắc Kạn",
      district: "Huyện Ba Bể (Xã Nam Mẫu, Khang Ninh)",
      artisan: "Nghệ nhân Nông Thị Kính & Nghệ nhân Dương Văn Bằng",
      collector: "Khu Bảo tồn Thiên nhiên Ba Bể & Sở VHTT Bắc Kạn",
      source: "Văn hóa truyền thống cư dân ven hồ Ba Bể",
      recordDate: "2019 (Ghi âm trên hồ Ba Bể)",
      recordType: "Bản thu âm điền dã tiếng hát trên mặt nước",
      duration: "03:40",
      audioNote: "Hát mộc trên thuyền độc mộc (thuyền đuôi én), âm thanh vang vọng giữa mặt hồ phẳng lặng như gương và vách núi đá vôi dựng đứng.",
      audioPreset: "dan_tinh_coi",
      summary: "Giai điệu Lượn Hà Lều khỏe khoắn, phóng khoáng của chàng trai Tày khua mái chèo độc mộc trên sóng nước hồ Ba Bể, gọi bạn gái bên bờ Pác Ngòi cùng cất lời hòa giọng.",
      context: "Hát trong những buổi chèo thuyền đánh cá đêm trăng, hái nấm hái măng trên rừng hoặc lễ hội Lồng Tồng Ba Bể mùng 9 tháng Giêng.",
      tags: ["Lượn Hà Lều", "Hồ Ba Bể", "Bắc Kạn", "Thuyền độc mộc", "Pác Ngòi"],
      lyrics: {
        original: [
          "Ba Bể mặt hồ phẳng lặng soi,",
          "Thuyền đuôi én lướt nhẹ êm trôi.",
          "Hà Lều cất tiếng vang vách đá,",
          "Gợi mối tình xưa dạ bồi hồi.",
          "Đảo Bà Góa sương mờ buông lãng đãng,",
          "Rừng nguyên sinh ngào ngạt hương hoa.",
          "Ta đợi người thương từ thuở nọ,",
          "Mái chèo gác lại hát cùng ta."
        ],
        phonetic: [
          "Slam Pé mặt hồ phẳng lặng soi,",
          "Pè pác lướt nhẹ êm đềm trôi.",
          "Hà Lều cất tiệng vang phia đá,",
          "Gợi mối tình xưa dạ bồi hồi.",
          "Đảo Bà Góa sương mờ buông lãng đãng,",
          "Đung ngút ngàn thơm ngát hương hoa.",
          "Khoan đợi người thương từ thuở nọ,",
          "Mái chèo gác lại khiếu cùng ta."
        ],
        translation: [
          "Mặt hồ Ba Bể xanh biếc phẳng lặng như tấm gương trời soi bóng núi,",
          "Chiếc thuyền đuôi én độc mộc lướt nhẹ lướt êm qua làn khói sương.",
          "Khúc Lượn Hà Lều cất lên vang vọng vào vách đá ngút ngàn,",
          "Làm bồi hồi xao xuyến bao kỷ niệm thân thương của ngày đầu gặp gỡ.",
          "Đảo Bà Góa huyền thoại ẩn hiện trong sương sớm bồng bềnh,",
          "Đại ngàn rừng nguyên sinh tỏa hương hoa dại thơm mát lòng người.",
          "Ta vẫn đứng bên bến đợi người thương từ bao mùa con nước,",
          "Hãy gác mái chèo lại cùng ta hát khúc ân tình tri âm."
        ]
      }
    },
    {
      id: "song-12",
      title: "Sli Phan Slinh – Khúc Hát Giã Bạn Lúc Rạng Đông",
      genre: "Sli",
      subGenre: "Sli Phan Slinh (Hát giã bạn tạ từ)",
      ethnic: "Nùng",
      region: "Lạng Sơn",
      district: "Huyện Cao Lộc & Huyện Văn Lãng",
      artisan: "Nghệ nhân Triệu Thị Mai, Hoàng Văn Khang",
      collector: "Hội đồng Di sản Văn hóa Phi vật thể Quốc gia",
      source: "Tuyển tập Sli Nùng Phan Slinh - NXB Văn hóa Thông tin",
      recordDate: "2013 (Thu âm phòng thu bảo tồn âm nhạc)",
      recordType: "Bản thu thanh hoàn chỉnh có lời giải nghĩa",
      duration: "04:22",
      audioNote: "Giai điệu tạ từ bịn rịn, xúc động sâu lắng. Bè xướng bè táng quyện chặt vào nhau như không muốn dứt, mô phỏng tiếng gà gáy sáng gọi người về.",
      audioPreset: "sli_giang",
      summary: "Khúc hát chia tay khi cuộc hát đối giao duyên thâu đêm sắp tàn, ánh rạng đông le lói phía chân trời. Chàng trai cô gái dặn dò nhau giữ gìn sức khỏe, hẹn ngày hội sau lại gặp gỡ.",
      context: "Diễn ra vào canh năm khi gà gáy sáng gọi ngày mới, tại ngã ba đường bản hoặc chân dốc đá chia tay nhau về làng.",
      tags: ["Sli Phan Slinh", "Giã bạn", "Lạng Sơn", "Chia tay", "Bịn rịn"],
      lyrics: {
        original: [
          "Gà gáy canh năm giục giã rồi,",
          "Sao mai lấp lánh đỉnh đồi soi.",
          "Cầm tay bịn rịn dời chân bước,",
          "Ngoảnh lại nhìn nhau lệ ngắn dài.",
          "Đường về bản em hoa mận rụng,",
          "Đường sang bản anh dốc quanh co.",
          "Khăn áo trao nhau làm kỷ vật,",
          "Hẹn mùa xuân sau chớ hững hờ."
        ],
        phonetic: [
          "Cáyขัน canh năm giục giã rồi,",
          "Đao mai lấp lánh đỉnh đồi soi.",
          "Cầm mừ bịn rịn dời chân bước,",
          "Ngoảnh lại nhìn nhau lệ ngắn dài.",
          "Tàng thâng bản nọng bioóc mận rụng,",
          "Tàng thâng bản pỉ dốc quanh co.",
          "Khăn slở trao nhau làm kỷ vật,",
          "Hẹn mùa bươn xuân chớ hững hờ."
        ],
        translation: [
          "Tiếng gà rừng gáy sáng gọi canh năm giục giã bước chân rồi,",
          "Ánh sao mai lấp lánh soi rạng trên đỉnh đồi mờ tỏ sương mai.",
          "Nắm lấy bàn tay nhau dùng dằng bịn rịn chẳng nỡ dời bước,",
          "Cứ đi một quãng lại ngoảnh nhìn theo khóe mắt rưng rưng lệ nhòa.",
          "Con đường về bản em hoa mận hoa mơ đang rụng trắng lối đi,",
          "Con đường sang bản anh vượt qua bao nhiêu con dốc quanh co.",
          "Xin trao cho nhau chiếc khăn thêu và chiếc áo chàm làm kỷ vật thiêng liêng,",
          "Hẹn mùa xuân sau ngày hội làng mở lại về đây hát đối đừng hững hờ phụ nhau."
        ]
      }
    }
  ],

  // 5 VÙNG VĂN HÓA ĐẶC TRƯNG
  regions: [
    {
      id: "reg-caobang",
      name: "Cao Bằng",
      title: "Cái nôi Lượn Cọi, Lượn Slương và Lễ hội Nàng Hai",
      ethnicGroups: ["Tày (chủ đạo)", "Nùng An", "Nùng Giang", "Nùng Inh"],
      bannerImage: "assets/images/cao-bang-banner.svg",
      intro: "Cao Bằng được xem là cái nôi rực rỡ bậc nhất của văn hóa Lượn Tày và Then tính. Từ những thung lũng đá vôi Trùng Khánh, Quảng Hòa, Bảo Lạc đến dòng thác Bản Giốc hùng vĩ, tiếng hát Lượn Slương, Lượn Cọi và những đêm Then say đắm lòng người đã thấm sâu vào huyết quản mỗi người con quê hương.",
      distinctStyle: "Lượn Cao Bằng mang tính chất trữ tình sâu lắng, chuộng thể thơ thất ngôn lượn (7 chữ gieo vần trắc - bằng đan xen). Tiết tấu mềm mại, có sự kết hợp tài tình giữa hát mộc và hát đệm đàn Tính tẩu.",
      signatureGenres: ["Lượn Slương Trùng Khánh", "Lượn Cọi Bản Giốc", "Lượn Nàng Hai Phục Hòa", "Hát Then Nghi lễ"],
      customsAndFestivals: [
        "Lễ hội Nàng Hai (Tiên Thành, Phục Hòa) - Di sản phi vật thể quốc gia.",
        "Hội Lồng Tồng (Xuống đồng) mùng 4, mùng 8 tháng Giêng.",
        "Hát giao duyên thâu đêm suốt sáng bên bếp lửa nhà sàn đá Trùng Khánh.",
        "Tập tục trao túi thêu và khăn chàm đính chỉ ngũ sắc khi kết duyên."
      ],
      prominentArtisans: [
        "Nghệ nhân Nhân dân Hoàng Triều (Nghệ nhân đàn Tính, hát Then)",
        "Nghệ nhân Ưu tú Nông Thị Thược (Bậc thầy truyền khẩu Lượn Slương)",
        "Nghệ nhân Đinh Thị Dậu (Chủ lễ Nàng Hai Phục Hòa)"
      ],
      story: "Truyền thuyết kể rằng, cây đàn Tính của người Tày xưa có tới 12 dây, tiếng đàn cất lên làm chim rừng ngừng bay, cá suối ngừng bơi, tiên nữ trên trời say đắm hạ phàm quên đường về. Thần Bụt thấy thế sợ trần gian mải mê nghe đàn bỏ bê đồng áng nên rút bớt chỉ để lại 2 hoặc 3 dây. Nhưng với 2 dây tơ mộc mạc và quả bầu già, tiếng Tính quê hương Cao Bằng vẫn rung lên muôn cung bậc ái ân, cùng lời Lượn ngân vang qua nghìn năm lịch sử."
    },
    {
      id: "reg-langson",
      name: "Lạng Sơn",
      title: "Thủ phủ Sli Giang, Sli Sình Làng và Chợ phiên Kỳ Lừa",
      ethnicGroups: ["Nùng (Nùng Cháo, Nùng Phàn Slinh, Nùng Inh, Nùng Dín)", "Tày"],
      bannerImage: "assets/images/lang-son-banner.svg",
      intro: "Xứ Lạng là miền đất di sản trác tuyệt của các làn điệu Sli Nùng. Không giống bất kỳ hình thức dân ca nào khác ở Việt Nam, hát Sli xứ Lạng là lối hát bè mộc mạc tự nhiên không cần đàn sáo, dựa vào sự hòa quyện tuyệt đỉnh giữa bè cao và bè trầm của hai nhóm nam - nữ.",
      distinctStyle: "Hát đa thanh (polyphony) dân gian độc đáo. Lối xướng - xô nhịp nhàng: một người cất giọng bắt điệu (bắt lờn), người kia theo bè cao hoặc bè đuổi (táng lờn), tạo ra hiệu ứng âm vang như tiếng vách đá thung lũng vọng lại.",
      signatureGenres: ["Sli Giang Văn Quan", "Sli Sình Làng Cao Lộc", "Sli Phan Slinh Lộc Bình", "Hát Lượn Sloong Hao", "Hát Then xứ Lạng"],
      customsAndFestivals: [
        "Hội Chùa Tam Thanh - Nhị Thanh mùng 15 tháng Giêng.",
        "Chợ phiên Kỳ Lừa mùng 2, mùng 7 âm lịch - Nơi hội tụ các hội hát Sli nổi tiếng.",
        "Lễ hội Lồng Tồng truyền thống xã Tú Đoạn (Lộc Bình).",
        "Tục thử giọng và thi tài hát đối đáp đố chữ của trai gái hai mường."
      ],
      prominentArtisans: [
        "Nghệ nhân Dân gian Hoàng Văn Ván (Bậc thầy Sli Giang)",
        "Nghệ nhân Lương Thị Kính (Lưu giữ hàng trăm bài Sli cổ)",
        "Nghệ nhân Hà Thị Dậu (Truyền dạy Sli Sình Làng)"
      ],
      story: "Người Nùng xứ Lạng truyền rằng, xưa kia trai bản gái mường yêu nhau nhưng cách đèo trở núi, không có đàn sáo, họ đứng trên hai đỉnh đồi cất tiếng hát gọi nhau. Để tiếng hát bay xa qua thung lũng đá tai mèo, một người hát cao, một người hát trầm nâng đỡ hơi cho nhau. Từ tiếng gọi tình tha thiết ấy, lối hát đối bè Sli ra đời, trở thành báu vật văn hóa tinh thần không thể thiếu của người Nùng Xứ Lạng."
    },
    {
      id: "reg-backan",
      name: "Bắc Kạn",
      title: "Cội nguồn Lượn Then Ba Bể và Phiên chợ tình kỳ thú Xuân Dương",
      ethnicGroups: ["Tày", "Nùng (Nùng Phan Slinh)", "Dao", "Mông"],
      bannerImage: "assets/images/bac-kan-banner.svg",
      intro: "Bắc Kạn - cái nôi cách mạng Chiến khu Việt Bắc - lưu giữ không gian diễn xướng huyền bí quanh Hồ Ba Bể mộng mơ và phiên chợ tình Xuân Dương có một không hai. Tại đây, đồng bào Tày, Nùng sống quây quần, cùng gìn giữ những điệu Lượn Then cổ kính và điệu Sli nồng ấm nghĩa tình.",
      distinctStyle: "Tiết tấu Lượn Hà Lều và Then Ba Bể vừa khoan thai, vừa phóng khoáng, phản chiếu nét tĩnh lặng của mặt hồ và sự hiểm trở của rừng nguyên sinh. Giai điệu mộc mạc, gần gũi với đời sống lao động chèo thuyền, đánh cá.",
      signatureGenres: ["Lượn Hà Lều Ba Bể", "Sli Chợ Tình Xuân Dương", "Hát Then Nam Mẫu", "Lượn Cọi Ngân Sơn"],
      customsAndFestivals: [
        "Chợ tình Xuân Dương (Huyện Na Rì) vào mùng 5 tháng 3 âm lịch.",
        "Lễ hội Lồng Tồng Ba Bể mùng 9, mùng 10 tháng Giêng.",
        "Hát đối đáp trên thuyền đuôi én độc mộc giữa lòng hồ Ba Bể.",
        "Nghi lễ Cấp sắc Then và mừng nhà mới bằng điệu Lượn cổ."
      ],
      prominentArtisans: [
        "Cụ Nông Văn Báo (Nghệ nhân trao truyền Sli Xuân Dương)",
        "Nghệ nhân Nông Thị Kính (Đội Then cổ truyền Ba Bể)",
        "Nghệ nhân Dương Văn Bằng (Nhà nghiên cứu sưu tầm dân ca Tày)"
      ],
      story: "Chợ tình Xuân Dương mùng 5 tháng 3 âm lịch bắt nguồn từ câu chuyện tình cảm động của đôi trai tài gái sắc Nùng xưa yêu nhau nhưng không thể thành vợ thành chồng vì tập quán môn đăng hộ đối. Trước khi mỗi người một ngả, họ hẹn nhau cứ ngày này hằng năm sẽ về bãi cỏ Xuân Dương để hát Sli cho nhau nghe. Phong tục ấy được cả cộng đồng ủng hộ, trở thành ngày hội nhân văn cao đẹp: vợ hoặc chồng đi gặp người yêu cũ để hát Sli, cùng ôn lại kỷ niệm mà không một lời oán trách, ghen tuông."
    },
    {
      id: "reg-tuyenquang",
      name: "Tuyên Quang",
      title: "Vùng đất Lượn Cọi Chiêm Hóa và Lượn Quan Làng đặc sắc",
      ethnicGroups: ["Tày (dân số đông nhất)", "Nùng", "Dao", "Sán Chay"],
      bannerImage: "assets/images/tuyen-quang-banner.svg",
      intro: "Tuyên Quang - vùng đất ngã ba sông Lô và sông Gâm - là trung tâm văn hóa nổi tiếng với các câu lạc bộ hát Cọi, hát Lượn và Then Tày. Nơi đây đặc biệt nổi tiếng với nghi lễ hát Lượn Quan Làng trong đám cưới Tày và lối hát Cọi trữ tình ven dòng sông Gâm xanh mướt.",
      distinctStyle: "Lượn Cọi Tuyên Quang có sự đằm thắm, ngân nga kéo dài ở những từ cuối câu; lối hát Quan Làng đòi hỏi tính ứng khẩu sắc sảo, dùng từ ngữ cổ thanh tao, phép tắc nghiêm cẩn theo nghi thức truyền thống.",
      signatureGenres: ["Lượn Cọi Sông Gâm", "Lượn Quan Làng Nghi lễ Hôn nhân", "Hát Then Lâm Bình", "Hát Then Đập Bồ Lúa Mới"],
      customsAndFestivals: [
        "Lễ hội Lồng Tồng huyện Lâm Bình và Na Hang.",
        "Tục hát đối Quan Làng xin trải chiếu, vượt dải lụa đỏ đón dâu.",
        "Hội hát Then - Đàn Tính truyền thống các dân tộc Tày Tuyên Quang.",
        "Giao lưu hát Cọi bên bếp lửa nhà sàn homestay Thượng Lâm."
      ],
      prominentArtisans: [
        "Nghệ nhân Ưu tú Ma Văn Đức (Cây đại thụ nghiên cứu di sản Tày)",
        "Nghệ nhân Hà Thị Tá (Bậc thầy hát Cọi Na Hang)",
        "Nghệ nhân Ma Văn Phóng (Bậc thầy hát Quan Làng Hàm Yên)"
      ],
      story: "Trong đám cưới Tày ở Chiêm Hóa, ông Quan Làng nhà trai không chỉ là người dẫn lễ mà phải là một 'thi nhân dân gian'. Nhà gái dựng một chiếc cổng bằng tre nứa và chăng sợi chỉ đỏ, phía trong là các mẹ các chị tài hoa buông những câu lượn hóc búa hỏi về cội nguồn trời đất, sự tích cây cau buồng trầu. Ông Quan Làng phải ứng khẩu xuất thần, câu nào cũng gieo vần lượn chuẩn xác mới được phép bước lên cầu thang. Đó là cuộc đua tài trí tuệ và văn hóa ứng xử đầy tự hào của đồng bào Tày."
    },
    {
      id: "reg-hagiang",
      name: "Hà Giang",
      title: "Tiếng hát Sli Nùng Dín và Lượn Then trên cao nguyên đá",
      ethnicGroups: ["Tày (Bắc Mê, Quang Bình, Vị Xuyên)", "Nùng (Hoàng Su Phì, Xín Mần)", "H'Mông"],
      bannerImage: "assets/images/ha-giang-banner.svg",
      intro: "Mảnh đất cực Bắc Hà Giang nơi có đỉnh Tây Côn Lĩnh mây phủ ngút ngàn và ruộng bậc thang Hoàng Su Phì kỳ vĩ là nơi lưu truyền các điệu Sli Nùng Dín, Sli Nùng U cùng các làn điệu Then Tày nguyên sơ. Tiếng hát ở đây mang đậm khí chất kiên cường, phóng khoáng của những con người sống giữa núi cao mây phủ.",
      distinctStyle: "Âm hưởng cao, ngân dài và vang lộng. Lối hát khỏe khoắn để xuyên qua gió núi và tiếng thác đổ ghềnh, vừa mang chất tự tình đắm say, vừa mang tính sử thi linh thiêng.",
      signatureGenres: ["Sli Nùng Dín Hoàng Su Phì", "Lượn Cọi Vị Xuyên", "Then Nghi lễ Cấp Sắc Bắc Mê", "Hát đối giao duyên Xín Mần"],
      customsAndFestivals: [
        "Lễ hội Nhảy lửa và Cầu mùa của người Tày, Nùng Hoàng Su Phì.",
        "Hội chợ phiên Phố Bảng, Hoàng Su Phì mùa lúa chín.",
        "Nghi lễ Lẩu Then cầu an của người Tày ven sông Lô.",
        "Tập tục trai gái hát đối bên triền ruộng bậc thang mùa thu hoạch."
      ],
      prominentArtisans: [
        "Nghệ nhân Thào Seo Sùng (Bảo tồn dân ca Nùng Dín)",
        "Nghệ nhân Vàng Thị Hoa (Nghệ nhân hát Sli ruộng bậc thang)",
        "Nghệ nhân Hoàng Văn Tiến (Nghệ nhân đàn Tính then Bắc Mê)"
      ],
      story: "Người Nùng Dín ở Hoàng Su Phì có câu ca: 'Cơm ăn ba bữa no bụng, tiếng Sli hát ba ngày ấm lòng'. Khi mùa vàng đổ xuống những thảm ruộng bậc thang tầng tầng lớp lớp, tiếng Sli cất lên như sợi dây vô hình kết nối giữa các mỏm núi xa xôi. Trai gái không cần nhìn thấy mặt nhau, chỉ cần nghe âm giọng trong trẻo, bè hát ăn ý là đã có thể gửi trọn tấm lòng, để rồi chiều về tìm gặp nhau bên lán nương trao tặng bó lúa nếp đầu mùa."
    }
  ],

  // BỐI CẢNH DIỄN XƯỚNG VÀ PHONG TỤC (7 CHỦ ĐỀ CHUYÊN SÂU)
  culturalContexts: [
    {
      id: "ctx-giaoduyen",
      title: "1. Hát Giao Duyên Nam Nữ – Tiếng Lòng Tự Tình Qua Núi Non Nương Rẫy",
      icon: "heart-handshake",
      category: "Tình cảm lứa đôi",
      summary: "Hình thức sinh hoạt tình cảm phổ biến và thiêng liêng nhất của thanh niên nam nữ Tày - Nùng trong các hội xuân và đêm trăng.",
      content: `
### Bản chất và không gian giao duyên
Hát giao duyên (hát lượn tình ca của người Tày, hát Sli giang, Sli sình làng của người Nùng) là phương tiện biểu đạt tình cảm tinh tế, kín đáo nhưng mãnh liệt nhất của tuổi trẻ miền sơn cước. Người Tày - Nùng xưa ít khi thổ lộ tình cảm một cách trực diện, thô mộc; mọi nhớ thương, hẹn ước hay hờn giận đều được gửi gắm qua hình tượng thiên nhiên: cành hoa mận trắng, bông lúa uốn câu, dòng suối nguồn trong vắt hay ánh trăng soi mái sàn.

### Thời điểm và không gian diễn xướng
- **Thời điểm:** Thường diễn ra vào mùa xuân (tháng Giêng đến tháng Ba âm lịch) khi mùa vụ tạm ngơi, đất trời đâm chồi nảy lộc; hoặc trong những đêm trăng sáng mùa thu sau khi đã thu hoạch mùa màng.
- **Không gian:** Bên bờ suối, trên triền đồi, bãi cỏ đầu làng, bên khung cửi, lán nương hoặc bên bếp lửa nhà sàn truyền thống.
- **Tâm thế người hát:** Các chàng trai, cô gái ăn vận trang phục chàm đẹp nhất, đeo vòng bạc, xà tích lấp lánh, mang theo tráp thêu, túi quả còn để trao gửi làm kỷ vật nếu cuộc hát thành duyên.
      `,
      quote: "Thương nhau từ thuở trăng tròn / Lời ca vương đá suối nguồn chẳng phai."
    },
    {
      id: "ctx-doidap",
      title: "2. Hát Đối Đáp Nhóm Nam – Nữ: Nghệ Thuật Đa Thanh Độc Đáo Của Sli",
      icon: "users",
      category: "Kỹ thuật diễn xướng",
      summary: "Sli là hình thức hát đối đáp nhiều bè (polyphony) không có nhạc cụ đệm, dựa vào sự ăn ý tuyệt đối của hai tốp nam - nữ.",
      content: `
### Cấu trúc hai bè 'Bắt lờn - Táng lờn'
Điểm độc đáo hàng đầu của hát Sli người Nùng khiến các nhà nghiên cứu âm nhạc dân gian thế giới thán phục chính là **tính chất hát nhiều bè tự nhiên không cần nhạc đệm**. Trong một nhóm hát Sli (thường gồm từ 2 đến 4 người cùng giới):
- **Bắt lờn (Bè chính / Bè dẫn):** Một người có giọng lĩnh xướng tốt, nhớ nhiều lời ca cổ sẽ cất giọng bắt điệu câu hát trước.
- **Táng lờn (Bè phụ / Bè đuổi):** Người hoặc các bạn cùng nhóm lập tức hòa theo ở cao độ cao hơn (thường là quãng 3 hoặc quãng 5 tự nhiên), luyến láy nâng đỡ giọng cho bè chính.

### Tính tập thể và sự tương trợ
Trong hát Sli, không có khái niệm 'ngôi sao đơn ca'. Một người hát hay đến mấy cũng không thể hát Sli một mình mà bắt buộc phải có bạn hát bè cùng. Sự ăn ý giữa các thành viên trong tốp thể hiện tinh thần đoàn kết, gắn bó keo sơn của cộng đồng người Nùng. Khi hát đối đáp với nhóm bạn khác giới, hai bên không chỉ đọ về chất giọng ngân vang mà còn thi thố về sự mẫn tiệp, khả năng ứng biến tài tình trước những câu hỏi đố hóc búa.
      `,
      quote: "Một cây làm chẳng nên non / Hai bè Sli hát vách mòn cũng vang."
    },
    {
      id: "ctx-lehoi",
      title: "3. Hát Trong Lễ Hội Truyền Thống – Lồng Tồng & Nàng Hai Cầu Mùa",
      icon: "sparkles",
      category: "Lễ hội & Tín ngưỡng",
      summary: "Tiếng hát hòa vào không khí linh thiêng và rộn rã của ngày hội đầu năm cầu quốc thái dân an, mưa thuận gió hòa.",
      content: `
### Hội Lồng Tồng (Lễ hội Xuống Đồng)
Hội Lồng Tồng là lễ hội lớn nhất trong năm của người Tày và người Nùng, diễn ra từ mùng 4 đến rằm tháng Giêng. Sau phần lễ tạ ơn Thần Nông và Thành hoàng bản mường là phần hội tưng bừng: ném còn, kéo co, đấu vật và tâm điểm là các canh hát Lượn, hát Sli. Thanh niên các bản kéo từng đoàn đến trẩy hội, tìm bãi cỏ rộng hoặc gốc đa cổ thụ để tổ chức các cuộc hát đối thâu đêm suốt sáng.

### Hội Nàng Hai (Cầu Trăng Giáng Trần)
Tại Cao Bằng, Lễ hội Nàng Hai là một không gian diễn xướng nghi lễ đặc sắc. Đồng bào tin rằng trên cung trăng có Mẹ Trăng và mười hai nàng tiên trông coi việc nông trang mùa màng. Thông qua những điệu Lượn Nàng Hai mượt mà cùng điệu múa quạt duyên dáng, dân bản gửi gắm ước nguyện cầu mong cho một năm mưa thuận gió hòa, sâu bệnh không phá hoại, bản làng bình yên, lúa ngô tươi tốt.
      `,
      quote: "Quả còn bay vút trời xanh / Tiếng lượn réo rắt duyên lành đơm hoa."
    },
    {
      id: "ctx-chophien",
      title: "4. Hát Tại Chợ Phiên & Sinh Hoạt Cộng Đồng: Chợ Tình Kỳ Lừa & Xuân Dương",
      icon: "store",
      category: "Không gian xã hội",
      summary: "Chợ phiên vùng cao không chỉ là nơi mua bán nông sản mà là không gian gặp gỡ văn hóa, nơi cất lên những canh hát Sli, Lượn say đắm lòng người.",
      content: `
### Chợ phiên Kỳ Lừa – Lạng Sơn
Chợ Kỳ Lừa họp mỗi tháng sáu phiên (các ngày 2, 7, 12, 17, 22, 27 âm lịch). Bên cạnh vải chàm, măng vầu, chè tuyết, chợ Kỳ Lừa từ lâu đã đi vào thi ca bởi những canh hát Sli Giang tha thiết. Người Nùng đi chợ từ sáng sớm, sau khi mua bán xong liền tụ tập thành từng nhóm trước cổng chùa Tam Thanh hay bãi cỏ ven chợ để cất lời Sli. Nhiều đôi lứa đã nên duyên vợ chồng từ chính những câu Sli mộc mạc nơi góc chợ phiên này.

### Chợ tình Xuân Dương – Bắc Kạn (Mùng 5 tháng 3 âm lịch)
Phiên chợ độc đáo nhất Việt Bắc mang giá trị nhân văn sâu sắc. Vào ngày này, người Nùng Na Rì tụ hội về xã Xuân Dương để tìm lại bạn tình xưa cũ. Dù ai nấy đều đã có gia đình riêng ấm êm, họ vẫn được tự do gặp lại nhau, cùng uống chung bát rượu ngô và hát Sli ôn lại chuyện cũ mà không hề có sự ghen tuông hay ràng buộc trần tục. Đó là nét đẹp bao dung, trọng tình trọng nghĩa tuyệt vời của văn hóa dân gian.
      `,
      quote: "Đến chợ chẳng cốt mua rau / Cốt nghe tiếng Sli ngọt ngào tìm nhau."
    },
    {
      id: "ctx-khonggian",
      title: "5. Không Gian Và Thời Điểm Diễn Xướng – Triền Đồi, Vách Đá & Mái Sàn",
      icon: "mountain",
      category: "Môi trường văn hóa",
      summary: "Sự cộng hưởng tuyệt vời giữa cảnh sắc thiên nhiên non nước Việt Bắc với âm vang của giọng hát dân tộc.",
      content: `
### Không gian mở ngoài trời
Tiếng hát Sli và Lượn sinh ra từ núi rừng, do đó không gian lý tưởng nhất để cất giọng chính là cảnh quan tự nhiên:
- **Thung lũng đá vôi:** Vách đá dựng đứng đóng vai trò như một bức tường phản âm tự nhiên khổng lồ. Khi hát đối qua thung lũng, sóng âm va vào đá dội lại tạo ra tiếng vang đa tầng kỳ ảo.
- **Ven bờ suối và bến đò:** Âm thanh róc rách của nước nguồn hòa cùng tiếng lượn tạo cảm giác thanh bình, trong trẻo.
- **Thửa ruộng bậc thang:** Lối hát gọi nhau từ đỉnh đồi này sang đỉnh đồi khác vượt qua tầng mây trắng.

### Không gian kín bên bếp lửa nhà sàn
Về đêm, không gian diễn xướng chuyển vào trong lòng nhà sàn. Quanh bếp than hồng rực lửa, ánh sáng bập bùng soi rọi những gương mặt rạng ngời, chén trà shan tuyết bốc khói nghi ngút. Tiếng Lượn Slương hay Sli Sình Làng lúc này trở nên trầm lắng, thủ thỉ như lời tâm tình bí mật chỉ riêng đôi lứa và bóng đêm chứng giám.
      `,
      quote: "Vách đá làm đàn, mây làm phím / Tiếng lượn ngân vang thấu mây ngàn."
    },
    {
      id: "ctx-ynghia",
      title: "6. Ý Nghĩa Văn Hóa & Giá Trị Trao Truyền Đạo Lý Làm Người",
      icon: "book-open",
      category: "Giá trị nhân văn",
      summary: "Dân ca Tày Nùng là pho bách khoa toàn thư dân gian, chứa đựng tri thức bản địa, chuẩn mực ứng xử và đạo hiếu gia phong.",
      content: `
### Giáo dục nhân cách và chuẩn mực ứng xử
Hát Sli, Lượn không chỉ đơn thuần là giải trí hay giao duyên mà là phương thức truyền dạy đạo lý sống của tiền nhân:
- **Tôn kính tổ tiên, hiếu thuận với cha mẹ:** Lời ca răn dạy con cháu biết ơn cội nguồn, kính già nhường trẻ.
- **Tình nghĩa xóm giềng:** Hát ca ngợi sự tương thân tương ái, giúp đỡ nhau khi hoạn nạn, lúc dựng nhà mới hay thu hoạch mùa màng.
- **Tình yêu thủy chung son sắt:** Ca ngợi sự chân thành, phê phán thói trăng hoa, bội ước, chuộng giàu khinh nghèo.

### Bảo tồn ngôn ngữ và tri thức bản địa
Thông qua các bài hát đối đố (đố cây thuốc, đố lịch sử bản mường, đố con chim con cá), thế hệ trẻ được học tập về môi trường tự nhiên, tên gọi địa danh, các phương thức canh tác truyền thống và gìn giữ sự trong sáng, giàu có của tiếng Tày, tiếng Nùng nguyên bản.
      `,
      quote: "Hát để sáng cái đầu, ấm cái bụng / Hát để con cháu đời đời nhớ gốc nguồn."
    },
    {
      id: "ctx-quydinh",
      title: "7. Trình Tự Một Cuộc Hát Đối Đáp Chuẩn Mực – Từ Khai Khẩu Đến Giã Bạn",
      icon: "list-ordered",
      category: "Quy chuẩn diễn xướng",
      summary: "Một canh hát đối chuẩn mực của người Tày - Nùng tuân theo 6 chặng nghiêm cẩn kéo dài từ chiều hôm trước đến sáng hôm sau.",
      content: `
### 6 chặng của một cuộc hát đối truyền thống:

1. **Chặng 1: Hát Chào & Khai Khẩu (Slương thán / Khai khẩu)**
   - Lời thưa gửi kính trọng chủ nhà, xin phép thần linh làng bản và cất lời chào hỏi nhóm bạn hát đối diện. Nhóm chủ nhà hoặc nhóm nam thường mở lời chào trước, nhóm khách khiêm tốn đáp lời.

2. **Chặng 2: Hát Dò Hỏi & Làm Quen (Lượn rà / Sli ták)**
   - Dò hỏi tên tuổi, quê quán, bản mường của nhau; hỏi xem bạn hát đã có người thương hay chưa, có vướng bận việc gia đình để an tâm kết bạn.

3. **Chặng 3: Hát Khen Cảnh & Khen Người**
   - Khen vẻ đẹp trang phục áo chàm, khăn thêu hoa, khen đôi mắt sáng nụ cười hiền, khen tài đức nết na của bạn hát và ca ngợi cảnh sắc tươi đẹp của bản làng đón tiếp.

4. **Chặng 4: Hát Đối Đố (Sli đố / Lượn đố - Thử tài trí tuệ)**
   - Chặng gay cấn và thử thách nhất: Hai bên ra những câu đố hóc búa về nguồn gốc đất trời, tên các vì sao, các loài cây cỏ trong rừng, sự tích các con suối. Bên nào không đáp được trong thời gian quy định sẽ phải nhận thua và chịu phạt hát một bài xin tạ lỗi.

5. **Chặng 5: Hát Giãi Bày Tình Cảm & Hẹn Ước (Lượn kết đon / Sli slương)**
   - Đỉnh cao trữ tình sâu lắng: Khi đã tâm đầu ý hợp qua thử thách đối đố, hai bên giãi bày tình cảm chân thành, thề non hẹn biển và trao nhau kỷ vật (khăn thêu, vòng chỉ ngũ sắc, gói xôi ngũ sắc).

6. **Chặng 6: Hát Tạ Từ & Dặn Dò (Sli pác slán / Lượn khảm slao)**
   - Diễn ra vào lúc rạng sáng khi gà gáy sang canh. Lời ca bịn rịn không nỡ chia tay, dặn dò nhau giữ gìn sức khỏe, hẹn gặp lại vào mùa hội năm sau. Cuộc chia tay thường dùng dằng kéo dài qua nhiều con dốc.
      `,
      quote: "Chào nhau từ chập tối / Giã bạn tới bình minh / Mấy mùa hoa nở lại / Nhớ về khúc tâm tình."
    }
  ],

  // TỪ ĐIỂN THUẬT NGỮ DI SẢN (GLOSSARY)
  glossary: [
    { term: "Sli", meaning: "Thể loại dân ca đối đáp đặc sắc của dân tộc Nùng, mang tính chất hát nhiều bè (đa thanh) tự nhiên không có nhạc cụ đệm." },
    { term: "Lượn", meaning: "Hình thức dân ca trữ tình đối đáp đỉnh cao của người Tày, thường gieo vần chân và vần lưng theo thể thơ thất ngôn hoặc ngũ ngôn." },
    { term: "Lượn Slương", meaning: "Lượn nhớ thương - thể loại lượn trữ tình giao duyên sâu sắc nhất của người Tày, diễn xướng thâu đêm trong hội xuân." },
    { term: "Lượn Cọi", meaning: "Điệu lượn phổ biến ở Cao Bằng, Hà Giang, Tuyên Quang; tiết tấu bay bổng, thường đệm bằng tiếng đàn Tính tẩu." },
    { term: "Lượn Nàng Hai", meaning: "Hát nghi lễ gắn liền với Lễ hội Nàng Hai (Nàng Mẹ Trăng) cầu mùa màng bội thu, mưa thuận gió hòa của người Tày Cao Bằng." },
    { term: "Sli Giang", meaning: "Làn điệu Sli của người Nùng Giang ở Lạng Sơn, nổi tiếng với sự hòa quyện tuyệt vời giữa bè trầm và bè cao vang dội núi đá." },
    { term: "Bắt lờn (Pắt lờn)", meaning: "Người hoặc giọng hát lĩnh xướng, bắt nhịp điệu mở đầu trong một nhóm hát Sli của người Nùng." },
    { term: "Táng lờn", meaning: "Người hoặc giọng hát bè theo ở cao độ cao hơn, nâng đỡ giọng cho bè chính trong nghệ thuật hát bè Sli." },
    { term: "Tính tẩu (Đàn Tính)", meaning: "Nhạc cụ dây truyền thống thiêng liêng của người Tày, cần đàn dài bằng gỗ dâu, bầu đàn làm bằng quả bầu già khô, mắc 2 hoặc 3 dây tơ." },
    { term: "Lồng Tồng", meaning: "Lễ hội Xuống Đồng - ngày hội lớn nhất đầu năm của cộng đồng Tày - Nùng để mở đầu mùa vụ canh tác nông nghiệp mới." },
    { term: "Áo chàm", meaning: "Trang phục truyền thống được nhuộm bằng lá cây chàm tự nhiên qua nhiều công đoạn, mang sắc xanh đen đậm đà, biểu tượng của sự bình dị, bền bỉ và thủy chung." }
  ],

  // BỘ CÂU HỎI TRẮC NGHIỆM TÌM HIỂU DI SẢN (HERITAGE QUIZ)
  quizQuestions: [
    {
      id: "q1",
      question: "Hát Sli của người Nùng có đặc điểm diễn xướng nào độc đáo nhất?",
      options: [
        "Có dàn nhạc cồng chiêng và trống lớn đệm theo rộn rã",
        "Hát đối đáp nhiều bè tự nhiên (đa thanh) không cần nhạc cụ đệm",
        "Chỉ do một người nam đơn ca trong các đám cưới",
        "Hát múa tập thể quanh đống lửa trại"
      ],
      correctIndex: 1,
      explanation: "Điểm đặc sắc nhất của Sli là hát nhiều bè tự nhiên (Bắt lờn dẫn điệu, Táng lờn hòa bè cao) hoàn toàn không có nhạc cụ đệm."
    },
    {
      id: "q2",
      question: "Bầu cây đàn Tính (Tính tẩu) truyền thống của người Tày được làm từ chất liệu gì?",
      options: [
        "Quả bầu già phơi khô và hong khói gác bếp",
        "Khúc gỗ mít khoét rỗng lòng",
        "Vỏ mai rùa hoặc mai cua đá",
        "Ống tre mai già phơi nắng"
      ],
      correctIndex: 0,
      explanation: "Bầu đàn Tính làm từ nửa quả bầu già phơi khô hong khói, cần đàn bằng gỗ dâu và mặt đàn bằng gỗ vông mềm tạo độ vang ấm áp."
    },
    {
      id: "q3",
      question: "Phiên chợ tình mùng 5 tháng 3 âm lịch nổi tiếng với những canh hát Sli gặp lại bạn xưa thuộc tỉnh nào?",
      options: [
        "Chợ tình Khau Vai (Hà Giang)",
        "Chợ tình Xuân Dương, huyện Na Rì (Bắc Kạn)",
        "Chợ tình Sa Pa (Lào Cai)",
        "Chợ phiên Đồng Văn (Hà Giang)"
      ],
      correctIndex: 1,
      explanation: "Chợ tình Xuân Dương (Na Rì, Bắc Kạn) là ngày hội nhân văn độc nhất vô nhị để người Nùng gặp lại người xưa hát Sli ôn lại kỷ niệm."
    },
    {
      id: "q4",
      question: "Điệu lượn nào của người Tày đóng vai trò quan trọng trong nghi lễ vượt dải chỉ đỏ đón dâu?",
      options: [
        "Lượn Slương",
        "Lượn Quan Làng",
        "Lượn Nàng Hai",
        "Lượn Hà Lều"
      ],
      correctIndex: 1,
      explanation: "Lượn Quan Làng là cuộc thi tài ứng khẩu thơ ca nghiêm cẩn giữa ông Quan Làng nhà trai và Mẹ Đón nhà gái trước cửa nhà sàn."
    },
    {
      id: "q5",
      question: "Lễ hội Nàng Hai (thỉnh Mẹ Trăng và Tiên Nữ giáng trần cầu mùa) là di sản tiêu biểu của địa phương nào?",
      options: [
        "Phục Hòa / Quảng Hòa (Cao Bằng)",
        "Thành phố Lạng Sơn",
        "Chiêm Hóa (Tuyên Quang)",
        "Hoàng Su Phì (Hà Giang)"
      ],
      correctIndex: 0,
      explanation: "Lễ hội Nàng Hai Tiên Thành (Phục Hòa, Cao Bằng) là di sản phi vật thể quốc gia với những điệu lượn và múa quạt cầu mùa màng ngô lúa tốt tươi."
    }
  ]
};

// Đảm bảo dữ liệu truy cập toàn cục
if (typeof window !== "undefined") {
  window.HERITAGE_DATA = HERITAGE_DATA;
}

