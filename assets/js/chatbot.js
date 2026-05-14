// 漣 — chatbot.js
// Lightweight FAQ-based concierge bot. No backend, no external SaaS.
// Reads its strings from window.SazanamiI18n (loaded by i18n.js).

(function () {
  "use strict";

  const QUESTION_KEYS = [
    ["bot.q1", "bot.a1"],
    ["bot.q2", "bot.a2"],
    ["bot.q3", "bot.a3"],
    ["bot.q4", "bot.a4"],
    ["bot.q5", "bot.a5"],
    ["bot.q6", "bot.a6"],
    ["bot.q7", "bot.a7"],
    ["bot.q8", "bot.a8"]
  ];

  const t = (key) => (window.SazanamiI18n ? window.SazanamiI18n.t(key) : key);

  // ---- DOM build ----------------------------------------------------------

  function buildDom() {
    const root = document.createElement("div");
    root.className = "chatbot";
    root.innerHTML = `
      <button class="chatbot__toggle" type="button" aria-label="${t("bot.button")}">
        <span class="chatbot__toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </span>
        <span class="chatbot__toggle-label" data-bot-label>${t("bot.button")}</span>
      </button>

      <aside class="chatbot__panel" role="dialog" aria-label="AI Concierge" aria-hidden="true">
        <header class="chatbot__head">
          <span class="chatbot__head-mark" aria-hidden="true">漣</span>
          <span class="chatbot__head-title" data-bot-title>${t("bot.title")}</span>
          <button class="chatbot__close" type="button" aria-label="${t("bot.close")}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </header>

        <div class="chatbot__body" data-bot-body>
          <!-- Filled by render() -->
        </div>

        <footer class="chatbot__foot">
          <p class="chatbot__disclaimer" data-bot-disclaimer>${t("bot.disclaimer")}</p>
        </footer>
      </aside>
    `;
    document.body.appendChild(root);
    return root;
  }

  // ---- Render messages ----------------------------------------------------

  function makeMsg(role, text) {
    const wrap = document.createElement("div");
    wrap.className = `chatbot__msg chatbot__msg--${role}`;
    const bubble = document.createElement("div");
    bubble.className = "chatbot__bubble";
    bubble.innerText = text;
    wrap.appendChild(bubble);
    return wrap;
  }

  function makeQuestionList(body, onPick) {
    const list = document.createElement("div");
    list.className = "chatbot__qlist";
    QUESTION_KEYS.forEach(([qKey]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chatbot__qbtn";
      btn.textContent = t(qKey);
      btn.dataset.qkey = qKey;
      btn.addEventListener("click", () => onPick(qKey));
      list.appendChild(btn);
    });
    body.appendChild(list);
  }

  function makeBackButton(onBack) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chatbot__back";
    btn.textContent = t("bot.back");
    btn.addEventListener("click", onBack);
    return btn;
  }

  function scrollToBottom(body) {
    requestAnimationFrame(() => {
      body.scrollTop = body.scrollHeight;
    });
  }

  function renderInitial(body) {
    body.innerHTML = "";
    body.appendChild(makeMsg("bot", t("bot.greeting")));
    makeQuestionList(body, (qKey) => onPickQuestion(body, qKey));
    scrollToBottom(body);
  }

  function onPickQuestion(body, qKey) {
    const aKey = QUESTION_KEYS.find(([q]) => q === qKey)[1];
    body.appendChild(makeMsg("user", t(qKey)));

    // Simulate typing delay for warmth
    setTimeout(() => {
      body.appendChild(makeMsg("bot", t(aKey)));
      body.appendChild(makeBackButton(() => renderInitial(body)));
      scrollToBottom(body);
    }, 280);
    scrollToBottom(body);
  }

  // ---- Open / close behaviour ---------------------------------------------

  function init() {
    const root = buildDom();
    const toggle = root.querySelector(".chatbot__toggle");
    const panel = root.querySelector(".chatbot__panel");
    const close = root.querySelector(".chatbot__close");
    const body = root.querySelector("[data-bot-body]");

    let isOpen = false;
    let initialised = false;

    const open = () => {
      isOpen = true;
      root.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      if (!initialised) {
        renderInitial(body);
        initialised = true;
      }
    };
    const closeFn = () => {
      isOpen = false;
      root.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => (isOpen ? closeFn() : open()));
    close.addEventListener("click", closeFn);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) closeFn();
    });

    // Re-render labels and questions when language changes
    document.addEventListener("sazanami:langchange", () => {
      toggle.querySelector("[data-bot-label]").textContent = t("bot.button");
      toggle.setAttribute("aria-label", t("bot.button"));
      root.querySelector("[data-bot-title]").textContent = t("bot.title");
      root.querySelector("[data-bot-disclaimer]").textContent = t("bot.disclaimer");
      close.setAttribute("aria-label", t("bot.close"));
      if (initialised) renderInitial(body);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
