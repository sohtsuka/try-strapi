# Strapi application

A quick description of your strapi application

# Instructions

Origin: https://strapi.io/blog/nextjs-react-hooks-strapi-food-app-1


## Initialization

```
npx create-strapi-app my-strapi
```

- テンプレートを使用しない
- postgresql を選択

作成後、 `config/database.js` に `schema` の設定を追加する。スキーマ名を `dev` にする例:

```
schema: env('DATABASE_SCHEMA', 'dev'),
```

## Setup database

PostgreSQL データベースにスーパーユーザーでログインし、以下の設定を行う

- Strapi の初期設定時に指定したものと同じユーザー名・パスワードでユーザーを登録する
- Strapi の初期設定時に指定したものと同じ名前のデータベースを作成し、登録したユーザーに全ての権限を与える

登録したユーザーでログインしなおし、以下の設定を行う

- 作成したデータベースに接続し、 `config/database.js` に追加したものと同じ名前のスキーマを作成する
  （owner が作成したユーザーになる）

## Add graphql plugin

```
npm run strapi install graphql
```

## Start

```
npm run develop
```

http://localhost:1337 にアクセスし、初期ユーザー登録してログイン

## Add Restaurant schema

1. Content Type Builder メニューを選択
2. `+ Create new collection type` を選択
3. Display name に `Restaurant` を入力
4. 以下のタイプ・名称のフィールドを追加
  - Text タイプの `name`
  - Rich Text タイプの `description`
  - Media (Single media) タイプの `image`
5. Continue ボタン、 Save ボタンで保存

サーバーが再起動されるので、待ってから再ログイン

## Allow public access

1. Settings の中の Roles & Permissions メニューを選択
2. Public ロールを選択
3. Restaurant セクションの `find` と `findone` にチェックを入れる
4. Save ボタンで保存
