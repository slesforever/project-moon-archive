document.addEventListener("DOMContentLoaded", () => {
    let currentGame = 'LimbusCompany';
    let currentCat = '';
    let selectedItem = null;

    const grid = document.getElementById('dataGrid');
    const subnav = document.getElementById('subnav');
    const searchInput = document.getElementById('search');

    function switchGame(gameKey) {
        currentGame = gameKey;
        document.querySelectorAll('.game-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.game === gameKey);
        });

        // 生成子分類
        subnav.innerHTML = '';
        const cats = MASTER_DB[gameKey].categories;
        const keys = Object.keys(cats);
        
        keys.forEach((key, index) => {
            const btn = document.createElement('button');
            btn.innerText = cats[key].label;
            btn.onclick = () => {
                currentCat = key;
                render();
                updateSubnavActive();
            };
            if(index === 0) currentCat = key;
            subnav.appendChild(btn);
        });
        updateSubnavActive();
        render();
    }

    function updateSubnavActive() {
        const btns = subnav.querySelectorAll('button');
        btns.forEach(btn => {
            btn.classList.toggle('active', btn.innerText === MASTER_DB[currentGame].categories[currentCat].label);
        });
    }

    function render() {
        grid.innerHTML = '';
        const query = searchInput.value.toLowerCase();
        const items = MASTER_DB[currentGame].categories[currentCat].items;

        items.forEach(item => {
            if(item.name.toLowerCase().includes(query)) {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => openModal(item);
                card.innerHTML = `
                    <div class="img-box"><img src="${item.img}"></div>
                    <div class="card-info">
                        <small>${item.tag}</small>
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
        document.getElementById('modalTag').innerText = item.tag;
        document.getElementById('modalImg').src = item.img;
        setTab('details');
        document.getElementById('detailModal').style.display = 'block';
    };

    window.closeModal = () => {
        document.getElementById('detailModal').style.display = 'none';
    };

    window.setTab = (type) => {
        const content = document.getElementById('modalBodyText');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        
        if(type === 'details') {
            content.innerText = selectedItem.details;
            document.getElementById('btnDetails').classList.add('active');
        } else if(type === 'story') {
            content.innerText = selectedItem.story;
            document.getElementById('btnStory').classList.add('active');
        } else {
            content.innerText = selectedItem.chapter;
            document.getElementById('btnChapter').classList.add('active');
        }
    };

    // 監聽遊戲切換
    document.querySelectorAll('.game-btn').forEach(btn => {
        btn.onclick = () => switchGame(btn.dataset.game);
    });

    searchInput.oninput = render;
    switchGame('LimbusCompany');
});
