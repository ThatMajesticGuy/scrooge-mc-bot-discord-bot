const Discord = require('discord.js');


exports.run = (bot, message, args) => {
  message.delete()
  const millis = new Date().getTime() - message.guild.createdAt.getTime();
const days = millis / 1000 / 60 / 60 / 24;

const owner = message.guild.owner.user || {};

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
  var sender = message.author
  let embed = new Discord.RichEmbed()
    .setColor("#80d4ff")
    .addField("Username + tag", `Happy Bot#9824`)
    .addField("ID", `354400650647437313`)
    .addField("Created At", `04 Sep 17 23:01 UTC`)
    .addField("Ping", `${message.createdTimestamp - message.createdTimestamp}ms`)
    .addField(`Users in ${message.guild.name} `, `${bot.users.size}`)
    .addField(`${message.guild.name} Created On:`, `${message.guild.createdAt}`)
  message.channel.sendEmbed(embed);
}
