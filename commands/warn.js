const Discord = require('discord.js')
const config = require("./config.json");

exports.run = (bot, message) => {
  var args = message.content.split(' ').slice(2).join(' ');
  if (!args) return message.reply("What was the user doing that needed to be warned?")
let user = message.mentions.users.first()
if (!user) return message.reply("Mention someone to warn them!")
  if(user.id == config.ownerID) return message.channel.send("You shall not warn the all mighty majestic!")
message.channel.send(`***${user}*** has been warned!`)
user.send(`You have been warned in ***${message.guild.name}*** for ***${args}***`)
const channel = message.guild.channels.find('name', 'mod-log');
if (!channel) return message.reply("Make a channel called #mod-log!")
var embed = new Discord.RichEmbed()
.setTitle("Warn")
.addField(`${user.tag} has been warned`, `Has been warned by ${message.author.tag}`)
.addField("User's ID", `${user.id}`)
channel.send({ embed: embed });
};
