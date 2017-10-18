const Discord = require('discord.js');

exports.run = (bot, message, args, channel) => {
  let member = message.mentions.members.first();
  if (!member) return message.reply("Mention someone to unmute them!")
const muted = message.guild.roles.find('name', 'Muted');
member.removeRole(muted.id)
message.channel.send("User has been unmuted!")
member.send(`You have been unmuted from ***${message.guild.name}*** by ${message.author.name}`)
  var embed = new Discord.RichEmbed()
  .setTitle("Unmuted")
  .setColor("#80d4ff")
  .setThumbnail(`${member.displayAvatarURL}`)
  .addField(`${member.username} has been unmuted`, `${member.username} is now free to talk`)
  channel.send({ embed : embed })
};
