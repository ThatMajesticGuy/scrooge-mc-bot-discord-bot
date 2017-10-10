const Discord = require('discord.js');

exports.run = (bot, message, args) => {
var textArray = [
"You flipped a head 😆",
"You flipped a tail! 🐿️"
];
  var hi = Math.floor(Math.random()*textArray.length);
  message.channel.send(`${textArray[hi]}`)
};
