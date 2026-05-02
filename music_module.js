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

    // --- 1. 注入光之種特效 CSS ---
    const style = document.createElement('style');
    style.innerHTML = `
        #seed-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 20000;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            transition: opacity 1.5s ease, clip-path 2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        /* 光之種本體 */
        .seed-of-light {
            width: 80px; height: 80px;
            background: radial-gradient(circle, #fff 0%, #d4af37 40%, transparent 70%);
            border-radius: 50%;
            box-shadow: 0 0 40px #d4af37;
            cursor: pointer;
            animation: seed-pulse 3s infinite ease-in-out;
            transition: transform 0.5s ease;
        }
        .seed-of-light:hover { transform: scale(1.2); box-shadow: 0 0 60px #fff; }
        .seed-text {
            margin-top: 25px; color: #d4af37; font-family: "Courier New", monospace;
            font-size: 14px; letter-spacing: 3px; opacity: 0.6;
            animation: text-fade 2s infinite alternate;
        }
        /* 燃燒擴散動畫 */
        #seed-overlay.burning {
            clip-path: circle(0% at 50% 50%);
            opacity: 0;
            pointer-events: none;
        }
        @keyframes seed-pulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes text-fade { from { opacity: 0.2; } to { opacity: 0.8; } }

        /* UI 樣式維持不變 */
        .music-note { position: fixed; bottom: 85px; right: 20px; background: rgba(0,0,0,0.9); border-left: 4px solid #ff3b3b; padding: 12px 20px; border-radius: 8px; color: white; font-size: 14px; z-index: 9999; transform: translateX(150%); transition: 0.5s; pointer-events: none; }
        .music-note.show { transform: translateX(0); }
        #music-control-btn { position: fixed; bottom: 20px; right: 20px; width: 55px; height: 55px; background: #151515; border: 1px solid #d4af37; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; font-size: 22px; transition: 0.3s; box-shadow: 0 0 15px rgba(212,175,55,0.3); }
        #playlist-window { position: fixed; bottom: 85px; right: 20px; width: 280px; background: #0f0f0f; border: 1px solid #2e2e2e; border-radius: 12px; display: none; flex-direction: column; z-index: 9998; overflow: hidden; }
        #playlist-window.open { display: flex; }
        .track-item { padding: 12px; cursor: pointer; color: #888; border-bottom: 1px solid #1a1a1a; font-size: 13px; transition: 0.3s; }
        .track-item:hover { color: #fff; background: #222; }
        .track-item.active { color: #ff3b3b; background: rgba(255, 59, 59, 0.1); border-left: 3px solid #ff3b3b; }
    `;
    document.head.appendChild(style);

    // --- 2. 注入 HTML ---
    const container = document.createElement('div');
    container.innerHTML = `
        <div id="seed-overlay">
            <div class="seed-of-light" id="start-btn"></div>
            <div class="seed-text">EXTRACTING MEMORIES...</div>
        </div>
        <div id="music-notification" class="music-note"></div>
        <div id="music-control-btn">🎵</div>
        <div id="playlist-window">
            <div style="padding:15px; color:#d4af37; font-weight:bold; border-bottom:1px solid #333; font-size:12px;">ARCHIVE AUDIO SYSTEM</div>
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

    function initApp() {
        initUI();
        const startBtn = document.getElementById('start-btn');
        const overlay = document.getElementById('seed-overlay');

        startBtn.onclick = () => {
            // 播放音樂
            player.playVideo();
            player.setVolume(50);
            
            // 觸發「燒穿」特效
            overlay.classList.add('burning');
            
            // 顯示通知
            setTimeout(() => showNotice(tracks[currentTrackIndex].name), 1000);
            
            // 動畫結束後徹底移除元素節省效能
            setTimeout(() => overlay.remove(), 2500);
        };
    }

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
