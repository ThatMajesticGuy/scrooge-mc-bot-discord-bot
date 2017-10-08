const Discord = require('discord.js');

exports.run = (bot, message) => {
  var guilds = {};
  try{
      if (!guilds[message.guild.id]) {
          guilds[message.guild.id] = {
              prefix: "sc!" // default prefix, change it to fit your needs
          };
      }
  } catch (e) {
    console.log(e);
  }

  if (message.author.bot) return; // ignore any bots
  const prefix = guilds[message.guild.id].prefix; // multi-guild (will come back to this later)
  const args = message.content.split(" ");
  let command = args[0];
  command = command.slice(prefix.length);
  if(!message.content.startsWith(prefix)) return; // ignore messages without a prefix
  if(message.channel.type === 'dm') return message.reply("You cant use me in PM."); // prevent commands via dm



if (command === "setPrefix") {
  if (!args) return message.reply("There is no prefix defined!")
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`__**Access Denied**__\nYou must have __MANAGE_GUILD__ perms to use this command.`); // Checks for permissions to change the prefix
  const newPrefix = args.slice(1).join(" "); // define the prefix
  guilds[message.guild.id].prefix = newPrefix; // set the prefix
  message.channel.send(`The prefix for **${message.guild.name}** is now **${newPrefix}**`); // reply with the new sexy prefix!
}};
