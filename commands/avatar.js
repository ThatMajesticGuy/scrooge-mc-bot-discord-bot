const Discord = require('discord.js')

exports.run = async (bot, msg) => {
  const user = message.mentions.users.first();
if (!user) {
  var embed = new Discord.RichEmbed()
  .setTitle("Link")
  .setColor("#4286f4")
  .setURL(message.author.avatarURL)
  .setThumbnail(message.author.displayAvatarURL)
  message.channel.send({ embed: embed })
} else {
  var embed2 = new Discord.RichEmbed()
  .setTitle("Link")
  .setColor("#4286f4")
  .setURL(user.avatarURL)
  .setThumbnail(user.displayAvatarURL)
  message.channel.send({ embed: embed2 })
};
