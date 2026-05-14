# 漣 — 画像仕様書

ブランドの世界観（瀬戸内の島・凪・水と光・大人の静謐）に整合する画像を、Phase 7で**配置漏れなく** 差し込めるように、必要画像を全件列挙する。

---

## 取得方針（acquisition strategy）

### 優先順位
1. **Unsplash（最優先）** — 高解像度・無料商用可・クレジット任意。検索キーワードを明記して厳選。
2. **Pexels / Pixabay（次点）** — Unsplashで足りない場合の補完。
3. **AI生成（補欠）** — どうしても見つからないシーンのみ（例：架空の建築外観）。生成プロンプトを記録。
4. **架空サイトであることを明示する Placeholder** — 公開時に必要なら用意。

### 選定基準
- **解像度：** 横幅2400px以上（フルHDの倍）、ヒーローは3840px推奨。
- **ライセンス：** 商用利用可・クレジット表記不要のもの。
- **構図：** 余白が広く、テキストオーバーレイ可能なもの。
- **ムード：** concept.md の世界観（凪・水・光・静謐・大人）と整合。
- **季節：** 季節を限定しすぎない。冬の写真は1割以下に。
- **人物：** 顔がはっきり写った写真は使わない（後ろ姿・手元・足元のみ）。
- **色：** 鮮やかすぎない、彩度を1段抑えたトーン。

### ファイル命名規則
```
[page]-[section]-[index].webp
```
- 例：`top-hero-01.webp`、`rooms-sazanami-gallery-03.webp`、`dining-ushio-hero.webp`
- PC/SP別が必要な場合：`top-hero-01-sp.webp`
- 同一画像の異サイズ：`-1200.webp`、`-2400.webp`、`-3840.webp` のサフィックス

### 配置ディレクトリ
```
assets/images/
├─ top/
├─ about/
├─ rooms/
│   ├─ list/
│   ├─ sazanami/
│   ├─ nagi/
│   ├─ migiwa/
│   └─ tana/
├─ dining/
│   ├─ list/
│   ├─ ushio/
│   ├─ asage/
│   └─ nagi-no-ma/
├─ facilities/
├─ experience/
├─ access/
├─ news/
└─ common/  ← ロゴ、ファビコン、SVG装飾
```

### 画像書き出し設定
- **形式：** WebP（quality 80）、フォールバック用JPG（quality 85）
- **サイズ：** 各画像を3サイズで書き出し（1200 / 2400 / 3840px幅）
- **`<picture>` + `srcset`** で出し分け

---

## 画像一覧（ページ別）

凡例：
- **A** = アスペクト比
- **方向：** 横長 / 縦長 / 正方形
- **時間帯：** 朝霧（5〜7時）／朝（7〜10）／昼／夕（夕陽前後）／夜（月夜）
- **タグ例：** [海] [森] [建物] [室内] [食] [人物] [小物]

---

### 1. トップページ `/` — 計14点

| ID | 用途 | A | 時間帯 | 内容（ムード・構図） | Unsplash検索キーワード |
| --- | --- | --- | --- | --- | --- |
| `top-hero-01` | ヒーロー（PC） | 21:9 | 朝霧 | 凪の海面に立つ漣（さざ波）、島影うっすら | calm sea morning, ripple water, misty sea japan, seto inland sea |
| `top-hero-01-sp` | ヒーロー（SP） | 9:16 | 朝霧 | 同シーンの縦構図 | （上記の縦構図） |
| `top-hero-02` | ヒーロー差替 | 21:9 | 夕 | 夕陽が水面に橙の道を作る瀬戸内 | sunset seto, golden hour calm sea |
| `top-hero-03` | ヒーロー差替 | 21:9 | 夜 | 月夜の海、月光が水面を細く照らす | moonlight sea, calm ocean night |
| `top-hero-video` | ヒーロー動画（任意） | 16:9 | 朝 | 5〜8秒、水面に漣が広がる接写、無音ループ | （映像素材：Pexels Videos / Coverr） |
| `top-intro-01` | イントロ背景 | 16:9 | 朝霧 | 海から立ち上る朝霧、島影 | morning mist island, fog sea |
| `top-rooms-01` | 客室プレビュー（フル幅） | 16:9 | 昼 | 漣スイートの空間、大窓から海が見える | luxury japanese suite ocean view, ryokan interior |
| `top-dining-01` | カード：潮 | 3:2 | 夜 | 薪火と料理、暗い背景 | open fire cooking, fine dining fire |
| `top-dining-02` | カード：朝餉の間 | 3:2 | 朝 | 障子の朝食、土鍋ご飯、和食朝食 | japanese breakfast, donabe rice, shoji morning |
| `top-dining-03` | カード：凪の間 | 3:2 | 夕 | ラウンジ、夕陽、酒のグラス | japanese tea lounge sunset, evening lounge |
| `top-experience-01` | 過ごし方背景 | 16:9 | 朝霧 | 朝の小舟、舟屋から海へ | small boat morning fog, japanese boat dawn |
| `top-facilities-01〜05` | 施設小カード×5 | 1:1 | 各 | 水鏡（プール）／潮の湯（風呂）／文の間（書）／舟屋（船）／手当て（手） | infinity pool ocean, japanese bath salt, library books quiet, japanese boathouse, spa stone |
| `top-access-01` | アクセスティーザー | 21:9 | 昼 | 島の俯瞰、瀬戸内の多島美 | aerial seto islands, japan archipelago |
| `top-closing-01` | クロージング | 21:9 | 夜 | 月夜の海、深い藍 | dark blue sea night |

---

### 2. About `/about/` — 計5点

| ID | 用途 | A | 時間帯 | 内容 | キーワード |
| --- | --- | --- | --- | --- | --- |
| `about-hero` | ヒーロー | 21:9 | 朝霧 | 朝霧の海と島影、引きの構図 | misty sea island silhouette |
| `about-island` | 凪島イメージ | 16:9 | 昼 | 島の俯瞰、緑と海と棚田跡 | small island green japan, terraced field island |
| `about-architecture` | 建築外観 | 16:9 | 昼 | 黒瓦屋根の長い建物、和モダン外観 | japanese ryokan exterior, black tile roof modern, low japanese architecture |
| `about-interior` | 室内（縁側など） | 3:2 | 昼 | 縁側の風景、光が差す | engawa veranda light, japanese tatami sunlight |
| `about-detail` | もてなし（ディテール） | 1:1 | 夕 | 茶器、和ろうそく、塩の小瓶など小物 | japanese tea ceremony, candle still life, salt jar minimal |

---

### 3. 客室一覧 `/rooms/` — 計5点

| ID | 用途 | A | 時間帯 | 内容 | キーワード |
| --- | --- | --- | --- | --- | --- |
| `rooms-hero` | ヒーロー | 21:9 | 昼 | 客室の引き、開けた窓と海 | luxury hotel room ocean window |
| `rooms-card-sazanami` | 漣スイート（フル幅） | 16:9 | 夕 | 離れの外観、桟橋越し | private villa over water, japanese suite terrace |
| `rooms-card-nagi` | 凪 | 3:2 | 朝 | 海側スイートの大窓、半露天 | suite room ocean view morning, half outdoor bath |
| `rooms-card-migiwa` | 汀 | 3:2 | 夕 | ツインルーム、夕方の柔らかい光 | twin hotel room sunset light |
| `rooms-card-tana` | 棚 | 3:2 | 朝 | 緑を望む内側の客室 | japanese inn room garden view |

---

### 4. 客室詳細 `/rooms/{name}/` — 各7点 × 4ページ = 計28点

各ページ共通テンプレート（同じ部屋の異カット7枚）：

| ID（接尾辞） | 用途 | A | 内容 |
| --- | --- | --- | --- |
| `-hero` | ヒーロー | 21:9 | その部屋のキー写真 |
| `-gallery-01` | 全景 | 16:9 | 部屋全体の引き |
| `-gallery-02` | ベッド寄り | 3:2 | 寝具の質感 |
| `-gallery-03` | バス | 3:2 | 風呂、湯気、窓越しの光 |
| `-gallery-04` | テラス／窓辺 | 3:2 | 外光、景色 |
| `-gallery-05` | ディテール | 1:1 | アメニティ、小物の寄り |
| `-floorplan` | 間取り図 | 4:3 | 線画SVG（自前で書く・自動生成） |

**Unsplash検索の例：**
- 漣スイート：`overwater bungalow private`, `japanese villa private terrace`, `luxury suite ocean private`
- 凪：`ocean view suite morning`, `half outdoor bath suite`
- 汀：`twin hotel room window view`, `japanese minimal twin`
- 棚：`japanese garden room view`, `tatami window forest`

---

### 5. ダイニング総合 `/dining/` — 計4点

| ID | 用途 | A | 時間帯 | 内容 | キーワード |
| --- | --- | --- | --- | --- | --- |
| `dining-hero` | ヒーロー | 21:9 | 夜 | 薪火、シェフの手元、皿 | open fire cooking dining, chef plating |
| `dining-card-ushio` | 潮カード | 16:9 | 夜 | カウンターの夜の食事 | counter dining night japan |
| `dining-card-asage` | 朝餉の間カード | 3:2 | 朝 | 障子と朝食、土鍋 | japanese breakfast tatami |
| `dining-card-nagi` | 凪の間カード | 3:2 | 夕 | ラウンジの夕暮れ | hotel lounge sunset |

---

### 6. ダイニング詳細 `/dining/{name}/` — 各6点 × 3ページ = 計18点

各ページ共通テンプレート：

| ID（接尾辞） | 用途 | A | 内容 |
| --- | --- | --- | --- |
| `-hero` | ヒーロー | 21:9 | 店のキー写真（火・空間など） |
| `-gallery-01〜04` | 料理ギャラリー | 1:1 or 3:2 | 料理4枚、季節感 |
| `-chef` | シェフ／料理人 | 3:2 | 後ろ姿または手元、人物が顔出ししないように |

**Unsplash検索の例：**
- 潮：`japanese fine dining fire`, `chef hands seafood`, `kaiseki plating`, `ash grilled fish`
- 朝餉の間：`donabe rice clay pot`, `japanese breakfast set`, `salt rice ball japan`
- 凪の間：`japanese tea pour`, `evening sake glass`, `fire pit lounge`

---

### 7. 施設 `/facilities/` — 計6点

| ID | 用途 | A | 時間帯 | 内容 | キーワード |
| --- | --- | --- | --- | --- | --- |
| `facilities-hero` | ヒーロー | 21:9 | 昼 | プールサイドから海 | infinity pool ocean horizon |
| `facilities-mizukagami` | 水鏡 | 16:9 | 昼 | インフィニティプール、水平線一致 | infinity pool sea, horizon pool |
| `facilities-ushio-no-yu` | 潮の湯 | 3:2 | 夕 | 大浴場、湯気、塩 | japanese hot bath steam, onsen interior |
| `facilities-fumi-no-ma` | 文の間 | 3:2 | 夕 | 図書ラウンジ、書棚と窓 | hotel library quiet, books shelf reading |
| `facilities-funaya` | 舟屋 | 3:2 | 朝 | 桟橋とボート | wooden pier japan boat, calm boathouse |
| `facilities-teate` | 手当ての間 | 3:2 | 昼 | スパ、石、椿油など小物 | spa stones aromatherapy, japanese spa minimal |

---

### 8. 過ごし方 `/experience/` — 計6点

| ID | 用途 | A | 時間帯 | 内容 | キーワード |
| --- | --- | --- | --- | --- | --- |
| `experience-hero` | ヒーロー | 21:9 | 朝霧 | 朝の海、舟が一艘 | morning fog boat sea |
| `experience-boat` | 朝凪のボート | 3:2 | 朝 | ボートツアー、舟首と海 | small boat bow morning sea |
| `experience-cycling` | サイクリング | 3:2 | 昼 | 古い自転車、棚田跡 | bicycle countryside path japan |
| `experience-sunset` | 夕陽のラウンジ | 3:2 | 夕 | グラス越しの夕陽 | sunset wine glass, golden hour drink |
| `experience-moon` | 月夜の瞑想 | 3:2 | 夜 | 桟橋と月、人影なし | wooden pier moonlight |
| `experience-workshop` | ワークショップ | 1:1 | 昼 | 塩の結晶、書、柑橘の蒸留など | salt crystals making, japanese calligraphy hand, citrus distillation |

---

### 9. アクセス `/access/` — 計2点

| ID | 用途 | A | 時間帯 | 内容 | キーワード |
| --- | --- | --- | --- | --- | --- |
| `access-hero` | ヒーロー | 21:9 | 朝 | 港から島を望む | port view island morning |
| `access-island-aerial` | 島俯瞰 | 16:9 | 昼 | 瀬戸内の島の俯瞰 | aerial seto islands |

地図はGoogle Maps embed（画像不要）。

---

### 10. お知らせ `/news/` — 計5点

5本の記事それぞれにアイキャッチ：

| ID | 記事 | A | 内容 | キーワード |
| --- | --- | --- | --- | --- |
| `news-opening` | 開業のお知らせ | 16:9 | 朝の建物外観 | hotel exterior morning fog japan |
| `news-early-summer-dinner` | 初夏のディナー | 16:9 | 鯛の薪火 | grilled fish japan, snapper plating |
| `news-salt-workshop` | 塩づくり | 16:9 | 塩の結晶、海水を煮詰める | salt crystals close up, salt making pan |
| `news-press-utsukushii-yado` | メディア掲載 | 16:9 | 雑誌の表紙の影、机上の雑誌 | magazine on table, japanese magazine still life |
| `news-spring-stay-plan` | 春のステイ | 16:9 | 山桜と霞 | mountain cherry blossom mist, spring japan calm |

---

### 11. お問い合わせ `/contact/` — 計1点

| ID | 用途 | A | 内容 | キーワード |
| --- | --- | --- | --- | --- |
| `contact-hero` | ヒーロー（小） | 21:9 | 静かな水面、ロゴが乗る余白 | calm sea minimal |

---

### 12. 共通アセット — 計約8点

| ID | 用途 | 形式 | 内容 |
| --- | --- | --- | --- |
| `logo-sazanami` | ロゴ | SVG | 漢字「漣」+ "SAZANAMI" |
| `logo-sazanami-monogram` | モノグラム | SVG | 漢字一文字のみ |
| `favicon-32`, `favicon-180` | ファビコン | PNG | 漣の単純化 |
| `og-image-default` | OGP画像 | 1200x630 PNG | 漣ロゴ + キャッチコピー |
| `icon-scroll` | スクロールアイコン | SVG | 縦線が下に伸びる |
| `icon-arrow` | 矢印 | SVG | リンク末尾の矢印 |
| `icon-hamburger` | ハンバーガー | SVG | 三本線 |
| `pattern-water` | 装飾パターン | SVG | 漣の波紋（背景装飾） |

---

## 集計

| カテゴリ | 点数 |
| --- | --- |
| トップ | 14 |
| About | 5 |
| 客室一覧 | 5 |
| 客室詳細（4ページ） | 28 |
| ダイニング一覧 | 4 |
| ダイニング詳細（3ページ） | 18 |
| 施設 | 6 |
| 過ごし方 | 6 |
| アクセス | 2 |
| お知らせ | 5 |
| お問い合わせ | 1 |
| 共通 | 8 |
| **合計** | **約102点** |

---

## ライセンス管理

Phase 7で取得時、以下を `assets/images/CREDITS.md` に記録：

```
[ファイル名]
  Source: Unsplash
  Photographer: [Name] (@username)
  URL: https://unsplash.com/photos/xxx
  License: Unsplash License
```

AI生成の場合：
```
[ファイル名]
  Source: AI generated
  Tool: [tool name]
  Prompt: [exact prompt]
  Date: YYYY-MM-DD
```

---

## Phase 6 → Phase 7 への接続

Phase 6（実装）では、HTMLは `<img>` 直書きではなく `<picture>` で書く：

```html
<picture>
  <source media="(min-width: 1200px)"
          srcset="assets/images/top/top-hero-01-2400.webp 2400w,
                  assets/images/top/top-hero-01-3840.webp 3840w"
          type="image/webp">
  <source media="(max-width: 1199px)"
          srcset="assets/images/top/top-hero-01-sp-1200.webp 1200w"
          type="image/webp">
  <img src="assets/images/top/top-hero-01-2400.jpg"
       alt="朝凪の海に立つ漣"
       width="2400" height="1029"
       fetchpriority="high">
</picture>
```

Phase 6では**全画像をプレースホルダ**（薄いグレー or ダミー画像）で進め、上記の構造を仕込んでおく。Phase 7で本番ファイルに差し替えるだけにする。

---

## プレースホルダ戦略（Phase 6用）

実装中、画像欠如によるレイアウト崩れを防ぐため、以下のプレースホルダで進める：

- **方法1：** SVGデータURIで単色矩形を `<img src>` に。
- **方法2：** `https://placehold.co/2400x1029/d4ccbb/3a3a3a?text=top-hero-01` のような外部プレースホルダ（生成りに近い色、ID表示）。
- **方法3：** 1px のWebPを `transform: scale` で引き伸ばす（最軽量）。

→ **方法2を採用**。色を `#D4CCBB`（生成りベージュ）、文字色 `#3A3A3A` に固定し、IDが見えるようにする。Phase 7差替時の漏れを防げる。
