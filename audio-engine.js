/**
 * AUDIO ENGINE - CÔNG CỤ ÂM THANH DI SẢN
 * Phục dựng âm điệu Đàn Tính và Lối hát bè Sli - Lượn bằng Web Audio API
 * Tích hợp Visualizer sóng âm, điều khiển tiến trình, âm lượng và danh sách phát
 */

class HeritageAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.currentTrack = null;
    this.isPlaying = false;
    this.isLooping = false;
    this.playbackRate = 1.0;
    this.volume = 0.85;
    this.currentTime = 0;
    this.duration = 222; // default seconds (3:42)
    this.analyser = null;
    this.dataArray = null;
    this.gainNode = null;
    this.timerInterval = null;
    this.noteTimers = [];
    
    // Callbacks
    this.onPlayStateChange = null;
    this.onTimeUpdate = null;
    this.onTrackChange = null;
    this.onTrackEnd = null;

    // Melody scale frequencies (Pentatonic Tày Nùng / Điệu Slương - Then - Cọi)
    // C4=261.63, D4=293.66, E4=329.63, G4=392.00, A4=440.00, C5=523.25, D5=587.33, E5=659.25
    this.pitches = {
      C3: 130.81, D3: 146.83, E3: 164.81, G3: 196.00, A3: 220.00,
      C4: 261.63, D4: 293.66, E4: 329.63, G4: 392.00, A4: 440.00,
      C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.00
    };

    // Melody sequences for presets
    this.melodies = {
      luon_sluong: [
        { note1: "A3", note2: "E4", dur: 1.2, rest: 0.1, type: "tinh" },
        { note1: "C4", note2: "G4", dur: 1.0, rest: 0.1, type: "vocal" },
        { note1: "D4", note2: "A4", dur: 1.5, rest: 0.2, type: "vocal" },
        { note1: "E4", note2: "C5", dur: 1.8, rest: 0.3, type: "both" },
        { note1: "D4", note2: "A4", dur: 1.2, rest: 0.1, type: "vocal" },
        { note1: "C4", note2: "G4", dur: 1.4, rest: 0.2, type: "both" },
        { note1: "A3", note2: "E4", dur: 2.2, rest: 0.5, type: "tinh" },
        { note1: "G3", note2: "D4", dur: 1.0, rest: 0.1, type: "vocal" },
        { note1: "A3", note2: "E4", dur: 2.5, rest: 0.6, type: "both" }
      ],
      sli_giang: [
        // Dual vocal polyphony: Bắt lờn (Lead) + Táng lờn (Harmonic counterpoint)
        { note1: "E4", note2: "B4", dur: 1.5, rest: 0.1, type: "polyphony" },
        { note1: "G4", note2: "D5", dur: 1.4, rest: 0.1, type: "polyphony" },
        { note1: "A4", note2: "E5", dur: 2.0, rest: 0.2, type: "polyphony" },
        { note1: "G4", note2: "C5", dur: 1.2, rest: 0.1, type: "polyphony" },
        { note1: "E4", note2: "B4", dur: 1.8, rest: 0.3, type: "polyphony" },
        { note1: "D4", note2: "A4", dur: 2.2, rest: 0.4, type: "polyphony" },
        { note1: "E4", note2: "B4", dur: 2.8, rest: 0.6, type: "polyphony" }
      ],
      dan_tinh_coi: [
        // Plucked Tày Tính tẩu rhythmic melody
        { note1: "A3", note2: "E4", dur: 0.6, rest: 0.05, type: "tinh" },
        { note1: "C4", note2: "A4", dur: 0.6, rest: 0.05, type: "tinh" },
        { note1: "D4", note2: "A4", dur: 0.8, rest: 0.1, type: "both" },
        { note1: "E4", note2: "C5", dur: 0.7, rest: 0.05, type: "tinh" },
        { note1: "G4", note2: "D5", dur: 1.2, rest: 0.2, type: "both" },
        { note1: "E4", note2: "C5", dur: 0.6, rest: 0.05, type: "tinh" },
        { note1: "D4", note2: "A4", dur: 0.8, rest: 0.1, type: "both" },
        { note1: "A3", note2: "E4", dur: 1.8, rest: 0.3, type: "tinh" }
      ],
      sli_sinh_lang: [
        // Intimate fireside drone + gentle duet
        { note1: "D4", note2: "A4", dur: 1.8, rest: 0.2, type: "polyphony" },
        { note1: "F4", note2: "C5", dur: 1.5, rest: 0.1, type: "polyphony" },
        { note1: "G4", note2: "D5", dur: 2.4, rest: 0.3, type: "polyphony" },
        { note1: "F4", note2: "C5", dur: 1.6, rest: 0.1, type: "polyphony" },
        { note1: "D4", note2: "A4", dur: 2.8, rest: 0.5, type: "polyphony" }
      ],
      luon_nang_hai: [
        // Ceremonial triple rhythm with shimmering bells
        { note1: "G3", note2: "D4", dur: 1.0, rest: 0.1, type: "bell_tinh" },
        { note1: "C4", note2: "G4", dur: 1.0, rest: 0.1, type: "bell_tinh" },
        { note1: "D4", note2: "A4", dur: 1.4, rest: 0.2, type: "both" },
        { note1: "E4", note2: "C5", dur: 1.6, rest: 0.2, type: "both" },
        { note1: "G4", note2: "D5", dur: 2.2, rest: 0.4, type: "both" },
        { note1: "E4", note2: "C5", dur: 1.2, rest: 0.1, type: "bell_tinh" },
        { note1: "D4", note2: "A4", dur: 1.8, rest: 0.3, type: "bell_tinh" }
      ],
      sli_xuan_duong: [
        // Poignant romantic longing
        { note1: "A3", note2: "E4", dur: 2.0, rest: 0.2, type: "polyphony" },
        { note1: "C4", note2: "G4", dur: 1.8, rest: 0.2, type: "polyphony" },
        { note1: "E4", note2: "B4", dur: 2.5, rest: 0.3, type: "polyphony" },
        { note1: "D4", note2: "A4", dur: 2.0, rest: 0.2, type: "polyphony" },
        { note1: "A3", note2: "E4", dur: 3.2, rest: 0.6, type: "polyphony" }
      ]
    };
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
      
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 128;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

      this.gainNode.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    }

    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  // Parse "03:42" into seconds
  parseDuration(str) {
    if (!str) return 222;
    const parts = str.split(":");
    if (parts.length === 2) {
      return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
    return 222;
  }

  // Format seconds into "03:42"
  formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  // Tải một bài hát vào Audio Engine
  loadTrack(song) {
    this.stopPlayback();
    this.currentTrack = song;
    this.currentTime = 0;
    this.duration = this.parseDuration(song.duration);

    if (this.onTrackChange) {
      this.onTrackChange(this.currentTrack);
    }
    if (this.onTimeUpdate) {
      this.onTimeUpdate(this.currentTime, this.duration);
    }
  }

  // Bắt đầu hoặc tiếp tục phát
  play() {
    if (!this.currentTrack) return;
    this.initAudioContext();
    this.isPlaying = true;

    if (this.onPlayStateChange) {
      this.onPlayStateChange(true);
    }

    // Khởi động chu trình nốt nhạc mô phỏng di sản
    this.startMelodyLoop();

    // Khởi động đồng hồ thời gian phát
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.currentTime += 1 * this.playbackRate;
      if (this.currentTime >= this.duration) {
        if (this.isLooping) {
          this.currentTime = 0;
        } else {
          this.stopPlayback();
          if (this.onTrackEnd) {
            this.onTrackEnd(this.currentTrack);
          }
          return;
        }
      }
      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.currentTime, this.duration);
      }
    }, 1000);
  }

  // Tạm dừng phát
  pause() {
    this.isPlaying = false;
    this.stopMelodyNodes();
    clearInterval(this.timerInterval);

    if (this.onPlayStateChange) {
      this.onPlayStateChange(false);
    }
  }

  // Bật/tắt phát nhạc
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  // Dừng hẳn phát và dọn dẹp
  stopPlayback() {
    this.isPlaying = false;
    this.stopMelodyNodes();
    clearInterval(this.timerInterval);
    if (this.onPlayStateChange) {
      this.onPlayStateChange(false);
    }
  }

  // Nhảy tới vị trí giây cụ thể
  seek(targetSeconds) {
    this.currentTime = Math.max(0, Math.min(targetSeconds, this.duration));
    if (this.onTimeUpdate) {
      this.onTimeUpdate(this.currentTime, this.duration);
    }
  }

  // Tua tới trước (+) hoặc lùi lại (-) N giây
  seekOffset(deltaSeconds) {
    this.seek(this.currentTime + deltaSeconds);
  }

  // Điều chỉnh âm lượng (0.0 đến 1.0)
  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
  }

  // Điều chỉnh tốc độ phát
  setPlaybackRate(rate) {
    this.playbackRate = rate;
  }

  // Gảy một nốt Đàn Tính đơn lẻ (dành cho mô phỏng tương tác)
  pluckString(pitchKey = "A3") {
    this.initAudioContext();
    const freq = this.pitches[pitchKey] || 440;
    this.playPluckNote(freq, 2.0);
  }

  playPluckNote(frequency, duration = 2.0) {
    if (!this.audioCtx) this.initAudioContext();
    const now = this.audioCtx.currentTime;

    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    osc1.type = "triangle";
    osc2.type = "sine";
    osc1.frequency.setValueAtTime(frequency, now);
    osc2.frequency.setValueAtTime(frequency * 2, now);

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(frequency * 1.5, now);
    filter.Q.setValueAtTime(3.5, now);

    const env = this.audioCtx.createGain();
    env.gain.setValueAtTime(0.001, now);
    env.gain.linearRampToValueAtTime(0.4, now + 0.015);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(env);
    env.connect(this.gainNode);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  // Bật tắt chế độ lặp lại
  toggleLoop() {
    this.isLooping = !this.isLooping;
    return this.isLooping;
  }

  // Âm thanh Đàn Tính (Tính tẩu): Mô phỏng dao động dây tơ và bầu bí cộng hưởng
  playDanTinhTone(frequency, duration) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;

    // Bộ tạo sóng chính: tam giác (triangle) kết hợp sin tạo âm sắc mộc mạc của tơ tằm
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    osc1.type = "triangle";
    osc2.type = "sine";
    osc1.frequency.setValueAtTime(frequency, now);
    osc2.frequency.setValueAtTime(frequency * 2, now); // Bồi âm quãng tám

    // Hộp cộng hưởng bầu bí: Bộ lọc băng thông dải trung (Bandpass)
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(frequency * 1.5, now);
    filter.Q.setValueAtTime(3.5, now);

    // Bao độ ngân (Envelope) gảy đàn: Tấn công tức thì, tắt dần mềm mại
    const env = this.audioCtx.createGain();
    env.gain.setValueAtTime(0.001, now);
    env.gain.linearRampToValueAtTime(0.35, now + 0.02);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Kết nối
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(env);
    env.connect(this.gainNode);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  // Âm thanh Giọng hát Sli / Lượn (Vocal Formants): Mô phỏng âm hưởng bè trầm, bè bổng
  playVocalTone(frequency, duration, isHighVoice = false) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;

    const osc = this.audioCtx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(frequency, now);

    // Rung giọng tự nhiên (Vibrato)
    const vibrato = this.audioCtx.createOscillator();
    const vibratoGain = this.audioCtx.createGain();
    vibrato.frequency.value = 5.2; // 5Hz vibrato
    vibratoGain.gain.value = frequency * 0.015; // rung 1.5% tần số
    vibrato.connect(osc.frequency);
    vibrato.start(now);
    vibrato.stop(now + duration);

    // Formant filter mô phỏng họng người (nguyên âm Tày Nùng /ơ/ /ư/ /a/)
    const formant = this.audioCtx.createBiquadFilter();
    formant.type = isHighVoice ? "peaking" : "lowpass";
    formant.frequency.setValueAtTime(isHighVoice ? 1200 : 750, now);
    formant.Q.setValueAtTime(2.0, now);

    const env = this.audioCtx.createGain();
    env.gain.setValueAtTime(0.001, now);
    env.gain.linearRampToValueAtTime(0.2, now + 0.15); // Lấy hơi mềm
    env.gain.setValueAtTime(0.18, now + duration - 0.2);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Nhả hơi cuối câu

    osc.connect(formant);
    formant.connect(env);
    env.connect(this.gainNode);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Âm thanh Xóc nhạc bạc / Quạt giấy Nàng Hai (Bell / Shaker)
  playShakerTone(duration = 0.3) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;

    const osc = this.audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(2800, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + duration);

    const env = this.audioCtx.createGain();
    env.gain.setValueAtTime(0.08, now);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(env);
    env.connect(this.gainNode);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Bắt đầu chu trình nốt nhạc cho bài hát hiện tại
  startMelodyLoop() {
    this.stopMelodyNodes();
    if (!this.currentTrack) return;

    const presetName = this.currentTrack.audioPreset || "luon_sluong";
    const melody = this.melodies[presetName] || this.melodies.luon_sluong;

    let totalOffset = 0;
    const schedulePhrase = () => {
      if (!this.isPlaying) return;

      totalOffset = 0;
      melody.forEach(step => {
        const stepDuration = (step.dur || 1.2) / this.playbackRate;
        const stepRest = (step.rest || 0.1) / this.playbackRate;
        const triggerTime = totalOffset;

        const timer = setTimeout(() => {
          if (!this.isPlaying) return;

          const f1 = this.pitches[step.note1] || 330;
          const f2 = this.pitches[step.note2] || 440;

          if (step.type === "tinh") {
            this.playDanTinhTone(f1, stepDuration);
          } else if (step.type === "vocal") {
            this.playVocalTone(f1, stepDuration, false);
          } else if (step.type === "polyphony") {
            // Hát bè kép đặc sắc của Sli: Bắt lờn (f1) + Táng lờn (f2)
            this.playVocalTone(f1, stepDuration, false);
            this.playVocalTone(f2, stepDuration * 0.95, true);
          } else if (step.type === "both") {
            this.playDanTinhTone(f1, stepDuration);
            this.playVocalTone(f2, stepDuration, true);
          } else if (step.type === "bell_tinh") {
            this.playDanTinhTone(f1, stepDuration);
            this.playShakerTone(0.2);
          }
        }, triggerTime * 1000);

        this.noteTimers.push(timer);
        totalOffset += stepDuration + stepRest;
      });

      // Lặp lại chuỗi nốt khi hết giai điệu
      const loopTimer = setTimeout(() => {
        if (this.isPlaying) {
          schedulePhrase();
        }
      }, totalOffset * 1000);
      this.noteTimers.push(loopTimer);
    };

    schedulePhrase();
  }

  stopMelodyNodes() {
    this.noteTimers.forEach(t => clearTimeout(t));
    this.noteTimers = [];
  }

  // Lấy dữ liệu phổ âm thanh cho Canvas Visualizer
  getVisualizationData() {
    if (!this.analyser || !this.dataArray || !this.isPlaying) {
      return null;
    }
    this.analyser.getByteFrequencyData(this.dataArray);
    return this.dataArray;
  }
}

// Khởi tạo đối tượng toàn cục
if (typeof window !== "undefined") {
  window.heritageAudio = new HeritageAudioEngine();
}

