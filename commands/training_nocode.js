const courses = require('../data/courses.json');
const { Markup } = require('telegraf');

module.exports = (ctx) => {
  const course = courses.training.find(c => c.id === 'nocode');
  if (!course) {
    return ctx.reply('Sorry, information for this course is not available yet.');
  }

  const message = `
  **${course.name}**
  
  ${course.description}
  
  **Covers:**
  - ${course.details.join('\n  - ')}
  
  **Price:** ${course.price}
  **Duration:** ${course.duration}
  `;

  const keyboard = Markup.inlineKeyboard([
    Markup.button.url('Enroll Now', 'https://agmtechpluse.net/contact.php')
  ]);

  ctx.replyWithMarkdown(message, keyboard);
};