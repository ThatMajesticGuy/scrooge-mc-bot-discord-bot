const Discord = require('discord.js');


exports.run = (bot, message, args) => {
    if (!args) return message.reply("You must suggest something to ThatMajesticGuy!")

if (message.channel.type === 'dm') return;
    var args2 = message.content.split(' ').slice(1).join(' ');
    const channel3 = bot.users.get('355046976146112512')
    channel3.send('', {
      embed: {
        color: 654456,
        author: {
          name: "A Suggestion has been posted",
          icon_url: message.author.avatarURL,
        },
        title: "Suggestion",
        description: `__**sent in**__
**${message.guild.name}**

__**Context**__
**${args2}**

__**Sender**__
${message.author.tag}`,

}})};
