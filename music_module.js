(function() {
    const tracks = [
        { name: "Malkuth Battle 3", id: "aeIXVi6iXFI" },
        { name: "Malkuth Story", id: "LhoSpUKQEbU" },
        { name: "Tiphereth Battle 3", id: "M5JelTHJ-eA" },
        { name: "Chesed Battle 3", id: "4AJR475AcgQ" },
        { name: "The Blue Reverberation", id: "uXw1f0porfg" },
        { name: "Lobotomy OST - Neutral04", id: "PRUrlZFty3A" },
        { name: "Library of Ruina - Theme02", id: "On4Hk6b1KsY" }
    ];

    let player;
    let currentTrackIndex = 0;

    // --- 1. 注入 CSS：燃燒與 UI 樣式 ---
    const style = document.createElement('style');
    style.innerHTML = `
        #seed-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 20000;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            /* 燃燒核心：使用漸層遮罩模擬不規則邊緣 */
            mask-image: radial-gradient(circle, transparent 0%, black 0%);
            -webkit-mask-image: radial-gradient(circle, transparent 0%, black 0%);
            mask-size: 300% 300%; mask-position: center;
            transition: -webkit-mask-image 3s ease-in, opacity 3.5s ease;
        }

        /* 當燒毀啟動時的類別 */
        #seed-overlay.burning {
            animation: burn-away 4s forwards linear;
            pointer-events: none;
        }

        @keyframes burn-away {
            0% { 
                -webkit-mask-image: radial-gradient(circle, transparent 0%, black 5%); 
                filter: brightness(1) contrast(1);
            }
            30% {
                -webkit-mask-image: radial-gradient(circle, transparent 20%, black 40%);
                filter: brightness(1.2) sepia(0.5) hue-rotate(-20deg); /* 模擬燒焦火光 */
            }
            100% { 
                -webkit-mask-image: radial-gradient(circle, transparent 100%, black 100%);
                opacity: 0;
            }
        }

        .seed-of-light {
            width: 90px; height: 90px;
            background: radial-gradient(circle, #fff 0%, #ffcc00 50%, transparent 70%);
            border-radius: 50%;
            box-shadow: 0 0 50px #ffaa00;
            cursor: pointer;
            animation: seed-pulse 2.5s infinite ease-in-out;
            z-index: 20001;
            transition: 0.5s;
        }
        .seed-of-light:hover { transform: scale(1.1); box-shadow: 0 0 80px #fff; }
        
        .seed-text {
            margin-top: 30px; color: #d4af37; font-family: "serif";
            font-size: 13px; letter-spacing: 5px; opacity: 0.5;
            text-shadow: 0 0 10px #ffaa00;
        }

        /* 其它介面 */
        .music-note { position: fixed; bottom: 85px; right: 20px; background: rgba(0,0,0,0.9); border-left: 4px solid #ff3b3b; padding: 12px 20px; border-radius: 8px; color: white; font-size: 14px; z-index: 9999; transform: translateX(150%); transition: 0.5s; pointer-events: none; }
        .music-note.show { transform: translateX(0); }
        #music-control-btn { position: fixed; bottom: 20px; right: 20px; width: 55px; height: 55px; background: #151515; border: 1px solid #d4af37; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; font-size: 22px; box-shadow: 0 0 15px rgba(212,175,55,0.3); }
        #playlist-window { position: fixed; bottom: 85px; right: 20px; width: 280px; background: #0f0f0f; border: 1px solid #2e2e2e; border-radius: 12px; display: none; flex-direction: column; z-index: 9998; overflow: hidden; }
        #playlist-window.open { display: flex; }
        .track-item { padding: 12px; cursor: pointer; color: #888; border-bottom: 1px solid #1a1a1a; font-size: 13px; }
        .track-item.active { color: #ff3b3b; background: rgba(255, 59, 59, 0.1); border-left: 3px solid #ff3b3b; }
        @keyframes seed-pulse { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
    `;
    document.head.appendChild(style);

    // --- 2. 注入 HTML ---
    const container = document.createElement('div');
    container.innerHTML = `
        <div id="seed-overlay">
            <div class="seed-of-light" id="start-btn"></div>
            <div class="seed-text">JOIN THE ARCHIVE</div>
        </div>
        <div id="music-notification" class="music-note"></div>
        <div id="music-control-btn">🎵</div>
        <div id="playlist-window">
            <div style="padding:15px; color:#d4af37; font-weight:bold; border-bottom:1px solid #333; font-size:12px;">LIBRARY AUDIO</div>
            <div id="playlist-content"></div>
        </div>
        <div id="youtube-player"></div>
    `;
    document.body.appendChild(container);

    // --- 3. YouTube API ---
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-player', {
            height: '0', width: '0',
            videoId: tracks[currentTrackIndex].id,
            playerVars: { 'autoplay': 0, 'controls': 0 },
            events: { 'onReady': () => initApp(), 'onStateChange': (e) => { if (e.data == YT.PlayerState.ENDED) nextTrack(); } }
        });
    };

    // --- 4. 音量淡入功能 ---
    function fadeInAudio() {
        let vol = 0;
        player.setVolume(0);
        player.playVideo();
        const interval = setInterval(() => {
            vol += 2;
            player.setVolume(vol);
            if (vol >= 50) clearInterval(interval);
        }, 100); // 每 0.1 秒增加音量，約 2.5 秒完成淡入
    }

    function initApp() {
        initUI();
        const startBtn = document.getElementById('start-btn');
        const overlay = document.getElementById('seed-overlay');

        startBtn.onclick = () => {
            // 音訊淡入啟動
            fadeInAudio();
            
            // 隱藏種子並觸發燒毀動畫
            startBtn.style.opacity = '0';
            document.querySelector('.seed-text').style.opacity = '0';
            overlay.classList.add('burning');
            
            setTimeout(() => showNotice(tracks[currentTrackIndex].name), 1500);
            setTimeout(() => overlay.remove(), 4000);
        };
    }

    // 其它清單逻辑...
    function initUI() {
        document.getElementById('music-control-btn').onclick = () => {
            document.getElementById('playlist-window').classList.toggle('open');
        };
        const content = document.getElementById('playlist-content');
        tracks.forEach((t, i) => {
            const item = document.createElement('div');
            item.className = `track-item ${i === currentTrackIndex ? 'active' : ''}`;
            item.innerText = `${i+1}. ${t.name}`;
            item.onclick = () => playTrack(i);
            content.appendChild(item);
        });
    }

    function playTrack(i) {
        currentTrackIndex = i;
        player.loadVideoById(tracks[i].id);
        player.setVolume(50);
        document.querySelectorAll('.track-item').forEach((el, idx) => el.classList.toggle('active', idx === i));
        showNotice(tracks[i].name);
        document.getElementById('playlist-window').classList.remove('open');
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function showNotice(name) {
        const note = document.getElementById('music-notification');
        note.innerHTML = `<div style="font-size:10px; color:#888;">Now Playing</div><b>${name}</b>`;
        note.classList.add('show');
        setTimeout(() => note.classList.remove('show'), 4000);
    }
})();
