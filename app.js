// app.js
document.addEventListener("DOMContentLoaded", () => {
    // 渲染函數
    const renderContent = (type, keyword = "") => {
        const grid = document.getElementById("dataGrid");
        grid.innerHTML = "";
        
        let targetData = [];
        if (type === 'chars') targetData = PM_DATA.characters;
        else if (type === 'abnos') targetData = PM_DATA.abnos;
        else if (type === 'world') targetData = PM_DATA.stories;

        const filtered = targetData.filter(item => 
            (item.name || item.title).toLowerCase().includes(keyword.toLowerCase())
        );

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "card pulse-border";
            card.innerHTML = `
                ${item.img ? `<img src="${item.img}" alt="${item.name}">` : ""}
                <div class="card-info">
                    <span class="tag">${item.game || item.chapter}</span>
                    <h2>${item.name || item.title}</h2>
                    <p>${item.desc || item.content}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    };

    // 導航控制
    document.querySelectorAll("nav button").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderContent(btn.dataset.type);
        };
    });

    // 搜尋功能
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.oninput = (e) => {
            const activeType = document.querySelector("nav button.active").dataset.type;
            renderContent(activeType, e.target.value);
        };
    }

    // 初始化
    renderContent('chars');
});
