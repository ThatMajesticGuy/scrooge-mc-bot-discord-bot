const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  var splitter = message.content.split("|");
  var split1 = splitter[1];
  var split2 = splitter[2];

  if (!split1) return message.reply("Add a command that you would like to have, remember that the way to do this command is `>addcommand | command | execution`");
  if (!split2) return message.reply("Add what you want it to execute, remember that the way to do this command is `>addcommand | command | execution`")
message.reply(`Horray! ${split1} is now a command and it executes ${split2}`)
message.channel.awaitMessages(response => response.content === `${split1}`, {
  max: Infinity,
  time: Infinity,
  errors: ['time'],
})
.then((collected) => {
    message.channel.send(`${split2}`);
  });
};
