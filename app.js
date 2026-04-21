document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('dataGrid');
    const subnav = document.getElementById('subnav');
    const searchInput = document.getElementById('search');
    const gameBtns = document.querySelectorAll('.game-btn');
    const modal = document.getElementById('detailModal');

    let currentGame = 'LimbusCompany';
    let currentCat = '';
    let selectedItem = null;

    // 影像修復代理 (防止 Wiki 擋圖)
    function getSafeImg(url) {
        return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=webp`;
    }

    function switchGame(gameKey) {
        if (!MASTER_DB[gameKey]) return;
        currentGame = gameKey;
        
        // 更新按鈕狀態
        gameBtns.forEach(b => b.classList.toggle('active', b.dataset.game === gameKey));
        
        // 更新分類導航
        const cats = MASTER_DB[gameKey].categories;
        subnav.innerHTML = '';
        Object.keys(cats).forEach((key, i) => {
            const btn = document.createElement('button');
            btn.innerText = cats[key].label;
            btn.onclick = () => switchCategory(key);
            if(i === 0) btn.className = 'active';
            subnav.appendChild(btn);
        });
        
        switchCategory(Object.keys(cats)[0]);
    }

    function switchCategory(catKey) {
        currentCat = catKey;
        // 更新分類按鈕外觀
        Array.from(subnav.children).forEach(btn => {
            btn.classList.toggle('active', btn.innerText === MASTER_DB[currentGame].categories[catKey].label);
        });
        render();
    }

    function render() {
        grid.innerHTML = '';
        const items = MASTER_DB[currentGame].categories[currentCat].items;
        const query = searchInput.value.toLowerCase();

        items.forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => openModal(item);
                card.innerHTML = `
                    <div class="img-box"><img src="${getSafeImg(item.img)}"></div>
                    <div class="card-info">
                        <small style="color:#ff3c3c">${item.tag}</small>
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
        document.getElementById('modalImg').src = getSafeImg(item.img);
        setTab('details');
        modal.style.display = 'block';
    };

    window.closeModal = () => { modal.style.display = 'none'; };

    window.setTab = (type) => {
        const textArea = document.getElementById('modalBodyText');
        const btnD = document.getElementById('btnDetails');
        const btnS = document.getElementById('btnStory');
        
        if(type === 'details') {
            textArea.innerText = selectedItem.details;
            btnD.classList.add('active');
            btnS.classList.remove('active');
        } else {
            textArea.innerText = selectedItem.fullStory;
            btnS.classList.add('active');
            btnD.classList.remove('active');
        }
    };

    // 初始化與事件綁定
    gameBtns.forEach(btn => {
        btn.onclick = () => switchGame(btn.dataset.game);
    });
    
    searchInput.oninput = render;
    
    // 啟動預設遊戲
    if (typeof MASTER_DB !== 'undefined') {
        switchGame('LimbusCompany');
    } else {
        console.error("Critical: MASTER_DB is missing!");
    }
});
