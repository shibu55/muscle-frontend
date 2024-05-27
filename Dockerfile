# ベースイメージとしてNode.js 20を使用
FROM node:20

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# パッケージファイルをコピーしてインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Next.jsアプリケーションをビルド
RUN npm run build

# アプリケーションを実行
CMD ["npm", "start"]

# アプリケーションが使用するポートを指定
EXPOSE 3000
