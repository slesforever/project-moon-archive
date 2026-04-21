const MASTER_DB = {
    "LimbusCompany": {
        "title": "LIMBUS COMPANY",
        "categories": {
            "sinners": {
                "label": "12 罪人",
                "items": [
                    { name: "Yi Sang", tag: "No. 01", desc: "前九人會成員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Yi_Sang_Portrait.png", details: "鏡像技術開發者。", fullStory: "在破碎理想中尋找光芒。" },
                    { name: "Faust", tag: "No. 02", desc: "梅菲斯特號製造者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d4/Faust_Portrait.png", details: "掌握都市知識的天才。", fullStory: "與公司簽訂神秘契約。" },
                    { name: "Don Quixote", tag: "No. 03", desc: "正義狂熱者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/08/Don_Quixote_Portrait.png", details: "嚮往收割者的靈魂。", fullStory: "追逐著正義之光。" },
                    { name: "Ryōshū", tag: "No. 04", desc: "藝術劍客。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png", details: "以血編織藝術的母親。", fullStory: "在殺戮中尋求美感。" },
                    { name: "Meursault", tag: "No. 05", desc: "執行者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Meursault_Portrait.png", details: "絕對服從的機器。", fullStory: "僅僅作為存在。" },
                    { name: "Hong Lu", tag: "No. 06", desc: "貴公子。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Hong_Lu_Portrait.png", details: "厭惡家族爭鬥的旁觀者。", fullStory: "對世俗充滿好奇。" },
                    { name: "Heathcliff", tag: "No. 07", desc: "憤怒戰士。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Heathcliff_Portrait.png", details: "來自後巷的野獸。", fullStory: "為了凱瑟琳翻轉命運。" },
                    { name: "Ishmael", tag: "No. 08", desc: "生存者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Ishmael_Portrait.png", details: "大湖上的水手。", fullStory: "對白鯨的復仇。" },
                    { name: "Rodion", tag: "No. 09", desc: "親切笑容者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/06/Rodion_Portrait.png", details: "渴望特別感的女性。", fullStory: "在罪惡感中尋求救贖。" },
                    { name: "Sinclair", tag: "No. 10", desc: "覺醒少年。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Sinclair_Portrait.png", details: "在明暗間掙扎。", fullStory: "必須打破蛋殼。" },
                    { name: "Outis", tag: "No. 11", desc: "參謀。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Outis_Portrait.png", details: "煙火戰爭指揮。", fullStory: "對管理長極端忠誠。" },
                    { name: "Gregor", tag: "No. 12", desc: "改造人。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d8/Gregor_Portrait.png", details: "溫和的前軍官。", fullStory: "尋求平凡生活的凡人。" }
                ]
            }
        }
    },
    "LibraryOfRuina": {
        "title": "LIBRARY OF RUINA",
        "categories": {
            "librarians": {
                "label": "全層總司書",
                "items": [
                    { name: "Roland", tag: "總類層", desc: "黑色沉默。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/9/9d/Roland_Portrait.png", details: "九階收割者助手。", fullStory: "尋求結局。" },
                    { name: "Angela", tag: "館長", desc: "渴望自由。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "建立圖書館的 AI。", fullStory: "書寫自己。" },
                    { name: "Malkuth", tag: "歷史層", desc: "控制者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Malkuth_Portrait.png", details: "努力被認可。", fullStory: "化為歷史養分。" },
                    { name: "Yesod", tag: "科技層", desc: "理性的情報員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Yesod_Portrait.png", details: "秩序維護者。", fullStory: "維護邏輯結構。" },
                    { name: "Hod", tag: "文學層", desc: "渴望溫暖。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/10/Hod_Portrait.png", details: "曾背叛研究所。", fullStory: "尋找原諒的力量。" },
                    { name: "Netzach", tag: "藝術層", desc: "厭世者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Netzach_Portrait.png", details: "藝術的信徒。", fullStory: "逃避現實。" },
                    { name: "Tiphereth", tag: "自然層", desc: "守護者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Tiphereth_Portrait.png", details: "理智且早熟。", fullStory: "看透生命的循環。" },
                    { name: "Gebura", tag: "語言層", desc: "紅霧 Kali。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png", details: "最強戰力。", fullStory: "為同伴戰至最後。" },
                    { name: "Chesed", tag: "社會層", desc: "咖啡愛好者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c6/Chesed_Portrait.png", details: "社會主義者。", fullStory: "珍惜人性的溫暖。" },
                    { name: "Binah", tag: "哲學層", desc: "首腦 Arbiter。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png", details: "深奧的哲學家。", fullStory: "觀測都市命運。" },
                    { name: "Hokma", tag: "宗教層", desc: "忠誠記錄者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Hokma_Portrait.png", details: "追隨管理員。", fullStory: "守護秘密。" }
                ]
            }
        }
    },
    "LobotomyCorp": {
        "categories": {
            "founders": {
                "label": "創始者",
                "items": [
                    { name: "Ayin", tag: "Founder", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/05/Ayin_Portrait.png" },
                    { name: "Carmen", tag: "Inspirer", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/6b/Carmen_Portrait.png" },
                    { name: "Angela", tag: "AI", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png" }
                ]
            },
            "sephirah": {
                "label": "部門主管",
                "items": [
                    { name: "Malkuth", tag: "控制部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Malkuth_Portrait.png" },
                    { name: "Yesod", tag: "情報部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Yesod_Portrait.png" },
                    { name: "Hod", tag: "培訓部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/10/Hod_Portrait.png" },
                    { name: "Netzach", tag: "安保部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Netzach_Portrait.png" },
                    { name: "Tiphereth", tag: "中央本部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Tiphereth_Portrait.png" },
                    { name: "Gebura", tag: "懲戒部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png" },
                    { name: "Chesed", tag: "福利部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c6/Chesed_Portrait.png" },
                    { name: "Binah", tag: "研發部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png" },
                    { name: "Hokma", tag: "記錄部", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Hokma_Portrait.png" }
                ]
            }
        }
    }
};
    }
};
