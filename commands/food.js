const Discord = require('discord.js');
var randomCat = require('random-cat');

exports.run = (bot, message, args) => {
  var urlOfPeople = randomCat.get({
    category: 'food'
  });
  message.channel.send(`${urlOfPeople}`)
}
