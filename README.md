# ゆきのもり 公式サイト（仮）

Instagramプロフィールからリンクするための、静的な仮トップページです。

## ファイル構成

- `index.html`：ページ本文
- `style.css`：デザインとレスポンシブ調整
- `assets/images/`：キャラクター画像などの配置先

JavaScriptは現在使用していないため、`script.js` は作成していません。

## 画像の差し替え方法

以下のファイル名で画像を配置すると、ページ内に表示されます。

- さとゆき：`assets/images/satoyuki.png`
- ゆき：`assets/images/yuki.png`

同じファイル名で上書きすれば、HTMLを編集せずに画像を差し替えられます。
画像が存在しない場合でも、薄い背景のプレースホルダーが残るようにしています。

## リンクの差し替え方法

`index.html` 内のリンク先を編集してください。

- Instagram：`https://www.instagram.com/yukinomori_official/`
- LINEスタンプ：現在は仮リンク `#` または `#stamp`
- ゆきのもり雑貨店：現在は仮リンク `#`

LINEスタンプやショップのURLが決まったら、該当する `href` の値を正式なURLに変更します。

## GitHub Pagesで公開する場合

1. このフォルダの内容をGitHubリポジトリにアップロードします。
2. GitHubのリポジトリ画面で `Settings` を開きます。
3. `Pages` を開き、公開元を `main` ブランチの `/root` に設定します。
4. 数分後に表示されるURLへアクセスすると、`index.html` が公開されます。

このサイトはHTMLとCSSだけで動くため、ビルド作業は不要です。
