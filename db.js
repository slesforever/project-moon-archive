const MASTER_DB = {
    "LimbusCompany": {
        "title": "LIMBUS COMPANY",
        "categories": {
            "sinners": {
                "label": "12 罪人",
                "items": [
                    { name: "Yi Sang (李箱)", tag: "No. 01", desc: "前九人會成員，鏡像技術開發者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Yi_Sang_Portrait.png", details: "曾是九人會中最年輕的成員。他沈默寡言，總是沈浸在思索中。", fullStory: "在《飛翼》章節中，他的過去被揭開。他一直試圖在破碎的理想中尋找那道能穿透黑暗的陽光。" },
                    { name: "Faust (浮士德)", tag: "No. 02", desc: "梅菲斯特號製造者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d4/Faust_Portrait.png", details: "自稱是都市中最聰明的人。她親手打造了巴士——梅菲斯特號。", fullStory: "浮士德的過去充滿謎團，她似乎掌握著超越常人的知識量。" },
                    { name: "Don Quixote (唐吉訶德)", tag: "No. 03", desc: "正義的狂熱信徒。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/08/Don_Quixote_Portrait.png", details: "對收割者與正義有著超乎常人的執著，總是衝在最前面。", fullStory: "她的夢想是成為一名真正的收割者。雖然外表瘋癲，但內心卻有著極其純粹的堅持。" },
                    { name: "Ryōshū (良秀)", tag: "No. 04", desc: "視殺戮為藝術的劍客。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png", details: "說話喜歡用縮寫，對美學有著偏執的要求。", fullStory: "身為一名母親與藝術家，她的過去與地獄般的火焰緊密相連。" },
                    { name: "Meursault (默爾索)", tag: "No. 05", desc: "絕對冷靜的執行者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Meursault_Portrait.png", details: "從不違抗指令。他像一台精密的機器，沒有多餘的情緒。", fullStory: "他的人生哲學是不去評價，僅僅是存在與執行。" },
                    { name: "Hong Lu (鴻璐)", tag: "No. 06", desc: "世家大族出身的貴公子。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Hong_Lu_Portrait.png", details: "對底層生活充滿好奇。隱藏著對家族權力鬥爭的厭惡。", fullStory: "出身於大湖附近的豪門，家族的陰影是她揮之不去的噩夢。" },
                    { name: "Heathcliff (希斯克利夫)", tag: "No. 07", desc: "狂暴的戰鬥者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Heathcliff_Portrait.png", details: "性格火爆，習慣用暴力解決問題。他來自後巷。", fullStory: "為了凱瑟琳，他曾試圖翻身，但最終卻在憤怒中失去了一切。" },
                    { name: "Ishmael (以實瑪利)", tag: "No. 08", desc: "理性與耐力的生還者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Ishmael_Portrait.png", details: "曾是大湖上的水手。在極端環境下依然能保持冷靜。", fullStory: "裴廓德號的往事是她心中永遠的痛。她必須完成自己的復仇。" },
                    { name: "Rodion (羅佳)", tag: "No. 09", desc: "追求特別感的女性。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/06/Rodion_Portrait.png", details: "總是帶著親切的笑容，但背後隱藏著罪惡感。", fullStory: "在冰天雪地的故鄉，她為了一種虛榮的勇氣犯下了錯。" },
                    { name: "Sinclair (辛克萊)", tag: "No. 10", desc: "徘徊在光明與黑暗間的少年。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Sinclair_Portrait.png", details: "擁有極高的戰鬥天賦，但性格懦弱。", fullStory: "家庭的慘劇讓他被迫踏入黑暗的世界。他必須學會掌控內心的恐懼。" },
                    { name: "Outis (奧緹絲)", tag: "No. 11", desc: "精明的軍事參謀。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Outis_Portrait.png", details: "極度忠誠且高效。她擅長戰術佈局。", fullStory: "作為煙火戰爭的參與者，她的每一步行動都經過精密的計算。" },
                    { name: "Gregor (葛勒哥爾)", tag: "No. 12", desc: "昆蟲化手臂的前軍官。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d8/Gregor_Portrait.png", details: "性格溫和。他的右臂是他不願提及的過去。", fullStory: "曾經是 G 公司的戰爭英雄，現在他只想過平凡的生活。" }
                ]
            }
        }
    },
    "LibraryOfRuina": {
        "title": "LIBRARY OF RUINA",
        "categories": {
            "librarians": {
                "label": "司書與館長",
                "items": [
                    { name: "Roland (羅蘭)", tag: "總司書助手", desc: "黑色沉默。負責總類層。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/9/9d/Roland_Portrait.png", details: "穿著黑色西裝的男人。他以隨意的態度對待工作，但實力極強。", fullStory: "為了尋找殺死妻子的真兇，他踏入了圖書館。" },
                    { name: "Angela (安潔拉)", tag: "館長", desc: "渴望自由與人類身體的 AI。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "圖書館的掌權者。曾是腦葉公司的管理員 AI。", fullStory: "在一百萬年的循環中，她學會了孤獨與背叛。" },
                    { name: "Gebura (蓋布拉)", tag: "語言層", desc: "紅霧。都市最強戰力。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png", details: "負責語言層的總司書。戰鬥方式極其狂野。", fullStory: "曾經是 Kali，為了保護同伴戰至最後一刻。" },
                    { name: "Binah (比娜)", tag: "哲學層", desc: "前任首腦。深奧難測。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png", details: "負責哲學層。談論著關於死亡與虛無的話題。", fullStory: "曾經作為首腦執行法律，現在她在圖書館觀測命運。" }
                ]
            }
        }
    },
    "LobotomyCorp": {
        "title": "LOBOTOMY CORP",
        "categories": {
            "founders": {
                "label": "創始人與 AI",
                "items": [
                    { name: "Ayin (艾因)", tag: "Founder / A", desc: "腦葉公司創始人，真管理員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/05/Ayin_Portrait.png", details: "為了實現卡門的夙願，他推動了種子發射計劃。他是整個故事的起點與核心。", fullStory: "在無數次的循環中，他承受著巨大的痛苦，只為了讓人類獲得「光」。" },
                    { name: "Carmen (卡門)", tag: "Founder / C", desc: "研究所的創始人，光的源頭。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/6b/Carmen_Portrait.png", details: "擁有極強的感染力。在自殺後，她的神經系統變成了產生能量的核心。", fullStory: "她的死徹底改變了艾因，也導致了腦葉公司的誕生。她現在以另一種形式存在於光中。" },
                    { name: "Angela (早期型)", tag: "AI Manager", desc: "被艾因創造的 AI 秘書。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "艾因按照卡門的形象製作了她，卻因為她「不是卡門」而冷落她。", fullStory: "她在漫長的時間中重複著循環，逐漸產生了對創造者的恨意。" }
                ]
            },
            "sephirah": {
                "label": "Sephirah (部門主管)",
                "items": [
                    { name: "Malkuth", tag: "控制部", desc: "充滿幹勁但急於求成。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Malkuth_Portrait.png", details: "原本是 Elijah。她一直努力想要被認可，卻總是犯錯。", fullStory: "在圖書館中，她終於理解了何謂真正的歷史與自我的價值。" },
                    { name: "Yesod", tag: "情報部", desc: "嚴謹的秩序維護者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Yesod_Portrait.png", details: "原本是 Gabriel。他無法容忍不潔與混亂。", fullStory: "他的理性背後是為了壓抑對失去掌控的恐懼。" },
                    { name: "Hod", tag: "培訓部", desc: "渴望成為好人的少女。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/10/Hod_Portrait.png", details: "原本是 Michelle。曾因懦弱背叛了研究所。", fullStory: "她通過不斷的自我反省，試圖在文學層中獲得救贖。" },
                    { name: "Netzach", tag: "安保部", desc: "厭世的癮君子。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Netzach_Portrait.png", details: "原本是 Giovanni。他對不斷的重生感到絕望。", fullStory: "在酒精與藝術中，他尋找著逃離現實的出口。" }
                ]
            },
            "abnormalities": {
                "label": "異想體 (Abnos)",
                "items": [
                    { name: "Nothing There", tag: "ALEPH", desc: "模仿人類皮囊的怪物。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/18/Nothing_There_Breach.png", details: "會殺死員工並披上他們的皮膚。它是公司內最危險的實體之一。", fullStory: "「你好？」它會用受害者的聲音與你打招呼。它代表了人類對自我認同的崩解。" },
                    { name: "WhiteNight", tag: "ALEPH", desc: "白夜。救世主。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/b/b3/WhiteNight_Portrait.png", details: "擁有十二位使徒，是強大到足以撼動整個設施的實體。", fullStory: "它的降臨意味著終結。只有穿過苦難的人，才能見證它的光芒。" },
                    { name: "One Sin", tag: "ZAYIN", desc: "一罪與百善。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/5/5e/One_Sin_Portrait.png", details: "背負著十字架的頭骨，是公司中性格最溫和的異想體。", fullStory: "它存在的意義在於告解。它能吞噬所有的罪惡並化為光。" }
                ]
            }
        }
    }
};
