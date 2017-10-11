const Discord = require('discord.js')

exports.run = (bot, message, args) => {
let user = message.mentions.users.first()
if (!user) return message.reply("You need to mention the gay man!")
var embed = new Discord.RichEmbed()
.setTitle(":kiss_mm:")
.setColor("#ff96ea")
.addField(`Hey everyone! ${message.author.username} is gay with ${user.username}!`)
message.channel.send({ embed: embed });
};
