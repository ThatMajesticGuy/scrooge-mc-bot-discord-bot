const Discord = require('discord.js');
const config = require("./config.json");

exports.run = (bot, message) => {
  var embed = new Discord.RichEmbed()
  .setTitle("Restricted")
  .setColor("#f45f42")
  .addField("You are restricted from this command", "Its for the bot owner only!")
  if(message.author.id !== config.ownerID) return message.channel.send({ embed: embed });
  var args2 = message.content.split(' ').slice(1).join(' ');
  message.reply(":ok_hand: reset my game")
  bot.user.setGame("Type sc!help for help!")
};
