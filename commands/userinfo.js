const Discord = require('discord.js')

exports.run = (bot, message) => {


let user = message.mentions.users.first()
let member = message.guild.member(user)
let member2 = message.guild.member(message.author)
const status = {
   online: 'Online',
   idle: 'Idle',
   dnd: 'Do Not Disturb',
   offline: 'Offline/Invisible'
 };

  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  if (!user) {
let embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .addField("Username + tag", `${message.author.username}#${message.author.discriminator}`)
  .addField("ID", `${message.author.id}`)
  .addField("Created At", `${message.author.createdAt}`)
  .addField("Status", `${status[member2.presence.status]}`, true)
  .addField("Last Message", `${(message.author.lastMessage) || 'Has not said a message yet.'}`)
  .addField("Joined On", `${member2.joinedAt}`)
  .addField("Playing", `${(message.author.presence.game && message.author.presence.game && message.author.presence.game.name) || 'Not playing a game.'}`)
message.channel.sendEmbed(embed);
} else {
  let embed2 = new Discord.RichEmbed()
  .setColor(randomColor)
  .setThumbnail(`${user.displayAvatarURL}`)
  .addField("Username + tag", `${user.username}#${user.discriminator}`)
  .addField("ID", `${user.id}`)
  .addField("Created At", `${user.createdAt}`)
  .addField("Status", `${status[member.user.presence.status]}`, true)
  .addField("Last Message", `${(user.lastMessage) || 'Has not said a message yet.'}`)
  .addField("Joined On", `${member.joinedAt}`)
  .addField("Playing", `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`)
message.channel.sendEmbed(embed2);
};
};
