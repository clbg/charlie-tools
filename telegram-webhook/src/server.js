const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN || "YOUR_TELEGRAM_BOT_TOKEN";
const userIds = process.env.USER_ID.split(",");

const bot = new TelegramBot(token, { polling: true });

const app = express();
const port = 3000;
app.get("/", (req, res) => {
    const dateString = new Date().toLocaleString();
    res.send(`${dateString},Alert sent!`);
    console.error(`${dateString},Alert sent!`);
    userIds.forEach((id) => {
        bot.sendMessage(
            id,
            `https://www.apple.com.cn/shop/refurbished/mac/macbook-air`
        );
    });
});

app.get("/f", (req, res) => {
    const dateString = new Date().toLocaleString();
    res.send(`${dateString},no update!`);
    console.error(`${dateString},no update!`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
