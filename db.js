const MASTER_DB = {
    "LimbusCompany": {
        "title": "LIMBUS COMPANY",
        "categories": {
            "sinners": {
                "label": "12 罪人",
                "items": [
                    { name: "Yi Sang", tag: "No. 01", desc: "前九人會成員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c2/Yi_Sang_Portrait.png", details: "鏡像技術開發者。", fullStory: "在破碎理想中尋找光芒。" },
                    { name: "Faust", tag: "No. 02", desc: "梅菲斯特號製造者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Faust_Portrait.png", details: "掌握都市知識的天才。", fullStory: "與公司簽訂神秘契約的知性代表。" },
                    { name: "Don Quixote", tag: "No. 03", desc: "正義狂熱者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e8/Don_Quixote_Portrait.png", details: "嚮往收割者的靈魂。", fullStory: "追逐著正義之光。" },
                    { name: "Ryōshū", tag: "No. 04", desc: "藝術劍客。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png", details: "以血編織藝術的母親。", fullStory: "在殺戮中尋求美感。" },
                    { name: "Meursault", tag: "No. 05", desc: "執行者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Meursault_Portrait.png", details: "絕對服從的機器。", fullStory: "僅僅作為存在而存在。" },
                    { name: "Hong Lu", tag: "No. 06", desc: "貴公子。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Hong_Lu_Portrait.png", details: "厭惡家族爭鬥的旁觀者。", fullStory: "對世俗充滿好奇。" },
                    { name: "Heathcliff", tag: "No. 07", desc: "憤怒戰士。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/7a/Heathcliff_Portrait.png", details: "來自後巷的野獸。", fullStory: "為了凱瑟琳試圖翻轉命運。" },
                    { name: "Ishmael", tag: "No. 08", desc: "生存者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/5/52/Ishmael_Portrait.png", details: "大湖上的水手。", fullStory: "對白鯨的復仇是她的動力。" },
                    { name: "Rodion", tag: "No. 09", desc: "親切笑容者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Rodion_Portrait.png", details: "渴望特別感的女性。", fullStory: "在罪惡感中尋求救贖。" },
                    { name: "Sinclair", tag: "No. 10", desc: "覺醒少年。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Sinclair_Portrait.png", details: "在明暗間掙扎的純真。", fullStory: "必須打破蛋殼看見世界。" },
                    { name: "Outis", tag: "No. 11", desc: "參謀。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Outis_Portrait.png", details: "煙火戰爭的高效指揮。", fullStory: "對管理長抱持極端忠誠。" },
                    { name: "Gregor", tag: "No. 12", desc: "改造人。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/10/Gregor_Portrait.png", details: "溫和的前軍官。", fullStory: "尋求平凡生活的凡人。" }
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
                    { name: "Roland", tag: "總類層", desc: "黑色沉默。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/da/Roland.png", details: "九階收割者助手。", fullStory: "在圖書館尋求結局。" },
                    { name: "Angela", tag: "館長", desc: "渴望自由。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/13/Angela_Full.png", details: "建立圖書館的 AI。", fullStory: "反抗腳本，書寫自己。" },
                    { name: "Malkuth", tag: "歷史層", desc: "曾是 Elijah。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Malkuth_Portrait.png", details: "努力的控制者。", fullStory: "接受失敗，化為歷史養分。" },
                    { name: "Yesod", tag: "科技層", desc: "曾是 Gabriel。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Yesod_Portrait.png", details: "理性的情報員。", fullStory: "維護圖書館的邏輯結構。" },
                    { name: "Hod", tag: "文學層", desc: "曾是 Michelle。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Hod_Portrait.png", details: "渴望溫暖的少女。", fullStory: "在文學中尋找原諒的力量。" },
                    { name: "Netzach", tag: "藝術層", desc: "曾是 Giovanni。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Netzach_Portrait.png", details: "醉心藝術的厭世者。", fullStory: "在美酒中逃避現實。" },
                    { name: "Tiphereth", tag: "自然層", desc: "理智且早熟的守護者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Tiphereth_Portrait.png", details: "曾是 Lisa/Enoch。", fullStory: "看透生命的循環。" },
                    { name: "Gebura", tag: "語言層", desc: "紅霧 Kali。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png", details: "最強戰力。", fullStory: "為了同伴戰至最後。" },
                    { name: "Chesed", tag: "社會層", desc: "曾是 Daniel。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c6/Chesed_Portrait.png", details: "愛咖啡的社會主義者。", fullStory: "珍惜人性的溫暖。" },
                    { name: "Binah", tag: "哲學層", desc: "首腦 Arbiter。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png", details: "深奧的哲學家。", fullStory: "觀測都市命運的源頭。" },
                    { name: "Hokma", tag: "宗教層", desc: "曾是 Benjamin。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Hokma_Portrait.png", details: "忠誠的記錄者。", fullStory: "追隨艾因直到終點。" }
                ]
            }
        }
    },
    "LobotomyCorp": {
        "title": "LOBOTOMY CORP",
        "categories": {
            "founders": {
                "label": "創始者 (Founders)",
                "items": [
                    { name: "Ayin (A)", tag: "Founder", desc: "管理員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/5/52/Ayin_Portrait.png", details: "腦葉公司的創始者。", fullStory: "承載卡門的願望。" },
                    { name: "Carmen (C)", tag: "Inspirer", desc: "光的源頭。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/6b/Carmen_Portrait.png", details: "最初的靈魂人物。", fullStory: "自殺後化為提取的核心。" },
                    { name: "Angela", tag: "AI Manager", desc: "艾因的秘書。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "按照卡門形象製作的 AI。", fullStory: "在無盡循環中累積怨恨。" }
                ]
            },
            "sephirah": {
                "label": "部門主管 (Sephirah)",
                "items": [
                    { name: "Malkuth", tag: "控制部", desc: "上層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Malkuth_Portrait.png", details: "急於證實自己的價值。", fullStory: "在控制部管理日常事務。" },
                    { name: "Yesod", tag: "情報部", desc: "上層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Yesod_Portrait.png", details: "嚴守紀律與整潔。", fullStory: "無法忍受數據的任何遺漏。" },
                    { name: "Hod", tag: "培訓部", desc: "上層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/10/Hod_Portrait.png", details: "想要做個好人。", fullStory: "負責員工的培訓與心理輔導。" },
                    { name: "Netzach", tag: "安保部", desc: "上層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Netzach_Portrait.png", details: "對生命毫無眷念。", fullStory: "依賴 Enkephalin 藥物逃避。" },
                    { name: "Tiphereth", tag: "中央本部", desc: "中層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Tiphereth_Portrait.png", details: "雙生子主管。", fullStory: "維持平衡。" },
                    { name: "Gebura", tag: "懲戒部", desc: "中層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png", details: "負責武力鎮壓。", fullStory: "公司的劍與守盾。" },
                    { name: "Chesed", tag: "福利部", desc: "中層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c6/Chesed_Portrait.png", details: "關懷員工福利。", fullStory: "在殘酷的公司尋求溫情。" },
                    { name: "Binah", tag: "研發部", desc: "下層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png", details: "萃取技術者。", fullStory: "深居黑暗的井底。" },
                    { name: "Hokma", tag: "記錄部", desc: "下層主管。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Hokma_Portrait.png", details: "時間管理者。", fullStory: "守護最深處的秘密。" }
                ]
            }
        }
    }
};
