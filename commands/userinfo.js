const Discord = require('discord.js')

exports.run = (bot, message) => {


 let user = message.mentions.users.first() || message.author
let member = message.guild.member(user)
let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
let messageauthor = message.guild.member(message.author)
let authorroles = message.guild.member(message.author).roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name)
if (roles.length < 1) roles = ['None']
const status = {
   online: 'Online', 
   idle: 'Idle',
   dnd: 'Do Not Disturb',
   offline: 'Offline/Invisible'
 };
  let botuser; 
  if (member.user.bot === true) botuser = 'Yes'
  else botuser = 'No'
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  
  
  if (!user) {
  	
  	
let embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setThumbnail(`${message.author.displayAvatarURL}`, true)
  .addField("Username + tag", `${message.author.message.username}#${message.author.discriminator}`, true)
  .addField("ID", `${message.author.id}`, true)
  .addField("Created At", `${message.author.createdAt}`, true)
  .addField("Status", `${status[message.author.presence.status]}`, true)
  .addField("Last Message", `${(message.author.lastMessage) || 'Has not said a message yet.'}`, true)
  .addField("Joined On", `${messageauthor.joinedAt}`)
  .addField("Playing", `${(message.author.presence.game && message.author.presence.game && message.author.presence.game.name) || 'Not playing a game.'}`, true)
  .addField("Nickname", `${message.member.displayName}`, true)
  .addField("Roles", `${roles.join(', ')}`, true)
  .addField("Bot?", `${botuser}`, true)
message.channel.send({embed});
} else {
	let botuser;
  if (member.user.bot === true) botuser = 'Yes'
  else botuser = 'No'
	let embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setThumbnail(`${user.displayAvatarURL}`, true)
  .addField("Username + tag", `${user.username}#${user.discriminator}`, true)
  .addField("ID", `${user.id}`, true)
  .addField("Created At", `${user.createdAt}`, true)
  .addField("Status", `${status[user.presence.status]}`, true)
  .addField("Last Message", `${(user.lastMessage) || 'Has not said a message yet.'}`, true)
  .addField("Joined On", `${member.joinedAt}`, true)
  .addField("Playing", `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`, true)
  .addField("Roles", `${roles.join(', ')}`, true)
  .addField("Bot?", `${botuser}`, true)
message.channel.send({embed});
}};
