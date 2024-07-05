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




