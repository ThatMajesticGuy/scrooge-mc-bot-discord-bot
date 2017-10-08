const Discord = require('discord.js');
var randomCat = require('random-cat');

exports.run = (bot, message, args) => {
  var url = randomCat.get();
  message.channel.send(`${url}`)
}
