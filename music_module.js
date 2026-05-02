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
    let isUnmuted = false;

    // --- 自動注入 CSS ---
    const style = document.createElement('style');
    style.innerHTML = `
        .music-note { position: fixed; bottom: 85px; right: 20px; background: rgba(0,0,0,0.9); border-left: 4px solid #ff3b3b; padding: 12px 20px; border-radius: 8px; color: white; font-size: 14px; z-index: 9999; transform: translateX(150%); transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28); box-shadow: 0 10px 30px rgba(0,0,0,0.5); pointer-events: none; font-family: sans-serif; }
        .music-note.show { transform: translateX(0); }
        #music-control-btn { position: fixed; bottom: 20px; right: 20px; width: 55px; height: 55px; background: #151515; border: 1px solid #d4af37; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; font-size: 22px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: 0.3s; }
        #music-control-btn:hover { background: #d4af37; transform: scale(1.1); }
        #playlist-window { position: fixed; bottom: 85px; right: 20px; width: 280px; background: #0f0f0f; border: 1px solid #2e2e2e; border-radius: 12px; display: none; flex-direction: column; z-index: 9998; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); font-family: sans-serif; }
        #playlist-window.open { display: flex; animation: pmu-up 0.3s ease; }
        .pmu-header { padding: 15px; background: #151515; border-bottom: 1px solid #333; font-weight: bold; color: #d4af37; font-size: 14px; }
        #playlist-content { max-height: 350px; overflow-y: auto; padding: 10px; }
        .track-item { padding: 12px; cursor: pointer; border-radius: 8px; font-size: 13px; color: #888; transition: 0.2s; border-bottom: 1px solid #1a1a1a; }
        .track-item:hover { background: rgba(212, 175, 55, 0.1); color: #d4af37; }
        .track-item.active { color: #ff3b3b; background: rgba(255, 59, 59, 0.1); border-left: 3px solid #ff3b3b; }
        @keyframes pmu-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(style);

    // --- 自動注入 HTML ---
    const container = document.createElement('div');
    container.innerHTML = `
        <div id="music-notification" class="music-note"></div>
        <div id="music-control-btn">🎵</div>
        <div id="playlist-window">
            <div class="pmu-header">ARCHIVE AUDIO SETTINGS</div>
            <div id="playlist-content"></div>
        </div>
        <div id="youtube-player" style="display:none;"></div>
    `;
    document.body.appendChild(container);

    // --- 載入 API ---
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-player', {
            height: '0', width: '0',
            videoId: tracks[currentTrackIndex].id,
            playerVars: { 'autoplay': 1, 'mute': 1, 'controls': 0 },
            events: {
                'onReady': (e) => { 
                    initUI();
                    e.target.playVideo(); // 悄悄靜音播放
                    startDetection(); 
                },
                'onStateChange': (e) => { if (e.data == YT.PlayerState.ENDED) nextTrack(); }
            }
        });
    };

    function startDetection() {
        const tryUnmute = () => {
            if (isUnmuted) return;
            player.unMute();
            player.setVolume(50);
            
            // 檢查是否成功出聲
            if (player.isMuted() === false) {
                isUnmuted = true;
                showNotice(tracks[currentTrackIndex].name);
                console.log("Audio Unlocked via interaction");
                // 移除所有監聽
                ['mousedown', 'wheel', 'keydown', 'touchstart', 'mousemove'].forEach(evt => {
                    window.removeEventListener(evt, tryUnmute);
                });
            }
        };

        // 監聽所有可能的動作：點擊、滾輪、按鍵、甚至是滑鼠大面積移動
        window.addEventListener('mousedown', tryUnmute);
        window.addEventListener('wheel', tryUnmute);
        window.addEventListener('keydown', tryUnmute);
        window.addEventListener('touchstart', tryUnmute);
        window.addEventListener('mousemove', tryUnmute); // 雖然機率低，但有些瀏覽器會過
    }

    function initUI() {
        document.getElementById('music-control-btn').onclick = (e) => {
            e.stopPropagation();
            document.getElementById('playlist-window').classList.toggle('open');
        };
        const content = document.getElementById('playlist-content');
        tracks.forEach((t, i) => {
            const item = document.createElement('div');
            item.className = `track-item ${i === currentTrackIndex ? 'active' : ''}`;
            item.innerText = `${i + 1}. ${t.name}`;
            item.onclick = (e) => { e.stopPropagation(); isUnmuted = true; playTrack(i); };
            content.appendChild(item);
        });
    }

    function playTrack(i) {
        currentTrackIndex = i;
        player.loadVideoById(tracks[i].id);
        player.unMute();
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
