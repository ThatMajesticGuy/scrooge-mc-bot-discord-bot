const Discord = require('discord.js');

exports.run = (bot, message) => {
  var args2 = message.content.split(' ').slice(1).join(' ');
  message.channel.send(args2)
};
