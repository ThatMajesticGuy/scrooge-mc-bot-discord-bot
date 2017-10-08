const Discord = require('discord.js');

exports.run = (bot, message, args) => {

let member = message.mentions.members.first();
if(!member) return message.reply("My dude, you need to mention somone to mute them")
let muteRole = message.guild.roles.find("name", "Muted");
if(!muteRole) return message.reply("Make a role called Muted rn my dud");
member.addRole(muteRole.id);
const channel = member.guild.channels.find('name', 'mod-log');
if (!channel) return message.reply("Make sure you have a channel called mod-log!");
var embed = new Discord.RichEmbed()
.setTitle("Mute")
.setColor("#ff751a")
.addField(`${member.user.tag} has been muted`, `Been muted by ${message.author.tag}`)
.addField("User's ID", `${member.id}`)
channel.send({ embed: embed });
member.send(`You have been muted in ${message.guild.name}`)
};
