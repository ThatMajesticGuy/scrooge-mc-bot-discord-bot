const Discord = require('discord.js')
const config = require("./config.json");

exports.run = (bot, message, args, channel) => {
    var args2 = message.content.split(' ').slice(2).join(' ');
  if (!args2) return message.reply("What was the user doing that needed to be warned?")
let user = message.mentions.users.first()
if (!user) return message.reply("Mention someone to warn them!")
message.channel.send(`***${user}*** has been warned!`)
user.send(`You have been warned in ***${message.guild.name}*** for ***${args2}***`)
var embed = new Discord.RichEmbed()
.setTitle("Warn")
.setColor("#80d4ff")
.setThumbnail(`${user.displayAvatarURL}`)
.addField(`${user.tag} has been warned by ${message.author.tag}`, `Reason being is ${args2}`)
.addField("User's ID", `${user.id}`)
channel.send({ embed: embed });
};
