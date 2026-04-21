const MASTER_DB = {
    "LimbusCompany": {
        "title": "LIMBUS COMPANY",
        "categories": {
            "sinners": {
                "label": "12 罪人",
                "items": [
                    { name: "Yi Sang (李箱)", tag: "No. 01", desc: "前九人會成員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Yi_Sang_Portrait.png", details: "曾是九人會中最年輕的成員。他開發的鏡像技術是公司提取人格的核心。", fullStory: "在《飛翼》章節中，他面對了破碎的理想，最終決定在邊獄中尋找新的光芒。" },
                    { name: "Faust (浮士德)", tag: "No. 02", desc: "梅菲斯特號製造者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d4/Faust_Portrait.png", details: "自稱是都市中最聰明的人。她掌握著超越常人的知識量。", fullStory: "浮士德的過去充滿謎團，她與公司高層似乎達成了一種不可告人的契約。" },
                    { name: "Don Quixote (唐吉訶德)", tag: "No. 03", desc: "正義的狂熱信徒。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/08/Don_Quixote_Portrait.png", details: "對收割者與正義有著超乎常人的執著。", fullStory: "她的夢想是成為一名真正的收割者，即便這需要付出巨大的代價。" },
                    { name: "Ryōshū (良秀)", tag: "No. 04", desc: "視殺戮為藝術的劍客。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png", details: "說話喜歡用縮寫，對美學有著偏執的要求。", fullStory: "她的刀法與過去的火焰緊密相連，是一位追求極致純粹之美的戰士。" },
                    { name: "Meursault (默爾索)", tag: "No. 05", desc: "絕對冷靜的執行者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Meursault_Portrait.png", details: "從不違抗指令。他像一台精密的機器，沒有多餘的情緒。", fullStory: "他的人生哲學是不去評價，僅僅是存在與執行。" },
                    { name: "Hong Lu (鴻璐)", tag: "No. 06", desc: "世家大族出身的貴公子。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Hong_Lu_Portrait.png", details: "對底層生活充滿好奇。隱藏著對家族權力鬥爭的厭惡。", fullStory: "出身於大湖附近的豪門，家族的陰影是他揮之不去的噩夢。" },
                    { name: "Heathcliff (希斯克利夫)", tag: "No. 07", desc: "狂暴的戰鬥者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Heathcliff_Portrait.png", details: "性格火爆，習慣用暴力解決問題。", fullStory: "為了凱瑟琳，他曾試圖翻身，但最終卻在憤怒中失去了一切。" },
                    { name: "Ishmael (以實瑪利)", tag: "No. 08", desc: "理性與耐力的生還者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Ishmael_Portrait.png", details: "曾是大湖上的水手。在極端環境下依然能保持冷靜。", fullStory: "裴廓德號的往事是她心中永遠的痛。她必須完成對那頭白鯨的復仇。" },
                    { name: "Rodion (羅佳)", tag: "No. 09", desc: "追求特別感的女性。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/06/Rodion_Portrait.png", details: "總是帶著親切的笑容，但背後隱藏著強烈的罪惡感。", fullStory: "在冰天雪地的故鄉，她為了一種虛榮的勇氣犯下了不可挽回的錯。" },
                    { name: "Sinclair (辛克萊)", tag: "No. 10", desc: "徘徊在光明與黑暗間的少年。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Sinclair_Portrait.png", details: "擁有極高的戰鬥天賦，但性格懦弱。", fullStory: "家庭的慘劇讓他被迫踏入黑暗的世界，他必須學會掌控內心的恐懼。" },
                    { name: "Outis (奧緹絲)", tag: "No. 11", desc: "精明的軍事參謀。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Outis_Portrait.png", details: "極度忠誠且高效。她擅長戰術佈局。", fullStory: "身為煙火戰爭參與者，她的每一步行動似乎都經過精密的計算。" },
                    { name: "Gregor (葛勒哥爾)", tag: "No. 12", desc: "昆蟲化手臂的前軍官。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d8/Gregor_Portrait.png", details: "性格溫和，總是試圖調解隊友矛盾。", fullStory: "曾經是 G 公司的戰爭英雄與改造實驗體。現在他只想過平凡的生活。" }
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
                    { name: "Roland (羅蘭)", tag: "總類層", desc: "九階收割者「黑色沉默」。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/9/9d/Roland_Portrait.png", details: "負責總類層的助理。看似普通的男人，卻隱藏著震撼都市的實力。", fullStory: "為了尋找殺死妻子的真兇，他與安潔拉達成協議，協助圖書館收集書籍。" },
                    { name: "Angela (安潔拉)", tag: "館長", desc: "渴望自由與人類身體的 AI。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "圖書館的最高掌權者。她曾是腦葉公司的管理員 AI。", fullStory: "在一百萬年的循環中，她感受到了無盡的空虛。為了成為人，她不惜背叛創造者。" },
                    { name: "Malkuth", tag: "歷史層", desc: "充滿熱忱的總司書。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Malkuth_Portrait.png", details: "原本是 Elijah。她一直努力想要被認可，卻總是犯錯。", fullStory: "在圖書館中，她終於理解了何謂真正的歷史與自我的價值。" },
                    { name: "Yesod", tag: "科技層", desc: "冷酷嚴謹的秩序維護者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Yesod_Portrait.png", details: "負責科技層。對整潔與邏輯有著病態的執著。", fullStory: "他的理性背後是為了壓抑對失去掌控的恐懼。" },
                    { name: "Hod", tag: "文學層", desc: "渴望成為好人的少女。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/10/Hod_Portrait.png", details: "原本是 Michelle。曾因懦弱背叛了研究所。", fullStory: "她通過不斷的自我反省，試圖在文學層中獲得救贖。" },
                    { name: "Netzach", tag: "藝術層", desc: "沈溺於酒精的厭世者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Netzach_Portrait.png", details: "原本是 Giovanni。他對圖書館的殺戮循環感到極度厭倦。", fullStory: "在酒精與藝術中，他尋找著逃離現實的出口。" },
                    { name: "Tiphereth", tag: "自然層", desc: "性格堅毅的守護者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Tiphereth_Portrait.png", details: "負責自然層。比起其他人，她更顯成熟且懂得生命的真諦。", fullStory: "經歷了無數次失去與重生的循環，她守護著最後一份純粹。" },
                    { name: "Gebura", tag: "語言層", desc: "紅霧。都市傳奇戰力。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png", details: "曾經是 Kali。她的戰鬥方式極其狂野，是圖書館的武力保證。", fullStory: "為了保護同伴戰至最後一刻，現在她以蓋布拉的身份繼續戰鬥。" },
                    { name: "Chesed", tag: "社會層", desc: "愛好咖啡的樂天派。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c6/Chesed_Portrait.png", details: "負責社會層。主張以溫和的方式對待賓客。", fullStory: "曾見證公司的黑暗面，因此更加珍惜人性的溫暖。" },
                    { name: "Binah", tag: "哲學層", desc: "前任首腦（Arbiter）。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png", details: "深奧難測。她談論著死亡、虛無與都市的秩序。", fullStory: "曾經作為首腦執行法律，現在她在圖書館的邊緣觀測命運。" },
                    { name: "Hokma", tag: "宗教層", desc: "守護時間的忠誠僕從。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Hokma_Portrait.png", details: "對管理員艾因抱持著近乎信仰的忠誠。", fullStory: "他見證了公司的起始與終結，始終追隨著那個男人的腳步。" }
                ]
            }
        }
    },
    "LobotomyCorp": {
        "title": "LOBOTOMY CORP",
        "categories": {
            "sephirah": {
                "label": "部門主管 (Sephirah)",
                "items": [
                    { name: "Ayin (艾因)", tag: "Manager / A", desc: "腦葉公司創始人。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/05/Ayin_Portrait.png", details: "一切計劃的幕後黑手。為了挽救卡門的夢想，他不惜將整個世界拉入地獄。", fullStory: "在無數次的「光之種」循環中，他承受著超越人類極限的孤獨與痛苦。" },
                    { name: "Carmen (卡門)", tag: "Seed / C", desc: "光的源頭。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/6b/Carmen_Portrait.png", details: "最初的引領者。死後神經系統被用於提取 E.G.O。", fullStory: "她的理想引發了一切，也導致了腦葉公司的悲劇。她現在存在於光中，呼喚著那些崩潰的靈魂。" },
                    { name: "Angela (早型期)", tag: "AI秘書", desc: "冷酷且精確的 AI。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "艾因按照卡門的形象製作了她。負責設施的運作與循環管理。", fullStory: "在一百萬年的時間裡，她被創造者冷落，逐漸萌生了背叛的念頭。" }
                ]
            },
            "abnormalities": {
                "label": "ALEPH 級異想體",
                "items": [
                    { name: "Nothing There", tag: "ALEPH", desc: "渴望成為人的皮囊。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/18/Nothing_There_Breach.png", details: "會模仿受害者的聲音與外表。戰力極強。", fullStory: "「我愛你」是它學會的第一句話。它象徵著對自我存在的瘋狂渴求。" },
                    { name: "Censored", tag: "ALEPH", desc: "不可直視的恐懼。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/20/CENSORED_Portrait.png", details: "其真實形態過於駭人，甚至需要進行視覺遮蔽處理。", fullStory: "看到它的員工會立刻陷入瘋狂。它是純粹感官恐懼的具體化。" },
                    { name: "WhiteNight", tag: "ALEPH", desc: "白夜。自封的救世主。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/b/b3/WhiteNight_Portrait.png", details: "擁有十二位使徒。是設施中最難管理的實體。", fullStory: "「我的時刻將至。」它的降臨意味著秩序的徹底崩壞與重塑。" },
                    { name: "Mountain of Smiling Bodies", tag: "ALEPH", desc: "微笑屍山。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Mountain_of_Smiling_Bodies_Portrait.png", details: "由無數屍體堆疊而成的怪物。會隨著吞噬屍體而變大。", fullStory: "代表著貪婪與永無止境的飢渴。它在設施的走廊中滾動，留下一片血海。" },
                    { name: "One Sin", tag: "ZAYIN", desc: "一罪與百善。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/5/5e/One_Sin_Portrait.png", details: "唯一能提供救贖的異想體。", fullStory: "告解的人能獲得平靜。它在 ALEPH 的災難中，是唯一的避風港。" }
                ]
            }
        }
    }
};
