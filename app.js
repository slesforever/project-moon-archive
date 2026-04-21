document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('dataGrid');
    const subnav = document.getElementById('subnav');
    const searchInput = document.getElementById('search');
    const gameBtns = document.querySelectorAll('.game-btn');
    const modal = document.getElementById('detailModal');

    let currentGame = 'LimbusCompany';
    let currentCat = '';
    let selectedItem = null;

    // 【重要修復】影像代理函數：繞過 Wiki 防盜連並優化加載
    function getSafeImg(url) {
        if (!url) return 'https://via.placeholder.com/300x400?text=No+Image';
        // 使用 wsrv.nl 代理服務，這能有效解決 Fandom 圖片無法顯示的問題
        return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=webp`;
    }

    function switchGame(gameKey) {
        if (!MASTER_DB[gameKey]) return;
        currentGame = gameKey;
        gameBtns.forEach(b => b.classList.toggle('active', b.dataset.game === gameKey));
        
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
                // 這裡套用了 getSafeImg
                card.innerHTML = `
                    <div class="img-box">
                        <img src="${getSafeImg(item.img)}" loading="lazy" alt="${item.name}">
                    </div>
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
        // 彈窗內的圖片也要修復
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
            btnD.classList.add('active'); btnS.classList.remove('active');
        } else {
            textArea.innerText = selectedItem.fullStory;
            btnS.classList.add('active'); btnD.classList.remove('active');
        }
    };

    gameBtns.forEach(btn => btn.onclick = () => switchGame(btn.dataset.game));
    searchInput.oninput = render;
    switchGame('LimbusCompany');
});
