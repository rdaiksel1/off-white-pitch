// ---------------------------------------------------------------------------
// SLIDE ENGINE — renders SLIDES (from slides.js) and handles navigation.
// No build step, no dependencies. Edit slides.js to change content.
// ---------------------------------------------------------------------------

(function () {
  const deck = document.getElementById("deck");
  const viewport = document.getElementById("slide-viewport");
  const btnNext = document.getElementById("btn-next");

  let current = 0;
  let slideEls = [];

  function renderSlideContent(slide) {
    switch (slide.type) {
      case "title":
        if (slide.brand) {
          return `
            <div class="slide-content brand-content">
              <div class="brand-stripe"></div>
              <h1 class="brand-title">
                <span class="brand-quote">&#8220;${slide.quoted}&#8221;</span>
                <span class="brand-year">${slide.year}</span>
              </h1>
            </div>`;
        }
        return `
          <div class="slide-content">
            ${slide.eyebrow ? `<p class="eyebrow">${slide.eyebrow}</p>` : ""}
            <h1 class="slide-title">${slide.title}</h1>
            ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
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
          <div class="slide-content">
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

    deck.classList.toggle("on-brand", !!SLIDES[current].brand);
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
