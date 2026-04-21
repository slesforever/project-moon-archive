<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROJECT MOON ARCHIVE | 管理者專用終端</title>
    <style>
        /* 核心配色與都市風格 */
        :root {
            --pm-red: #ff3c3c;
            --pm-gold: #c9a063;
            --bg: #050505;
            --card-bg: #111111;
            --border: rgba(255, 60, 60, 0.3);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            background-color: var(--bg);
            color: #eee;
            font-family: "Segoe UI", "Microsoft JhengHei", sans-serif;
            overflow-x: hidden;
            background-image: 
                linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.05));
            background-size: 100% 4px, 3px 100%;
        }

        header {
            padding: 50px 20px;
            text-align: center;
            border-bottom: 3px solid var(--pm-red);
            background: linear-gradient(to bottom, #1a0000, #050505);
            box-shadow: 0 0 20px rgba(255, 60, 60, 0.2);
        }

        header h1 {
            font-size: 3rem;
            letter-spacing: 8px;
            text-shadow: 0 0 10px var(--pm-red);
            margin-bottom: 10px;
        }

        .search-area {
            background: #111;
            padding: 20px;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid #333;
        }

        #search {
            width: 80%;
            max-width: 800px;
            padding: 15px;
            background: #000;
            border: 1px solid var(--pm-red);
            color: var(--pm-red);
            font-family: monospace;
            font-size: 1.2rem;
            box-shadow: inset 0 0 5px var(--pm-red);
        }

        nav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background: #000;
            position: sticky;
            top: 0;
            z-index: 999;
            border-bottom: 1px solid var(--pm-gold);
        }

        nav button {
            background: none;
            border: none;
            color: #666;
            padding: 15px 30px;
            cursor: pointer;
            font-weight: bold;
            font-size: 1.1rem;
            transition: 0.3s;
            text-transform: uppercase;
        }

        nav button:hover, nav button.active {
            color: #fff;
            background: rgba(255, 60, 60, 0.2);
            box-shadow: inset 0 -3px 0 var(--pm-red);
        }

        .container {
            padding: 40px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 2px;
            overflow: hidden;
            transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
        }

        .card:hover {
            border-color: var(--pm-gold);
            transform: scale(1.03);
            box-shadow: 0 0 30px rgba(201, 160, 99, 0.3);
            z-index: 2;
        }

        .card-img-wrapper {
            width: 100%;
            height: 400px;
            background: #000;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid var(--border);
        }

        .card img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transition: 0.5s;
        }

        .card:hover img {
            transform: scale(1.1);
        }

        .card-body {
            padding: 20px;
        }

        .tag {
            font-size: 0.75rem;
            color: var(--pm-red);
            border: 1px solid var(--pm-red);
            padding: 2px 10px;
            margin-bottom: 10px;
            display: inline-block;
        }

        .card h2 {
            font-size: 1.5rem;
            color: var(--pm-gold);
            margin-bottom: 10px;
        }

        .card p {
            font-size: 0.95rem;
            color: #aaa;
            line-height: 1.5;
        }

        footer {
            text-align: center;
            padding: 60px;
            color: #333;
            border-top: 1px solid #222;
        }

        /* 手機適應 */
        @media (max-width: 600px) {
            header h1 { font-size: 1.8rem; }
            .container { padding: 15px; grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <header>
        <h1>PROJECT MOON ARCHIVE</h1>
        <p>FACING THE FEAR, BUILDING THE FUTURE</p>
    </header>

    <div class="search-area">
        <input type="text" id="search" placeholder="> 檢索都市檔案系統...">
    </div>

    <nav id="nav">
        <button class="active" data-cat="sinners">12 罪人 (Sinners)</button>
        <button data-cat="sephirah">Sephirah / 司書</button>
        <button data-cat="abnos">異想體 (Abnormalities)</button>
    </nav>

    <main class="container" id="grid"></main>

    <footer>
        LOGGED IN AS: MANAGER | ACCESS GRANTED
    </footer>

    <script>
        const DATA = {
            sinners: [
                { name: "Yi Sang (李箱)", tag: "Limbus Company", desc: "No. 01。前九人會成員，設計了鏡像技術。追求那無法抵達的光亮。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Yi_Sang_Portrait.png" },
                { name: "Faust (浮士德)", tag: "Limbus Company", desc: "No. 02。梅菲斯特號製造者。世界上沒有任何浮士德不知道的事情。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d4/Faust_Portrait.png" },
                { name: "Don Quixote (唐吉訶德)", tag: "Limbus Company", desc: "No. 03。正義的狂熱信徒。夢想著成為能制裁惡人的收割者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/08/Don_Quixote_Portrait.png" },
                { name: "Ryōshū (良秀)", tag: "Limbus Company", desc: "No. 04。視殺戮為藝術的女性。她的劍法與性格同樣難以捉摸。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png" },
                { name: "Meursault (莫索)", tag: "Limbus Company", desc: "No. 05。絕對冷靜、絕對服從。從不因個人情感而產生一絲動搖。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Meursault_Portrait.png" },
                { name: "Hong Lu (鴻璐)", tag: "Limbus Company", desc: "No. 06。顯赫家族的繼承人。以天真無邪的視角觀察著都市的殘酷。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Hong_Lu_Portrait.png" },
                { name: "Heathcliff (希斯克利夫)", tag: "Limbus Company", desc: "No. 07。狂放不羈的戰士。為了心中的凱瑟琳，他能摧毀一切障礙。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Heathcliff_Portrait.png" },
                { name: "Ishmael (以實瑪利)", tag: "Limbus Company", desc: "No. 08。唯一的生還者。她正試圖在無邊的絕望海洋中尋找意義。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Ishmael_Portrait.png" },
                { name: "Rodion (羅佳)", tag: "Limbus Company", desc: "No. 09。渴望成為特別的人。但沉重的過去始終如陰影般隨行。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/06/Rodion_Portrait.png" },
                { name: "Sinclair (辛克萊)", tag: "Limbus Company", desc: "No. 10。徘徊在光明與黑暗間的少年。擁有能擊碎外殼的強大潛能。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Sinclair_Portrait.png" },
                { name: "Outis (奧緹斯)", tag: "Limbus Company", desc: "No. 11。老練的指揮官。對管理者表現出的忠誠讓人感到不安。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Outis_Portrait.png" },
                { name: "Gregor (格勒哥爾)", tag: "Limbus Company", desc: "No. 12。身體被改造的前軍官。雖然溫和，但與那隻斷臂共生。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d8/Gregor_Portrait.png" }
            ],
            sephirah: [
                { name: "Angela (安潔拉)", tag: "Library of Ruina", desc: "圖書館館長。曾是全知全能的AI，現在是渴望成為人的司書。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png" },
                { name: "Roland (羅蘭)", tag: "Library of Ruina", desc: "漆黑樂團的影子，黑色沉默。他在圖書館中尋找著失去的一切。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/9/9d/Roland_Portrait.png" },
                { name: "Binah (比娜)", tag: "Extraction Team", desc: "前任首腦(Arbiter)。優雅、冷靜、致命，掌握著都市最深處的秘密。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png" },
                { name: "Gebura (葛布拉)", tag: "Disciplinary Team", desc: "最強戰力「紅霧」。以鮮血與武力守護著她所珍視的規則。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png" }
            ],
            abnos: [
                { name: "Nothing There", tag: "ALEPH", desc: "渴望成為人類，不斷模仿人類的皮肉。它是恐懼最純粹的體現。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/18/Nothing_There_Breach.png" },
                { name: "WhiteNight", tag: "ALEPH", desc: "救世主與十二使徒。它的存在本身就是一場足以毀滅世界的宗教戰爭。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/b/b3/WhiteNight_Portrait.png" },
                { name: "Blue Star", tag: "ALEPH", desc: "吸入一切的虛無核心。在那片湛藍之中，什麼都沒有剩下。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/19/Blue_Star_Portrait.png" }
            ]
        };

        const grid = document.getElementById('grid');
        const searchInput = document.getElementById('search');
        const navBtns = document.querySelectorAll('#nav button');
        let currentCat = 'sinners';

        function render() {
            const term = searchInput.value.toLowerCase();
            grid.innerHTML = '';
            
            const filtered = DATA[currentCat].filter(item => 
                item.name.toLowerCase().includes(term) || item.desc.toLowerCase().includes(term)
            );

            filtered.forEach(item => {
                const el = document.createElement('div');
                el.className = 'card';
                // referrerpolicy="no-referrer" 是關鍵，嘗試解決 Wiki 圖片封鎖
                el.innerHTML = `
                    <div class="card-img-wrapper">
                        <img src="${item.img}" alt="${item.name}" referrerpolicy="no-referrer">
                    </div>
                    <div class="card-body">
                        <span class="tag">${item.tag}</span>
                        <h2>${item.name}</h2>
                        <p>${item.desc}</p>
                    </div>
                `;
                grid.appendChild(el);
            });
        }

        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCat = btn.dataset.cat;
                render();
            });
        });

        searchInput.addEventListener('input', render);
        render();
    </script>
</body>
</html>
