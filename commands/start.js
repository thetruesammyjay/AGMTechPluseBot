const { Markup } = require('telegraf');

module.exports = (ctx) => {
  const welcomeMessage = `
  **Welcome to AGM Tech Pluse! 🎉**
  
  We provide practical, hands-on training that prepares you for the future of work.
  
  Please select a training program to learn more:
  `;

  // Inline keyboard reflecting the website's training categories
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('💻 Web Development', 'training_webdev')],
    [Markup.button.callback('🎨 Graphics Design', 'training_graphics')],
    [Markup.button.callback('🤖 No-Code Automation', 'training_nocode')],
    [Markup.button.callback('📈 Digital Marketing', 'training_digitalmarketing')]
  ]);

  ctx.replyWithMarkdown(welcomeMessage, keyboard);
};