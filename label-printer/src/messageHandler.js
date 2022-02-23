const TelegramBot = require("node-telegram-bot-api");

var pdfGenerator = require("./pdfGenerator");
var validator = require("validator");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN || "YOUR_TELEGRAM_BOT_TOKEN";

const argumentValidator = (msg) => {
    var ans = {
        isGood: true,
        errorMsg: "",
        i: 0,
        j: 0,
        text: "",
    };
    splitArg = msg.split(" ");
    if (splitArg.length < 3) {
        return {
            ...ans,
            errorMsg: "arg have to be 3",
            isGood: false,
        };
    }
    var argI = splitArg[0];
    var argJ = splitArg[1];
    var argText = splitArg[2];

    if (!validator.isInt(argI, { min: 0, max: 7 })) {
        return {
            ...ans,
            errorMsg: "first arg >=0 <=7",
            isGood: false,
        };
    } else {
        ans = {
            ...ans,
            i: parseInt(argI),
        };
    }
    if (!validator.isInt(argJ, { min: 0, max: 1 })) {
        return {
            ...ans,
            errorMsg: "second arg >=0 <=1",
            isGood: false,
        };
    } else {
        ans = {
            ...ans,
            j: parseInt(argJ),
        };
    }

    if (!validator.isLength(argText, { min: 0, max: 16 })) {
        return {
            ...ans,
            errorMsg: "text should less than 16 chars",
            isGood: false,
        };
    } else {
        ans = {
            ...ans,
            text: argText,
        };
    }

    return {
        ...ans,
    };
};
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/label [whatever]"
bot.onText(/\/label (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    const validateAns = argumentValidator(resp);

    console.log("parsingMsg", resp, validateAns);
    if (!validateAns.isGood) {
        bot.sendMessage(chatId, validateAns.errorMsg);
    } else {
        bot.sendMessage(
            chatId,
            `printing message "${validateAns.text}" on row ${validateAns.i}, column ${validateAns.j}`
        );

        const gen = new pdfGenerator();
        gen.setText(validateAns.i, validateAns.j, validateAns.text);

        gen.save("tmpfile.pdf");
        bot.sendMessage(chatId, "saved pdf...");
    }
});
