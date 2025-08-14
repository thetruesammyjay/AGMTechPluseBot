const { Telegraf } = require('telegraf');
require('dotenv').config();

// Import command handlers
const startCommand = require('./commands/start');
const webdevCommand = require('./commands/training_webdev');
const graphicsCommand = require('./commands/training_graphics');
const aiautomationCommand = require('./commands/training_nocode');

// Check for the bot token
const botToken = process.env.BOT_TOKEN;
if (!botToken) {
  console.error('Error: BOT_TOKEN is not set in the .env file.');
  process.exit(1);
}

const bot = new Telegraf(botToken);

// Register command handlers
bot.start(startCommand);
bot.command('webdev', webdevCommand);
bot.command('graphics', graphicsCommand);
bot.command('aiautomation', aiautomationCommand);

// Register inline button handlers (using the same logic as the commands)
bot.action('training_webdev', webdevCommand);
bot.action('training_graphics', graphicsCommand);
bot.action('training_nocode', aiautomationCommand);

// A simple handler for all other text messages
bot.on('text', (ctx) => {
  ctx.reply("I'm sorry, I don't understand that command. Please use one of the commands from the menu or type /start to see the main menu.");
});

// Launch the bot
bot.launch()
  .then(() => console.log('AGM Tech Pulse Bot is running!'))
  .catch(err => console.error('Error launching bot:', err));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));