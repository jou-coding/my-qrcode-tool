# my-qrcode-tool

## 概要

URL 文字列を QR コード画像に変換する、シンプルな Node.js 製のツールです。

## 制作目的

自作した Web アプリケーションなどを友人に共有する際、手軽に URL を QR コードに変換するために開発しました。

## 仕様技術

- Node.js
- [qrcode](https://www.npmjs.com/package/qrcode)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 使用方法

`.env` ファイル（例: `.env.example` をコピー）に APP_URL を設定し、`backend` ディレクトリで以下のコマンドを実行してください：

```
cd backend
npm install
npm run generate
```

## ライセンス

このプロジェクトは[MIT ライセンス](LICENSE)の元で公開されています。
