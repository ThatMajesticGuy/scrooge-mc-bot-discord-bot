const dateFormat = require('dateformat');
const Discord = require('discord.js');
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.run = async (bot, msg) => {
    if (!msg.guild) {
        throw 'This can only be used in a guild!';
    }

    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;

    const owner = msg.guild.owner.user || {};

    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  
  if (!msg.guild.iconURL) {
    var embed = new Discord.RichEmbed()
    .setTitle(`${msg.guild.name}`, "This is the servers info!")
    .setColor(randomColor)
    .addField("Created On", `${dateFormat(msg.guild.createdAt)}`, true)
    .addField("Region", `${msg.guild.region}`, true)
    .addField("User Count", `${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`, true)
    .addField("Owner", `${owner.username || 'None'}`, true)
    .addField("Text Channels Count", `${msg.guild.channels.filter(m => m.type === 'text').size}`, true)
    .addField("Voice Channels Count", `${msg.guild.channels.filter(m => m.type === 'voice').size}`, true)
    .addField("Verification Level", `${verificationLevels[msg.guild.verificationLevel]}`, true)
    .addField("Roles Count", `${msg.guild.roles.size}`, true)
    .addField("Guild ID", `${msg.guild.id}`, true)
    msg.channel.send({ embed: embed });
} else {
    var embed2 = new Discord.RichEmbed()
    .setTitle(`${msg.guild.name}`, "This is the servers info!", true)
    .setColor(randomColor)
    .setThumbnail(`${msg.guild.iconURL}`, true)
    .addField("Created On", `${dateFormat(msg.guild.createdAt)}`, true)
    .addField("Region", `${msg.guild.region}`, true)
    .addField("User Count", `${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`, true)
    .addField("Owner", `${owner.username || 'None'}`, true)
    .addField("Text Channels Count", `${msg.guild.channels.filter(m => m.type === 'text').size}`, true)
    .addField("Voice Channels Count", `${msg.guild.channels.filter(m => m.type === 'voice').size}`, true)
    .addField("Verification Level", `${verificationLevels[msg.guild.verificationLevel]}`, true)
    .addField("Roles Count", `${msg.guild.roles.size}`, true)
    .addField("Guild ID", `${msg.guild.id}`, true)
    msg.channel.send({ embed: embed2 });
  }};
