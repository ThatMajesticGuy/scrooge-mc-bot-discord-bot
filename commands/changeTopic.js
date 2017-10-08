const Discord = require('discord.js');

exports.run = (bot, message) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("Tell what you want the channel's topic to be!")
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(`Sucessfuly changed the channel's topic to ***${args}***`))
  .catch(console.error);
};
