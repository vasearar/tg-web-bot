const TelegramBot = require('node-telegram-bot-api');

const token = "7473645615:AAFDVcGo83EdUl_VNWkkw2_PMwvotnoKHYs";
const webAppUrl = "https://frolicking-buttercream-e172fd.netlify.app";
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === '/start') {
    await bot.sendMessage(chatId , 'Mouse Clicker', {
      reply_markup: {
        inline_keyboard: [
          [{text:'Open web app', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

});