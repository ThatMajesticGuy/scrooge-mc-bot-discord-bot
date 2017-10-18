const Discord = require('discord.js')
const config = require("./config.json");

exports.run = (bot, message, args, channel) => {
  if (!args) return message.reply("What was the user doing that needed to be warned?")
let user = message.mentions.users.first()
if (!user) return message.reply("Mention someone to warn them!")
  if(user.id == config.ownerID) return message.channel.send("You shall not warn the all mighty majestic!")
message.channel.send(`***${user}*** has been warned!`)
user.send(`You have been warned in ***${message.guild.name}*** for ***${args}***`)
var embed = new Discord.RichEmbed()
.setTitle("Warn")
.setColor("#80d4ff")
.setThumbnail(`${user.displayAvatarURL}`)
.addField(`${user.tag} has been warned`, `Has been warned by ${message.author.tag}`)
.addField("User's ID", `${user.id}`)
channel.send({ embed: embed });
};
