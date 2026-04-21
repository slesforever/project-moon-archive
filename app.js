document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('dataGrid');
    const subnav = document.getElementById('subnav');
    const searchInput = document.getElementById('search');
    const gameBtns = document.querySelectorAll('.game-btn');
    const modal = document.getElementById('detailModal');

    let currentGame = 'LimbusCompany';
    let currentCat = '';
    let selectedItem = null;

    /**
     * 【影像修復引擎 V2】
     * 1. 使用 wsrv.nl 繞過 Wiki 的 403 封鎖
     * 2. 如果圖片加載失敗，自動嘗試原始連結
     */
    function getSafeImg(url) {
        if (!url) return 'https://via.placeholder.com/300x400?text=No+Image';
        
        // 清理連結：去掉 revision 之後的字串，抓取更乾淨的原圖路徑
        const cleanUrl = url.split('/revision/')[0];
        
        // 優先返回代理連結
        return `https://wsrv.nl/?url=${encodeURIComponent(cleanUrl)}&output=webp&n=-1`;
    }

    function switchGame(gameKey) {
        if (!MASTER_DB[gameKey]) return;
        currentGame = gameKey;
        
        // 更新遊戲主選單按鈕
        gameBtns.forEach(b => {
            b.classList.toggle('active', b.dataset.game === gameKey);
        });
        
        // 生成次級導航（創始者、主管、異想體等）
        const cats = MASTER_DB[gameKey].categories;
        subnav.innerHTML = '';
        const catKeys = Object.keys(cats);
        
        catKeys.forEach((key, i) => {
            const btn = document.createElement('button');
            btn.innerText = cats[key].label;
            btn.className = 'sub-btn';
            btn.onclick = () => switchCategory(key);
            subnav.appendChild(btn);
            
            // 預設選取第一個分類
            if(i === 0) {
                btn.classList.add('active');
                currentCat = key;
            }
        });
        
        render();
    }

    function switchCategory(catKey) {
        currentCat = catKey;
        // 更新次級按鈕狀態
        const buttons = subnav.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.innerText === MASTER_DB[currentGame].categories[catKey].label);
        });
        render();
    }

    function render() {
        grid.innerHTML = '';
        if (!MASTER_DB[currentGame].categories[currentCat]) return;

        const items = MASTER_DB[currentGame].categories[currentCat].items;
        const query = searchInput.value.toLowerCase();

        items.forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => openModal(item);
                
                // 使用 onerror 機制：如果代理圖掛了，嘗試加載原始網址
                const safeUrl = getSafeImg(item.img);
                card.innerHTML = `
                    <div class="img-box">
                        <img src="${safeUrl}" 
                             onerror="this.onerror=null; this.src='${item.img}';" 
                             loading="lazy">
                    </div>
                    <div class="card-info">
                        <small class="tag-label">${item.tag}</small>
                        <h3>${item.name}</h3>
                    </div>
                `;
                grid.appendChild(card);
            }
        });
    }

    window.openModal = (item) => {
        selectedItem = item;
        document.getElementById('modalTitle').innerText = item.name;
        const modalImg = document.getElementById('modalImg');
        const safeUrl = getSafeImg(item.img);
        
        modalImg.src = safeUrl;
        modalImg.onerror = function() {
            this.onerror = null;
            this.src = item.img;
        };
        
        setTab('details');
        modal.style.display = 'block';
    };

    window.closeModal = () => {
        modal.style.display = 'none';
    };

    window.setTab = (type) => {
        const textArea = document.getElementById('modalBodyText');
        const btnD = document.getElementById('btnDetails');
        const btnS = document.getElementById('btnStory');
        
        if(type === 'details') {
            textArea.innerText = selectedItem.details || "暫無詳細資料。";
            btnD.classList.add('active');
            btnS.classList.remove('active');
        } else {
            textArea.innerText = selectedItem.fullStory || "尚未解鎖檔案內容。";
            btnS.classList.add('active');
            btnD.classList.remove('active');
        }
    };

    // 全域點擊關閉彈窗
    window.onclick = (event) => {
        if (event.target == modal) closeModal();
    };

    // 初始化事件
    gameBtns.forEach(btn => {
        btn.onclick = () => switchGame(btn.dataset.game);
    });
    
    searchInput.oninput = render;
    
    // 預設啟動
    switchGame('LimbusCompany');
});
