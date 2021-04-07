# Invoice Checker

一個使用 Node.js + Vue.js 打造的發票兌獎網站，使用者於網站選擇兌獎月份及輸入發票末三碼，即可回傳是否中獎、中獎金額等資訊，並會自動紀錄兌獎次數、中獎次數。
![image](https://github.com/yunhsuanchin/Invoice_checker/blob/master/Xnip2021-04-07_11-37-09.jpg)

[Heroku deploy](https://limitless-island-44228.herokuapp.com)

[前端 repository](https://github.com/yunhsuanchin/invoice_checker_frontend)

### 環境建置需求

---

- Node.js: v10.15.0
- npm: 7.8.0
- nodemon: 2.0.4
- express: 4.17.1
- body-parser: 1.19.0
- mongoDB: 3.6.11
- mongoose: 5.12.3
- dotenv: ^8.2.0

### 安裝

---

1. 開啟終端機 (Terminal)，clone 此專案至本機電腦
<p><code>git clone https://github.com/yunhsuanchin/Invoice_checker.git</code></p>

2. 進入專案資料夾
<p><code>cd Invoice_checker</p></code>

3. 透過 robo 3T 操作 mongoDB，與本機 localhost: 27017 建立連線，並建立名稱為 invoice-checker 的資料夾

4. 在終端機輸入 npm run seed，透過 nodemon 執行種子資料
<p><code>npm run seed</p></code>

5. 在終端機輸入 npm run dev，透過 nodemon 執行 app.js，建立資料庫連線，並啟動 local server 監聽

### API Documentation

---

- 查詢發票號碼是否中獎

**POST / https://fathomless-journey-79826.herokuapp.com/**

**Parameters**

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| checkingMonth  | String | Required    |
| checkingNumber | String | Required    |

**Response**

```
{
    "status": "success",
    "invoice": "39993297",
    "isWinner": true,
    "amount": 2000000
}
```
