const Discord = require('discord.js')

exports.run = (bot, message) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("Tell what you want the channel's name to be!");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`The new channel's name is ***${args}***`))
  .catch(console.error);
};
