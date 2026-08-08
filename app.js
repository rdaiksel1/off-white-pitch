// ---------------------------------------------------------------------------
// SLIDE ENGINE — renders SLIDES (from slides.js) and handles navigation.
// No build step, no dependencies. Edit slides.js to change content.
// ---------------------------------------------------------------------------

(function () {
  const viewport = document.getElementById("slide-viewport");
  const btnNext = document.getElementById("btn-next");

  let current = 0;
  let slideEls = [];

  // --- Americana graphics -------------------------------------------------
  const RED = "#b22234";
  const NAVY = "#3c3b6e";

  function starPath(cx, cy, r) {
    let d = "";
    for (let i = 0; i < 10; i++) {
      const rad = i % 2 === 0 ? r : r * 0.382;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      d += (i ? "L" : "M") + (cx + rad * Math.cos(a)).toFixed(2) + " " + (cy + rad * Math.sin(a)).toFixed(2);
    }
    return d + "Z";
  }

  function flagStars(x, y, w, h) {
    let out = "";
    const cols = 11;
    const rows = 9;
    for (let r = 0; r < rows; r++) {
      const n = r % 2 === 0 ? 6 : 5;
      for (let c = 0; c < n; c++) {
        const cx = x + (w / cols) * (r % 2 === 0 ? c * 2 + 1 : c * 2 + 2);
        const cy = y + (h / rows) * (r + 0.5);
        out += `<path d="${starPath(cx, cy, Math.min(w / cols, h / rows) * 0.62)}" fill="#fff"/>`;
      }
    }
    return out;
  }

  function flagSVG(w, h, id) {
    const stripe = h / 13;
    let stripes = "";
    for (let i = 0; i < 13; i++) {
      if (i % 2 === 0) {
        stripes += `<rect x="0" y="${(i * stripe).toFixed(2)}" width="${w}" height="${stripe.toFixed(2)}" fill="${RED}"/>`;
      }
    }
    const cw = w * 0.4;
    const ch = stripe * 7;
    return `<svg class="flag-svg" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="American flag">
      <rect width="${w}" height="${h}" fill="#fff"/>
      ${stripes}
      <rect width="${cw}" height="${ch}" fill="${NAVY}"/>
      ${flagStars(0, 0, cw, ch)}
    </svg>`;
  }

  function toiletFlagSVG() {
    const TX = 22,
      TY = 24,
      TW = 64,
      TH = 82;
    const sh = TH / 13;
    const cw = TW * 0.42;
    const ch = sh * 7;
    let stripes = "";
    for (let i = 0; i < 13; i++) {
      if (i % 2 === 0) {
        stripes += `<rect x="${TX}" y="${(TY + i * sh).toFixed(2)}" width="${TW}" height="${sh.toFixed(2)}" fill="${RED}"/>`;
      }
    }
    return `<svg class="logo-svg" viewBox="0 0 215 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Liberty Pass logo: a toilet flying the American flag">
      <path d="M88 112 C88 146, 100 168, 104 182 L156 182 C161 166, 174 144, 176 112 Z" fill="#fff" stroke="${NAVY}" stroke-width="5" stroke-linejoin="round"/>
      <rect x="96" y="180" width="72" height="14" rx="4" fill="${NAVY}"/>
      <ellipse cx="132" cy="112" rx="56" ry="22" fill="#fff" stroke="${NAVY}" stroke-width="5"/>
      <ellipse cx="132" cy="112" rx="38" ry="12" fill="none" stroke="${NAVY}" stroke-width="3" opacity="0.35"/>
      <defs><clipPath id="lp-tank"><rect x="${TX}" y="${TY}" width="${TW}" height="${TH}" rx="5"/></clipPath></defs>
      <g clip-path="url(#lp-tank)">
        <rect x="${TX}" y="${TY}" width="${TW}" height="${TH}" fill="#fff"/>
        ${stripes}
        <rect x="${TX}" y="${TY}" width="${cw.toFixed(2)}" height="${ch.toFixed(2)}" fill="${NAVY}"/>
        ${flagStars(TX, TY, cw, ch)}
      </g>
      <rect x="${TX}" y="${TY}" width="${TW}" height="${TH}" rx="5" fill="none" stroke="${NAVY}" stroke-width="5"/>
      <rect x="${TX - 7}" y="11" width="${TW + 14}" height="14" rx="5" fill="${NAVY}"/>
    </svg>`;
  }

  function renderSlideContent(slide) {
    switch (slide.type) {
      case "title":
        if (slide.brand) {
          return `
            <div class="slide-content brand-content">
              <div class="brand-stripe"></div>
              <h1 class="brand-title">
                <span class="brand-quote">${slide.quoted}</span>
                <span class="brand-year">${slide.year}</span>
              </h1>
            </div>`;
        }
        return `
          <div class="slide-content${slide.graphic ? " has-logo" : ""}">
            ${slide.graphic === "toilet-flag" ? `<div class="logo-wrap">${toiletFlagSVG()}</div>` : ""}
            <div>
              ${slide.eyebrow ? `<p class="eyebrow">${slide.eyebrow}</p>` : ""}
              <h1 class="slide-title">${slide.title}</h1>
              ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
            </div>
          </div>`;

      case "bullets":
        return `
          <div class="slide-content">
            <h2 class="section-title">${slide.title}</h2>
            <ul class="bullets">
              ${slide.bullets.map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>`;

      case "stat":
        return `
          <div class="slide-content">
            <h2 class="section-title">${slide.title}</h2>
            <div class="stat-row">
              ${slide.stats
                .map(
                  (s) => `
                <div class="stat-block">
                  <div class="stat-value">${s.value}</div>
                  <div class="stat-label">${s.label}</div>
                </div>`
                )
                .join("")}
            </div>
          </div>`;

      case "image":
        return `
          <div class="slide-content">
            ${slide.title ? `<h2 class="section-title">${slide.title}</h2>` : ""}
            <div class="media-frame">
              <img src="${slide.src}" alt="${slide.alt || ""}" />
            </div>
            ${slide.caption ? `<p class="caption">${slide.caption}</p>` : ""}
          </div>`;

      case "video":
        return `
          <div class="slide-content">
            ${slide.title ? `<h2 class="section-title">${slide.title}</h2>` : ""}
            <div class="media-frame">
              <video src="${slide.src}" controls ${slide.poster ? `poster="${slide.poster}"` : ""}></video>
            </div>
            ${slide.caption ? `<p class="caption">${slide.caption}</p>` : ""}
          </div>`;

      case "table":
        return `
          <div class="slide-content">
            <h2 class="section-title">${slide.title}</h2>
            <table class="data-table">
              ${
                slide.columns && slide.columns.some((c) => c)
                  ? `<thead><tr>${slide.columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`
                  : ""
              }
              <tbody>
                ${slide.rows
                  .map(
                    (r) =>
                      `<tr>${r
                        .map(
                          (cell, ci) =>
                            `<td class="${ci === (slide.numCol ?? 1) ? "num" : ""}">${cell}</td>`
                        )
                        .join("")}</tr>`
                  )
                  .join("")}
              </tbody>
            </table>
            ${slide.caption ? `<p class="caption">${slide.caption}</p>` : ""}
          </div>`;

      case "quote":
        return `
          <div class="slide-content">
            <p class="quote-text">${slide.text}</p>
            ${slide.attribution ? `<p class="attribution">${slide.attribution}</p>` : ""}
          </div>`;

      case "twoColBullets":
        return `
          <div class="slide-content">
            <h2 class="section-title">${slide.title}</h2>
            <div class="two-col">
              <div>
                <p class="eyebrow">${slide.left.heading}</p>
                <ul class="bullets">${slide.left.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
              </div>
              <div>
                <p class="eyebrow">${slide.right.heading}</p>
                <ul class="bullets">${slide.right.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
              </div>
            </div>
          </div>`;

      case "closing":
        return `
          ${slide.graphic === "flag" ? `<div class="flag-bg">${flagSVG(190, 100)}</div>` : ""}
          <div class="slide-content closing-content">
            <h1 class="closing-title">${slide.title}</h1>
            ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
          </div>`;

      default:
        return `<div class="slide-content"><p>Unknown slide type: ${slide.type}</p></div>`;
    }
  }

  function build() {
    viewport.innerHTML = "";
    slideEls = SLIDES.map((slide, i) => {
      const el = document.createElement("div");
      el.className = "slide" + (slide.brand ? " slide--brand" : "");
      el.dataset.index = String(i);
      el.innerHTML = renderSlideContent(slide);
      viewport.appendChild(el);
      return el;
    });
  }

  function goTo(index) {
    if (index < 0 || index >= slideEls.length) return;
    const prevIndex = current;
    current = index;

    slideEls.forEach((el, i) => {
      el.classList.remove("active", "exit-left");
      if (i === current) {
        el.classList.add("active");
        // restart child animations
        void el.offsetWidth;
      } else if (i < current) {
        el.classList.add("exit-left");
      }
    });

    btnNext.disabled = current === slideEls.length - 1;
  }

  function next() {
    goTo(Math.min(current + 1, slideEls.length - 1));
  }
  function prev() {
    goTo(Math.max(current - 1, 0));
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  // --- events ---
  btnNext.addEventListener("click", next);

  window.addEventListener("keydown", (e) => {
    if (["ArrowRight", "ArrowDown", " ", "PageDown", "n", "N"].includes(e.key)) {
      e.preventDefault();
      next();
    } else if (["ArrowLeft", "ArrowUp", "PageUp", "p", "P"].includes(e.key)) {
      e.preventDefault();
      prev();
    } else if (e.key === "f" || e.key === "F") {
      toggleFullscreen();
    } else if (e.key === "Home") {
      goTo(0);
    } else if (e.key === "End") {
      goTo(slideEls.length - 1);
    }
  });

  // basic touch swipe
  let touchStartX = null;
  window.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  });
  window.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
    touchStartX = null;
  });

  build();
  goTo(0);
})();
