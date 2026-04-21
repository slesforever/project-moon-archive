const MASTER_DB = {
    "LimbusCompany": {
        "title": "LIMBUS COMPANY",
        "categories": {
            "sinners": {
                "label": "12 罪人",
                "items": [
                    { name: "Yi Sang (李箱)", tag: "No. 01", desc: "前九人會成員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Yi_Sang_Portrait.png", details: "曾是九人會中最年輕的成員。他開發的鏡像技術是公司提取人格的核心。", fullStory: "在《飛翼》章節中，他面對了破碎的理想，最終決定在邊獄中尋找新的光芒。" },
                    { name: "Faust (浮士德)", tag: "No. 02", desc: "梅菲斯特號製造者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d4/Faust_Portrait.png", details: "自稱是都市中最聰明的人。她掌握著超越常人的知識量。", fullStory: "浮士德的過去充滿謎團，她與公司高層似乎達成了一種不可告人的契約。" },
                    { name: "Don Quixote (唐吉訶德)", tag: "No. 03", desc: "正義的狂熱信徒。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/08/Don_Quixote_Portrait.png", details: "對收割者與正義有著超乎常人的執著，總是衝在最前面。", fullStory: "她的夢想是成為一名真正的收割者。雖然外表瘋癲，但內心卻有著極其沈重的堅持。" },
                    { name: "Ryōshū (良秀)", tag: "No. 04", desc: "視殺戮為藝術的劍客。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png", details: "說話喜歡用縮寫，對美學有著偏執的要求。", fullStory: "身為一名母親與藝術家，她的過去與地獄般的火焰緊密相連。" },
                    { name: "Meursault (默爾索)", tag: "No. 05", desc: "絕對冷靜的執行者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Meursault_Portrait.png", details: "從不違抗指令。他像一台精密的機器。", fullStory: "在 N 公司時期，他是某種秩序的維護者。" },
                    { name: "Hong Lu (鴻璐)", tag: "No. 06", desc: "世家大族出身的貴公子。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Hong_Lu_Portrait.png", details: "對底層生活充滿好奇。隱藏著對家族權力鬥爭的厭惡。", fullStory: "出身於大湖附近的豪門，家族的陰影是他揮之不去的噩夢。" },
                    { name: "Heathcliff (希斯克利夫)", tag: "No. 07", desc: "狂暴的戰鬥者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Heathcliff_Portrait.png", details: "性格火爆，習慣用暴力解決問題。", fullStory: "為了凱瑟琳，他曾試圖翻身，但最終卻在憤怒中失去了一切。" },
                    { name: "Ishmael (以實瑪利)", tag: "No. 08", desc: "理性與耐力的生還者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Ishmael_Portrait.png", details: "曾是大湖上的水手。在極端環境下依然能保持冷靜。", fullStory: "裴廓德號的往事是她心中永遠的痛。她必須完成復仇。" },
                    { name: "Rodion (羅佳)", tag: "No. 09", desc: "追求特別感的女性。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/06/Rodion_Portrait.png", details: "總是帶著親切的笑容，但笑容背後隱藏著殺死收割者的自卑感。", fullStory: "在冰天雪地的故鄉，她為了一種虛榮的勇氣犯下了錯。" },
                    { name: "Sinclair (辛克萊)", tag: "No. 10", desc: "徘徊在光明與黑暗間的少年。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Sinclair_Portrait.png", details: "擁有極高的戰鬥天賦，但性格懦弱。", fullStory: "家庭的慘劇讓他被迫踏入黑暗的世界。" },
                    { name: "Outis (奧緹絲)", tag: "No. 11", desc: "精明的軍事參謀。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Outis_Portrait.png", details: "極度忠誠且高效。她擅長戰術佈局。", fullStory: "身為煙火戰爭參與者，她的每一步行動似乎都經過精密的計算。" },
                    { name: "Gregor (葛勒哥爾)", tag: "No. 12", desc: "昆蟲化手臂的前軍官。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d8/Gregor_Portrait.png", details: "性格溫和，總是試圖調解隊友矛盾。", fullStory: "曾經是 G 公司的戰爭英雄，現在他只想過平凡的生活。" }
                ]
            }
        }
    },
    "LibraryOfRuina": {
        "title": "LIBRARY OF RUINA",
        "categories": {
            "librarians": {
                "label": "總司書",
                "items": [
                    { name: "Roland (羅蘭)", tag: "總類層", desc: "黑色沉默。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/9/9d/Roland_Portrait.png", details: "穿著黑色西裝的男人。實力極強。", fullStory: "為了尋找殺死妻子的真兇，他踏入了圖書館。" },
                    { name: "Angela (安潔拉)", tag: "館長", desc: "渴望自由的 AI。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "圖書館掌權者。曾是腦葉公司管理員 AI。", fullStory: "在一百萬年的循環中，她學會了孤獨與背叛。" },
                    { name: "Gebura", tag: "語言層", desc: "紅霧。最強戰力。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png", details: "負責語言層的總司書。戰鬥方式狂野。", fullStory: "曾經是 Kali，為了保護同伴戰至最後一刻。" },
                    { name: "Binah", tag: "哲學層", desc: "前任首腦。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png", details: "負責哲學層。談論著死亡與虛無。", fullStory: "曾經執行法律，現在她在圖書館觀測命運。" }
                ]
            }
        }
    },
    "LobotomyCorp": {
        "title": "LOBOTOMY CORP",
        "categories": {
            "founders": {
                "label": "管理層",
                "items": [
                    { name: "Ayin (艾因)", tag: "Founder", desc: "腦葉公司創始人。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/05/Ayin_Portrait.png", details: "為了實現卡門的夙願，他推動了種子發射計劃。", fullStory: "在無數次的循環中，他承受痛苦，只為了獲得「光」。" },
                    { name: "Carmen (卡門)", tag: "Founder", desc: "研究所創始人。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/6b/Carmen_Portrait.png", details: "光的源頭。自殺後神經系統變成了產生能量的核心。", fullStory: "她的死徹底改變了艾因，也導致了腦葉公司的誕生。" }
                ]
            },
            "abnos": {
                "label": "異想體",
                "items": [
                    { name: "Nothing There", tag: "ALEPH", desc: "模仿皮囊的怪物。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/18/Nothing_There_Breach.png", details: "會殺死員工並披上皮膚。極度危險。", fullStory: "「你好？」它渴望成為人類，卻只能殺戮。" },
                    { name: "One Sin", tag: "ZAYIN", desc: "一罪與百善。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/5/5e/One_Sin_Portrait.png", details: "背負十字架的頭骨，能吞噬罪惡。", fullStory: "設施中最溫和的異想體，存在的意義在於告解。" }
                ]
            }
        }
    }
};
