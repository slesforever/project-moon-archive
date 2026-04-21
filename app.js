document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('dataGrid');
    const subnav = document.getElementById('subnav');
    const searchInput = document.getElementById('search');
    const gameBtns = document.querySelectorAll('.game-btn');

    let currentGame = 'LimbusCompany';
    let currentCat = '';

    // 切換作品
    function switchGame(gameKey) {
        currentGame = gameKey;
        const categories = MASTER_DB[gameKey].categories;
        
        // 自動產生該作品的子分類按鈕
        subnav.innerHTML = '';
        const catKeys = Object.keys(categories);
        catKeys.forEach((catKey, index) => {
            const btn = document.createElement('button');
            btn.innerText = categories[catKey].label;
            btn.onclick = () => switchCategory(catKey);
            if (index === 0) btn.className = 'active';
            subnav.appendChild(btn);
        });

        switchCategory(catKeys[0]); // 預設顯示第一個分類
    }

    // 切換分類
    function switchCategory(catKey) {
        currentCat = catKey;
        // 更新按鈕樣式
        Array.from(subnav.children).forEach(btn => {
            btn.className = btn.innerText === MASTER_DB[currentGame].categories[catKey].label ? 'active' : '';
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
                card.innerHTML = `
                    <img src="${item.img}" referrerpolicy="no-referrer">
                    <div class="card-info">
                        <h2>${item.name}</h2>
                        <p>${item.desc}</p>
                    </div>
                `;
                grid.appendChild(card);
            }
        });
    }

    // 初始作品按鈕事件
    gameBtns.forEach(btn => {
        btn.onclick = () => {
            gameBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchGame(btn.dataset.game);
        };
    });

    searchInput.oninput = render;
    switchGame('LimbusCompany'); // 啟動初始化
});
