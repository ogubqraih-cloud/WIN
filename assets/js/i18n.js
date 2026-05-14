// 漣 — i18n.js
// Lightweight bilingual dictionary + language switcher.
// Persists choice via localStorage. No build step.

(function () {
  "use strict";

  const STORAGE_KEY = "sazanami_lang";

  const dict = {
    ja: {
      // Header / Navigation
      "nav.about": "漣について",
      "nav.rooms": "客室",
      "nav.dining": "ダイニング",
      "nav.facilities": "施設",
      "nav.experience": "過ごし方",
      "nav.access": "アクセス",
      "nav.news": "お知らせ",
      "nav.contact": "お問い合わせ",
      "nav.reserve": "予約 →",
      "nav.menu_open": "メニューを開く",

      // Rooms (one-character names stay the same; English variants for sublabels)
      "room.sazanami_label": "漣",
      "room.nagi_label": "凪",
      "room.migiwa_label": "汀",
      "room.tana_label": "棚",

      // Dining
      "dining.ushio": "潮",
      "dining.asage": "朝餉の間",
      "dining.nagi_no_ma": "凪の間",

      // CTAs
      "cta.reserve_arrow": "予約 →",
      "cta.reserve_now": "予約する →",
      "cta.contact_arrow": "お問い合わせ →",
      "cta.scroll": "Scroll",
      "cta.book_official": "公式予約サイトへ →",
      "cta.send_form": "送信する →",

      // Footer
      "footer.sitemap": "Sitemap",
      "footer.contact": "Contact",
      "footer.follow": "Follow",
      "footer.address": "〒705-0000 岡山県備前市凪島",
      "footer.tel": "TEL：0869-00-0000",
      "footer.hours": "受付：10:00 - 18:00",
      "footer.privacy": "Privacy Policy",
      "footer.tagline_jp": "ひと漣の、贅沢。",
      "footer.tagline_en": "Luxury, in a single ripple.",

      // Chatbot
      "bot.button": "AI Concierge",
      "bot.title": "漣 AI コンシェルジュ",
      "bot.greeting": "こんにちは。漣のAIコンシェルジュです。\nご質問をお選びください。",
      "bot.back": "← 質問一覧へ戻る",
      "bot.close": "閉じる",
      "bot.disclaimer": "※ AIによる自動応答です。詳細はお電話・お問い合わせフォームよりご連絡ください。",

      "bot.q1": "子どもは宿泊できますか？",
      "bot.a1": "中学生以上の方にご利用いただいております。安らぎの時間を保つため、ご了承ください。",

      "bot.q2": "ペットの同伴は可能ですか？",
      "bot.a2": "申し訳ございませんが、ペットの同伴はお断りしております。",

      "bot.q3": "日帰り利用はできますか？",
      "bot.a3": "一部のレストラン・スパは、宿泊者以外のご利用も承ります。事前予約制です。",

      "bot.q4": "専用船以外の移動手段はありますか？",
      "bot.a4": "漣への上陸は、専用船のみとなります。漁船等のチャーターはお受けしておりません。",

      "bot.q5": "チェックイン／アウトの時刻は？",
      "bot.a5": "チェックイン15:00、チェックアウト12:00。レイトチェックアウトのご相談も承ります。",

      "bot.q6": "Wi-Fiは利用できますか？",
      "bot.a6": "全室利用可能です。ただし、滞在の質を保つため、速度はあえて抑えています。",

      "bot.q7": "キャンセルポリシーは？",
      "bot.a7": "宿泊予定日の14日前まで無料、以降はプランにより異なります。詳細は予約時にご案内いたします。",

      "bot.q8": "アクセス方法は？",
      "bot.a8": "本州の日生港から専用船で約30分です。詳しくはアクセスページをご覧ください。",

      // Page hero titles (sub-pages, large)
      "page.about.title_jp": "漣について",
      "page.rooms.title_jp": "客室",
      "page.dining.title_jp": "ダイニング",
      "page.facilities.title_jp": "施設",
      "page.experience.title_jp": "過ごし方",
      "page.access.title_jp": "アクセス",
      "page.news.title_jp": "お知らせ",
      "page.contact.title_jp": "お問い合わせ",
      "page.privacy.title_jp": "プライバシーポリシー",

      // Page hero subtitles (sub-pages, small italic)
      "page.about.title_en": "About Sazanami",
      "page.rooms.title_en": "Rooms",
      "page.dining.title_en": "Dining",
      "page.facilities.title_en": "Facilities",
      "page.experience.title_en": "Experience",
      "page.access.title_en": "Access",
      "page.news.title_en": "News",
      "page.contact.title_en": "Contact",
      "page.privacy.title_en": "Privacy Policy",

      // Top-page hero & closing
      "hero.tagline_jp": "ひと漣の、贅沢。",
      "hero.tagline_en": "Luxury, in a single ripple."
    },

    en: {
      // Header / Navigation
      "nav.about": "About",
      "nav.rooms": "Rooms",
      "nav.dining": "Dining",
      "nav.facilities": "Facilities",
      "nav.experience": "Experience",
      "nav.access": "Access",
      "nav.news": "News",
      "nav.contact": "Contact",
      "nav.reserve": "Reserve →",
      "nav.menu_open": "Open menu",

      // Rooms — keep kanji as the brand mark (international guests recognize the brand by kanji)
      "room.sazanami_label": "Sazanami",
      "room.nagi_label": "Nagi",
      "room.migiwa_label": "Migiwa",
      "room.tana_label": "Tana",

      // Dining
      "dining.ushio": "Ushio",
      "dining.asage": "Asage-no-ma",
      "dining.nagi_no_ma": "Nagi-no-ma",

      // CTAs
      "cta.reserve_arrow": "Reserve →",
      "cta.reserve_now": "Reserve now →",
      "cta.contact_arrow": "Contact →",
      "cta.scroll": "Scroll",
      "cta.book_official": "Official booking →",
      "cta.send_form": "Send →",

      // Footer
      "footer.sitemap": "Sitemap",
      "footer.contact": "Contact",
      "footer.follow": "Follow",
      "footer.address": "Nagishima Island, Bizen, Okayama 705-0000, Japan",
      "footer.tel": "Tel: +81-869-00-0000",
      "footer.hours": "Reception: 10:00 - 18:00",
      "footer.privacy": "Privacy Policy",
      "footer.tagline_jp": "Luxury, in a single ripple.",
      "footer.tagline_en": "ひと漣の、贅沢。",

      // Chatbot
      "bot.button": "AI Concierge",
      "bot.title": "Sazanami AI Concierge",
      "bot.greeting": "Welcome. I am the Sazanami AI Concierge.\nPlease choose a question below.",
      "bot.back": "← Back to questions",
      "bot.close": "Close",
      "bot.disclaimer": "* Automated AI responses. For details, please contact us by phone or inquiry form.",

      "bot.q1": "Can children stay at the hotel?",
      "bot.a1": "Sazanami welcomes guests aged 13 and above. Thank you for understanding our wish to maintain a quiet atmosphere.",

      "bot.q2": "Are pets allowed?",
      "bot.a2": "We regret that pets are not permitted at the property.",

      "bot.q3": "Can I visit just for dining or spa?",
      "bot.a3": "Selected dining venues and spa services are open to non-staying guests by reservation only.",

      "bot.q4": "Is there any way to reach the island other than the private boat?",
      "bot.a4": "Access to Nagishima is via our private boat only. We do not arrange fishing boats or other charter vessels.",

      "bot.q5": "What are the check-in / check-out times?",
      "bot.a5": "Check-in is from 15:00, check-out by 12:00. Late check-out may be arranged on request.",

      "bot.q6": "Is Wi-Fi available in the rooms?",
      "bot.a6": "Wi-Fi is available in every room. We intentionally keep the speed modest to preserve the quality of your stay.",

      "bot.q7": "What is the cancellation policy?",
      "bot.a7": "Free cancellation up to 14 days before your stay. Different terms apply within 14 days, depending on the plan. Details are sent at the time of booking.",

      "bot.q8": "How do I get to Sazanami?",
      "bot.a8": "Approximately 30 minutes by our private boat from Hinase Port. Please see the Access page for full details.",

      // Page hero titles (large, English in EN mode)
      "page.about.title_jp": "About Sazanami",
      "page.rooms.title_jp": "Rooms",
      "page.dining.title_jp": "Dining",
      "page.facilities.title_jp": "Facilities",
      "page.experience.title_jp": "Experience",
      "page.access.title_jp": "Access",
      "page.news.title_jp": "News",
      "page.contact.title_jp": "Contact",
      "page.privacy.title_jp": "Privacy Policy",

      // Page hero subtitles (small, JP kept as accent in EN mode)
      "page.about.title_en": "漣について",
      "page.rooms.title_en": "客室",
      "page.dining.title_en": "ダイニング",
      "page.facilities.title_en": "施設",
      "page.experience.title_en": "過ごし方",
      "page.access.title_en": "アクセス",
      "page.news.title_en": "お知らせ",
      "page.contact.title_en": "お問い合わせ",
      "page.privacy.title_en": "プライバシーポリシー",

      // Top-page hero & closing
      "hero.tagline_jp": "Luxury, in a single ripple.",
      "hero.tagline_en": "ひと漣の、贅沢。"
    }
  };

  // ---- Public API ----------------------------------------------------------

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "ja";
  }

  function setLang(lang) {
    if (!dict[lang]) lang = "ja";
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
    // Notify other components (e.g., chatbot) so they can re-render.
    document.dispatchEvent(new CustomEvent("sazanami:langchange", { detail: { lang } }));
  }

  function t(key, lang) {
    return dict[lang || getLang()]?.[key] ?? key;
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const txt = dict[lang]?.[key];
      if (txt != null) el.textContent = txt;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.dataset.i18nAriaLabel;
      const txt = dict[lang]?.[key];
      if (txt != null) el.setAttribute("aria-label", txt);
    });

    // Lang switcher active state
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === lang);
    });
  }

  // ---- Wire up -------------------------------------------------------------

  const init = () => {
    apply(getLang());

    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = el.dataset.lang;
        if (lang) setLang(lang);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for other modules (chatbot)
  window.SazanamiI18n = { t, getLang, setLang, dict };
})();
