document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('dataGrid');
    const searchInput = document.getElementById('search');
    const navBtns = document.querySelectorAll('#navbar button');
    let currentCat = 'sinners';

    function render() {
        const query = searchInput.value.toLowerCase();
        grid.innerHTML = '';
        
        MASTER_DB[currentCat].forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
                const card = document.createElement('div');
                card.className = 'card';
                // 加上 referrerpolicy="no-referrer" 防止 Wiki 擋圖
                card.innerHTML = `
                    <img src="${item.img}" referrerpolicy="no-referrer">
                    <div class="card-info">
                        <small style="color:red">${item.tag}</small>
                        <h2>${item.name}</h2>
                        <p>${item.desc}</p>
                    </div>
                `;
                grid.appendChild(card);
            }
        });
    }

    navBtns.forEach(btn => {
        btn.onclick = () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCat = btn.dataset.cat;
            render();
        };
    });

    searchInput.oninput = render;
    render();
});
