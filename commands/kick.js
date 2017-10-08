const Discord = require('discord.js');
const config = require("./config.json");


exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`__**Access Denied**__\nYou must have __KICK_MEMBERS__ perms to use this command.`);

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
   if(member.id == config.ownerID) return message.channel.send("You shall not kick the all mighty majestic!")
    if(!member.bannable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
  
        const channel = member.guild.channels.find('name', 'mod-log');
      if (!channel) return message.reply("Make sure you have a channel called mod-log!");

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason} \n https://gyazo.com/af59ec17c89eec2c02bbc13dcb38a842`);
    var embed = new Discord.RichEmbed()
    .setTitle("Kick")
    .setColor("#80d4ff")
    .addField(`${member.user.tag} has been kicked`, `has been kicked by ${message.author.tag}`)
    .addField("The reason is:", `${reason}`)
    channel.send({ embed: embed });
  };
