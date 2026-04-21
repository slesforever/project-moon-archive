// db.js - Project Moon 全資料庫
const PM_DATA = {
    // 角色與敵人資料
    characters: [
        // Limbus Company 罪人 (全員)
        { name: "Yi Sang", type: "Sinner", game: "Limbus", desc: "No. 01 - 前九人會成員，鏡像技術開發者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Yi_Sang_Portrait.png" },
        { name: "Faust", type: "Sinner", game: "Limbus", desc: "No. 02 - 梅菲斯特號製造者，掌握都市知識。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d4/Faust_Portrait.png" },
        { name: "Don Quixote", type: "Sinner", game: "Limbus", desc: "No. 03 - 渴望正義的狂熱者，收割者擁躉。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/08/Don_Quixote_Portrait.png" },
        { name: "Ryōshū", type: "Sinner", game: "Limbus", desc: "No. 04 - 追求血腥藝術的劍客。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/87/Ryoshu_Portrait.png" },
        { name: "Meursault", type: "Sinner", game: "Limbus", desc: "No. 05 - 絕對服從的鐵面人。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/8/80/Meursault_Portrait.png" },
        { name: "Hong Lu", type: "Sinner", game: "Limbus", desc: "No. 06 - 家族底蘊深厚的世家子弟。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/30/Hong_Lu_Portrait.png" },
        { name: "Heathcliff", type: "Sinner", game: "Limbus", desc: "No. 07 - 憤怒的戰鬥者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/6/61/Heathcliff_Portrait.png" },
        { name: "Ishmael", type: "Sinner", game: "Limbus", desc: "No. 08 - 唯一理性的海上生還者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Ishmael_Portrait.png" },
        { name: "Rodion", type: "Sinner", game: "Limbus", desc: "No. 09 - 追求特別意義的女性。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/0/06/Rodion_Portrait.png" },
        { name: "Sinclair", type: "Sinner", game: "Limbus", desc: "No. 10 - 潛力驚人的懦弱少年。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/4/41/Sinclair_Portrait.png" },
        { name: "Outis", type: "Sinner", game: "Limbus", desc: "No. 11 - 謀略家，忠誠可疑的戰爭英雄。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/7/75/Outis_Portrait.png" },
        { name: "Gregor", type: "Sinner", game: "Limbus", desc: "No. 12 - 溫和的改造軍人。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/d/d8/Gregor_Portrait.png" },
        
        // 核心管理層與對手
        { name: "Angela", type: "Sephirah", game: "LC/LoR", desc: "圖書館館長 / 管理 AI。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/c5/Angela_Portrait.png" },
        { name: "Roland", type: "Fixer", game: "LoR", desc: "黑色沉默，九階收割者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/9/9d/Roland_Portrait.png" },
        { name: "Vergilius", type: "Guide", game: "Limbus", desc: "紅之凝視，特色收割者導航員。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/a/a2/Vergilius_Portrait.png" },
        { name: "Argalia", type: "Enemy", game: "LoR", desc: "漆黑樂團，殘響樂團團長。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/3d/Argalia_Portrait.png" },
        { name: "Iori", type: "Fixer", game: "LoR", desc: "紫之淚，跨越維度的特色收割者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/c/ca/Iori_Portrait.png" }
    ],

    // 異想體 (分類分級)
    abnos: [
        { name: "Nothing There", risk: "ALEPH", game: "LC", desc: "模仿人類皮囊的怪物。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/18/Nothing_There_Breach.png" },
        { name: "WhiteNight", risk: "ALEPH", game: "LC", desc: "救世主與十二使徒。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/b/b3/WhiteNight_Portrait.png" },
        { name: "Blue Star", risk: "ALEPH", game: "LC", desc: "吸入一切的虛無核心。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/1/19/Blue_Star_Portrait.png" },
        { name: "Judgment Bird", risk: "WAW", game: "LC", desc: "天秤的審判者。", img: "https://static.wikia.nocookie.net/lobotomycorp/images/3/36/Judgment_Bird_Portrait.png" }
    ],

    // 世界觀章節
    stories: [
        { title: "煙霾戰爭", chapter: "History", content: "導致舊 L 公司毀滅的大戰。" },
        { title: "白夜與黑晝", chapter: "LC End", content: "光之種發射失敗後的都市災難。" },
        { title: "圖書館發射", chapter: "LoR End", content: "Angela 歸還光芒後的結果。" }
    ]
};
