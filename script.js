/**
 * PROJECT MOON ARCHIVE - 音樂播放模組
 */

// 1. 曲目資料庫
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

// 2. YouTube API 回調 (當 <script src="...iframe_api"> 載入完成後會自動執行)
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: tracks[currentTrackIndex].id,
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 3. 播放器準備就緒
function onPlayerReady(event) {
    console.log("Music Player Ready.");
    initPlaylistUI();
}

// 4. 監控播放狀態 (自動下一首)
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        nextTrack();
    }
}

// 5. 顯示通知效果 (播放時跳出)
function showNotice(name) {
    const note = document.getElementById("music-notification");
    if (!note) return;
    
    note.innerHTML = `<div style="font-size:10px; color:#888; margin-bottom:4px;">Now Playing</div><b style="color:#d4af37;">${name}</b>`;
    note.classList.add("show");
    
    // 4秒後消失
    setTimeout(() => {
        note.classList.remove("show");
    }, 4000);
}

// 6. 初始化播放清單 UI
function initPlaylistUI() {
    const container = document.getElementById("playlist-content");
    if (!container) return;
    
    container.innerHTML = "";
    tracks.forEach((t, index) => {
        const div = document.createElement("div");
        div.className = `track-item ${index === currentTrackIndex ? 'active' : ''}`;
        div.innerText = `${index + 1}. ${t.name}`;
        div.onclick = () => playTrack(index);
        container.appendChild(div);
    });
}

// 7. 播放特定曲目
function playTrack(index) {
    currentTrackIndex = index;
    if (player && player.loadVideoById) {
        player.loadVideoById(tracks[index].id);
        showNotice(tracks[index].name);
        initPlaylistUI(); // 更新清單的 active 狀態
    }
}

// 8. 下一首
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
}

// 9. 開啟/關閉曲目設定視窗
function togglePlaylist() {
    const win = document.getElementById("playlist-window");
    if (win) {
        win.classList.toggle("open");
    }
}

// 10. 點擊畫面其他地方自動關閉選單
window.addEventListener('click', (e) => {
    const win = document.getElementById("playlist-window");
    const btn = document.getElementById("music-control-btn");
    if (win && win.classList.contains("open")) {
        if (!win.contains(e.target) && !btn.contains(e.target)) {
            win.classList.remove("open");
        }
    }
});
