document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('dataGrid');
    const subnav = document.getElementById('subnav');
    const searchInput = document.getElementById('search');
    const gameBtns = document.querySelectorAll('.game-btn');
    const modal = document.getElementById('detailModal');

    let currentGame = 'LimbusCompany';
    let currentCat = '';
    let selectedItem = null;

    
    function getSafeImg(url) {
        if (!url) return 'https://via.placeholder.com/300x400?text=No+Image';
        
        const cleanUrl = url.replace(/^https?:\/\//, '');
        return `https://i0.wp.com/${cleanUrl}`;
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
            if(i === 0) {
                btn.className = 'active';
                currentCat = key;
            }
            subnav.appendChild(btn);
        });
        render();
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
        if (!MASTER_DB[currentGame].categories[currentCat]) return;
        const items = MASTER_DB[currentGame].categories[currentCat].items;
        const query = searchInput.value.toLowerCase();

        items.forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => openModal(item);
                const imgSrc = getSafeImg(item.img);
                card.innerHTML = `
                    <div class="img-box">
                        <img src="${imgSrc}" onerror="this.src='https://via.placeholder.com/300x400?text=Reloading';" loading="lazy">
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
        document.getElementById('modalImg').src = getSafeImg(item.img);
        setTab('details');
        modal.style.display = 'block';
    };

    window.closeModal = () => { modal.style.display = 'none'; };
    window.setTab = (type) => {
        const textArea = document.getElementById('modalBodyText');
        if(type === 'details') {
            textArea.innerText = selectedItem.details;
        } else {
            textArea.innerText = selectedItem.fullStory;
        }
    };

    gameBtns.forEach(btn => btn.onclick = () => switchGame(btn.dataset.game));
    searchInput.oninput = render;
    switchGame('LimbusCompany');
});
