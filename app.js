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
        return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=webp`;
    }

    function switchGame(gameKey) {
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
        const query = searchInput.value.toLowerCase();
        const items = MASTER_DB[currentGame].categories[currentCat].items;
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

    window.closeModal = () => modal.style.display = 'none';

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
