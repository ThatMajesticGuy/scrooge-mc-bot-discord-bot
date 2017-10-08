const Discord = require('discord.js');

exports.run = (bot, message) => {
  let member = message.mentions.members.first();
  if (!member) return message.reply("Mention someone to unmute them!")
const muted = message.guild.roles.find('name', 'Muted');
member.removeRole(muted.id)
message.channel.send("User has been unmuted!")
member.send(`You have been unmuted from ***${message.guild.name}*** by ${message.author.name}`)
};
