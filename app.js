// app.js

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------
     Loading System
  --------------------------- */

  const loader = document.getElementById("loader");
  const bar = document.getElementById("barFill");
  const loadingText = document.getElementById("loadingText");

  const msgs = [
    "Connecting to The City...",
    "Decrypting sealed archives...",
    "Synchronizing Lob Corp records...",
    "Accessing Library shelves...",
    "Linking Mephistopheles route...",
    "Access Granted."
  ];

  let progress = 0;
  let step = 0;

  const loadInterval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress > 100) progress = 100;

    bar.style.width = progress + "%";

    if (step < msgs.length && progress > step * 18) {
      loadingText.textContent = msgs[step];
      step++;
    }

    if (progress >= 100) {
      clearInterval(loadInterval);

      setTimeout(() => {
        loader.style.transition = "opacity .6s";
        loader.style.opacity = "0";

        setTimeout(() => {
          loader.style.display = "none";
        }, 700);

      }, 500);
    }

  }, 220);

  /* ---------------------------
     Navigation System
  --------------------------- */

  const navBtns = document.querySelectorAll("nav button");
  const pages = document.querySelectorAll(".page");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const target = btn.dataset.page;

      pages.forEach(page => {
        page.classList.remove("active");

        if (page.id === target) {
          page.classList.add("active");
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      });

    });
  });

  /* ---------------------------
     Character Database
  --------------------------- */

  const characters = [
    { name: "Angela", desc: "AI 管理者 / 多作核心角色" },
    { name: "Roland", desc: "黑色沉默 / 圖書館來賓接待者" },
    { name: "Dante", desc: "巴士管理者 / 時間回溯能力" },
    { name: "Vergilius", desc: "Red Gaze / 導航者" },
    { name: "Charon", desc: "巴士駕駛員" },
    { name: "Binah", desc: "前 Arbiter / Sephirah" },
    { name: "Hod", desc: "Training Team Sephirah" },
    { name: "Gebura", desc: "Disciplinary Team Sephirah" }
  ];

  const charGrid = document.getElementById("charGrid");
  const search = document.getElementById("search");

  function renderChars(keyword = "") {
    charGrid.innerHTML = "";

    const filtered = characters.filter(c =>
      c.name.toLowerCase().includes(keyword.toLowerCase())
    );

    filtered.forEach(c => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h2>${c.name}</h2>
        <p>${c.desc}</p>
      `;
      charGrid.appendChild(div);
    });
  }

  renderChars();

  if (search) {
    search.addEventListener("input", e => {
      renderChars(e.target.value);
    });
  }

  /* ---------------------------
     Abnormality Database
  --------------------------- */

  const abnos = [
    ["One Sin", "懺悔與救贖"],
    ["WhiteNight", "宗教與狂信"],
    ["Blue Star", "吞噬虛無"],
    ["Nothing There", "偽裝與掠食"],
    ["Apocalypse Bird", "審判終局"],
    ["Mountain of Smiling Bodies", "無限增殖"],
    ["Red Hooded Mercenary", "獵人"]
  ];

  const abnoGrid = document.getElementById("abnoGrid");

  function renderAbnos() {
    if (!abnoGrid) return;

    abnoGrid.innerHTML = "";

    abnos.forEach(a => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h2>${a[0]}</h2>
        <p>${a[1]}</p>
      `;

      div.addEventListener("click", () => {
        alert(a[0] + " 已解鎖檔案");
      });

      abnoGrid.appendChild(div);
    });
  }

  renderAbnos();

  /* ---------------------------
     Midnight Mode
  --------------------------- */

  const hour = new Date().getHours();

  if (hour >= 23 || hour <= 5) {
    document.body.style.background = "#050505";
  }

  /* ---------------------------
     Secret Easter Egg
  --------------------------- */

  let clicks = 0;

  document.addEventListener("click", e => {
    if (e.target.tagName === "H1") {
      clicks++;

      if (clicks >= 5) {
        alert("Angela: Welcome back, manager.");
        clicks = 0;
      }
    }
  });

});
