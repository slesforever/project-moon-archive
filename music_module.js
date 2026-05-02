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
    let targetVolume = 50;

    // --- CSS 注入 (燃燒特效與介面) ---
    const style = document.createElement('style');
    style.innerHTML = `
        #seed-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 20000;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            -webkit-mask-image: radial-gradient(circle, transparent 0%, black 0%);
            mask-image: radial-gradient(circle, transparent 0%, black 0%);
            transition: opacity 3s ease;
        }
        #seed-overlay.burning {
            animation: burn-sequence 4s forwards ease-in;
            pointer-events: none;
        }
        @keyframes burn-sequence {
            0% { -webkit-mask-image: radial-gradient(circle, transparent 0%, black 10%); }
            50% { -webkit-mask-image: radial-gradient(circle, transparent 40%, black 60%); filter: brightness(1.3) contrast(1.2) sepia(0.3); }
            100% { -webkit-mask-image: radial-gradient(circle, transparent 150%, black 150%); opacity: 0; }
        }
        .seed-of-light {
            width: 90px; height: 90px;
            background: radial-gradient(circle, #fff 10%, #ffcc00 40%, transparent 70%);
            border-radius: 50%; box-shadow: 0 0 50px #ffaa00;
            cursor: pointer; animation: pulse 2s infinite; transition: 0.8s;
        }
        .seed-of-light.ignited { transform: scale(3); opacity: 0; filter: blur(20px); }
        .seed-text { margin-top: 25px; color: #d4af37; font-family: serif; letter-spacing: 5px; opacity: 0.6; transition: 0.5s; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 0.7; } }

        /* UI 樣式 */
        .music-note { position: fixed; bottom: 85px; right: 20px; background: rgba(0,0,0,0.9); border-left: 4px solid #ff3b3b; padding: 12px 20px; border-radius: 8px; color: white; font-size: 14px; z-index: 9999; transform: translateX(150%); transition: 0.5s; pointer-events: none; }
        .music-note.show { transform: translateX(0); }
        #music-control-btn { position: fixed; bottom: 20px; right: 20px; width: 55px; height: 55px; background: #151515; border: 1px solid #d4af37; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; font-size: 22px; }
        #playlist-window { position: fixed; bottom: 85px; right: 20px; width: 280px; background: #0f0f0f; border: 1px solid #2e2e2e; border-radius: 12px; display: none; flex-direction: column; z-index: 9998; overflow: hidden; }
        #playlist-window.open { display: flex; }
        .track-item { padding: 12px; cursor: pointer; color: #888; border-bottom: 1px solid #1a1a1a; font-size: 13px; }
        .track-item.active { color: #ff3b3b; background: rgba(255, 59, 59, 0.1); border-left: 3px solid #ff3b3b; }
    `;
    document.head.appendChild(style);

    // --- HTML 注入 ---
    const container = document.createElement('div');
    container.innerHTML = `
        <div id="seed-overlay">
            <div class="seed-of-light" id="start-btn"></div>
            <div class="seed-text">CLICK TO COALESCE</div>
        </div>
        <div id="music-notification" class="music-note"></div>
        <div id="music-control-btn">🎵</div>
        <div id="playlist-window">
            <div style="padding:15px; color:#d4af37; font-weight:bold; border-bottom:1px solid #333; font-size:12px;">LIBRARY AUDIO</div>
            <div id="playlist-content"></div>
        </div>
        <div id="youtube-player" style="position:absolute; top:-1000px;"></div>
    `;
    document.body.appendChild(container);

    // --- YouTube API 控制 ---
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-player', {
            height: '0', width: '0',
            videoId: tracks[currentTrackIndex].id,
            playerVars: { 'autoplay': 0, 'controls': 0, 'enablejsapi': 1 },
            events: { 
                'onReady': () => {
                    initUI();
                    document.getElementById('start-btn').onclick = startRitual;
                },
                'onStateChange': (e) => { if (e.data == YT.PlayerState.ENDED) nextTrack(); }
            }
        });
    };

    // --- 平滑音量過渡引擎 ---
    function transitionVolume(start, end, duration) {
        const startTime = performance.now();
        function update() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentVol = start + (end - start) * progress;
            player.setVolume(currentVol);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    function startRitual() {
        const startBtn = document.getElementById('start-btn');
        const overlay = document.getElementById('seed-overlay');
        const text = document.querySelector('.seed-text');

        // 音樂淡入
        player.playVideo();
        transitionVolume(0, targetVolume, 2500);

        // 視覺動畫
        startBtn.classList.add('ignited');
        text.style.opacity = '0';
        overlay.classList.add('burning');

        setTimeout(() => showNotice(tracks[currentTrackIndex].name), 1500);
        setTimeout(() => overlay.remove(), 4500);
    }

    function playTrack(i) {
        // 切換歌曲時：先淡出 -> 換歌 -> 再淡入
        transitionVolume(targetVolume, 0, 800);
        
        setTimeout(() => {
            currentTrackIndex = i;
            player.loadVideoById(tracks[i].id);
            transitionVolume(0, targetVolume, 1200);
            
            document.querySelectorAll('.track-item').forEach((el, idx) => el.classList.toggle('active', idx === i));
            showNotice(tracks[i].name);
        }, 850);
        
        document.getElementById('playlist-window').classList.remove('open');
    }

    // 其他 UI 控制
    function initUI() {
        document.getElementById('music-control-btn').onclick = () => document.getElementById('playlist-window').classList.toggle('open');
        const content = document.getElementById('playlist-content');
        tracks.forEach((t, i) => {
            const item = document.createElement('div');
            item.className = `track-item ${i === currentTrackIndex ? 'active' : ''}`;
            item.innerText = `${i+1}. ${t.name}`;
            item.onclick = () => playTrack(i);
            content.appendChild(item);
        });
    }

    function nextTrack() {
        let nextIdx = (currentTrackIndex + 1) % tracks.length;
        playTrack(nextIdx);
    }

    function showNotice(name) {
        const note = document.getElementById('music-notification');
        note.innerHTML = `<div style="font-size:10px; color:#888;">Now Playing</div><b>${name}</b>`;
        note.classList.add('show');
        setTimeout(() => note.classList.remove('show'), 4000);
    }
})();
