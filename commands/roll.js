const Roll = require('roll');
const roller = new Roll();
const Discord = require('discord.js');

exports.run = function (bot, msg, args) {
      var roll = Math.floor(Math.random() * 30) + 1;
    message.reply(" 🎲 You rolled a " + roll);
