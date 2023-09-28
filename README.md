## Prisma とは？

-   Node.js のオープンソース ORM
-   型安全なデータベースアクセス
-   マイグレーションシステムを搭載

## Prisma を構成するコンポーネント

### Prisma Client

データモデル定義に合わせて自動生成される型安全なクエリビルダー。

直感的なメソッドでデータベースを操作する。

### Prisma Migrate

マイグレーションシステム。

schema.prisma に基づき実行される。

### Prisma Studio

データベースを操作するための web インタフェースの GUI

## Prisma × express × Typescript × MySQL（コンテナ）で CRUD を起動する

1. アプリケーションと DB コンテナを起動する

```
docker-compose up
```

2. ローカルで prisma をインストールしておく

```
npm install
```

3. prisma でマイグレーションする

```
npx prisma migrate dev --name init
```

4. API を叩く

-   GET

```
curl localhost:8080
```

-   POST

```
curl localhost:8080 -X POST -d '{"name": "Mike", "age": 29}' \
-H "Content-Type: application/json"
```

5. GUI でデータベースを操作する

```
npx prisma studio
```
