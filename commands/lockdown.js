const ms = require('ms');
const Discord = require('discord.js');

exports.run = (bot, message, args, channel) => {
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock']
  const channel = message.guild.channels.find('name', 'mod-log');
  if (!channel) return message.reply("Make sure you have a channel called mod-log!");
  if (!time) return message.reply("You need the duriation of the time in either seconds, minutes, or hours");
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send("Lockdown has ended, you are now freely to send messages");
      clearTimeout(bot.lockit[message.channel.id]);
    }).catch(error => {
console.log(error);
});
} else {
  message.channel.overwritePermissions(message.guild.id, {
    SEND_MESSAGES: false
    }).then(() => {
    message.channel.send(`Alrighty! Lockdown has started for this channel for ${ms(ms(time), { long:true })}`)
    var embed = new Discord.RichEmbed()
    .setTitle("Lockdown")
    .setColor("#80d4ff")
    .setThumbnail("http://www.streetgangs.com/wp-content/uploads/2010/03/behind_bars_xsmall.jpg")
    .addField(`Lockdown by ${message.author.username}`, `Lasts for ${ms(ms(time), { long:true })}`)
channel.send({ embed: embed }).then(() => {

      bot.lockit[message.channel.id] = setTimeout(() => {
        message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      }).then(message.channel.send("Lockdown has ended, you are now freely to send what you want"))
      delete bot.lockit[message.channel.id];
    }, ms(time));
  var embed2 = new Discord.RichEmbed()
  .setTitle("Lockdown Ended")
.setColor("#80d4ff")
  .setThumbnail("https://news.pindula.co.zw/wp-content/uploads/2017/01/Prison-break.jpg")
  .addField("Lockdown has ended", "Users are free to talk")
  channel.send({ embed: embed2 })
  }).catch(error => {
    console.log(error)
  });
});
    }};
