# 漣 — デザイントークン

Phase 6（実装）でそのまま `assets/css/_tokens.css` に変換できる粒度で、
カラー・タイポ・余白・グリッド・動きのルールを確定する。

すべての判断の根拠：
- [concept.md](concept.md) — ブランドボイス
- [design-notes.md](design-notes.md) — 参考サイトから抽出した実数値

---

## 1. カラー

参考サイトは「写真以外は墨と白のみ」という強い設計思想。漣もこれを踏襲しつつ、
瀬戸内の藍を**極小面積のみ**許可する。

### CSS変数

```css
:root {
  /* — 背景 — */
  --color-bg:           #FAF8F4;  /* 生成りの白：すべての画面背景の基本 */
  --color-bg-pure:      #FFFFFF;  /* 純白：カード・モーダル背景 */
  --color-bg-deep:      #1A1F2A;  /* 濃紺墨：フッター、深いセクション */

  /* — テキスト — */
  --color-text:         #1A1A1A;  /* 墨：本文・見出しの基本 */
  --color-text-2:       #3A3A3A;  /* 中明度：補助テキスト */
  --color-text-3:       #6A6A6A;  /* 弱：キャプション */
  --color-text-4:       #9A9A9A;  /* 最弱：日付・メタ情報 */
  --color-text-on-deep: #FAF8F4;  /* 濃紺背景上の文字 */

  /* — 罫線 — */
  --color-line:         #E5DFD3;  /* 生成りの罫：カード境界・区切り */
  --color-line-2:       #C9C0AE;  /* やや強め罫：ホバー時 */

  /* — アクセント（藍） — */
  --color-accent:       #1F3A5F;  /* 瀬戸内の藍：1%未満の面積でのみ使用 */

  /* — 機能色 — */
  --color-overlay:      rgba(26, 26, 26, 0.4);  /* ヒーロー画像の文字を読みやすくする黒 */
  --color-overlay-soft: rgba(26, 26, 26, 0.2);
}
```

### 使用ルール
- 写真以外の彩度ある色は `--color-accent` のみ。
- アクセントを使ってよい場所：CTAボタンのホバー時、リンクのアンダーライン、フォームフォーカス枠、ロゴの一部装飾。
- ボタン・大面積の背景にアクセントを使わない。
- ダークモードは作らない（コンセプト不一致）。

---

## 2. タイポグラフィ

### 採用フォント

| 役割 | 和文 | 欧文 | フォールバック |
| --- | --- | --- | --- |
| **見出し・本文** | Zen Old Mincho | Cormorant Garamond | 游明朝 → ヒラギノ明朝 → Times → serif |
| **UI（ナビ・ボタン・小さな英字）** | システムsans | Inter | -apple-system → sans-serif |
| **ロゴ** | カスタム（SVGで自前） | — | — |

**選定理由：**
- **Cormorant Garamond** を選んだ：参考サイトの Baskervville より一段繊細で、漣（さざ波）のニュアンスに近い。Italic も美しい。
- **Zen Old Mincho** は参考サイト同等の格と可読性。
- ナビゲーションなどUI要素は **Inter** で軽さを担保。すべて明朝にすると重たい。

### CSS変数

```css
:root {
  /* — フォントファミリー — */
  --font-jp-serif:
      "Zen Old Mincho",
      "游明朝 Demibold", "Yu Mincho Demibold", "游明朝",
      "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro",
      "Times New Roman", serif;

  --font-en-serif:
      "Cormorant Garamond",
      "Baskervville",
      "Times New Roman", Georgia, serif;

  --font-sans:
      "Inter",
      -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Arial",
      "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro",
      sans-serif;

  /* — フォントサイズ（fluid） — */
  --fs-xs:    0.75rem;                          /* 12px キャプション */
  --fs-sm:    0.875rem;                         /* 14px 補助 */
  --fs-base:  1rem;                             /* 16px 本文 */
  --fs-md:    1.125rem;                         /* 18px やや大きい本文 */
  --fs-lg:    clamp(1.25rem, 1.5vw, 1.5rem);    /* 20-24px h4 */
  --fs-xl:    clamp(1.5rem, 2vw, 2rem);         /* 24-32px h3 */
  --fs-2xl:   clamp(1.875rem, 2.8vw, 2.75rem);  /* 30-44px h2 */
  --fs-3xl:   clamp(2.5rem, 4.5vw, 4.5rem);     /* 40-72px h1（ページタイトル） */
  --fs-hero:  clamp(3rem, 7vw, 7rem);           /* 48-112px ヒーロー大見出し */

  /* — 行高 — */
  --lh-tight:  1.3;   /* 大見出し */
  --lh-snug:   1.6;   /* 中見出し */
  --lh-normal: 1.8;   /* 本文 */
  --lh-relaxed: 2.0;  /* 詩的な大ブロック */

  /* — 字間 — */
  --ls-body:    0.04em;   /* 本文（和文） */
  --ls-tight:   0.02em;   /* 詰める時 */
  --ls-heading: 0.12em;   /* 見出し（和文・広め） */
  --ls-en:      0.06em;   /* 英文本文 */
  --ls-en-wide: 0.22em;   /* 英文キャプス・ナビ */

  /* — フォントウェイト — */
  --fw-light:    300;
  --fw-regular:  400;
  --fw-medium:   500;
  --fw-semibold: 600;
}
```

### タイポルール（実装時の指針）

```css
/* 本文 */
body {
  font-family: var(--font-jp-serif);
  font-size: var(--fs-base);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-body);
  color: var(--color-text);
}

/* ページタイトル（各ページのヒーロー見出し） */
.page-title-jp {
  font-family: var(--font-jp-serif);
  font-size: var(--fs-3xl);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-heading);
  font-weight: var(--fw-regular);
}

/* ページタイトル下の英字サブ */
.page-title-en {
  font-family: var(--font-en-serif);
  font-size: var(--fs-md);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-en-wide);
  font-style: italic;
  font-weight: var(--fw-light);
  color: var(--color-text-3);
}

/* ヒーロー大見出し（トップページ） */
.hero-title {
  font-family: var(--font-jp-serif);
  font-size: var(--fs-hero);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-heading);
  font-weight: var(--fw-regular);
}

/* グローバルナビ・ボタン（英字） */
.nav-link {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  letter-spacing: var(--ls-en-wide);
  text-transform: uppercase;
}
```

### 和文・欧文を縦に並べる時のサイズ比
```
[和文・大]  ひと漣の、贅沢。      (--fs-hero, 大)
[英文・小]  Luxury, in a single ripple.  (--fs-md, 小)
```
比率は約 **5:1**。英文は和文の影として置き、決して上回らない。

---

## 3. 余白（スペーシング）

### スケール
基準は `4px = 0.25rem`。指数的ではなく、**節目を意図的に飛ばした実用スケール**。

```css
:root {
  --space-0:  0;
  --space-1:  0.25rem;   /* 4px  最小ギャップ */
  --space-2:  0.5rem;    /* 8px  小ギャップ */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px 標準ギャップ */
  --space-5:  1.5rem;    /* 24px */
  --space-6:  2rem;      /* 32px */
  --space-7:  3rem;      /* 48px */
  --space-8:  4rem;      /* 64px */
  --space-9:  6rem;      /* 96px */
  --space-10: 8rem;      /* 128px セクション内 */
  --space-11: 12rem;     /* 192px */
  --space-12: 16rem;     /* 256px */

  /* — セクション間（fluid） — */
  --section-pad-y:    clamp(6rem, 12vw, 12rem);   /* 96-192px */
  --section-pad-y-sm: clamp(4rem, 8vw, 8rem);     /* 64-128px */
  --section-gap:      clamp(8rem, 16vw, 16rem);   /* 128-256px：セクション同士の隙間 */

  /* — 横方向の余白（コンテナ） — */
  --container-pad-x:  clamp(1.5rem, 5vw, 4rem);   /* 24-64px */

  /* — テキスト用 — */
  --text-block-gap:   1.5em;   /* 段落間 */
  --headline-gap:     0.5em;   /* 見出しと本文の間 */
}
```

### ルール
- **セクション間の余白を恐れない。** 参考サイトは画面高の50%以上の余白を取る場面が多々ある。
- 余白は **乗除ではなく加算で**。例：見出しと本文の間は `--space-5`（24px）、本文と画像の間は `--space-7`（48px）、セクションの上下は `--section-pad-y`。

---

## 4. レイアウト・グリッド

### コンテナ幅
```css
:root {
  --container-max:    1440px;   /* PC最大幅 */
  --container-narrow: 960px;    /* 文章中心ページの最大幅 */
  --container-text:   720px;    /* 読み物の本文幅（45-65字） */
}

.container       { max-width: var(--container-max);    margin-inline: auto; padding-inline: var(--container-pad-x); }
.container-narrow{ max-width: var(--container-narrow); margin-inline: auto; padding-inline: var(--container-pad-x); }
.container-text  { max-width: var(--container-text);   margin-inline: auto; padding-inline: var(--container-pad-x); }
```

### ブレークポイント
**3段階に圧縮**（参考サイトは4段階だったが、漣は簡素化）。

```css
:root {
  --bp-sp:    767px;
  --bp-tab:   1199px;
  --bp-pc:    1200px;
}
```

CSSメディアクエリでの使い分け：
- `@media (max-width: 767px)` … SP
- `@media (min-width: 768px) and (max-width: 1199px)` … タブレット
- `@media (min-width: 1200px)` … PC

### ヘッダー固定の高さ
```css
:root {
  --header-h:    72px;   /* PC平常時 */
  --header-h-sm: 56px;   /* スクロール後・SP */
}

main { padding-top: var(--header-h); }
@media (max-width: 767px) {
  main { padding-top: var(--header-h-sm); }
}
```

---

## 5. 動き（アニメーション）

参考サイトのDNAを継承：**遅く、やわらかく、最小限**。

### CSS変数

```css
:root {
  /* — イージング — */
  --ease-out:      cubic-bezier(.215, .61, .355, 1);  /* 基本 */
  --ease-in-out:   cubic-bezier(.65, .05, .35, 1);    /* 戻り含む */
  --ease-linear:   linear;                            /* マーキーなど */

  /* — Duration — */
  --dur-instant: 100ms;   /* ホバーの色変化 */
  --dur-fast:    200ms;   /* ボタン押下感 */
  --dur-base:    400ms;   /* 一般的なトランジション */
  --dur-slow:    800ms;   /* スクロール出現 */
  --dur-very-slow: 1300ms; /* マスクリビール */
  --dur-cinematic: 10s;   /* ヒーロー画像のスローズーム */
}
```

### 共通モーション

#### A. フェードアップ（最頻出）
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(0.5em); }
  to   { opacity: 1; transform: translateY(0); }
}

.scroll-fade {
  opacity: 0;
  transform: translateY(0.5em);
  transition: opacity var(--dur-slow) var(--ease-out),
              transform var(--dur-slow) var(--ease-out);
  will-change: opacity, transform;
}
.scroll-fade.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```
- IntersectionObserver で要素が viewport 30% 入った段階で `is-visible` を付与。
- 行ごと・要素ごとに **50〜100ms ずつ delay** をかけて連鎖させる。

#### B. ヒーロー画像のスローズーム
```css
@keyframes slowZoom {
  from { transform: scale(1.0); }
  to   { transform: scale(1.08); }
}

.hero-img.is-active {
  animation: slowZoom var(--dur-cinematic) var(--ease-out) forwards;
}
```
- 8〜12秒で1.08倍まで拡大、画像切替時にリセット。
- 動画背景の場合はスローズーム不要。

#### C. マスクリビール（ヒーロー大見出しのみ）
```css
@keyframes maskReveal {
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
}

.hero-title-line {
  clip-path: inset(0 100% 0 0);
  animation: maskReveal var(--dur-very-slow) var(--ease-out) forwards;
}
```

#### D. スクロールインジケーター
```css
@keyframes scrollIndicator {
  0%   { transform: translateY(-100%); opacity: 0; }
  30%  { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}

.scroll-indicator::after {
  animation: scrollIndicator 3s var(--ease-in-out) infinite;
}
```

#### E. リンク・ボタンのホバー
```css
.btn, a.cta {
  transition: color var(--dur-fast) var(--ease-out),
              background-color var(--dur-fast) var(--ease-out),
              transform var(--dur-base) var(--ease-out);
}
.btn:hover {
  transform: translateY(-2px);   /* 微小に持ち上がる */
}
```
**ホバー時の移動量は最大4px**。それ以上動くと安く見える。

### prefers-reduced-motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .scroll-fade { opacity: 1; transform: none; }
}
```

---

## 6. UI部品の基本トークン

### ボタン
```css
:root {
  --btn-pad-y:      0.875rem;
  --btn-pad-x:      2.5rem;
  --btn-radius:     0;            /* 角丸なし、明朝の格に合わせて */
  --btn-border-w:   1px;
}
```

種類は2つだけに絞る：
- **Primary：** 黒背景・白文字（予約ボタン専用、サイトに2〜3箇所のみ）
- **Ghost：** 透明背景・墨文字＋下線アンダーバー（リンクCTAの基本）

### ボーダー・分割線
```css
:root {
  --line-w-thin:  1px;
  --line-w-bold:  2px;
}
```
- 罫線は `var(--color-line)` で常に細く（1px）。

### 影
**使わない。** 写真以外の要素に影を入れると参考サイトの世界観から外れる。
唯一の例外：ヘッダーのスクロール後のごく薄い `0 1px 0 rgba(0,0,0,0.04)`。

### 角丸
**使わない（`border-radius: 0`）。** 角丸は明朝・格・静謐と相反する。
唯一の例外：写真自体のフレーム（不要なら付けない）、ハンバーガー閉じるアイコン、フォームフォーカス枠の輪郭。

---

## 7. アイコン

### 採用方針
- すべて自前のSVG（インライン）。
- ストロークは1px、`stroke-linecap: round`、ストロークカラーは `currentColor`。
- 矢印・スクロール・ハンバーガーなど、必要最小限のみ。

### 主要アイコンのサイズ
```css
:root {
  --icon-sm: 16px;
  --icon-md: 20px;
  --icon-lg: 24px;
}
```

---

## 8. z-index 層の整理

```css
:root {
  --z-base:     1;
  --z-content:  10;
  --z-header:   100;
  --z-overlay:  200;   /* SPメニューオーバーレイ */
  --z-modal:    300;
  --z-toast:    400;
}
```

---

## 9. アクセシビリティ最低限

- すべての画像に `alt` 必須（装飾の場合は `alt=""`）。
- 見出し階層を厳守（h1は各ページ1つだけ、スキップしない）。
- フォームラベルは必須（`<label for=>`）。
- フォーカスリングは標準を消さない。`:focus-visible` で `outline: 2px solid var(--color-accent)` を確保。
- 文字色 `--color-text` (#1A1A1A) と背景 `--color-bg` (#FAF8F4) のコントラスト比は **15.4:1**（WCAG AAA余裕でクリア）。

---

## 10. ファイル構成（Phase 6で `assets/css/_tokens.css` に変換）

このファイルの「CSS変数」ブロックを集約して、以下のCSSを1ファイルとして書き出す：

```css
/* assets/css/_tokens.css */
:root {
  /* Color */
  --color-bg: #FAF8F4;
  ...

  /* Typography */
  --font-jp-serif: ...;
  ...

  /* Spacing */
  --space-1: 0.25rem;
  ...

  /* Layout */
  --container-max: 1440px;
  ...

  /* Motion */
  --ease-out: cubic-bezier(.215, .61, .355, 1);
  ...
}
```

### CSSのファイル分割（Phase 6での想定）

```
assets/css/
├─ _reset.css        ← モダンCSSリセット（Andy Bell ベース）
├─ _tokens.css       ← このファイルから変換
├─ _base.css         ← body, h1-h6, p, a の素のスタイル
├─ _components.css   ← header, footer, button, card, form
├─ _animations.css   ← keyframes と scroll-fade ヘルパー
├─ _utilities.css    ← .container, .visually-hidden, etc
├─ pages/
│   ├─ home.css
│   ├─ about.css
│   ├─ rooms.css
│   └─ ...
└─ main.css          ← @import で上記すべてをまとめる
```

`<head>` には `main.css` 1本だけリンク。CSSは大きくならないので分割で十分。

---

## 11. このトークン群の自己評価（実装前のチェック）

| 項目 | 確認 |
| --- | --- |
| 色：写真以外でアクセントが氾濫しないか | OK（藍は1%未満ルール） |
| タイポ：和文・欧文の混植が美しいか | OK（Zen Old Mincho × Cormorant Garamond） |
| 余白：参考サイト並みに広いか | OK（section-pad-y最大192px） |
| 動き：早すぎず遅すぎないか | OK（基本0.8s、最遅10s） |
| ブレークポイント：複雑すぎないか | OK（3段階） |
| ダーク／ライトモード分岐 | 不要（コンセプト不一致） |
| 角丸・影 | 原則ゼロ |

このトークンに基づいて Phase 6 の実装に入れば、世界観のブレは最小化できる。
