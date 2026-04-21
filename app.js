document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('dataGrid');
    const subnav = document.getElementById('subnav');
    const searchInput = document.getElementById('search');
    const gameBtns = document.querySelectorAll('.game-btn');
    const modal = document.getElementById('detailModal');
    const closeBtn = document.querySelector('.close-btn');

    let currentGame = 'LimbusCompany';
    let currentCat = '';
    let selectedItem = null;

    // 圖片代理修正：破解 Wiki 擋圖問題
    function fixUrl(url) {
        return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=webp`;
    }

    function switchGame(gameKey) {
        currentGame = gameKey;
        gameBtns.forEach(b => b.classList.toggle('active', b.dataset.game === gameKey));
        
        const cats = MASTER_DB[gameKey].categories;
        subnav.innerHTML = '';
        const catKeys = Object.keys(cats);
        
        catKeys.forEach((key, i) => {
            const btn = document.createElement('button');
            btn.innerText = cats[key].label;
            btn.onclick = () => switchCategory(key);
            if(i === 0) btn.className = 'active';
            subnav.appendChild(btn);
        });
        switchCategory(catKeys[0]);
    }

    function switchCategory(catKey) {
        currentCat = catKey;
        Array.from(subnav.children).forEach(btn => {
            btn.classList.toggle('active', btn.innerText === MASTER_DB[currentGame].categories[catKey].label);
        });
        render();
    }

    function render() {
        const query = searchInput.value.toLowerCase();
        grid.innerHTML = '';
        const items = MASTER_DB[currentGame].categories[currentCat].items;

        items.forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => openModal(item);
                card.innerHTML = `
                    <div class="card-img-wrap">
                        <img src="${fixUrl(item.img)}" loading="lazy">
                    </div>
                    <div class="card-info">
                        <span class="tag">${item.tag}</span>
                        <h2>${item.name}</h2>
                    </div>
                `;
                grid.appendChild(card);
            }
        });
    }

    function openModal(item) {
        selectedItem = item;
        document.getElementById('modalTitle').innerText = item.name;
        document.getElementById('modalImg').src = fixUrl(item.img);
        updateTab('details');
        modal.style.display = 'block';
    }

    function updateTab(type) {
        const content = document.getElementById('tabContent');
        const dBtn = document.getElementById('tabDetailsBtn');
        const sBtn = document.getElementById('tabStoryBtn');

        if(type === 'details') {
            content.innerText = selectedItem.details;
            dBtn.classList.add('active');
            sBtn.classList.remove('active');
        } else {
            content.innerText = selectedItem.fullStory;
            sBtn.classList.add('active');
            dBtn.classList.remove('active');
        }
    }

    // 事件綁定
    document.getElementById('tabDetailsBtn').onclick = () => updateTab('details');
    document.getElementById('tabStoryBtn').onclick = () => updateTab('story');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };
    searchInput.oninput = render;

    gameBtns.forEach(btn => {
        btn.onclick = () => switchGame(btn.dataset.game);
    });

    switchGame('LimbusCompany');
});
