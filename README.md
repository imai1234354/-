Pythonを使用したサーバーレス画像処理アプリケーションのプロジェクト
画像をアップロードするとAmazon Rekognitionを使用して画像内のオブジェクトを検出し、その結果を表示します。使用する技術は、AWS Lambda、Amazon S3、Amazon Rekognition、API Gateway、AWS Amplifyです。

プロジェクトフォルダ構造
serverless-image-recognition/
│
├── amplify/
│   ├── .gitignore
│   ├── package.json
│   ├── src/
│   │   ├── index.js
│   │   └── App.js
│   └── public/
│       └── index.html
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
└── README.md


# サーバーレス画像認識

このプロジェクトは、AWSサービスを使用したサーバーレス画像認識アプリケーションを示します。

## 使用技術

- AWS Lambda
- Amazon S3
- Amazon Rekognition
- API Gateway
- AWS Amplify
- React

## セットアップ手順

1. リポジトリをクローンします:
    ```bash
    git clone <リポジトリURL>
    cd serverless-image-recognition
    ```

2. バックエンドのセットアップ:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. Amplifyプロジェクトを初期化およびデプロイ:
    ```bash
    cd frontend
    amplify init
    amplify add storage
    amplify add api
    amplify push
    ```

4. Reactアプリケーションを起動:
    ```bash
    npm install
    npm start
    ```

## 使用方法

- ファイル入力を使用して画像をアップロードします。
- アップロードされた画像はAmazon Rekognitionで処理されます。
- 検出されたラベルがページに表示されます。


