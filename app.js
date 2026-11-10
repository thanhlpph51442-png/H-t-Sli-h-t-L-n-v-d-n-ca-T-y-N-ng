/**
 * APP CONTROLLER - THANH ÂM SLI - LƯỢN
 * Điều phối giao diện, tìm kiếm, lọc dữ liệu, trình phát âm thanh,
 * modal so sánh lời ca 3 cột và đóng góp di sản cộng đồng.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. STATE MANAGEMENT
  const state = {
    allSongs: [...HERITAGE_DATA.songs],
    filteredSongs: [...HERITAGE_DATA.songs],
    currentSongId: "song-01",
    activeGenreFilter: "all",
    activeRegionFilter: "all",
    searchQuery: "",
    activeContextId: "ctx-giaoduyen",
    activeRegionId: "reg-caobang",
    favorites: JSON.parse(localStorage.getItem("sli_luon_favorites") || "[]"),
    activeModalSong: null,
    fontSizeMode: "md",
    speedOptions: [0.75, 1.0, 1.25, 1.5],
    currentSpeedIndex: 1
  };

  // Load custom community contributed songs from localStorage if available
  const savedContributions = JSON.parse(localStorage.getItem("sli_luon_contributions") || "[]");
  if (savedContributions.length > 0) {
    state.allSongs = [...savedContributions, ...state.allSongs];
    state.filteredSongs = [...state.allSongs];
  }

  // DOM Elements
  const els = {
    // Nav & Mobile
    menuToggle: document.getElementById("menuToggle"),
    navMenu: document.getElementById("navMenu"),
    navLinks: document.querySelectorAll(".nav-link"),
    btnOpenContribute: document.getElementById("btnOpenContribute"),
    btnOpenContributeHero: document.getElementById("btnOpenContributeHero"),
    btnHeroListen: document.getElementById("btnHeroListen"),
    
    // Homepage Highlights
    featuredGrid: document.getElementById("featuredGrid"),
    topAudioGrid: document.getElementById("topAudioGrid"),
    recentGrid: document.getElementById("recentGrid"),

    // Lyric Library
    libraryGrid: document.getElementById("libraryGrid"),
    librarySearchInput: document.getElementById("librarySearchInput"),
    genreSelectFilter: document.getElementById("genreSelectFilter"),
    regionSelectFilter: document.getElementById("regionSelectFilter"),
    genrePills: document.querySelectorAll(".genre-pill"),
    resultsCount: document.getElementById("resultsCount"),

    // Audio Vault
    vaultTableBody: document.getElementById("vaultTableBody"),

    // Cultural Context
    contextNavList: document.getElementById("contextNavList"),
    contextContentDisplay: document.getElementById("contextContentDisplay"),

    // Regional Explorer
    regionTabsRow: document.getElementById("regionTabsRow"),
    regionShowcaseDisplay: document.getElementById("regionShowcaseDisplay"),

    // Lyric Modal (3 Columns)
    lyricModal: document.getElementById("lyricModal"),
    btnModalClose: document.getElementById("btnModalClose"),
    modalTitle: document.getElementById("modalTitle"),
    modalMeta: document.getElementById("modalMeta"),
    modalMetaSummary: document.getElementById("modalMetaSummary"),
    modalColOriginal: document.getElementById("modalColOriginal"),
    modalColPhonetic: document.getElementById("modalColPhonetic"),
    modalColTranslation: document.getElementById("modalColTranslation"),
    modalCitation: document.getElementById("modalCitation"),
    modalBody: document.querySelector(".modal-body"),
    btnCopyLyrics: document.getElementById("btnCopyLyrics"),
    btnModalPlay: document.getElementById("btnModalPlay"),
    fontSizeBtns: document.querySelectorAll(".btn-size-toggle"),

    // Contribution Modal
    contributeModal: document.getElementById("contributeModal"),
    btnCloseContribute: document.getElementById("btnCloseContribute"),
    contributeForm: document.getElementById("contributeForm"),

    // Persistent Bottom Audio Player
    masterAudioPlayer: document.getElementById("masterAudioPlayer"),
    playerTrackTitle: document.getElementById("playerTrackTitle"),
    playerTrackSubtitle: document.getElementById("playerTrackSubtitle"),
    playerArtIcon: document.getElementById("playerArtIcon"),
    btnPlayerPlay: document.getElementById("btnPlayerPlay"),
    btnPlayerPrev: document.getElementById("btnPlayerPrev"),
    btnPlayerNext: document.getElementById("btnPlayerNext"),
    btnPlayerRewind: document.getElementById("btnPlayerRewind"),
    btnPlayerForward: document.getElementById("btnPlayerForward"),
    btnPlayerLoop: document.getElementById("btnPlayerLoop"),
    btnPlayerSpeed: document.getElementById("btnPlayerSpeed"),
    playerTimeline: document.getElementById("playerTimeline"),
    playerCurrentTime: document.getElementById("playerCurrentTime"),
    playerDuration: document.getElementById("playerDuration"),
    waveformCanvas: document.getElementById("waveformCanvas"),
    btnVolumeIcon: document.getElementById("btnVolumeIcon"),
    volumeSlider: document.getElementById("volumeSlider"),
    btnPlayerOpenLyrics: document.getElementById("btnPlayerOpenLyrics"),

    // Toast
    toastNotice: document.getElementById("toastNotice"),
    toastMessage: document.getElementById("toastMessage")
  };

  // 2. INITIALIZATION
  function init() {
    renderFeaturedSongs();
    renderTopAudioRecordings();
    renderRecentSongs();
    renderLibrary();
    renderAudioVault();
    renderContextNavigation();
    renderContextDetail(state.activeContextId);
    renderRegionTabs();
    renderRegionDetail(state.activeRegionId);

    // Initial load first track into audio engine
    const firstSong = state.allSongs[0];
    if (firstSong && window.heritageAudio) {
      window.heritageAudio.loadTrack(firstSong);
      updatePlayerInfo(firstSong);
    }

    setupEventListeners();
    setupAudioVisualizer();
  }

  // 3. TOAST NOTIFICATION UTILITY
  function showToast(msg) {
    if (!els.toastNotice || !els.toastMessage) return;
    els.toastMessage.textContent = msg;
    els.toastNotice.classList.add("show");
    setTimeout(() => {
      els.toastNotice.classList.remove("show");
    }, 3200);
  }

  // 4. RENDERING FUNCTIONS

  // Card template builder
  function createSongCardHtml(song) {
    const isFav = state.favorites.includes(song.id);
    const genreClass = song.genre === "Sli" ? "genre-sli" : "genre-luon";
    const excerpt = song.lyrics.translation[0] || song.summary;

    return `
      <div class="song-card" data-song-id="${song.id}">
        <div class="song-card-header">
          <span class="song-genre-badge ${genreClass}">${song.subGenre}</span>
          <button class="song-favorite-btn ${isFav ? 'favorited' : ''}" data-fav-id="${song.id}" title="${isFav ? 'Bỏ lưu yêu thích' : 'Lưu vào bài hát yêu thích'}">
            <i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>
          </button>
        </div>
        <h4 class="song-title-text">${song.title}</h4>
        <div class="song-meta-row">
          <span class="song-meta-pill"><i class="fas fa-map-marker-alt"></i> ${song.region}</span>
          <span class="song-meta-pill"><i class="fas fa-user-alt"></i> ${song.artisan}</span>
          <span class="song-meta-pill"><i class="fas fa-clock"></i> ${song.duration}</span>
        </div>
        <div class="song-excerpt-box">
          "${excerpt}"
        </div>
        <div class="song-card-actions">
          <button class="btn-card-play" data-play-id="${song.id}">
            <i class="fas fa-play"></i> Nghe làn điệu
          </button>
          <button class="btn-card-lyrics" data-lyrics-id="${song.id}">
            <i class="fas fa-file-alt"></i> Xem lời 3 cột
          </button>
        </div>
      </div>
    `;
  }

  // Trang chủ: Các làn điệu nổi bật
  function renderFeaturedSongs() {
    if (!els.featuredGrid) return;
    const featuredSongs = state.allSongs.slice(0, 3);
    els.featuredGrid.innerHTML = featuredSongs.map(s => createSongCardHtml(s)).join("");
  }

  // Trang chủ: Bản ghi âm được nghe nhiều
  function renderTopAudioRecordings() {
    if (!els.topAudioGrid) return;
    const topSongs = [state.allSongs[1], state.allSongs[2], state.allSongs[4]].filter(Boolean);
    els.topAudioGrid.innerHTML = topSongs.map(s => createSongCardHtml(s)).join("");
  }

  // Trang chủ: Bài hát mới sưu tầm
  function renderRecentSongs() {
    if (!els.recentGrid) return;
    const recentSongs = state.allSongs.slice(5, 8);
    els.recentGrid.innerHTML = recentSongs.map(s => createSongCardHtml(s)).join("");
  }

  // Thư viện lời ca (Filterable & Searchable)
  function renderLibrary() {
    if (!els.libraryGrid) return;

    let results = state.allSongs.filter(s => {
      // Genre filter
      if (state.activeGenreFilter !== "all" && s.genre !== state.activeGenreFilter) {
        return false;
      }
      // Region filter
      if (state.activeRegionFilter !== "all" && !s.region.includes(state.activeRegionFilter)) {
        return false;
      }
      // Search query
      if (state.searchQuery.trim() !== "") {
        const q = state.searchQuery.toLowerCase();
        const inTitle = s.title.toLowerCase().includes(q);
        const inArtisan = s.artisan.toLowerCase().includes(q);
        const inRegion = s.region.toLowerCase().includes(q);
        const inDistrict = (s.district || "").toLowerCase().includes(q);
        const inTags = s.tags.some(t => t.toLowerCase().includes(q));
        const inLyrics = s.lyrics.translation.some(l => l.toLowerCase().includes(q)) ||
                         s.lyrics.original.some(l => l.toLowerCase().includes(q));

        if (!inTitle && !inArtisan && !inRegion && !inDistrict && !inTags && !inLyrics) {
          return false;
        }
      }
      return true;
    });

    state.filteredSongs = results;

    if (els.resultsCount) {
      els.resultsCount.innerHTML = `Tìm thấy <strong>${results.length}</strong> bài dân ca phù hợp`;
    }

    if (results.length === 0) {
      els.libraryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 12px; border: 1px dashed var(--color-gold);">
          <i class="fas fa-search" style="font-size: 2.5rem; color: var(--color-gold); margin-bottom: 12px;"></i>
          <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--color-indigo); margin-bottom: 8px;">Không tìm thấy bài dân ca phù hợp</h4>
          <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Vui lòng thử từ khóa khác hoặc điều chỉnh lại bộ lọc thể loại, vùng miền.</p>
          <button class="btn-secondary" id="btnResetFilters" style="background: var(--color-indigo); color: #fff;">
            <i class="fas fa-redo"></i> Đặt lại bộ lọc
          </button>
        </div>
      `;
      const btnReset = document.getElementById("btnResetFilters");
      if (btnReset) {
        btnReset.addEventListener("click", () => {
          state.activeGenreFilter = "all";
          state.activeRegionFilter = "all";
          state.searchQuery = "";
          if (els.librarySearchInput) els.librarySearchInput.value = "";
          if (els.genreSelectFilter) els.genreSelectFilter.value = "all";
          if (els.regionSelectFilter) els.regionSelectFilter.value = "all";
          updateGenrePills();
          renderLibrary();
        });
      }
      return;
    }

    els.libraryGrid.innerHTML = results.map(s => createSongCardHtml(s)).join("");
  }

  // Kho bản ghi âm dân ca (Audio Vault Table)
  function renderAudioVault() {
    if (!els.vaultTableBody) return;

    els.vaultTableBody.innerHTML = state.allSongs.map((s, idx) => {
      const isCurrent = window.heritageAudio && window.heritageAudio.currentTrack && window.heritageAudio.currentTrack.id === s.id;
      const isPlaying = isCurrent && window.heritageAudio.isPlaying;

      return `
        <div class="audio-track-item ${isCurrent ? 'now-playing' : ''}" data-track-id="${s.id}">
          <div>
            <button class="track-btn-play-mini" data-play-id="${s.id}" title="Nghe bản ghi này">
              <i class="fas ${isPlaying ? 'fa-pause' : 'fa-play'}"></i>
            </button>
          </div>
          <div class="track-info-cell">
            <h5>${s.title}</h5>
            <span>${s.subGenre} • ${s.recordType || 'Bản ghi âm sưu tầm'}</span>
          </div>
          <div class="track-artisan-cell">
            <i class="fas fa-user-alt" style="color: var(--color-gold-dark); margin-right: 4px;"></i>
            ${s.artisan}
          </div>
          <div class="track-region-cell">
            <i class="fas fa-map-marker-alt" style="color: var(--color-red); margin-right: 4px;"></i>
            ${s.region}
          </div>
          <div class="track-duration-cell">${s.duration}</div>
          <div class="track-actions-cell">
            <button class="btn-card-lyrics" data-lyrics-id="${s.id}" style="padding: 6px 10px; font-size: 0.78rem;">
              <i class="fas fa-book-open"></i> Lời ca
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // Bối cảnh diễn xướng: Menu điều hướng
  function renderContextNavigation() {
    if (!els.contextNavList) return;
    els.contextNavList.innerHTML = HERITAGE_DATA.culturalContexts.map(c => {
      const isActive = c.id === state.activeContextId;
      return `
        <li>
          <button class="context-nav-btn ${isActive ? 'active' : ''}" data-context-id="${c.id}">
            <i class="fas fa-feather-alt"></i>
            <span>${c.title}</span>
          </button>
        </li>
      `;
    }).join("");
  }

  // Bối cảnh diễn xướng: Nội dung hiển thị
  function renderContextDetail(contextId) {
    if (!els.contextContentDisplay) return;
    const ctx = HERITAGE_DATA.culturalContexts.find(c => c.id === contextId) || HERITAGE_DATA.culturalContexts[0];
    state.activeContextId = ctx.id;

    // Convert simple markdown headings and lists to HTML
    let htmlContent = ctx.content
      .replace(/### (.*?)\n/g, '<h4>$1</h4>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\* (.*?)\n/g, '<li>$1</li>')
      .replace(/(\d+)\. \*\*(.*?)\*\*/g, '<strong>$1. $2</strong>');

    els.contextContentDisplay.innerHTML = `
      <div class="context-article-header">
        <span class="category-badge">${ctx.category}</span>
        <h3>${ctx.title}</h3>
      </div>
      <div class="context-quote-callout">
        <i class="fas fa-quote-left" style="color: var(--color-gold); margin-right: 8px;"></i>
        "${ctx.quote}"
      </div>
      <div class="context-prose">
        <p>${htmlContent}</p>
      </div>
    `;

    // Highlight active button in nav
    document.querySelectorAll(".context-nav-btn").forEach(btn => {
      if (btn.dataset.contextId === ctx.id) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Vùng miền: Tab danh sách
  function renderRegionTabs() {
    if (!els.regionTabsRow) return;
    els.regionTabsRow.innerHTML = HERITAGE_DATA.regions.map(r => {
      const isActive = r.id === state.activeRegionId;
      return `
        <button class="region-tab-btn ${isActive ? 'active' : ''}" data-region-id="${r.id}">
          <i class="fas fa-mountain" style="margin-right: 6px; font-size: 0.9rem;"></i> ${r.name}
        </button>
      `;
    }).join("");
  }

  // Vùng miền: Nội dung hiển thị
  function renderRegionDetail(regionId) {
    if (!els.regionShowcaseDisplay) return;
    const reg = HERITAGE_DATA.regions.find(r => r.id === regionId) || HERITAGE_DATA.regions[0];
    state.activeRegionId = reg.id;

    els.regionShowcaseDisplay.innerHTML = `
      <div class="region-showcase-card">
        <div class="region-banner-visual">
          <img src="${reg.bannerImage}" alt="${reg.name} di sản dân ca Tày Nùng" />
        </div>
        <div class="region-detail-content">
          <div>
            <h3 class="region-detail-title">${reg.name}</h3>
            <span class="region-detail-subtitle">${reg.title}</span>
          </div>

          <div class="region-info-block">
            <h5>Cộng đồng cư dân chính</h5>
            <p>${reg.ethnicGroups.join(" • ")}</p>
          </div>

          <div class="region-info-block">
            <h5>Nét đặc trưng nghệ thuật &amp; Lối hát</h5>
            <p>${reg.distinctStyle}</p>
          </div>

          <div class="region-info-block">
            <h5>Làn điệu dân ca tiêu biểu</h5>
            <div class="region-chips-list">
              ${reg.signatureGenres.map(g => `<span class="region-chip"><i class="fas fa-music"></i> ${g}</span>`).join("")}
            </div>
          </div>

          <div class="region-info-block">
            <h5>Phong tục &amp; Lễ hội diễn xướng</h5>
            <ul style="margin-left: 18px; font-size: 0.9rem; color: var(--color-text-secondary);">
              ${reg.customsAndFestivals.map(cf => `<li style="margin-bottom: 4px;">${cf}</li>`).join("")}
            </ul>
          </div>

          <div class="region-info-block">
            <h5>Nghệ nhân tiêu biểu</h5>
            <p>${reg.prominentArtisans.join(" | ")}</p>
          </div>

          <div class="region-story-box">
            <strong><i class="fas fa-book"></i> Chuyện kể nguồn gốc di sản:</strong>
            ${reg.story}
          </div>

          <div style="margin-top: 10px;">
            <button class="btn-primary btn-listen-region-songs" data-region-name="${reg.name}">
              <i class="fas fa-headphones"></i> Nghe các bài hát của ${reg.name}
            </button>
          </div>
        </div>
      </div>
    `;

    // Highlight active tab
    document.querySelectorAll(".region-tab-btn").forEach(btn => {
      if (btn.dataset.regionId === reg.id) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Bind region songs button
    const btnListenRegion = els.regionShowcaseDisplay.querySelector(".btn-listen-region-songs");
    if (btnListenRegion) {
      btnListenRegion.addEventListener("click", () => {
        state.activeRegionFilter = reg.name;
        if (els.regionSelectFilter) els.regionSelectFilter.value = reg.name;
        renderLibrary();
        const libSection = document.getElementById("thu-vien-loi-ca");
        if (libSection) {
          libSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  // 5. MODAL SO SÁNH LỜI CA 3 CỘT
  function openLyricModal(songId) {
    const song = state.allSongs.find(s => s.id === songId);
    if (!song) return;
    state.activeModalSong = song;

    els.modalTitle.textContent = song.title;
    els.modalMeta.textContent = `${song.subGenre} • Dân tộc ${song.ethnic} • Vùng ${song.region} (${song.district || ''})`;

    els.modalMetaSummary.innerHTML = `
      <div class="lyric-meta-summary-grid">
        <div><strong>Nghệ nhân truyền khẩu:</strong> ${song.artisan}</div>
        <div><strong>Người sưu tầm:</strong> ${song.collector}</div>
        <div><strong>Nguồn tư liệu:</strong> ${song.source}</div>
        <div><strong>Thời gian / Niên đại ghi âm:</strong> ${song.recordDate}</div>
      </div>
      <div style="margin-top: 8px; font-size: 0.85rem; color: var(--color-wood-dark);">
        <strong>Bối cảnh diễn xướng:</strong> ${song.context}
      </div>
    `;

    // Render 3 Columns line by line
    const numLines = Math.max(
      song.lyrics.original.length,
      song.lyrics.phonetic.length,
      song.lyrics.translation.length
    );

    let originalHtml = "";
    let phoneticHtml = "";
    let translationHtml = "";

    for (let i = 0; i < numLines; i++) {
      const orig = song.lyrics.original[i] || "";
      const phon = song.lyrics.phonetic[i] || "";
      const trans = song.lyrics.translation[i] || "";

      originalHtml += `<div class="lyric-line-item">${orig}</div>`;
      phoneticHtml += `<div class="lyric-line-item">${phon}</div>`;
      translationHtml += `<div class="lyric-line-item">${trans}</div>`;
    }

    els.modalColOriginal.innerHTML = originalHtml;
    els.modalColPhonetic.innerHTML = phoneticHtml;
    els.modalColTranslation.innerHTML = translationHtml;

    els.modalCitation.innerHTML = `
      <strong><i class="fas fa-shield-alt"></i> Bản quyền &amp; Giấy phép lưu giữ di sản:</strong><br/>
      Tư liệu được sưu tầm, lưu giữ và giới thiệu phục vụ mục đích nghiên cứu, học tập và bảo tồn văn hóa phi vật thể cộng đồng các dân tộc Việt Nam. Khi trích dẫn, vui lòng ghi rõ nguồn: <em>"${song.title}" - Di sản Dân ca Tày Nùng / Dự án Thanh Âm Sli - Lượn (Nguồn: ${song.source}).</em>
    `;

    els.lyricModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLyricModal() {
    els.lyricModal.classList.remove("open");
    document.body.style.overflow = "";
    state.activeModalSong = null;
  }

  // Sao chép lời ca kèm dấu chứng nhận bản quyền và nguồn trích dẫn
  function copySongLyrics() {
    if (!state.activeModalSong) return;
    const song = state.activeModalSong;

    const copyText = `
DI SẢN DÂN CA TÀY NÙNG: ${song.title}
Thể loại: ${song.subGenre} | Dân tộc: ${song.ethnic} | Địa phương: ${song.region}
Nghệ nhân: ${song.artisan}
Người sưu tầm: ${song.collector}
Nguồn tư liệu: ${song.source} (${song.recordDate})
--------------------------------------------------
[LỜI CA NGUYÊN BẢN TIẾNG DÂN TỘC]
${song.lyrics.original.join("\n")}

[PHIÊN ÂM TIẾNG VIỆT]
${song.lyrics.phonetic.join("\n")}

[BẢN DỊCH NGHĨA TIẾNG VIỆT]
${song.lyrics.translation.join("\n")}
--------------------------------------------------
Trích từ cổng thông tin: "THANH ÂM SLI - LƯỢN | DI SẢN DÂN CA TÀY NÙNG"
Lưu giữ tiếng hát – Gìn giữ hồn văn hóa Tày Nùng.
    `.trim();

    navigator.clipboard.writeText(copyText).then(() => {
      showToast("Đã sao chép trọn bộ lời ca, phiên âm và trích dẫn bản quyền!");
    }).catch(() => {
      showToast("Không thể tự động sao chép. Vui lòng quét chọn văn bản bằng chuột.");
    });
  }

  // 6. AUDIO PLAYER INTEGRATION
  function updatePlayerInfo(song) {
    if (!song) return;
    if (els.playerTrackTitle) els.playerTrackTitle.textContent = song.title;
    if (els.playerTrackSubtitle) els.playerTrackSubtitle.textContent = `${song.subGenre} • ${song.artisan} (${song.region})`;
    if (els.playerDuration) els.playerDuration.textContent = song.duration;
    if (els.playerTimeline) els.playerTimeline.max = window.heritageAudio.duration;
  }

  function playSongById(songId) {
    const song = state.allSongs.find(s => s.id === songId);
    if (!song || !window.heritageAudio) return;

    state.currentSongId = songId;
    window.heritageAudio.loadTrack(song);
    updatePlayerInfo(song);
    window.heritageAudio.play();

    renderAudioVault();
    showToast(`Đang phát: ${song.title}`);
  }

  // Connect HeritageAudio callbacks
  if (window.heritageAudio) {
    window.heritageAudio.onPlayStateChange = (isPlaying) => {
      if (els.btnPlayerPlay) {
        els.btnPlayerPlay.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
      }
      renderAudioVault();
    };

    window.heritageAudio.onTimeUpdate = (currentSec, totalSec) => {
      if (els.playerCurrentTime) {
        els.playerCurrentTime.textContent = window.heritageAudio.formatTime(currentSec);
      }
      if (els.playerTimeline) {
        els.playerTimeline.value = currentSec;
        els.playerTimeline.max = totalSec;
      }
    };

    window.heritageAudio.onTrackChange = (song) => {
      updatePlayerInfo(song);
      renderAudioVault();
    };

    window.heritageAudio.onTrackEnd = () => {
      playNextTrack();
    };
  }

  function playNextTrack() {
    const currentIndex = state.allSongs.findIndex(s => s.id === state.currentSongId);
    const nextIndex = (currentIndex + 1) % state.allSongs.length;
    playSongById(state.allSongs[nextIndex].id);
  }

  function playPrevTrack() {
    const currentIndex = state.allSongs.findIndex(s => s.id === state.currentSongId);
    const prevIndex = (currentIndex - 1 + state.allSongs.length) % state.allSongs.length;
    playSongById(state.allSongs[prevIndex].id);
  }

  // Visualizer trên Canvas
  function setupAudioVisualizer() {
    if (!els.waveformCanvas) return;
    const canvas = els.waveformCanvas;
    const ctx = canvas.getContext("2d");

    function draw() {
      requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!window.heritageAudio || !window.heritageAudio.isPlaying) {
        // Flat line when paused
        ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
        ctx.fillRect(0, canvas.height / 2 - 1, canvas.width, 2);
        return;
      }

      const dataArray = window.heritageAudio.getVisualizationData();
      if (!dataArray) return;

      const barWidth = (canvas.width / dataArray.length) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height;

        const r = 212;
        const g = 175;
        const b = 55;

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
    draw();
  }

  // 7. FAVORITES TOGGLE
  function toggleFavorite(songId) {
    const idx = state.favorites.indexOf(songId);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
      showToast("Đã xóa khỏi danh sách yêu thích");
    } else {
      state.favorites.push(songId);
      showToast("Đã lưu vào danh sách yêu thích!");
    }
    localStorage.setItem("sli_luon_favorites", JSON.stringify(state.favorites));

    // Update UI heart icons
    document.querySelectorAll(`[data-fav-id="${songId}"]`).forEach(btn => {
      const isFav = state.favorites.includes(songId);
      btn.classList.toggle("favorited", isFav);
      btn.innerHTML = `<i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>`;
    });
  }

  // 8. FORM ĐÓNG GÓP TƯ LIỆU SƯU TẦM DÂN GIAN
  function handleContributeSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const title = form.songTitle.value.trim();
    const genre = form.songGenre.value;
    const subGenre = form.songSubGenre.value.trim() || `${genre} cổ truyền`;
    const ethnic = form.songEthnic.value;
    const region = form.songRegion.value;
    const artisan = form.songArtisan.value.trim() || "Cộng đồng nhân dân";
    const collector = form.songCollector.value.trim() || "Người dùng đóng góp";
    const originalText = form.songOriginal.value.trim();
    const phoneticText = form.songPhonetic.value.trim();
    const translationText = form.songTranslation.value.trim();
    const contextNote = form.songContext.value.trim() || "Diễn xướng trong sinh hoạt cộng đồng";

    if (!title || !originalText || !translationText) {
      alert("Vui lòng nhập đầy đủ tên bài, lời ca nguyên bản và bản dịch nghĩa tiếng Việt.");
      return;
    }

    const newSong = {
      id: "contribute-" + Date.now(),
      title: title,
      genre: genre,
      subGenre: subGenre,
      ethnic: ethnic,
      region: region,
      district: "Địa phương đóng góp",
      artisan: artisan,
      collector: collector + " (Đóng góp cộng đồng)",
      source: "Đóng góp trực tuyến vào Kho Di sản Dân ca Tày Nùng",
      recordDate: "2026",
      recordType: "Bản ghi âm / lời ca do cộng đồng đóng góp",
      duration: "03:30",
      audioPreset: genre === "Sli" ? "sli_giang" : "luon_sluong",
      summary: contextNote,
      context: contextNote,
      tags: [genre, region, ethnic, "Đóng góp mới"],
      lyrics: {
        original: originalText.split("\n").filter(l => l.trim() !== ""),
        phonetic: (phoneticText || originalText).split("\n").filter(l => l.trim() !== ""),
        translation: translationText.split("\n").filter(l => l.trim() !== "")
      }
    };

    // Save into saved contributions in localStorage
    const contributions = JSON.parse(localStorage.getItem("sli_luon_contributions") || "[]");
    contributions.unshift(newSong);
    localStorage.setItem("sli_luon_contributions", JSON.stringify(contributions));

    // Prepend to current state
    state.allSongs.unshift(newSong);
    renderLibrary();
    renderAudioVault();

    // Close form and show toast
    els.contributeModal.classList.remove("open");
    document.body.style.overflow = "";
    form.reset();
    showToast(`Cảm ơn bạn! Bài dân ca "${title}" đã được lưu giữ thành công vào kho di sản.`);
  }

  // 9. EVENT LISTENERS
  function setupEventListeners() {
    // Mobile navigation toggle
    if (els.menuToggle && els.navMenu) {
      els.menuToggle.addEventListener("click", () => {
        els.navMenu.classList.toggle("mobile-open");
      });
    }

    // Smooth navigation click
    els.navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        els.navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        if (els.navMenu) els.navMenu.classList.remove("mobile-open");
      });
    });

    // Global Click Handler for dynamic buttons (Play, Lyrics, Favorite, Context, Region)
    document.addEventListener("click", (e) => {
      // Play button click
      const btnPlay = e.target.closest("[data-play-id]");
      if (btnPlay) {
        const songId = btnPlay.dataset.playId;
        playSongById(songId);
        return;
      }

      // Lyrics modal open click
      const btnLyrics = e.target.closest("[data-lyrics-id]");
      if (btnLyrics) {
        const songId = btnLyrics.dataset.lyricsId;
        openLyricModal(songId);
        return;
      }

      // Favorite button click
      const btnFav = e.target.closest("[data-fav-id]");
      if (btnFav) {
        const songId = btnFav.dataset.favId;
        toggleFavorite(songId);
        return;
      }

      // Context nav button click
      const btnCtx = e.target.closest("[data-context-id]");
      if (btnCtx) {
        const ctxId = btnCtx.dataset.contextId;
        renderContextDetail(ctxId);
        return;
      }

      // Region tab button click
      const btnReg = e.target.closest("[data-region-id]");
      if (btnReg) {
        const regId = btnReg.dataset.regionId;
        renderRegionDetail(regId);
        return;
      }
    });

    // Library Search with debounce
    let searchTimeout;
    if (els.librarySearchInput) {
      els.librarySearchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          state.searchQuery = e.target.value;
          renderLibrary();
        }, 220);
      });
    }

    // Genre Select Filter
    if (els.genreSelectFilter) {
      els.genreSelectFilter.addEventListener("change", (e) => {
        state.activeGenreFilter = e.target.value;
        updateGenrePills();
        renderLibrary();
      });
    }

    // Region Select Filter
    if (els.regionSelectFilter) {
      els.regionSelectFilter.addEventListener("change", (e) => {
        state.activeRegionFilter = e.target.value;
        renderLibrary();
      });
    }

    // Genre Pills row
    els.genrePills.forEach(pill => {
      pill.addEventListener("click", () => {
        state.activeGenreFilter = pill.dataset.genre;
        if (els.genreSelectFilter) els.genreSelectFilter.value = state.activeGenreFilter;
        updateGenrePills();
        renderLibrary();
      });
    });

    function updateGenrePills() {
      els.genrePills.forEach(p => {
        p.classList.toggle("active", p.dataset.genre === state.activeGenreFilter);
      });
    }

    // Modal Events
    if (els.btnModalClose) {
      els.btnModalClose.addEventListener("click", closeLyricModal);
    }
    if (els.lyricModal) {
      els.lyricModal.addEventListener("click", (e) => {
        if (e.target === els.lyricModal) {
          closeLyricModal();
        }
      });
    }

    // Font size resize in Lyric Modal
    els.fontSizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        els.fontSizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const size = btn.dataset.size;
        els.modalBody.classList.remove("font-sm", "font-md", "font-lg");
        els.modalBody.classList.add(`font-${size}`);
      });
    });

    // Copy lyrics button
    if (els.btnCopyLyrics) {
      els.btnCopyLyrics.addEventListener("click", copySongLyrics);
    }

    // Modal Direct Play Button
    if (els.btnModalPlay) {
      els.btnModalPlay.addEventListener("click", () => {
        if (state.activeModalSong) {
          playSongById(state.activeModalSong.id);
        }
      });
    }

    // Player Controls
    if (els.btnPlayerPlay) {
      els.btnPlayerPlay.addEventListener("click", () => {
        if (window.heritageAudio) {
          window.heritageAudio.togglePlay();
        }
      });
    }

    if (els.btnPlayerNext) {
      els.btnPlayerNext.addEventListener("click", playNextTrack);
    }

    if (els.btnPlayerPrev) {
      els.btnPlayerPrev.addEventListener("click", playPrevTrack);
    }

    if (els.btnPlayerRewind) {
      els.btnPlayerRewind.addEventListener("click", () => {
        if (window.heritageAudio) window.heritageAudio.seekOffset(-5);
      });
    }

    if (els.btnPlayerForward) {
      els.btnPlayerForward.addEventListener("click", () => {
        if (window.heritageAudio) window.heritageAudio.seekOffset(5);
      });
    }

    if (els.btnPlayerLoop) {
      els.btnPlayerLoop.addEventListener("click", () => {
        if (window.heritageAudio) {
          const isLoop = window.heritageAudio.toggleLoop();
          els.btnPlayerLoop.classList.toggle("active", isLoop);
          showToast(isLoop ? "Đã bật chế độ lặp lại bài hát" : "Đã tắt chế độ lặp lại");
        }
      });
    }

    // Playback Speed
    if (els.btnPlayerSpeed) {
      els.btnPlayerSpeed.addEventListener("click", () => {
        state.currentSpeedIndex = (state.currentSpeedIndex + 1) % state.speedOptions.length;
        const newSpeed = state.speedOptions[state.currentSpeedIndex];
        if (window.heritageAudio) {
          window.heritageAudio.setPlaybackRate(newSpeed);
          els.btnPlayerSpeed.textContent = `${newSpeed}x`;
          showToast(`Tốc độ phát: ${newSpeed}x`);
        }
      });
    }

    // Player Timeline Scrubber
    if (els.playerTimeline) {
      els.playerTimeline.addEventListener("input", (e) => {
        if (window.heritageAudio) {
          window.heritageAudio.seek(parseFloat(e.target.value));
        }
      });
    }

    // Volume & Mute
    if (els.volumeSlider) {
      els.volumeSlider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        if (window.heritageAudio) {
          window.heritageAudio.setVolume(val);
        }
        if (els.btnVolumeIcon) {
          els.btnVolumeIcon.innerHTML = val === 0 ? '<i class="fas fa-volume-mute"></i>' : (val < 0.5 ? '<i class="fas fa-volume-down"></i>' : '<i class="fas fa-volume-up"></i>');
        }
      });
    }

    if (els.btnVolumeIcon) {
      let lastVolume = 0.85;
      els.btnVolumeIcon.addEventListener("click", () => {
        if (!window.heritageAudio) return;
        if (window.heritageAudio.volume > 0) {
          lastVolume = window.heritageAudio.volume;
          window.heritageAudio.setVolume(0);
          if (els.volumeSlider) els.volumeSlider.value = 0;
          els.btnVolumeIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
          window.heritageAudio.setVolume(lastVolume);
          if (els.volumeSlider) els.volumeSlider.value = lastVolume;
          els.btnVolumeIcon.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
      });
    }

    // Bottom player "Xem lời" button
    if (els.btnPlayerOpenLyrics) {
      els.btnPlayerOpenLyrics.addEventListener("click", () => {
        if (state.currentSongId) {
          openLyricModal(state.currentSongId);
        }
      });
    }

    // Contribution Modal Handlers
    const openContributeModal = () => {
      els.contributeModal.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    if (els.btnOpenContribute) els.btnOpenContribute.addEventListener("click", openContributeModal);
    if (els.btnOpenContributeHero) els.btnOpenContributeHero.addEventListener("click", openContributeModal);
    if (els.btnHeroListen) {
      els.btnHeroListen.addEventListener("click", () => {
        if (state.allSongs.length > 0) {
          playSongById(state.allSongs[0].id);
        }
      });
    }

    if (els.btnCloseContribute) {
      els.btnCloseContribute.addEventListener("click", () => {
        els.contributeModal.classList.remove("open");
        document.body.style.overflow = "";
      });
    }

    if (els.contributeModal) {
      els.contributeModal.addEventListener("click", (e) => {
        if (e.target === els.contributeModal) {
          els.contributeModal.classList.remove("open");
          document.body.style.overflow = "";
        }
      });
    }

    if (els.contributeForm) {
      els.contributeForm.addEventListener("submit", handleContributeSubmit);
    }

    // Keyboard Shortcuts (Space for Play/Pause, Esc for Modal close)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (els.lyricModal && els.lyricModal.classList.contains("open")) {
          closeLyricModal();
        }
        if (els.contributeModal && els.contributeModal.classList.contains("open")) {
          els.contributeModal.classList.remove("open");
          document.body.style.overflow = "";
        }
      }
      // Space for play/pause when not focused on an input/textarea
      if (e.key === " " && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        if (window.heritageAudio) {
          window.heritageAudio.togglePlay();
        }
      }
    });
  }

  // Run initialization
  init();
});
