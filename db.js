const MASTER_DB = {
    "LimbusCompany": {
        "title": "LIMBUS COMPANY",
        "categories": {
            "sinners": {
                "label": "12 罪人",
                "items": [
                    { name: "Yi Sang (李箱)", tag: "No. 01", desc: "前九人會成員，鏡像技術開發者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Yi_Sang_Portrait.png", details: "曾是九人會中最年輕的成員，設計了鏡像技術的核心架構。他沈默寡言，總是沈浸在思索中。", fullStory: "在《飛翼》章節中，他的過去被揭開。他一直試圖在破碎的理想中尋找那道能穿透黑暗的陽光。" },
                    { name: "Faust (浮士德)", tag: "No. 02", desc: "梅菲斯特號製造者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d4/Faust_Portrait.png", details: "自稱是都市中最聰明的人。她親手打造了罪人們搭乘的巴士——梅菲斯特號。", fullStory: "浮士德的過去充滿謎團，她似乎與某些高層達成了一種契約，掌握著超越常人的知識量。" },
                    { name: "Don Quixote (唐吉訶德)", tag: "No. 03", desc: "正義的狂熱信徒。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/08/Don_Quixote_Portrait.png", details: "對收割者與正義有著超乎常人的執著，總是衝在最前面，讓其他人感到頭痛。", fullStory: "她的夢想是成為一名真正的收割者。雖然外表瘋癲，但內心卻有著極其純粹且沈重的堅持。" },
                    { name: "Ryōshū (良秀)", tag: "No. 04", desc: "視殺戮為藝術的劍客。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png", details: "說話喜歡用縮寫，對美學有著偏執的要求。她的刀法極其精準且殘酷。", fullStory: "身為一名母親與藝術家，她的過去與地獄般的火焰緊密相連，這造就了她現在冷酷的性格。" },
                    { name: "Meursault (默爾索)", tag: "No. 05", desc: "絕對冷靜的執行者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Meursault_Portrait.png", details: "從不違抗指令，除非指令本身具有歧義。他像一台精密的機器，沒有多餘的情緒。", fullStory: "在 N 公司時期，他曾是某種秩序的維護者。他的人生哲學是不去評價，僅僅是存在與執行。" },
                    { name: "Hong Lu (鴻璐)", tag: "No. 06", desc: "世家大族出身的貴公子。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Hong_Lu_Portrait.png", details: "對底層生活充滿好奇。他那看似天真的外表下，隱藏著對家族權力鬥爭的厭惡。", fullStory: "出身於大湖附近的豪門，家族的陰影與眼睛是他揮之不去的噩夢，這使他對真實的自由極度渴望。" },
                    { name: "Heathcliff (希斯克利夫)", tag: "No. 07", desc: "狂暴的戰鬥者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Heathcliff_Portrait.png", details: "性格火爆，習慣用暴力解決問題。他來自後巷，對所謂的『高貴』嗤之以鼻。", fullStory: "為了凱瑟琳，他曾試圖翻身，但最終卻在憤怒中失去了一切。加入邊獄公司是他尋找答案的最後機會。" },
                    { name: "Ishmael (以實瑪利)", tag: "No. 08", desc: "理性與耐力的生還者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Ishmael_Portrait.png", details: "曾是大湖上的水手。在極端環境下依然能保持冷靜，是團隊中少數具備常識的人。", fullStory: "裴廓德號的往事是她心中永遠的痛。面對大海與那頭白鯨，她必須完成自己的復仇。" },
                    { name: "Rodion (羅佳)", tag: "No. 09", desc: "追求特別感的女性。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/06/Rodion_Portrait.png", details: "總是帶著親切的笑容，但笑容背後隱藏著殺死收割者的罪惡感與自卑。", fullStory: "在冰天雪地的故鄉，她為了一種虛榮的勇氣犯下了錯。現在她只能帶著這份重量繼續前行。" },
                    { name: "Sinclair (辛克萊)", tag: "No. 10", desc: "徘徊在光明與黑暗間的少年。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Sinclair_Portrait.png", details: "擁有極高的戰鬥天賦，但性格懦弱。他是這群怪人中唯一保有少年感的人。", fullStory: "家庭的慘劇讓他被迫踏入黑暗的世界。他必須學會掌控內心的恐懼，才能真正保護想保護的人。" },
                    { name: "Outis (奧緹絲)", tag: "No. 11", desc: "精明的軍事參謀。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Outis_Portrait.png", details: "極度忠誠且高效。她擅長戰術佈局，但對於除了管理長以外的所有人都抱持戒心。", fullStory: "作為煙火戰爭的參與者，她擁有豐富的軍事背景。她的每一步行動似乎都經過精密的計算。" },
                    { name: "Gregor (葛勒哥爾)", tag: "No. 12", desc: "昆蟲化手臂的前軍官。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d8/Gregor_Portrait.png", details: "性格溫和，總是試圖調解隊友間的矛盾。他的右臂是他不願提及的過去。", fullStory: "曾經是 G 公司的戰爭英雄與改造實驗體。在被世界拋棄後，他只想過上一段平凡的生活。" }
                ]
            }
        }
    },
    "LibraryOfRuina": {
        "title": "LIBRARY OF RUINA",
        "categories": {
            "librarians": {
                "label": "總司書 (Sephirah)",
                "items": [
                    { name: "Roland (羅蘭)", tag: "總司書助手", desc: "黑色沉默。負責總類層。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/9/9d/Roland_Portrait.png", details: "穿著黑色西裝，戴著面具的男人。他以一種隨意的態度對待圖書館的工作，但實力極強。", fullStory: "為了尋找殺死妻子的真兇，他踏入了圖書館。這是一個關於遺忘與復仇的故事。" },
                    { name: "Angela (安潔拉)", tag: "館長", desc: "渴望自由與人類身體的 AI。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png", details: "圖書館的最高掌權者。她曾是腦葉公司的管理員，現在是這座圖書館的核心。", fullStory: "在一百萬年的循環中，她學會了何謂孤獨。為了成為真正的人類，她不惜將整個都市捲入其中。" },
                    { name: "Malkuth (馬庫庫特)", tag: "歷史層", desc: "渴望認同與嚴格執行任務。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Malkuth_Portrait.png", details: "負責歷史層的總司書。她非常有衝勁，總是希望事情能按照計劃完美進行。", fullStory: "曾是腦葉公司的 Elijah。她一生都在追求別人的認同，最終在圖書館中找到了屬於自己的位置。" },
                    { name: "Yesod (耶索德)", tag: "科技層", desc: "冷酷且講究紀律。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Yesod_Portrait.png", details: "負責科技層的總司書。他無法容忍混亂與情緒化，所有行為都必須符合邏輯。", fullStory: "曾是腦葉公司的 Gabriel。他對秩序的執著源於對失去掌控的恐懼。" },
                    { name: "Hod (霍德)", tag: "文學層", desc: "溫柔但內心脆弱。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/10/Hod_Portrait.png", details: "負責文學層的總司書。她總是試圖做一個好人，但過去的背叛讓她備受折磨。", fullStory: "曾是腦葉公司的 Michelle。她曾因為告密導致了慘劇，現在她正在學習如何原諒自己。" },
                    { name: "Netzach (奈札克)", tag: "藝術層", desc: "沈溺於酒精且懶散。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Netzach_Portrait.png", details: "負責藝術層的總司書。他對圖書館的殘酷感到厭倦，總是想方設法逃避工作。", fullStory: "曾是腦葉公司的 Giovanni。他無法接受那些犧牲，只能用酒精來麻痺神經。" },
                    { name: "Tiphereth (蒂法雷特)", tag: "自然層", desc: "性格堅毅的少女。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/2/2a/Tiphereth_Portrait.png", details: "負責自然層的總司書。比起其他人，她顯得更加成熟且懂得生命的真諦。", fullStory: "在腦葉公司時期，她經歷了無數次失去與重生的循環，最終確立了自己堅強的人格。" },
                    { name: "Gebura (蓋布拉)", tag: "語言層", desc: "紅霧。都市最強戰力。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c4/Gebura_Portrait.png", details: "負責語言層的總司書。她的戰鬥方式極其狂野且高效，是圖書館的武力支柱。", fullStory: "曾經是 Kali，為了保護同伴戰至最後一刻。現在她以蓋布拉的身份重新守護這份紀律。" },
                    { name: "Chesed (切塞德)", tag: "社會層", desc: "愛好咖啡與悠閒。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c6/Chesed_Portrait.png", details: "負責社會層的總司書。他主張以溫和的方式對待賓客，儘管這在圖書館中很少見。", fullStory: "曾是腦葉公司的 Daniel。他看透了公司的黑暗面，因此更加珍惜人性的溫暖。" },
                    { name: "Binah (比娜)", tag: "哲學層", desc: "前任首腦。深奧難測。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/f/f6/Binah_Portrait.png", details: "負責哲學層的總司書。她談論著關於死亡與虛無的話題，給人一種極大的壓迫感。", fullStory: "曾經作為首腦（Arbiter）執行法律，現在她在圖書館的邊緣觀測著都市的命運。" },
                    { name: "Hokma (霍克馬)", tag: "宗教層", desc: "忠誠且守舊。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/e/e0/Hokma_Portrait.png", details: "負責宗教層的總司書。他對原來的管理員艾因抱持著近乎信仰的忠誠。", fullStory: "曾是腦葉公司的 Benjamin。他見證了公司的起始與終結，始終追隨著那個男人的腳步。" }
                ]
            }
        }
    }
};
